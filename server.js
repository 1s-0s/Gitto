const express = require("express");
const passport = require("passport");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const auth = require("./routes/auth");
const userinfo = require("./routes/userinfo");
const mongoose = require("mongoose");
const morgan = require("morgan"); //HTTP logger
const cookieSession = require("cookie-session");
//dotenv configuration
require("dotenv").config();
//database
require("./models/User");
//github authentication
require("./passport/githubConfig");

const PORT = process.env.PORT || 5000;
//MONGOOSE CONNECTION
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    if (!err) console.log(chalk.hex("#BF68F6").bold("database is connected"));
    else console.log(chalk.red("Error:", err));
  }
);

const app = express();

// HTTP request logger
app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static('public'));

//?cookie session
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SESSION_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", auth);
app.use("/userinfo", userinfo);

//! app.use(express.static)

app.listen(PORT, () => {
  console.log(chalk.hex("#448EF6").bold("Server is running boiss"));
});
