/*************************************************************
 * Name         :   movie.js 
 * Author       :   Pooja Seethur 
 * Description  :   Manages movie functionality requests        
 *************************************************************/

const express = require('express');
const checkAuth = require('../config/checkAuth');
const router = express.Router();
const Movies = require("../model/movies");

/******* API to get list of movies by genre *******/

router.get('/moviesByGenre', checkAuth, (req, res) => {

        Movies.find({}, (err, data) => {

            let dataSet = JSON.parse(JSON.stringify(data));
            let returnedArray = dataSet;
            let resultArrayGenre = [];
            let resultArray = [];
            let counter = 0;
    
            /******Loop to get genre*****/
    
            for (counter = 0; counter < returnedArray.length; counter++) {
    
                let genress = returnedArray[counter].genres;
                resultArray.push(...genress);
    
            }
    
            let finalGenres = [...new Set(resultArray)];
            //console.log(finalGenres)
    
            /******Loop to get movies for each genre*****/
    
            for (genreCounter = 0; genreCounter < finalGenres.length; genreCounter++) {
    
                let eachGenre = finalGenres[genreCounter]
                
                returnData(eachGenre, resultArrayGenre, finalGenres.length)
    
            }
    
            /****Function which returns the movies by genre****/
    
            function returnData(eachGenre, resultArrayGenre, criteriaLength) {
    
                Movies.find({ genres: { $eq: eachGenre } }, { director: 1, imdb_rating: 1, length: 1, poster: 1, title: 1 }, (err, data) => {
    
                    let resultingData = Array.from(data)
    
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ responseCode: 500, responseDescription: 'aaa' });
                    }
                    else {
                        let movieBygenres = ({
                            genre: eachGenre,
                            movies: resultingData
                        })
                        resultArrayGenre.push(movieBygenres)
                    }
    
                    if (resultArrayGenre.length === criteriaLength) {
                        res.status(200).json({
                            responseCode: 200,
                            responseDescription: "Movies by genre",
                            responseObject: {
                                resultArrayGenre
                            }
                        });
                        console.log('response sent')
                    }
                })
    
            }
    
        });
    
});


module.exports = router;