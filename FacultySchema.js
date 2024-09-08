
const mongoose = require('mongoose');

const facultyschema = mongoose.Schema({
    FacultyID:Number,
    FacultyName:String    
});

module.exports = mongoose.model("Faculty",facultyschema);
