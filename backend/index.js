import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./db/db.js";
import ConnectCoudinary from "./middleware/cloudinary.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();

ConnectCoudinary();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", userRouter);
const port = process.env.PORT || 3000;

ConnectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("app is running on port", port);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err.message);
  });
