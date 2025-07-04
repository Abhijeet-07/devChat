const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
require("dotenv").config(); // loads .env from the root

const app = express();

app.post("/signup", async (req, res) => {
  //Creating a new instance of User model
  const user = new User({
    firstName: "Abhijeet",
    lastName: "Maurya",
    emailId: "abhijeet@123.com",
    password: "Abhi@123",
  });
  try {
    await user.save();
    res.send("User Added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("DataBase Connected Successfully");
    app.listen(3000, () => {
      console.log("server is listening on PORT 3000");
    });
  })
  .catch((err) => {
    console.log("Database connectionion error");
  });
