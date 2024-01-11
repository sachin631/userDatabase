const classModel = require("../models/classModel");
const userModel = require("../models/registerUser");

const classController={
    storeClass:async(req,res)=>{
        const {className}=req.body;
        
        const storeData=await classModel.create({
            className:className
        });
        await storeData.save();
        res.status(200).json({success:true,message:"class store successFully",class:storeData})
    },
    updateClass:async(req,res)=>{
        const findUser=await userModel.findOne({_id:req.body._id}).populate("class_id");
        newId=req.body.newId;
        findUser.class_id=newId;
        await findUser.save();
        console.log(findUser,"findUser");
        res.status(200).json({user:findUser}); 
    }
}

module.exports={...classController};