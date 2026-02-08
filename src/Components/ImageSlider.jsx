import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './imageslide.css';

const ImageSlider = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.webp',
    'image8.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timeoutRef = useRef(null);

  // Function to go to forward slider
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function to go to a specific slide via dots
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto play effect
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 2000); // 2 sec auto slide
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Function to handle manual interaction (pause autoplay)
  const handleManualAction = (action) => {
    action(); // run the action (next/prev/goToSlide)
    setIsAutoPlay(false); // stop autoplay
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsAutoPlay(true); // resume autoplay after 3 sec
    }, 3000);
  };

  return (
    <div className="slider-container">
      <div className="image-container">
        <div className="bg-wrap">

          <div
            className="bg"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>
        </div>

        <div className="overlay">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-image"
          />
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() => handleManualAction(prevSlide)}
          className="nav-button left"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => handleManualAction(nextSlide)}
          className="nav-button right"
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleManualAction(() => goToSlide(index))}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
