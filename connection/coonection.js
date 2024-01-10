const mongoose=require("mongoose");

(async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/nine");
        console.log("mongodb connected successfully");
    }catch(error){
        console.log(error);
    }
            
})()