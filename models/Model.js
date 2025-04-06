const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  variants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Variant" }],
});

module.exports = mongoose.model("Model", modelSchema);
