// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-1">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="mb-2">&copy; 2024 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
