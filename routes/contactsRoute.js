const express = require("express");
const router = express.Router();
const connectToDb = require("../database/connection");
const { ObjectId } = require("mongodb");

router.get("/", async (req, res, next) => {
  const db = await connectToDb;
  const collection = await db.collection("contacts");
  const contacts = await collection.find({}).toArray();
  res.json(contacts);
});

router.get("/:id", async (req, res, next) => {
  const db = await connectToDb;
  const collection = await db.collection("contacts");
  const contact = await collection.findOne({
    _id: new ObjectId(req.params.id),
  });
  if (!contact) res.send("Not Found.").status(404);
  else res.json(contact);
});

router.post("/", async (req, res, next) => {
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/contactCreate"
                    }  
                }
            }
        } 
    */

  const contact = req.body;
  let errMsg = "";

  if (!contact.firstName) errMsg += "No firstName provided\n";
  if (!contact.lastName) errMsg += "No lastName provided\n";
  if (!contact.email) errMsg += "No email provided\n";
  if (!contact.favoriteColor) errMsg += "No favoriteColor provided\n";
  if (!contact.birthday) errMsg += "No birthday provided\n";

  if (errMsg) {
    res.send(errMsg).status(500);
    return;
  }

  const db = await connectToDb;
  const collection = await db.collection("contacts");
  const result = await collection.insertOne(contact);

  if (result.acknowledged) res.sendStatus(200);
  else res.send("Error creating the contact").status(500);
});

router.put("/:id", async (req, res, next) => {
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/contactUpdate"
                    }  
                }
            }
        } 
    */

  const _id = new ObjectId(req.params.id);
  const contact = req.body;

  const db = await connectToDb;
  const collection = await db.collection("contacts");
  const result = await collection.findOneAndUpdate(
    { _id },
    { $set: contact },
    { upsert: true },
  );

  if (result) res.sendStatus(200);
  else res.send("Error updating the contact").status(500);
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  const db = await connectToDb;
  const collection = await db.collection("contacts");
  const result = await collection.findOneAndDelete({ _id: new ObjectId(id) });

  if (result) res.sendStatus(200);
  else res.send("Error deleting the contact").status(500);
});

module.exports = router;
