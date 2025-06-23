import express from "express";
import dotenv from "dotenv";

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
