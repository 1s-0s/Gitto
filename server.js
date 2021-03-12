const express = require("express");
const passport = require("passport");
const chalk = require("chalk");
const session = require("express-session");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const auth = require("./routes/auth");
const mongoose = require("mongoose");
const e = require("express");

require("./models/User");
require("./passport/githubConfig");

mongoose.connect(
    "mongodb+srv://RitiksDB:Ritik@307@gitto.irar2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true,useUnifiedTopology: true },
    (err) => {
        if(!err)
            console.log(chalk.yellow("database is connected"));
        else
            console.log(err);
    }
);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({
    secret: "samber_dosa",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session())
app.use("/", auth);
//app.use("/auth/github/dashboard", auth);

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
