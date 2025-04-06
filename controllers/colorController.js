const Color = require("../models/Color");

exports.getAllColors = async (req, res, next) => {
  try {
    const colors = await Color.find();
    res.json(colors);
  } catch (error) {
    next(error);
  }
};

exports.createColor = async (req, res, next) => {
  try {
    const color = await Color.create(req.body);
    res.status(201).json(color);
  } catch (error) {
    next(error);
  }
};
