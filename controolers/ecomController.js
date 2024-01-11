const order2Model = require("../models/order2");
const customerModel = require("../models/customerModel");

const ecomController={
    postUser:async(req,res)=>{
        
        try{
            const {name,classs,user_id,roll_number}=req.body;
            const user=await customerModel.create({
                name:name,
                class:classs,
                user_id:user_id,
                roll_number:roll_number

            });
            await user.save();
            res.status(200).json({success:true,user:user});

        }catch(err){
            res.send(err.message);
        }

    },
    postOrder:async(req,res)=>{
        const {productName,ProductPrice,order_id}=req.body;
        const order=await order2Model.create({
            productName:productName,
            ProductPrice:ProductPrice,
            order_id:order_id,
        });
        await order.save();
        res.send({message:"order store successfully",order:order});
        
    },
    getUser:async(req,res)=>{
        try{
            const getUser=await customerModel.aggregate([
                {
                    $match:{
                        name:req.body.name
                    }
                },
                {
                    $lookup:{
                        from:"order2models",
                        localField:"user_id",
                        foreignField:"order_id",
                        as:"productRelatedToThisUserIs"
                    }
                },
            ]);
              res.send({getUser:getUser});
        }catch(err){
            res.send(err.message)
        }
          
    }
}

module.exports={...ecomController}