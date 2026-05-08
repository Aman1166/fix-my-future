import { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

export default function SunSignCalculator({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<{ sign: string; symbol: string; dates: string } | null>(null);

  const getSunSign = (date: string) => {
    const d = new Date(date);
    const month = d.getMonth() + 1;
    const day = d.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return { sign: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19', hiSign: 'मेष' };
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return { sign: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20', hiSign: 'वृषभ' };
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      return { sign: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 21', hiSign: 'मिथुन' };
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      return { sign: 'Cancer', symbol: '♋', dates: 'Jun 22 - Jul 22', hiSign: 'कर्क' };
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return { sign: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22', hiSign: 'सिंह' };
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return { sign: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22', hiSign: 'कन्या' };
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      return { sign: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 23', hiSign: 'तुला' };
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      return { sign: 'Scorpio', symbol: '♏', dates: 'Oct 24 - Nov 21', hiSign: 'वृश्चिक' };
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return { sign: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21', hiSign: 'धनु' };
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return { sign: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19', hiSign: 'मकर' };
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return { sign: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18', hiSign: 'कुंभ' };
    } else {
      return { sign: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20', hiSign: 'मीन' };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthDate) {
      const sunSign = getSunSign(birthDate);
      setResult({
        sign: lang === 'hi' ? sunSign.hiSign : sunSign.sign,
        symbol: sunSign.symbol,
        dates: sunSign.dates
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[64] overflow-y-auto bg-[var(--primary-bg)]">
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-30 w-12 h-12 glass-heavy border border-[var(--border-color)] rounded-full flex items-center justify-center text-[var(--text-primary)] hover:glass-light transition-all shadow-xl hover:scale-110 active:scale-95"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">☀️</span>
          <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'सूर्य राशि कैल्कुलेटर' : 'Sun Sign Calculator'}
          </h1>
          <div className="w-20 h-1 bg-[var(--accent-color)] mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="glass-heavy rounded-2xl border border-[var(--border-color)] p-8">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center">
                <label className="block text-gray-300 font-bold mb-2 text-lg">
                  {lang === 'hi' ? 'अपनी जन्म तिथि चुनें' : 'Select Your Birth Date'}
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full max-w-md mx-auto glass-light border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)]/50 text-center text-xl"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-amber-600-500 hover:from-amber-600 hover:to-amber-600-600 text-gray-800 font-black py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-[var(--accent-color)]/30 text-lg"
                >
                  {lang === 'hi' ? 'सूर्य राशि खोजें' : 'Find Sun Sign'}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="glass rounded-xl p-8 mb-6">
                <div className="text-8xl mb-4">{result.symbol}</div>
                <h4 className="text-[var(--accent-color)] font-bold text-3xl mb-2">
                  {result.sign}
                </h4>
                <p className="text-gray-300 text-lg">
                  {result.dates}
                </p>
                <p className="text-[var(--text-secondary)] text-sm mt-4">
                  {lang === 'hi' ? 'यह आपकी सूर्य राशि है' : 'This is your Sun Sign'}
                </p>
              </div>
              <button
                onClick={() => setResult(null)}
                className="btn-accent text-gray-800 font-bold text-[var(--text-primary)] font-bold py-2 px-6 rounded-xl transition-all"
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





