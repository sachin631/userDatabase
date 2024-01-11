const orderModel = require("../models/order");

const storeOrderController = {
  storeOrder: async (req, res) => {
    try {
      const { orderid, amount, shippingAddress } = req.body;
      const order = await orderModel.create({
        orderid: orderid,
        amount: amount,
        shippingAddress: shippingAddress,
      });
      console.log(order);
      await order.save();
      res
        .status(200)
        .json({ message: "order store successfully", order: order });
    } catch (err) {
      res.status(401).json({ err: err });
    }
  },
  findOrder: async (req, res) => {
    try {
      const data = await orderModel.aggregate([
        {
            $match:{
                amount:500
            }
        },
        {
          $project: {
            amount: 0,
          },
        },
        {
          $lookup: {
            from: "orderitemmodels", //proper cln name
            localField: "orderid",
            foreignField: "orderId",
            as: "output",
          },
        },
      ]);
      res.status(200).json({ success: true, data: data });
    } catch (err) {
      res.send(err.message);
    }
  },
};

module.exports = { ...storeOrderController };
