import React from 'react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon }) => {
  return (
    <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex-1 group h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="text-blue-400 text-4xl font-bold mr-3 group-hover:text-blue-300 transition-colors">
          {number}
        </div>
        <div className="text-blue-400 w-8 h-8 group-hover:text-blue-300 transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Konzultáció",
      description: "Feltérképezzük vállalatának egyedi kihívásait és lehetőségeit, azonosítva azokat a kulcsterületeket, ahol a mesterséges intelligencia valódi versenyelőnyt biztosíthat.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Tervezés",
      description: "Kidolgozzuk az Ön igényeire szabott AI stratégiát és megoldási tervet, amely egyensúlyt teremt a technológiai innováció és a konkrét üzleti célok között.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Fejlesztés",
      description: "Kifejlesztjük az Ön egyedi AI ügynökét, amely illeszkedik a vállalati folyamataihoz. A fejlesztés során szoros együttműködésben, folyamatos visszajelzések alapján finomítjuk a rendszert.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Integráció",
      description: "Az elkészült AI megoldást beillesztjük a meglévő vállalati ökoszisztémába, átfogó képzést és támogatást biztosítva a gördülékeny átálláshoz és a hosszú távú sikerhez.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div id="hogyan-mukodik" className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-20 md:py-24">
      {/* Use a less intense blur effect for the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-medium mb-2">Folyamatunk</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Hogyan Működik
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Átlátható és jól strukturált folyamatunk biztosítja, hogy az AI megoldás teljes mértékben az Ön vállalatának céljaihoz igazodjon, és kézzelfogható üzleti értéket hozzon létre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:-translate-y-2">
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
