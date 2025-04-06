const express = require("express");
const router = express.Router();
const { getAllModels, createModel } = require("../controllers/modelController");

router.get("/", getAllModels);
router.post("/", createModel);

module.exports = router;
