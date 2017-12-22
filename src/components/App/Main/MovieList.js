import React from 'react'

const MovieList = ({ movies = [] }) => {
  return (
    <div className="MovieList">
      { movies.map((movie, i) => {
        console.log(movies, "movies")
        let posterPath = movie.poster_path;
        if (posterPath) {
          const movieImg = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
          return (
            <div className="Movie" key={i}>
              <img src={movieImg} />
              {movie.original_title}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default MovieList;
