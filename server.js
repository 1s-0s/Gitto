const express = require("express");
const passport = require("passport");
const chalk = require("chalk");
const session = require("express-session");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const auth = require("./routes/auth");
const userinfo = require("./routes/userinfo");
const mongoose = require("mongoose");
<<<<<<< HEAD
const morgan = require("morgan"); //HTTP logger
=======
const morgan = require("morgan");
>>>>>>> 0bb3589af98dda02592438ca2c9439c388226cb2

//dotenv configuration
require("dotenv").config();
//database
require("./models/User");
//github authentication
require("./passport/githubConfig");


//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err)
            console.log(chalk.yellow("database is connected"));
        else
            console.log(chalk.red("Error:", err));
    }
);

const app = express();
// HTTP request logger
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({
    secret: "samber_dosa",
    resave: false,
    saveUninitialized: false,
    maxAge: 7*24*60*60*1000
}));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());
<<<<<<< HEAD
=======
app.use(morgan('tiny'));    // HTTP request logger
>>>>>>> 0bb3589af98dda02592438ca2c9439c388226cb2
app.use("/", auth);
app.use("/userinfo", userinfo);

//! app.use(express.static)

// app.get("/auth/github", passport.authenticate("github", { scope: ["profile"] }), (req, res) => {
//     console.log(chalk.red("Wasnt ment to run"));
// })

// app.get("/auth/github/dashboard", passport.authenticate("github", { failureRedirect: "http://localhost:3000/" }), (req, res) => {
//     console.log(chalk.green("successfully callback"));
//     res.redirect("http://localhost:3000/#/dashboard");
// })

app.listen(5000, () => {
    console.log(chalk.blue("Server is running boiss"));
})
