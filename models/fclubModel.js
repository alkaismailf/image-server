const mongoose = require('mongoose'); // import mongoose

const fclubSchema = new mongoose.Schema({
    name: {type:String, required:true},
    image: String,
    description: String,
    keywords: String,
    origin: String,
    comments: [{ text:String, date: {type:String, default: new Date()} }] 
});

const Fclub = mongoose.model('Fclub', fclubSchema); // convert ke model dengan nama Fclub
module.exports = Fclub; // export untuk digunakan di controller