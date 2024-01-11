const mongoose = require("mongoose");
const orderItemSchema = new mongoose.Schema({
  orderId: {
    type:String
  },
  name: {
    type: String,
  },
  size: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

const orderItemModel = new mongoose.model("orderItemModel", orderItemSchema);

module.exports = orderItemModel;
