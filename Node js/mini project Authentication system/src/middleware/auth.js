const jwt = require("jsonwebtoken")
const Register = require("../models/registers")

const auth = async (req, res, next) => {
    try {

        // this is cookies name
        const token = req.cookies.sham


        // jwt.verify , are used to varify or compare or match cookies and jwt token key to ensure cookies are same which server send a jwt token, if this cookies doesnt match then this function not execute and sectret page is not render
        // process.env.SECRET_KEY,  is a secret key we use in a register.ja
        const varifyuser = jwt.verify(token, process.env.SECRET_KEY)



        // console.log(varifyuser);

        const user = await Register.findOne({ _id: varifyuser._id })
        // console.log(user);



        ////////// ////////// LogOut user ////////////////// ///////////    ///////////////     /////////

        // this means we set req.token = token and req.user = user , so we can aceess req.token and req.user  anywhere in code for different type  of use.
        req.token = token
        req.user = user

        ////////// //////////  ////////////////// /////////// /////////////    ///////////////    ////////


        // next () transfer the execution back to the code where auth function is called.
        next()














    } catch (error) {
        res.status(401).send(error)
    }

}
module.exports = auth