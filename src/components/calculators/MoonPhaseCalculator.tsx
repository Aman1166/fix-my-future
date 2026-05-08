import { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

export default function MoonPhaseCalculator({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const { lang } = useContext(LanguageContext);
  const [date, setDate] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) {
      const phases = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'];
      const hiPhases = ['अमावस्या', 'शुक्ल पक्ष प्रारंभ', 'प्रथम चतुर्थांश', 'शुक्ल पक्ष अंत', 'पूर्णिमा', 'कृष्ण पक्ष प्रारंभ', 'अंतिम चतुर्थांश', 'कृष्ण पक्ष अंत'];
      const randomIndex = Math.floor(Math.random() * phases.length);
      setResult(lang === 'hi' ? hiPhases[randomIndex] : phases[randomIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[64] overflow-y-auto bg-[var(--primary-bg)]">
      <button onClick={onClose} className="fixed top-6 right-6 z-30 w-12 h-12 glass-heavy border border-[var(--border-color)] rounded-full flex items-center justify-center text-[var(--text-primary)] hover:glass-light transition-all shadow-xl hover:scale-110 active:scale-95">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center"><div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">🌑</span>
          <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'चंद्र चरण कैल्कुलेटर' : 'Moon Phase Calculator'}
          </h1>
          <div className="w-20 h-1 bg-[var(--accent-color)] mt-6 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="glass-heavy rounded-2xl border border-[var(--border-color)] p-8">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center">
                <label className="block text-gray-300 font-bold mb-2 text-lg">{lang === 'hi' ? 'तिथि चुनें' : 'Select Date'}</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full max-w-md mx-auto glass-light border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)]/50 text-center text-xl" required />
              </div>
              <div className="text-center"><button type="submit" className="bg-gradient-to-r from-blue-500 to-amber-600-500 hover:from-blue-600 hover:to-amber-600-600 text-[var(--text-primary)] font-black py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-blue-500/30 text-lg">{lang === 'hi' ? 'चंद्र चरण जांचें' : 'Check Moon Phase'}</button></div>
            </form>
          ) : (
            <div className="text-center">
              <div className="glass rounded-xl p-8 mb-6">
                <div className="text-6xl mb-4">🌕</div>
                <h4 className="text-[var(--accent-color)] font-bold text-2xl mb-2">{result}</h4>
                <p className="text-gray-300">{lang === 'hi' ? 'यह चंद्र का वर्तमान चरण है' : 'This is the current moon phase'}</p>
              </div>
              <button onClick={() => setResult(null)} className="btn-accent text-gray-800 font-bold text-[var(--text-primary)] font-bold py-2 px-6 rounded-xl transition-all">{lang === 'hi' ? 'दोबारा जांचें' : 'Check Again'}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}





