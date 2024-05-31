const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },


    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    confirm_password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]


})

////////////////////////////////////// JWT ///////////////////////////////////////////////////////////

//@@@@@@@ for more information read JWT.txt file @@@@@@@@@@@@@



employeeSchema.methods.generateAuthToken = async function () {
    try {
        // this._id means database store id
        // so when we register a new user, it create token with that id, generated in database

        // console.log(`this is register.js id : ${this._id}`);

        // here we generate token
        // mynameisvaibhavbaburaogodaseyoutuber , this is a secret key , means when we create token we add encoded secret key code with it , so use of this secret key code is : if someone create exact same token code (when secret code method is not present ) , then it can easily pass verify test and login ,  but when we add our encoded secret key code in token code so , that person doesnt know how how to create that encoded secret code , that why he doent pass varification,

        //@@@@@@@ for more information read JWT.txt file @@@@@@@@@@@@@



        // in this we use regular secret key
        // const token = jwt.sign({ _id: this._id.toString() }, "mynameisvaibhavbaburaogodaseyoutuber")

        // in this we use DOTENV secret key
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY)

        //here we add this generate token in database token field
        this.tokens = this.tokens.concat({ token: token })

        await this.save()
        // console.log(`this is register.js token :${token}`);
        return token

    } catch (error) {
        res.send("the error part " + error)
        console.log(res.send("the error part " + error));

    }
}



////////////////////////////////////// Bcrypts //////////////////////////////////////////////////////////


// Bycrypts use for encode password , because if hacker hack your database then he see your password , but when if we encrypted this he can not understand real password


//  pre means before , save means we use to save the collection, 
//  employeeSchema.pre("save", async function (next), means before saving employeeSchema run this function
// if (this.isModified("password")) means if password changes or new created run following lines
//      console.log(`the current password is : ${this.password}`); this is non encrypted password
//  this.password = await bcrypt.hash(this.password, 10),  means we encrypt of current password and store this in also current password so real passsword are change into encrypted password, 10 means layers of strong passwrd , if more layers gives more time to decode this password to hacker
//  console.log(`the current password is : ${this.password}`); this line is encrypted passsword
//   this.confirm_password = undefined , means our confirm_password shows in database without encoded form , so hacher can see it , thats why we does not store it.
// next() means after this, do next step ,this is save()

employeeSchema.pre("save", async function (next) {

    if (this.isModified("password")) {
        // console.log(`the current password is : ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10)
        // console.log(`the current password is : ${this.password}`);
        // this.confirm_password = undefined
        this.confirm_password = await bcrypt.hash(this.password, 10)
    }
    next()
})


const Register = new mongoose.model("Register", employeeSchema)
module.exports = Register