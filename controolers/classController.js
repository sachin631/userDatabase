const classModel = require("../models/classModel");

const classController={
    storeClass:async(req,res)=>{
        const {className}=req.body;
        
        const storeData=await classModel.create({
            className:className
        });
        await storeData.save();
        res.status(200).json({success:true,message:"class store successFully",class:storeData})
    }
}

module.exports={...classController};