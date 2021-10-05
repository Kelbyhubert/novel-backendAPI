const express = require("express");
const passport = require("passport");
const userController = require("../controllers/user.controller")
const router = express.Router();

router.route("/register")
    .get((req,res) => { res.json("register")})
    .post(userController.register);



router.post("/Login", passport.authenticate("local"), userController.login);

router.get("/logout", (req,res) => {
    req.logout();
    res.send("logout");
})


module.exports = router;