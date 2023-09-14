import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFilm, FaTv, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import { BiMovie } from 'react-icons/bi';

function Sidebar() {
  const commonPath = '/';

  return (
    <div className="border border-gray-500  text-gray lg:w-1/6 rounded  flex flex-col justify-between py-4">
      {/* Navigation Links */}
      <div className='flex'>
      <div className=' font-bold text-black text-xl'>MovieBox</div>
      <BiMovie className='text-3xl  bg-pink-500 rounded-full'/>
      </div>
      <div className="flex flex-col space-y-4 ">
        <Link to={commonPath} className="flex items-center hover:bg-pink-500 rounded-md">
          <FaHome className="mr-2" />
          Home
        </Link>
        <Link to={commonPath} className="flex items-center  hover:bg-pink-500 rounded-md">
          <FaFilm className="mr-2" />
          Movies
        </Link>
        <Link to={commonPath} className="flex items-center  hover:bg-pink-500 rounded-md">
          <FaTv className="mr-2" />
          TV Series
        </Link>
        <Link to={commonPath} className="flex items-center  hover:bg-pink-500 rounded-md">
          <FaCalendarAlt className="mr-2" />
          Upcoming
        </Link>
      </div>

      {/* Logout Link */}
      <div className="flex items-center  hover:bg-pink-500 rounded-md">
        <FaSignOutAlt className="mr-2" />
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
