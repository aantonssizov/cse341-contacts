const express = require("express");
const app = express();
const contactsRoute = require("./routes/contactsRoute");
const db = require("./database/connection");
const port = process.env.PORT || 7500;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/contacts", contactsRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
