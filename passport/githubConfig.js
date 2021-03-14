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
  done(null, user);
})
passport.deserializeUser((obj, done) => {
  done(null, obj);
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
        const newUser = new User({
          githubId: profile._json.id,
          name: profile._json.name,
          email: profile._json.email,
          follower: profile._json.followers,
          following: profile._json.following,
          gist: profile._json.public_gists,
          bio: profile._json.bio,
          repositry: profile._json.public_repos,
          blog: profile._json.blog,
          location: profile._json.location
        });

        console.log(chalk.red(newUser));
        const currUser = await User.findOne({ githubId: profile.id });
        if (currUser) {
          const savedUser = await newUser.update();
          return done(null, savedUser);
        } else {
          const savedUser = await newUser.save();
          done(null, savedUser);
        }
      }
      catch (err) {
        console.log(chalk.red(err));
      }
    }
  )
);


