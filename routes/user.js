const express= require("express");
const router=express.Router();
const app = express();

// for github OAth
const cookieParser=require('cookie-parser');
const expressSession=require('express-session');
const crypto=require('crypto');
const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy
const {stringify} = require('flatted');
const _ = require('underscore');


//passport-github
let scopes = ['notifications','user:email','read:org','repo'];
passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: 'http://localhost:5000',
            scope:scopes.join(' ')
        },
        function(token,tokenSecret,profile,cb){
            return cb(null,{profile:profile,token:token})
        }
    )
)

passport.serializeUser(function(user,done){
    done(null,user);
})
passport.deserializeUser(function(obj,done){
    done(null,obj)
})

app.use(passport.initialize())
app.use(passport.session());

app.use(cookieParser())
app.use(
    expressSession({
        secret: crypto.randomBytes(64).toString('hex'),
        resave: true,
        saveUninitialized:true  
    })
)