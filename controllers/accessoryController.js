const Accessory = require("../models/Accessory");

exports.getAllAccessories = async (req, res, next) => {
  try {
    const accessories = await Accessory.find().populate("categoryId");
    res.json(accessories);
  } catch (error) {
    next(error);
  }
};

exports.createAccessory = async (req, res, next) => {
  try {
    const accessory = await Accessory.create(req.body);
    res.status(201).json(accessory);
  } catch (error) {
    next(error);
  }
};
