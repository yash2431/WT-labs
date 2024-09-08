const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

mongoose.connect("mongodb+srv://${DBUSER}:${DBPASS}@cluster0.6cz1c.mongodb.net/").then(()=> {
    console.log("Connected to MongoDB");
   }).catch((err) => {
    console.log(err);
});

app.listen(process.env.PORT, () => {
    console.log("Server is running on port"+" "+process.env.PORT);
});