import { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../App';

export default function Compatibility({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [selectedSigns, setSelectedSigns] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const zodiacSigns = [
    { name: 'Aries', hiName: 'मेष', symbol: '♈', dates: 'Mar 21 - Apr 19', color: 'from-red-500 to-amber-600' },
    { name: 'Taurus', hiName: 'वृषभ', symbol: '♉', dates: 'Apr 20 - May 20', color: 'from-green-500 to-emerald-500' },
    { name: 'Gemini', hiName: 'मिथुन', symbol: '♊', dates: 'May 21 - Jun 21', color: 'from-yellow-500 to-amber-500' },
    { name: 'Cancer', hiName: 'कर्क', symbol: '♋', dates: 'Jun 22 - Jul 22', color: 'from-blue-400 to-amber-600' },
    { name: 'Leo', hiName: 'सिंह', symbol: '♌', dates: 'Jul 23 - Aug 22', color: 'from-amber-600 to-yellow-500' },
    { name: 'Virgo', hiName: 'कन्या', symbol: '♍', dates: 'Aug 23 - Sep 22', color: 'from-green-400 to-teal-500' },
    { name: 'Libra', hiName: 'तुला', symbol: '♎', dates: 'Sep 23 - Oct 23', color: 'from-pink-400 to-rose-500' },
    { name: 'Scorpio', hiName: 'वृश्चिक', symbol: '♏', dates: 'Oct 24 - Nov 21', color: 'from-purple-600 to-gray-600' },
    { name: 'Sagittarius', hiName: 'धनु', symbol: '♐', dates: 'Nov 22 - Dec 21', color: 'from-blue-600 to-purple-600' },
    { name: 'Capricorn', hiName: 'मकर', symbol: '♑', dates: 'Dec 22 - Jan 19', color: 'from-gray-600 to-gray-700' },
    { name: 'Aquarius', hiName: 'कुंभ', symbol: '♒', dates: 'Jan 20 - Feb 18', color: 'from-amber-600 to-blue-500' },
    { name: 'Pisces', hiName: 'मीन', symbol: '♓', dates: 'Feb 19 - Mar 20', color: 'from-gray-500 to-purple-500' },
  ];

  const handleSignSelect = (signName: string) => {
    if (selectedSigns.includes(signName)) {
      setSelectedSigns(selectedSigns.filter(sign => sign !== signName));
      setShowResult(false);
    } else {
      if (selectedSigns.length < 2) {
        const newSelected = [...selectedSigns, signName];
        setSelectedSigns(newSelected);
        if (newSelected.length === 2) {
          setShowResult(true);
        }
      }
    }
  };

  const handleTalkToAstrologer = () => {
    (window as any).__talk?.();
  };

  const handleChatWithAstrologer = () => {
    (window as any).__chat?.();
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-64 overflow-y-auto ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
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
          <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-b from-gray-800/60 via-gray-950/40 to-gray-900' : 'bg-linear-to-b from-white/60 via-white/40 to-white'}`}></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">🔮</span>
          <h1 className={`text-4xl md:text-6xl font-black mb-3 tracking-tight drop-shadow-xl animate-slideInUp ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'कंपेटिबिलिटी' : 'Compatibility'}
          </h1>
          <p className={`text-sm md:text-lg max-w-2xl animate-fadeIn ${isDark ? 'text-white' : 'text-gray-700'}`}>
            {lang === 'hi' ? 'अपनी लव कंपेटिबिलिटी चेक करें' : 'Check your love compatibility'}
          </p>
          <div className="w-20 h-1 bg-amber-500 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Description */}
        <div className={`rounded-2xl border p-6 mb-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-white' : 'text-gray-700'}`}>
            {lang === 'hi'
              ? 'आपको हर किसी के साथ अच्छा नहीं लगता, लेकिन एक खास व्यक्ति के साथ आप खुश और पूरा महसूस करते हैं। जीवन में कई लोगों में से एक आपका जीवनसाथी बन जाता है। कंपेटिबिलिटी आपको सही व्यक्ति चुनने में मदद करती है जो आपको सुरक्षित और महत्वपूर्ण महसूस कराती है।'
              : 'You don\'t always get along with everyone, but with a special person you feel happy and complete. Among many people in life, one becomes your life partner. Compatibility helps you choose the right person who makes you feel secure and valued.'}
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${isDark ? 'text-white' : 'text-gray-700'}`}>
            {lang === 'hi'
              ? 'ज्योतिषीय कंपेटिबिलिटी रोमांटिक, भावनात्मक, और संबंध बंधन को समझने में मदद करती है। यह भविष्य में आपके रिश्ते के बढ़ने की भी भविष्यवाणी करती है और यह पता लगाती है कि क्या सद्भाव या टकराव संभावित है।'
              : 'Zodiac compatibility helps understand romantic, emotional, and relationship bonding. It also predicts how your relationship may grow in the future and whether harmony or conflict is likely.'}
          </p>
        </div>

        {/* Zodiac Selection */}
        <div className={`rounded-2xl border p-8 mb-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
          <h3 className={`font-black text-2xl mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'अपना राशि चुनें' : 'Choose Your Sign'}
          </h3>

          {/* Selected Signs Display */}
          {selectedSigns.length > 0 && (
            <div className="mb-6 text-center">
              <p className={`mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                {lang === 'hi' ? 'चुने गए राशि:' : 'Selected signs:'} {selectedSigns.join(', ')}
              </p>
              {selectedSigns.length < 2 && (
                <p className="text-amber-500 text-sm">
                  {lang === 'hi' ? 'कृपया एक और राशि चुनें' : 'Please select one more sign'}
                </p>
              )}
            </div>
          )}

          {/* Zodiac Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {zodiacSigns.map((sign) => (
              <button
                key={sign.name}
                onClick={() => handleSignSelect(sign.name)}
                className={`bg-linear-to-br ${sign.color} p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 ${
                  selectedSigns.includes(sign.name)
                    ? 'border-white shadow-white/20 scale-105'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                <div className="text-3xl mb-2">{sign.symbol}</div>
                <div className="font-bold text-sm tracking-wide text-white">
                  {lang === 'hi' ? sign.hiName : sign.name}
                </div>
                <div className="text-xs text-white/80 mt-1">{sign.dates}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Result Section */}
        {showResult && (
          <div className={`rounded-2xl border p-8 mb-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className={`font-black text-2xl mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {lang === 'hi' ? 'कंपेटिबिलिटी परिणाम' : 'Compatibility Result'}
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className={`rounded-xl p-6 text-center ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                <div className="text-4xl mb-2">
                  {zodiacSigns.find(s => s.name === selectedSigns[0])?.symbol}
                </div>
                <div className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {lang === 'hi' ? zodiacSigns.find(s => s.name === selectedSigns[0])?.hiName : selectedSigns[0]}
                </div>
                <div className={`text-sm ${isDark ? 'text-white' : 'text-gray-500'}`}>
                  {zodiacSigns.find(s => s.name === selectedSigns[0])?.dates}
                </div>
              </div>

              <div className={`rounded-xl p-6 text-center ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
                <div className="text-4xl mb-2">
                  {zodiacSigns.find(s => s.name === selectedSigns[1])?.symbol}
                </div>
                <div className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {lang === 'hi' ? zodiacSigns.find(s => s.name === selectedSigns[1])?.hiName : selectedSigns[1]}
                </div>
                <div className={`text-sm ${isDark ? 'text-white' : 'text-gray-500'}`}>
                  {zodiacSigns.find(s => s.name === selectedSigns[1])?.dates}
                </div>
              </div>
            </div>

            <div className={`rounded-xl p-6 text-center ${isDark ? 'bg-gray-700/50' : 'bg-white border border-gray-200'}`}>
              <h4 className={`font-bold text-xl mb-4 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                {lang === 'hi' ? 'कंपेटिबिलिटी स्कोर' : 'Compatibility Score'}
              </h4>
              <div className={`text-6xl font-black mb-4 ${isDark ? 'text-green-400' : 'text-green-600'}`}>78%</div>
              <p className={`leading-relaxed ${isDark ? 'text-white' : 'text-gray-700'}`}>
                {lang === 'hi'
                  ? 'यह प्लेसहोल्डर स्कोर है। वास्तविक ज्योतिषीय विश्लेषण के लिए कृपया हमारे एक्सपर्ट ज्योतिषियों से संपर्क करें।'
                  : 'This is a placeholder score. For actual astrological analysis, please contact our expert astrologers.'}
              </p>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setSelectedSigns([]);
                  setShowResult(false);
                }}
                className={`font-bold py-2 px-4 rounded-xl transition-all ${isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
              >
                {lang === 'hi' ? 'दोबारा चुनें' : 'Select Again'}
              </button>
            </div>
          </div>
        )}

        {/* Extra Section */}
        <div className={`rounded-2xl border p-8 ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
          <h3 className={`font-black text-xl mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'अधिक मदद चाहिए?' : 'Need More Help?'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={handleTalkToAstrologer}
              className="bg-linear-to-r from-purple-500 to-gray-500 hover:from-purple-600 hover:to-gray-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-xl hover:shadow-purple-500/30"
            >
              {lang === 'hi' ? 'ज्योतिषी से बात करें' : 'Talk to Astrologer'}
            </button>
            <button
              onClick={handleChatWithAstrologer}
              className="bg-linear-to-r from-blue-500 to-amber-500 hover:from-blue-600 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-xl hover:shadow-blue-500/30"
            >
              {lang === 'hi' ? 'ज्योतिषी से चैट करें' : 'Chat with Astrologer'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
