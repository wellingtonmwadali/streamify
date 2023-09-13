import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ onSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const apiKey = '4fcdd94c5f3104840d062de0e3501eee';
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
      );
      onSearchResults(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error searching for movies:', error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        placeholder="Search for movies..."
        className="bg-transparent px-4 py-2 rounded-l-md focus:outline-none border border-gray-300 w-64 text-white"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="bg-transparent hover:bg-slate-200 text-white py-2 px-4 rounded-md"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
}

export default SearchBar;
