const passport = require("passport");
const chalk = require("chalk");
const GitHubStrategy = require("passport-github2").Strategy;
const mongoose = require('mongoose');
const User = mongoose.model("users");

const GITHUB_CLIENT_ID = "7cd2a780b218a17d6194";
const GITHUB_CLIENT_SECRET = "83501798296561ca0147d1634900af29e845a493";

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
        try{
          console.log(profile);
          const currUser = await User.findOne({ githubId: profile.id });
          if (currUser) {
            return done(null, profile);
          } else {
            const newUser = new User({ githubId: profile.id });
            const savedUser = await newUser.save();
            done(null, savedUser);
          }
        }
        catch(err){
            console.log(chalk.red(err));
        }
      }
    )
  );


