const express= require("express");
const router=express.Router();
const app = express();

// for github OAth
const cookieParser=require('cookie-parser');
const expressSession=require('express-session');
const crypto=require('crypto');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy
const {stringify} = require('flatted');
const _ = require('underscore');

app.use(cookieParser())
app.use(
    expressSession({
        secret: crypto.randomBytes(64).toString('hex'),
        resave: true,
        saveUninitialized:true  
    })
)

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user,done){
    done(null,user);
})
passport.deserializeUser(function(obj,done){
    done(null,obj)
})


//passport-github
let scopes = ['notifications','user:email','read:org','repo'];
passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/dashboard',
            scope:scopes.join(' ')
        },
        function(token,tokenSecret,profile,cb){
            return cb(null,{profile:profile,token:token})
        }
    )
)

module.exports=passport;