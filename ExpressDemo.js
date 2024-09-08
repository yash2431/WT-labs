const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/text/:name', (req, res) => {
    const myname = req.params.name;
    res.send(`Hello from,${myname}`);
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "about.txt"));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "contact.txt"));
});


app.listen(2020, () => {
    console.log("Server started at 2020");
});