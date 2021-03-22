const express = require('express');
const passport = require("passport");
const router = express.Router();
const chalk = require('chalk');


router.get("/github", passport.authenticate("github", { scope: ["profile"] }), (req, res) => {
    console.log(chalk.red("Wasnt meant to run"));
})

router.get("/github/dashboard", passport.authenticate("github", { failureRedirect: "http://localhost:3000/" }), (req, res) => {
    res.redirect("http://localhost:3000/");
})

router.get("/logout",(req,res)=>{
    console.log(chalk.cyan("loggedout user"));
    req.logout();
    res.redirect("/");
})




module.exports = router;