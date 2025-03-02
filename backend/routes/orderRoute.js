import express from "express";
import authMiddlware from "../middlewares/auth.js";
import {
  placeOrder,
  userOrders,
  verifyOrder,
  listOrders,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/PlaceOrder", authMiddlware, placeOrder);
orderRouter.post("/Verify", verifyOrder);
orderRouter.post("/userOrders", authMiddlware, userOrders);
orderRouter.get("/listOrders", listOrders);

export default orderRouter;
