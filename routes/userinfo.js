//?--------------------------
//?COMMENT COLOR: #61F2F5
//?--------------------------
const express = require("express");
const router = express.Router();
const chalk = require("chalk");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userData = require("../models/User");



router.get("/", (req, res) => {
    userData.find({})
        .then((data) => {
            console.log(chalk.hex("#61F2F5").bold("sending data from /: ", data));
            res.json(data);
        })
        .catch((err) => {
            console.log(chalk.hex("#61F2F5").bold("error while fetching all users data", err));
        })
})
//return current-user
router.get("/current_user", (req, res) => {
    console.log(chalk.hex("#61F2F5").bold("current_user called"));
    res.json(req.user);
})
router.get("/:userid/update", (req, res) => {
    const data = req.body.values;
    console.log(chalk.hex("#61F2F5").bold("recieved data to update", req.params.userid));
    console.log(chalk.hex("#61F2F5").bold(data));
    userData.findOneAndUpdate({ githubId: req.params.userid }, { new: true }, (err, user) => {
        if (user) {
            user.bio = data.bio;
            user.technology = data.languages;
            user.pinnedrepos.push(data.repositries1);
            if (data.repositries2 != null) {
                user.pinnedrepos.push(data.repositries2);
            }
            if (data.repositries3) {
                user.pinnedrepos.push(data.repositries3);
            }
            user.gist = data.gist;
            user.save();
            console.log(chalk.hex("#61F2F5").bold("data updated successfully on server"));
            res.json({ message: "Data updated" });
        }
        else {
            console.log(chalk.hex("#61F2F5").bold("error", err));
        }
    });
})
router.post("/addfriend", (req, res) => {
    const friend = req.body.friend;
    const userId = req.user.id;

    console.log(chalk.hex("#61F2F5").bold(`userId: ${userId}`));
    console.log(chalk.hex("#61F2F5").bold(`friendId: ${friend._id}`));
    console.log();
    userData.findById(userId, (err, user) => {
        if (user && userId !== friend._id) {
            //? addToSet- to maintain uniqueness
            user.friends.addToSet(friend);
            user.save();
            console.log(chalk.hex("#61F2F5").bold("friend added to DB sucessfully"));
        }
        else {
            console.log(chalk.hex("#61F2F5").bold(`error while adding friend to DB ${err}`));
        }
    })
})
router.get("/friends", (req, res) => {
    console.log(chalk.hex("#61F2F5").bold("/friends"));
    const userId = req.user.id;
    let friendsList = null;
    userData.findById(userId, (err, user) => {
        if (user) {
            friendsList = user.friends;
            console.log(chalk.hex("#61F2F5").bold(`friendsList : ${friendsList}`));
        }
        else {
            console.log(chalk.hex("#61F2F5").bold("error while fetching friends: ", err));
        }
        return res.json({ friendsList });
    })
})

router.post("/delete", (req, res) => {
    console.log(chalk.hex("#61F2F5").bold("/delete"));
    const userId = req.user.id;
    // console.log(chalk.hex("#61F2F5").bold(`fid: ${req.body.fid}`));
    //? Casting to objectId type 
    const fid = mongoose.Schema.Types.ObjectId(req.body.fid);
    //? Delete object(friends) from array(friendList) of user schema using pull
    userData.findByIdAndUpdate(userId, { $pull: { friends: { fid: fid } } },
        (error, obj) => {
            if (error) {
                console.log(chalk.hex("#61F2F5").bold("error while deleting frnd", error));
            } else {
                // console.log(chalk.hex("#61F2F5").bold(obj));
                console.log(obj);
            }
            return res.json(obj);
        })
})

module.exports = router;

