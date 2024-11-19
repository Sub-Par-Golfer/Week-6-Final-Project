import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=67b7f307&i=${id}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading movie details...</div>;
  }

  if (!movie) {
    return <div className="error">Movie details could not be found.</div>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details-card">
        <div className="movie-poster">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
            alt={movie.Title}
          />
        </div>
        <div className="movie-info">
          <h1>{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
        </div>
      </div>
      <div className="movie-details-actions">
        <a href="/search">
          <button className="btn">Back to Search</button>
        </a>
      </div>
    </div>
  );
};

export default MovieDetails;