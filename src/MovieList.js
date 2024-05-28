import React from "react";
import MovieCard from "./MovieCard";
//import movies from "./movies";

const MovieList = ({movies}) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.title} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;