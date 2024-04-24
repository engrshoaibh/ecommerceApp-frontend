
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductCategoryCard = ({ title, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-full shadow-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-28 h-28 object-cover" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

const ProductCategories = () => {
  const categories = [
    { title: 'Category 1', imageUrl: 'https://via.placeholder.com/50' },
    { title: 'Category 2', imageUrl: 'https://via.placeholder.com/50' },
    { title: 'Category 3', imageUrl: 'https://via.placeholder.com/50' },
    { title: 'Category 3', imageUrl: 'https://via.placeholder.com/50' },
    { title: 'Category 3', imageUrl: 'https://via.placeholder.com/50' },
    { title: 'Category 3', imageUrl: 'https://via.placeholder.com/50' },
    // Add more categories as needed
  ];

  return (
    
    
    <div className="container mx-auto py-8">
   
    
      <h2 className="text-2xl font-semibold mb-4 text-center">Product Categories</h2>
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      
        {categories.map((category, index) => (
             
            <SwiperSlide>
          <ProductCategoryCard key={index} title={category.title} imageUrl={category.imageUrl} />
          </SwiperSlide>
          
        ))}
       
      </div>
      </Swiper>
    
      
    </div>
   
   

    
  );
};

export default ProductCategories;
