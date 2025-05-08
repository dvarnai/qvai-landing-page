import React from 'react';
import { Brain, Cpu, LineChart, Shield, Zap, Database, Code, Lock } from 'lucide-react';

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Brain size={24} className="text-blue-400" />,
      title: "Nyelvi intelligencia",
      subtitle: "Nyelvi akadályok nélküli kommunikáció, magyar nyelven is",
      color: "blue"
    },
    {
      icon: <LineChart size={24} className="text-purple-400" />,
      title: "Mérhető eredmények",
      subtitle: "Kimutatható megtakarítások és hatékonyságnövekedés",
      color: "purple"
    },
    {
      icon: <Cpu size={24} className="text-indigo-400" />,
      title: "Többféle adat feldolgozása",
      subtitle: "Szöveg, kép és hang elemzése összetett problémák megoldásához",
      color: "cyan"
    },
    {
      icon: <Shield size={24} className="text-blue-400" />,
      title: "Megbízható védelem",
      subtitle: "Szigorú adatvédelmi szabályok a bizalmas információk megőrzéséért",
      color: "emerald"
    },
    {
      icon: <Database size={24} className="text-purple-400" />,
      title: "Intelligens tudásrendszer",
      subtitle: "Vállalati adatokra és szakértői forrásokra épülő tudásrendszer",
      color: "amber"
    },
    {
      icon: <Zap size={24} className="text-indigo-400" />,
      title: "Azonnali válaszok",
      subtitle: "Nincs várakozás, gyors reakcióidővel segít minden helyzetben",
      color: "yellow"
    },
    {
      icon: <Code size={24} className="text-purple-400" />,
      title: "Egyszerű integráció",
      subtitle: "Könnyedén illeszkedik meglévő rendszereibe.",
      color: "rose"
    },
    {
      icon: <Lock size={24} className="text-blue-400" />,
      title: "Testreszabhatóság",
      subtitle: "Üzleti igényeire és iparágára optimalizált egyedi megoldások",
      color: "indigo"
    }
  ];

  return (
      <div id="technologiak" className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-20 md:py-24">
        {/* Use a less intense blur effect for the background */}

        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Előnyök
          </span>
          </h2>
          <p className="text-gray-400 text-base text-center max-w-xl mx-auto mb-8">
            Technológiáink konkrét üzleti problémákra kínálnak megoldást. Gyorsan bevezethetők, költséghatékonyak és mérhető eredményeket hoznak.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {technologies.map((tech, index) => (
                <div
                    key={index}
                    className={`bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 group`}
                >
                  <div className={`bg-gradient-to-r from-${tech.color}-900/70 to-gray-900 p-4 flex items-center`}>
                    <div className={`p-2 rounded-full bg-${tech.color}-900/50 mr-3 group-hover:bg-${tech.color}-900/80 transition duration-300`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-white uppercase tracking-wide">{tech.title}</h3>
                      <div className="text-sm text-gray-400 ">{tech.subtitle}</div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default TechnologySection;
