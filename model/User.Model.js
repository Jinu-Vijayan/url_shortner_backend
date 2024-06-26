const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String
    }
});

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;