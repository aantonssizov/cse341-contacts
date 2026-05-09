const express = require("express");
const router = express.Router();
const connectToDb = require("../database/connection");
const { ObjectId } = require("mongodb");

router.get("/getall", async (req, res, next) => {
  const db = await connectToDb;
  const collection = await db.collection("contacts");
  const contacts = await collection.find({}).toArray();
  res.json(contacts);
});

router.get("/get/:id", async (req, res, next) => {
  const db = await connectToDb;
  const collection = await db.collection("contacts");
  const contact = await collection.findOne({
    _id: new ObjectId(req.params.id),
  });
  if (!conctact) res.send("Not Found.").status(404);
  else res.json(contact);
});

module.exports = router;
