import { useState, useEffect, useContext } from 'react';
import {
  translations,
  astrologersHi
} from './translations';
import HeroSection from './components/HeroSection';
import AIChat from './components/AIChat';
import AuthModal from './components/AuthModal';
import SearchOverlay from './components/SearchOverlay';
import CartDrawer from './components/CartDrawer';

import InformationPage from './components/InformationPage';
import FreeKundli from './components/FreeKundli';
import KundliMatching from './components/KundliMatching';
import Compatibility from './components/Compatibility';
import Calculators from './components/Calculators';
import TodaysHoroscope from './components/TodaysHoroscope';
import DailyHoroscope from './components/DailyHoroscope';
import WeeklyHoroscope from './components/WeeklyHoroscope';
import MonthlyHoroscope from './components/MonthlyHoroscope';
import YearlyHoroscope from './components/YearlyHoroscope';
import TomorrowHoroscope from './components/TomorrowHoroscope';
import YesterdayHoroscope from './components/YesterdayHoroscope';
import ChineseHoroscope from './components/ChineseHoroscope';
import BestAstrologers from './components/BestAstrologers';
import ChatWithAstrologer from './components/ChatWithAstrologer';
import TalkToAstrologer from './components/TalkToAstrologer';
import ThemeToggle from './components/ThemeToggle';
import ProductCategoryPage, { Product as CategoryProduct } from './components/ProductCategoryPage';
import ShopNowPage from './components/ShopNowPage';
import { CartProvider, useCart } from './store';
import {
  TestimonialsSlider,
  StatsSection,
  MarqueeBanner,
  FloatingElements,
  ScrollReveal
} from './components/Animations';

// Create Language Context
// Re-export contexts from separate files to fix HMR issues
export { LanguageContext } from './contexts/LanguageContext';
export { ThemeContext } from './contexts/ThemeContext';

import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';

// Types
export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category?: string;
  carat?: string;
  sign?: string;
}

interface Astrologer {
  id: number;
  name: string;
  expertise: string[];
  experience: number;
  price: number;
  rating: number;
  consultations: number;
  languages: string[];
  online: boolean;
  busy?: boolean;
  image: string;
}

// Product Data - Using local images from public/product/
const products: Product[] = [];

// Category-specific product data
const gemstoneProducts: CategoryProduct[] = [
  { id: 201, name: 'Blue Sapphire (Neelam)', price: '₹12,999', image: '/product/blue-sapphire.jpg', category: 'gemstones', carat: '5.2 Ct' },
  { id: 202, name: 'Emerald (Panna)', price: '₹15,999', image: '/product/emerald.jpg', category: 'gemstones', carat: '4.8 Ct' },
  { id: 203, name: 'Ruby (Manik)', price: '₹18,999', image: '/product/ruby.jpg', category: 'gemstones', carat: '6.1 Ct' },
  { id: 204, name: 'Yellow Sapphire (Pukhraj)', price: '₹14,999', image: '/product/yellow-sapphire.jpg', category: 'gemstones', carat: '5.5 Ct' },
  { id: 205, name: 'Diamond Ring', price: '₹25,999', image: '/product/jewelry-ring.jpg', category: 'gemstones', carat: '1.2 Ct' },
  { id: 206, name: 'Premium Gemstone Set', price: '₹35,999', image: '/product/a9.webp', category: 'gemstones' },
];

const rudrakshaProducts: CategoryProduct[] = [
  { id: 301, name: '5 Mukhi Rudraksha', price: '₹1,499', image: '/product/rudraksha.jpg', category: 'rudraksha' },
  { id: 302, name: '7 Mukhi Rudraksha', price: '₹2,499', image: '/product/a3.avif', category: 'rudraksha' },
  { id: 303, name: '9 Mukhi Rudraksha', price: '₹3,999', image: '/product/a4.webp', category: 'rudraksha' },
  { id: 304, name: '11 Mukhi Rudraksha', price: '₹5,999', image: '/product/a5.webp', category: 'rudraksha' },
  { id: 305, name: 'Gauri Shankar Rudraksha', price: '₹4,499', image: '/product/a6.webp', category: 'rudraksha' },
  { id: 306, name: 'Mala (108 Beads)', price: '₹2,999', image: '/product/a7.webp', category: 'rudraksha' },
];

const braceletProducts: CategoryProduct[] = [
  { id: 401, name: 'Dhan Yog Bracelet', price: '₹1,999', image: '/product/a1.jpg', category: 'bracelets' },
  { id: 402, name: 'Rudraksha Bracelet', price: '₹1,499', image: '/product/a2.jpg', category: 'bracelets' },
  { id: 403, name: 'Crystal Bracelet', price: '₹999', image: '/product/a8.webp', category: 'bracelets' },
  { id: 404, name: 'Gold Plated Bracelet', price: '₹2,499', image: '/product/a3.avif', category: 'bracelets' },
  { id: 405, name: 'Silver Bracelet', price: '₹1,799', image: '/product/a4.webp', category: 'bracelets' },
  { id: 406, name: 'Premium Bracelet Set', price: '₹3,999', image: '/product/a5.webp', category: 'bracelets' },
];







