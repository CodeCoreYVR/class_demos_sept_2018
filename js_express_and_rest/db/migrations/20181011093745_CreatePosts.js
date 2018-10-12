exports.up = function(knex, Promise) {
  // When creating migrations, you must ALWAYS return the
  // result of your migration code. ALWAYS!
  return knex.schema.createTable("posts", table => {
    // CREATE TABLE "posts" (
    table.increments("id"); // "id" SERIAL
    table.string("title"); // "title" VARCHAR(255)
    table.text("content"); // "content" TEXT
    table.integer("viewCount"); // "viewCount" INTEGER
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    // "createdAt" TIMESTAMP DEFAULT NOW()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts");
};

// module.exports = {
//   up: function...,
//   down: function...
// }
