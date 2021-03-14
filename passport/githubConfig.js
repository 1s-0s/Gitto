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
        console.log(profile);
        const currUser = await User.findOne({ githubId: profile.id });
        if (currUser) {
          return done(null, profile);
        } else {
          const newUser = new User({
            githubId: profile.id,
            name: profile.name,
            email: profile.email,
            follower: profile.followers,
            following: profile.following,
            gist: profile.public_gists,
            bio: profile.bio,
            repositry: profile.public_repos,
            blog: profile.blog,
            location: profile.location
          });
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


