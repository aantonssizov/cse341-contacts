const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const contactsRoute = require("./routes/contactsRoute");
const db = require("./database/connection");
const port = process.env.PORT || 7500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/contacts", contactsRoute);

app.listen(port, () => {
  console.log(`Contacts app listening on port ${port}`);
});
