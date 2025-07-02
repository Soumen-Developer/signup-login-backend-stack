const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { pool } = require("../dbConfig");
const passport = require("passport");
const { checkAuthenticated, checkNotAuthenticated } = require("../middleware/auth");

// Register page route
router.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register", { errors: [], success_msg: null });
});

// Login page route
router.get("/login", checkNotAuthenticated, (req, res) => {
  const successMsgArr = req.flash("success_msg");
  const errorArr = req.flash("error");
  res.render("login", {
    success_msg: successMsgArr.length ? successMsgArr[0] : null,
    error: errorArr.length ? errorArr[0] : null
  });
});

// Logout route
router.get("/logout", checkAuthenticated, (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.flash("success_msg", "You have logged out.");
    res.redirect("/users/login");
  });
});

// Register user
router.post("/register", async (req, res) => {
  let { name, email, password, password2 } = req.body;
  let errors = [];

  console.log({
    name,
    email,
    password
  });

  // Validation
  if (!name || !email || !password || !password2) {
    errors.push({ message: "Please fill in all fields" });
  }

  if (password.length < 6) {
    errors.push({ message: "Password must be at least 6 characters" });
  }

  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }

  if (errors.length > 0) {
    return res.render("register", { errors, success_msg: null, name, email });
  }

  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (user.rows.length > 0) {
      errors.push({ message: "Email already registered" });
      return res.render("register", { errors, success_msg: null, name, email });
    }

    let hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
     
    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, password",
      [name, email, hashedPassword]
    );

    req.flash("success_msg", "You are now registered. Please log in.");
    res.redirect("/users/login");
  } catch (err) {
    console.error(err.message);
    res.render("register", { errors: [{ message: "Something went wrong, try again later." }], success_msg: null, name, email });
  }
});

// Login user
router.post('/login', passport.authenticate('local', {
  successRedirect: '/users/dashboard',
  failureRedirect: '/users/login',
  failureFlash: true
}));

module.exports = router;
