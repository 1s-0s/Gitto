const express = require('express');
const passport = require("passport");
const router = express.Router();
const chalk = require('chalk');
const session = require("express-session");
// function generateToken(req,res){
//     const accessToken = token.generateAccessToken(req.user.id);
//     res.render('authenticated.html',{
//         token:accessToken
//     })
// }


router.get("/auth/github", passport.authenticate("github", { scope: ["profile"] }), (req, res) => {
    console.log(chalk.red("Wasnt meant to run"));
})

router.get("/auth/github/dashboard", passport.authenticate("github", { failureRedirect: "http://localhost:3000/" }), (req, res) => {
    console.log(chalk.green("checking user print"));
    console.log(req.user);
    // console.log(chalk.magenta("githubid of user : ",req.user.githubId));
    // console.log(chalk.magenta("id of user : ",req.user.id));
    res.cookie("userid", req.user.githubId);
    // console.log(chalk.green("successfully callback"));
    res.redirect("http://localhost:3000/#/dashboard");
    //res.json({user:"hello"});
})
router.get('/auth/logout', (req, res) => {
    // req.logout();
    // res.status(200).clearCookie("connect.sid", {
    //     path: '/',
    //     httpOnly: true
    // });
    req.session.destroy((err) => {
        if (err) {
            console.log(chalk.yellow("error:", err))
        }
        else {
            req.logout();
            res.status(200).clearCookie("connect.sid", {
                path: '/',
                httpOnly: true
            });
            res.redirect('/');
        }
    });
    // res.redirect('/');
});

module.exports = router;