import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';

export default function YesterdayHoroscope({
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
      desc: 'Aries, yesterday was a day of reflection and learning. The lessons you gathered will serve as a foundation for your future growth and success.'
    },
    { 
      name: 'Taurus', 
      hiName: 'वृषभ', 
      symbol: '♉', 
      icon: '♉',
      color: 'bg-green-100',
      textColor: 'text-green-600',
      desc: 'Taurus, yesterday’s stability allowed you to process recent changes with grace. The peace you found will help you navigate today’s tasks with ease.'
    },
    { 
      name: 'Gemini', 
      hiName: 'मिथुन', 
      symbol: '♊', 
      icon: '♊',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      desc: 'Gemini, the conversations you had yesterday opened up new possibilities. The connections you made are already beginning to bear fruit.'
    },
    { 
      name: 'Cancer', 
      hiName: 'कर्क', 
      symbol: '♋', 
      icon: '♋',
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      desc: 'Cancer, yesterday was a time for nurturing your inner self. The emotional balance you achieved will guide you through the rest of the week.'
    },
    { 
      name: 'Leo', 
      hiName: 'सिंह', 
      symbol: '♌', 
      icon: '♌',
      color: 'bg-orange-100',
      textColor: 'text-orange-600',
      desc: 'Leo, your radiant energy from yesterday continues to inspire those around you. The impact you made is still felt in your social circles.'
    },
    { 
      name: 'Virgo', 
      hiName: 'कन्या', 
      symbol: '♍', 
      icon: '♍',
      color: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      desc: 'Virgo, the meticulous work you did yesterday has laid the groundwork for today’s achievements. Your attention to detail is your greatest asset.'
    },
    { 
      name: 'Libra', 
      hiName: 'तुला', 
      symbol: '♎', 
      icon: '♎',
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      desc: 'Libra, the harmony you created yesterday remains a source of strength. Your diplomatic efforts have successfully resolved recent tensions.'
    },
    { 
      name: 'Scorpio', 
      hiName: 'वृश्चिक', 
      symbol: '♏', 
      icon: '♏',
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      desc: 'Scorpio, the deep insights you gained yesterday have clarified your path. Trusting your intuition was the right choice for your journey.'
    },
    { 
      name: 'Sagittarius', 
      hiName: 'धनु', 
      symbol: '♐', 
      icon: '♐',
      color: 'bg-amber-100',
      textColor: 'text-amber-600',
      desc: 'Sagittarius, the adventurous spirit you embraced yesterday has opened up new horizons. The energy you gathered is fueling your today’s drive.'
    },
    { 
      name: 'Capricorn', 
      hiName: 'मकर', 
      symbol: '♑', 
      icon: '♑',
      color: 'bg-stone-100',
      textColor: 'text-stone-600',
      desc: 'Capricorn, the discipline you showed yesterday is already yielding results. Your commitment to your goals is paving the way for success.'
    },
    { 
      name: 'Aquarius', 
      hiName: 'कुंभ', 
      symbol: '♒', 
      icon: '♒',
      color: 'bg-cyan-100',
      textColor: 'text-cyan-600',
      desc: 'Aquarius, the innovative ideas you shared yesterday are being well-received. Your unique perspective is highly valued in your community.'
    },
    { 
      name: 'Pisces', 
      hiName: 'मीन', 
      symbol: '♓', 
      icon: '♓',
      color: 'bg-pink-100',
      textColor: 'text-pink-600',
      desc: 'Pisces, the creative energy you channeled yesterday has brought you a sense of fulfillment. Trusting your inner voice was the key.'
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
          {lang === 'hi' ? 'बीता हुआ कल का राशिफल' : "Yesterday's Horoscope"}
        </h1>
        <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {lang === 'hi' ? 'अपना बीते हुए कल का राशिफल चेक करें' : 'Check your yesterday\'s horoscope'}
        </p>
        
        <div className="flex justify-center mb-12">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20 animate-pulse">
                <span className="text-3xl text-white">⏮️</span>
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
                  {lang === 'hi' ? sign.hiName : sign.name} {lang === 'hi' ? 'कल का राशिफल' : "Yesterday's Horoscope"}
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
              Understanding yesterday's horoscope
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              <p>
                A yesterday's horoscope offers a valuable opportunity for reflection and integration. By reviewing the celestial influences that affected you in the past 24 hours, you can better understand your reactions and the outcomes of your actions.
              </p>
              <p>
                Self-reflection is a key component of personal growth, and astrology provides a unique framework for analyzing your past experiences and preparing for a more conscious future.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              How is yesterday's horoscope helpful?
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <p>
                    Checking your horoscope for yesterday helps in connecting the dots of your life. It allows you to see the correlations between planetary movements and your daily experiences, fostering a deeper sense of self-awareness.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provides a retrospective look at astrological trends.</li>
                    <li>Helps in understanding past moods and behaviors.</li>
                    <li>Identifies missed opportunities for better future planning.</li>
                    <li>Offers closure and clarity on previous day's events.</li>
                </ul>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className={`text-left p-8 rounded-3xl ${isDark ? 'bg-gray-800/40 border border-white/5' : 'bg-white border border-gray-100'}`}>
          <h2 className={`text-2xl font-black mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            FAQS YESTERDAY'S HOROSCOPE
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Why is it important to reflect on yesterday's horoscope?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Reflecting on the past helps you recognize patterns in your life and the celestial influences at play. It's a tool for learning from experience and making more informed choices today.
              </p>
            </div>
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Can yesterday's horoscope help me resolve today's issues?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Yes, by understanding the roots of yesterday's events, you can gain clarity on how to handle their repercussions today. It provides a context that can be very helpful for problem-solving.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
