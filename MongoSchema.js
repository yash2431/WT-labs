const mongoose = require('mongoose');
const studentschema = mongoose.Schema({
    StudentName: { type: String, required: true },
    StudentEnrollment:{type:Number,required:true}
});
const Student = new mongoose.model('Student', studentschema);
module.exports = Student;
