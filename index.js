import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routes
import { router as eventRouter } from "./src/routes/event.js";

dotenv.config();

const app = new express();

app.use(express.json());

app.use("/event", eventRouter);

app.get("/", (req, res) => {
  res.json({
    status: true,
  });
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connect");
  })
  .catch((e) => {
    console.log("Failed to connect  ", e);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
