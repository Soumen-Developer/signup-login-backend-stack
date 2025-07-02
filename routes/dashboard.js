const express = require("express");
const router = express.Router();
const { checkAuthenticated } = require("../middleware/auth");

// Dashboard page route
router.get("/dashboard", checkAuthenticated, (req, res) => {
  const userName = req.user && req.user.name ? req.user.name : "User";
  res.render("dashboard", { user: userName });
});

module.exports = router;
