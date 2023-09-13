import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg hover:opacity-80 transition-opacity duration-300"
        />
        <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
        <p className="text-sm text-gray-500">{movie.release_date}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
