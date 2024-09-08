
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Faculty = require('./FacultySchema')
const app = express();

const connectionString = "mongodb+srv://23010101208:Fraudy'sDB@cluster0.6cz1c.mongodb.net/";
mongoose.connect(connectionString).then(()=>{
    console.log("Connected with CloudDB");

    app.use(bodyParser.json());

    //GetAll
    app.get('/faculties',async (req,res)=>{
        const ans = await Faculty.find();
        res.send(ans);
    });

    //GetByID
    app.get('/faculties/:id',async (req,res)=>{
        const ans = await Faculty.findOne({id:req.params.id});
        res.send(ans);
    });

    //Create
    app.post('/faculties',async (req,res)=>{
        fac = new Faculty({...req.body});
        const ans = await fac.save();
        res.send(ans);
    });

    //Delete
    app.delete('/faculties/:id',async (req,res)=>{
        const ans = await Faculty.deleteOne({id:req.params.id});
        res.send(ans);
    });

    //Update
    app.patch('/faculties/:id',async (req,res)=>{
        const fac = await Faculty.findOne({id:req.params.id});
        fac.name = req.body.name;
        const ans = await fac.save();
        res.send(ans);

    })

    app.listen(2001, () => {
        console.log("server started on port 2001");
    });
});
