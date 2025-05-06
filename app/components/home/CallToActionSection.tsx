import React from 'react';
import { ChevronRight } from 'lucide-react';

const CallToActionSection: React.FC = () => {
  return (
    <div className="relative z-10 px-8 md:px-16 lg:px-24 py-24">
      <div
        className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-12 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Készen áll a digitális transzformációra?</h2>
        <p className="text-lg text-center mb-8 text-gray-300 max-w-2xl mx-auto">
          Lépjen kapcsolatba velünk még ma, és fedezze fel, hogyan alakíthatja át vállalkozását egyedi AI
          ügynökökkel.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition flex items-center gap-2">
            Kapcsolatfelvétel <ChevronRight size={18}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
