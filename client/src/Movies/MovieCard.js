import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;
  // console.log(props);
  return (
    <div className="movie-card">
      <NavLink to={`/movies/${id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </NavLink>
    </div>
  );
};

export default MovieCard;
