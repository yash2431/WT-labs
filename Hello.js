// Create a hello world webapp using “http” core module in NodeJS

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(2004, () => {
    console.log("Server started at 2004");
});