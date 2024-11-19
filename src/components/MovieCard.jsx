import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.imdbID}`}>
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/500x750?text=No+Image"}
                    alt={movie.Title}
                />
                <h3>{movie.Title}</h3>
            </Link>
        </div>
    );
};

export default MovieCard;