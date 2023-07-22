const express = require("express");
const router = express.Router();

const {
  adminView,
  createView,
  createItem,
  editView,
  editItem,
  deleteItem,
} = require("../controllers/adminControllers");

router.get("/adminView", adminView);

router.get("/createView", createView);

router.post("/createItem", createItem);

router.get("/editView", editView);

router.put("/editItem", editItem);

router.delete("/deleteItem", deleteItem);

module.exports = router;
