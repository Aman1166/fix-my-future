import { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../../App';

export default function KundliCharts() {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('lagna');

  const tabs = [
    { id: 'lagna', label: lang === 'hi' ? 'लग्न चार्ट' : 'Lagna Chart' },
    { id: 'navamsa', label: lang === 'hi' ? 'नवांश चार्ट' : 'Navamsa Chart' },
    { id: 'moon', label: lang === 'hi' ? 'चंद्र चार्ट' : 'Moon Chart' },
  ];

  return (
    <div className={`rounded-2xl border p-6 transition-all duration-300 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
      <h3 className={`font-black text-xl mb-6 flex items-center space-x-2 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
        <span className="text-2xl">📈</span>
        <span>{lang === 'hi' ? 'कुंडली चार्ट' : 'Kundli Charts'}</span>
      </h3>

      {/* Tabs */}
      <div className="flex space-x-2 mb-8 bg-black/5 p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-amber-500 text-white shadow-lg'
                : 'hover:bg-black/5 text-gray-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Chart Display */}
      <div className="flex justify-center items-center py-8">
        <div className="relative w-full max-w-md aspect-square">
          {/* Main Chart Square */}
          <div className={`absolute inset-0 border-4 rounded-lg overflow-hidden ${isDark ? 'border-amber-500/30' : 'border-amber-600/30'}`}>
            <div className={`absolute inset-0 grid grid-cols-2 grid-rows-2`}>
              <div className="border-r border-b border-amber-500/20"></div>
              <div className="border-b border-amber-500/20"></div>
              <div className="border-r border-amber-500/20"></div>
              <div></div>
            </div>
            
            {/* Diagonals */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="100%" y2="100%" className={isDark ? 'stroke-amber-500/20' : 'stroke-amber-600/20'} strokeWidth="2" />
              <line x1="100%" y1="0" x2="0" y2="100%" className={isDark ? 'stroke-amber-500/20' : 'stroke-amber-600/20'} strokeWidth="2" />
              <line x1="50%" y1="0" x2="100%" y2="50%" className={isDark ? 'stroke-amber-500/20' : 'stroke-amber-600/20'} strokeWidth="2" />
              <line x1="100%" y1="50%" x2="50%" y2="100%" className={isDark ? 'stroke-amber-500/20' : 'stroke-amber-600/20'} strokeWidth="2" />
              <line x1="50%" y1="100%" x2="0" y2="50%" className={isDark ? 'stroke-amber-500/20' : 'stroke-amber-600/20'} strokeWidth="2" />
              <line x1="0" y1="50%" x2="50%" y2="0" className={isDark ? 'stroke-amber-500/20' : 'stroke-amber-600/20'} strokeWidth="2" />
            </svg>

            {/* Placeholder Planet Positions */}
            <div className="absolute top-[10%] left-[45%] text-xs font-bold text-amber-500 animate-pulse">As</div>
            <div className="absolute top-[25%] left-[25%] text-xs font-bold text-blue-400">Ma</div>
            <div className="absolute top-[45%] left-[10%] text-xs font-bold text-green-400">Su</div>
            <div className="absolute top-[65%] left-[25%] text-xs font-bold text-purple-400">Me</div>
            <div className="absolute top-[80%] left-[45%] text-xs font-bold text-red-400">Sa</div>
            <div className="absolute top-[65%] left-[65%] text-xs font-bold text-yellow-400">Ju</div>
            <div className="absolute top-[45%] left-[80%] text-xs font-bold text-pink-400">Ve</div>
            <div className="absolute top-[25%] left-[65%] text-xs font-bold text-indigo-400">Ra</div>
            <div className="absolute top-[45%] left-[45%] text-xs font-bold text-orange-400">Ke</div>
          </div>
          
          <div className="absolute -bottom-12 left-0 right-0 text-center">
            <p className={`text-xs opacity-60 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {lang === 'hi' ? '*यह एक सांकेतिक चार्ट है।' : '*This is a representative chart.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
