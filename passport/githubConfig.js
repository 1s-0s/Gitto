//?--------------------------
//?COMMENT COLOR: #FF75A0
//?--------------------------
const passport = require("passport");
const chalk = require("chalk");
const GitHubStrategy = require("passport-github2").Strategy;
const mongoose = require('mongoose');
//database
const User = mongoose.model("users");
//dotenv configuration
require("dotenv").config();
//Credentials
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

passport.serializeUser((user, done) => {
  done(null,user.id);
})
passport.deserializeUser((id, done) => {
  console.log(chalk.hex("#FF75A0").bold("deserialize called1"));
  User.findById(id).then((user)=>{
    done(null,user);
  })
})

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/github/dashboard",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // console.log(chalk.green(profile.username,profile.photos[0].value));
        const newUser = new User({
          githubId: profile._json.id,
          name: profile._json.name,
          username: profile.username,
          avatar: profile.photos[0].value,
          email: profile._json.email,
          follower: profile._json.followers,
          following: profile._json.following,
          bio: profile._json.bio,
          twitter_acc: profile._json.twitter_username,
          repositry: profile._json.public_repos,
          blog: profile._json.blog,
          location: profile._json.location
        });
        console.log(chalk.hex("#FF75A0").bold("from githubconfig"));
        console.log(chalk.hex("#FF75A0").bold(newUser));
        console.log(chalk.hex("#FF75A0").bold("access token"));
        console.log(chalk.hex("#FF75A0").bold(accessToken));
        const currUser = await User.findOne({ githubId: profile.id });
        if (currUser) {
          // const savedUser = await newUser.update();
          return done(null, currUser);
        } else {
          const savedUser = await newUser.save();
          done(null, savedUser);
        }
      }
      catch (err) {
        console.log(chalk.hex("#FF75A0").bold(err));
      }
    }
  )
);


