import React from 'react';
import { Brain, Cpu, LineChart, Shield, Zap, Database, Code, Lock } from 'lucide-react';

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Brain size={22} className="text-blue-500" />,
      title: "Élvonalbeli LLM Modellek",
      subtitle: "Nyelvfeldolgozás",
      color: "blue"
    },
    {
      icon: <LineChart size={22} className="text-purple-500" />,
      title: "Adaptív AI Megoldások",
      subtitle: "Teljesítmény",
      color: "purple"
    },
    {
      icon: <Cpu size={22} className="text-cyan-500" />,
      title: "Multi-modális Technológia",
      subtitle: "Komplex feldolgozás",
      color: "cyan"
    },
    {
      icon: <Shield size={22} className="text-emerald-500" />,
      title: "Biztonságos AI Keretrendszer",
      subtitle: "Megbízhatóság",
      color: "emerald"
    },
    {
      icon: <Database size={22} className="text-amber-500" />,
      title: "Vektoros Adattárolás",
      subtitle: "Tudásbázis",
      color: "amber"
    },
    {
      icon: <Zap size={22} className="text-yellow-500" />,
      title: "Sebességoptimalizált Modellek",
      subtitle: "Valós idejű válaszok",
      color: "yellow"
    },
    {
      icon: <Code size={22} className="text-rose-500" />,
      title: "Integrált Fejlesztőkörnyezet",
      subtitle: "API kapcsolatok",
      color: "rose"
    },
    {
      icon: <Lock size={22} className="text-indigo-500" />,
      title: "Zárt Körű AI Rendszer",
      subtitle: "Privát adatkezelés",
      color: "indigo"
    }
  ];

  return (
      <div id="technologiak" className="relative px-4 md:px-8 py-12 bg-black/40 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Élvonalbeli Technológiák
          </span>
          </h2>
          <p className="text-gray-400 text-base text-center max-w-xl mx-auto mb-8">
            Technológiai megközelítésünk a költséghatékonyság és a teljesítmény egyensúlyán alapul.
            Mindig az üzleti problémához legjobban illeszkedő modellt választjuk, ami akár 70%-os megtakarítást is jelenthet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {technologies.map((tech, index) => (
                <div
                    key={index}
                    className={`bg-gray-900/60 rounded-lg overflow-hidden border border-gray-800 hover:border-${tech.color}-500/50 hover:bg-gray-800/60 transition duration-300 group`}
                >
                  <div className={`bg-gradient-to-r from-${tech.color}-900/70 to-gray-900 p-4 flex items-center`}>
                    <div className={`p-2 rounded-full bg-${tech.color}-900/50 mr-3 group-hover:bg-${tech.color}-900/80 transition duration-300`}>
                      {tech.icon}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-400 uppercase tracking-wide">{tech.subtitle}</div>
                      <h3 className="text-base font-medium text-white">{tech.title}</h3>
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
