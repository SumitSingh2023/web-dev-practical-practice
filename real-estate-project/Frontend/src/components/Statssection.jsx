import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
    const [stats, setStats] = useState([
        { id: 1, value: 0, target: 5000, suffix: '+', label: 'Clients' },
        { id: 2, value: 0, target: 10, suffix: '+', label: 'Projects Deliverd' },
        { id: 3, value: 0, target: 200000, suffix: '+', label: 'Sq.Yards Sold' }
    ]);

    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;

        const intervals = stats.map((stat, index) => {
            let currentStep = 0;
            
            return setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                
                setStats(prevStats => {
                    const newStats = [...prevStats];
                    if (progress < 1) {
                        // Easing function for smooth animation
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        newStats[index].value = Math.floor(stat.target * easeOutQuart);
                    } else {
                        newStats[index].value = stat.target;
                    }
                    return newStats;
                });

                if (currentStep >= steps) {
                    clearInterval(intervals[index]);
                }
            }, stepDuration);
        });

        return () => {
            intervals.forEach(interval => clearInterval(interval));
        };
    }, [isVisible]);

    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    };

    return (
        <div ref={statsRef} className="py-16 bg-white ">
            <div className="max-w-2xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 items-center">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.id} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#0d6efd] mb-2">
                                    {formatNumber(stat.value)}{stat.suffix}
                                </div>
                                <div className="text-gray-600 font-medium text-lg">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side Content
                    <div className="text-center lg:text-left">
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Delivered
                        </h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            turning your dreams into lasting realities.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;