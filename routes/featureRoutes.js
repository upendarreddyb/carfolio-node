const express = require("express");
const router = express.Router();
const { getAllFeatures, createFeature } = require("../controllers/featureController");

router.get("/", getAllFeatures);
router.post("/", createFeature);

module.exports = router;
