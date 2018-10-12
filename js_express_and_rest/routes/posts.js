const express = require("express");
const router = express.Router();
const knex = require("../db/client");

// POSTS

// posts#new URL: /posts/new METHOD: GET
router.get("/posts/new", (req, res) => {
  res.render("posts/new");
});

// posts#create URL: /posts METHOD: POST
router.post("/posts", (req, res) => {
  knex("posts")
    .insert({
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      content: req.body.content
    })
    .returning("*")
    .then(post => {
      res.redirect("/posts");
    });
});

// posts#index URL: /posts METHOD: GET
router.get("/posts", (req, res) => {
  knex("posts")
    .orderBy("createdAt", "desc")
    .then(posts => {
      res.render("posts/index", { posts: posts });
    });
});

module.exports = router;
