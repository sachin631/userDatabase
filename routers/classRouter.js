const express=require("express");
const { storeClass } = require("../controolers/classController");
const classRouter=express.Router();

classRouter.post("/storeClass",storeClass);

module.exports=classRouter;