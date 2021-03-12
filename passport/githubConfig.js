const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const GITHUB_CLIENT_ID = "7cd2a780b218a17d6194";
const GITHUB_CLIENT_SECRET = "83501798296561ca0147d1634900af29e845a493";

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser((obj, done) => {
    done(null, obj);
})

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/dashboard"
}, function (accessToken, refreshToken, profile, done) {
    process.nextTick(() => {
        console.log(profile);
        return done(null, profile);
    })
}))


