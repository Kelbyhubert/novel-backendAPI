const express = require("express");
const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose")
const User = require("./models/user.model");
const userRoutes = require("./routes/user.route");
const novelRoutes = require("./routes/novel.route");



const app = express();

const port = 3000 || process.env.PORT;


// setting buat session
const sessionConfig = {
    secret: 'secret496!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}


//buat baca body form
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//masukan session ke passport untuk dibikin session
app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

// buat authnya
passport.use(new localStrategy(User.authenticate()));



passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//route
app.use("/", userRoutes);
app.use("/novel",novelRoutes);






//tester
app.get("/", (req,res) => {
    res.json("hello");    
}
);





app.listen(port,() => {
    console.log(`connect to ${port}`);
})