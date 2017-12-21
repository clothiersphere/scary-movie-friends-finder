const axios = require('axios');
const keys = require('../keys.js');

const { apiKey, apiToken } = keys;

const getMovies = async (req, res, next) => {
  const fetchNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`;
  // const url = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=primary_release_date.asc&primary_release_date.gte=2017-11-15&primary_release_date.lte=2018-03-01&with_genres=27|53&with_release_type=3&region=US&api_key=${apiKey}`;
  const nowPlaying = await axios(fetchNowPlaying).then(response => response.data);
  const nowPlayingScary = nowPlaying.results.filter(movie => movie.genre_ids.includes(27 || 53));
  res.send(nowPlayingScary);
  next();
};

const getGenre = async (req, res, next) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;
  const data = await axios(url).then(response => response.data);
  res.send(data);
  next();
};

// { id: 27, name: 'Horror' },
// { id: 53, name: 'Thriller' },
// { id: 80, name: 'Crime' },

module.exports = {
  getMovies,
  getGenre,
};
