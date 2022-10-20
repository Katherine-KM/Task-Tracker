const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const connectDB = require("./config/database");
const cors = require('cors');
const mainRoutes = require("./routes/main");

// Use Cors
app.use(cors())

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Routes
app.use('/', mainRoutes)

// Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}, you better catch it!`);
  });