exports.up = function(knex, Promise) {
  return knex.schema.table("posts", table => {
    // ALTER TABLE "posts"
    table.string("imageUrl"); // ADD COLUMN "imageUrl" VARCHAR(255)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("posts", table => {
    // ALTER TABLE "posts"
    table.dropColumn("imageUrl"); // DROP COLUMN "imageUrl"
  });
};
