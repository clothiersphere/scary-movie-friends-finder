const express = require('express');
const smff = require('./server/movies');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/getMovies', smff.getMovies);

app.get('/api/getGenre', smff.getGenre);

app.listen(1234, () => {
  console.log('%s listening at %d', app.name, 1234);
});

module.exports = 'api';
