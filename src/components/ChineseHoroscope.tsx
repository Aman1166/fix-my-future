import { useContext, useState } from 'react';
import { LanguageContext } from '../App';

export default function ChineseHoroscope({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const { lang } = useContext(LanguageContext);
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  const chineseSigns = [
    { name: 'Rat', symbol: '🐀', element: 'Water', years: '1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020' },
    { name: 'Ox', symbol: '🐂', element: 'Earth', years: '1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021' },
    { name: 'Tiger', symbol: '🐅', element: 'Wood', years: '1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022' },
    { name: 'Rabbit', symbol: '🐇', element: 'Wood', years: '1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023' },
    { name: 'Dragon', symbol: '🐉', element: 'Earth', years: '1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024' },
    { name: 'Snake', symbol: '🐍', element: 'Fire', years: '1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025' },
    { name: 'Horse', symbol: '🐎', element: 'Fire', years: '1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026' },
    { name: 'Goat', symbol: '🐐', element: 'Earth', years: '1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027' },
    { name: 'Monkey', symbol: '🐒', element: 'Metal', years: '1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028' },
    { name: 'Rooster', symbol: '🐔', element: 'Metal', years: '1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029' },
    { name: 'Dog', symbol: '🐕', element: 'Earth', years: '1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030' },
    { name: 'Pig', symbol: '🐖', element: 'Water', years: '1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031' },
  ];

  const getHoroscopeData = (signName: string) => {
    // Sample Chinese horoscope data
    return {
      love: "Harmony flows in your relationships today. Express your feelings openly and show appreciation for your loved ones. New romantic opportunities may present themselves unexpectedly.",
      personal: "Focus on inner peace and balance. Take time for self-reflection and consider what brings you true happiness. Trust your intuition in personal matters.",
      career: "Professional matters are favorable. Your creativity and dedication will be noticed. Consider new approaches to ongoing projects for better results.",
      health: "Maintain balance in your daily routine. Pay attention to both physical and mental wellness. Light exercise and healthy eating will boost your energy.",
      emotions: "Emotional stability is your strength today. Be patient with yourself and others. Practice mindfulness to stay grounded throughout the day.",
      lucky: "Lucky numbers: 2, 7, 9. Lucky color: Red. Lucky direction: East. Lucky element: Your birth element. Best time for important decisions: Morning hours.",
      travel: "Travel brings positive experiences today. Short trips may be particularly beneficial. Consider journeys that promote learning and cultural exchange.",
      remedies: "Carry a small red object for good luck. Meditate facing east. Keep your home and workspace clean and organized. Practice generosity and kindness."
    };
  };

  const handleSignClick = (signName: string) => {
    setSelectedSign(signName);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[64] overflow-y-auto bg-gray-800">
      <button onClick={onClose} className="fixed top-6 right-6 z-30 w-12 h-12 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all shadow-xl hover:scale-110 active:scale-95">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center"><div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">🐉</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">{lang === 'hi' ? 'चीनी राशिफल' : 'Chinese Horoscope'}</h1>
          <div className="w-20 h-1 bg-amber-700 mt-6 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {!selectedSign ? (
          <>
            {/* Chinese Zodiac Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {chineseSigns.map((sign, index) => (
                <button
                  key={index}
                  onClick={() => handleSignClick(sign.name)}
                  className="bg-gray-700/50 backdrop-blur-md rounded-2xl border border-white/10 hover:border-red-500/50 p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 group"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {sign.symbol}
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1 group-hover:text-red-300 transition-colors">
                      {sign.name}
                    </h3>
                    <p className="text-gray-400 text-xs">
                      {sign.element}
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
                  {chineseSigns.find(s => s.name === selectedSign)?.symbol}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">
                    {selectedSign}
                  </h2>
                  <p className="text-gray-400">
                    {lang === 'hi' ? 'चीनी राशिफल' : 'Chinese Horoscope'} - {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-stone-500 text-sm">
                    {lang === 'hi' ? 'तत्व' : 'Element'}: {chineseSigns.find(s => s.name === selectedSign)?.element}
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