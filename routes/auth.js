const express = require('express');
const passport = require("passport");
const router = express.Router();
const chalk = require('chalk');


router.get("/auth/github", passport.authenticate("github", { scope: ["profile"] }), (req, res) => {
    console.log(chalk.red("Wasnt ment to run"));
})

router.get("/auth/github/dashboard", passport.authenticate("github", { failureRedirect: "http://localhost:3000/" }), (req, res) => {
    console.log(chalk.green("successfully callback"));
    res.redirect("http://localhost:3000/#/dashboard");
})

module.exports = router;