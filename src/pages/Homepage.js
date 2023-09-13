import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function Homepage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const apiKey = '4fcdd94c5f3104840d062de0e3501eee';
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
        );
        setMovies(response.data.results.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top movies:', error);
        setLoading(false);
      }
    };

    fetchTopMovies();
  }, []);

  return (
    <div>
      <h1 className='font-bold px-4'>Top 10 Movies</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
