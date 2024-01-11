const express=require("express");
const { storeOrder, findOrder } = require("../controolers/orderController");
const { storeOrderItems } = require("../controolers/orderItemsController");
const orderRouter=express.Router();

orderRouter.post("/storeOrder",storeOrder);
orderRouter.post("/storeOrderItems",storeOrderItems);
orderRouter.get("/findOrder",findOrder);
module.exports=orderRouter;