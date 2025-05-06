import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/70 backdrop-blur-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="relative z-10">
          <div
            className="text-3xl font-['Montserrat'] font-light tracking-tight">
            <span className="text-white">Q</span>
            <span className="text-[#ef4444]">v</span>
            <span className="text-white">AI</span>
          </div>
          
          {/* Subtle glow effect behind logo */}
          <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-xl -z-10"></div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {['Szolgáltatások', 'Hogyan működik', 'Technológiáink', 'Kapcsolat'].map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200 group"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </a>
          ))}
          
          {/* Call to action button */}
          <button className="ml-4 relative group">
            <span className="absolute inset-0 rounded-md bg-gradient-to-tr from-blue-600 to-purple-600 opacity-90 group-hover:opacity-100 blur-sm transition-all duration-200 group-hover:blur-md"></span>
            <span className="relative block bg-gradient-to-tr from-blue-500 to-purple-600 rounded-md px-5 py-2 text-sm font-medium text-white">
              Kapcsolatfelvétel
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 
            <X className="h-6 w-6" /> : 
            <Menu className="h-6 w-6" />
          }
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {['Szolgáltatások', 'Hogyan működik', 'Technológiáink', 'Kapcsolat'].map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xl font-medium text-gray-200 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-md text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kapcsolatfelvétel
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
