const express = require("express");
const router = express.Router();
const knex = require("../db/client");

// POSTS

// posts#new URL: /posts/new METHOD: GET
router.get("/new", (req, res) => {
  res.render("posts/new");
});

// posts#create URL: /posts METHOD: POST
router.post("/", (req, res) => {
  knex("posts")
    .insert({
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      content: req.body.content
    })
    .returning("*")
    .then(posts => {
      res.redirect(`/posts/${posts[0].id}`);
    });
});

// posts#index URL: /posts METHOD: GET
router.get("/", (req, res) => {
  knex("posts")
    .orderBy("createdAt", "desc")
    .then(posts => {
      res.render("posts/index", { posts: posts });
    });
});

// posts#show URL: /posts/:id METHOD: GET
router.get("/:id", (req, res) => {
  // In the URL above, all the names prefixed with `:`
  // are called URL params. You can URL with `req.params`.

  // Examples:
  // /posts/bob -> req.params === { id: "bob" }
  // /posts/11235 -> req.params === { id: "11235" }

  const id = req.params.id;

  knex("posts")
    .where("id", id)
    .first()
    // Knex method that only works with SELECT queries
    // which will return the first post. Do this to avoid
    // having a single post in an array.
    .then(post => {
      res.render("posts/show", { post: post });
    });
});

// posts#destroy URL: /posts/:id METHOD: DELETE
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  knex("posts")
    .where("id", id)
    .del()
    .then(() => {
      res.redirect("/posts");
    });
});

// posts#edit URL: /posts/:id/edit METHOD: GET
router.get("/:id/edit", (req, res) => {
  const id = req.params.id;

  knex("posts")
    .where("id", id)
    .first()
    .then(post => {
      res.render("posts/edit", { post: post });
    });
});

// posts#update URL: /posts/:id METHOD: PATCH
router.patch("/:id", (req, res) => {
  const id = req.params.id;

  knex("posts")
    .where("id", id)
    .update({
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      content: req.body.content
    })
    .then(() => {
      res.redirect(`/posts/${id}`);
    });
});

module.exports = router;
