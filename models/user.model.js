const mongoose = require("mongoose");
const passport = require("passport-local-mongoose");
const Schema = mongoose.Schema;


const userModel = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        required: true,
        type: String
    },
    isAdmin: {
        type: Boolean,
        default : false
    }

});

userModel.plugin(passport);

const User = mongoose.model("User",userModel);


module.exports = User;