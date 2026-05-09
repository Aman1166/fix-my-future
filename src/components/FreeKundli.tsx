import { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../App';

export default function FreeKundli({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
  });
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.gender && formData.birthDate && formData.birthTime && formData.birthPlace) {
      setShowResult(true);
    }
  };

  const handleLogin = () => {
    (window as any).__setAuth?.(true);
  };

  const handleTalkToAstrologer = () => {
    (window as any).__talk?.();
  };

  const handleChatWithAstrologer = () => {
    (window as any).__chat?.();
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[64] overflow-y-auto ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
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
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-gray-800/60 via-gray-950/40 to-gray-900' : 'bg-gradient-to-b from-white/60 via-white/40 to-white'}`}></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">📊</span>
          <h1 className={`text-4xl md:text-6xl font-black mb-3 tracking-tight drop-shadow-xl animate-slideInUp ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'मुफ्त कुंडली ऑनलाइन' : 'Free Kundli Online'}
          </h1>
          <p className={`text-sm md:text-lg max-w-2xl animate-fadeIn ${isDark ? 'text-white' : 'text-gray-700'}`}>
            {lang === 'hi' ? 'तुरंत और सटीक जन्म कुंडली प्राप्त करें' : 'Get instant & accurate Janam Kundli'}
          </p>
          <div className="w-20 h-1 bg-amber-500 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Description */}
        <div className={`rounded-2xl border p-6 mb-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-white' : 'text-gray-700'}`}>
            {lang === 'hi'
              ? 'क्या आपने कभी सोचा है कि आपका भविष्य क्या लेकर आया है? एक मुफ्त ऑनलाइन कुंडली आपके व्यक्तित्व, करियर, रिश्तों और भविष्य के बारे में विवरण दिखा सकती है।'
              : 'Ever thought about what your future holds? A free online kundli can show details about your personality, career, relationships, and future.'}
          </p>
        </div>

        {/* Form */}
        {!showResult ? (
          <div className={`rounded-2xl border p-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className={`font-black text-2xl mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {lang === 'hi' ? 'अपनी कुंडली बनाएं' : 'Create Your Kundli'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {lang === 'hi' ? 'नाम' : 'Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`}
                    placeholder={lang === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter your name'}
                    required
                  />
                </div>
                <div>
                  <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {lang === 'hi' ? 'लिंग' : 'Gender'}
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white' : 'bg-white border border-gray-200 text-gray-900'}`}
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
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {lang === 'hi' ? 'जन्म तिथि' : 'Birth Date'}
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white' : 'bg-white border border-gray-200 text-gray-900'}`}
                    required
                  />
                </div>
                <div>
                  <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {lang === 'hi' ? 'जन्म समय' : 'Birth Time'}
                  </label>
                  <input
                    type="time"
                    name="birthTime"
                    value={formData.birthTime}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white' : 'bg-white border border-gray-200 text-gray-900'}`}
                    required
                  />
                </div>
                <div>
                  <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {lang === 'hi' ? 'जन्म स्थान' : 'Birth Place'}
                  </label>
                  <input
                    type="text"
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`}
                    placeholder={lang === 'hi' ? 'जन्म स्थान दर्ज करें' : 'Enter birth place'}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-3.5 rounded-xl transition-all"
              >
                {lang === 'hi' ? 'कुंडली बनाएं' : 'Create Kundli'}
              </button>
            </form>
          </div>
        ) : (
          <div className={`rounded-2xl border p-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className={`font-black text-2xl mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {lang === 'hi' ? 'आपकी कुंडली' : 'Your Kundli'}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className={`rounded-xl p-4 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                <h4 className={`font-bold mb-2 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                  {lang === 'hi' ? 'व्यक्तिगत विवरण' : 'Personal Details'}
                </h4>
                <div className={`space-y-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                  <div><span className="font-bold">{lang === 'hi' ? 'नाम:' : 'Name:'}</span> {formData.name}</div>
                  <div><span className="font-bold">{lang === 'hi' ? 'लिंग:' : 'Gender:'}</span> {formData.gender}</div>
                  <div><span className="font-bold">{lang === 'hi' ? 'जन्म तिथि:' : 'Birth Date:'}</span> {formData.birthDate}</div>
                  <div><span className="font-bold">{lang === 'hi' ? 'जन्म समय:' : 'Birth Time:'}</span> {formData.birthTime}</div>
                  <div><span className="font-bold">{lang === 'hi' ? 'जन्म स्थान:' : 'Birth Place:'}</span> {formData.birthPlace}</div>
                </div>
              </div>
              <div className={`rounded-xl p-4 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                <h4 className={`font-bold mb-2 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                  {lang === 'hi' ? 'राशिफल' : 'Horoscope'}
                </h4>
                <p className={`text-lg ${isDark ? 'text-white' : 'text-gray-700'}`}>
                  {lang === 'hi'
                    ? 'आपकी कुंडली सफलतापूर्वक बनाई गई है। विस्तृत विश्लेषण के लिए लॉगिन करें।'
                    : 'Your kundli has been created successfully. Login for detailed analysis.'}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={handleLogin}
                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-3 rounded-xl transition-all"
              >
                {lang === 'hi' ? 'लॉगिन करें' : 'Login'}
              </button>
              <button
                onClick={handleTalkToAstrologer}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-black py-3 rounded-xl transition-all"
              >
                {lang === 'hi' ? 'ज्योतिषी से बात करें' : 'Talk to Astrologer'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
