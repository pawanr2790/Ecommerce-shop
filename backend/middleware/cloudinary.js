import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const ConnectCloudinary = () => {
  console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
  console.log("API Key:", process.env.CLOUDINARY_API_KEY);
  console.log("API Secret:", process.env.CLOUDINARY_API_SECRET);

  try {
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      throw new Error("Cloudinary environment variables are missing");
    }

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      api_key: process.env.CLOUDINARY_API_KEY,
    });

    console.log("Cloudinary connected");
  } catch (error) {
    console.error("Cloudinary config error:", error.message);
  }
};

export default ConnectCloudinary;
