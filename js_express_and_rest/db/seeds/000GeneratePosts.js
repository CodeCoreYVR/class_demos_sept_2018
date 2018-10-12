const faker = require("faker");

// Returns random number from 1 to n
const random = n => Math.ceil(Math.random() * n);

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(() => {
      const posts = Array.from({ length: 100 }).map(() => {
        return {
          title: faker.company.catchPhrase(),
          content: faker.lorem.paragraph(),
          imageUrl: faker.image.imageUrl(),
          viewCount: random(1000),
          createdAt: faker.date.past()
        };
      });

      // Even inside of a then-callback, always return the query.
      return knex("posts").insert(posts);
    });
};
