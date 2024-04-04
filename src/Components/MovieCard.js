import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="movie-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="movie-poster" src={movie.posterURL} alt={movie.title} />
      <div className={`movie-info ${isHovered ? "visible" : ""}`}>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
