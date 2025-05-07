import React from 'react';

interface QvAILogoProps {
  className?: string;
  showGlow?: boolean;
  variant?: 'default' | 'gradient';
}

const QvAILogo: React.FC<QvAILogoProps> = ({
  className = '',
  showGlow = true
}) => {

  return (
    <div className={`relative z-10 ${className}`}>
      <div className="text-3xl font-['Montserrat'] font-light tracking-tight">
        <span className="text-white">Q</span>
        <span className="text-[#ef4444]">v</span>
        <span className="text-white">AI</span>
      </div>

      {/* Subtle glow effect behind logo */}
      {showGlow && (
        <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-xl -z-10"></div>
      )}
    </div>
  );
};

export default QvAILogo;
