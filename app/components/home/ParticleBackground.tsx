import React, { useEffect, useRef } from 'react';

// Simplified particle interface (no life/maxLife needed)
interface Particle {
    x: number;
    y: number;
    r: number;
    g: number;
    b: number;
    velocity: { x: number; y: number };
}

interface ParticleBackgroundProps {
    className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);
    const previousTimeRef = useRef<number>(0);
    const targetFps = 24;
    const fpsInterval = useRef<number>(1000 / targetFps);

    // Performance monitoring
    const frameCountRef = useRef<number>(0);
    const lastFpsUpdateRef = useRef<number>(0);

    // Maximum connection distance
    const MAX_CONNECTION_DISTANCE = 180;

    // Initialize the particle system
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Get context
        const ctx = canvas.getContext('2d', {
            alpha: false,
            desynchronized: true
        });

        if (!ctx) return;

        // Setup canvas with proper sizing
        const setupCanvas = () => {
            if (!canvas) return;

            // Get container dimensions
            const containerWidth = Math.max(window.innerWidth, document.documentElement.clientWidth);
            const containerHeight = Math.max(window.innerHeight, document.documentElement.clientHeight);

            const displayWidth = containerWidth;
            const displayHeight = containerHeight;

            // Set pixel density (cap at 1.5 for performance)
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

            // Set main canvas size
            canvas.width = displayWidth * dpr;
            canvas.height = displayHeight * dpr;
            canvas.style.width = `100%`;
            canvas.style.height = `100%`;

            // Scale context
            ctx.scale(dpr, dpr);

            // Only create particles if they don't exist yet or on resize
            if (particlesRef.current.length === 0) {
                createParticles(displayWidth, displayHeight);
            } else {
                // Just make sure particles are within bounds after resize
                ensureParticlesInBounds(displayWidth, displayHeight);
            }
        };

        // Make sure all particles are within the current bounds
        const ensureParticlesInBounds = (width: number, height: number) => {
            particlesRef.current.forEach(particle => {
                if (particle.x < 0) particle.x = 0;
                if (particle.x > width) particle.x = width;
                if (particle.y < 0) particle.y = 0;
                if (particle.y > height) particle.y = height;
            });
        };

        // Define color choices outside function for reuse
        const COLOR_CHOICES = [
            { r: 59, g: 130, b: 246 }, // blue
            { r: 147, g: 51, b: 234 }, // purple
        ];

        // Create a single particle
        const createParticle = (width: number, height: number): Particle => {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const colorChoice = COLOR_CHOICES[Math.floor(Math.random() * COLOR_CHOICES.length)];

            return {
                x,
                y,
                r: colorChoice.r,
                g: colorChoice.g,
                b: colorChoice.b,
                velocity: {
                    x: (Math.random() - 0.5) * 0.4,
                    y: (Math.random() - 0.5) * 0.4
                }
            };
        };

        // Create initial particles
        const createParticles = (width: number, height: number) => {
            // Set particle count based on screen size for better density
            const PARTICLE_COUNT = Math.max(60, Math.floor((width * height) / 15000));
            particlesRef.current = [];

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particlesRef.current.push(createParticle(width, height));
            }
        };

        // Animation loop using delta time for smooth animation
        const animate = (timestamp: number) => {
            if (!ctx || !canvas) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            // Calculate delta time for smooth animation
            const deltaTime = timestamp - previousTimeRef.current;

            // Check if we should render this frame (for FPS limiting)
            if (deltaTime < fpsInterval.current) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            // Update previous time, adjusting for any extra time
            previousTimeRef.current = timestamp - (deltaTime % fpsInterval.current);

            // Update FPS counter
            frameCountRef.current++;
            if (timestamp - lastFpsUpdateRef.current >= 1000) {
                frameCountRef.current = 0;
                lastFpsUpdateRef.current = timestamp;
            }

            // Get dimensions
            const containerWidth = Math.max(window.innerWidth, document.documentElement.clientWidth);
            const containerHeight = Math.max(window.innerHeight, document.documentElement.clientHeight);
            const displayWidth = containerWidth;
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

            // Clear the canvas
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(0, 0, displayWidth, displayHeight);

            // Update particles (but don't draw them)
            for (let i = 0; i < particlesRef.current.length; i++) {
                const particle = particlesRef.current[i];

                // Scale velocity by time factor for consistent speed
                particle.x += particle.velocity.x * timeScaleFactor;
                particle.y += particle.velocity.y * timeScaleFactor;

                // Boundary checks with bounce
                if (particle.x < 0) {
                    particle.velocity.x = Math.abs(particle.velocity.x);
                    particle.x = 0;
                } else if (particle.x > displayWidth) {
                    particle.velocity.x = -Math.abs(particle.velocity.x);
                    particle.x = displayWidth;
                }

                if (particle.y < 0) {
                    particle.velocity.y = Math.abs(particle.velocity.y);
                    particle.y = 0;
                } else if (particle.y > displayHeight) {
                    particle.velocity.y = -Math.abs(particle.velocity.y);
                    particle.y = displayHeight;
                }
            }

            // Draw connections between particles
            ctx.lineWidth = 0.8; // Thinner lines for elegance

            for (let i = 0; i < particlesRef.current.length; i++) {
                const particle = particlesRef.current[i];
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    const otherParticle = particlesRef.current[j];

                    // Calculate distance between particles
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distanceSquared = dx * dx + dy * dy;

                    // Using distance squared for performance (avoid sqrt)
                    if (distanceSquared < MAX_CONNECTION_DISTANCE * MAX_CONNECTION_DISTANCE) {
                        const distance = Math.sqrt(distanceSquared);

                        // Calculate opacity based on distance only (no particle lifetime)
                        const opacityByDistance = Math.max(0, 1 - (distance / MAX_CONNECTION_DISTANCE));

                        // Apply easing for smoother transition
                        const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);
                        const smoothOpacity = easeOutCubic(opacityByDistance);

                        if (smoothOpacity > 0.02) {
                            // Interpolate between the two particles' colors
                            const r = Math.floor((particle.r + otherParticle.r) / 2);
                            const g = Math.floor((particle.g + otherParticle.g) / 2);
                            const b = Math.floor((particle.b + otherParticle.b) / 2);

                            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${smoothOpacity * 0.6})`;
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(otherParticle.x, otherParticle.y);
                            ctx.stroke();
                        }
                    }
                }
            }

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

    return (
        <canvas
            ref={canvasRef}
            className={className || "absolute inset-0 w-full h-full"}
        />
    );
};

export default ParticleBackground;
