const Variant = require("../models/Variant");

exports.getAllVariants = async (req, res, next) => {
  try {
    const variants = await Variant.find().populate("colors").populate("accessories").populate("features");
    res.json(variants);
  } catch (error) {
    next(error);
  }
};

exports.createVariant = async (req, res, next) => {
  try {
    const variant = await Variant.create(req.body);
    res.status(201).json(variant);
  } catch (error) {
    next(error);
  }
};

exports.getVariantById = async (req, res, next) => {
  try {
    const variant = await Variant.findById(req.params.id)
      .populate("colors")
      .populate("accessories")
      .populate("features");

    if (!variant) {
      return res.status(404).json({ message: "Variant not found" });
    }

    res.json(variant);
  } catch (error) {
    next(error);
  }
};