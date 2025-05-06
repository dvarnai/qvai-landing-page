import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, Code, MessageSquare, Server, Shield, Zap } from 'lucide-react';

interface HeroSectionProps {
    time: number;
    scrollY?: number;
}

// Particle interface
interface Particle {
    x: number;
    y: number;
    size: number;
    color: string;
    r: number;
    g: number;
    b: number;
    velocity: { x: number; y: number };
    life: number;
    maxLife: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ time, scrollY = 0 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);
    const previousTimeRef = useRef<number>(0);
    const targetFps = 24;
    const fpsInterval = useRef<number>(1000 / targetFps);

    // Pre-calculate sin/cos for performance (used in icon animations)
    const SIN_TABLE = useRef<number[]>(new Array(360).fill(0).map((_, i) => Math.sin(i * Math.PI / 180)));
    const COS_TABLE = useRef<number[]>(new Array(360).fill(0).map((_, i) => Math.cos(i * Math.PI / 180)));

    // Performance monitoring
    const [fps, setFps] = useState<number>(0);
    const frameCountRef = useRef<number>(0);
    const lastFpsUpdateRef = useRef<number>(0);

    // Cache connection styles
    const connectionStylesRef = useRef<{[key: string]: string}>({});

    // Initialize the particle system
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Create offscreen canvas for better performance
        offscreenCanvasRef.current = document.createElement('canvas');

        // Get contexts
        const ctx = canvas.getContext('2d', {
            alpha: false,
            desynchronized: true,
            willReadFrequently: false
        });

        const offscreenCtx = offscreenCanvasRef.current.getContext('2d', {
            alpha: true,
            desynchronized: true
        });

        if (!ctx || !offscreenCtx) return;

        // Pre-calculate connection styles for reuse
        for (let i = 0; i < 20; i++) {
            const opacity = i / 20;
            connectionStylesRef.current[opacity.toFixed(2)] = `rgba(100, 100, 240, ${opacity})`;
        }

        // Setup canvas with proper sizing
        const setupCanvas = () => {
            if (!canvas || !offscreenCanvasRef.current) return;

            const container = canvas.parentElement;
            if (!container) return;

            // Get container dimensions
            const containerWidth = Math.max(window.innerWidth, document.documentElement.clientWidth);
            const containerHeight = Math.max(window.innerHeight, document.documentElement.clientHeight);

            // Apply multipliers (120% width)
            const displayWidth = containerWidth * 1.2;
            const displayHeight = containerHeight;

            // Set pixel density (cap at 1.5 for performance)
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

            // Set main canvas size
            canvas.width = displayWidth * dpr;
            canvas.height = displayHeight * dpr;
            canvas.style.width = `120%`;
            canvas.style.height = `100%`;

            // Match offscreen canvas
            offscreenCanvasRef.current.width = canvas.width;
            offscreenCanvasRef.current.height = canvas.height;

            // Scale contexts
            if (ctx) ctx.scale(dpr, dpr);
            if (offscreenCtx) offscreenCtx.scale(dpr, dpr);

            // Recreate particles when resizing
            createParticles(displayWidth, displayHeight);
        };

        // Create particles based on screen size
        const createParticles = (width: number, height: number) => {
            // Reduce particle count for better performance
            const screenArea = width * height;
            const PARTICLE_COUNT = 40; // Fewer particles

            particlesRef.current = [];

            // Define colors
            const colorChoices = [
                { base: 'rgba(59, 130, 246,', r: 59, g: 130, b: 246 }, // blue
                { base: 'rgba(147, 51, 234,', r: 147, g: 51, b: 234 }, // purple
            ];

            // Create particles
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const size = Math.random() * 3 + 0.5; // Smaller particles
                const x = Math.random() * width;
                const y = Math.random() * height;

                const colorChoice = colorChoices[Math.floor(Math.random() * colorChoices.length)];

                // Slower particles for smoother movement
                const velMult = 0.4; // Reduced from 0.8

                particlesRef.current.push({
                    x,
                    y,
                    size,
                    color: colorChoice.base + ' 0.9)',
                    r: colorChoice.r,
                    g: colorChoice.g,
                    b: colorChoice.b,
                    velocity: {
                        x: (Math.random() - 0.5) * velMult,
                        y: (Math.random() - 0.5) * velMult
                    },
                    life: 0,
                    maxLife: 200 + Math.random() * 50
                });
            }
        };

        // Animation loop using delta time for smooth animation
        const animate = (timestamp: number) => {
            if (!ctx || !canvas || !offscreenCtx || !offscreenCanvasRef.current) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            // Calculate delta time for smooth animation
            const deltaTime = timestamp - previousTimeRef.current;

            // Check if we should render this frame
            if (deltaTime < fpsInterval.current) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            // Update previous time, adjusting for any extra time
            previousTimeRef.current = timestamp - (deltaTime % fpsInterval.current);

            // Update FPS counter
            frameCountRef.current++;
            if (timestamp - lastFpsUpdateRef.current >= 1000) {
                setFps(frameCountRef.current);
                frameCountRef.current = 0;
                lastFpsUpdateRef.current = timestamp;
            }

            // Get dimensions
            const containerWidth = Math.max(window.innerWidth, document.documentElement.clientWidth);
            const containerHeight = Math.max(window.innerHeight, document.documentElement.clientHeight);
            const displayWidth = containerWidth * 1.2;
            const displayHeight = containerHeight;

            // Check if visible in viewport
            const rect = canvas.getBoundingClientRect();
            const isOffscreen = (rect.bottom < 0 || rect.top > window.innerHeight);

            // Skip intensive processing if offscreen
            if (isOffscreen) {
                // Clear and fill with black
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.fillRect(0, 0, displayWidth, displayHeight);
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            // Time factor for smooth animation regardless of frame rate
            const timeScaleFactor = deltaTime / (1000 / 60);

            // Clear the offscreen canvas
            offscreenCtx.clearRect(0, 0, displayWidth, displayHeight);

            // Fill with solid black
            offscreenCtx.fillStyle = 'rgb(0, 0, 0)';
            offscreenCtx.fillRect(0, 0, displayWidth, displayHeight);

            // Use a grid for efficient neighbor finding
            const cellSize = 180;
            const gridCols = Math.ceil(displayWidth / cellSize);
            const gridRows = Math.ceil(displayHeight / cellSize);
            const grid: Map<string, Particle[]> = new Map();

            // Update particles with deltaTime for smooth motion
            particlesRef.current.forEach((particle) => {
                // Scale velocity by time factor for consistent speed
                particle.x += particle.velocity.x * timeScaleFactor;
                particle.y += particle.velocity.y * timeScaleFactor;
                particle.life += timeScaleFactor; // Scale life by time too

                // Boundary checks with bounce
                if (particle.x < 0 || particle.x > displayWidth) {
                    particle.velocity.x *= -1;
                    // Immediately fix position to avoid getting stuck
                    particle.x = Math.max(0, Math.min(displayWidth, particle.x));
                }

                if (particle.y < 0 || particle.y > displayHeight) {
                    particle.velocity.y *= -1;
                    // Immediately fix position to avoid getting stuck
                    particle.y = Math.max(0, Math.min(displayHeight, particle.y));
                }

                // Reset particle if it's dead
                if (particle.life >= particle.maxLife) {
                    particle.life = 0;
                    particle.x = Math.random() * displayWidth;
                    particle.y = Math.random() * displayHeight;
                    particle.velocity = {
                        x: (Math.random() - 0.5) * 0.4,
                        y: (Math.random() - 0.5) * 0.4
                    };
                }

                // Add to grid - with only integer positions for stability
                const cellX = Math.floor(particle.x / cellSize);
                const cellY = Math.floor(particle.y / cellSize);
                const key = `${cellX},${cellY}`;

                if (!grid.has(key)) {
                    grid.set(key, []);
                }
                grid.get(key)!.push(particle);
            });

            // Draw connections with better batching
            offscreenCtx.lineWidth = 1.0;

            // Track processed pairs to avoid duplicates
            const processedPairs = new Set<string>();

            // Process connections by grid cell
            particlesRef.current.forEach(particle => {
                const cellX = Math.floor(particle.x / cellSize);
                const cellY = Math.floor(particle.y / cellSize);

                // Only check current and adjacent cells
                for (let y = Math.max(0, cellY - 1); y <= Math.min(gridRows - 1, cellY + 1); y++) {
                    for (let x = Math.max(0, cellX - 1); x <= Math.min(gridCols - 1, cellX + 1); x++) {
                        const key = `${x},${y}`;
                        const cellParticles = grid.get(key);

                        if (!cellParticles) continue;

                        // Batch similar opacity connections to reduce state changes
                        const opacityGroups: {[key: string]: {p1x: number, p1y: number, p2x: number, p2y: number}[]} = {};

                        // Check connections within this cell
                        for (const other of cellParticles) {
                            if (particle === other) continue;

                            // Create unique ID for particle pair
                            const id1 = particlesRef.current.indexOf(particle);
                            const id2 = particlesRef.current.indexOf(other);
                            const pairId = id1 < id2 ? `${id1}-${id2}` : `${id2}-${id1}`;

                            // Skip if already processed
                            if (processedPairs.has(pairId)) continue;
                            processedPairs.add(pairId);

                            // Fast squared distance check
                            const dx = particle.x - other.x;
                            const dy = particle.y - other.y;
                            const distSquared = dx * dx + dy * dy;

                            if (distSquared < 180 * 180) {
                                // Get actual distance
                                const distance = Math.sqrt(distSquared);

                                // Smoother opacity calculation with easing
                                const distFactor = Math.max(0, 1 - (distance / 180));
                                const life1 = Math.max(0, 1 - (particle.life / particle.maxLife));
                                const life2 = Math.max(0, 1 - (other.life / other.maxLife));

                                // Cubic easing function for smooth falloff
                                const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);
                                const smoothDistFactor = easeOutCubic(distFactor);
                                const smoothLifeFactor = easeOutCubic(Math.min(life1, life2));

                                let opacity = Math.min(0.75 * smoothDistFactor, smoothLifeFactor);

                                // Only draw if visible enough
                                if (opacity > 0.02) {
                                    // Round to fewer discrete values for batching
                                    const roundedOpacity = Math.round(opacity * 20) / 20;
                                    const opacityKey = roundedOpacity.toFixed(2);

                                    // Add to batch group
                                    if (!opacityGroups[opacityKey]) {
                                        opacityGroups[opacityKey] = [];
                                    }

                                    opacityGroups[opacityKey].push({
                                        p1x: particle.x,
                                        p1y: particle.y,
                                        p2x: other.x,
                                        p2y: other.y
                                    });
                                }
                            }
                        }

                        // Draw connections in batches by opacity
                        Object.entries(opacityGroups).forEach(([opacityKey, connections]) => {
                            // Set style once for the batch
                            if (connectionStylesRef.current[opacityKey]) {
                                offscreenCtx.strokeStyle = connectionStylesRef.current[opacityKey];
                            } else {
                                const opacity = parseFloat(opacityKey);
                                offscreenCtx.strokeStyle = `rgba(${particle.r}, ${particle.g}, ${particle.b}, ${opacity})`;
                                connectionStylesRef.current[opacityKey] = offscreenCtx.strokeStyle;
                            }

                            // Draw all connections with this opacity
                            offscreenCtx.beginPath();
                            for (const conn of connections) {
                                offscreenCtx.moveTo(conn.p1x, conn.p1y);
                                offscreenCtx.lineTo(conn.p2x, conn.p2y);
                            }
                            offscreenCtx.stroke();
                        });
                    }
                }
            });

            // Copy from offscreen canvas to main canvas
            ctx.drawImage(offscreenCanvasRef.current, 0, 0);

            // Continue animation loop
            animationRef.current = requestAnimationFrame(animate);
        };

        // Handle window resize
        const handleResize = () => {
            setupCanvas();
        };

        // Initial setup
        setupCanvas();

        // Start animation loop
        previousTimeRef.current = performance.now();
        animationRef.current = requestAnimationFrame(animate);

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    // Get icon position with smoother animation
    const getIconStyle = (angle: number, distance: number, scale: number = 1) => {
        const baseSpeed = 0.5;
        const tAngle = time * baseSpeed + angle;
        const tIndex = Math.floor((tAngle * 180 / Math.PI) % 360);
        const sIndex = tIndex >= 0 ? tIndex : tIndex + 360;

        const xOffset = SIN_TABLE.current[sIndex] * distance;
        const yOffset = COS_TABLE.current[sIndex] * distance;

        return {
            transform: `translate(${xOffset.toFixed(1)}px, ${yOffset.toFixed(1)}px) scale(${(scale + Math.sin(time * 0.8) * 0.05).toFixed(2)})`,
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
                        left: '-10%',
                        width: '120%',
                        height: '100%',
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

                {/* Parallax gradient overlay */}
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

                {/* Parallax pulsating radial gradient */}
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

                {/* Parallax floating elements */}
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

            {/* Development FPS counter - comment out in production */}
            {/*
      <div className="fixed bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
        FPS: {fps}
      </div>
      */}

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
