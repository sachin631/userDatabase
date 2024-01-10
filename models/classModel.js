const { default: mongoose } = require("mongoose");
// require("mongoose");

const classSchema=new mongoose.Schema({
    class:{
        type:String,
        default:"class"
    },
    className:{
        type:String,
    }
});

const classModel=new mongoose.model("classModel",classSchema);
module.exports=classModel;