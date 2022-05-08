const mongoose = require('mongoose');

// creates a new Express server
const express = require('express');
const app = express();
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// route setup
app.get("/", (req, res) => res.send(" go"));

// tell our app which port to run on
const port = process.env.PORT || 3000;

// log success message to console when server is running
app.listen(port, () => console.log(`Server is running on port ${port}`));







