import React from 'react';
import { ChevronRight } from 'lucide-react';

interface TechnologyCardProps {
  title: string;
  subtitle: string;
  description: string;
  gradientClass: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ title, subtitle, description, gradientClass }) => {
  return (
    <div className="bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition duration-300">
      <div className={`h-48 ${gradientClass} flex justify-center items-center p-8`}>
        <div className="text-2xl font-bold text-white">{title}</div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-3">{subtitle}</h3>
        <p className="text-gray-400 mb-6">
          {description}
        </p>
        <a href="#" className="text-blue-400 flex items-center gap-2 hover:text-blue-300 transition">
          Bővebben <ChevronRight size={16}/>
        </a>
      </div>
    </div>
  );
};

const TechnologySection: React.FC = () => {
  const technologies = [
    {
      title: "Fejlett Nyelvfeldolgozás",
      subtitle: "Természetes Nyelvi Megértés",
      description: "Nyelvfeldolgozási modelljeink képesek megérteni a magyar nyelv árnyalatait és komplexitását, lehetővé téve az emberi beszéd magas szintű értelmezését és válaszadást.",
      gradientClass: "bg-gradient-to-r from-blue-900 to-purple-900"
    },
    {
      title: "Gépi Tanulás",
      subtitle: "Adaptív Intelligencia",
      description: "AI rendszereink folyamatosan tanulnak és fejlődnek, alkalmazkodva a változó igényekhez és helyzetekhez, így mindig naprakész és releváns szolgáltatást nyújtanak.",
      gradientClass: "bg-gradient-to-r from-purple-900 to-blue-900"
    }
  ];

  return (
    <div id="esettanulmanyok" className="relative z-10 px-8 md:px-16 lg:px-24 py-24 bg-black/40 backdrop-blur-sm">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Technológiáink
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={index}
            title={tech.title}
            subtitle={tech.subtitle}
            description={tech.description}
            gradientClass={tech.gradientClass}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnologySection;
