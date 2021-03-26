const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const defaultGist=`if (false === true) {
    console.log("Earth is flat");
  }
  //didnt find this intelligent? right yours`
const userSchema = new Schema({
    githubId: String,
    name: String,
    username: String,
    avatar: String,
    email: String,
    likes: Number,
    dislike: Number,
    follower: Number,
    following: Number,
    gist: {type: String,default:defaultGist},
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
        name:String,
        avatar:String,
        bio:String
    }],
    technology: [{
        type: String
    }],
},
    {
        timestamps: true
    })
module.exports = mongoose.model("users", userSchema);