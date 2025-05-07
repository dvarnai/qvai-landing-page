import React, { useState, useEffect, useRef } from 'react';

// Import all components
import AnimatedBackground from '../components/home/AnimatedBackground';
import Navigation from '../components/home/Navigation';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import TechnologySection from '../components/home/TechnologySection';
import ContactSection from '../components/home/ContactSection';
import CallToActionSection from '../components/home/CallToActionSection';
import Footer from '../components/home/Footer';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const requestRef = useRef<number>(0);

  const animate = (): void => {
    setTime(prevTime => prevTime + 0.01);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#050510] text-white font-sans overflow-hidden relative">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Content sections */}
      <Navigation />
      <HeroSection time={time} />
      <ServicesSection />
      <HowItWorksSection />
      <TechnologySection />
      <ContactSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Home;
