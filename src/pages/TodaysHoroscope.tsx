import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';

export default function TodaysHoroscope({
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
      desc: 'Aries, start your day with confidence. Use your energy to tackle new challenges and take the lead in your projects. Your pioneering spirit will lead to success.'
    },
    { 
      name: 'Taurus', 
      hiName: 'वृषभ', 
      symbol: '♉', 
      icon: '♉',
      color: 'bg-green-100',
      textColor: 'text-green-600',
      desc: 'Taurus, focus on stability today. Your persistence will pay off in your professional life. Take time to appreciate the beauty around you and enjoy the fruits of your labor.'
    },
    { 
      name: 'Gemini', 
      hiName: 'मिथुन', 
      symbol: '♊', 
      icon: '♊',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      desc: 'Gemini, communication is key today. Express your ideas clearly and listen to others. Your adaptability will help you navigate any situation with ease.'
    },
    { 
      name: 'Cancer', 
      hiName: 'कर्क', 
      symbol: '♋', 
      icon: '♋',
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      desc: 'Cancer, focus on your emotional well-being today. Nurture your relationships and create a harmonious environment. Trust your intuition to guide your decisions.'
    },
    { 
      name: 'Leo', 
      hiName: 'सिंह', 
      symbol: '♌', 
      icon: '♌',
      color: 'bg-orange-100',
      textColor: 'text-orange-600',
      desc: 'Leo, your charisma is at its peak. Use it to inspire others and lead with heart. Your creativity will shine, making this an excellent day for self-expression.'
    },
    { 
      name: 'Virgo', 
      hiName: 'कन्या', 
      symbol: '♍', 
      icon: '♍',
      color: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      desc: 'Virgo, focus on the details today. Your analytical skills will help you solve complex problems and organize your life. Your hard work and dedication will be recognized.'
    },
    { 
      name: 'Libra', 
      hiName: 'तुला', 
      symbol: '♎', 
      icon: '♎',
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      desc: 'Libra, find balance and harmony in your life today. Focus on your relationships and seek compromise. Your diplomatic skills will help you resolve any conflicts.'
    },
    { 
      name: 'Scorpio', 
      hiName: 'वृश्चिक', 
      symbol: '♏', 
      icon: '♏',
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      desc: 'Scorpio, trust your intuition and dive deep into your emotions. Your intense focus will help you uncover hidden truths and make significant progress.'
    },
    { 
      name: 'Sagittarius', 
      hiName: 'धनु', 
      symbol: '♐', 
      icon: '♐',
      color: 'bg-amber-100',
      textColor: 'text-amber-600',
      desc: 'Sagittarius, embrace adventure and explore new horizons. Your optimistic outlook will attract positive energy and lead to exciting opportunities.'
    },
    { 
      name: 'Capricorn', 
      hiName: 'मकर', 
      symbol: '♑', 
      icon: '♑',
      color: 'bg-stone-100',
      textColor: 'text-stone-600',
      desc: 'Capricorn, focus on your long-term goals and stay disciplined. Your hard work and perseverance will lead to steady progress and success in your career.'
    },
    { 
      name: 'Aquarius', 
      hiName: 'कुंभ', 
      symbol: '♒', 
      icon: '♒',
      color: 'bg-cyan-100',
      textColor: 'text-cyan-600',
      desc: 'Aquarius, embrace your unique ideas and connect with like-minded individuals. Your visionary thinking will inspire others and lead to innovative solutions.'
    },
    { 
      name: 'Pisces', 
      hiName: 'मीन', 
      symbol: '♓', 
      icon: '♓',
      color: 'bg-pink-100',
      textColor: 'text-pink-600',
      desc: 'Pisces, trust your intuition and embrace your creativity. Your sensitivity will help you connect with others on a deep level and find peace in your inner world.'
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
          {lang === 'hi' ? 'आज का राशिफल' : "Today's Horoscope"}
        </h1>
        <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {lang === 'hi' ? 'आज अपना राशिफल चेक करें' : 'Check your horoscope today'}
        </p>
        
        <div className="flex justify-center mb-12">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20 animate-pulse">
                <span className="text-3xl text-white">☀️</span>
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
                  {lang === 'hi' ? sign.hiName : sign.name} {lang === 'hi' ? 'आज का राशिफल' : "Today's Horoscope"}
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
              Understanding today's horoscope
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              <p>
                In today's fast-paced world, staying ahead and being prepared for what the day brings is a great advantage. Today's horoscope provides a glimpse into the celestial energies that affect each zodiac sign, offering insights into personal growth, career, and relationships.
              </p>
              <p>
                Whether you're looking for guidance in your professional life or seeking harmony in your personal relationships, today's horoscope can offer valuable perspectives. By understanding the planetary movements and their impact on your sign, you can navigate your day with greater awareness and confidence.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              How is today's horoscope helpful?
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                <p>
                    Today's horoscope is a valuable tool for anyone looking to optimize their daily life. It helps you identify potential challenges and opportunities, allowing you to make informed decisions and take proactive steps towards your goals.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provides personalized insights based on your zodiac sign.</li>
                    <li>Helps you navigate daily challenges with greater ease.</li>
                    <li>Identifies opportunities for personal and professional growth.</li>
                    <li>Offers guidance on relationships and emotional well-being.</li>
                </ul>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Today's Horoscope for zodiac signs
            </h2>
            <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                Each zodiac sign has its own unique characteristics and influences. By reading your today's horoscope, you can gain a deeper understanding of the specific energies affecting your sign and use this knowledge to enhance your daily experience.
            </p>
          </section>
        </div>

        {/* FAQ Section */}
        <section className={`text-left p-8 rounded-3xl ${isDark ? 'bg-gray-800/40 border border-white/5' : 'bg-white border border-gray-100'}`}>
          <h2 className={`text-2xl font-black mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            FAQS TODAY'S HOROSCOPE
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Can today's horoscope predict the changing world's trends correctly?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Yes, today's horoscope can provide valuable insights into the broader trends affecting the world. By analyzing the planetary movements, astrologers can identify potential shifts in global energy and offer guidance on how to navigate these changes.
              </p>
            </div>
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                How much is accurate today's horoscope?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                The accuracy of today's horoscope depends on several factors, including the skill and experience of the astrologer. While it can provide general guidance, it's important to remember that individual experiences may vary.
              </p>
            </div>
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Why do people prefer today's horoscope over a monthly/yearly one?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                People often prefer today's horoscope because it offers immediate and relevant guidance for their daily life. It provides a more detailed look at the energies affecting them on a specific day, which can be more helpful for making quick decisions.
              </p>
            </div>
            <div>
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                How reading horoscope is helpful for?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Reading your horoscope can be helpful in many ways. It can provide a sense of direction, offer comfort during challenging times, and help you understand yourself and others better. It's a tool for self-reflection and personal growth.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
