/*************************************************************
 * Name         :   movies.js 
 * Author       :   Pooja Seethur 
 * Description  :   Connects to movies collection and accesses it         
 *************************************************************/

/**********Include mongoose library***********/

const mongoose = require('mongoose');

/***Access the collection***/

const moviesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    backdrop: {type: String}, cast: {type: String}, classification: {type: String},
    director: {type: String}, genres: {type: Array}, id: {type: Array}, imdb_rating: {type: Number},
    length: {type: String}, overview: {type: String}, poster: {type: String}, released_on: {type: String},
    slug: {type: String}, title: {type: String}
});

/*****Export model*****/

module.exports = mongoose.model("Movies", moviesSchema, "movie_data_collection");


