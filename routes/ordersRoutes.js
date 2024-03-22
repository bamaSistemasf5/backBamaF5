import express from "express";
const router = express.Router();
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/ordersController.js";

router.get("/orders", getOrders);
router.get("/order/:id", getOrderById);
router.post("/create-order", createOrder);
router.put("/update-order/:id", updateOrder);
router.delete("/delete-order/:id", deleteOrder);

export default router;
