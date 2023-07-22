const express = require("express");
const router = express.Router();

const {
  loginView,
  loginUser,
  registerView,
  registerUser,
  logoutUser,
} = require("../controllers/authControllers");

router.get("/loginView", loginView);

router.post("/loginUser", loginUser);

router.get("/registerView", registerView);

router.post("/registerUser", registerUser);

router.get("/logoutUser", logoutUser);

module.exports = router;
