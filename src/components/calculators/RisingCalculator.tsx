import { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

export default function RisingCalculator({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ birthDate: '', birthTime: '', birthPlace: '' });
  const [result, setResult] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.birthDate && formData.birthTime && formData.birthPlace) {
      const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
      const hiSigns = ['मेष', 'वृषभ', 'मिथुन', 'कर्क', 'सिंह', 'कन्या', 'तुला', 'वृश्चिक', 'धनु', 'मकर', 'कुंभ', 'मीन'];
      const randomIndex = Math.floor(Math.random() * signs.length);
      setResult(lang === 'hi' ? hiSigns[randomIndex] : signs[randomIndex]);
    }
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
          <span className="text-5xl md:text-7xl mb-4 animate-float">⬆️</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'उदय/आरोही कैल्कुलेटर' : 'Rising/Ascendant Calculator'}
          </h1>
          <div className="w-20 h-1 bg-amber-700 mt-6 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-8">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div><label className="block text-gray-300 font-bold mb-2">{lang === 'hi' ? 'जन्म तिथि' : 'Birth Date'}</label><input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50" required /></div>
                <div><label className="block text-gray-300 font-bold mb-2">{lang === 'hi' ? 'जन्म समय' : 'Birth Time'}</label><input type="time" name="birthTime" value={formData.birthTime} onChange={handleInputChange} className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50" required /></div>
                <div><label className="block text-gray-300 font-bold mb-2">{lang === 'hi' ? 'जन्म स्थान' : 'Birth Place'}</label><input type="text" name="birthPlace" value={formData.birthPlace} onChange={handleInputChange} className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50" placeholder={lang === 'hi' ? 'जन्म स्थान दर्ज करें' : 'Enter birth place'} required /></div>
              </div>
              <div className="text-center"><button type="submit" className="bg-gradient-to-r from-amber-500 to-amber-600-500 hover:from-amber-600 hover:to-amber-600-600 text-gray-800 font-black py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-amber-500/30 text-lg">{lang === 'hi' ? 'आरोही राशि कैल्कुलेट करें' : 'Calculate Ascendant'}</button></div>
            </form>
          ) : (
            <div className="text-center">
              <div className="bg-gray-700/50 rounded-xl p-8 mb-6">
                <h4 className="text-amber-500 font-bold text-3xl mb-4">{result}</h4>
                <p className="text-gray-300">{lang === 'hi' ? 'यह आपकी आरोही राशि है' : 'This is your Ascendant Sign'}</p>
              </div>
              <button onClick={() => setResult(null)} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-6 rounded-xl transition-all">{lang === 'hi' ? 'दोबारा कैल्कुलेट करें' : 'Calculate Again'}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}