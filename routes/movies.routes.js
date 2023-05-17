// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();
const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');
// all your routes here

router.get('/movies/create', (req, res) => {
  Celebrity.find()
    .then(allCelebrities => res.render('movies/new-movie', { allCelebrities }))
    .catch(e => console.log(e));
});

router.post('/movies/create', (req, res) => {
  const { title, genre, plot, cast } = req.body;
  Movie.create({ title, genre, plot, cast })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(err));
});

router.get('/movies', (req, res) => {
  Movie.find()
    .then(allMovies => res.render('movies/movies', { allMovies }))
    .catch(e => console.log(e));
});

router.get('/movies/:id_movie', (req, res) => {
  const { id_movie } = req.params;
  Movie.findById(id_movie)
    .populate('cast')
    .then(movie => res.render('movies/movie-details', movie))
    .catch(e => console.log(e));
});

router.post('/movies/:id_movie/delete', (req, res) => {
  const { id_movie } = req.params;
  Movie.findByIdAndDelete(id_movie)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(err));
});

router.get('/movies/:id_movie/edit', (req, res) => {
  const { id_movie } = req.params;
  Movie.findById(id_movie)
    .then(movieUpdate => res.render('movies/edit-movie', movieUpdate))
    .catch(e => console.log(e));
});

router.post('/movies/:id_movie/edit', (req, res) => {
  const { title, genre, plot } = req.body;
  const { id_movie } = req.params;
  Movie.findByIdAndUpdate(id_movie, { title, genre, plot })
    .then(() => res.redirect(`/movies/${id_movie}`))
    .catch(e => console.log(e));
});

module.exports = router;
