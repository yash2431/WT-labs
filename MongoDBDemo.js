const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://23010101208:Fraudy'sDB@cluster0.6cz1c.mongodb.net/").then(()=> {
    console.log("Connected to MongoDB");
   }).catch((err) => {
    console.log(err);
});

app.listen(2004, () => {
    console.log("Server is running on port 2004");
});

