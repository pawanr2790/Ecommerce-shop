import express from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
  singleProductInfo,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post(
  "/addProduct",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/listProduct", listProducts);
productRouter.get("/singleProductInfo", singleProductInfo);
productRouter.post("/removeProduct", removeProduct);

export default productRouter;
