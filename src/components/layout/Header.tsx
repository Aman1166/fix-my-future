import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { useCart } from '../../store';

function CartBadge() {
  const { totalItems } = useCart();
  if (totalItems === 0) return null;
  return (
    <span className="absolute -top-1 -right-1 w-6 h-6 bg-amber-700 text-gray-800 text-[10px] font-black rounded-full flex items-center justify-center border-2 border-gray-900 shadow-xl neon-glow animate-pulse">
      {totalItems > 9 ? '9+' : totalItems}
    </span>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerItems = [
    { label: lang === 'hi' ? 'मुफ़्त कुंडली' : 'Free Kundli', path: '/kundli' },
    { label: lang === 'hi' ? 'कुंडली मिलान' : 'Kundli Matching', path: '/matching' },
    { label: lang === 'hi' ? 'संगतता' : 'Compatibility', path: '/compatibility' },
    { label: lang === 'hi' ? 'कैलकुलेटर' : 'Calculators', path: '/calculators' },
    {
      label: lang === 'hi' ? 'राशिफल' : 'Horoscopes',
      dropdown: [
        { label: lang === 'hi' ? 'आज का राशिफल' : 'Today\'s Horoscope', path: '/horoscope/today' },
        { label: lang === 'hi' ? 'दैनिक राशिफल' : 'Daily Horoscope', path: '/horoscope/daily' },
        { label: lang === 'hi' ? 'साप्ताहिक राशिफल' : 'Weekly Horoscope', path: '/horoscope/weekly' },
        { label: lang === 'hi' ? 'मासिक राशिफल' : 'Monthly Horoscope', path: '/horoscope/monthly' },
        { label: lang === 'hi' ? 'वार्षिक राशिफल' : 'Yearly Horoscope', path: '/horoscope/yearly' },
        { label: lang === 'hi' ? 'कल का राशिफल' : 'Tomorrow\'s Horoscope', path: '/horoscope/tomorrow' },
        { label: lang === 'hi' ? 'बीते कल का राशिफल' : 'Yesterday\'s Horoscope', path: '/horoscope/yesterday' },
        { label: lang === 'hi' ? 'चीनी राशिफल' : 'Chinese Horoscope', path: '/horoscope/chinese' },
      ]
    },
    { label: lang === 'hi' ? 'सर्वश्रेष्ठ ज्योतिषी' : 'Best Astrologers', path: '/astrologers' },
    { label: lang === 'hi' ? 'ज्योतिषी से चैट' : 'Chat with Astrologer', path: '/chat' },
    { label: lang === 'hi' ? 'ज्योतिषी से बात' : 'Talk to Astrologer', path: '/talk' },
    { label: lang === 'hi' ? 'ब्लॉग' : 'Blogs', path: '/blogs' },
  ];

  return (
    <header className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'glass-strong border-b border-amber-600/30 shadow-2xl' : 'glass-strong border-b border-gray-200/50 shadow-2xl') : (isDark ? 'bg-gray-900/40 backdrop-blur-md border-b border-white/5' : 'glass border-b border-gray-200/30')}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Home Button */}
          <Link
            to="/"
            className="flex items-center space-x-2 shrink-0 hover:scale-105 transition-transform duration-300 group"
          >
            <span className="text-2xl md:text-3xl animate-float neon-glow group-hover:scale-110 text-amber-500">
              <span className="material-symbols-outlined">diamond</span>
            </span>
            <span className="text-sm md:text-lg font-black gradient-text-strong whitespace-nowrap">{t.brandName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-wrap justify-center flex-1 px-4">
            {headerItems.map((item, index) => (
              item.dropdown ? (
                <div key={`${item.label}-${index}`} className="relative group">
                  <button className={`font-bold text-[10px] md:text-xs lg:text-sm tracking-wide uppercase transition-all duration-300 hover:scale-110 px-2 lg:px-3 py-2 rounded-lg whitespace-nowrap flex items-center space-x-1 ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/10' : 'text-white hover:text-amber-300 hover:bg-white/10'}`}>
                    <span>{item.label}</span>
                    <svg className="w-3 h-3 stroke-current fill-none transition-transform group-hover:rotate-180" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className={`absolute top-full left-0 mt-1 w-56 backdrop-blur-md border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${isDark ? 'bg-gray-800/95 border-amber-600/30' : 'bg-white/95 border-gray-200'}`}>
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        to={dropdownItem.path}
                        className={`w-full block text-left px-4 py-3 text-[10px] md:text-xs transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/10' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'}`}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={`${item.label}-${index}`}
                  to={item.path}
                  className={`font-bold text-[10px] md:text-xs lg:text-sm tracking-wide uppercase transition-all duration-300 hover:scale-110 px-2 lg:px-3 py-2 rounded-lg whitespace-nowrap group ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/10' : 'text-white hover:text-amber-300 hover:bg-white/10'}`}
                >
                  <span className="group-hover:inline-block opacity-0 group-hover:opacity-100 transition-opacity mr-1">→</span>
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* Search Button */}
            <button onClick={() => window.dispatchEvent(new CustomEvent('openSearch'))} className={`relative p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/15' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-100'}`}>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* User/Login Button */}
            <button onClick={() => window.dispatchEvent(new CustomEvent('openAuth'))} className={`relative p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/15' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-100'}`}>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Cart Button */}
            <button onClick={() => window.dispatchEvent(new CustomEvent('openCart', { detail: true }))} className={`relative p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/15' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-100'}`}>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <CartBadge />
            </button>

            <ThemeToggle />

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className={`hidden sm:flex items-center space-x-1.5 px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl font-bold text-xs lg:text-sm border transition-all duration-300 hover:scale-105 active:scale-95 ${isDark ? 'glass hover:glass-strong text-slate-300 hover:text-amber-400 border-amber-600/30 hover:border-amber-600/60' : 'bg-white hover:bg-amber-50 text-gray-700 hover:text-amber-600 border-gray-200 hover:border-amber-300'}`}
            >
              <span className="text-base"><span className="material-symbols-outlined">language</span></span>
              <span>{lang === 'en' ? 'HI' : 'EN'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden p-2.5 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/15' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-100'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className={`md:hidden py-4 border-t animate-fadeIn rounded-b-2xl max-h-96 overflow-y-auto ${isDark ? 'border-amber-600/30 bg-gray-800/95 backdrop-blur-sm' : 'border-gray-200 bg-white/95 backdrop-blur-sm'}`}>
            {headerItems.map((item, index) => (
              <button
                key={`${item.label}-${index}`}
                className={`block w-full text-left py-3 px-4 font-medium text-sm rounded-lg mx-2 transition-all duration-300 hover:scale-105 border-l-2 border-transparent ${isDark ? 'text-gray-200 hover:text-amber-400 hover:bg-amber-700/10 hover:border-l-cyan-400' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50 hover:border-l-amber-500'}`}
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
