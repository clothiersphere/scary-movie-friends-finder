import React from 'react'

const MovieList = ({ movies = [] }) => {
  return (
    <div className="MovieList">
      { movies.map((movie, i) => {
        console.log(movie, "movies")
        const movieImg = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
        return (
          <div className="Movie" key={i}>
            <img src={movieImg} />
            {movie.original_title}
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
