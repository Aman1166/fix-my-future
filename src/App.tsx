import { useState, useEffect, createContext, useContext } from 'react';
import {
  translations,
  productsHi,
  astrologersHi
} from './translations';
import HeroSection from './components/HeroSection';
import AIChat from './components/AIChat';
import AuthModal from './components/AuthModal';
import SearchOverlay from './components/SearchOverlay';
import CartDrawer from './components/CartDrawer';
import ThemeToggle from './components/ThemeToggle';


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

import { CartProvider } from './store';
import {
  TestimonialsSlider,
  StatsSection,
  FeaturedCarousel,
  MarqueeBanner,
  FloatingElements,
  ScrollReveal
} from './components/Animations';

// Create Language Context
export const LanguageContext = createContext<{
  lang: 'en' | 'hi';
  setLang: (lang: 'en' | 'hi') => void;
  t: typeof translations.en;
}>({
  lang: 'en',
  setLang: () => { },
  t: translations.en
});

// Create Theme Context
export const ThemeContext = createContext<{
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}>({
  isDark: true,
  setIsDark: () => { }
});

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
const products: Product[] = [
  { id: 1, name: 'Natural 7 Mukhi Rudraksha', price: '₹2,499', image: '/product/rudraksha.jpg', category: 'rudraksha' },
  { id: 2, name: 'Dhan Yog Bracelet', price: '₹1,999', image: '/product/a1.jpg', category: 'bracelets' },
  { id: 3, name: 'Natural 5 Mukhi Rudraksha', price: '₹1,299', image: '/product/rudraksha.jpg', category: 'rudraksha' },
  { id: 4, name: 'Amethyst Bracelet', price: '₹1,499', image: '/product/a4.webp', category: 'bracelets' },
  { id: 5, name: 'Pyrite Bracelet', price: '₹1,299', image: '/product/a5.webp', category: 'bracelets' },
  { id: 11, name: 'Emerald Bracelet', price: '₹1,799', image: '/product/a6.webp', category: 'bracelets', sign: 'Gemini' },
  { id: 12, name: 'Taurus Bracelet', price: '₹1,799', image: '/product/a7.webp', category: 'bracelets', sign: 'Taurus' },
  { id: 8, name: 'Natural Citrine Bracelet', price: '₹1,599', image: '/product/a8.webp', category: 'bracelets' },
];

const astrologers: Astrologer[] = [
  {
    id: 1,
    name: 'Acharya Rajendra',
    expertise: ['Vedic Astrology', 'Vastu', 'Gemology'],
    experience: 15,
    price: 25,
    rating: 4.9,
    consultations: 12500,
    languages: ['English', 'Hindi'],
    online: true,
    image: '/astro/a1.jpg'
  },
  {
    id: 2,
    name: 'Astro Megha',
    expertise: ['Tarot Reading', 'Numerology', 'Love Specialist'],
    experience: 8,
    price: 20,
    rating: 4.8,
    consultations: 8400,
    languages: ['English', 'Hindi', 'Punjabi'],
    online: true,
    image: '/astro/a2.jpg'
  },
  {
    id: 3,
    name: 'Swami Shivanand',
    expertise: ['Palmistry', 'Kundli Matching', 'Vedic Astrology'],
    experience: 25,
    price: 45,
    rating: 5.0,
    consultations: 21000,
    languages: ['Hindi', 'Sanskrit'],
    online: true,
    image: '/astro/a3.jpg'
  },
  {
    id: 4,
    name: 'Dr. Neha Sharma',
    expertise: ['KP Astrology', 'Nadi Astrology', 'Career Consultant'],
    experience: 12,
    price: 30,
    rating: 4.7,
    consultations: 10200,
    languages: ['English', 'Hindi'],
    online: true,
    image: '/astro/a4.jpg'
  },
  {
    id: 5,
    name: 'Acharya Manish',
    expertise: ['Prashna Kundli', 'Financial Astrology', 'Lal Kitab'],
    experience: 10,
    price: 28,
    rating: 4.9,
    consultations: 9500,
    languages: ['Hindi', 'Gujarati'],
    online: true,
    image: '/astro/a5.jpg'
  },
  {
    id: 6,
    name: 'Pt. Suresh Joshi',
    expertise: ['Vedic Astrology', 'Gemstone Therapy', 'Vastu Remedies'],
    experience: 18,
    price: 35,
    rating: 4.8,
    consultations: 15600,
    languages: ['English', 'Hindi', 'Marathi'],
    online: true,
    image: '/astro/a6.jpg'
  }
];


