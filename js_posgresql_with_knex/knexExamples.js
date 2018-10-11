const knex = require("./db/client");

// Exercise: Inserting Posts

knex
  .insert([
    { title: "Top 5 Programming Languages", content: "Rust and stuff" },
    { title: "Top 10 Hikes", content: "Crown Mountian and stuff" },
    {
      title: "You wouldn't believe...",
      content: "Yeah..."
    }
  ])
  .into("posts")
  .returning("*");
// To read the data from doing query, you must access in the
// callback passed to .then. It will be the callback's first
// and only argument. `data` in this case.
// .then(data => {
//   console.log("Insertion complete!");
//   console.log(data);

//   // When writing a script that should run once, you should
//   // close the knex connect with the
//   // following command otherwise the program
//   // will not end.
//   knex.destroy();
// });

// Exercise: Find Posts

// 1.

knex
  .select("*")
  .from("posts")
  .whereRaw(`"createdAt" > now() - interval '2 months'`)
  // WHERE "createdAt" > NOW() - INTERVAL '2 months'
  .orderBy("createdAt", "desc");
// .then(data => {
//   console.log(data);
//   knex.destroy();
// });

// 2.
knex("posts")
  .select("*")
  .where("title", "ilike", "%e")
  .then(data => console.log(data));
