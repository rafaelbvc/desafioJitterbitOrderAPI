const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const body = req.body;

    const order = new Order({
      orderId: body.numeroPedido.split("-")[0],
      value: body.valorTotal,
      creationDate: body.dataCriacao,
      items: body.items.map(item => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    });

    await order.save();

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.id });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

exports.updateOrder = async (req, res) => {
  const order = await Order.findOneAndUpdate(
    { orderId: req.params.id },
    req.body,
    { new: true }
  );

  res.json(order);
};

exports.deleteOrder = async (req, res) => {
  await Order.deleteOne({ orderId: req.params.id });
  res.status(204).send();
};