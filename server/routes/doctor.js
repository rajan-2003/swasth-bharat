const express = require("express");

const {
  getAllDoctor,
  speciality,
  nearestDoctor,
} = require("../controllers/doctorController");

const {
  registerDoctor,
  loginDoctor,
  logoutDoctor,
} = require("../controllers/authController");

const router = express.Router();

//Authentication routes of Doctor
router.route("/register").post(registerDoctor);
router.route("/login").post(loginDoctor);
router.route("/logout").post(logoutDoctor);

//Query routes of the Doctor
router.get("/all", getAllDoctor);
router.get("/specialty", speciality);
router.get("/near", nearestDoctor);

module.exports = router;
