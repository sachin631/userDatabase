const mongoose=require("mongoose");

const customerSchema=new mongoose.Schema({
    name:String,
    class:Number,
    user_id:Number,
    roll_number:Number
});

const customerModel=new  mongoose.model("customerModel",customerSchema);
module.exports=customerModel ;