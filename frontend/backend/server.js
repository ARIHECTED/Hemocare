const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require("express");
const app = express(); // rest objects - storing express variable to use them further, // use to access all the properties of express

// const DB = 'mongodb+srv://admin:hemocare@hemocare.dbjwdoe.mongodb.net/Hemocare?retryWrites=true&w=majority';
dotenv.config({ path:'./.env' });
require('./db/conn');
const PORT = process.env.PORT;

app.use(express.json());
// we link the router files to make our route easy
app.use(require('./router/auth'));
// Connect to database
// Middleware
const middleware = (req, res, next) => {
  console.log(`Hello Middleware`);
  next();
};

// hospital schema
const User = require('./model/hospitalSchema');
// donor schema
const User1 = require('./model/donarSchema');




// listen - to run our application
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
