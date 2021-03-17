const express= require("express");
const router= express.Router();
const chalk = require("chalk");

const userData= require("../models/User");

router.get("/:githubusername",(req,res)=>{
    const githubusername=req.params;
    console.log(githubusername);
    userData.findOne(githubusername,(err,user)=>{
        if(user){
            console.log(chalk.green("user data sent successfully"));
            res.json(user);
        }else{
            console.log(chalk.red("user dosent exist",err));
        }
    })
})

module.exports=router;

