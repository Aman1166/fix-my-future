import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';

export default function WeeklyHoroscope({
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
      desc: 'Aries, this week focus on long-term goals. Your energy will be high, allowing you to make significant progress in your professional life.'
    },
    { 
      name: 'Taurus', 
      hiName: 'वृषभ', 
      symbol: '♉', 
      icon: '♉',
      color: 'bg-green-100',
      textColor: 'text-green-600',
      desc: 'Taurus, expect a week of stability and growth. Your patience will be rewarded with new opportunities in your personal and financial endeavors.'
    },
    { 
      name: 'Gemini', 
      hiName: 'मिथुन', 
      symbol: '♊', 
      icon: '♊',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      desc: 'Gemini, communication will be your greatest asset this week. Use it to resolve any pending conflicts and build stronger relationships.'
    },
    { 
      name: 'Cancer', 
      hiName: 'कर्क', 
      symbol: '♋', 
      icon: '♋',
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      desc: 'Cancer, focus on your home and family life this week. Nurturing these bonds will bring you a sense of peace and security.'
    },
    { 
      name: 'Leo', 
      hiName: 'सिंह', 
      symbol: '♌', 
      icon: '♌',
      color: 'bg-orange-100',
      textColor: 'text-orange-600',
      desc: 'Leo, your creativity will shine this week. Embrace new ideas and allow your artistic spirit to lead you towards success.'
    },
    { 
      name: 'Virgo', 
      hiName: 'कन्या', 
      symbol: '♍', 
      icon: '♍',
      color: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      desc: 'Virgo, focus on the details this week. Your analytical skills will help you overcome any obstacles and achieve your targets with precision.'
    },
    { 
      name: 'Libra', 
      hiName: 'तुला', 
      symbol: '♎', 
      icon: '♎',
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      desc: 'Libra, seek balance in all areas of your life this week. Your diplomatic skills will help you maintain harmony in your relationships.'
    },
    { 
      name: 'Scorpio', 
      hiName: 'वृश्चिक', 
      symbol: '♏', 
      icon: '♏',
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      desc: 'Scorpio, trust your intuition this week. Your deep insights will guide you through any complex situations and lead to personal growth.'
    },
    { 
      name: 'Sagittarius', 
      hiName: 'धनु', 
      symbol: '♐', 
      icon: '♐',
      color: 'bg-amber-100',
      textColor: 'text-amber-600',
      desc: 'Sagittarius, embrace your adventurous spirit this week. Explore new horizons and allow your optimistic outlook to attract positive energy.'
    },
    { 
      name: 'Capricorn', 
      hiName: 'मकर', 
      symbol: '♑', 
      icon: '♑',
      color: 'bg-stone-100',
      textColor: 'text-stone-600',
      desc: 'Capricorn, focus on your professional growth this week. Your disciplined approach will help you achieve long-term success in your career.'
    },
    { 
      name: 'Aquarius', 
      hiName: 'कुंभ', 
      symbol: '♒', 
      icon: '♒',
      color: 'bg-cyan-100',
      textColor: 'text-cyan-600',
      desc: 'Aquarius, share your unique ideas with the world this week. Your visionary thinking will inspire others and lead to innovative solutions.'
    },
    { 
      name: 'Pisces', 
      hiName: 'मीन', 
      symbol: '♓', 
      icon: '♓',
      color: 'bg-pink-100',
      textColor: 'text-pink-600',
      desc: 'Pisces, trust your intuition and embrace your creativity this week. Your sensitivity will help you connect deeply with others.'
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
          {lang === 'hi' ? 'साप्ताहिक राशिफल' : "Weekly Horoscope"}
        </h1>
        <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {lang === 'hi' ? 'अपना साप्ताहिक राशिफल चेक करें' : 'Check your weekly horoscope'}
        </p>
        
        <div className="flex justify-center mb-12">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20 animate-pulse">
                <span className="text-3xl text-white">🗓️</span>
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
                  {lang === 'hi' ? sign.hiName : sign.name} {lang === 'hi' ? 'साप्ताहिक राशिफल' : "Weekly Horoscope"}
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
              Understanding weekly horoscope
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              <p>
                A weekly horoscope offers a broader perspective on the astrological influences that shape your week. It provides insights into long-term trends and helping you plan your week with greater awareness of the celestial energies at play.
              </p>
              <p>
                By understanding the weekly movements of the planets, you can identify the best times for important activities, personal growth, and relationship building. It's a valuable tool for anyone looking to live in harmony with the cosmos.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              How is weekly horoscope helpful?
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <p>
                    Weekly horoscope is beneficial for planning and preparation. It helps you anticipate upcoming trends and challenges, allowing you to make proactive decisions and align your actions with the natural rhythms of the universe.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provides a 7-day overview of astrological trends.</li>
                    <li>Helps in planning important weekly tasks and events.</li>
                    <li>Identifies favorable periods for growth and success.</li>
                    <li>Offers guidance on maintaining balance throughout the week.</li>
                </ul>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className={`text-left p-8 rounded-3xl ${isDark ? 'bg-gray-800/40 border border-white/5' : 'bg-white border border-gray-100'}`}>
          <h2 className={`text-2xl font-black mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            FAQS WEEKLY HOROSCOPE
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                How often should I check my weekly horoscope?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Checking it once at the beginning of each week is usually sufficient to get an overview of the upcoming trends and plan accordingly.
              </p>
            </div>
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Can a weekly horoscope differ from a daily one?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Yes, a weekly horoscope focuses on longer-term trends, while a daily horoscope provides more immediate, day-to-day insights. Both can be used together for a more complete understanding.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
