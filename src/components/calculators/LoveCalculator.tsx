import { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

export default function LoveCalculator({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    yourName: '',
    yourGender: '',
    partnerName: '',
    partnerGender: '',
  });
  const [result, setResult] = useState<{ percentage: number; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateLove = () => {
    // Simple random calculation for demo
    const percentage = Math.floor(Math.random() * 100) + 1;
    let message = '';
    if (percentage >= 80) {
      message = lang === 'hi' ? 'अद्भुत संगतता! आप दोनों एक दूसरे के लिए बनाए गए हैं।' : 'Amazing compatibility! You two were made for each other.';
    } else if (percentage >= 60) {
      message = lang === 'hi' ? 'अच्छी संगतता! आपके रिश्ते में बहुत संभावनाएं हैं।' : 'Good compatibility! There are great possibilities in your relationship.';
    } else if (percentage >= 40) {
      message = lang === 'hi' ? 'औसत संगतता। प्रयास और समझ के साथ काम कर सकता है।' : 'Average compatibility. Can work with effort and understanding.';
    } else {
      message = lang === 'hi' ? 'कम संगतता। शायद दोस्ती बेहतर रहेगी।' : 'Low compatibility. Friendship might be better.';
    }
    setResult({ percentage, message });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.yourName && formData.yourGender && formData.partnerName && formData.partnerGender) {
      calculateLove();
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
          <span className="text-5xl md:text-7xl mb-4 animate-float">❤️</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'लव कैल्कुलेटर: अपना परफेक्ट मैच खोजें' : 'Love Calculator: Find Your Perfect Match'}
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
                    {lang === 'hi' ? 'आपका नाम' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50"
                    placeholder={lang === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter your name'}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-bold mb-2">
                    {lang === 'hi' ? 'आपका लिंग' : 'Your Gender'}
                  </label>
                  <select
                    name="yourGender"
                    value={formData.yourGender}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                    required
                  >
                    <option value="">
                      {lang === 'hi' ? 'लिंग चुनें' : 'Select gender'}
                    </option>
                    <option value="male">
                      {lang === 'hi' ? 'पुरुष' : 'Male'}
                    </option>
                    <option value="female">
                      {lang === 'hi' ? 'महिला' : 'Female'}
                    </option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-bold mb-2">
                    {lang === 'hi' ? 'पार्टनर का नाम' : 'Partner Name'}
                  </label>
                  <input
                    type="text"
                    name="partnerName"
                    value={formData.partnerName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50"
                    placeholder={lang === 'hi' ? 'पार्टनर का नाम दर्ज करें' : 'Enter partner name'}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-bold mb-2">
                    {lang === 'hi' ? 'पार्टनर का लिंग' : 'Partner Gender'}
                  </label>
                  <select
                    name="partnerGender"
                    value={formData.partnerGender}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                    required
                  >
                    <option value="">
                      {lang === 'hi' ? 'लिंग चुनें' : 'Select gender'}
                    </option>
                    <option value="male">
                      {lang === 'hi' ? 'पुरुष' : 'Male'}
                    </option>
                    <option value="female">
                      {lang === 'hi' ? 'महिला' : 'Female'}
                    </option>
                  </select>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-linear-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-black py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-pink-500/30 text-lg"
                >
                  {lang === 'hi' ? 'लव % कैल्कुलेट करें' : 'Calculate Love %'}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="bg-gray-700/50 rounded-xl p-8 mb-6">
                <div className="text-8xl font-black text-pink-400 mb-4">
                  {result.percentage}%
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  {result.message}
                </p>
                <div className="bg-linear-to-r from-pink-500/20 to-red-500/20 rounded-lg p-4 border border-pink-500/30">
                  <h4 className="text-pink-400 font-bold text-lg mb-2">
                    {lang === 'hi' ? 'आज का लव कोट' : 'Love Quote of the Day'}
                  </h4>
                  <p className="text-gray-300 italic">
                    {lang === 'hi'
                      ? '"समय के साथ आपका संबंध गहरा होगा, एक अटूट बंधन बन जाएगा।"'
                      : '"Your connection will deepen with time, forming an unbreakable bond."'}
                  </p>
                </div>
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