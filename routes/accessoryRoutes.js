const express = require("express");
const router = express.Router();
const { getAllAccessories, createAccessory } = require("../controllers/accessoryController");

router.get("/", getAllAccessories);
router.post("/", createAccessory);

module.exports = router;
