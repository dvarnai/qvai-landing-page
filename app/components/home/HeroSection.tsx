import React, { useEffect, useRef } from 'react';
import { ChevronRight, Code, MessageSquare, Server, Shield, Zap } from 'lucide-react';

interface HeroSectionProps {
  time: number;
  scrollY?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ time, scrollY = 0 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  // Particle class for more modern animations
  interface Particle {
    x: number;
    y: number;
    size: number;
    color: string;
    velocity: { x: number; y: number };
    life: number;
    maxLife: number;
  }

  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full width/height
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    // Create particles
    const createParticles = () => {
      const PARTICLE_COUNT = 70;
      particlesRef.current = [];

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const size = Math.random() * 4 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        // Random blue or purple
        const colorChoices = [
          'rgba(59, 130, 246, 0.9)', // blue
          'rgba(147, 51, 234, 0.9)', // purple
          'rgba(79, 70, 229, 0.9)',  // indigo
          'rgba(139, 92, 246, 0.9)',  // violet
        ];

        const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];

        particlesRef.current.push({
          x,
          y,
          size,
          color,
          velocity: {
            x: (Math.random() - 0.5) * 0.3,
            y: (Math.random() - 0.5) * 0.3
          },
          life: 0,
          maxLife: 300 + Math.random() * 100
        });
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas completely to prevent any trailing effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Fill with solid black
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        particle.life++;

