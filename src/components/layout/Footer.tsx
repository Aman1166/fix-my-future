import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Footer() {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  const infoLinks = [
    { label: lang === 'hi' ? 'हमारे बारे में' : 'About Us', path: '/about' },
    { label: lang === 'hi' ? 'संपर्क' : 'Contact', path: '/contact' },
    { label: lang === 'hi' ? 'FAQ' : 'FAQ', path: '/faq' },
    { label: lang === 'hi' ? 'शिपिंग पॉलिसी' : 'Shipping Policy', path: '/shipping' },
    { label: lang === 'hi' ? 'रिटर्न्स' : 'Returns', path: '/returns' },
  ];

  const astroLinks = [
    { label: lang === 'hi' ? 'मुफ़्त कुंडली' : 'Free Kundli', path: '/kundli' },
    { label: lang === 'hi' ? 'कुंडली मिलान' : 'Kundli Matching', path: '/matching' },
    { label: lang === 'hi' ? 'ज्योतिषी से बात करें' : 'Talk to Astrologer', path: '/talk' },
  ];

  const horoscopeLinks = [
    { label: lang === 'hi' ? 'आज का राशिफल' : 'Today\'s Horoscope', path: '/horoscope/today' },
    { label: lang === 'hi' ? 'दैनिक राशिफल' : 'Daily Horoscope', path: '/horoscope/daily' },
    { label: lang === 'hi' ? 'कल का राशिफल' : 'Yesterday\'s Horoscope', path: '/horoscope/yesterday' },
    { label: lang === 'hi' ? 'कल का राशिफल' : 'Tomorrow\'s Horoscope', path: '/horoscope/tomorrow' },
    { label: lang === 'hi' ? 'साप्ताहिक राशिफल' : 'Weekly Horoscope', path: '/horoscope/weekly' },
    { label: lang === 'hi' ? 'मासिक राशिफल' : 'Monthly Horoscope', path: '/horoscope/monthly' },
    { label: lang === 'hi' ? 'वार्षिक राशिफल' : 'Yearly Horoscope', path: '/horoscope/yearly' },
    { label: lang === 'hi' ? 'चीनी राशिफल' : 'Chinese Horoscope', path: '/horoscope/chinese' },
  ];

  return (
    <footer className={`${isDark ? 'bg-linear-to-b from-gray-800 via-gray-900 to-gray-900 text-white border-t border-amber-600/20' : 'glass-strong text-[#083f1d] border-t border-[#083f1d]/15'} pt-20 pb-8`}>
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className={`text-2xl font-black mb-6 flex items-center transition-colors group ${isDark ? 'hover:text-amber-400' : 'hover:text-[#083f1d]'}`}>
              <span className="text-3xl mr-3 animate-float neon-glow group-hover:scale-110 text-amber-500 flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>diamond</span>
              </span>
              <span className="gradient-text-strong">Fix My Future</span>
            </Link>
            <p className={`${isDark ? 'text-slate-400' : 'text-[#0a5c2a]'} leading-relaxed mb-6 text-sm`}>
              {lang === 'hi'
                ? 'प्रमाणित रत्न, रुद्राक्ष और आध्यात्मिक आभूषणों के लिए आपका विश्वसनीय स्थान।'
                : 'Your trusted destination for authentic gemstones, rudraksha, and spiritual jewelry.'}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: <i className="fa-brands fa-facebook"></i>, label: 'Facebook' },
                { icon: <i className="fa-brands fa-instagram"></i>, label: 'Instagram' },
                { icon: <i className="fa-brands fa-twitter"></i>, label: 'Twitter' },
                { icon: <i className="fa-brands fa-youtube"></i>, label: 'YouTube' },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className={`w-11 h-11 glass rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 active:scale-95 ${isDark ? 'hover:bg-amber-700/20 hover:text-amber-400' : 'hover:bg-[#083f1d]/10 hover:text-[#083f1d]'}`}
                  title={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className={`font-black text-lg mb-6 uppercase tracking-wide ${isDark ? 'text-amber-400' : 'text-[#083f1d]'}`}>{lang === 'hi' ? 'Shop करें' : 'Shop'}</h4>
            <ul className="space-y-3">
              {[
                { label: lang === 'hi' ? 'रत्न' : 'Gemstones', path: '/shop/gemstones' },
                { label: lang === 'hi' ? 'रुद्राक्ष' : 'Rudraksha', path: '/shop/rudraksha' },
                { label: lang === 'hi' ? 'ब्रेसलेट' : 'Bracelets', path: '/shop/bracelets' }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className={`${isDark ? 'text-slate-400 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium hover:translate-x-1 transform duration-300 inline-block`}>
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className={`font-black text-lg mb-6 uppercase tracking-wide ${isDark ? 'text-amber-400' : 'text-[#083f1d]'}`}>{lang === 'hi' ? 'जानकारी' : 'Information'}</h4>
            <ul className="space-y-3">
              {infoLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className={`${isDark ? 'text-slate-400 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium hover:translate-x-1 transform duration-300 inline-block`}>
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Astrology Links */}
          <div>
            <h4 className={`font-black text-lg mb-6 uppercase tracking-wide ${isDark ? 'text-amber-400' : 'text-[#083f1d]'}`}>{lang === 'hi' ? 'ज्योतिष' : 'Astrology'}</h4>
            <ul className="space-y-3">
              {astroLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className={`${isDark ? 'text-slate-400 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium hover:translate-x-1 transform duration-300 inline-block`}>
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Horoscope Links */}
           <div>
             <h4 className={`font-black text-lg mb-6 uppercase tracking-wide ${isDark ? 'text-amber-400' : 'text-[#083f1d]'}`}>{lang === 'hi' ? 'राशिफल' : 'Horoscope'}</h4>
             <ul className="space-y-3">
               {horoscopeLinks.map((item) => (
                 <li key={item.label}>
                   <Link to={item.path} className={`${isDark ? 'text-slate-400 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium hover:translate-x-1 transform duration-300 inline-block`}>
                     → {item.label}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>

          {/* Newsletter */}
          <div>
            <h4 className={`font-black text-lg mb-6 uppercase tracking-wide ${isDark ? 'text-amber-400' : 'text-[#083f1d]'}`}>{lang === 'hi' ? 'अपडेट्स' : 'Newsletter'}</h4>
            <p className={`${isDark ? 'text-slate-400' : 'text-[#0a5c2a]'} mb-6 text-sm`}>
              {lang === 'hi' ? 'विशेष ऑफर्स और रत्न टिप्स के लिए सब्सक्राइब करें' : 'Subscribe for exclusive offers and tips'}
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder={lang === 'hi' ? 'आपका ईमेल' : 'Your email'}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 text-sm ${isDark ? 'bg-gray-700/50 border border-amber-600/30 focus:border-amber-600 text-gray-200 placeholder-slate-600' : 'glass border border-[#083f1d]/20 focus:border-[#083f1d] text-[#083f1d] placeholder-[#0a5c2a]/50'}`}
              />
              <button className="w-full btn-cyan py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="text-pure-white">{lang === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t my-12 ${isDark ? 'border-amber-600/20' : 'border-[#083f1d]/15'}`}></div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <p className={`${isDark ? 'text-slate-500' : 'text-[#0a5c2a]'} text-sm`}>
              &copy; 2026 Fix My Future. {lang === 'hi' ? 'सभी अधिकार सुरक्षित हैं।' : 'All rights reserved.'}
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <Link to="/terms" className={`${isDark ? 'text-slate-500 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium`}>
              {lang === 'hi' ? 'शर्तें' : 'Terms'}
            </Link>
            <Link to="/policy" className={`${isDark ? 'text-slate-500 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium`}>
              {lang === 'hi' ? 'नीति' : 'Policy'}
            </Link>
            <Link to="/contact" className={`${isDark ? 'text-slate-500 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium`}>
              {lang === 'hi' ? 'संपर्क' : 'Contact'}
            </Link>
          </div>
          <div className={`${isDark ? 'text-slate-500' : 'text-[#0a5c2a]'} text-sm`}>
            {lang === 'hi' ? '🙏 धन्यवाद, आपका विश्वास ही हमारी सफलता है।' : '✨ Thank you for your trust and support.'}
          </div>
        </div>
      </div>
    </footer>
  );
}
