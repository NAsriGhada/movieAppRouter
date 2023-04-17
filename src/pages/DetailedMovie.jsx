import React from "react";
import { useParams } from "react-router-dom";

const DetailedMovie = ({ movies }) => {
  const { id } = useParams();

  const foundMovie = movies.find((movie) => movie.id === Number(id));
  // const foundUserIndex = movies.findIndex((movie) => movie.id === Number(id));
  // const foundMovie = movies[foundUserIndex];
  return (
    <div>
      <iframe src={foundMovie.trailer} title="..." />
      <p>Description: {foundMovie.desc}</p>
      ID: {foundMovie.id}
    </div>
  );
};

export default DetailedMovie;
