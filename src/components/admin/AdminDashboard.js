import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const AnimatedText = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (currentCharacterIndex <= words[currentWordIndex].length) {
        setDisplayedText(words[currentWordIndex].slice(0, currentCharacterIndex));
        setCurrentCharacterIndex(prevIndex => prevIndex + 1);
      } else {
        setCurrentCharacterIndex(0);
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 100); // Delay before starting the next word animation
      }
    }, 150); // Speed of animation (milliseconds per character)

    return () => clearInterval(animationInterval);
  }, [currentCharacterIndex, currentWordIndex, words]);

  return (
    <span className="relative">
      <span className="animation">Manage {displayedText}</span>
      <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-500"></span>
    </span>
  );
};

const AdminDashboard = () => {
  const animatedWords = ["Customers", "Products", "Sellers", "Categories", "Staff Roles"];

  return (
    <div className="flex  h-screen">
      
        <Sidebar />
      
      <div className="bg-gray-100 flex  justify-center items-center w-full">
        <div className="relative">
          <h1 className="text-5xl font-bold text-center">
            <AnimatedText words={animatedWords} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
