const express = require("express");
const passport = require("passport");
const chalk = require("chalk");
const session = require("express-session");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const GitHubStrategy = require("passport-github2").Strategy;

const GITHUB_CLIENT_ID = "7cd2a780b218a17d6194";
const GITHUB_CLIENT_SECRET = "83501798296561ca0147d1634900af29e845a493";

passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser((obj,done)=>{
    done(null,obj);
})

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/dashboard"
},function(accessToken,refreshToken,profile,done){
    process.nextTick(()=>{
        console.log(profile);
        return done(null,profile);
    })
}))


const app=express();

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({
    secret:"samber_dosa",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session())

//! app.use(express.static)

// app.get("/dashboard",(req,res)=>{
//     res.redirect("http://localhost:3000/dashboard");
// })

app.get("/auth/github",passport.authenticate("github",{scope:["profile"]}),(req,res)=>{
    console.log(chalk.red("Wasnt ment to run"));
})

app.get("/auth/github/dashboard",passport.authenticate("github",{failureRedirect:"http://localhost:3000/"}),(req,res)=>{
    console.log(chalk.green("successfully callback"));
    res.redirect("http://localhost:3000/#/dashboard");
})





app.listen(5000,()=>{
    console.log(chalk.blue("Server is running boiss"));
})