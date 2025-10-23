
import { useEffect, useState } from "react";
import Carousel from "./Craousel";
import AboutSection from "./AboutSection";
import PropertyListing from "./PropertyCard";
import RealEstateServices from "./RealEstateService";
import ConstructionProjects from "./ContructionProjects";
import VideoShowcase from "./VideoShowcase";
import ReviewSection from "./Reviewsection";

function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Page mount hone ke 100ms baad animation start
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="bg-gray-50 px-6 pt-32 md:py-28 mt-3 md:pb-15">
                <div className="max-w-fit mx-auto flex flex-col md:flex-row items-center md:items-center md:justify-between gap-5">

                    {/* Left side - Heading with animation */}
                    <div className="md:w-1/2 flex flex-col justify-center items-start text-left md:pt-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-950 mb-6 leading-snug overflow-hidden flex flex-col p-4 ">
                            {/* Discover Your */}
                            <span
                                style={{
                                    display: "inline-block",
                                    opacity: 0,
                                    transform: "translateY(50px) scale(0.8)",
                                    transformOrigin: "bottom center",
                                    animation: "lineReveal 0.6s cubic-bezier(0.68,-0.55,0.27,1.55) forwards",
                                    animationDelay: "0.2s",
                                }}
                            >
                                Discover Your
                            </span>

                            {/* Perfect Living */}
                            <span
                                style={{
                                    display: "inline-block",
                                    opacity: 0,
                                    transform: "translateY(50px) scale(0.8)",
                                    transformOrigin: "bottom center",
                                    animation: "lineReveal 0.8s cubic-bezier(0.68,-0.55,0.27,1.55) forwards",
                                    animationDelay: "1.0s",
                                }}
                            >
                                Perfect Living Spot
                            </span>

                        </h2>

                        {/* Inline keyframes */}
                        <style>
                            {`
      @keyframes lineReveal {
        0% {
          opacity: 0;
          transform: translateY(50px) scale(0.8);
          text-shadow: 0 0 0 rgba(0,0,0,0);
        }
        60% {
          opacity: 1;
          transform: translateY(-5px) scale(1.05);
          text-shadow: 0 0 15px rgba(0,0,0,0.15);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
          text-shadow: 0 0 5px rgba(0,0,0,0.1);
        }
      }
    `}
                        </style>
                    </div>




                    {/* Right side - Paragraph */}
                    <div className="md:max-w-1/2 pl-10 md:pt-24 md:pr-15 sm:pb-5">
                        <p className="text-gray-800 md:text-md font-medium leading-relaxed">
                            Welcome to Suggestic Buildcon Pvt. Ltd. — a trusted name in real estate for over 15 years. We specialize in crafting quality homes and smart investment opportunities that stand the test of time.

                            With a perfect blend of innovation, design, and integrity, we create spaces that elevate lifestyles — from affordable residences to luxurious retreats.

                            Guided by visionary leadership and a commitment to excellence, we turn your dreams into lasting realities.

                            Every brick we lay reflects our promise of quality, transparency, and long-term value. At Suggestic Buildcon, we don’t just build structures — we build trust, relationships, and a better tomorrow.
                        </p>
                    </div>
                </div>
            </div>
            <Carousel />
            <AboutSection />
            <PropertyListing />
            <RealEstateServices />
            <ConstructionProjects />
            <VideoShowcase />
            <ReviewSection />

        </>
    );
}

export default HeroSection;


