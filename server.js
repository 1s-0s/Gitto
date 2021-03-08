const express= require('express');
const morgan=require('morgan'); //HTTP logger
const chalk=require('chalk'); // to change color of console
require('dotenv').config();

// for github OAth
const cookieParser=require('cookie-parser');
const expressSession=require('express-session');
const crypto=require('crypto');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy
const {stringify} = require('flatted');
const _ = require('underscore');


const app = express();
const port =process.env.PORT;

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

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


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


app.get("/auth/github",passport.authenticate("github"))

app.get("/auth/github/callback",passport.authenticate("github",{failureRedirect:"http://localhost:3000/"}),(req,res)=>{
    res.redirect("http://localhost:3000/dashboard");
})

app.get('/dashboard',(req,res)=>{
    res.send("dashborad of 5000");
})

app.listen(port,()=>{
    console.log(chalk.blue(`server running on port: ${port}`));
})