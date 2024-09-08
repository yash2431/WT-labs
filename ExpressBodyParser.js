const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post('/name/:id', (req, res) => {
    let name = req.body;
    res.send(name); 
});

app.get('/login', (req, res) => {
    res.send('Login Page');
});
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username === 'admin' && password === 'admin') {
        res.send('Welcome, admin!');
    } else {
        res.send('Invalid username or password');
    }
});

app.listen(2002, () => {
    console.log("Server started at 2002");
});