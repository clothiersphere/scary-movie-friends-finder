const axios = require('axios');

function getMovies(req, res, next) {
  const data = '';
  res.send(data);
  next();
}

module.exports = {
  getMovies,
};
