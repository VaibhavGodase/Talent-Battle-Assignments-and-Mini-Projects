require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const path = require("path")
const hbs = require("hbs")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const auth = require("./middleware/auth")

require("./db/conn")
const Register = require("./models/registers")


const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "/templates/views")
const partials_path = path.join(__dirname, "/templates/partials")


app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

// console.log("this is a env key :" + process.env.SECRET_KEY);


app.get("/", (req, res) => {
    res.render("index")
})






///////////////////////////// authentication //////////////////////////////////////////////////////

// auth is a function we defind in auth.js ,  so when smeone goes to ./secret page , after this auth function is called and if auth function execute succsesfully then next argument in auth function sending execution of code back to the belows code and ,    res.render("secret") this page is render
app.get("/secret", auth, (req, res) => {
    // console.log("this is parser cookies " + req.cookies.ram);
    res.render("secret")
})


//////////////////////////////////////////////////////////////////////////////////////////////////////









///////////////////////////// Logout from authenticated pages ////////////////////////////////////////////

app.get("/logout", auth, async (req, res) => {


    try {





        ///////  ///////   /////////   ///////     //////////     ////////
        // if we want to delete the token of user who is logout then this code run

        // so , req.user.tokens means we know that req.user = user (check auth.js) , so that user object in mongodb database tokens ia a property which stores all tokens
        // so when we use filter method , (filter method parameters contain element, index no, array) so we here use element means for all elements function run seperately
        // currentElement.token,  means that element also a property called token ,  check mongodb database if confusion
        // so we return that tokens to req.user.tokens which not match current user token , means we does not return current user token
        // so now req.user.tokens which is a store in database do not have curent user token , so if req.user.tokens doesnt have  curent user token then we can not login and this  curent user token also be removed from  database

        // this is for logout in single device 
        // req.user.tokens = req.user.tokens.filter((currentElement) => {
        //     return currentElement.token !== req.token

        // })

        // this is for logout in all devices
        // here we just set the value of req.user.tokens = empty array so all tokens are deleted
        req.user.tokens = []

        ///////  ///////   /////////   ///////     //////////     ////////



        // this line delete the cookie ram so we can not see secret page
        res.clearCookie("sham")

        console.log("logout succcesfully");

        await req.user.save()


        res.render("login")

    } catch (error) {
        res.status(500).send(error)
    }
})



//////////////////////////////////////////////////////////////////////////////////////////////////////



app.get("/register", (req, res) => {
    res.render("register")
})



app.get("/login", (req, res) => {
    res.render("login")
})



app.post("/register", async (req, res) => {
    try {
        const password = req.body.password
        const cpassword = req.body.confirm_password

        if (password === cpassword) {

            const registeremployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                confirm_password: req.body.confirm_password
            })










            ////////////////////////////////////// JWT ///////////////////////////////////////////////////



            console.log(registeremployee);

            const token = await registeremployee.generateAuthToken()
            console.log(`this is app.js token : ${token}`);


            ////////////////////////////////////////////////////////////////////////////////////////////////









            ////////////////////////////////////// Cookies ///////////////////////////////////////////////


            // cookies are store your jwt token in browser , so you dont need to send manually all time ,
            // you can see your cookies in  microsoft edge , it is before your website path,  i mean
            http://localhost:3000/register  before this you seen  ' i '(visit site information ) option 



            // ram is the cookie name
            // new Date,  this is current time and date
            // Date.now() + 3000 , this means form current time and date to next 3 millisecond this cookie exist after that it expire
            res.cookie("ram", token, {
                expires: new Date(Date.now() + 11630),
                httpOnly: true
            })





            /////////////////////////////////////////////////////////////////////////////////////////////////////



            const registered = await registeremployee.save()
            res.status(201).render("index")

        } else {
            res.send("passwords are not match")
        }

    } catch (err) {
        res.status(400).send(err)

    }
})



app.post("/login", async (req, res) => {
    try {

        const email = req.body.email
        const password = req.body.password
        const useremail = await Register.findOne({ email: email })
        // here we are saying that in in Register collection find that document which email is equal to email = req.body.email,  means 1st eamil is fiels name and 2nd emails is this , email = req.body.email







        ////////////////////////////////////// Bcrypts ///////////////////////////////////////////////////

        // this below lines  is from bycrypt so uncomment when use bycrypt
        // when we encode password when registration and this encrypted password stored in database , but when we login with decoded pasword it does not match with encoded password, so thats why we use this
        // bcrypt.compare(password, useremail.password) here we compare our real decoded password , means this password in this  (password, useremail.password), and usermail.password is stored password in database
        // if password match , isMatch return true , if it doesont match it return false
        // so if password match then run this line , res.status(201).render("index") otherwise run else


        const isMatch = await bcrypt.compare(password, useremail.password)


        /////////////   ///////////  use JWT in login    //////////    //////////
        const token = await useremail.generateAuthToken()
        // console.log(`this is app.js token : ${token}`);
        ///////////    /////////////  ////////////   //////////    ///////////



        ///////////    ///////////// use Cookies in Login  ////////////   //////////    
        res.cookie("sham", token, {
            expires: new Date(Date.now() + 1113000),
            httpOnly: true
        })
        ///////////    /////////////  ////////////   //////////    ///////////





        ///////////    ///////////// Cookie parser  ////////////   //////////   

        // 1. cookie parser means , we can get the  cookie in vs studio  which are store in browser, so we can match with out jws token to authenticate user
        // 2. when you login then , " use Cookies in Login "this section code run and cookie create 
        // 3. and after when you click on secret option in navbar, http://localhost:3000/secret this routes  works and this route we console the cookie parse like this console.log("this is parser cookies " + req.cookies.ram);



        ///////////    /////////////  ////////////   //////////    ///////////


        if (isMatch) {
            res.status(201).render("index")
        } else {
            res.send("password are not matching")
        }



        //////////////////////////////////////////////////////////////////////////////////////////////////


        // if (useremail.password === password) {
        //     res.status(201).render("index")
        // } else {
        //     res.send("password are not matching")
        // }





    } catch (err) {
        res.status(400).send("Invalid Email")

    }
})



app.listen(port, () => {
    console.log(`listening on port : ${port}`);

})