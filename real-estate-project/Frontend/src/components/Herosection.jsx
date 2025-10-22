
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
            <div className="bg-gray-50 px-6 pb-5 pt-24 md:py-28 mt-3">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center md:justify-between gap-12">

                    {/* Left side - Heading with animation */}
                    <div className="md:w-1/2 flex flex-col justify-center items-start text-left">
                        <h2
                            className={`text-4xl md:text-6xl font-bold text-gray-950 mb-6 leading-snug transition-all duration-1000
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
                        >
                            Developing Spaces, Defining Futures
                        </h2>
                    </div>

                    {/* Right side - Paragraph */}
                    <div className="md:w-1/2">
                        <p className="text-gray-400 md:text-2xl font-medium leading-relaxed">
                            Welcome to Suggestic Buildcon Pvt. Ltd., a trusted name in real estate for over 15 years, crafting quality homes and smart investment opportunities. Blending innovation, design, and integrity, we create spaces that elevate lifestyles—from affordable housing to luxurious retreats. Guided by visionary leadership, our commitment lies in turning your dreams into lasting realities.. 
                        </p>
                    </div>
                </div>
            </div>
            <Carousel />
            <AboutSection/>
            <PropertyListing/>
            <RealEstateServices/>
            <ConstructionProjects/>
            <VideoShowcase/>
            <ReviewSection/>

        </>
    );
}

export default HeroSection;


