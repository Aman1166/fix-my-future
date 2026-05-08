import { useContext, useState } from 'react';
import { LanguageContext } from '../App';

export default function FreeKundli({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
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
          <span className="text-5xl md:text-7xl mb-4 animate-float">📊</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'मुफ्त कुंडली ऑनलाइन' : 'Free Kundli Online'}
          </h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl animate-fadeIn">
            {lang === 'hi' ? 'तुरंत और सटीक जन्म कुंडली प्राप्त करें' : 'Get instant & accurate Janam Kundli'}
          </p>
          <div className="w-20 h-1 bg-amber-700 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Description */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            {lang === 'hi'
              ? 'क्या आपने कभी सोचा है कि आपका भविष्य क्या लेकर आया है? एक मुफ्त ऑनलाइन कुंडली आपके व्यक्तित्व, करियर, रिश्तों और भविष्य के बारे में विवरण दिखा सकती है।'
              : 'Ever thought about what your future holds? A free online kundli can show details about your personality, career, relationships, and future.'}
          </p>
        </div>

        {/* Form */}
        {!showResult ? (
          <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <h3 className="text-white font-black text-2xl mb-6 text-center">
              {lang === 'hi' ? 'अपनी कुंडली बनाएं' : 'Create Your Kundli'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-bold mb-2">
                    {lang === 'hi' ? 'नाम' : 'Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50"
                    placeholder={lang === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter your name'}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-bold mb-2">
                    {lang === 'hi' ? 'लिंग' : 'Gender'}
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
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
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-300 font-bold mb-2">
                    {lang === 'hi' ? 'जन्म तिथि' : 'Birth Date'}
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
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
                    name="birthTime"
                    value={formData.birthTime}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-bold mb-2">
                    {lang === 'hi' ? 'जन्म स्थान' : 'Birth Place'}
                  </label>
                  <input
                    type="text"
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50"
                    placeholder={lang === 'hi' ? 'जन्म स्थान दर्ज करें' : 'Enter birth place'}
                    required
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-amber-600-500 hover:from-amber-600 hover:to-amber-600-600 text-gray-800 font-black py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-amber-500/30 text-lg"
                >
                  {lang === 'hi' ? 'होरोस्कोप जनरेट करें' : 'Generate Horoscope'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Result Section */
          <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <h3 className="text-white font-black text-2xl mb-6 text-center">
              {lang === 'hi' ? 'आपकी कुंडली' : 'Your Kundli'}
            </h3>
            <div className="bg-gray-700/50 rounded-xl p-6 mb-6">
              <h4 className="text-amber-500 font-bold text-lg mb-4">
                {lang === 'hi' ? 'बुनियादी विश्लेषण' : 'Basic Analysis'}
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <span className="font-bold text-white">{lang === 'hi' ? 'नाम:' : 'Name:'}</span> {formData.name}
                </div>
                <div>
                  <span className="font-bold text-white">{lang === 'hi' ? 'लिंग:' : 'Gender:'}</span> {formData.gender}
                </div>
                <div>
                  <span className="font-bold text-white">{lang === 'hi' ? 'जन्म तिथि:' : 'Birth Date:'}</span> {formData.birthDate}
                </div>
                <div>
                  <span className="font-bold text-white">{lang === 'hi' ? 'जन्म समय:' : 'Birth Time:'}</span> {formData.birthTime}
                </div>
                <div className="md:col-span-2">
                  <span className="font-bold text-white">{lang === 'hi' ? 'जन्म स्थान:' : 'Birth Place:'}</span> {formData.birthPlace}
                </div>
              </div>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 text-center">
                {lang === 'hi'
                  ? 'यह एक प्लेसहोल्डर आउटपुट है। वास्तविक कुंडली विश्लेषण के लिए कृपया हमारे एक्सपर्ट ज्योतिषियों से संपर्क करें।'
                  : 'This is a placeholder output. For actual kundli analysis, please contact our expert astrologers.'}
              </p>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => setShowResult(false)}
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-xl transition-all"
              >
                {lang === 'hi' ? 'वापस जाएं' : 'Go Back'}
              </button>
            </div>
          </div>
        )}

        {/* Extra Section */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-8 mt-8">
          <h3 className="text-white font-black text-xl mb-6 text-center">
            {lang === 'hi' ? 'सेव्ड कुंडली' : 'Saved Kundli'}
          </h3>
          <div className="text-center mb-6">
            <p className="text-gray-400 mb-4">
              {lang === 'hi'
                ? 'अपनी कुंडली सेव करने के लिए लॉग इन करें'
                : 'Login to save your kundli'}
            </p>
            <button
              onClick={handleLogin}
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-all mb-6"
            >
              {lang === 'hi' ? 'लॉग इन करें' : 'Login'}
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={handleTalkToAstrologer}
              className="bg-gradient-to-r from-purple-500 to-gray-500 hover:from-purple-600 hover:to-gray-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-xl hover:shadow-purple-500/30"
            >
              {lang === 'hi' ? 'ज्योतिषी से बात करें' : 'Talk to Astrologer'}
            </button>
            <button
              onClick={handleChatWithAstrologer}
              className="bg-gradient-to-r from-blue-500 to-amber-600-500 hover:from-blue-600 hover:to-amber-600-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-xl hover:shadow-blue-500/30"
            >
              {lang === 'hi' ? 'ज्योतिषी से चैट करें' : 'Chat with Astrologer'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}