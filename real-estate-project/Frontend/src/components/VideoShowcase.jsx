


import React, { useRef, useState } from 'react';
import StatsSection from './Statssection';

// Agar src/assets se import karna hai toh
import video1 from "../assets/video/video-1.mp4"
import video2 from "../assets/video/video-2.mp4"
import video3 from "../assets/video/video-3.mp4"


const VideoShowcase = () => {
    const videoRefs = [useRef(null), useRef(null), useRef(null)];
    const [playingStates, setPlayingStates] = useState([false, false, false]);
    const [mutedStates, setMutedStates] = useState([true, true, true]);

    const handlePlayPause = (index) => {
        const newPlayingStates = [...playingStates];
        const newMutedStates = [...mutedStates];

        if (videoRefs[index].current) {
            if (newPlayingStates[index]) {
                videoRefs[index].current.pause();
            } else {
                videoRefs[index].current.play();
                newMutedStates[index] = false;
            }
            newPlayingStates[index] = !newPlayingStates[index];
        }

        setPlayingStates(newPlayingStates);
        setMutedStates(newMutedStates);
    };

    const handleMuteUnmute = (index) => {
        const newMutedStates = [...mutedStates];

        if (videoRefs[index].current) {
            videoRefs[index].current.muted = !videoRefs[index].current.muted;
            newMutedStates[index] = !newMutedStates[index];
        }

        setMutedStates(newMutedStates);
    };

    const videoProjects = [
        {
            id: 1,
            title: "New construction",
            videoSrc: video1
        },
        {
            id: 2,
            title: "Lake Site",
            location: "Alibaug",
            type: "5 BHK Villa",
            duration: "3:15",
            videoSrc: video2
        },
        {
            id: 3,
            title: "Farmhouse Experience",
            location: "Lonavala",
            type: "Farmhouse",
            videoSrc: video3
        },
        
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <span className="text-[#0d6efd] font-semibold text-lg mb-2 block">PROPERTY VIDEOS</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Virtual <span className="text-[#0d6efd]">Property Tours</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Take virtual tours of our premium properties and experience them from the comfort of your home.
                    </p>
                </div>

                {/* More Property Videos Section */}
                <div>
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        More Property Videos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {videoProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                            >
                                {/* Video Player */}
                                <div className="relative">
                                    <video
                                        ref={videoRefs[index]}
                                        className="w-full h-64 object-cover"
                                        poster={project.videoThumbnail}
                                        loop
                                        muted={mutedStates[index]}
                                    >
                                        <source src={project.videoSrc} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            onClick={() => handlePlayPause(index)}
                                            className="bg-[#0d6efd] text-white p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300"
                                        >
                                            {playingStates[index] ? (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>

                                    {/* Video Controls */}
                                    <div className="absolute bottom-3 right-3 flex gap-2">
                                        {/* Mute/Unmute Button */}
                                        <button
                                            onClick={() => handleMuteUnmute(index)}
                                            className="bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-all duration-300"
                                        >
                                            {mutedStates[index] ? (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15.536a5 5 0 001.414 1.414m0 0l-2.829 2.829m2.829-2.829l2.829 2.829m0-11.314L5.586 7.05m2.828 2.828l2.829-2.829" />
                                                </svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0 0l-2.829 2.829m2.829-2.829l2.829 2.829" />
                                                </svg>
                                            )}
                                        </button>

                                        {/* Video Duration */}
                                        {/* <div className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                                            {project.duration}
                                        </div> */}
                                    </div>
                                </div>

                                {/* Video Info */}
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0d6efd] transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center text-gray-600 mb-2">
                                        {/* <svg className="w-4 h-4 mr-1 text-[#0d6efd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        <span className="text-sm">{project.location}</span> */}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        {/* <span className="bg-blue-100 text-[#0d6efd] px-2 py-1 rounded text-sm font-semibold">
                                            {project.type}
                                        </span> */}
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-[#0d6efd] to-[#0b5ed7] rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Want More Property Videos?
                        </h3>
                        <p className="text-blue-100 mb-6 text-lg">
                            Contact us for personalized video tours of any property.
                        </p>
                        <button className="bg-white text-[#0d6efd] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-lg">
                            Contact Now
                        </button>
                    </div>
                </div> */}
                <StatsSection/>

            </div>
        </div>
    );
};

export default VideoShowcase;