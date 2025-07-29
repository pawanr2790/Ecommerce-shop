import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_STRING);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default ConnectDB;
