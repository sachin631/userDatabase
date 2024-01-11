const mongoose=require("mongoose");

const order2Schema=new mongoose.Schema({
    productName:String,
    ProductPrice:Number,
    order_id:Number,
    
});

const order2Model=new  mongoose.model("order2Model",order2Schema);
module.exports=order2Model ;