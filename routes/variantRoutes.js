const express = require("express");
const router = express.Router();
const { getAllVariants, createVariant, getVariantById } = require("../controllers/variantController");

router.get("/", getAllVariants);
router.post("/", createVariant);
router.get("/:id", getVariantById);

module.exports = router;
