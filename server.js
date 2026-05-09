const express = require("express");
const app = express();
const port = 3000;
const contactsRoute = require("./routes/contactsRoute");
const db = require("./database/connection");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/contacts", contactsRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
