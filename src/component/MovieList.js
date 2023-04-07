import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, query }) => {
  return (
    <div>
      {movies
        .filter((pst) => {
          if (query === "") {
            return pst;
          } else if (pst.name.toLowerCase().includes(query.toLowerCase())) {
            return pst;
          }
          return false;
        })
        .map((el, key) => {
          return <MovieCard el={el} key={key} />;
        })}
    </div>
  );
};

export default MovieList;