// CTA Buttons Component
function CTAButtons() {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  const ctaCards = [
    {
      icon: <i className="fa-regular fa-comment-dots"></i>,
      title: lang === 'hi' ? 'ज्योतिषी से चैट' : 'Chat with Astrologer',
      subtitle: lang === 'hi' ? 'व्यक्तिगत मार्गदर्शन प्राप्त करें' : 'Get personalized guidance',
      action: () => (window as any).__chat?.(),
      glow: 'hover:shadow-blue-500/20'
    },
    {
      icon: <i className="fa-solid fa-phone"></i>,
      title: lang === 'hi' ? 'ज्योतिषी से बात करें' : 'Talk to Astrologer',
      subtitle: lang === 'hi' ? 'फोन पर विस्तृत परामर्श' : 'Detailed consultation over call',
      action: () => (window as any).__talk?.(),
      glow: 'hover:shadow-purple-500/20'
    },
    {
      icon: <i className="fa-solid fa-om"></i>,
      title: lang === 'hi' ? 'पूजा बुक करें' : 'Book A Pooja',
      subtitle: lang === 'hi' ? 'घर बैठे पूजा करवाएं' : 'Book pooja from home',
      action: () => (window as any).__pooja?.(),
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
              onClick={card.action}
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

// Cart Badge Component
function CartBadge() {
  const { totalItems } = useCart();
  if (totalItems === 0) return null;
  return (
    <span className="absolute -top-1 -right-1 w-6 h-6 bg-amber-700 text-gray-800 text-[10px] font-black rounded-full flex items-center justify-center border-2 border-gray-900 shadow-xl neon-glow animate-pulse">
      {totalItems > 9 ? '9+' : totalItems}
    </span>
  );
}

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerItems = [
    { label: lang === 'hi' ? 'मुफ़्त कुंडली' : 'Free Kundli', action: () => (window as any).__freeKundli?.() },
    { label: lang === 'hi' ? 'कुंडली मिलान' : 'Kundli Matching', action: () => (window as any).__kundliMatching?.() },
    { label: lang === 'hi' ? 'संगतता' : 'Compatibility', action: () => (window as any).__compatibility?.() },
    { label: lang === 'hi' ? 'कैलकुलेटर' : 'Calculators', action: () => (window as any).__calculators?.() },
    {
      label: lang === 'hi' ? 'राशिफल' : 'Horoscopes',
      dropdown: [
        { label: lang === 'hi' ? 'आज का राशिफल' : 'Today\'s Horoscope', action: () => (window as any).__horoscopesToday?.() },
        { label: lang === 'hi' ? 'दैनिक राशिफल' : 'Daily Horoscope', action: () => (window as any).__horoscopesDaily?.() },
        { label: lang === 'hi' ? 'साप्ताहिक राशिफल' : 'Weekly Horoscope', action: () => (window as any).__horoscopesWeekly?.() },
        { label: lang === 'hi' ? 'मासिक राशिफल' : 'Monthly Horoscope', action: () => (window as any).__horoscopesMonthly?.() },
        { label: lang === 'hi' ? 'वार्षिक राशिफल' : 'Yearly Horoscope', action: () => (window as any).__horoscopesYearly?.() },
        { label: lang === 'hi' ? 'कल का राशिफल' : 'Tomorrow\'s Horoscope', action: () => (window as any).__horoscopesTomorrow?.() },
        { label: lang === 'hi' ? 'कल का राशिफल' : 'Yesterday\'s Horoscope', action: () => (window as any).__horoscopesYesterday?.() },
        { label: lang === 'hi' ? 'चीनी राशिफल' : 'Chinese Horoscope', action: () => (window as any).__horoscopesChinese?.() },
      ]
    },
    { label: lang === 'hi' ? 'सर्वश्रेष्ठ ज्योतिषी' : 'Best Astrologers', action: () => (window as any).__astrologers?.() },
    { label: lang === 'hi' ? 'ज्योतिषी से चैट करें' : 'Chat with Astrologer', action: () => (window as any).__chat?.() },
    { label: lang === 'hi' ? 'ज्योतिषी से बात करें' : 'Talk to Astrologer', action: () => (window as any).__talk?.() },
    { label: lang === 'hi' ? 'ब्लॉग्स' : 'Blogs', action: () => (window as any).__blogs?.() },
  ];

  return (
    <header className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'glass-strong border-b border-amber-600/30 shadow-2xl' : 'glass-strong border-b border-gray-200/50 shadow-2xl') : (isDark ? 'bg-gray-900/40 backdrop-blur-md border-b border-white/5' : 'glass border-b border-gray-200/30')}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Home Button */}
          <button
            onClick={() => (window as any).__goHome?.()}
            className="flex items-center space-x-2 shrink-0 hover:scale-105 transition-transform duration-300 group"
          >
            <span className="text-2xl md:text-3xl animate-float neon-glow group-hover:scale-110 text-amber-500"><i className="fa-solid fa-gem"></i></span>
            <span className="text-sm md:text-lg font-black gradient-text-strong whitespace-nowrap">{t.brandName}</span>
          </button>

          {/* Desktop Navigation - Hidden on small screens */}
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
                      <button
                        key={dropdownIndex}
                        onClick={dropdownItem.action}
                        className={`w-full text-left px-4 py-3 text-[10px] md:text-xs transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/10' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'}`}
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={`${item.label}-${index}`}
                  onClick={item.action}
                  className={`font-bold text-[10px] md:text-xs lg:text-sm tracking-wide uppercase transition-all duration-300 hover:scale-110 px-2 lg:px-3 py-2 rounded-lg whitespace-nowrap group ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/10' : 'text-white hover:text-amber-300 hover:bg-white/10'}`}
                >
                  <span className="group-hover:inline-block opacity-0 group-hover:opacity-100 transition-opacity mr-1">→</span>
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* Search Button */}
            <button onClick={() => (window as any).__setSearch(true)} className={`relative p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/15' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-100'}`}>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* User/Login Button */}
            <button onClick={() => (window as any).__setAuth(true)} className={`relative p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/15' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-100'}`}>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Cart Button with Badge */}
            <button onClick={() => (window as any).__setCart(true)} className={`relative p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/15' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-100'}`}>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <CartBadge />
            </button>

            <ThemeToggle />

            {/* Language Toggle Button */}
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className={`hidden sm:flex items-center space-x-1.5 px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl font-bold text-xs lg:text-sm border transition-all duration-300 hover:scale-105 active:scale-95 ${isDark ? 'glass hover:glass-strong text-slate-300 hover:text-amber-400 border-amber-600/30 hover:border-amber-600/60' : 'bg-white hover:bg-amber-50 text-gray-700 hover:text-amber-600 border-gray-200 hover:border-amber-300'}`}
            >
              <span className="text-base"><i className="fa-solid fa-globe"></i></span>
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
                  if (item.action) {
                    item.action();
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







// Video Section Component
function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(0);
  const { t, lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  const videos = [
    {
      id: 0,
      title: lang === 'hi' ? 'वैदिक प्राण प्रतिष्ठा प्रक्रिया' : 'Vedic Energization Process (प्राण प्रतिष्ठा)',
      description: lang === 'hi'
        ? 'हमारे विशेषज्ञ आचार्यों को रत्नों को आपके पास भेजने से पहले प्राचीन वैदिक मंत्रों और अनुष्ठानों के माध्यम से अभिमंत्रित करते हुए देखें, जिससे आपके जीवन पर अधिकतम सकारात्मक प्रभाव पड़े।'
        : 'Watch our expert acharyas energize the gemstones through ancient Vedic mantras and rituals before they are shipped to you, ensuring maximum positive impact on your life.',
      video: '/videos/_8772257.mp4',
      duration: '2:15',
      thumbnail: '/product/rudraksha.jpg',
      type: lang === 'hi' ? 'आध्यात्मिक' : 'Spiritual'
    },
    {
      id: 1,
      title: lang === 'hi' ? 'रत्न कटिंग और शिल्प कौशल' : 'The Art of Perfect Gemstone Cutting',
      description: lang === 'hi'
        ? 'देखें कि कैसे हमारे शिल्पकार और विश्व स्तरीय ज्वैलर्स पत्थरों को पूर्ण सटीकता, जुनून और कालातीत तकनीकों के साथ तराश कर उनकी प्राकृतिक चमक को बढ़ाते हैं।'
        : 'See how our master craftsmen and world-class jewellers bring rough stones to life with absolute precision, passion, and timeless techniques to enhance their natural brilliance.',
      video: '/videos/_8842171.mp4',
      duration: '3:40',
      thumbnail: '/product/emerald.jpg',
      type: lang === 'hi' ? 'शिल्प कौशल' : 'Craftsmanship'
    },
    {
      id: 2,
      title: lang === 'hi' ? '100% पारदर्शिता: लैब सर्टिफिकेट' : '100% Transparency: Lab Certification',
      description: lang === 'hi'
        ? 'हमारे कड़े गुणवत्ता नियंत्रण और स्वतंत्र लैब प्रमाणन प्रक्रिया के बारे में जानें। सरकार द्वारा अनुमोदित शीर्ष प्रयोगशालाओं में हर रत्न की शुद्धता जांची जाती है।'
        : 'Learn about our strict quality control and independent lab certification process. Every gemstone is verified for its 4Cs and astrological viability in top government-approved labs.',
      video: '/videos/_8889707.mp4',
      duration: '1:50',
      thumbnail: '/product/yellow-sapphire.jpg',
      type: lang === 'hi' ? 'क्वालिटी चेक' : 'Quality Check'
    }
  ];

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 gradient-text-strong">{t.sections.video.title}</h2>
          <p className="text-xl text-amber-600 font-medium">Watch, Feel & Believe</p>
          <p className="text-amber-400 font-medium">Experience the Journey of Your Gemstone</p>
          <div className="w-24 h-1 bg-amber-700 mx-auto mt-6 rounded-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Video Player */}
          <div className="lg:col-span-2 glass-strong rounded-2xl overflow-hidden shadow-2xl border border-amber-600/20 animate-fadeIn">
            <div className="relative aspect-video bg-black group">
              {/* Real Video Element */}
              <video
                key={activeVideo}
                className="w-full h-full object-cover"
                poster={videos[activeVideo].thumbnail}
                controls
                preload="metadata"
              >
                <source src={videos[activeVideo].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold text-amber-600 flex items-center space-x-1 border border-amber-600/30">
                <span className="w-2 h-2 rounded-full bg-amber-700 animate-ping"></span>
                <span>FIX MY FUTURE EXCLUSIVE</span>
              </div>
            </div>

            <div className="p-6 bg-linear-to-b from-transparent to-gray-800/50">
              <span className={`text-sm font-bold tracking-wider uppercase ${isDark ? 'text-amber-600' : 'bg-emerald-700 text-white px-3 py-1 rounded-full'}`}>{videos[activeVideo].type}</span>
              <h3 className="text-2xl font-bold mt-1 mb-3 text-gray-100">{videos[activeVideo].title}</h3>
              <p className="text-slate-300 leading-relaxed">{videos[activeVideo].description}</p>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-lg mb-2 text-gray-200 px-1 flex items-center justify-between">
              <span>Up Next</span>
              <span className="text-xs font-normal text-slate-400">{videos.length} Videos Available</span>
            </h4>

            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(index)}
                className={`w-full flex items-center p-3 rounded-xl transition-all border text-left hover-3d ${index === activeVideo ? 'glass-strong border-amber-600 shadow-lg shadow-amber-600-500/10' : 'glass border-amber-600/20 hover:border-amber-600/40'}`}
              >
                <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${index === activeVideo ? 'bg-amber-700' : 'bg-slate-400/50 backdrop-blur-sm'}`}>
                      <svg className={`w-3 h-3 fill-current ${index === activeVideo ? 'text-white' : 'text-gray-200'}`} viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-1 glass px-1.5 py-0.5 rounded text-[10px] font-mono font-medium text-amber-400">
                    {video.duration}
                  </span>
                </div>

                <div className="ml-4 flex-1">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${isDark ? (index === activeVideo ? 'bg-amber-700 text-white' : 'bg-slate-700 text-slate-300') : 'bg-emerald-100 text-emerald-800 border border-emerald-200'}`}>
                    {video.type}
                  </span>
                  <h4 className={`font-semibold text-sm mt-1 line-clamp-1 ${index === activeVideo ? 'text-amber-600' : 'text-gray-200'}`}>
                    {video.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </button>
            ))}

            <div className="mt-4 p-4 rounded-xl glass border border-amber-600/20 text-center">
              <p className="text-sm text-slate-300 mb-3">Want a free live consultation or see a gemstone live over video call?</p>
              <button className="w-full btn-cyan text-gray-800 font-semibold py-2.5 px-4 rounded-lg text-sm transition-all duration-300 shadow-lg hover:shadow-amber-600-500/30">
                📲 Book Video Call Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Astrologer Section Component
