const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require("express");
const app = express(); // rest objects - storing express variable to use them further, // use to access all the properties of express

// const DB = 'mongodb+srv://admin:hemocare@hemocare.dbjwdoe.mongodb.net/Hemocare?retryWrites=true&w=majority';
dotenv.config({ path:'./.env' });
require('./db/conn');
const PORT = process.env.PORT;
// Connect to databas
// Middleware
const middleware = (req, res, next) => {
  console.log(`Hello Middleware`);
  next();
};

// routes
// 1 test route
app.get("/", (req, res) => {
  res.send({
    message: "Welcome Hemocare",
  }); // there are different status code and 200 - mean okay
});
// sample - http://localhost:3000
app.get("/aboutus", middleware, (req, res) => {
  res.send({
    message: "aboutus",
  }); // there are different status code and 200 - mean okay
});
// sample - http://localhost:3000/aboutus
app.get("/findblood", middleware, (req, res) => {
  res.send({
    message: "findblood",
  }); // there are different status code and 200 - mean okay
});
// sample - http://localhost:3000/findblood
app.get("/signin", (req, res) => {
  res.send({
    message: "signin",
  }); // there are different status code and 200 - mean okay
});
// sample - http://localhost:300/signin

// const PORT = 3000;

// listen - to run our application
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
