import React from 'react';
import { Zap, MessageSquare, Code, BarChart2, Server, Star } from 'lucide-react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({icon, title, description}) => {
    return (
        <div
            className="bg-gray-900/40 backdrop-filter backdrop-blur-sm p-6 rounded-xl border border-gray-800/30 group transition-all duration-300 hover:bg-gray-900/60 hover:border-blue-500/30 flex flex-col">
            {/* Simple icon */}
            <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                {icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-medium mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
            <p className="text-gray-400 text-sm flex-grow">{description}</p>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: <Zap size={24} className="text-blue-400"/>,
            title: "Automatizációs AI Ügynökök",
            description: "Automatizálja a rutinfeladatokat és folyamatokat intelligens AI ügynökök segítségével, növelve a hatékonyságot és csökkentve a hibalehetőségeket."
        },
        {
            icon: <MessageSquare size={24} className="text-purple-400"/>,
            title: "Vevőszolgálati Chatbotok",
            description: "Fejlett, természetes nyelvű chatbotok, amelyek hatékonyan kezelik az ügyfelek kérdéseit és problémáit, 24/7 rendelkezésre állással."
        },
        {
            icon: <Code size={24} className="text-blue-400"/>,
            title: "Egyedi Megoldások",
            description: "Speciális igényekre szabott AI megoldások, amelyek teljesítik a vállalkozása egyedi követelményeit és célkitűzéseit."
        },
        {
            icon: <BarChart2 size={24} className="text-purple-400"/>,
            title: "Marketing Automatizálás",
            description: "Érdeklődök automatikus követése és személyre szabott üzenetek küldése AI ügynökök segítségével a konverzió növelésére."
        },
        {
            icon: <Server size={24} className="text-blue-400"/>,
            title: "Prediktív Adatelemzés",
            description: "Fejlett adatelemzési megoldások, amelyek értékes betekintést nyújtanak adataiba és segítik az adatvezérelt döntéshozatalt."
        },
        {
            icon: <Star size={24} className="text-purple-400"/>,
            title: "AI Integráció",
            description: "AI megoldások bevezetése vállalkozása digitális környezetébe. Szakértői támogatás az üzleti folyamatok fejlesztésében, hatékonyságnövelésben és innovációban."
        }
    ];

    return (
        <div id="szolgaltatasok"
             className="relative z-10 px-6 md:px-12 lg:px-24 pt-16 pb-24 flex flex-col justify-center overflow-hidden section-blend-top">
            {/* Background */}
            <div className="absolute inset-0 z-[1]" style={{backgroundColor: 'rgb(10, 10, 15)'}}></div>

            {/* Modern dot grid pattern */}
            <div className="absolute inset-0 opacity-5 z-[1]"
                 style={{
                     backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), 
                           radial-gradient(rgba(167, 139, 250, 0.3) 1px, transparent 1px)`,
                     backgroundSize: '40px 40px, 30px 30px',
                     backgroundPosition: '0 0, 20px 20px'
                 }}>
            </div>

            {/* Floating gradient orbs for visual interest */}
            <div className="floating-orb z-[2]"
                 style={{
                     top: '15%',
                     left: '15%',
                     width: '400px',
                     height: '400px',
                     opacity: 0.32,
                     filter: 'blur(60px) brightness(1.05)',
                     background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.1) 70%)',
                     animation: 'float 60s ease-in-out infinite',
                     mixBlendMode: 'screen'
                 }}></div>
            <div className="floating-orb z-[2]"
                 style={{
                     bottom: '20%',
                     right: '15%',
                     width: '450px',
                     height: '450px',
                     opacity: 0.28,
                     filter: 'blur(75px) brightness(1.05)',
                     background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.8), rgba(147, 51, 234, 0.05) 70%)',
                     animation: 'float 75s ease-in-out infinite reverse',
                     mixBlendMode: 'screen'
                 }}></div>
            <div className="floating-orb z-[2]"
                 style={{
                     top: '50%',
                     left: '35%',
                     width: '320px',
                     height: '320px',
                     opacity: 0.25,
                     filter: 'blur(50px) brightness(1.05)',
                     background: 'radial-gradient(circle at center, rgba(79, 70, 229, 0.7), rgba(79, 70, 229, 0.05) 70%)',
                     animation: 'float 90s ease-in-out 15s infinite',
                     mixBlendMode: 'screen'
                 }}></div>

            {/* Section heading */}
            <div className="mb-12 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                      Szolgáltatásaink
                    </span>
                </h2>
                <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 flex-grow container mx-auto">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
