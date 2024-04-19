import React from "react";
import StarRating from "./StarRating";
import EditMovie from "./EditMovie";

const MovieCard = ({ movie, functionDelete, handleEdit }) => {
  const { id, title, description, posterURL, rating } = movie;

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <StarRating rating={rating} />
        <button className="btn delete-btn" onClick={() => functionDelete(id)}>
          Delete
        </button>
        <EditMovie handleEdit={handleEdit} movie={movie} />{" "}
      </div>
    </div>
  );
};

export default MovieCard;
