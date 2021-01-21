const express= require('express');
const morgan=require('morgan'); //HTTP logger
const chalk=require('chalk'); // to change color of console
require('dotenv').config();


const app = express();
const port =process.env.PORT;

// routes
const user=require('./routes/user');


app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));



// app.get("/",(req,res)=>{
//     res.send("Gitto server working");
// })



app.listen(port,()=>{
    console.log(chalk.blue(`server running on port: ${port}`));
})