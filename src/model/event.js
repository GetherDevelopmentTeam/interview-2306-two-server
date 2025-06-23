const mongoose = require("mongoose");

const { Schema, model } = mongoose;


const eventSchema = new Schema({
  title: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  time: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});

const Event = model("event", eventSchema);

module.exports = { Event };