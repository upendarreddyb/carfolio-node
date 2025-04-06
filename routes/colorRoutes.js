const express = require("express");
const router = express.Router();
const { getAllColors, createColor } = require("../controllers/colorController");

router.get("/", getAllColors);
router.post("/", createColor);

module.exports = router;
