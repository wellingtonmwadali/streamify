import React, { useState } from 'react';
import axios from 'axios';
import {AiOutlineMenu} from 'react-icons/ai'
import {BiMovie} from 'react-icons/bi'

function SearchBar({ onSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
//handle search queries from api
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
//handle header layout
  return (
    
    <div className ="lg:flex justify-between lg:px-4 py-2 ">
      <div className='flex lg:gap-3 sm:gap-1'>
      <div className=' font-bold text-white text-xl'>MovieBox</div>
      <BiMovie className='text-3xl  bg-pink-500 rounded-full'/>
      </div>
    
     <div className="">
      <input
        type="text"
        placeholder="Search for movies..."
        className="bg-transparent px-4 py-2 rounded-md focus:outline-none border border-gray-300 lg:w-64 text-white"
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
    <div className='flex gap-1'>
    <div className='text-white font-bold text-sm '>Signin</div>
    <AiOutlineMenu 
    className='bg-pink-500 text-xl p-1 rounded-full'/>
    </div>
   
   
    </div>
  );
}

export default SearchBar;
