const express=require("express");
const bodyParser=require("body-parser");
const userRouter = require("./routers/userRouter");
const classRouter = require("./routers/classRouter");
const app=express();
require("dotenv").config();
require("./connection/coonection");
const port=process.env.port;


//midlleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser());
//router
app.use("/api/v1",userRouter);
app.use("/api/v1",classRouter);

app.listen(port,()=>{
    console.log(`server started at ${port}`);
});