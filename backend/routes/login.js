const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/upload/signin/", (req, res) => {
  res.send("login");
});

router.post("/upload/signin/", (req, res) => {
  res.send(user);
});

module.exports = router;
