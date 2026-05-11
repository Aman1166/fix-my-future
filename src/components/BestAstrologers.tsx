import { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../App';

export default function BestAstrologers({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [balance] = useState(0);

  const categories = [
    { id: 'all', label: lang === 'hi' ? 'सभी' : 'All' },
    { id: 'vedic', label: lang === 'hi' ? 'वैदिक ज्योतिष' : 'Vedic Astrology' },
    { id: 'nadi', label: lang === 'hi' ? 'नाडी ज्योतिष' : 'Nadi Astrology' },
    { id: 'numerology', label: lang === 'hi' ? 'अंक ज्योतिष' : 'Numerology' },
    { id: 'vastu', label: lang === 'hi' ? 'वास्तु' : 'Vasthu' },
    { id: 'gemology', label: lang === 'hi' ? 'रत्न विज्ञान' : 'Gemology' },
    { id: 'prashana', label: lang === 'hi' ? 'प्रश्न ज्योतिष' : 'Prashana Astrology' },
  ];

  const cities = [
    { id: 'all', label: lang === 'hi' ? 'सभी' : 'All' },
    { id: 'alwar', label: 'Alwar' },
    { id: 'jaipur', label: 'Jaipur' },
    { id: 'delhi', label: 'Delhi' },
    { id: 'gurgaon', label: 'Gurgaon' },
    { id: 'noida', label: 'Noida' },
    { id: 'faridabad', label: 'Faridabad' },
  ];

  const astrologers = [
    {
      id: 1,
      name: 'Tariniya',
      skills: ['Tarot', 'Palmistry', 'Numerology'],
      languages: ['English', 'Hindi', 'Punjabi'],
      experience: 8,
      price: 72,
      rating: 4.8,
      orders: 1250,
      waitTime: '2 mins',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      category: 'numerology',
      city: 'alwar',
      recommended: true
    },
    {
      id: 2,
      name: 'Tanushri',
      skills: ['Tarot', 'Life Coach'],
      languages: ['Hindi', 'Punjabi'],
      experience: 8,
      price: 24,
      rating: 4.6,
      orders: 890,
      waitTime: '5 mins',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80',
      category: 'all',
      city: 'jaipur',
      recommended: false
    },
    {
      id: 3,
      name: 'Mamta1',
      skills: ['Vedic', 'Numerology', 'Life Coach'],
      languages: ['English', 'Hindi', 'Punjabi'],
      experience: 6,
      price: 46,
      rating: 4.7,
      orders: 1450,
      waitTime: '1 min',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
      category: 'vedic',
      city: 'delhi',
      recommended: true
    },
    {
      id: 4,
      name: 'Atri',
      skills: ['Vedic', 'Numerology', 'Vastu'],
      languages: ['English', 'Hindi'],
      experience: 10,
      price: 30,
      rating: 4.9,
      orders: 2100,
      waitTime: 'Available now',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      category: 'vastu',
      city: 'gurgaon',
      recommended: true
    },
    {
      id: 5,
      name: 'Vastu',
      skills: ['Vedic', 'Life Coach', 'Face Reading'],
      languages: ['Hindi'],
      experience: 14,
      price: 40,
      rating: 4.8,
      orders: 3200,
      waitTime: '3 mins',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      category: 'vastu',
      city: 'noida',
      recommended: false
    },
    {
      id: 6,
      name: 'Shreyan',
      skills: ['Vedic', 'Palmistry', 'Face Reading'],
      languages: ['Hindi', 'English', 'Punjabi'],
      experience: 6,
      price: 35,
      rating: 4.5,
      orders: 980,
      waitTime: 'Available now',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      category: 'vedic',
      city: 'faridabad',
      recommended: false
    }
  ];

  const filteredAstrologers = astrologers.filter(astro => {
    const categoryMatch = selectedCategory === 'all' || astro.category === selectedCategory || selectedCategory === 'all';
    const cityMatch = selectedCity === 'all' || astro.city === selectedCity;
    return categoryMatch && cityMatch;
  });

  const handleCall = (astrologer: any) => {
    alert(`Connecting to ${astrologer.name}...`);
  };

  const handleRecharge = () => {
    alert(lang === 'hi' ? 'रिचार्ज फीचर जल्द ही उपलब्ध होगा!' : 'Recharge feature coming soon!');
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-64 overflow-y-auto ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-30 w-12 h-12 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all shadow-xl hover:scale-110 active:scale-95"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-linear-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float text-amber-500"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'अलवर में सर्वश्रेष्ठ ज्योतिषी' : 'Best Astrologer in Alwar'}
          </h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl animate-fadeIn">
            {lang === 'hi'
              ? 'जीवन कभी-कभी भ्रमित करने वाला महसूस हो सकता है चाहे वह करियर, प्रेम या परिवार में समस्याएं हों। ऐसे क्षणों में, दिल्ली के सर्वश्रेष्ठ ज्योतिषी से मार्गदर्शन स्पष्टता ला सकता है। जब नियमित सलाह मदद नहीं करती तो कई लोग ज्योतिष की ओर रुख करते हैं।'
              : 'Life can sometimes feel confusing be it problems in career, love, or family. In such moments, guidance from the best astrologer in Delhi can bring clarity. Many people turn to astrology when regular advice doesn\'t help.'}
          </p>
          <div className="w-20 h-1 bg-amber-700 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Balance Section */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">
                {lang === 'hi' ? 'बैलेंस' : 'Balance'}
              </h3>
              <p className="text-2xl font-black text-green-400">₹{balance}</p>
              <p className="text-gray-400 text-sm">
                {lang === 'hi' ? 'उपलब्ध बैलेंस' : 'Available Balance'}
              </p>
            </div>
            <button
              onClick={handleRecharge}
              className="bg-linear-to-r from-amber-500 to-amber-600-500 hover:from-amber-600 hover:to-amber-600-600 text-gray-800 font-bold py-3 px-6 rounded-xl transition-all shadow-xl hover:shadow-amber-500/30"
            >
              {lang === 'hi' ? 'रिचार्ज करें' : 'Recharge'}
            </button>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
          {lang === 'hi' ? 'अलवर के सर्वश्रेष्ठ ज्योतिषियों से बात करें' : 'Talk to the Best Astrologers in ALWAR'}
        </h2>

        {/* Filters */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 font-bold mb-2">
                {lang === 'hi' ? 'श्रेणीवार' : 'Category wise'}
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-amber-700 text-gray-800'
                        : 'bg-gray-700 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-300 font-bold mb-2">
                {lang === 'hi' ? 'भारतीय (शहरवार)' : 'Indian (City-wise)'}
              </label>
              <div className="flex flex-wrap gap-2">
                {cities.map(city => (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCity === city.id
                        ? 'bg-amber-700 text-gray-800'
                        : 'bg-gray-700 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {city.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Astrologers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAstrologers.map((astrologer) => (
            <div
              key={astrologer.id}
              className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 hover:border-amber-600/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-600-500/20 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={astrologer.image}
                  alt={astrologer.name}
                  className="w-16 h-16 rounded-full border-2 border-white/20 group-hover:border-amber-500 transition-colors"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-bold text-lg">{astrologer.name}</h3>
                    {astrologer.recommended && (
                      <span className="bg-amber-700/20 text-amber-500 text-xs px-2 py-1 rounded-full border border-amber-500/30">
                        {lang === 'hi' ? 'अनुशंसित' : 'Recommended'}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(astrologer.rating) ? 'text-yellow-400' : 'text-stone-600'}>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      ))}
                    </div>
                    <span>({astrologer.rating})</span>
                    <span>•</span>
                    <span>{astrologer.orders} orders</span>
                  </div>
                  <div className="text-gray-400 text-xs mb-2">
                    {astrologer.waitTime}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {astrologer.skills.map((skill: string, index: number) => (
                    <span key={index} className="bg-amber-700/20 text-amber-500 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-gray-400 text-sm mb-2">
                  {lang === 'hi' ? 'भाषाएं' : 'Languages'}: {astrologer.languages.join(', ')}
                </div>
                <div className="text-gray-400 text-sm">
                  {lang === 'hi' ? 'अनुभव' : 'Experience'}: {astrologer.experience} {lang === 'hi' ? 'साल' : 'years'}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-black text-green-400">
                  ₹{astrologer.price}
                  <span className="text-sm text-gray-400 font-normal">/min</span>
                </div>
              </div>

              <button
                onClick={() => handleCall(astrologer)}
                className="w-full bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-xl hover:shadow-green-500/30 flex items-center justify-center space-x-2"
              >
                <span><i className="fa-solid fa-phone"></i></span>
                <span>{lang === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}