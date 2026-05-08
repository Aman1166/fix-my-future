import { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

export default function NameNumerologyCalculator({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const [name, setName] = useState('');
  const [result, setResult] = useState<{ number: number; meaning: string } | null>(null);

  const calculateNumerology = (inputName: string) => {
    // Simple numerology calculation
    const letters = inputName.toUpperCase().replace(/[^A-Z]/g, '');
    let sum = 0;
    for (let char of letters) {
      sum += char.charCodeAt(0) - 64; // A=1, B=2, etc.
    }
    let number = sum % 9;
    if (number === 0) number = 9;

    const meanings = {
      1: lang === 'hi' ? 'नेतृत्व, स्वतंत्रता, रचनात्मकता' : 'Leadership, independence, creativity',
      2: lang === 'hi' ? 'सहयोग, संतुलन, सहानुभूति' : 'Cooperation, balance, empathy',
      3: lang === 'hi' ? 'अभिव्यक्ति, संचार, आनंद' : 'Expression, communication, joy',
      4: lang === 'hi' ? 'व्यवस्था, विश्वसनीयता, व्यावहारिकता' : 'Order, reliability, practicality',
      5: lang === 'hi' ? 'स्वतंत्रता, अन्वेषण, अनुकूलन' : 'Freedom, exploration, adaptability',
      6: lang === 'hi' ? 'देखभाल, जिम्मेदारी, संरक्षण' : 'Care, responsibility, protection',
      7: lang === 'hi' ? 'विश्लेषण, आंतरिक ज्ञान, अध्ययन' : 'Analysis, inner wisdom, study',
      8: lang === 'hi' ? 'सत्ता, उपलब्धि, भौतिक सफलता' : 'Power, achievement, material success',
      9: lang === 'hi' ? 'मानवतावाद, सहानुभूति, सेवा' : 'Humanitarianism, compassion, service',
    };

    return { number, meaning: meanings[number as keyof typeof meanings] };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const calcResult = calculateNumerology(name);
      setResult(calcResult);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[64] overflow-y-auto bg-gray-800">
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
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">🔢</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'नाम न्यूमेरोलॉजी कैल्कुलेटर' : 'Name Numerology Calculator'}
          </h1>
          <div className="w-20 h-1 bg-amber-700 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-8">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center">
                <label className="block text-gray-300 font-bold mb-2 text-lg">
                  {lang === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter Your Name'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full max-w-md mx-auto bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50 text-center text-xl"
                  placeholder={lang === 'hi' ? 'नाम' : 'Name'}
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-amber-600-500 hover:from-amber-600 hover:to-amber-600-600 text-gray-800 font-black py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-amber-500/30 text-lg"
                >
                  {lang === 'hi' ? 'न्यूमेरोलॉजी संख्या कैल्कुलेट करें' : 'Calculate Numerology Number'}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="bg-gray-700/50 rounded-xl p-8 mb-6">
                <div className="text-8xl font-black text-amber-500 mb-4">
                  {result.number}
                </div>
                <h4 className="text-amber-500 font-bold text-xl mb-4">
                  {lang === 'hi' ? 'आपकी न्यूमेरोलॉजी संख्या' : 'Your Numerology Number'}
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {result.meaning}
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