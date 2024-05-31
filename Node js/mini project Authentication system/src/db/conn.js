const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/youtubeRegistration")
    .then(() => {
        console.log("connection succsesful");

    }).catch((err) => {
        console.log(err);

    })