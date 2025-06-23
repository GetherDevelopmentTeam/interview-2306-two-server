import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error?.message || "Server Error",
    });
  }
});

router.post("/", (req, res) => {
  try {
    res.status(201).json({
      msg: "Event created successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error?.message || "Server Error",
    });
  }
});

export { router };
