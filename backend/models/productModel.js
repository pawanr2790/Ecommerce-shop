import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sizes: {
      type: [String],
      required: true,
      validate: [(val) => val.length > 0, "At least one size is required"],
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bestSeller: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.product || mongoose.model("Product", productSchema);

export default Product;
