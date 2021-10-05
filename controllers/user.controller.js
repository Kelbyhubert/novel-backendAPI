const db = require("../models");


const userController = {
    register: async (req,res ,next) => {
        
        console.log(req.body)
        const {username , email , password} = req.body;
        const newUser = new db.User({username,email});
        const registerNewUser = await db.User.register(newUser, password)
        console.log(registerNewUser);
        res.status(200).json(registerNewUser);

    },
    login: (req,res) => {

        res.json("welcome");

    }

};

module.exports = userController;