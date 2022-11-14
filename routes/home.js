var express = require("express");
var router = express.Router();
var passport = require("passport");

const fetch = require('node-fetch');
const rootUrl = 'https://random.dog/woof.json'

const indexController = require('../controllers/home')

const isLoggedIn = require("../config/auth");


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

router.post('/post/create', isLoggedIn, indexController.createPost)


router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);


router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
