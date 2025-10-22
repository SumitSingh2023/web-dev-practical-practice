

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/cr-img-2.jpg"
import image2 from "../assets/cr-img-2.jpg"
import image3 from "../assets/cr-img-3.jpg"
import image4 from "../assets/download-1.jpg"
import image5 from "../assets/cr-img-4.jpg"

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
      {/* Images */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Slide ${index + 1}`} 
            className="w-full flex-shrink-0 object-cover h-60 sm:h-80 md:h-[450px] lg:h-[550px] xl:h-[650px] transition-all duration-500"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-800 p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-800 p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white w-8 shadow-lg" 
                : "bg-white bg-opacity-50 w-3 hover:bg-opacity-80"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

