import { useContext, useState } from 'react';
import { LanguageContext } from '../App';

export default function TomorrowHoroscope({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const { lang } = useContext(LanguageContext);
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  const zodiacSigns = [
    { name: 'Aries', hiName: 'मेष', symbol: '♈', dates: 'Mar 21 - Apr 19' },
    { name: 'Taurus', hiName: 'वृषभ', symbol: '♉', dates: 'Apr 20 - May 20' },
    { name: 'Gemini', hiName: 'मिथुन', symbol: '♊', dates: 'May 21 - Jun 21' },
    { name: 'Cancer', hiName: 'कर्क', symbol: '♋', dates: 'Jun 22 - Jul 22' },
    { name: 'Leo', hiName: 'सिंह', symbol: '♌', dates: 'Jul 23 - Aug 22' },
    { name: 'Virgo', hiName: 'कन्या', symbol: '♍', dates: 'Aug 23 - Sep 22' },
    { name: 'Libra', hiName: 'तुला', symbol: '♎', dates: 'Sep 23 - Oct 23' },
    { name: 'Scorpio', hiName: 'वृश्चिक', symbol: '♏', dates: 'Oct 24 - Nov 21' },
    { name: 'Sagittarius', hiName: 'धनु', symbol: '♐', dates: 'Nov 22 - Dec 21' },
    { name: 'Capricorn', hiName: 'मकर', symbol: '♑', dates: 'Dec 22 - Jan 19' },
    { name: 'Aquarius', hiName: 'कुंभ', symbol: '♒', dates: 'Jan 20 - Feb 18' },
    { name: 'Pisces', hiName: 'मीन', symbol: '♓', dates: 'Feb 19 - Mar 20' },
  ];

  const getHoroscopeData = (signName: string) => {
    // Sample tomorrow's horoscope data
    return {
      love: "Tomorrow brings warmth to your relationships. Express your affection openly and listen attentively to your partner. Singles may receive a pleasant surprise in their social circle.",
      personal: "Focus on completing pending tasks tomorrow. Your organizational skills will help you achieve small but important goals. Take time for self-reflection in the evening.",
      career: "Professional matters flow smoothly tomorrow. Team collaboration brings positive results. Consider reaching out to colleagues for support on ongoing projects.",
      health: "Tomorrow favors physical activity. A morning walk or light exercise will boost your energy. Pay attention to hydration and maintain healthy eating habits.",
      emotions: "Emotional balance is key tomorrow. Trust your instincts in personal matters. Practice patience and understanding in all interactions.",
      lucky: "Lucky numbers: 4, 8, 12. Lucky color: Green. Lucky time: Afternoon (2-4 PM). Lucky activity: Helping others or creative work.",
      travel: "Short local trips are favorable tomorrow. Avoid long-distance travel if possible. Focus on safe and comfortable journeys.",
      remedies: "Light a green candle and meditate for peace. Carry a small piece of jade or green crystal. Chant 'Om' 11 times before starting your day."
    };
  };

  const handleSignClick = (signName: string) => {
    setSelectedSign(signName);
  };

  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[64] overflow-y-auto bg-gray-800">
      <button onClick={onClose} className="fixed top-6 right-6 z-30 w-12 h-12 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all shadow-xl hover:scale-110 active:scale-95">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center"><div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">🔮</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">{lang === 'hi' ? 'कल का राशिफल' : 'Tomorrow\'s Horoscope'}</h1>
          <div className="w-20 h-1 bg-amber-700 mt-6 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {!selectedSign ? (
          <>
            {/* Zodiac Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {zodiacSigns.map((sign, index) => (
                <button
                  key={index}
                  onClick={() => handleSignClick(sign.name)}
                  className="bg-gray-700/50 backdrop-blur-md rounded-2xl border border-white/10 hover:border-amber-600/50 p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-600-500/20 group"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {sign.symbol}
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1 group-hover:text-amber-600-300 transition-colors">
                      {lang === 'hi' ? sign.hiName : sign.name}
                    </h3>
                    <p className="text-gray-400 text-xs">
                      {sign.dates}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          /* Detailed Horoscope */
          <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">
                  {zodiacSigns.find(s => s.name === selectedSign)?.symbol}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">
                    {lang === 'hi' ? zodiacSigns.find(s => s.name === selectedSign)?.hiName : selectedSign}
                  </h2>
                  <p className="text-gray-400">
                    {lang === 'hi' ? 'कल का राशिफल' : 'Tomorrow\'s Horoscope'} - {tomorrowDate.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSign(null)}
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-xl transition-all"
              >
                {lang === 'hi' ? 'दूसरा राशि चुनें' : 'Select Other Sign'}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-amber-500 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'प्रेम और संबंध' : 'Love & Relationships'}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {getHoroscopeData(selectedSign).love}
                  </p>
                </div>

                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-amber-600 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'व्यक्तिगत जीवन' : 'Personal Life'}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {getHoroscopeData(selectedSign).personal}
                  </p>
                </div>

                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-green-400 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'करियर और वित्त' : 'Career & Finance'}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {getHoroscopeData(selectedSign).career}
                  </p>
                </div>

                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-red-400 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'स्वास्थ्य और कल्याण' : 'Health & Wellness'}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {getHoroscopeData(selectedSign).health}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-purple-400 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'भावनाएं और मन' : 'Emotions & Mind'}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {getHoroscopeData(selectedSign).emotions}
                  </p>
                </div>

                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-yellow-400 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'भाग्यशाली अंतर्दृष्टि' : 'Lucky Insights'}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {getHoroscopeData(selectedSign).lucky}
                  </p>
                </div>

                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-indigo-400 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'यात्रा और गति' : 'Travel & Movement'}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {getHoroscopeData(selectedSign).travel}
                  </p>
                </div>

                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-orange-400 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'उपाय' : 'Remedies'}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {getHoroscopeData(selectedSign).remedies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}