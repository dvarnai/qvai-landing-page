import React from 'react';
import { ChevronRight, Code, MessageSquare, Server, Shield, Zap } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

interface HeroSectionProps {
    time: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ time }) => {
    return (
        <div className="relative z-10 px-6 md:px-12 lg:px-24 h-screen pt-28 flex flex-col md:flex-row items-center justify-center">
            {/* Static background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Canvas for particle system - now using the ParticleBackground component */}
                <ParticleBackground className="absolute inset-0 w-full h-full" />

                {/* Static gradient for bottom fade */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `
                            linear-gradient(to bottom, transparent 75%, rgba(10,10,15,0.5) 90%, rgba(10,10,15,1) 100%),
                            radial-gradient(circle at 15% 100%, rgba(10,10,15,0.8) 0%, rgba(10,10,15,0.4) 30%, transparent 60%),
                            radial-gradient(circle at 85% 100%, rgba(10,10,15,0.8) 0%, rgba(10,10,15,0.4) 30%, transparent 60%)
                        `,
                        zIndex: 5
                    }}
                />

                {/* Static gradient overlay - extended on all sides */}
                <div
                    className="absolute bottom-0 bg-gradient-to-br from-blue-900/30 to-purple-600/30 opacity-70"
                    style={{
                        filter: 'blur(30px)',
                        width: 'calc(100% + 20px)',
                        height: 'calc(100% + 20px)'
                    }}
                />

                {/* Static floating elements - adjusted positions and opacity */}
                <div
                    className="absolute w-1/3 h-1/3 rounded-full blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(76, 0, 255, 0.3) 0%, transparent 70%)',
                        left: '10%',
                        top: '15%',
                        opacity: 0.6
                    }}
                />

                <div
                    className="absolute w-2/5 h-2/5 rounded-full blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(0, 183, 255, 0.3) 0%, transparent 70%)',
                        right: '5%',
                        bottom: '10%',
                        opacity: 0.6
                    }}
                />

                <div
                    className="absolute w-1/3 h-1/3 rounded-full blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
                        right: '-5%',
                        top: '20%',
                        opacity: 0.6
                    }}
                />
            </div>

            <div className="md:w-1/2 mb-12 md:mb-0 relative z-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fadeSlideUp" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                    s<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        AI ügynökökkel
                    </span>
                    <br/>
                    a Jövő Vállalkozásaiért
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg opacity-0 animate-fadeSlideUp" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                    Automatizálja ismétlődő folyamatait önálló AI ügynökökkel, hogy csapata arra koncentrálhasson, ami igazán számít.
                </p>
                <div className="opacity-0 animate-fadeSlideUp" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                    <button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition flex items-center gap-2 font-medium hover:translate-y-[-2px]">
                        Kezdje el most <ChevronRight size={18}/>
                    </button>
                </div>
            </div>

            {/* Visual elements container without orbiting animation */}
            <div className="md:w-1/2 hidden md:flex justify-center relative z-10 opacity-0 animate-fadeIn" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                <div className="relative w-96 h-96">
                    {/* Central glow effect - static */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), transparent 70%)`,
                            filter: 'blur(20px)',
                            opacity: 0.8
                        }}
                    />

                    {/* Static orbital rings - now truly static */}
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className="absolute border border-blue-500/20 hidden md:block"
                            style={{
                                top: `${index * 15}%`,
                                left: `${index * 15}%`,
                                right: `${index * 15}%`,
                                bottom: `${index * 15}%`,
                                borderRadius: '50%',
                                boxShadow: `0 0 20px rgba(59, 130, 246, 0.05)`,
                                opacity: 0.7
                            }}
                        />
                    ))}

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            {/* Central icon - now static */}
                            <Code
                                size={90}
                                className="text-white hidden md:block"
                                style={{
                                    filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))'
                                }}
                            />

                            {/* Icons now positioned statically at fixed positions */}
                            <Server
                                size={80}
                                className="text-blue-400 absolute opacity-80 hidden md:block"
                                style={{
                                    left: '-4rem',
                                    top: '-4rem',
                                    filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                                }}
                            />
                            <MessageSquare
                                size={70}
                                className="text-purple-400 absolute opacity-80 hidden md:block"
                                style={{
                                    right: '-3rem',
                                    top: '-3rem',
                                    filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))'
                                }}
                            />
                            <Zap
                                size={70}
                                className="text-blue-400 absolute opacity-80 hidden md:block"
                                style={{
                                    right: '-3rem',
                                    bottom: '-3rem',
                                    filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                                }}
                            />
                            <Shield
                                size={80}
                                className="text-purple-400 absolute opacity-80 hidden md:block"
                                style={{
                                    left: '-4rem',
                                    bottom: '-4rem',
                                    filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Add animation styles */}
            <style jsx>{`
                @keyframes fadeSlideUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                .animate-fadeSlideUp {
                    animation: fadeSlideUp 0.8s ease-out;
                }

                .animate-fadeIn {
                    animation: fadeIn 1s ease-out;
                }
            `}</style>
        </div>
    );
};

export default HeroSection;
