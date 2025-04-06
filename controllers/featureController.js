const Feature = require("../models/Feature");

exports.getAllFeatures = async (req, res, next) => {
  try {
    const features = await Feature.find().populate("categoryId");
    res.json(features);
  } catch (error) {
    next(error);
  }
};

exports.createFeature = async (req, res, next) => {
  try {
    const feature = await Feature.create(req.body);
    res.status(201).json(feature);
  } catch (error) {
    next(error);
  }
};
