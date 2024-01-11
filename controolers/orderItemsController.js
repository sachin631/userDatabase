const orderItemModel = require("../models/orderItems");

const orderItemsController = {
  storeOrderItems: async (req, res) => {
    try {
      const { orderId, quantity, name, price, size } = req.body;
      const storeItems = await orderItemModel.create({
        orderId: orderId,
        quantity: quantity,
        name: name,
        price: price,
        size: size,
      });
      await storeItems.save();
      return res.status(200).json({ message: "store successfully",orderItem:storeItems });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};

module.exports = { ...orderItemsController };
