import { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import ChatRoom from './ChatRoom';

export default function ChatWithAstrologer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedAstrologer, setSelectedAstrologer] = useState<any | null>(null);

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
      name: 'Kubeir',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      orders: '50k+',
      skills: ['Vedic', 'Tarot', 'Numerology'],
      languages: ['English', 'Hindi'],
      experience: 12,
      price: 45,
      rating: 4.9,
      waitTime: 'Wait ~ 55m',
      category: 'career',
      verified: true,
      celebrity: false
    },
    {
      id: 2,
      name: 'Sohika',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80',
      orders: '25k+',
      skills: ['Tarot', 'Palmistry', 'Life Coach'],
      languages: ['Hindi', 'English', 'Punjabi'],
      experience: 8,
      price: 35,
      rating: 4.7,
      waitTime: 'Available now',
      category: 'love',
      verified: true,
      celebrity: true
    },
    {
      id: 3,
      name: 'Somalakshmi',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
      orders: '30k+',
      skills: ['Vedic', 'Numerology', 'Vastu'],
      languages: ['English', 'Hindi', 'Tamil'],
      experience: 15,
      price: 55,
      rating: 4.8,
      waitTime: 'Wait ~ 30m',
      category: 'marriage',
      verified: true,
      celebrity: false
    },
    {
      id: 4,
      name: 'Arkesh',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      orders: '40k+',
      skills: ['Vedic', 'Face Reading', 'Gemology'],
      languages: ['Hindi', 'English', 'Marathi'],
      experience: 10,
      price: 40,
      rating: 4.6,
      waitTime: 'Wait ~ 45m',
      category: 'finance',
      verified: true,
      celebrity: false
    },
    {
      id: 5,
      name: 'Kevansh',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      orders: '20k+',
      skills: ['Tarot', 'Numerology', 'Life Coach'],
      languages: ['English', 'Hindi', 'Punjabi'],
      experience: 7,
      price: 30,
      rating: 4.5,
      waitTime: 'Wait ~ 25m',
      category: 'education',
      verified: true,
      celebrity: false
    },
    {
      id: 6,
      name: 'Rajamugan',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      orders: '35k+',
      skills: ['Vedic', 'Palmistry', 'Remedies'],
      languages: ['Tamil', 'English', 'Hindi'],
      experience: 18,
      price: 50,
      rating: 4.9,
      waitTime: 'Available now',
      category: 'health',
      verified: true,
      celebrity: true
    }
  ];

  const filteredAstrologers = astrologers.filter(astro => {
    const nameMatch = astro.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = selectedFilter === 'all' || astro.category === selectedFilter;
    return nameMatch && categoryMatch;
  });

  const handleChat = (astrologer: any) => {
    setSelectedAstrologer(astrologer);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[64] overflow-y-auto bg-gray-800">
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-30 w-12 h-12 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all shadow-xl hover:scale-110 active:scale-95"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {selectedAstrologer ? (
        <ChatRoom astrologer={selectedAstrologer} onBack={() => setSelectedAstrologer(null)} />
      ) : (
        <>
          <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <span className="text-5xl md:text-7xl mb-4 animate-float">💬</span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
                {lang === 'hi' ? 'ज्योतिषी से चैट करें' : 'Chat with Astrologer'}
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

            {/* Astrologers List */}
            <div className="space-y-4">
              {filteredAstrologers.map((astrologer) => (
                <div
                  key={astrologer.id}
                  className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 hover:border-amber-600/50 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-600-500/20"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={astrologer.image}
                      alt={astrologer.name}
                      className="w-20 h-20 rounded-full border-2 border-white/20 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-white font-bold text-xl">{astrologer.name}</h3>
                            {astrologer.verified && (
                              <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">
                                {lang === 'hi' ? 'सत्यापित' : 'Verified'}
                              </span>
                            )}
                            {astrologer.celebrity && (
                              <span className="bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full border border-purple-500/30">
                                {lang === 'hi' ? 'सेलिब्रिटी' : 'Celebrity'}
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
                            <span>•</span>
                            <span>{astrologer.experience} yrs exp</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black text-green-400 mb-1">
                            ₹{astrologer.price}
                            <span className="text-sm text-gray-400 font-normal">/min</span>
                          </div>
                          <div className="text-gray-400 text-sm">{astrologer.waitTime}</div>
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
                        <div className="text-gray-400 text-sm">
                          {lang === 'hi' ? 'भाषाएं' : 'Languages'}: {astrologer.languages.join(', ')}
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          onClick={() => handleChat(astrologer)}
                          className="bg-gradient-to-r from-blue-500 to-amber-600-500 hover:from-blue-600 hover:to-amber-600-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-xl hover:shadow-blue-500/30 flex items-center space-x-2"
                        >
                          <span>💬</span>
                          <span>{lang === 'hi' ? 'चैट करें' : 'Chat Now'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}