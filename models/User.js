const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    githubId : String 
})
module.exports =  mongoose.model("users",userSchema);