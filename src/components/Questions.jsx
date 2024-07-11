import React from 'react';
import arrow from '../assets/images/icon-arrow.svg';

const Questions = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-prose mx-auto">
          Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
        </p>
        <div className="max-w-lg mx-auto">
          <details className="border-b border-gray-300 mb-4">
            <summary className="bg-white py-3 px-4 flex items-center justify-between cursor-pointer font-bold text-gray-800 transition duration-300 hover:text-red-500">
            What is a Chrome extension?
              <img src={arrow} alt="Arrow" className="transform transition-transform duration-300" width="18" height="10" />
            </summary>
            <p className="py-3 px-4 text-gray-600">
            A small program that adds features to your Google Chrome web browser. Think of it like a mini app that lives inside Chrome.
            </p>
          </details>
          <details className="border-b border-gray-300 mb-4">
            <summary className="bg-white py-3 px-4 flex items-center justify-between cursor-pointer font-bold text-gray-800 transition duration-300 hover:text-red-500">
            How can I use an extension?
              <img src={arrow} alt="Arrow" className="transform transition-transform duration-300" width="18" height="10" />
            </summary>
            <p className="py-3 px-4 text-gray-600">
            Find extensions in the Chrome Web Store.
            Install the extension you want.
            The extension will appear in your toolbar or settings
            </p>
          </details>
          <details className="border-b border-gray-300 mb-4">
            <summary className="bg-white py-3 px-4 flex items-center justify-between cursor-pointer font-bold text-gray-800 transition duration-300 hover:text-red-500">
            Is there a webpage for Chrome extensions?
              <img src={arrow} alt="Arrow" className="transform transition-transform duration-300" width="18" height="10" />
            </summary>
            <p className="py-3 px-4 text-gray-600">
            Yes, the Chrome Web Store is where you can find and install extensions for Google Chrome.
            </p>
          </details>
          <details className="border-b border-gray-300 mb-4">
            <summary className="bg-white py-3 px-4 flex items-center justify-between cursor-pointer font-bold text-gray-800 transition duration-300 hover:text-red-500">
            What about other browsers?
              <img src={arrow} alt="Arrow" className="transform transition-transform duration-300" width="18" height="10" />
            </summary>
            <p className="py-3 px-4 text-gray-600">
            Most other browsers also have extension stores. Firefox, Edge, and Safari all offer extensions to customize your browsing experience.
            </p>
          </details>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-bold transition duration-300"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Questions;
