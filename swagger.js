const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: { title: "Contacts API", description: "Api for Contacts application" },
  host: "https://cse341-contacts-moso.onrender.com",
};

const outputFile = "./swagger.json";
const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);
