import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';

export default function TomorrowHoroscope({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  const zodiacSigns = [
    { 
      name: 'Aries', 
      hiName: 'मेष', 
      symbol: '♈', 
      icon: '♈',
      color: 'bg-red-100',
      textColor: 'text-red-600',
      desc: 'Aries, tomorrow brings a surge of energy. Use this vitality to tackle unfinished projects and set new intentions for the future.'
    },
    { 
      name: 'Taurus', 
      hiName: 'वृषभ', 
      symbol: '♉', 
      icon: '♉',
      color: 'bg-green-100',
      textColor: 'text-green-600',
      desc: 'Taurus, focus on stability and comfort tomorrow. Taking time to ground yourself will lead to more effective decision-making in your career.'
    },
    { 
      name: 'Gemini', 
      hiName: 'मिथुन', 
      symbol: '♊', 
      icon: '♊',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      desc: 'Gemini, tomorrow is a great day for communication. Reach out to old friends or establish new connections to expand your social circle.'
    },
    { 
      name: 'Cancer', 
      hiName: 'कर्क', 
      symbol: '♋', 
      icon: '♋',
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      desc: 'Cancer, prioritize your emotional needs tomorrow. A quiet day spent at home or with loved ones will recharge your spiritual battery.'
    },
    { 
      name: 'Leo', 
      hiName: 'सिंह', 
      symbol: '♌', 
      icon: '♌',
      color: 'bg-orange-100',
      textColor: 'text-orange-600',
      desc: 'Leo, your confidence will be infectious tomorrow. Take the lead in social settings and inspire others with your positive outlook.'
    },
    { 
      name: 'Virgo', 
      hiName: 'कन्या', 
      symbol: '♍', 
      icon: '♍',
      color: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      desc: 'Virgo, focus on organization and detail tomorrow. Your analytical mind will help you solve complex problems with ease and precision.'
    },
    { 
      name: 'Libra', 
      hiName: 'तुला', 
      symbol: '♎', 
      icon: '♎',
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      desc: 'Libra, seek harmony and balance in your interactions tomorrow. Your diplomatic approach will resolve any potential conflicts smoothly.'
    },
    { 
      name: 'Scorpio', 
      hiName: 'वृश्चिक', 
      symbol: '♏', 
      icon: '♏',
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      desc: 'Scorpio, trust your instincts tomorrow. Your deep intuition will guide you through any challenging situations and reveal hidden truths.'
    },
    { 
      name: 'Sagittarius', 
      hiName: 'धनु', 
      symbol: '♐', 
      icon: '♐',
      color: 'bg-amber-100',
      textColor: 'text-amber-600',
      desc: 'Sagittarius, embrace your adventurous spirit tomorrow. Exploring new ideas and horizons will lead to exciting personal breakthroughs.'
    },
    { 
      name: 'Capricorn', 
      hiName: 'मकर', 
      symbol: '♑', 
      icon: '♑',
      color: 'bg-stone-100',
      textColor: 'text-stone-600',
      desc: 'Capricorn, stay disciplined and focused on your long-term goals tomorrow. Your hard work will pave the way for future success.'
    },
    { 
      name: 'Aquarius', 
      hiName: 'कुंभ', 
      symbol: '♒', 
      icon: '♒',
      color: 'bg-cyan-100',
      textColor: 'text-cyan-600',
      desc: 'Aquarius, share your innovative ideas with others tomorrow. Your unique perspective will be highly valued in collaborative projects.'
    },
    { 
      name: 'Pisces', 
      hiName: 'मीन', 
      symbol: '♓', 
      icon: '♓',
      color: 'bg-pink-100',
      textColor: 'text-pink-600',
      desc: 'Pisces, embrace your sensitivity and creativity tomorrow. Trusting your inner voice will lead to deep emotional and spiritual fulfillment.'
    },
  ];

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-100 overflow-y-auto ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navbar overlay button */}
      <button
        onClick={onClose}
        className={`fixed top-6 right-6 z-110 w-12 h-12 backdrop-blur-md border rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 ${isDark ? 'bg-gray-800/80 border-white/10 text-white hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-gray-100'}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-4 pt-16 pb-12 text-center">
        <h1 className={`text-4xl md:text-5xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {lang === 'hi' ? 'कल का राशिफल' : "Tomorrow's Horoscope"}
        </h1>
        <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {lang === 'hi' ? 'अपना कल का राशिफल आज ही चेक करें' : 'Check your tomorrow\'s horoscope today'}
        </p>
        
        <div className="flex justify-center mb-12">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20 animate-pulse">
                <span className="text-3xl text-white">⏳</span>
            </div>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {zodiacSigns.map((sign) => (
            <div 
              key={sign.name}
              className={`flex items-start p-6 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${isDark ? 'bg-gray-800/50 border-white/5 hover:border-amber-500/30' : 'bg-white border-gray-100 hover:border-amber-500/30'}`}
            >
              <div className={`w-24 h-24 shrink-0 rounded-2xl flex items-center justify-center text-4xl mr-6 ${sign.color} ${sign.textColor} shadow-inner`}>
                {sign.icon}
              </div>
              <div className="text-left">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {lang === 'hi' ? sign.hiName : sign.name} {lang === 'hi' ? 'कल का राशिफल' : "Tomorrow's Horoscope"}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {sign.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Article Sections */}
        <div className="text-left space-y-12 mb-16 px-4">
          <section>
            <h2 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Understanding tomorrow's horoscope
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              <p>
                A tomorrow's horoscope provides an essential preview of the astrological influences that will shape your next 24 hours. By checking it today, you can mentally and practically prepare for the opportunities and challenges that lie ahead.
              </p>
              <p>
                Astrology is a tool for preparation, and knowing tomorrow's energy allows you to align your intentions and actions more effectively, ensuring a smoother journey through the celestial tides.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              How is tomorrow's horoscope helpful?
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <p>
                    Checking your horoscope for tomorrow helps in proactive planning. It allows you to anticipate potential shifts in mood and energy, enabling you to make informed decisions for your day ahead.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provides an early glimpse into tomorrow's astrological trends.</li>
                    <li>Helps in setting intentions for the upcoming day.</li>
                    <li>Identifies key periods for productivity and rest.</li>
                    <li>Offers guidance on navigating upcoming celestial influences.</li>
                </ul>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className={`text-left p-8 rounded-3xl ${isDark ? 'bg-gray-800/40 border border-white/5' : 'bg-white border border-gray-100'}`}>
          <h2 className={`text-2xl font-black mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            FAQS TOMORROW'S HOROSCOPE
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Why should I read tomorrow's horoscope today?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Reading it in advance allows you to mentally prepare for the energies ahead, helping you to respond more mindfully rather than reacting to situations as they arise.
              </p>
            </div>
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                How accurate is tomorrow's horoscope?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                The celestial positions for tomorrow are calculated with high precision. While individual experiences may vary, the overarching trends remain highly reliable for general guidance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
