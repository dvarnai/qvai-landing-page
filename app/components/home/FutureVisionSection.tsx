import React from 'react';

interface VisionCardProps {
  number: string;
  title: string;
  description: string;
}

const VisionCard: React.FC<VisionCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-gray-900/60 p-8 rounded-xl border border-gray-800">
      <div className="text-blue-400 text-4xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
};

const FutureVisionSection: React.FC = () => {
  const visions = [
    {
      number: "01",
      title: "Innováció",
      description: "A QvAI folyamatosan kutatja és fejleszti a legújabb AI technológiákat, hogy mindig a legkorszerűbb megoldásokat nyújtsa ügyfeleinek."
    },
    {
      number: "02",
      title: "Értékteremtés",
      description: "Célunk, hogy az AI megoldásaink valódi üzleti értéket teremtsenek, növeljék a hatékonyságot és versenyelőnyt biztosítsanak partnereinknek."
    },
    {
      number: "03",
      title: "Felelősség",
      description: "Az AI technológiák etikus és felelősségteljes használata kulcsfontosságú számunkra, biztosítva, hogy megoldásaink pozitív hatással legyenek."
    }
  ];

  return (
    <div className="relative z-10 px-8 md:px-16 lg:px-24 py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Jövőképünk
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visions.map((vision, index) => (
          <VisionCard
            key={index}
            number={vision.number}
            title={vision.title}
            description={vision.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FutureVisionSection;
