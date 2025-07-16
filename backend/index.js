import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: "*",
  })
);
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("server is running at", PORT);
});