        // Boundary detection with bounce
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y *= -1;
        }

        // Fade out based on life
        const opacity = Math.max(0, 1 - particle.life / particle.maxLife);

        // Don't draw the particles themselves, only their connections

        // Connect particles that are close to each other
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            // Calculate connection opacity based on particle life and distance
            const connectionOpacity = Math.min(
              0.7 * (1 - distance / 150),
              Math.min(
                1 - particle.life / particle.maxLife,
                1 - other.life / other.maxLife
              )
            );
            
            ctx.beginPath();
            // Use the particle's color for the connections
            const baseColor = particle.color.split(',')[0] + ',' + particle.color.split(',')[1] + ',' + particle.color.split(',')[2];
            ctx.strokeStyle = `${baseColor}, ${connectionOpacity})`;
            ctx.lineWidth = 0.9;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Reset particle if it's dead
        if (particle.life >= particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.velocity = {
            x: (Math.random() - 0.5) * 0.3,
            y: (Math.random() - 0.5) * 0.3
          };
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Calculate icon positions based on time
  const getIconStyle = (angle: number, distance: number, scale: number = 1) => {
    const baseSpeed = 0.5;
    const xOffset = Math.sin(time * baseSpeed + angle) * distance;
    const yOffset = Math.cos(time * baseSpeed + angle) * distance;

    return {
      transform: `translate(${xOffset}px, ${yOffset}px) scale(${scale + Math.sin(time * 0.8) * 0.05})`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return (
    <div className="relative z-10 px-6 md:px-12 lg:px-24 h-screen pt-28 flex flex-col md:flex-row items-center justify-center">
      {/* Modern animated background */}
      <div className="absolute inset-0 overflow-hidden">

        <canvas
          ref={canvasRef}
          className="absolute"
          style={{
            top: '-10%',
            left: '-10%',
            width: '120%',
            height: '140%', /* Extended to overlap with services section */
            transform: `translate(${scrollY * -0.12}px, ${scrollY * 0.08}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Single unified gradient for bottom fade */}
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

        {/* Parallax gradient overlay - with more aggressive parallax */}
        <div
          className="absolute bg-gradient-to-br from-blue-900/15 to-purple-600/25"
          style={{
            top: '-15%',
            left: '-15%',
            width: '130%',
            height: '130%',
            opacity: 0.5 + Math.sin(time * 0.2) * 0.1,
            filter: 'blur(30px)',
            transform: `translate(${scrollY * -0.2}px, ${scrollY * 0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Parallax pulsating radial gradient - more aggressive movement */}
        <div
          className="absolute"
          style={{
            top: '-20%',
            left: '-20%',
            width: '140%',
            height: '140%',
            background: `radial-gradient(circle at ${50 + Math.sin(time * 0.3) * 5}% ${50 + Math.cos(time * 0.3) * 5}%, rgba(30, 64, 175, 0.15), transparent 70%)`,
            transform: `scale(${1 + Math.sin(time * 0.15) * 0.08}) translate(${scrollY * -0.25}px, ${scrollY * 0.18}px)`,
            transition: 'transform 0.4s ease-out'
          }}
        />


        {/* Additional parallax floating elements with extreme movement */}
        <div
          className="absolute w-1/3 h-1/3 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(76, 0, 255, 0.2) 0%, transparent 70%)',
            left: `${10 - scrollY * 0.25}%`,
            top: `${20 + scrollY * 0.22}%`,
            opacity: 0.5,
            transition: 'left 0.2s ease-out, top 0.2s ease-out'
          }}
        />

        <div
          className="absolute w-2/5 h-2/5 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 183, 255, 0.2) 0%, transparent 70%)',
            right: `${5 - scrollY * 0.28}%`,
            bottom: `${10 + scrollY * 0.24}%`,
            opacity: 0.5,
            transition: 'right 0.2s ease-out, bottom 0.2s ease-out'
          }}
        />

        {/* Extra element that moves beyond boundaries */}
        <div
          className="absolute w-1/4 h-1/4 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
            right: `${-10 - scrollY * 0.3}%`,
            top: `${40 + scrollY * 0.15}%`,
            opacity: 0.4,
            transition: 'right 0.2s ease-out, top 0.2s ease-out'
          }}
        />
      </div>

      <div className="md:w-1/2 mb-12 md:mb-0 relative z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fadeSlideUp" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Egyedi AI Ügynökök
          </span>
          <br/>
          a Jövő Vállalkozásainak
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg opacity-0 animate-fadeSlideUp" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
          Alakítsa át üzleti folyamatait egyedi mesterséges intelligencia megoldásokkal, amelyek valós
          értéket teremtenek és versenyelőnyt biztosítanak.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeSlideUp" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition flex items-center gap-2 hover:translate-y-[-2px]">
            Kezdjünk bele <ChevronRight size={18}/>
          </button>
          <button
            className="border border-gray-600 px-8 py-3 rounded-full hover:border-blue-400 transition hover:bg-white/5 hover:translate-y-[-2px]">
            Bemutató kérése
          </button>
        </div>
      </div>
      
      {/* Hide the entire animation container on small screens */}
      <div className="md:w-1/2 hidden md:flex justify-center relative z-10 opacity-0 animate-fadeIn" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
        <div className="relative w-96 h-96">
          {/* Modern glow effects */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), transparent 70%)`,
              filter: 'blur(20px)',
              transform: `scale(${1 + Math.sin(time * 0.3) * 0.05})`,
              opacity: 0.7 + Math.sin(time * 0.5) * 0.3
            }}
          />

          {/* Orbital rings - hidden on mobile, perfect circles on all screens */}
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
                transform: `rotate(${time * (10 + index * 5)}deg)`,
                transformOrigin: 'center',
                boxShadow: `0 0 20px rgba(59, 130, 246, ${0.05 + Math.sin(time * 0.2) * 0.05})`,
                opacity: 0.7
              }}
            />
          ))}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Animated icons with more dynamic movement */}
              {/* Central icon - hidden on mobile */}
              <Code
                size={90}
                className="text-white hidden md:block"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))',
                  transform: `scale(${1 + Math.sin(time * 0.5) * 0.05}) rotate(${Math.sin(time * 0.2) * 5}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
              />

              {/* Orbiting icons - hidden on mobile */}
              <Server
                size={80}
                className="text-blue-400 absolute opacity-80 hidden md:block"
                style={{
                  ...getIconStyle(0, 48),
                  left: '-4rem',
                  top: '-4rem',
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                }}
              />
              <MessageSquare
                size={70}
                className="text-purple-400 absolute opacity-80 hidden md:block"
                style={{
                  ...getIconStyle(Math.PI * 0.5, 45),
                  right: '-3rem',
                  top: '-3rem',
                  filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))'
                }}
              />
              <Zap
                size={70}
                className="text-blue-400 absolute opacity-80 hidden md:block"
                style={{
                  ...getIconStyle(Math.PI, 45),
                  right: '-3rem',
                  bottom: '-3rem',
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                }}
              />
              <Shield
                size={80}
                className="text-purple-400 absolute opacity-80 hidden md:block"
                style={{
                  ...getIconStyle(Math.PI * 1.5, 48),
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
