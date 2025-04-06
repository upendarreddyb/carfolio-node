const Model = require("../models/Model");

exports.getAllModels = async (req, res, next) => {
  try {
    const models = await Model.find().populate("variants");
    res.json(models);
  } catch (error) {
    next(error);
  }
};

exports.createModel = async (req, res, next) => {
  try {
    console.log(req.body)
    const { name, description, image, variants } = req.body;
    const model = await Model.create({ name, description, image, variants });
    res.status(201).json(model);
  } catch (error) {
    next(error);
  }
};
