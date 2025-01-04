// Carousel.js
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full mx-0 rounded">
      <div className="relative overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-96 object-cover"
        />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
