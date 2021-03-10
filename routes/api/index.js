const router = require("express").Router();
const appointmentRoutes = require("./appointments");

router.use("/appointment", appointmentRoutes);

module.exports = router;
