import { Router } from "express";
import { Event } from "../model/event";
const router = Router();

router.get("/", async (req, res) => {
  try {
    let { page, limit } = req.query;

    page = Number(page) || 1;
    limit = Number(limit) || 10;

    let skip = page * limit;

    const events = await Event.find().skip(skip).limit(limit);

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      error: error?.message || "Server Error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, date, time, description } = req.body;

    // data validation

    const event = new Event({
      title,
      date,
      time,
      description,
    });

    await event.save();

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
