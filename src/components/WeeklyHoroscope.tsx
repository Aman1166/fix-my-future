import { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../App';

export default function WeeklyHoroscope({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
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

  const getHoroscopeData = () => {
    return {
      love: "Daily focus on emotional connections brings harmony. Express your feelings openly to strengthen bonds with loved ones.",
      personal: "Today emphasizes personal growth through self-reflection. Take time to assess your goals and make positive changes.",
      career: "Professional opportunities arise through networking. Your dedication and skills will be recognized by superiors.",
      health: "Maintain balance in daily routine. Light exercise and healthy eating will boost your energy levels throughout the day.",
      emotions: "Emotional stability is key today. Practice mindfulness to stay grounded amidst daily challenges.",
      lucky: "Lucky numbers: 3, 7, 12. Lucky color: Green. Lucky day for making important decisions.",
      travel: "Short local trips bring pleasant experiences. Plan travel activities that promote relaxation and enjoyment.",
      remedies: "Meditate for 10 minutes daily. Wear green colored clothing. Chant your birth mantra in the morning."
    };
  };

  const handleSignClick = (signName: string) => {
    setSelectedSign(signName);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-64 overflow-y-auto ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <button
        onClick={onClose}
        className={`fixed top-6 right-6 z-30 w-12 h-12 backdrop-blur-md border rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 ${isDark ? 'bg-gray-800/80 border-white/10 text-white hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-gray-100'}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center">
          <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-b from-gray-800/60 via-gray-950/40 to-gray-900' : 'bg-linear-to-b from-white/60 via-white/40 to-white'}`}></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">📅</span>
          <h1 className={`text-4xl md:text-6xl font-black mb-3 tracking-tight drop-shadow-xl animate-slideInUp ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'साप्ताहिक राशिफल' : 'Weekly Horoscope'}
          </h1>
          <div className="w-20 h-1 bg-amber-500 mt-6 rounded-full"></div>
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
                  className={`rounded-2xl border p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl group ${isDark ? 'bg-gray-700/50 backdrop-blur-md border-white/10 hover:border-amber-500/50 hover:shadow-amber-500/20' : 'bg-gray-50 border-gray-200 hover:border-amber-500/50 hover:shadow-amber-500/20'}`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {sign.symbol}
                    </div>
                    <h3 className={`font-bold text-sm mb-1 group-hover:text-amber-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {lang === 'hi' ? sign.hiName : sign.name}
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-white' : 'text-gray-500'}`}>
                      {sign.dates}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          /* Detailed Horoscope */
          <div className={`rounded-2xl border p-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">
                  {zodiacSigns.find(s => s.name === selectedSign)?.symbol}
                </div>
                <div>
                  <h2 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {lang === 'hi' ? zodiacSigns.find(s => s.name === selectedSign)?.hiName : selectedSign}
                  </h2>
                  <p className={isDark ? 'text-white' : 'text-gray-500'}>
                    {lang === 'hi' ? 'साप्ताहिक राशिफल' : 'Weekly Horoscope'} - {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSign(null)}
                className={`font-bold py-2 px-4 rounded-xl transition-all ${isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
              >
                {lang === 'hi' ? 'दूसरा राशि चुनें' : 'Select Other Sign'}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className={`rounded-xl p-4 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                  <h3 className="text-amber-500 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'प्रेम और संबंध' : 'Love & Relationships'}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {getHoroscopeData().love}
                  </p>
                </div>

                <div className={`rounded-xl p-4 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                  <h3 className="text-amber-500 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'व्यक्तिगत जीवन' : 'Personal Life'}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {getHoroscopeData().personal}
                  </p>
                </div>

                <div className={`rounded-xl p-4 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                  <h3 className="text-green-500 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'करियर और वित्त' : 'Career & Finance'}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {getHoroscopeData().career}
                  </p>
                </div>

                <div className={`rounded-xl p-4 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                  <h3 className="text-red-500 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'स्वास्थ्य और कल्याण' : 'Health & Wellness'}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {getHoroscopeData().health}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className={`rounded-xl p-4 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                  <h3 className="text-purple-500 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'भावनाएं और मन' : 'Emotions & Mind'}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {getHoroscopeData().emotions}
                  </p>
                </div>

                <div className={`rounded-xl p-4 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                  <h3 className="text-yellow-500 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'भाग्यशाली अंतर्दृष्टि' : 'Lucky Insights'}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {getHoroscopeData().lucky}
                  </p>
                </div>

                <div className={`rounded-xl p-4 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                  <h3 className="text-indigo-500 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'यात्रा और गति' : 'Travel & Movement'}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {getHoroscopeData().travel}
                  </p>
                </div>

                <div className={`rounded-xl p-4 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                  <h3 className="text-orange-500 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'उपाय' : 'Remedies'}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {getHoroscopeData().remedies}
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
