//?--------------------------
//?COMMENT COLOR: #61F2F5
//?--------------------------
const express = require("express");
const router = express.Router();
const chalk = require("chalk");

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
    const friendId = req.body;
    const userId = req.user.id;
    console.log(chalk.hex("#61F2F5").bold("friendId: "));
    console.log(chalk.hex("#61F2F5").bold(friendId));
    console.log(chalk.hex("#61F2F5").bold("userId: ", userId));
})

module.exports = router;

