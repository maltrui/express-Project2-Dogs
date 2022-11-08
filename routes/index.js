var express = require("express");
var router = express.Router();
var passport = require("passport");

const fetch = require('node-fetch');
const rootUrl = 'https://random.dog/woof.json'

// import private route middleware
const isLoggedIn = require("../config/auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  let dogPhoto
  fetch(rootUrl)
    .then((res)=> res.json())
    .then(dog =>{
      console.log(dog.url)
      dogPhoto = dog.url
      res.render("index", { title: "Pick A Dog", dogPhoto });
    })

});

router.get("/post", isLoggedIn, function (req, res) {
  res.render("post", { title: "Posts"});
});

// OAuth Routes

// Go to Google OAuth Login Menu
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

// OAuth Callback Route to redirect back to our app after successfully logging in
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// OAuth Logout Route
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
