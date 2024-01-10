const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "fisrName is required"],
    trim: true,
  },
  lName: {
    type: String,
    trim:true
  },
  email:{
    type:String,
    unique:true,
    required:[true,"email is required"],
    trim:true,
    match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  passWord:{
    type:String,
    unique:true,
    required:[true,"passWord is required"],
    
  },
  dob:{
    type:String,
    required:true
  },
  timeZone:{
    type:String,
    required:true,
  },
  countryCode:{
    type:String,
    required:[true,"country code is required"],
    maxlength:3
  },
  phoneNumber:{
    type:String,
    required:[true,"phone Number is required"],
    unique:true,
    minlength:10
  },
  class_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"classModel"
  }
  
},{
    timestamps:true
});

const userModel=new mongoose.model("userModel",userSchema);
module.exports=userModel;
