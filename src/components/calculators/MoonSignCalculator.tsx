import { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

export default function MoonSignCalculator({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [result, setResult] = useState<{ sign: string; symbol: string } | null>(null);

  const getMoonSign = () => {
    // Simplified moon sign calculation (placeholder)
    const signs = [
      { sign: 'Aries', symbol: '♈', hiSign: 'मेष' },
      { sign: 'Taurus', symbol: '♉', hiSign: 'वृषभ' },
      { sign: 'Gemini', symbol: '♊', hiSign: 'मिथुन' },
      { sign: 'Cancer', symbol: '♋', hiSign: 'कर्क' },
      { sign: 'Leo', symbol: '♌', hiSign: 'सिंह' },
      { sign: 'Virgo', symbol: '♍', hiSign: 'कन्या' },
      { sign: 'Libra', symbol: '♎', hiSign: 'तुला' },
      { sign: 'Scorpio', symbol: '♏', hiSign: 'वृश्चिक' },
      { sign: 'Sagittarius', symbol: '♐', hiSign: 'धनु' },
      { sign: 'Capricorn', symbol: '♑', hiSign: 'मकर' },
      { sign: 'Aquarius', symbol: '♒', hiSign: 'कुंभ' },
      { sign: 'Pisces', symbol: '♓', hiSign: 'मीन' },
    ];
    const randomSign = signs[Math.floor(Math.random() * signs.length)];
    return {
      sign: lang === 'hi' ? randomSign.hiSign : randomSign.sign,
      symbol: randomSign.symbol
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthDate && birthTime) {
      const moonSign = getMoonSign();
      setResult(moonSign);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-64 overflow-y-auto bg-gray-800">
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-30 w-12 h-12 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all shadow-xl hover:scale-110 active:scale-95"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-linear-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">🌙</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'राशि/चंद्र राशि कैल्कुलेटर' : 'Rashi/Moon Sign Calculator'}
          </h1>
          <div className="w-20 h-1 bg-amber-700 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-8">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-bold mb-2">
                    {lang === 'hi' ? 'जन्म तिथि' : 'Birth Date'}
                  </label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-bold mb-2">
                    {lang === 'hi' ? 'जन्म समय' : 'Birth Time'}
                  </label>
                  <input
                    type="time"
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                    required
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-linear-to-r from-blue-500 to-amber-600 hover:from-blue-600 hover:to-amber-700 text-white font-black py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-blue-500/30 text-lg"
                >
                  {lang === 'hi' ? 'चंद्र राशि खोजें' : 'Find Moon Sign'}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="bg-gray-700/50 rounded-xl p-8 mb-6">
                <div className="text-8xl mb-4">{result.symbol}</div>
                <h4 className="text-amber-600 font-bold text-3xl mb-2">
                  {result.sign}
                </h4>
                <p className="text-gray-400 text-sm mt-4">
                  {lang === 'hi' ? 'यह आपकी चंद्र राशि है' : 'This is your Moon Sign'}
                </p>
              </div>
              <button
                onClick={() => setResult(null)}
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-6 rounded-xl transition-all"
              >
                {lang === 'hi' ? 'दोबारा कैल्कुलेट करें' : 'Calculate Again'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}