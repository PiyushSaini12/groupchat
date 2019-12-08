const passport = require("passport");
const mongoose = require("mongoose");

exports.isLoggedIn = (req, res, next) => {
  // first check if user is authenticated
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect("/login");
};

exports.login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureMessage: "Invalid Login"
});
