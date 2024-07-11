// src/components/Introduction.jsx
import React from 'react';
import hero from '../assets/images/illustration-hero.svg';
import downloadFile from '../assets/files/extension.zip'; // Import your zip file

const Introduction = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadFile;
    link.download = 'your-zip-file.zip'; // Specify the file name for download
    link.click();
  };

  return (
    <div className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:gap-16 md:px-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={hero} alt="Hero" className="max-w-full h-auto md:max-w-lg md:h-auto" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Get your browser Screenshot
          </h1>
          <p className="text-gray-600 mb-6">
            Capture entire web pages effortlessly with the Full Page Screenshot Chrome extension!
            Open a tab and get your snap. Try it for free.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleDownload}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-bold transition duration-300"
            >
              Download Now
            </button>
            {/* Optionally, you can keep the Firefox button as a link */}
            <a
              href={downloadFile}  // Or specify the Firefox download link if different
              className="border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-500 py-2 px-4 rounded-md text-sm font-bold shadow-md transition duration-300"
            >
              Get it on Edge
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
