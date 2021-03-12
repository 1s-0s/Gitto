const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    githubId : String 
})
mongoose.model("users",userSchema);