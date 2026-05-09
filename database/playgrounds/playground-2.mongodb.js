// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("contacts");

// Create a new document in the collection.
db.getCollection("contacts").insertMany([
  {
    firstName: "Anton",
    lastName: "Syzov",
    email: "aantonssizov@gmail.com",
    favoriteColor: "Red",
    birthday: "August 1st, 2004",
  },
  {
    firstName: "Vegard",
    lastName: "Amundsen",
    email: "vamundsen@byupathway.edu",
    favoriteColor: "Red",
    birthday: "August 1st, 2004",
  },
  {
    firstName: "Heewoong",
    lastName: "Kim",
    email: "hkim2@byupathway.edu",
    favoriteColor: "Red",
    birthday: "August 1st, 2004",
  },
]);
