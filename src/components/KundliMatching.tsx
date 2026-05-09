import { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../App';

export default function KundliMatching({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    boyName: '',
    boyBirthDate: '',
    boyBirthTime: '',
    boyBirthPlace: '',
    girlName: '',
    girlBirthDate: '',
    girlBirthTime: '',
    girlBirthPlace: '',
  });
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = ['boyName', 'boyBirthDate', 'boyBirthTime', 'boyBirthPlace', 'girlName', 'girlBirthDate', 'girlBirthTime', 'girlBirthPlace'];
    const isValid = requiredFields.every(field => formData[field as keyof typeof formData]);
    if (isValid) {
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
          <span className="text-5xl md:text-7xl mb-4 animate-float">💕</span>
          <h1 className={`text-4xl md:text-6xl font-black mb-3 tracking-tight drop-shadow-xl animate-slideInUp ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'विवाह के लिए कुंडली मिलान' : 'Kundali Matching for Marriage'}
          </h1>
          <div className="w-20 h-1 bg-amber-500 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Description */}
        <div className={`rounded-2xl border p-6 mb-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-white' : 'text-gray-700'}`}>
            {lang === 'hi'
              ? 'विवाह किसी के जीवन का सबसे बड़ा निर्णय है। इसलिए, चाहे लड़का हो या लड़की, न तो किसी को सिर्फ तात्कालिक रसायन विज्ञान पर आधारित निर्णय लेना चाहिए। इसके बजाय, जोड़े के रूप में भविष्य के बारे में सोचें। कुंडली मिलान समझने में मदद करता है अनुकूलता, वित्तीय विकास, पारिवारिक जीवन, और कठिन समय में समर्थन।'
              : 'Marriage is one of the biggest decisions in one\'s life. So, whether it\'s a girl or a boy, neither should make a decision based solely on instant chemistry. Instead, think about the future as a couple. Kundali matching helps understand compatibility, financial growth, family life, and support in difficult times.'}
          </p>
        </div>

        {/* Form */}
        {!showResult ? (
          <div className={`rounded-2xl border p-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className={`font-black text-2xl mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {lang === 'hi' ? 'पार्टनर की डिटेल भरें' : 'Fill Up Partner\'s Detail'}
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Boy's Detail */}
              <div className="space-y-6">
                <h4 className={`font-bold text-xl text-center mb-4 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                  {lang === 'hi' ? 'लड़के की डिटेल' : 'Boy\'s Detail'}
                </h4>
                <div>
                  <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {lang === 'hi' ? 'नाम' : 'Name'}
                  </label>
                  <input
                    type="text"
                    name="boyName"
                    value={formData.boyName}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`}
                    placeholder={lang === 'hi' ? 'लड़के का नाम दर्ज करें' : 'Enter boy\'s name'}
                    required
                  />
                </div>
                <div>
                  <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {lang === 'hi' ? 'जन्म तिथि' : 'Date of Birth'}
                  </label>
                  <input
                    type="date"
                    name="boyBirthDate"
                    value={formData.boyBirthDate}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white' : 'bg-white border border-gray-200 text-gray-900'}`}
                    required
                  />
                </div>
                <div>
                  <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {lang === 'hi' ? 'जन्म समय' : 'Time of Birth'}
                  </label>
                  <input
                    type="time"
                    name="boyBirthTime"
                    value={formData.boyBirthTime}
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
                    name="boyBirthPlace"
                    value={formData.boyBirthPlace}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`}
                    placeholder={lang === 'hi' ? 'जन्म स्थान दर्ज करें' : 'Enter birth place'}
                    required
                  />
                </div>
              </div>

              {/* Girl's Detail */}
              <div className="space-y-6">
                <h4 className={`font-bold text-xl text-center mb-4 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                  {lang === 'hi' ? 'लड़की की डिटेल' : 'Girl\'s Detail'}
                </h4>
                <div>
                  <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {lang === 'hi' ? 'नाम' : 'Name'}
                  </label>
                  <input
                    type="text"
                    name="girlName"
                    value={formData.girlName}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`}
                    placeholder={lang === 'hi' ? 'लड़की का नाम दर्ज करें' : 'Enter girl\'s name'}
                    required
                  />
                </div>
                <div>
                  <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {lang === 'hi' ? 'जन्म तिथि' : 'Date of Birth'}
                  </label>
                  <input
                    type="date"
                    name="girlBirthDate"
                    value={formData.girlBirthDate}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white' : 'bg-white border border-gray-200 text-gray-900'}`}
                    required
                  />
                </div>
                <div>
                  <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {lang === 'hi' ? 'जन्म समय' : 'Time of Birth'}
                  </label>
                  <input
                    type="time"
                    name="girlBirthTime"
                    value={formData.girlBirthTime}
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
                    name="girlBirthPlace"
                    value={formData.girlBirthPlace}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`}
                    placeholder={lang === 'hi' ? 'जन्म स्थान दर्ज करें' : 'Enter birth place'}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-amber-500/30 text-lg"
              >
                {lang === 'hi' ? 'होरोस्कोप मिलान करें' : 'Match Horoscope'}
              </button>
            </div>
          </div>
        ) : (
          /* Result Section */
          <div className={`rounded-2xl border p-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className={`font-black text-2xl mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {lang === 'hi' ? 'मिलान परिणाम' : 'Matching Result'}
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className={`rounded-xl p-6 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                <h4 className={`font-bold text-lg mb-4 text-center ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                  {lang === 'hi' ? 'लड़के की जानकारी' : 'Boy\'s Information'}
                </h4>
                <div className={`space-y-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                  <div><span className="font-bold">{lang === 'hi' ? 'नाम:' : 'Name:'}</span> {formData.boyName}</div>
                  <div><span className="font-bold">{lang === 'hi' ? 'जन्म तिथि:' : 'Birth Date:'}</span> {formData.boyBirthDate}</div>
                  <div><span className="font-bold">{lang === 'hi' ? 'जन्म समय:' : 'Birth Time:'}</span> {formData.boyBirthTime}</div>
                  <div><span className="font-bold">{lang === 'hi' ? 'जन्म स्थान:' : 'Birth Place:'}</span> {formData.boyBirthPlace}</div>
                </div>
              </div>

              <div className={`rounded-xl p-6 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                <h4 className={`font-bold text-lg mb-4 text-center ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                  {lang === 'hi' ? 'लड़की की जानकारी' : 'Girl\'s Information'}
                </h4>
                <div className={`space-y-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                  <div><span className="font-bold">{lang === 'hi' ? 'नाम:' : 'Name:'}</span> {formData.girlName}</div>
                  <div><span className="font-bold">{lang === 'hi' ? 'जन्म तिथि:' : 'Birth Date:'}</span> {formData.girlBirthDate}</div>
                  <div><span className="font-bold">{lang === 'hi' ? 'जन्म समय:' : 'Birth Time:'}</span> {formData.girlBirthTime}</div>
                  <div><span className="font-bold">{lang === 'hi' ? 'जन्म स्थान:' : 'Birth Place:'}</span> {formData.girlBirthPlace}</div>
                </div>
              </div>
            </div>

            <div className={`rounded-xl p-6 mb-6 ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
              <h4 className={`font-bold text-xl mb-4 text-center ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                {lang === 'hi' ? 'कंपेटिबिलिटी स्कोर' : 'Compatibility Score'}
              </h4>
              <div className="text-center">
                <div className={`text-6xl font-black mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>85%</div>
                <p className={isDark ? 'text-white' : 'text-gray-700'}>
                  {lang === 'hi'
                    ? 'यह प्लेसहोल्डर स्कोर है। वास्तविक मिलान विश्लेषण के लिए कृपया हमारे एक्सपर्ट ज्योतिषियों से संपर्क करें।'
                    : 'This is a placeholder score. For actual matching analysis, please contact our expert astrologers.'}
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowResult(false)}
                className={`font-bold py-2 px-4 rounded-xl transition-all ${isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
              >
                {lang === 'hi' ? 'वापस जाएं' : 'Go Back'}
              </button>
            </div>
          </div>
        )}

        {/* Extra Section */}
        <div className={`rounded-2xl border p-8 mt-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
          <h3 className={`font-black text-xl mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'सेव्ड मैचेस' : 'Saved Matches'}
          </h3>
          <div className="text-center mb-6">
            <p className={`mb-4 ${isDark ? 'text-white' : 'text-gray-700'}`}>
              {lang === 'hi'
                ? 'अपने मिलान सेव करने के लिए लॉग इन करें'
                : 'Login to save your matches'}
            </p>
            <button
              onClick={handleLogin}
              className={`font-bold py-3 px-6 rounded-xl transition-all mb-6 ${isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
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
              className="bg-gradient-to-r from-blue-500 to-amber-500 hover:from-blue-600 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-xl hover:shadow-blue-500/30"
            >
              {lang === 'hi' ? 'ज्योतिषी से चैट करें' : 'Chat with Astrologer'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
