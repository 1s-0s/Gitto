const express = require('express');
const passport = require("passport");
const router = express.Router();
const chalk = require('chalk');
// function generateToken(req,res){
//     const accessToken = token.generateAccessToken(req.user.id);
//     res.render('authenticated.html',{
//         token:accessToken
//     })
// }


router.get("/github", passport.authenticate("github", { scope: ["profile"] }), (req, res) => {
    console.log(chalk.red("Wasnt meant to run"));
})

router.get("/github/dashboard", passport.authenticate("github", { failureRedirect: "http://localhost:3000/" }), (req, res) => {
    //console.log(chalk.green("checking user print"));
    //console.log(req.user);
    // console.log(chalk.magenta("githubid of user : ",req.user.githubId));
    // console.log(chalk.magenta("id of user : ",req.user.id));

    // res.cookie("userid", req.user.githubId);
    
    // console.log(chalk.green("successfully callback"));
    res.redirect("http://localhost:3000/");
    //res.json({user:"hello"});
})

router.get("/logout",(req,res)=>{
    console.log(chalk.cyan("loggedout user"));
    req.logout();
    res.redirect("/");
})


// router.post('/logout', (req, res) => {
//     if(req.user){
//         console.log("session before: ",req.session);
//         req.session.destroy();
//         console.log("session after: ",req.session);
//         res.clearCookie("connect.sid");
//         // res.redirect("/github");
//         return res.json({message:"user successfully loggedout"});
//     }
//     else{
//         return res.json({message:"failed logging user out"});
//     }
// });

module.exports = router;