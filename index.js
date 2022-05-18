const express = require("express");
const app = express();
const port = 3001;

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://Arabian:arabian7756@cluster0.4y8td.mongodb.net/burjAlArab?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("burjAlArab").collection("bookings");
  console.log("Database Connected Successfully");
  client.close();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
