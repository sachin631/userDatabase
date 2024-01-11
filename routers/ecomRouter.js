const express=require("express");
const { postUser, postOrder, getUser } = require("../controolers/ecomController");
const ecomRouter=express.Router();
//router
ecomRouter.post("/postUser",postUser);
ecomRouter.post("/postOrder",postOrder);
ecomRouter.get("/getUser",getUser)
module.exports=ecomRouter;