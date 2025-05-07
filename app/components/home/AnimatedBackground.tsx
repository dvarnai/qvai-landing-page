import React from 'react';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none perspective-container">
            {/* Primary gradient background */}
            <div className="absolute inset-0 opacity-30 gradient-background">
                {/* Background gradients are now handled by CSS */}
            </div>

            {/* Grid lines */}
            <div className="absolute opacity-10 grid-lines">
                {/* Grid lines are now handled by CSS */}
            </div>

            {/* Subtle wave effect */}
            <div className="absolute inset-x-0 bottom-0 h-full opacity-20 wave-effect">
                {/* Wave effect is now handled by CSS */}
            </div>

            <style jsx>{`
                .perspective-container {
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }

                .gradient-background {
                    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 100%),
                    radial-gradient(circle at 50% 30%, rgba(76, 0, 255, 0.8), transparent 60%),
                    radial-gradient(circle at 70% 60%, rgba(0, 183, 255, 0.8), transparent 50%);
                    transform: translateZ(-10px) rotateX(5deg);
                    animation: float-gradients 15s ease-in-out infinite alternate;
                }

                .grid-lines {
                    top: -500px;
                    left: -500px;
                    right: -500px;
                    bottom: -500px;
                    background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.5) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0.5) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.5) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0.5) 76%, transparent 77%, transparent);
                    background-size: 50px 50px;
                    transform: translateZ(-20px) rotateX(10deg);
                    animation: float-grid 20s ease-in-out infinite alternate;
                }

                .wave-effect {
                    background: linear-gradient(180deg, transparent 0%, transparent 40%, rgba(0, 183, 255, 0.1) 80%, rgba(76, 0, 255, 0.2) 100%);
                    background-size: 200% 200%;
                    transform: translateZ(-5px) rotateX(3deg);
                    animation: wave 15s ease infinite, float-wave 12s ease-in-out infinite alternate;
                }

                @keyframes float-gradients {
                    0% {
                        transform: translateZ(-10px) rotateX(5deg) translateY(0);
                    }
                    100% {
                        transform: translateZ(-10px) rotateX(5deg) translateY(-20px);
                    }
                }

                @keyframes float-grid {
                    0% {
                        transform: translateZ(-20px) rotateX(10deg) translateX(0);
                    }
                    100% {
                        transform: translateZ(-20px) rotateX(10deg) translateX(-30px);
                    }
                }

                @keyframes float-wave {
                    0% {
                        transform: translateZ(-5px) rotateX(3deg) translateY(0);
                    }
                    100% {
                        transform: translateZ(-5px) rotateX(3deg) translateY(-15px);
                    }
                }

                @keyframes wave {
                    0% {
                        background-position: 0% 0%;
                    }
                    50% {
                        background-position: 100% 100%;
                    }
                    100% {
                        background-position: 0% 0%;
                    }
                }
            `}</style>
        </div>
    );
};

export default AnimatedBackground;
