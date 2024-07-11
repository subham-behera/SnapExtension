// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-3">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">SnapExtension</a>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#faq" className="hover:text-gray-300">FAQ</a></li>
            <li><a href="https://developer.chrome.com/docs/extensions/mv2/getstarted" className="hover:text-gray-300">Instruction</a></li>
            <li><a href="https://github.com/subham-behera/SnapExtension" className="hover:text-gray-300">GitHub</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
