import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white text-black py-6">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-2xl hover:text-blue-600" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-2xl hover:text-blue-400" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl hover:text-pink-500" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-2xl hover:text-red-600" />
        </a>
      </div>
      <div className="text-center mt-4">
        <p>Privacy Policy | Terms and Conditions</p>
        <p>&copy; {new Date().getFullYear()} @MovieBox by Wellington Mwadali</p>
      </div>
    </footer>
  );
}

export default Footer;
