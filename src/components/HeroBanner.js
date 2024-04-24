import React from 'react';
import bannerimage from '../assets/bannerimage.jpg'
const HeroBanner = () => {
  return (
    <div className="relative bg-gray-900">
      <img
        className="object-cover w-full h-64 sm:h-96 md:h-screen"
        src={bannerimage}
        alt="Hero Banner"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-4">Your Awesome Product</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
