const mongoose = require('mongoose');
const laptopschema = mongoose.Schema({
    createdAt: { type: String, required: true },
    name:{ type: String, required: true },
    avatar: String,
    price: { type: Number, required: true },
    id:{type:Number,required:true}
});
const Laptop = new mongoose.model('Laptop', laptopschema);
module.exports = Laptop;