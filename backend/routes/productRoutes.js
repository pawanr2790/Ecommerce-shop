import express from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
  singleProductInfo,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

// Only admin can add a product
productRouter.post(
  "/addProduct",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

// Anyone can view product list
productRouter.get("/listProduct", listProducts);

// Anyone can view single product details
productRouter.get("/singleProductInfo", singleProductInfo);

// Only admin can remove a product
productRouter.post("/removeProduct", adminAuth, removeProduct);

export default productRouter;
