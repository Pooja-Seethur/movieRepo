/*************************************************************
 * Name         :   index.js 
 * Author       :   Pooja Seethur 
 * Description  :   Main API server to handle all db related 
 *                  operations.        
 *************************************************************/

/**********Include library***********/

const express = require('express');
const app = express();
const db = require("./config/db");
// const Movies = require("./model/movies");

// Read config file .env for all environment variables or (import {env} from 'process';)
require("dotenv").config();

// connect to database
db.connect();

// The middleware 
app.use(function (req, res, next) {
    console.log("Middleware called")
    next();
});

/**********Importing indiviadual details routes*********/

const movieRoutes = require('./routes/movie');     
app.use('/movies', movieRoutes);

/*****Listeing on the port*****/

app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    console.log(`Listening on ${process.env.PORT}...`);
});
