import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';

export default function MonthlyHoroscope({
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
      desc: 'Aries, this month focus on your professional expansion. New alliances and creative ventures will bring prosperity and long-term success.'
    },
    { 
      name: 'Taurus', 
      hiName: 'वृषभ', 
      symbol: '♉', 
      icon: '♉',
      color: 'bg-green-100',
      textColor: 'text-green-600',
      desc: 'Taurus, stability in finances and personal growth are your themes this month. Your steady efforts will lead to significant breakthroughs.'
    },
    { 
      name: 'Gemini', 
      hiName: 'मिथुन', 
      symbol: '♊', 
      icon: '♊',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      desc: 'Gemini, communication and networking will open new doors this month. Express your ideas clearly to attract the right opportunities.'
    },
    { 
      name: 'Cancer', 
      hiName: 'कर्क', 
      symbol: '♋', 
      icon: '♋',
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      desc: 'Cancer, focus on your emotional well-being and home life this month. Inner peace will be your greatest asset in navigating challenges.'
    },
    { 
      name: 'Leo', 
      hiName: 'सिंह', 
      symbol: '♌', 
      icon: '♌',
      color: 'bg-orange-100',
      textColor: 'text-orange-600',
      desc: 'Leo, your charisma and leadership skills will be in high demand this month. Take the lead in projects and inspire those around you.'
    },
    { 
      name: 'Virgo', 
      hiName: 'कन्या', 
      symbol: '♍', 
      icon: '♍',
      color: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      desc: 'Virgo, detail-oriented work will bring recognition this month. Your analytical approach will help you solve complex organizational problems.'
    },
    { 
      name: 'Libra', 
      hiName: 'तुला', 
      symbol: '♎', 
      icon: '♎',
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      desc: 'Libra, balance in relationships and harmony in your surroundings are key this month. Seek compromise and build lasting connections.'
    },
    { 
      name: 'Scorpio', 
      hiName: 'वृश्चिक', 
      symbol: '♏', 
      icon: '♏',
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      desc: 'Scorpio, transformation and deep self-discovery are your focus this month. Trust your intuition to guide you through significant changes.'
    },
    { 
      name: 'Sagittarius', 
      hiName: 'धनु', 
      symbol: '♐', 
      icon: '♐',
      color: 'bg-amber-100',
      textColor: 'text-amber-600',
      desc: 'Sagittarius, adventure and expansion of horizons await you this month. Your optimistic outlook will attract positive growth opportunities.'
    },
    { 
      name: 'Capricorn', 
      hiName: 'मकर', 
      symbol: '♑', 
      icon: '♑',
      color: 'bg-stone-100',
      textColor: 'text-stone-600',
      desc: 'Capricorn, career advancement and long-term planning are favored this month. Your disciplined nature will lead to steady progress.'
    },
    { 
      name: 'Aquarius', 
      hiName: 'कुंभ', 
      symbol: '♒', 
      icon: '♒',
      color: 'bg-cyan-100',
      textColor: 'text-cyan-600',
      desc: 'Aquarius, innovation and social connections will play a major role this month. Your unique perspective will be highly valued.'
    },
    { 
      name: 'Pisces', 
      hiName: 'मीन', 
      symbol: '♓', 
      icon: '♓',
      color: 'bg-pink-100',
      textColor: 'text-pink-600',
      desc: 'Pisces, spiritual growth and creative expression are your themes this month. Trust your inner voice and embrace your artistic side.'
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
          {lang === 'hi' ? 'मासिक राशिफल' : "Monthly Horoscope"}
        </h1>
        <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {lang === 'hi' ? 'अपना मासिक राशिफल चेक करें' : 'Check your monthly horoscope'}
        </p>
        
        <div className="flex justify-center mb-12">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20 animate-pulse">
                <span className="text-3xl text-white">📅</span>
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
                  {lang === 'hi' ? sign.hiName : sign.name} {lang === 'hi' ? 'मासिक राशिफल' : "Monthly Horoscope"}
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
              Understanding monthly horoscope
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              <p>
                A monthly horoscope provides a comprehensive overview of the astrological themes that will influence your life over the next 30 days. It helps you understand the broader planetary shifts and how they impact your sign's personal and professional journey.
              </p>
              <p>
                By looking at the monthly forecast, you can align your long-term plans with the cosmic energy, ensuring that you make the most of the opportunities presented by the universe.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              How is monthly horoscope helpful?
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <p>
                    Monthly horoscope is an essential tool for strategic planning. It allows you to anticipate major astrological events and prepare for the unique challenges and blessings that each month brings.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provides a bird's-eye view of the month's astrological trends.</li>
                    <li>Helps in setting monthly goals and intentions.</li>
                    <li>Identifies key periods for career, love, and growth.</li>
                    <li>Offers guidance on navigating complex celestial alignments.</li>
                </ul>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className={`text-left p-8 rounded-3xl ${isDark ? 'bg-gray-800/40 border border-white/5' : 'bg-white border border-gray-100'}`}>
          <h2 className={`text-2xl font-black mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            FAQS MONTHLY HOROSCOPE
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Is a monthly horoscope accurate for everyone of the same sign?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                While it provides a general overview based on your sun sign, your individual birth chart adds unique layers to these influences. It's a guide to the collective energy affecting your sign.
              </p>
            </div>
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                How can I use my monthly horoscope for goal setting?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Identify the areas of focus mentioned for your sign and set intentions that align with those themes. Use the favorable periods mentioned to launch new projects or have important conversations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
