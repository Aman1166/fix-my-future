import { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

export default function KaalSarpDoshCalculator({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const { lang } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ name: '', birthDate: '', birthTime: '', birthPlace: '' });
  const [result, setResult] = useState<{ hasDosh: boolean; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateKaalSarp = () => {
    const hasDosh = Math.random() > 0.6;
    const message = hasDosh
      ? (lang === 'hi' ? 'काल सर्प दोष पाया गया। उपाय करने की सलाह दी जाती है।' : 'Kaal Sarp Dosh found. Remedies recommended.')
      : (lang === 'hi' ? 'कोई काल सर्प दोष नहीं।' : 'No Kaal Sarp Dosh found.');
    return { hasDosh, message };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.birthDate && formData.birthTime && formData.birthPlace) {
      setResult(calculateKaalSarp());
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
          <span className="text-5xl md:text-7xl mb-4 animate-float">🐍</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'काल सर्प दोष कैल्कुलेटर' : 'Kaal Sarp Dosh Calculator'}
          </h1>
          <div className="w-20 h-1 bg-amber-700 mt-6 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-8">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div><label className="block text-gray-300 font-bold mb-2">{lang === 'hi' ? 'नाम' : 'Name'}</label><input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50" placeholder={lang === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter your name'} required /></div>
                <div><label className="block text-gray-300 font-bold mb-2">{lang === 'hi' ? 'जन्म तिथि' : 'Birth Date'}</label><input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50" required /></div>
                <div><label className="block text-gray-300 font-bold mb-2">{lang === 'hi' ? 'जन्म समय' : 'Birth Time'}</label><input type="time" name="birthTime" value={formData.birthTime} onChange={handleInputChange} className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50" required /></div>
                <div><label className="block text-gray-300 font-bold mb-2">{lang === 'hi' ? 'जन्म स्थान' : 'Birth Place'}</label><input type="text" name="birthPlace" value={formData.birthPlace} onChange={handleInputChange} className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50" placeholder={lang === 'hi' ? 'जन्म स्थान दर्ज करें' : 'Enter birth place'} required /></div>
              </div>
              <div className="text-center"><button type="submit" className="bg-gradient-to-r from-red-500 to-amber-600-500 hover:from-red-600 hover:to-amber-600-600 text-white font-black py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-red-500/30 text-lg">{lang === 'hi' ? 'काल सर्प दोष जांचें' : 'Check Kaal Sarp Dosh'}</button></div>
            </form>
          ) : (
            <div className="text-center">
              <div className="bg-gray-700/50 rounded-xl p-8 mb-6">
                <div className={`text-6xl mb-4 ${result.hasDosh ? 'text-red-400' : 'text-green-400'}`}>
                  {result.hasDosh ? '⚠️' : '✅'}
                </div>
                <p className="text-gray-300 text-lg">{result.message}</p>
              </div>
              <button onClick={() => setResult(null)} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-6 rounded-xl transition-all">{lang === 'hi' ? 'दोबारा जांचें' : 'Check Again'}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}