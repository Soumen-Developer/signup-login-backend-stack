const express = require("express");
const app = express();
const { pool } = require("./dbConfig");
const PORT = process.env.PORT || 3000;
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");
const initializePassport = require("./passportConfig");

// Initialize Passport
initializePassport(passport);

// Middleware
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Routes
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");

app.use("/users", authRoutes);
app.use("/users", dashboardRoutes);

// Root route
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
