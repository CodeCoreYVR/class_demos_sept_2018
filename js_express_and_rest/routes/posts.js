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
    .then(posts => {
      res.redirect(`/posts/${posts[0].id}`);
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

// posts#show URL: /posts/:id METHOD: GET
router.get("/posts/:id", (req, res) => {
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
router.delete("/posts/:id", (req, res) => {
  const id = req.params.id;

  knex("posts")
    .where("id", id)
    .del()
    .then(() => {
      res.redirect("/posts");
    });
});

module.exports = router;
