import { useState, useContext, useEffect } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import { ScrollReveal } from '../components/Animations';

interface TarotCard {
  id: number;
  name: string;
  hiName: string;
  image: string;
  meaning: string;
  hiMeaning: string;
}

const tarotCards: TarotCard[] = [
  { id: 1, name: 'The Magician', hiName: 'जादूगर', image: 'https://images.unsplash.com/photo-1601024445121-e5b82f020549?auto=format&fit=crop&w=300&q=80', meaning: 'Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster.', hiMeaning: 'कौशल, कूटनीति, पता, सूक्ष्मता; बीमारी, दर्द, हानि, आपदा।' },
  { id: 2, name: 'The High Priestess', hiName: 'उच्च पुजारिन', image: 'https://images.unsplash.com/photo-1590484804618-976458319e7e?auto=format&fit=crop&w=300&q=80', meaning: 'Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent.', hiMeaning: 'रहस्य, भविष्य अभी तक अनकहा; वह महिला जो जिज्ञासु की रुचि रखती है।' },
  { id: 3, name: 'The Empress', hiName: 'महारानी', image: 'https://images.unsplash.com/photo-1596431210452-f6745070051e?auto=format&fit=crop&w=300&q=80', meaning: 'Fruitfulness, action, initiative, length of days; the unknown, clandestine.', hiMeaning: 'फलदायीता, कार्रवाई, पहल, दिनों की लंबाई; अज्ञात, गुप्त।' },
  { id: 4, name: 'The Emperor', hiName: 'सम्राट', image: 'https://images.unsplash.com/photo-1576089235284-469b82142270?auto=format&fit=crop&w=300&q=80', meaning: 'Stability, power, protection, realization; a great person; aid, reason, conviction.', hiMeaning: 'स्थिरता, शक्ति, सुरक्षा, प्राप्ति; एक महान व्यक्ति; सहायता, कारण, विश्वास।' },
  { id: 5, name: 'The Hierophant', hiName: 'धर्मगुरु', image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=300&q=80', meaning: 'Marriage, alliance, captivity, servitude; by another account, mercy and goodness.', hiMeaning: 'विवाह, गठबंधन, कैद, सेवा; एक अन्य खाते के अनुसार, दया और अच्छाई।' },
  { id: 6, name: 'The Lovers', hiName: 'प्रेमी', image: 'https://images.unsplash.com/photo-1588612736214-724bc417036d?auto=format&fit=crop&w=300&q=80', meaning: 'Attraction, love, beauty, trials overcome.', hiMeaning: 'आकर्षण, प्रेम, सौंदर्य, परीक्षणों पर विजय।' },
];

export default function TarotPage({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (isShuffling) {
      const timer = setTimeout(() => setIsShuffling(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isShuffling]);

  const handleCardSelect = (index: number) => {
    if (selectedCards.length < 3 && !selectedCards.includes(index) && !isShuffling) {
      setSelectedCards(prev => [...prev, index]);
    }
  };

  const handleReveal = () => {
    if (selectedCards.length === 3) {
      setRevealed(true);
    }
  };

  const handleReset = () => {
    setSelectedCards([]);
    setRevealed(false);
    setIsShuffling(true);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-64 overflow-y-auto ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className={`fixed top-6 right-6 z-100 w-12 h-12 backdrop-blur-md border rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 ${isDark ? 'bg-gray-800/80 border-white/10 text-white hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-gray-100'}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Hero */}
      <div className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590484804618-976458319e7e?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center">
          <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-b from-gray-900/70 via-gray-900/60 to-gray-900' : 'bg-linear-to-b from-white/70 via-white/60 to-white'}`}></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">🃏</span>
          <h1 className={`text-4xl md:text-6xl font-black mb-3 tracking-tight drop-shadow-xl animate-slideInUp ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'मुफ्त टैरो रीडिंग' : 'Free Tarot Reading'}
          </h1>
          <p className={`text-sm md:text-lg max-w-2xl animate-fadeIn ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
            {lang === 'hi' ? 'कार्डों की शक्ति के माध्यम से अपने भविष्य का अनावरण करें' : 'Unveil your future through the power of the cards'}
          </p>
          <div className="w-20 h-1 bg-amber-500 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className={`text-2xl md:text-4xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {!revealed 
                ? (lang === 'hi' ? '3 कार्ड चुनें' : 'Choose 3 Cards') 
                : (lang === 'hi' ? 'आपका टैरो स्प्रेड' : 'Your Tarot Spread')}
            </h2>
            <p className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {!revealed 
                ? (lang === 'hi' ? 'भूत, वर्तमान और भविष्य की अंतर्दृष्टि के लिए कार्ड चुनें' : 'Select cards for Past, Present, and Future insights')
                : (lang === 'hi' ? 'कार्डों के गहरे अर्थ को समझें' : 'Understand the deeper meaning of the cards')}
            </p>
          </div>
        </ScrollReveal>

        {!revealed ? (
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  onClick={() => handleCardSelect(i)}
                  className={`relative w-24 h-40 md:w-32 md:h-52 cursor-pointer transition-all duration-500 transform hover:-translate-y-4 ${selectedCards.includes(i) ? 'scale-105 ring-4 ring-amber-500 rounded-xl' : ''} ${isShuffling ? 'animate-pulse scale-95 opacity-50' : ''}`}
                >
                  <div className={`absolute inset-0 rounded-xl border-2 ${isDark ? 'bg-gray-800 border-amber-500/30' : 'bg-amber-50 border-amber-200'} shadow-xl flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-2 border border-amber-500/20 rounded-lg flex items-center justify-center">
                       <span className="text-3xl opacity-20">✦</span>
                    </div>
                    <div className={`w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent`}></div>
                    {selectedCards.includes(i) && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                        {selectedCards.indexOf(i) + 1}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleReveal}
                disabled={selectedCards.length < 3 || isShuffling}
                className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-xl ${selectedCards.length === 3 && !isShuffling ? 'bg-linear-to-r from-amber-500 to-amber-600 text-white hover:scale-105 active:scale-95 shadow-amber-500/30' : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`}
              >
                {lang === 'hi' ? 'परिणाम दिखाएं' : 'Reveal Spread'}
              </button>
              <button
                onClick={handleReset}
                className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all border ${isDark ? 'border-white/10 text-white hover:bg-gray-800' : 'border-gray-200 text-gray-900 hover:bg-gray-100'}`}
              >
                {lang === 'hi' ? 'रीसेट करें' : 'Reset'}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-12 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selectedCards.map((cardIndex, i) => {
                const card = tarotCards[cardIndex % tarotCards.length];
                const labels = [
                  { en: 'Past', hi: 'अतीत' },
                  { en: 'Present', hi: 'वर्तमान' },
                  { en: 'Future', hi: 'भविष्य' }
                ];
                return (
                  <ScrollReveal key={i} delay={i * 200}>
                    <div className={`flex flex-col items-center p-6 rounded-3xl border ${isDark ? 'bg-gray-800/50 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
                      <span className="text-amber-500 font-black text-xs tracking-widest uppercase mb-4">
                        {lang === 'hi' ? labels[i].hi : labels[i].en}
                      </span>
                      <div className="relative w-48 h-80 mb-6 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-amber-500/20 group">
                         <img src={card.image} alt={card.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                         <div className="absolute bottom-4 left-0 right-0 text-center">
                            <h4 className="text-white font-black text-lg drop-shadow-lg">{lang === 'hi' ? card.hiName : card.name}</h4>
                         </div>
                      </div>
                      <div className="text-center">
                         <p className={`text-sm leading-relaxed italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                           {lang === 'hi' ? card.hiMeaning : card.meaning}
                         </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <div className="flex flex-col items-center space-y-6 pt-8">
               <div className={`max-w-2xl text-center p-8 rounded-3xl border ${isDark ? 'glass border-white/10' : 'bg-amber-50/50 border-amber-200'}`}>
                  <h3 className={`text-xl md:text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {lang === 'hi' ? 'गहरी जानकारी चाहते हैं?' : 'Want a deeper insight?'}
                  </h3>
                  <p className={`text-sm md:text-base mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {lang === 'hi' 
                      ? 'हमारे विशेषज्ञ टैरो रीडर्स आपको इन कार्डों के गहरे अर्थ और आपके जीवन पर उनके प्रभाव को समझने में मदद कर सकते हैं।' 
                      : 'Our expert Tarot Readers can help you understand the deeper meanings of these cards and their impact on your life.'}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={() => window.location.href = '/chat'}
                      className="px-8 py-4 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl shadow-blue-500/20 hover:scale-105 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>💬</span>
                      <span>{lang === 'hi' ? 'रीडर से बात करें' : 'Talk to Reader'}</span>
                    </button>
                    <button 
                      onClick={handleReset}
                      className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all border ${isDark ? 'border-white/10 text-white hover:bg-gray-800' : 'border-gray-200 text-gray-900 hover:bg-gray-100'}`}
                    >
                      {lang === 'hi' ? 'फिर से कोशिश करें' : 'Try Again'}
                    </button>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
