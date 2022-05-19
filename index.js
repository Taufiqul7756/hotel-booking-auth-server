const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://Arabian:arabian7756@cluster0.4y8td.mongodb.net/burjAlArab?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const bookings = client.db("burjAlArab").collection("bookings");
  console.log("Database connection Successfully");

  //Create
  app.post("/addBooking", (req, res) => {
    const newBooking = req.body;
    bookings.insertOne(newBooking).then((res) => {
      res.send(res.insertedCount > 0);
    });
    console.log(newBooking);
  });

  //Get API of Own Database - Read
  app.get("/bookings", (req, res) => {
    // console.log(req.query.email);

    bookings.find({ email: req.query.email }).toArray((err, documents) => {
      res.send(documents);
    });
  });
});
//?email=", +loggedInUser.email email: req.query.email

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port);
