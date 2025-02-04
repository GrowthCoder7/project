import express from "express";
import {
  addProduct,
  getProducts,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", protect, adminOnly, addProduct);
router.get("/", getProducts);
router.delete("/:id", protect, adminOnly, deleteProduct);

export default router;
