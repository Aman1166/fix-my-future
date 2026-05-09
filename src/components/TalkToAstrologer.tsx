import { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../App';

export default function TalkToAstrologer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: lang === 'hi' ? 'सभी' : 'All' },
    { id: 'love', label: lang === 'hi' ? 'प्रेम' : 'Love' },
    { id: 'education', label: lang === 'hi' ? 'शिक्षा' : 'Education' },
    { id: 'career', label: lang === 'hi' ? 'करियर' : 'Career' },
    { id: 'marriage', label: lang === 'hi' ? 'विवाह' : 'Marriage' },
    { id: 'health', label: lang === 'hi' ? 'स्वास्थ्य' : 'Health' },
    { id: 'wealth', label: lang === 'hi' ? 'धन' : 'Wealth' },
    { id: 'legal', label: lang === 'hi' ? 'कानूनी' : 'Legal' },
    { id: 'finance', label: lang === 'hi' ? 'वित्त' : 'Finance' },
    { id: 'remedies', label: lang === 'hi' ? 'उपाय' : 'Remedies' },
    { id: 'parents', label: lang === 'hi' ? 'माता-पिता' : 'Parents' },
  ];

  const astrologers = [
    {
      id: 1,
      name: 'Chanvi',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      orders: '15k+',
      skills: ['Numerology', 'Tarot'],
      languages: ['Hindi'],
      experience: 13,
      price: 41,
      rating: 4.8,
      waitTime: 'Wait ~ 55m',
      category: 'numerology',
      verified: true
    },
    {
      id: 2,
      name: 'Manasik',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80',
      orders: '8k+',
      skills: ['Tarot'],
      languages: ['English', 'Hindi', 'Marathi'],
      experience: 6,
      price: 32,
      rating: 4.6,
      waitTime: 'Available now',
      category: 'love',
      verified: true
    },
    {
      id: 3,
      name: 'Vrijitesh',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
      orders: '5k+',
      skills: ['Vedic'],
      languages: ['Hindi'],
      experience: 3,
      price: 26,
      rating: 4.4,
      waitTime: 'Wait ~ 30m',
      category: 'career',
      verified: true
    },
    {
      id: 4,
      name: 'Adrikhaya',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      orders: '12k+',
      skills: ['Tarot', 'Numerology', 'Life Coach'],
      languages: ['English', 'Hindi', 'Telugu'],
      experience: 4,
      price: 22,
      rating: 4.5,
      waitTime: 'Wait ~ 45m',
      category: 'marriage',
      verified: true
    },
    {
      id: 5,
      name: 'Trisha',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      orders: '18k+',
      skills: ['Tarot', 'Life Coach'],
      languages: ['English', 'Hindi', 'Gujarati'],
      experience: 9,
      price: 33,
      rating: 4.7,
      waitTime: 'Wait ~ 25m',
      category: 'health',
      verified: true
    },
    {
      id: 6,
      name: 'Yashh',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      orders: '22k+',
      skills: ['Vedic', 'Nadi', 'Numerology'],
      languages: ['English', 'Hindi'],
      experience: 8,
      price: 51,
      rating: 4.9,
      waitTime: 'Available now',
      category: 'finance',
      verified: true
    }
  ];

  const filteredAstrologers = astrologers.filter(astro => {
    const nameMatch = astro.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = selectedFilter === 'all' || astro.category === selectedFilter;
    return nameMatch && categoryMatch;
  });

  const handleCall = (astrologer: any) => {
    alert(`Connecting to ${astrologer.name} for a voice call...`);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[64] overflow-y-auto ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
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
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">📞</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'ज्योतिषी से बात करें' : 'Talk to Astrologer'}
          </h1>
          <div className="w-20 h-1 bg-amber-700 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Search Bar */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'hi' ? 'नाम खोजें...' : 'Search name...'}
              className="w-full bg-gray-700 border border-white/10 rounded-xl px-4 py-3 pl-12 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50"
            />
            <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-8">
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-amber-700 text-gray-800'
                    : 'bg-gray-700 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Astrologers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAstrologers.map((astrologer) => (
            <div
              key={astrologer.id}
              className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 hover:border-green-500/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={astrologer.image}
                  alt={astrologer.name}
                  className="w-16 h-16 rounded-full border-2 border-white/20 group-hover:border-green-400 transition-colors"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-bold text-lg">{astrologer.name}</h3>
                    {astrologer.verified && (
                      <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">
                        {lang === 'hi' ? 'सत्यापित' : 'Verified'}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(astrologer.rating) ? '' : 'text-stone-600'}>
                          ⭐
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
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-xl hover:shadow-green-500/30 flex items-center justify-center space-x-2"
              >
                <span>📞</span>
                <span>{lang === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}