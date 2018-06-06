const router = require("express").Router();
const articleRoutes = require("./articles");

// Article routes
router.use("/savedarticles", articleRoutes);

module.exports = router;
