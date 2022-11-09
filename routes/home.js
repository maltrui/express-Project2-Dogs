var express = require("express");
var router = express.Router();
var passport = require("passport");

const fetch = require('node-fetch');
const rootUrl = 'https://random.dog/woof.json'

const indexController = require('../controllers/home')

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
      res.render("home", { title: "Pick A Dog", dogPhoto });
    })
});

router.post('/post/create', isLoggedIn, indexController.create)

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
