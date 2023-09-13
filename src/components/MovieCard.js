import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaImdb} from 'react-icons/fa';
import { toast } from 'react-hot-toast';

function MovieCard({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
      // Show an alert message when the heart icon is clicked
      toast(isFavorite ? 'Removed from favorites' : 'Added to favorites');
      
    };
  return (
    <div className="bg-white lg:px-5 lg:py-5">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
          className="hover:opacity-80 transition-opacity duration-300 "
          style={{ maxHeight: '270px', maxWidth:'300px'  }}
        />
        <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
        </Link>
        <p className="text-sm text-gray-500 flex"><span className='text-xl'><FaImdb/></span>{movie.release_date}</p>
        <div className='flex gap-12'>
        <p className="text-sm"> Rating: {movie.vote_average} / 10</p>
        <div className="cursor-pointer" onClick={toggleFavorite}>
          <FaHeart
            color={isFavorite ? 'red' : 'gray'}
            size={16}
            className="transition-colors duration-300  hover:text-red-500"/>
        </div>
        </div>
    </div>
  );
}

export default MovieCard;
