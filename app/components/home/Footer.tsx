import React from 'react';
import QvAILogo from '../shared/QvAILogo';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 px-8 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <QvAILogo showGlow={false} className="mb-4 md:mb-0" />
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#szolgaltatasok" className="hover:text-blue-400 transition">Szolgáltatások</a>
          <a href="#hogyan-mukodik" className="hover:text-blue-400 transition">Hogyan működik</a>
          <a href="#esettanulmanyok" className="hover:text-blue-400 transition">Technológiáink</a>
          <a href="#kapcsolat" className="hover:text-blue-400 transition">Kapcsolat</a>
        </div>
        <div className="text-gray-500 text-sm">
          © 2025 QvAI Szolgáltató Kft. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
