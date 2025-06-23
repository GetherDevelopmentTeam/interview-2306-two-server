
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const eventRouter  = require("./src/routes/event.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors(
  {
    origin: "*"
  }
));


app.use("/api/event", eventRouter);

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
