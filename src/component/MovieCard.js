import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ el }) => {
  return (
    <div>
      <Link to={`/movie/${el.id}`}>
        <div class="card" style={{ width: "18rem" }}>
          <img src={el.photo} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Name: {el.name}</h5>
            <h5 class="card-title">Category :{el.Categorie}</h5>
            <h5 class="card-title">Country: {el.pays}</h5>
            <h5 class="card-title">Rate: {el.rate}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
