const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  orderid: {
    type: String,
  },
  amount: Number,
  shippingAddress: {
    streatAddress: {
      type: String,
    },
    city: {
      type: String
    },
    zipCode: {
      type: Number
    },
    orderPlacedAt: {
      type: Date,
      default:Date.now
    }
  }
//   timestemps:true
},{timestamps:true});

const order= new mongoose.model("orderItem", orderSchema);

module.exports = order;