// CTA Buttons Component
function CTAButtons() {
  const { lang } = useContext(LanguageContext);

  const ctaCards = [
    {
      title: lang === 'hi' ? 'दैनिक राशिफल' : 'Daily Horoscope',
      desc: lang === 'hi' ? 'सितारे आपके बारे में क्या कहते हैं' : 'What the stars say about you',
      icon: 'fa-sun',
      color: 'from-amber-400 to-orange-600',
      action: () => (window as any).__horoscopesDaily()
    },
    {
      title: lang === 'hi' ? 'मुफ्त कुंडली' : 'Free Kundli',
      desc: lang === 'hi' ? 'अपना व्यक्तिगत भविष्य जानें' : 'Get your personalized future',
      icon: 'fa-moon',
      color: 'from-purple-400 to-indigo-600',
      action: () => (window as any).__freeKundli()
    },
    {
      title: lang === 'hi' ? 'ज्योतिषी से बात' : 'Talk to Astrologer',
      desc: lang === 'hi' ? 'विशेषज्ञों से सलाह लें' : 'Consult with experts',
      icon: 'fa-comments',
      color: 'from-emerald-400 to-teal-600',
      action: () => (window as any).__astrologers()
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 -mt-20 relative z-20">
      {ctaCards.map((card, i) => (
        <button
          key={i}
          onClick={card.action}
          className="group relative p-8 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 active:scale-95 text-left"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
          <div className="absolute top-0 right-0 p-8 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
            <i className={`fas ${card.icon} text-7xl text-white`}></i>
          </div>
          <div className="relative z-10 text-white">
            <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{card.title}</h3>
            <p className="text-white/80 font-medium">{card.desc}</p>
            <div className="mt-6 flex items-center space-x-2 text-sm font-black uppercase tracking-widest bg-white/20 w-fit px-4 py-2 rounded-full backdrop-blur-md">
              <span>Explore</span>
              <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

// Nav Button Component
function NavButton({ label, onClick, icon, active }: { label: string; onClick: () => void; icon?: string; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`group relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 
        ${active ? 'text-accent-theme bg-accent-theme/10' : 'text-text-muted hover:text-accent-theme hover:bg-accent-theme/10'}
        active:scale-95`}
    >
      {icon && <i className={`fas ${icon} text-base group-hover:rotate-12 transition-transform`}></i>}
      <span className="relative z-10">{label}</span>
      {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent-theme rounded-full mb-1"></span>}
    </button>
  );
}

// Dropdown Item Component
function DropdownItem({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all flex items-center justify-between group"
    >
      <span>{label}</span>
      <i className="fas fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"></i>
    </button>
  );
}

// About Section
function AboutSection() {
  const { lang } = useContext(LanguageContext);
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 to-purple-500/30 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <img
            src="/astro/about.jpg"
            alt="About us"
            className="relative rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute -bottom-10 -right-10 glass p-8 rounded-[2.5rem] shadow-2xl max-w-[250px] animate-bounce-slow">
            <div className="text-4xl font-black text-accent-theme mb-2">25+</div>
            <div className="text-sm font-bold text-text-muted uppercase tracking-widest leading-tight">
              {lang === 'hi' ? 'वर्षों का अनुभव' : 'Years of Vedic Wisdom'}
            </div>
          </div>
        </div>
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-accent-theme/10 text-accent-theme text-xs font-black uppercase tracking-[0.2em] mb-6">
            Our Legacy
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            {lang === 'hi' ? 'प्राचीन ज्ञान, आधुनिक जीवन के लिए' : 'Ancient Wisdom for Modern Living'}
          </h2>
          <p className="text-lg text-text-muted mb-10 leading-relaxed font-medium">
            {lang === 'hi'
              ? 'हमारा मिशन आपको वैदिक ज्योतिष और उच्च गुणवत्ता वाले रत्नों के माध्यम से स्पष्टता और समृद्धि प्रदान करना है।'
              : 'Our mission is to provide you with clarity and prosperity through Vedic astrology and premium-grade gemstones.'}
          </p>
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {[
              { icon: 'fa-check-circle', text: lang === 'hi' ? 'प्रमाणित रत्न' : 'Certified Gems' },
              { icon: 'fa-star', text: lang === 'hi' ? 'विशेषज्ञ ज्योतिषी' : 'Expert Astrologers' },
              { icon: 'fa-history', text: lang === 'hi' ? 'प्राचीन पद्धतियां' : 'Ancient Traditions' },
              { icon: 'fa-heart', text: lang === 'hi' ? 'संतुष्ट ग्राहक' : 'Happy Clients' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 group cursor-default">
                <i className={`fas ${item.icon} text-accent-theme text-xl group-hover:scale-125 transition-transform`}></i>
                <span className="font-bold text-text-main">{item.text}</span>
              </div>
            ))}
          </div>
          <button className="btn-accent px-10 py-4 rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl">
            {lang === 'hi' ? 'अधिक जानें' : 'Read Our Story'}
          </button>
        </div>
      </div>
    </section>
  );
}

// Astrologer Section Component
function AstrologerSection({ list }: { list: any[] }) {
  const { lang } = useContext(LanguageContext);
  const astrologersList = list || [];

  return (
    <section id="astrologers" className="py-24 relative overflow-hidden bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-accent-theme/10 text-accent-theme text-xs font-black uppercase tracking-[0.2em] mb-4">
              Expert Guidance
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              {lang === 'hi' ? 'हमारे विशेषज्ञ ज्योतिषी' : 'Our Expert Astrologers'}
            </h2>
          </div>
          <button onClick={() => (window as any).__astrologers()} className="btn-outline px-8 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 group">
            <span>{lang === 'hi' ? 'सभी देखें' : 'View All Experts'}</span>
            <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {astrologersList.map((astrologer: any) => (
            <div key={astrologer.id} className="glass-heavy rounded-[2.5rem] overflow-hidden group hover:scale-[1.02] transition-all duration-500 border border-white/5 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={astrologer.image} alt={astrologer.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  <span>Online</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star text-xs ${i < Math.floor(astrologer.rating) ? 'text-amber-400' : 'text-gray-600'}`}></i>
                  ))}
                  <span className="text-xs font-bold text-text-muted ml-1">({astrologer.rating})</span>
                </div>
                <h3 className="text-xl font-black mb-1 group-hover:text-accent-theme transition-colors">{astrologer.name}</h3>
                <p className="text-sm text-text-muted font-medium mb-4 line-clamp-1">{astrologer.expertise.join(', ')}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <div className="text-[10px] uppercase font-black text-text-muted tracking-widest">Starts from</div>
                    <div className="text-lg font-black text-accent-theme">₹{astrologer.price}/min</div>
                  </div>
                  <button onClick={() => (window as any).__chat()} className="p-3 bg-accent-theme text-white rounded-2xl hover:scale-110 transition-transform active:scale-95 shadow-lg">
                    <i className="fas fa-comment-dots text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Video Section Component
function VideoSection() {
  const { lang } = useContext(LanguageContext);
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative rounded-[3.5rem] overflow-hidden aspect-video shadow-2xl group cursor-pointer">
          <img src="/astro/v.jpg" alt="Video Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 mb-8">
              <i className="fas fa-play text-accent-theme text-3xl ml-2"></i>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl">
              {lang === 'hi' ? 'अपनी नियति को हमारे साथ खोजें' : 'Discover Your Destiny with Our Expert Guidance'}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const { lang } = useContext(LanguageContext);

  const astroLinks = [
    { label: lang === 'hi' ? 'मुफ्त कुंडली' : 'Free Kundli', action: () => (window as any).__freeKundli() },
    { label: lang === 'hi' ? 'कुंडली मिलान' : 'Kundli Matching', action: () => (window as any).__kundliMatching() },
    { label: lang === 'hi' ? 'दैनिक राशिफल' : 'Daily Horoscope', action: () => (window as any).__horoscopesDaily() },
    { label: lang === 'hi' ? 'आज का पंचांग' : 'Today\'s Panchang', action: () => (window as any).__horoscopesToday() },
    { label: lang === 'hi' ? 'चीनी राशिफल' : 'Chinese Horoscope', action: () => (window as any).__horoscopesChinese() },
    { label: lang === 'hi' ? 'ज्योतिषी से बात' : 'Talk to Astrologer', action: () => (window as any).__astrologers() }
  ];

  const shoppingLinks = [
    { label: lang === 'hi' ? 'रत्न' : 'Gemstones', action: () => (window as any).__scrollToSection('products-section') },
    { label: lang === 'hi' ? 'रुद्राक्ष' : 'Rudraksha', action: () => (window as any).__scrollToSection('products-section') },
    { label: lang === 'hi' ? 'कंगन' : 'Bracelets', action: () => (window as any).__scrollToSection('products-section') },
    { label: lang === 'hi' ? 'पूजा सामग्री' : 'Pooja Items', action: () => (window as any).__openInfo?.('pooja') },
    { label: lang === 'hi' ? 'नया क्या है' : 'New Arrivals', action: () => (window as any).__openInfo?.('store') }
  ];

  return (
    <footer className="relative pt-32 pb-12 bg-bg-primary overflow-hidden border-t border-black/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter gradient-text-strong">Fix My Future</h3>
            <p className="text-text-muted mb-8 text-lg font-medium leading-relaxed">
              {lang === 'hi'
                ? 'वैदिक ज्योतिष और रत्नों के माध्यम से आपके जीवन को सकारात्मक दिशा देने के लिए समर्पित।'
                : 'Dedicated to giving your life a positive direction through Vedic astrology and gemstones.'}
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'youtube', 'twitter'].map((social) => (
                <button key={social} className="w-11 h-11 glass rounded-full flex items-center justify-center text-lg hover:bg-amber-400/20 hover:text-amber-400 transition-all duration-300 hover:scale-110 active:scale-95">
                  <i className={`fab fa-${social} text-xl`}></i>
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-amber-400">{lang === 'hi' ? 'ज्योतिष' : 'Astrology'}</h4>
            <ul className="space-y-4">
              {astroLinks.map((item) => (
                <li key={item.label}>
                  <button onClick={item.action} className="text-text-muted hover:text-amber-400 transition-colors font-bold flex items-center group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-amber-400 transition-all mr-0 group-hover:mr-2"></span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-amber-400">{lang === 'hi' ? 'Shop करें' : 'Shop'}</h4>
            <ul className="space-y-4">
              {shoppingLinks.map((item) => (
                <li key={item.label}>
                  <button onClick={item.action} className="text-text-muted hover:text-amber-400 transition-colors font-bold flex items-center group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-amber-400 transition-all mr-0 group-hover:mr-2"></span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-amber-400">{lang === 'hi' ? 'संपर्क करें' : 'Contact'}</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl glass text-amber-400">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-text-muted tracking-widest mb-1">Call Us</div>
                  <div className="font-bold">+91 98765 43210</div>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl glass text-amber-400">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-text-muted tracking-widest mb-1">Email Us</div>
                  <div className="font-bold">support@fixmyfuture.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm font-bold">
            © 2026 Fix My Future. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm font-bold text-text-muted">
            <button onClick={() => (window as any).__openInfo?.('terms')} className="text-text-muted hover:text-amber-400 transition-colors">Terms</button>
            <button onClick={() => (window as any).__openInfo?.('policy')} className="text-text-muted hover:text-amber-400 transition-colors">Privacy Policy</button>
            <button onClick={() => (window as any).__openInfo?.('contact')} className="text-text-muted hover:text-amber-400 transition-colors">Support</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  const [lang, setLang] = useState<'en' | 'hi'>(() => {
    const saved = localStorage.getItem('lang');
    return (saved as 'en' | 'hi') || 'en';
  });

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeInfoPage, setActiveInfoPage] = useState<'about' | 'contact' | 'faq' | 'shipping' | 'returns' | 'kundli-matching' | 'pooja' | 'store' | 'blogs' | 'terms' | 'policy' | null>(null);
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

  const t = translations[lang];

  // Set global handlers for header/footer buttons
  useEffect(() => {
    window.addEventListener('scroll', () => setIsScrolled(window.scrollY > 50));
    (window as any).__setSearch = setIsSearchOpen;
    (window as any).__setAuth = setIsAuthOpen;
    (window as any).__setCart = (v: boolean) => {
      const event = new CustomEvent('openCart', { detail: v });
      window.dispatchEvent(event);
    };
    (window as any).__openInfo = (value: any) => {
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
      setIsBestAstrologersOpen(true);
    };
    (window as any).__chat = () => {
      setIsChatWithAstrologerOpen(true);
    };
    (window as any).__talk = () => {
      setIsTalkToAstrologerOpen(true);
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

  // Helper to merge translations into products
  const getLocalizedProducts = (base: Product[], hiData: any[]) => {
    if (lang === 'en') return base;
    return base.map(item => {
      const hiItem = hiData.find(h => h.id === item.id);
      return hiItem ? { ...item, name: hiItem.name, price: hiItem.price, sign: hiItem.sign || item.sign } : item;
    });
  };

  // Helper to merge translations into astrologers
  const getLocalizedAstrologers = (base: Astrologer[], hiData: any[]) => {
    if (lang === 'en') return base;
    return base.map(item => {
      const hiItem = hiData.find(h => h.id === item.id);
      return hiItem ? { ...item, name: hiItem.name, expertise: hiItem.expertise, languages: hiItem.languages } : item;
    });
  };

  const activeProducts = getLocalizedProducts(products, productsHi);
  const activeAstrologers = getLocalizedAstrologers(astrologers, astrologersHi);

  return (
    <CartProvider>
      <LanguageContext.Provider value={{ lang, setLang, t }}>
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
          <div className={`min-h-screen transition-colors duration-500 bg-bg-primary text-text-primary ${lang === 'hi' ? 'font-hindi' : ''}`}>
            <FloatingElements />

            {/* Header / Navbar */}
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-bg-primary/80 backdrop-blur-xl shadow-lg py-2' : 'bg-transparent py-4'}`}>
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                  {/* Brand */}
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl md:text-3xl font-black tracking-tighter cursor-pointer hover:scale-105 transition-transform" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      <span className="gradient-text-strong">Fix My Future</span>
                    </div>
                  </div>

                  {/* Desktop Nav */}
                  <nav className="hidden lg:flex items-center space-x-1">
                    <NavButton label={t.nav.home} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                    <NavButton label="Free Kundli" onClick={() => setIsFreeKundliOpen(true)} />
                    <NavButton label="Kundli Matching" onClick={() => setIsKundliMatchingOpen(true)} />
                    <NavButton label="Compatibility" onClick={() => setIsCompatibilityOpen(true)} />

                    <div className="relative group">
                      <button className={`nav-btn px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center space-x-1.5 ${isScrolled ? 'text-accent-theme' : 'text-text-primary'}`}>
                        <span>Horoscopes</span>
                        <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform"></i>
                      </button>
                      <div className="absolute top-full right-0 mt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                        <div className="bg-bg-primary rounded-2xl shadow-2xl p-2 border border-black/10">
                          <DropdownItem label="Today's Panchang" onClick={() => setIsHoroscopesTodayOpen(true)} />
                          <DropdownItem label="Daily Horoscope" onClick={() => setIsHoroscopesDailyOpen(true)} />
                          <DropdownItem label="Weekly Horoscope" onClick={() => setIsHoroscopesWeeklyOpen(true)} />
                          <DropdownItem label="Monthly Horoscope" onClick={() => setIsHoroscopesMonthlyOpen(true)} />
                          <DropdownItem label="Yearly Horoscope" onClick={() => setIsHoroscopesYearlyOpen(true)} />
                          <DropdownItem label="Chinese Horoscope" onClick={() => setIsHoroscopesChineseOpen(true)} />
                        </div>
                      </div>
                    </div>

                    <NavButton label="Calculators" onClick={() => setIsCalculatorsOpen(true)} />
                    <NavButton label="Best Astrologers" onClick={() => setIsBestAstrologersOpen(true)} />
                  </nav>

                  {/* Actions */}
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="hidden md:flex items-center space-x-1">
                      <NavButton label="Chat" icon="fa-comments" onClick={() => setIsChatWithAstrologerOpen(true)} />
                      <NavButton label="Talk" icon="fa-phone" onClick={() => setIsTalkToAstrologerOpen(true)} />
                      <NavButton label="Blogs" onClick={() => setActiveInfoPage('blogs')} />
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <button onClick={() => setIsSearchOpen(true)} className="p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 text-text-muted hover:text-accent-theme hover:bg-accent-theme/15 glass active:scale-95">
                        <i className="fas fa-search text-lg md:text-xl"></i>
                      </button>
                      <button onClick={() => setIsAuthOpen(true)} className="p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 text-text-muted hover:text-accent-theme hover:bg-accent-theme/15 glass active:scale-95">
                        <i className="fas fa-user text-lg md:text-xl"></i>
                      </button>
                      <ThemeToggle />
                      <button className="relative p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 text-text-muted hover:text-accent-theme hover:bg-accent-theme/15 glass active:scale-95">
                        <i className="fas fa-shopping-bag text-lg md:text-xl"></i>
                        <span className="absolute top-2 right-2 w-4 h-4 bg-accent-theme text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-bg-primary">2</span>
                      </button>
                      <button
                        onClick={() => {
                          const nextLang = lang === 'en' ? 'hi' : 'en';
                          setLang(nextLang);
                          localStorage.setItem('lang', nextLang);
                        }}
                        className="font-bold text-[10px] md:text-xs lg:text-sm tracking-wide uppercase transition-all duration-300 hover:scale-110 text-text-main hover:text-amber-400 px-2 lg:px-3 py-2 rounded-lg hover:bg-accent-theme/10 whitespace-nowrap flex items-center space-x-1"
                      >
                        <i className="fas fa-globe text-lg"></i>
                        <span className="text-[10px] font-black uppercase tracking-tighter">{lang === 'en' ? 'HI' : 'EN'}</span>
                      </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2.5 rounded-xl text-text-muted glass hover:text-accent-theme transition-colors">
                      <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
                    </button>
                  </div>
                </div>
              </div>
            </header>

            {/* Mobile Nav */}
            <div className={`fixed inset-0 z-[110] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
              <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-2xl p-8 flex flex-col items-center justify-center space-y-6 text-center">
                <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 p-3 rounded-2xl bg-accent-theme/10 text-accent-theme">
                  <i className="fas fa-times text-2xl"></i>
                </button>
                <NavButton label="Home" onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
                <NavButton label="Free Kundli" onClick={() => { setIsMenuOpen(false); setIsFreeKundliOpen(true); }} />
                <NavButton label="Kundli Matching" onClick={() => { setIsMenuOpen(false); setIsKundliMatchingOpen(true); }} />
                <NavButton label="Compatibility" onClick={() => { setIsMenuOpen(false); setIsCompatibilityOpen(true); }} />
                <NavButton label="Best Astrologers" onClick={() => { setIsMenuOpen(false); setIsBestAstrologersOpen(true); }} />
                <div className="h-px w-24 bg-white/10" />
                <NavButton label="Chat" icon="fa-comments" onClick={() => { setIsMenuOpen(false); setIsChatWithAstrologerOpen(true); }} />
                <NavButton label="Talk" icon="fa-phone" onClick={() => { setIsMenuOpen(false); setIsTalkToAstrologerOpen(true); }} />
                <NavButton label="Blogs" onClick={() => { setIsMenuOpen(false); setActiveInfoPage('blogs'); }} />
              </div>
            </div>

            <main>
              {/* Hero Section */}
              <HeroSection onShopNow={() => {
                const productsSection = document.getElementById('products-section');
                productsSection?.scrollIntoView({ behavior: 'smooth' });
              }} />

              {/* CTA Buttons */}
              <CTAButtons />

              {/* Marquee Banner */}
              <MarqueeBanner />

              {/* Stats Section */}
              <StatsSection />

              <div id="products-section">
                {/* Featured Products */}
                <FeaturedCarousel products={activeProducts.slice(0, 8)} title={t.sections.gemstones.title} />

                {/* Zodiac Collection */}
                <FeaturedCarousel products={activeProducts.slice(1, 7)} title={t.sections.zodiacProducts.title} />
              </div>

              {/* Testimonials */}
              <TestimonialsSlider />

              {/* About Section */}
              <ScrollReveal>
                <AboutSection />
              </ScrollReveal>

              {/* Astrologer Section */}
              <AstrologerSection list={activeAstrologers.slice(0, 4)} />

              {/* Video Section */}
              <VideoSection />

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

            {/* Floating & Overlay Components */}
            <AIChat />
            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} allProducts={activeProducts} />
            <CartDrawer />
          </div>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </CartProvider>
  );
}

export default App;
