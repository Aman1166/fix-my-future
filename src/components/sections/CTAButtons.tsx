import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function CTAButtons() {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  const ctaCards = [
    {
      icon: <span className="material-symbols-outlined">chat_bubble</span>,
      title: lang === 'hi' ? 'ज्योतिषी से चैट' : 'Chat with Astrologer',
      subtitle: lang === 'hi' ? 'व्यक्तिगत मार्गदर्शन प्राप्त करें' : 'Get personalized guidance',
      path: '/chat',
      glow: 'hover:shadow-blue-500/20'
    },
    {
      icon: <span className="material-symbols-outlined">call</span>,
      title: lang === 'hi' ? 'ज्योतिषी से बात करें' : 'Talk to Astrologer',
      subtitle: lang === 'hi' ? 'फोन पर विस्तृत परामर्श' : 'Detailed consultation over call',
      path: '/talk',
      glow: 'hover:shadow-purple-500/20'
    },
    {
      icon: <span className="material-symbols-outlined">self_improvement</span>,
      title: lang === 'hi' ? 'पूजा बुक करें' : 'Book A Pooja',
      subtitle: lang === 'hi' ? 'घर बैठे पूजा करवाएं' : 'Book pooja from home',
      path: '/pooja',
      glow: 'hover:shadow-amber-500/20'
    }
  ];

  return (
    <section className={`py-12 md:py-16 ${isDark ? 'bg-gray-800 text-white' : 'glass-strong border-y border-[#083f1d]/15 text-[#083f1d]'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-gray-100 mb-4 gradient-text-strong">
            {lang === 'hi' ? 'हमारे सेवाएं' : 'Our Services'}
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
            {lang === 'hi' ? 'आपके जीवन की हर समस्या का समाधान हमारे पास है' : 'Solutions to every problem in your life'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className={`group glass-strong rounded-2xl shadow-xl hover:shadow-2xl border border-amber-600/20 transition-all duration-500 hover-3d cursor-pointer ${card.glow}`}
              onClick={() => navigate(card.path)}
            >
              {/* Icon Section */}
              <div className="flex items-center justify-center p-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-linear-to-br from-amber-600-500/20 to-amber-600-600/20 rounded-2xl flex items-center justify-center text-4xl md:text-5xl shadow-inner border border-amber-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 text-amber-600 group-hover:neon-glow">
                  {card.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="px-6 pb-6">
                <h3 className="font-bold text-lg md:text-xl text-gray-100 mb-2 group-hover:text-amber-600 transition-colors text-center">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-400 text-center leading-relaxed">
                  {card.subtitle}
                </p>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <button className="w-full btn-cyan text-gray-800 px-4 py-3 rounded-xl font-bold text-sm tracking-wider uppercase shadow-lg hover:shadow-amber-600-500/30 hover:scale-105 active:scale-95 transition-all">
                  {lang === 'hi' ? 'शुरू करें' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
