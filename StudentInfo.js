const mongoose = require('mongoose');
const express = require('express');
const Student = require('./MongoSchema');
const bodyParser = require('body-parser');
const app = express();


mongoose.connect("mongodb+srv://23010101208:Fraudy'sDB@cluster0.6cz1c.mongodb.net/").then(() => {
    app.listen(2007, () => {
        console.log("Server is ruuning on port 2007");
    });
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});
app.use(bodyParser.json());

//read
app.get('/students', (req, res) => {
    Student.find(req.params.id).then((data) => {
        res.send(data);
    }); 
});

app.get('/students/:id', (req, res) => {
    Student.findById(req.params.id).then((data) => {
        res.send(data);
    }); 
});

//update
app.put('/students/:id', (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        res.send(data);
    });
});

//create
app.post('/students', (req, res) => {
    const student = new Student({
        StudentName: req.body.StudentName,
        StudentEnrollment: req.body.StudentEnrollment
    });
    student.save().then((data) => {
        res.send(data);
    });
});

//delete
app.delete('/students/:id', (req, res) => {
    Student.findByIdAndDelete(req.params.id).then((data) => {
        res.send(data);
    });
});

