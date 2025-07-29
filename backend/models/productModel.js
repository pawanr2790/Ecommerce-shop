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
    subcategory: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
      validate: [(val) => val.length > 0, "At least one image is required"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bestseller: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const productModel =
  mongoose.models.product || mongoose.model("Product", productSchema);

export default productModel;
