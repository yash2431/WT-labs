const express = require('express');
const app = express();
const path = require('path');

const middleWareFunc = (req, res, next) => {
    console.log("Middleware function called");
    next();
};

const loginMiddleware = (req, res, next) => {
    console.log("Login middleware called");
    next();
}

app.get('/home', middleWareFunc, loginMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, "Home.html"));
});

app.listen(2024, () => {
    console.log("Server started on port 2024");
});