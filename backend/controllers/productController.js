import { v2 as cloudinary } from "cloudinary";
import { json } from "express";
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files?.image1?.[0] || null;
    const image2 = req.files?.image2?.[0] || null;
    const image3 = req.files?.image3?.[0] || null;
    const image4 = req.files?.image4?.[0] || null;
    const images = [image1, image2, image3, image4].filter(
      (item) => item != null
    );

    let imageUrls = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestSeller: bestSeller === "true" ? true : false,
      images: imageUrls,
      date: Date.now(),
    };

    res.json({});
  } catch (error) {
    console.log(error.messgae);
    res.json({ message: error.message });
  }
};

const listProducts = async (req, res) => {
  try {
  } catch (error) {}
};

const removeProduct = async (req, res) => {
  try {
  } catch (error) {}
};

const singleProductInfo = async (req, res) => {
  try {
  } catch (error) {}
};

export { listProducts, removeProduct, singleProductInfo, addProduct };
