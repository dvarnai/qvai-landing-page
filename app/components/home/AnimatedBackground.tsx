import React from 'react';

interface AnimatedBackgroundProps {
  scrollY: number;
  time: number;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ scrollY, time }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient background - removed bottom edge fade for better section blending */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 100%),
                      radial-gradient(circle at ${50 + scrollY * 0.02}% ${30 + scrollY * 0.01}%, rgba(76, 0, 255, 0.8), transparent 60%),
                      radial-gradient(circle at ${70 - scrollY * 0.01}% ${60 + scrollY * 0.02}%, rgba(0, 183, 255, 0.8), transparent 50%)`,
          transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.5) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.5) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0.5) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
          transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.1}px)`,
        }}
      />

      {/* Subtle wave effect */}
      <div
        className="absolute inset-x-0 bottom-0 h-full opacity-20"
        style={{
          background: `linear-gradient(180deg, transparent 0%, transparent 40%, rgba(0, 183, 255, 0.1) 80%, rgba(76, 0, 255, 0.2) 100%)`,
          backgroundSize: '200% 200%',
          animation: 'wave 15s ease infinite',
          transform: `translateY(${Math.sin(scrollY * 0.005) * 50}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />

      <style jsx global>{`
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

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
