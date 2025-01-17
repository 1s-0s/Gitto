//?--------------------------
//?COMMENT COLOR: #61F2F5
//?--------------------------
const express = require("express");
const router = express.Router();
const chalk = require("chalk");
const mongoose = require('mongoose');
const userData = require("../models/User");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "gitto3025@gmail.com",
        pass: "iamurhoneybunny3024"
    }
})

sendFriendRequestMail = (senderReq, recieverReq) => {
    // console.log("Inside mailer");
    // console.log(senderReq);
    //? TURN ON LESS SECURE APP IN YOUR GOOGLE ACCOUNT SETTINGS/SECURITY WHILE USING THIS FEATURE.
    let mailOptions = {
        from: "gitto3025@gmail.com",
        to: recieverReq,
        subject: "Notification regarding friend request from GIT-TO",
        text: "",
        html: `<h2></strong> ${senderReq.name}<strong> has been added you as friend.</h2><br>EmailID:</strong> ${senderReq.email}<br><br><strong>Thank you</strong><br>Regards Team <strong>1's&&0's </strong>`
    }
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log("Error Occures", err);
        }
        else {
            console.log("Email has been sent!!!", data);
        }
    })
}


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
router.post("/update", (req, res) => {
    const data = req.body.userDesc;
    const userID = req.user.githubId;
    console.log(chalk.hex("#61F2F5").bold("recieved data to update", userID));
    // console.log(chalk.hex("#61F2F5").bold(data));
    console.log(data);
    userData.findOneAndUpdate({ githubId: userID }, { new: true }, (err, user) => {
        if (user) {
            user.bio = data.bio;
            user.technology = data.languages;
            user.pinnedrepos.addToSet(data.repositries1);
            if (data.repositries2 != null) {
                user.pinnedrepos.addToSet(data.repositries2);
            }
            if (data.repositries3) {
                user.pinnedrepos.addToSet(data.repositries3);
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
//fetch user
router.get("/fetchuser/:userid", (req, res) => {
    userData.findById(req.params.userid, (err, user) => {
        if (user) {
            console.log(chalk.hex("#61F2F5").bold(`sending requested user data`));
            res.json(user);
        } else {
            console.log(chalk.hex("#61F2F5").bold(`error while fetching user data,${err}`));
        }
    })
})
router.post("/addfriend", (req, res) => {
    const friend = req.body.friend;
    const userId = req.user.id;

    console.log(chalk.hex("#61F2F5").bold(`userId: ${userId}`));
    console.log(chalk.hex("#61F2F5").bold(`friendId: ${friend._id}`));
    console.log(friend);
    userData.findById(userId, (err, user) => {
        if (user && userId !== friend._id) {
            //? addToSet- to maintain uniqueness
            user.friends.addToSet(friend);
            user.save();
            console.log(chalk.hex("#61F2F5").bold("friend added to DB sucessfully"));
            sendFriendRequestMail(user, friend.email);
            return res.json({ message: "friend added successfully" });
        }
        else {
            console.log(chalk.hex("#61F2F5").bold(`error while adding friend to DB ${err}`));
            return res.json({ message: "error while adding friend" });
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

