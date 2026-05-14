const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: { title: "Contacts API", description: "Api for Contacts application" },
  servers: [
    {
      url: "https://cse341-contacts-moso.onrender.com",
    },
  ],
};

const outputFile = "./swagger.json";
const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);
