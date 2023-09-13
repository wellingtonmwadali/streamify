import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/sidebar';

function MovieDetails({ match }) {
  const { id } = match.params;
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '4fcdd94c5f3104840d062de0e3501eee';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">{movie.title}</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p>Release Date: {movie.release_date}</p>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>{movie.overview}</p>
        </div>
      )}
      <Sidebar />
    </div>
  );
}

export default MovieDetails;
