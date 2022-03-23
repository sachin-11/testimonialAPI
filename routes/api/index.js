const express = require("express");
const router = express.Router();

const testmonialRoutes = require("./testmonial");

router.use("/testmonial", testmonialRoutes);

module.exports = router;
