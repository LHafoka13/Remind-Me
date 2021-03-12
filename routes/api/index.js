const router = require("express").Router();
const appointmentRoutes = require("./appointments");
const userRoutes = require("./users");

router.use("/appointment", appointmentRoutes);
router.use("/users", userRoutes);

module.exports = router;
