const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mediaType: { type: String, enum: ["image", "video"], required: true },
  mediaUrl: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("Feature", featureSchema);
