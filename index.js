const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

let db;

MongoClient.connect(MONGO_URI, { useUnifiedTopology: true })
  .then(client => {
    db = client.db('sit737db');
    console.log("✅ Connected to MongoDB");
  })
  .catch(err => console.error("❌ Failed to connect to MongoDB:", err));

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to SIT737 Task 9.1P Microservice!");
});

// Create (POST)
app.post("/data", async (req, res) => {
  const result = await db.collection("records").insertOne(req.body);
  res.send(result);
});

// Read (GET)
app.get("/data", async (req, res) => {
  const data = await db.collection("records").find().toArray();
  res.send(data);
});

app.listen(PORT, () => console.log(`🚀 App running on port ${PORT}`));
