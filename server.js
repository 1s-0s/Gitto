const express = require("express");
const passport = require("passport");
const chalk = require("chalk");
const session = require("express-session");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const auth = require("./routes/auth");
const userinfo = require("./routes/userinfo");
const mongoose = require("mongoose");
const morgan = require("morgan"); //HTTP logger
const cors = require("cors");
//dotenv configuration
require("dotenv").config();
//database
require("./models/User");
//github authentication
require("./passport/githubConfig");

const PORT = process.env.PORT || 5000;
//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    (err) => {
        if (!err)
            console.log(chalk.yellow("database is connected"));
        else
            console.log(chalk.red("Error:", err));
    }
);

const app = express();
app.use(
    cors({
         origin: "http://localhost:3000", // allow to server to accept request from different origin
         methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
         credentials: true, // allow session cookie from browser to pass through
   })
);
// HTTP request logger
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({
    secret: "samber_dosa",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000
    }
}));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", auth);
app.use("/userinfo", userinfo);

//! app.use(express.static)

app.listen(PORT, () => {
    console.log(chalk.blue("Server is running boiss"));
})
