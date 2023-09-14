import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // Ensure the correct import path

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '4fcdd94c5f3104840d062de0e3501eee';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="shadow-md rounded-md h-96 mx-auto"
        />

        <div className='text-black text-center'>
          <h1 className="text-3xl font-semibold my-4">{movie.title}</h1>
          <p className="text-sm" data-testid="movie-release-date">
            Release Date: {movie.release_date}
          </p>
          <p className="text-sm font-bold" data-testid="movie-runtime">
            Runtime: {movie.runtime} minutes
          </p>
          <div className='flex items-center justify-center'>
            <p className="text-sm my-4 font-medium lg:w-1/2 bg-slate-300 rounded-md" data-testid="movie-overview">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;



