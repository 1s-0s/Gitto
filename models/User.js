const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    githubId: String,
    name: String,
    username: String,
    avatar: String,
    email: String,
    follower: Number,
    following: Number,
    gist: String,
    twitter_acc: String,
    bio: String,
    repositry: Number,
    pinnedrepos: [{
        type: String
    }],
    blog: String,
    location: String,
    friends: [{
        fid: mongoose.Schema.Types.ObjectId,
        name: String,
        avatar: String,
        bio: String
    }],
    technology: [{
        type: String
    }],
},
    {
        timestamps: true
    })
module.exports = mongoose.model("users", userSchema);