const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hexCode: String,
  price: Number,
});

module.exports = mongoose.model("Color", colorSchema);
