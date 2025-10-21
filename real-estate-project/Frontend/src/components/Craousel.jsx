import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/cr-img-2.jpg"
import image2 from "../assets/cr-img-2.jpg"
import image3 from "../assets/cr-img-3.jpg"
import image4 from "../assets/download-1.jpg"
import image5 from "../assets/cr-img-4.jpg"

//const images = [image1, image2, image3,image4]

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
        <div className="relative  max-w-8xl mx-auto overflow-hidden rounded-lg shadow-lg">
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
                        className="w-full flex-shrink-0 object-cover h-36        
                            /* Mobile height */
                            sm:h-72     
                            /* Small screens */
                            md:h-80   
                            /* Medium screens */
                            lg:h-[300px] 
                            /* Large screens */
                            xl:h-[400px] 
                            /* Extra large screens */
                            transition-all 
                            duration-500
                        "
                    />
                ))}

            </div>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`h-3 w-3 rounded-full cursor-pointer transition-all ${index === currentIndex ? "bg-gray-800 w-6" : "bg-gray-400"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;


