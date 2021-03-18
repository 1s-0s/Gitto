const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    githubId: String,
    name: String,
    username: String,
    avatar:String,
    email: String,
    likes: Number,
    follower: Number,
    following: Number,
    gist: String,
    bio: String,
    repositry: Number,
    pinnedrepos:[{
        type:String
    }] ,
    blog: String,
    location: String,
    friends: [{
        githubId: String,
        name: String,
        email: String,
    }],
    image: [{
        type: String
    }],
    technology: [{
        type: String
    }],
},
    {
        timestamps: true
    })
module.exports = mongoose.model("users", userSchema);