function AstrologerSection() {
  const { t, lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [selectedAstro, setSelectedAstro] = useState<Astrologer | null>(null);
  const [walletBalance, setWalletBalance] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState(100);
  const [activeTab, setActiveTab] = useState('all');

  const getLocalizedAstrologers = () => {
    const base: Astrologer[] = [
      {
        id: 1,
        name: 'Acharya Rajendra Ji',
        expertise: ['Vedic Astrology', 'Vastu Shastra', 'Gemology'],
        experience: 15,
        price: 35,
        rating: 4.9,
        consultations: 12450,
        languages: ['Hindi', 'English'],
        online: true,
        image: 'https://images.unsplash.com/photo-1542343633-ce3256f2183e?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 2,
        name: 'Astro Megha',
        expertise: ['Tarot Card Reading', 'Numerology', 'Love Expert'],
        experience: 8,
        price: 25,
        rating: 4.7,
        consultations: 8900,
        languages: ['Hindi', 'English', 'Punjabi'],
        online: true,
        busy: true,
        image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 3,
        name: 'Swami Shivanand',
        expertise: ['Palmistry', 'Kundali Matching', 'Vedic'],
        experience: 22,
        price: 50,
        rating: 4.95,
        consultations: 25600,
        languages: ['Hindi', 'Sanskrit'],
        online: true,
        image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 4,
        name: 'Dr. Neha Sharma',
        expertise: ['KP Astrology', 'Nadi Astrology', 'Career Advice'],
        experience: 12,
        price: 30,
        rating: 4.8,
        consultations: 11200,
        languages: ['Hindi', 'English'],
        online: true,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 5,
        name: 'Acharya Manish',
        expertise: ['Prashna Kundali', 'Financial Astrology', 'Lal Kitab'],
        experience: 10,
        price: 28,
        rating: 4.6,
        consultations: 7400,
        languages: ['Hindi', 'Gujarati'],
        online: false,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 6,
        name: 'Pandit Suresh Joshi',
        expertise: ['Vedic Astrology', 'Gemstone Healing', 'Vastu Remedies'],
        experience: 18,
        price: 40,
        rating: 4.85,
        consultations: 15800,
        languages: ['Hindi', 'English', 'Marathi'],
        online: true,
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
      }
    ];

    if (lang === 'en') return base;
    
    return base.map(astro => {
      const hiAstro = astrologersHi.find(h => h.id === astro.id);
      return hiAstro ? { 
        ...astro, 
        name: hiAstro.name, 
        expertise: hiAstro.expertise, 
        languages: hiAstro.languages 
      } : astro;
    });
  };

  const astrologers = getLocalizedAstrologers();

  const handleConsultation = (astro: Astrologer) => {
    setSelectedAstro(astro);
    setShowPaymentModal(true);
  };

  const filteredAstrologers = astrologers.filter(astro => {
    if (activeTab === 'all') return true;
    if (activeTab === 'vedic') return astro.expertise.some(e => e.includes('Vedic') || e.includes('Kundali'));
    if (activeTab === 'tarot') return astro.expertise.some(e => e.includes('Tarot') || e.includes('Numerology'));
    if (activeTab === 'online') return astro.online && !astro.busy;
    return true;
  });

  const labels = lang === 'hi' 
    ? { all: 'सभी ज्योतिषी', vedic: 'वैदिक और कुंडली', tarot: 'टैरो और अंक ज्योतिष', online: 'अभी उपलब्ध' }
    : { all: 'All Astrologers', vedic: 'Vedic & Kundali', tarot: 'Tarot & Numerology', online: 'Available Now' };

  return (
    <section id="astrologers" className="py-20 bg-gray-800 text-white relative overflow-hidden">
      {/* Astrological Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-gray-950/40 via-gray-950 to-gray-900 z-0"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent"></div>
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[30px_30px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-amber-500 text-xs animate-pulse">✦</span>
            <span className="text-amber-500 tracking-[0.3em] font-extrabold text-[10px] uppercase">
              {lang === 'hi' ? 'दैवीय मार्गदर्शन' : 'DIVINE GUIDANCE'}
            </span>
            <span className="text-amber-500 text-xs animate-pulse">✦</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {t.sections.astrologers.title}
          </h2>
          <p className="text-sm md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            {t.sections.astrologers.subtitle}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs font-bold text-gray-400">
            <span className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-ping"></span>
              {t.astroMeta.onlineText}
            </span>
            <span className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
              <span className="mr-1.5">🔒</span> {t.astroMeta.privateText}
            </span>
            <span className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
              <span className="mr-1.5">💳</span> {t.astroMeta.safeText}
            </span>
          </div>
        </div>

        {/* Filters / Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: labels.all },
            { id: 'vedic', label: labels.vedic },
            { id: 'tarot', label: labels.tarot },
            { id: 'online', label: labels.online }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all border shadow-lg ${activeTab === tab.id ? 'bg-linear-to-r from-amber-500 to-amber-600-500 text-gray-800 font-black border-amber-400 shadow-amber-500/20' : 'bg-gray-800/60 backdrop-blur-sm border-gray-800 text-gray-300 hover:bg-gray-700 hover:border-gray-700'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Wallet Balance Display - Glassmorphic */}
        <div className={`max-w-4xl mx-auto p-5 rounded-2xl shadow-2xl mb-12 flex flex-wrap items-center justify-between border relative group overflow-hidden ${isDark ? 'bg-linear-to-r from-gray-800/80 to-gray-950/50 backdrop-blur-md border-white/10' : 'bg-white border-gray-200'}`}>
          <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 to-transparent rounded-2xl pointer-events-none"></div>
          <div className="flex items-center space-x-4 mb-3 sm:mb-0 relative z-10">
            <div className="w-14 h-14 bg-linear-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-3xl shadow-xl shadow-amber-500/20 group-hover:scale-105 transition-transform text-gray-800">
              <i className="fa-solid fa-wallet"></i>
            </div>
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-amber-500' : 'text-emerald-700'}`}>{t.astroMeta.walletText}</p>
              <p className={`text-3xl font-black ${isDark ? 'text-white' : 'text-emerald-900'}`}>₹{walletBalance}</p>
            </div>
          </div>
          <button 
            onClick={() => { setSelectedAstro(null); setShowPaymentModal(true); }}
            className={`relative z-10 px-5 py-3 bg-linear-to-r from-amber-500 to-amber-600 text-white text-xs font-black uppercase rounded-xl shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 transition-all flex items-center space-x-2 group active:scale-95`}
          >
            <span className="text-lg"><i className="fa-solid fa-plus"></i></span>
            <span>{t.astroMeta.rechargeText}</span>
          </button>
        </div>

        {/* Astrologers Grid - Glass Tarot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredAstrologers.map((astro) => (
            <div 
              key={astro.id} 
              className={`bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border overflow-hidden flex flex-col group relative ${astro.online && !astro.busy ? 'border-green-500/20 hover:border-green-500/40' : 'border-gray-800 hover:border-gray-700'}`}
            >
              {/* Card background glowing gradient */}
              <div className={`absolute inset-0 bg-linear-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 ${astro.online && !astro.busy ? 'from-green-500/5 to-transparent' : 'from-amber-500/5 to-transparent'}`}></div>

              {/* Top Section */}
              <div className="p-6 flex items-start space-x-4 flex-1 relative z-10">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-500 to-amber-600-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity"></div>
                  <img src={astro.image} alt={astro.name} className="relative w-24 h-24 rounded-2xl object-cover border-2 border-white/10 shadow-lg group-hover:scale-105 transition-transform duration-300" />
                  
                  {astro.online && (
                    <span className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-4 border-gray-950 flex items-center justify-center ${astro.busy ? 'bg-amber-600' : 'bg-green-500'}`}>
                      <span className={`w-2 h-2 rounded-full bg-white ${!astro.busy && 'animate-ping'}`}></span>
                    </span>
                  )}
                  
                  <div className="absolute top-0 left-0 bg-linear-to-r from-amber-500 to-amber-600-500 text-gray-800 text-[10px] font-black px-2 py-0.5 rounded-br-lg rounded-tl-xl shadow-lg">
                    ★ {astro.rating}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-black text-white text-lg tracking-tight truncate group-hover:text-amber-500 transition-colors">{astro.name}</h3>
                  </div>
                  
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${astro.busy ? 'bg-amber-600/20 text-orange-400 border border-orange-500/20' : 'bg-green-500/20 text-green-400 border border-green-500/20'}`}>
                    {astro.busy ? t.astroMeta.busyText : t.astroMeta.onlineBadge}
                  </span>

                  <p className="text-xs text-gray-400 font-medium mt-2 line-clamp-2 h-8 leading-snug">{astro.expertise.join(', ')}</p>
                  
                  <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-4 text-[11px] text-gray-300 border-t border-white/5 pt-3">
                    <div className="flex items-center font-medium">
                      <span className="mr-1.5 opacity-80 text-sm">🎓</span> <span><strong>{astro.experience}</strong> {t.astroMeta.exp}</span>
                    </div>
                    <div className="flex items-center font-medium">
                      <span className="mr-1.5 opacity-80 text-sm">💬</span> <span><strong>{astro.consultations.toLocaleString()}</strong> {t.astroMeta.consults}</span>
                    </div>
                    <div className="flex items-center col-span-2 font-medium">
                      <span className="mr-1.5 opacity-80 text-sm">🗣️</span> <span className="truncate">{astro.languages.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Price & Call Section */}
              <div className="bg-gray-800/80 border-t border-white/5 p-4 flex items-center justify-between relative z-10 backdrop-blur-sm">
                <div>
                  <span className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-amber-600-400 tracking-tight">₹{astro.price}</span>
                  <span className="text-gray-400 text-[10px] font-bold">/{lang === 'hi' ? 'मिनट' : 'min'}</span>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    disabled={!astro.online || astro.busy}
                    onClick={() => handleConsultation(astro)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg flex items-center space-x-1 transition-all ${!astro.online ? 'bg-gray-700 text-stone-600 cursor-not-allowed border border-gray-700' : astro.busy ? 'bg-amber-600/20 text-orange-400 border border-orange-500/30 hover:bg-amber-600/30' : 'bg-gray-700 border border-gray-700 text-white hover:bg-slate-700'}`}
                  >
                    <span>💬</span>
                    <span>{t.astroMeta.chatBtn}</span>
                  </button>
                  
                  <button 
                    disabled={!astro.online}
                    onClick={() => handleConsultation(astro)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-xl flex items-center space-x-1.5 transition-all active:scale-95 ${!astro.online ? 'bg-gray-700 text-stone-600 cursor-not-allowed border border-gray-700' : astro.busy ? 'bg-indigo-900 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-800 shadow-indigo-500/10' : 'bg-linear-to-r from-amber-500 to-amber-600-500 text-gray-800 hover:from-amber-400 hover:to-amber-600-400 shadow-amber-500/10 hover:shadow-amber-500/30'}`}
                  >
                    <span>📞</span>
                    <span>{astro.busy ? (lang === 'hi' ? 'कतार' : 'Queue') : t.astroMeta.callBtn}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recharge / Consultation Popup Modal - Premium Glass Dark */}
        {showPaymentModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <div className={`fixed inset-0 ${isDark ? 'bg-gray-800/80' : 'bg-gray-900/40'} backdrop-blur-sm`} onClick={() => setShowPaymentModal(false)}></div>
            
            <div className={`relative w-full max-w-md rounded-2xl shadow-2xl border overflow-hidden animate-fadeIn ${isDark ? 'bg-gray-800 border-white/10 text-white' : 'bg-white border-gray-100 text-gray-900'}`}>
              {/* Modal Header */}
              <div className={`p-5 text-center relative border-b ${isDark ? 'bg-linear-to-r from-gray-800 via-gray-950 to-gray-900 border-white/10' : 'bg-gray-50 border-gray-100'}`}>
                <button 
                  onClick={() => setShowPaymentModal(false)}
                  className={`absolute right-4 top-4 transition-colors text-xl font-bold ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}
                >
                  ✕
                </button>
                <div className="text-amber-600 text-xs font-bold tracking-[0.2em] mb-1">✦ ASTRO CONSULTATION ✦</div>
                <h3 className={`text-xl font-black ${isDark ? 'bg-clip-text text-transparent bg-linear-to-r from-white via-stone-200 to-amber-200' : 'text-emerald-900'}`}>
                  {selectedAstro ? t.astroMeta.initConsult : t.astroMeta.rechargeTitle}
                </h3>
                <p className="text-[10px] text-gray-400 mt-1.5 flex items-center justify-center"><span className="text-green-500 mr-1">🔒</span> {t.astroMeta.secureConnection}</p>
              </div>

              {selectedAstro && (
                <div className={`p-4 border-b flex items-center space-x-4 ${isDark ? 'bg-gray-800/50 border-white/5' : 'bg-white border-gray-100'}`}>
                  <img src={selectedAstro.image} alt={selectedAstro.name} className="w-14 h-14 rounded-full object-cover border-2 border-amber-500/50 shadow-lg" />
                  <div>
                    <h4 className={`font-black text-base tracking-tight ${isDark ? 'text-white' : 'text-emerald-900'}`}>{selectedAstro.name}</h4>
                    <p className="text-xs text-amber-600 font-extrabold flex items-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 animate-pulse"></span>
                      {lang === 'hi' ? 'परामर्श शुल्क' : 'Session Charges'}: ₹{selectedAstro.price}/{lang === 'hi' ? 'मिनट' : 'min'}
                    </p>
                  </div>
                </div>
              )}

              {/* Modal Body */}
              <div className="p-6">
                {selectedAstro && walletBalance >= selectedAstro.price ? (
                  /* User Has Balance */
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl animate-float">
                      📞
                    </div>
                    <h4 className={`text-xl font-black mb-2 tracking-tight ${isDark ? 'text-white' : 'text-emerald-900'}`}>{t.astroMeta.connecting} {selectedAstro.name}...</h4>
                    <p className="text-xs text-gray-400 mb-6 leading-relaxed px-4">{t.astroMeta.sufficientBalanceDesc} {t.astroMeta.estTalkTime} <strong className="text-amber-600 bg-amber-400/10 px-1.5 py-0.5 rounded ml-1">{Math.floor(walletBalance / selectedAstro.price)} {t.astroMeta.minutes}</strong>.</p>
                    
                    <div className={`p-4 rounded-xl border text-left mb-6 ${isDark ? 'bg-gray-800/60 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-gray-400 font-medium">{lang === 'hi' ? 'वॉलेट बैलेंस' : 'Wallet Balance'}:</span>
                        <span className={`font-black ${isDark ? 'text-white' : 'text-emerald-900'}`}>₹{walletBalance}</span>
                      </div>
                      <div className={`flex justify-between text-xs pt-2 border-t ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
                        <span className="text-gray-400 font-medium">{lang === 'hi' ? 'ज्योतिषी शुल्क' : 'Astrologer Charge'}:</span>
                        <span className="font-black text-red-500">₹{selectedAstro.price}/{lang === 'hi' ? 'मिनट' : 'min'}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        const mins = 5;
                        setWalletBalance(prev => prev - selectedAstro.price * mins); 
                        alert(lang === 'hi' 
                          ? `${selectedAstro.name} के साथ परामर्श समाप्त हुआ! ${mins} मिनट बात हुई। ₹${selectedAstro.price * mins} वॉलेट से काट लिए गए।` 
                          : `Consultation with ${selectedAstro.name} finished! ${mins} minutes spoken. ₹${selectedAstro.price * mins} deducted.`
                        );
                        setShowPaymentModal(false);
                      }}
                      className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black py-3.5 rounded-xl shadow-lg shadow-green-500/20 active:scale-98 transition-all flex items-center justify-center space-x-2 text-sm tracking-widest uppercase"
                    >
                      <span>📞 {t.astroMeta.startCall}</span>
                    </button>
                  </div>
                ) : (
                  /* Insufficient Balance / Recharge Screen */
                  <div>
                    {selectedAstro && (
                      <div className="flex items-center space-x-3 text-red-400 bg-red-950/40 p-3.5 rounded-xl mb-6 border border-red-500/20 animate-pulse">
                        <span className="text-xl">⚠️</span>
                        <p className="text-xs font-bold leading-snug">{t.astroMeta.insufficientBalance}</p>
                      </div>
                    )}

                    <p className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-3">{t.astroMeta.selectAmount}</p>
                    
                    {/* Recharge Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {[100, 250, 500, 1000, 2000, 5000].map((amt) => (
                        <button
                          key={amt}
                          onClick={() => setRechargeAmount(amt)}
                          className={`p-3 rounded-xl border-2 font-black text-base transition-all text-center flex flex-col items-center justify-center relative ${rechargeAmount === amt ? 'border-amber-600 bg-amber-600/10 text-amber-600 shadow-xl shadow-amber-600/10' : (isDark ? 'border-white/10 text-gray-400 bg-gray-800/40 hover:border-white/20' : 'border-gray-200 text-gray-500 bg-gray-50 hover:border-amber-400')}`}
                        >
                          <span>₹{amt}</span>
                          {amt >= 500 && (
                            <span className="text-[8px] bg-linear-to-r from-green-500 to-emerald-500 text-white px-1.5 rounded-full mt-1.5 font-black uppercase tracking-wider scale-90">
                              +100% OFF
                            </span>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Offer Banner - Premium Glow */}
                    <div className={`p-4 rounded-xl mb-6 flex items-start space-x-3 shadow-xl relative overflow-hidden border ${isDark ? 'bg-linear-to-r from-green-950/50 to-gray-950/30 border-green-500/20 text-green-400 shadow-green-500/5' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
                      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent`}></div>
                      <span className="text-2xl animate-float shrink-0"><i className="fa-solid fa-gift"></i></span>
                      <p className={`text-xs font-semibold leading-relaxed ${isDark ? 'text-stone-200' : 'text-emerald-800'}`}>
                        {t.astroMeta.specialOffer}
                      </p>
                    </div>

                    <div className={`p-4 rounded-xl border text-xs mb-6 ${isDark ? 'bg-gray-800/60 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                      <div className="flex justify-between font-medium mb-2">
                        <span className="text-gray-400">{lang === 'hi' ? 'रिचार्ज राशि' : 'Recharge Amount'}:</span>
                        <span className={`font-bold ${isDark ? 'text-white' : 'text-emerald-900'}`}>₹{rechargeAmount}</span>
                      </div>
                      <div className="flex justify-between font-medium mb-2">
                        <span className="text-gray-400">GST (18% {lang === 'hi' ? 'शामिल' : 'included'}):</span>
                        <span className="text-stone-500">₹0.00</span>
                      </div>
                      {rechargeAmount >= 500 && (
                        <div className={`flex justify-between font-bold text-green-600 mb-2 pt-2 border-t ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
                          <span>{lang === 'hi' ? 'विशेष बोनस' : 'Special Bonus'}:</span>
                          <span>+ ₹{rechargeAmount}</span>
                        </div>
                      )}
                      <div className={`border-t my-3 pt-3 flex justify-between font-black text-base ${isDark ? 'border-white/10 text-white' : 'border-gray-200 text-emerald-900'}`}>
                        <span>{t.astroMeta.payable}:</span>
                        <span className={`text-xl ${isDark ? 'bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-amber-600-400' : 'text-amber-700'}`}>₹{rechargeAmount}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        const credit = rechargeAmount >= 500 ? rechargeAmount * 2 : rechargeAmount;
                        setWalletBalance(prev => prev + credit);
                        alert(lang === 'hi'
                          ? `₹${rechargeAmount} का भुगतान सफल! ${rechargeAmount >= 500 ? '100% बोनस के साथ ' : ''}₹${credit} आपके वॉलेट में जोड़ दिए गए हैं।`
                          : `Payment of ₹${rechargeAmount} successful! ₹${credit} added to your AstroWallet ${rechargeAmount >= 500 ? 'with 100% bonus' : ''}.`
                        );
                        setShowPaymentModal(false);
                      }}
                      className="w-full bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-black py-4 rounded-xl shadow-xl shadow-amber-600/10 hover:shadow-amber-600/20 active:scale-98 transition-all flex items-center justify-center space-x-2 text-sm tracking-widest uppercase"
                    >
                      <span>💳 {t.astroMeta.rechargeBtn}</span>
                    </button>
                    
                    <p className="text-center text-[9px] text-stone-500 mt-4 leading-relaxed">
                      {t.astroMeta.terms}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
// About Section
function AboutSection() {
  const { t, lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  return (
    <section className={`py-16 ${isDark ? 'bg-linear-to-b from-gray-800 to-gray-800' : 'glass-strong border-t border-[#083f1d]/15'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text-strong">{t.sections.about.title}</h2>
          <p className={`leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-emerald-900/80 font-medium'}`}>
            {lang === 'hi'
              ? `रत्नों को प्राचीन काल से ही उनकी सुंदरता और ग्रहों की ऊर्जा के साथ उनके जुड़ाव के लिए जाना जाता है। ${t.brandName} में, हम एक भरोसेमंद ऑनलाइन रत्न स्टोर प्रस्तुत करते हैं जहाँ आप रत्न आभूषण और ज्योतिषीय उद्देश्यों के लिए उपयुक्त प्राकृतिक रत्न पा सकते हैं।`
              : `Gemstones have been known since ancient times for their beauty and their association with planetary energies. At ${t.brandName}, we present a trustworthy online gemstone store where you can find natural gemstones suitable for gemstone jewelry and astrology purposes.`
            }
          </p>
          <p className={`leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-emerald-900/80 font-medium'}`}>
            {lang === 'hi'
              ? `हमारे संग्रह के हर रत्न को रत्न मानकों के अनुसार सावधानीपूर्वक चुना और सत्यापित किया जाता है। हम प्रमाणित रत्न भी प्रदान करते हैं जो आपके रत्न की वास्तविक गुणवत्ता और प्रामाणिकता की पुष्टि करने के लिए एक स्वतंत्र लैब प्रमाणपत्र के साथ आते हैं। इनका उपयोग आमतौर पर वैदिक ज्योतिष में ग्रहों की शक्तियों को सुधारने के उपाय के रूप में किया जाता है।`
              : `Every gemstone in our collection is carefully chosen and verified as per gemstone norms. We also provide certified gemstones that carry an independent lab certificate to confirm the true quality and authenticity of your gemstone, which are commonly used in Vedic Astrology as remedies to improve planetary powers.`
            }
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className={`p-6 rounded-xl shadow-xl border ${isDark ? 'glass-strong border-white/5' : 'bg-white border-emerald-100'}`}>
              <h3 className="font-bold text-lg mb-3 text-amber-600">{lang === 'hi' ? 'लोकप्रिय रत्न' : 'Popular Gemstones'}</h3>
              <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-emerald-950'}`}>
                <li>• <strong className={`${isDark ? 'text-amber-400' : 'text-emerald-900'}`}>{lang === 'hi' ? 'पुखराज (Yellow Sapphire)' : 'Yellow Sapphire'}</strong> - {lang === 'hi' ? 'ज्ञान और समृद्धि' : 'Wisdom & Prosperity'}</li>
                <li>• <strong className={`${isDark ? 'text-amber-400' : 'text-emerald-900'}`}>{lang === 'hi' ? 'नीलम (Blue Sapphire)' : 'Blue Sapphire'}</strong> - {lang === 'hi' ? 'स्थिरता और प्रगति' : 'Stability & Progress'}</li>
                <li>• <strong className={`${isDark ? 'text-amber-400' : 'text-emerald-900'}`}>{lang === 'hi' ? 'माणिक्य (Ruby)' : 'Ruby'}</strong> - {lang === 'hi' ? 'आत्मविश्वास और नेतृत्व' : 'Confidence & Leadership'}</li>
                <li>• <strong className={`${isDark ? 'text-amber-400' : 'text-emerald-900'}`}>{lang === 'hi' ? 'पन्ना (Emerald)' : 'Emerald'}</strong> - {lang === 'hi' ? 'बुद्धि और विकास' : 'Intelligence & Growth'}</li>
              </ul>
            </div>
            <div className={`p-6 rounded-xl shadow-xl border ${isDark ? 'glass-strong border-white/5' : 'bg-white border-emerald-100'}`}>
              <h3 className="font-bold text-lg mb-3 text-amber-600">{lang === 'hi' ? 'हमें क्यों चुनें' : 'Why Choose Us'}</h3>
              <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-emerald-950'}`}>
                <li>• {lang === 'hi' ? 'प्राकृतिक एवं प्रमाणित रत्न' : 'Natural & Certified Gemstones'}</li>
                <li>• {lang === 'hi' ? 'ज्योतिष आधारित मार्गदर्शन' : 'Astrology-Based Guidance'}</li>
                <li>• {lang === 'hi' ? 'विस्तृत रत्न संग्रह उपलब्ध' : 'Wide Collection Available'}</li>
                <li>• {lang === 'hi' ? 'सुरक्षित खरीदारी का अनुभव' : 'Secure Shopping Experience'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</section>
  );
}

// Footer Component
function Footer() {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);



  const infoLinks = [
    { label: lang === 'hi' ? 'हमारे बारे में' : 'About Us', action: () => (window as any).__openInfo?.('about') },
    { label: lang === 'hi' ? 'संपर्क' : 'Contact', action: () => (window as any).__openInfo?.('contact') },
    { label: lang === 'hi' ? 'FAQ' : 'FAQ', action: () => (window as any).__openInfo?.('faq') },
    { label: lang === 'hi' ? 'शिपिंग पॉलिसी' : 'Shipping Policy', action: () => (window as any).__openInfo?.('shipping') },
    { label: lang === 'hi' ? 'रिटर्न्स' : 'Returns', action: () => (window as any).__openInfo?.('returns') },
  ];

  const astroLinks = [
    { label: lang === 'hi' ? 'मुफ़्त कुंडली' : 'Free Kundli', action: () => (window as any).__freeKundli?.() },
    { label: lang === 'hi' ? 'कुंडली मिलान' : 'Kundli Matching', action: () => (window as any).__kundliMatching?.() },
    {
      label: lang === 'hi' ? 'राशिफल' : 'Horoscopes',
      dropdown: [
        { label: lang === 'hi' ? 'राशिफल' : 'Horoscope', action: () => (window as any).__horoscopesToday?.() },
        { label: lang === 'hi' ? 'आज का राशिफल' : 'Today\'s Horoscope', action: () => (window as any).__horoscopesToday?.() },
        { label: lang === 'hi' ? 'दैनिक राशिफल' : 'Daily Horoscope', action: () => (window as any).__horoscopesDaily?.() },
        { label: lang === 'hi' ? 'कल का राशिफल' : 'Yesterday\'s Horoscope', action: () => (window as any).__horoscopesYesterday?.() },
        { label: lang === 'hi' ? 'अटूर का राशिफल' : 'Tomorrow\'s Horoscope', action: () => (window as any).__horoscopesTomorrow?.() },
        { label: lang === 'hi' ? 'साप्ताहिक राशिफल' : 'Weekly Horoscope', action: () => (window as any).__horoscopesWeekly?.() },
        { label: lang === 'hi' ? 'मासिक राशिफल' : 'Monthly Horoscope', action: () => (window as any).__horoscopesMonthly?.() },
        { label: lang === 'hi' ? 'वार्षिक राशिफल' : 'Yearly Horoscope', action: () => (window as any).__horoscopesYearly?.() },
      ]
    },
    { label: lang === 'hi' ? 'ज्योतिषी से बात करें' : 'Talk to Astrologer', action: () => (window as any).__talk?.() },
  ];

  return (
    <footer className={`${isDark ? 'bg-linear-to-b from-gray-800 via-gray-900 to-gray-900 text-white border-t border-amber-600/20' : 'glass-strong text-[#083f1d] border-t border-[#083f1d]/15'} pt-20 pb-8`}>
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <button onClick={() => (window as any).__goHome?.()} className={`text-2xl font-black mb-6 flex items-center transition-colors group ${isDark ? 'hover:text-amber-400' : 'hover:text-[#083f1d]'}`}>
              <span className="text-3xl mr-3 animate-float neon-glow group-hover:scale-110 text-amber-500">
                <i className="fa-solid fa-gem"></i>
              </span>
              <span className="gradient-text-strong">{lang === 'hi' ? 'Fix My Future' : 'Fix My Future'}</span>
            </button>
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
                { label: lang === 'hi' ? 'रत्न' : 'Gemstones', action: () => (window as any).__gemstones?.() },
                { label: lang === 'hi' ? 'रुद्राक्ष' : 'Rudraksha', action: () => (window as any).__rudraksha?.() },
                { label: lang === 'hi' ? 'ब्रेसलेट' : 'Bracelets', action: () => (window as any).__bracelets?.() }
              ].map((item) => (
                <li key={item.label}>
                  <button onClick={item.action} className={`${isDark ? 'text-slate-400 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium hover:translate-x-1 transform duration-300`}>
                    → {item.label}
                  </button>
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
                  <button onClick={item.action} className={`${isDark ? 'text-slate-400 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium hover:translate-x-1 transform duration-300`}>
                    → {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Astrology Links */}
           <div>
             <h4 className={`font-black text-lg mb-6 uppercase tracking-wide ${isDark ? 'text-amber-400' : 'text-[#083f1d]'}`}>{lang === 'hi' ? 'ज्योतिष' : 'Astrology'}</h4>
             <ul className="space-y-3">
               {astroLinks.map((item) => (
                 item.dropdown ? (
                   <li key={item.label} className="relative group">
                     <button className={`w-full text-left font-medium text-sm transition-all duration-300 hover:translate-x-1 transform flex items-center justify-between ${isDark ? 'text-slate-400 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'}`}>
                       <span>→ {item.label}</span>
                       <svg className="w-3 h-3 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                     </button>
                     <div className={`absolute left-0 top-full mt-2 w-56 backdrop-blur-md border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${isDark ? 'bg-gray-800/95 border-amber-600/30' : 'bg-white/95 border-gray-200'}`}>
                       {item.dropdown.map((dropdownItem, dropdownIndex) => (
                         <button
                           key={dropdownIndex}
                           onClick={dropdownItem.action}
                           className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-amber-700/10' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'}`}
                         >
                           {dropdownItem.label}
                         </button>
                       ))}
                     </div>
                   </li>
                 ) : (
                   <li key={item.label}>
                     <button onClick={item.action} className={`${isDark ? 'text-slate-400 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium hover:translate-x-1 transform duration-300`}>
                       → {item.label}
                     </button>
                   </li>
                 )
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
              &copy; 2026 {lang === 'hi' ? 'Fix My Future' : 'Fix My Future'}. {lang === 'hi' ? 'सभी अधिकार सुरक्षित हैं।' : 'All rights reserved.'}
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <button onClick={() => (window as any).__openInfo?.('terms')} className={`${isDark ? 'text-slate-500 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium`}>
              {lang === 'hi' ? 'शर्तें' : 'Terms'}
            </button>
            <button onClick={() => (window as any).__openInfo?.('policy')} className={`${isDark ? 'text-slate-500 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium`}>
              {lang === 'hi' ? 'नीति' : 'Policy'}
            </button>
            <button onClick={() => (window as any).__openInfo?.('contact')} className={`${isDark ? 'text-slate-500 hover:text-amber-400' : 'text-[#0a5c2a] hover:text-[#083f1d]'} transition-colors text-sm font-medium`}>
              {lang === 'hi' ? 'संपर्क' : 'Contact'}
            </button>
          </div>
          <div className={`${isDark ? 'text-slate-500' : 'text-[#0a5c2a]'} text-sm`}>
            {lang === 'hi' ? '🙏 धन्यवाद, आपका विश्वास ही हमारी सफलता है।' : '✨ Thank you for your trust and support.'}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Global Error Handling & Resource Guard
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.warn('Caught runtime exception:', error.message);
      // Prevent infinite loops or multiple alerts if needed
    };

    const handleResourceError = (event: ErrorEvent) => {
      const target = event.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.tagName === 'VIDEO')) {
        console.warn(`Resource failed to load: ${(target as any).src}`);
        // Optionally prevent default browser retry behavior
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('error', handleResourceError, true);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('error', handleResourceError, true);
    };
  }, []);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [activeInfoPage, setActiveInfoPage] = useState<'about' | 'contact' | 'faq' | 'shipping' | 'returns' | 'pooja' | 'store' | 'blogs' | 'terms' | 'policy' | null>(null);

  const [isFreeKundliOpen, setIsFreeKundliOpen] = useState(false);
  const [isKundliMatchingOpen, setIsKundliMatchingOpen] = useState(false);
  const [isCompatibilityOpen, setIsCompatibilityOpen] = useState(false);
  const [isCalculatorsOpen, setIsCalculatorsOpen] = useState(false);

  // Horoscope States
  const [isHoroscopesTodayOpen, setIsHoroscopesTodayOpen] = useState(false);
  const [isHoroscopesDailyOpen, setIsHoroscopesDailyOpen] = useState(false);
  const [isHoroscopesWeeklyOpen, setIsHoroscopesWeeklyOpen] = useState(false);
  const [isHoroscopesMonthlyOpen, setIsHoroscopesMonthlyOpen] = useState(false);
  const [isHoroscopesYearlyOpen, setIsHoroscopesYearlyOpen] = useState(false);
  const [isHoroscopesTomorrowOpen, setIsHoroscopesTomorrowOpen] = useState(false);
  const [isHoroscopesYesterdayOpen, setIsHoroscopesYesterdayOpen] = useState(false);
  const [isHoroscopesChineseOpen, setIsHoroscopesChineseOpen] = useState(false);

  // Astrologer States
  const [isBestAstrologersOpen, setIsBestAstrologersOpen] = useState(false);
  const [isChatWithAstrologerOpen, setIsChatWithAstrologerOpen] = useState(false);
  const [isTalkToAstrologerOpen, setIsTalkToAstrologerOpen] = useState(false);

  // Product Category States
  const [isGemstonesOpen, setIsGemstonesOpen] = useState(false);
  const [isRudrakshaOpen, setIsRudrakshaOpen] = useState(false);
  const [isBraceletsOpen, setIsBraceletsOpen] = useState(false);
  const [isShopNowOpen, setIsShopNowOpen] = useState(false);

  const t = translations[lang];

  // Set global handlers for header/footer buttons
  useEffect(() => {
    (window as any).__setSearch = setIsSearchOpen;
    (window as any).__setAuth = setIsAuthOpen;
    (window as any).__setCart = (v: boolean) => {
      const event = new CustomEvent('openCart', { detail: v });
      window.dispatchEvent(event);
    };
    (window as any).__openInfo = (value: 'about' | 'contact' | 'faq' | 'shipping' | 'returns' | 'terms' | 'policy') => {
      setActiveInfoPage(value);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    (window as any).__goHome = () => {
      setActiveInfoPage(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    (window as any).__scrollToSection = (id: string) => {

      setActiveInfoPage(null);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    };
    (window as any).__freeKundli = () => {
      setIsFreeKundliOpen(true);
    };
    (window as any).__kundliMatching = () => {
      setIsKundliMatchingOpen(true);
    };
    (window as any).__compatibility = () => {
      setIsCompatibilityOpen(true);
    };
    (window as any).__calculators = () => {
      setIsCalculatorsOpen(true);
    };
    (window as any).__horoscopesToday = () => {
      setIsHoroscopesTodayOpen(true);
    };
    (window as any).__horoscopesDaily = () => {
      setIsHoroscopesDailyOpen(true);
    };
    (window as any).__horoscopesWeekly = () => {
      setIsHoroscopesWeeklyOpen(true);
    };
    (window as any).__horoscopesMonthly = () => {
      setIsHoroscopesMonthlyOpen(true);
    };
    (window as any).__horoscopesYearly = () => {
      setIsHoroscopesYearlyOpen(true);
    };
    (window as any).__horoscopesTomorrow = () => {
      setIsHoroscopesTomorrowOpen(true);
    };
    (window as any).__horoscopesYesterday = () => {
      setIsHoroscopesYesterdayOpen(true);
    };
    (window as any).__horoscopesChinese = () => {
      setIsHoroscopesChineseOpen(true);
    };
    (window as any).__astrologers = () => {

      setActiveInfoPage(null);
      setTimeout(() => {
        document.getElementById('astrologers')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    };


    (window as any).__astrologers = () => {
      setIsBestAstrologersOpen(true);
    };
    (window as any).__chat = () => {
      setIsChatWithAstrologerOpen(true);
    };
    (window as any).__talk = () => {
      setIsTalkToAstrologerOpen(true);
    };
    (window as any).__gemstones = () => {
      setIsGemstonesOpen(true);
    };
    (window as any).__rudraksha = () => {
      setIsRudrakshaOpen(true);
    };
    (window as any).__bracelets = () => {
      setIsBraceletsOpen(true);
    };
    (window as any).__shopNow = () => {
      setIsShopNowOpen(true);
    };
    (window as any).__pooja = () => {

      setActiveInfoPage('pooja');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    (window as any).__store = () => {

      setActiveInfoPage('store');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    (window as any).__blogs = () => {

      setActiveInfoPage('blogs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }, []);

  // Collect all products for search
  const allProducts: Product[] = [...products];




  return (
    <CartProvider>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <LanguageContext.Provider value={{ lang, setLang, t }}>
        <div className="min-h-screen bg-dark-gradient relative">
        {isDark && <FloatingElements />}
        <MarqueeBanner />
        <Header />
        <main id="home" className="pt-20">
          <HeroSection onShopNow={() => (window as any).__shopNow?.()} />
          <CTAButtons />
          <StatsSection />
          






          

          


          {/* Astrologer Consultation Section */}
          <AstrologerSection />
          
          
          {/* Video Section */}
          <VideoSection />

          {/* Testimonials Slider */}
          <TestimonialsSlider />
          
          {/* About Section */}
          <ScrollReveal>
            <AboutSection />
          </ScrollReveal>
          

        </main>
        <Footer />





        {/* Information Pages */}
        <InformationPage isOpen={activeInfoPage === 'about'} onClose={() => setActiveInfoPage(null)} page="about" />
        <InformationPage isOpen={activeInfoPage === 'contact'} onClose={() => setActiveInfoPage(null)} page="contact" />
        <InformationPage isOpen={activeInfoPage === 'faq'} onClose={() => setActiveInfoPage(null)} page="faq" />
        <InformationPage isOpen={activeInfoPage === 'shipping'} onClose={() => setActiveInfoPage(null)} page="shipping" />
        <InformationPage isOpen={activeInfoPage === 'returns'} onClose={() => setActiveInfoPage(null)} page="returns" />
        <InformationPage isOpen={activeInfoPage === 'terms'} onClose={() => setActiveInfoPage(null)} page="terms" />
        <InformationPage isOpen={activeInfoPage === 'policy'} onClose={() => setActiveInfoPage(null)} page="policy" />





        <InformationPage isOpen={activeInfoPage === 'pooja'} onClose={() => setActiveInfoPage(null)} page="pooja" />
        <InformationPage isOpen={activeInfoPage === 'store'} onClose={() => setActiveInfoPage(null)} page="store" />
        <InformationPage isOpen={activeInfoPage === 'blogs'} onClose={() => setActiveInfoPage(null)} page="blogs" />

        {/* Free Kundli Page */}
        <FreeKundli isOpen={isFreeKundliOpen} onClose={() => setIsFreeKundliOpen(false)} />

        {/* Kundli Matching Page */}
        <KundliMatching isOpen={isKundliMatchingOpen} onClose={() => setIsKundliMatchingOpen(false)} />

        {/* Compatibility Page */}
        <Compatibility isOpen={isCompatibilityOpen} onClose={() => setIsCompatibilityOpen(false)} />

        {/* Calculators Page */}
        <Calculators isOpen={isCalculatorsOpen} onClose={() => setIsCalculatorsOpen(false)} />

        {/* Horoscopes Pages */}
        <TodaysHoroscope isOpen={isHoroscopesTodayOpen} onClose={() => setIsHoroscopesTodayOpen(false)} />
        <DailyHoroscope isOpen={isHoroscopesDailyOpen} onClose={() => setIsHoroscopesDailyOpen(false)} />
        <WeeklyHoroscope isOpen={isHoroscopesWeeklyOpen} onClose={() => setIsHoroscopesWeeklyOpen(false)} />
        <MonthlyHoroscope isOpen={isHoroscopesMonthlyOpen} onClose={() => setIsHoroscopesMonthlyOpen(false)} />
        <YearlyHoroscope isOpen={isHoroscopesYearlyOpen} onClose={() => setIsHoroscopesYearlyOpen(false)} />
        <TomorrowHoroscope isOpen={isHoroscopesTomorrowOpen} onClose={() => setIsHoroscopesTomorrowOpen(false)} />
        <YesterdayHoroscope isOpen={isHoroscopesYesterdayOpen} onClose={() => setIsHoroscopesYesterdayOpen(false)} />
        <ChineseHoroscope isOpen={isHoroscopesChineseOpen} onClose={() => setIsHoroscopesChineseOpen(false)} />

        {/* Best Astrologers Modal */}
        <BestAstrologers isOpen={isBestAstrologersOpen} onClose={() => setIsBestAstrologersOpen(false)} />
        <ChatWithAstrologer isOpen={isChatWithAstrologerOpen} onClose={() => setIsChatWithAstrologerOpen(false)} />
        <TalkToAstrologer isOpen={isTalkToAstrologerOpen} onClose={() => setIsTalkToAstrologerOpen(false)} />

        {/* Product Category Pages */}
        <ProductCategoryPage
          isOpen={isGemstonesOpen}
          onClose={() => setIsGemstonesOpen(false)}
          category="gemstones"
          categoryTitle={lang === 'hi' ? 'रत्न' : 'Gemstones'}
          categoryIcon="💎"
          products={gemstoneProducts}
        />
        <ProductCategoryPage
          isOpen={isRudrakshaOpen}
          onClose={() => setIsRudrakshaOpen(false)}
          category="rudraksha"
          categoryTitle={lang === 'hi' ? 'रुद्राक्ष' : 'Rudraksha'}
          categoryIcon="📿"
          products={rudrakshaProducts}
        />
        <ProductCategoryPage
          isOpen={isBraceletsOpen}
          onClose={() => setIsBraceletsOpen(false)}
          category="bracelets"
          categoryTitle={lang === 'hi' ? 'ब्रेसलेट' : 'Bracelets'}
          categoryIcon="✨"
          products={braceletProducts}
        />

        {/* Shop Now Page */}
        <ShopNowPage isOpen={isShopNowOpen} onClose={() => setIsShopNowOpen(false)} />

        {/* Floating & Overlay Components */}
        <AIChat />
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} allProducts={allProducts} />
        <CartDrawer />
      </div>
    </LanguageContext.Provider>
      </ThemeContext.Provider>
    </CartProvider>
  );
}

export default App;
