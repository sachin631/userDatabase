const express=require("express");
const { registerUser, login, findRegisterUser } = require("../controolers/registerController");
const userRouter=express.Router();

userRouter.post("/registerUser",registerUser);
userRouter.post("/login",login);
userRouter.get("/findRegisterUser",findRegisterUser);

module.exports=userRouter;