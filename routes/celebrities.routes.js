// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities/create', (req, res) => {
  res.render('celebrities/new-celebrity');
});

router.post('/celebrities/create', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(newCelebrity => res.render('celebrities/celebrities', newCelebrity))
    .catch(e => console.log(e));
});

router.get('/celebrities', (req, res) => {
  Celebrity.find()
    .then(allCelebrities =>
      res.render('celebrities/celebrities', { allCelebrities })
    )
    .catch(e => console.log(e));
});

module.exports = router;
