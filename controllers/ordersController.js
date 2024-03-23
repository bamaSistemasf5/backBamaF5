import OrdersModel from "../models/ordersModel.js";

export const createOrder = async (req, res) => {
  try {
    const newOrder = await OrdersModel.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.findAll();
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error getting orders" });
  }
};

export const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrdersModel.findByPk(id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error getting order" });
  }
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await OrdersModel.update(req.body, {
      where: { id_pedido: id },
    });
    if (updated) {
      const updateOrder = await OrdersModel.findOne({
        where: { id_pedido: id },
      });
      res.json(updateOrder);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating order" });
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrdersModel.findByPk(id);
    if (order) {
      await order.destroy();
      res.json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error deleting order" });
  }
};
