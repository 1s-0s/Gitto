const express= require("express");
const router= express.Router();
const chalk = require("chalk");

const userData= require("../models/User");

router.get("/:userid",(req,res)=>{
    const userid=req.params.userid;
    console.log(userid);
    userData.findOne({githubId:userid},(err,user)=>{
        if(user){
            console.log(chalk.green("user data sent successfully from server"));
            console.log(user);
            res.json(user);

        }else{
            console.log(chalk.red("user dosent exist",err));
        }
    })
})

module.exports=router;

