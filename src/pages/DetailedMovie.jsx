import React from "react";
import { useParams } from "react-router-dom";

const DetailedMovie = ({ movies }) => {
  const { id } = useParams();

  const foundUserIndex = movies.find((movie) => movie.id === Number(id));
  // const foundUserIndex = movies.findIndex((movie) => movie.id === Number(id));
  // const foundMovie = movies[foundUserIndex];
  return (
    <div>
      <iframe src={foundUserIndex.trailer} title="..." />
      <p>{foundUserIndex.desc}</p>
      {foundUserIndex.id}
    </div>
  );
};

export default DetailedMovie;
