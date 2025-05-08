import React from 'react';
import { MessageSquare, Shield, Code } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div id="kapcsolat" className="relative z-10 px-8 md:px-16 lg:px-24 pb-24 bg-black/40 backdrop-blur-sm">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Kapcsolat
        </span>
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-6">Lépjen kapcsolatba velünk</h3>
          <p className="text-gray-300 mb-8">
            Készen áll arra, hogy a következő szintre emelje vállalkozását AI ügynökeink segítségével?
            Töltse ki az űrlapot, és szakértőink hamarosan felveszik Önnel a kapcsolatot.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <MessageSquare size={20} className="text-blue-400"/>
              </div>
              <div>
                <div className="font-bold">Email</div>
                <div className="text-gray-400">hello@qvai.hu</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Shield size={20} className="text-blue-400"/>
              </div>
              <div>
                <div className="font-bold">Telefon</div>
                <div className="text-gray-400">+36 1 234 5678</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Név</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                  placeholder="Az Ön neve"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Vállalat</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                  placeholder="Cég neve"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                placeholder="email@pelda.hu"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Telefon</label>
              <input
                type="tel"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                placeholder="+36 1 234 5678"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Üzenet</label>
              <textarea
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white h-32"
                placeholder="Írja le, miben segíthetünk..."
              ></textarea>
            </div>
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition w-full">
              Küldés
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
