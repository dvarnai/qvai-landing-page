import React from 'react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div
      className="bg-gray-900/60 p-5 rounded-xl border border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition duration-300 flex-1 group">
      <div className="text-blue-400 text-3xl font-bold mb-2 group-hover:text-blue-300 transition">{number}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Konzultáció",
      description: "Megértjük az Ön egyedi üzleti igényeit és kihívásait, hogy személyre szabott megoldást kínálhassunk."
    },
    {
      number: "02",
      title: "Tervezés",
      description: "Megtervezzük az egyedi AI ügynököt, figyelembe véve a funkcionalitást és az integrációs követelményeket."
    },
    {
      number: "03",
      title: "Fejlesztés",
      description: "Fejlett technológiával építjük fel az AI megoldást, rendszeres visszajelzésekkel biztosítva a minőséget."
    },
    {
      number: "04",
      title: "Integráció",
      description: "Zökkenőmentesen integráljuk az AI ügynököt a meglévő rendszerekbe, biztosítva a folyamatos működést."
    }
  ];

  return (
    <div id="hogyan-mukodik" className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 backdrop-blur-sm"></div>

      <h2 className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Hogyan Működik
        </span>
      </h2>
      <div className="relative z-10 flex flex-col md:flex-row gap-4">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
