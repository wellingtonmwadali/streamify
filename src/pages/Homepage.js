import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

function Homepage() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  useEffect(() => {
    const fetchFeaturedMovie = async () => {
      try {
        const apiKey = '4fcdd94c5f3104840d062de0e3501eee';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/458156-john-wick-chapter-3-parabellum?api_key=${apiKey}`
        );
        setFeaturedMovie(response.data);
      } catch (error) {
        console.error('Error fetching featured movie:', error);
      }
    };
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

    fetchFeaturedMovie();
    fetchTopMovies();
  }, []);

  return (
    <div>
    {featuredMovie && (
      <div className="shadow-md">
        <div
              className="bg-cover bg-center"
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}')`,
                height: '430px',
              }}
            >
              <SearchBar onSearchResults={handleSearchResults} />
              <div className="lg:p-4">
                <p className="text-lg font-semibold text-white">{featuredMovie.title}</p>
                <p className="text-sm text-gray-300 mb-4">Release Date: {featuredMovie.release_date}</p>
                <div className="w-1/4">
                <p className="text-lg font-semibold text-white">Overview</p>
                <p className="text-sm text-gray-300">{featuredMovie.overview}</p>
                </div>
              </div>
            </div>
       
        </div>
      
    )}
    {/* Display the search results */}
    {searchResults.length > 0 && (
        <div className="mt-4">
          <h1 className="text-2xl font-semibold">Search Results</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map((movie) => (
              <div key={movie.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
                <p className="text-sm text-gray-500">
                  {movie.release_date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <h1 className='font-bold lg:px-4'>Featured Movies</h1>
      {loading ? (
        <div className='text-center'>Loading...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
