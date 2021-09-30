const express = require("express"); // import express
const mongoose = require("mongoose"); // import mongoose
const routes = require("./routes/fclub");
const app = express();

require('dotenv').config();

app.use(express.json()); // parses incoming requests with JSON payloads
app.use('/', routes); // untuk menggunakan routes
app.use('/uploads', express.static('./uploads'));

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
});

// membuat koneksi ke database mongodb
mongoose.connect(
    // process.env.MONGODB_URI,
    'mongodb+srv://alkasakti:alkasakti12@cluster0.hoy9b.mongodb.net/footballclub?retryWrites=true&w=majority',
    // { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is: ", mongoose.connection.readyState);
    }
);