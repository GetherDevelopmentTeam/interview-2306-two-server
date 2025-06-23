const express = require("express");
const { Event } = require("../model/event.js");
const router = new express.Router();

router.get("/", async (req, res) => {
  try {
    let { page, limit } = req.query;

    page = Number(page) || 1;
    limit = Number(limit) || 5;

    const skip = (page - 1) * limit;

    const totalEvents = await Event.countDocuments();
    const totalPages = Math.ceil(totalEvents / limit);

    const events = await Event.find().skip(skip).limit(limit);

    res.status(200).json({
      events,
      page,
      totalPages,
      totalEvents
    });

  } catch (error) {
    res.status(500).json({
      error: error?.message || "Server Error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, date, time, description } = req.body;

    if (!title || !date || !time || !description) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

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

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        error: "Event ID is required",
      });
    }

    const result = await Event.findOneAndDelete({ _id: id });

    if (!result) {
      return res.status(404).json({
        error: "Event not found",
      });
    }

    res.status(200).json({
      msg: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error?.message || "Server Error",
    });
  }
});

module.exports = router;
