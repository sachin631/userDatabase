const express=require("express");
const { storeClass, updateClass } = require("../controolers/classController");
const classRouter=express.Router();

classRouter.post("/storeClass",storeClass);
classRouter.post("/updateClass",updateClass)

module.exports=classRouter;