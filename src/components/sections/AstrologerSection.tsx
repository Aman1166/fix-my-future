import { useState, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { astrologersHi } from '../../translations';
import { useAstrologers } from '../../hooks/useAstrologers';
import { Astrologer } from '../../services/astrologerService';

export default function AstrologerSection() {
  const { t, lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const { astrologers: baseAstrologers, loading, error } = useAstrologers();
  const [selectedAstro, setSelectedAstro] = useState<Astrologer | null>(null);
  const [walletBalance, setWalletBalance] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState(100);
  const [activeTab, setActiveTab] = useState('all');

  const getLocalizedAstrologers = () => {
    if (lang === 'en') return baseAstrologers;
    
    return baseAstrologers.map(astro => {
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
      {/* Background Elements */}
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

        {/* Filters */}
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

        {/* Wallet Display */}
        <div className={`max-w-4xl mx-auto p-5 rounded-2xl shadow-2xl mb-12 flex flex-wrap items-center justify-between border relative group overflow-hidden ${isDark ? 'bg-linear-to-r from-gray-800/80 to-gray-950/50 backdrop-blur-md border-white/10' : 'bg-white border-gray-200'}`}>
          <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 to-transparent rounded-2xl pointer-events-none"></div>
          <div className="flex items-center space-x-4 mb-3 sm:mb-0 relative z-10">
            <div className="w-14 h-14 bg-linear-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-3xl shadow-xl shadow-amber-500/20 group-hover:scale-105 transition-transform text-gray-800">
              <span className="material-symbols-outlined">account_balance_wallet</span>
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
            <span className="text-lg"><span className="material-symbols-outlined">add</span></span>
            <span>{t.astroMeta.rechargeText}</span>
          </button>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Fetching Experts...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-red-500/10 rounded-2xl border border-red-500/20">
            <p className="text-red-400 font-bold mb-4">{error}</p>
            <button onClick={() => window.location.reload()} className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold">Retry</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredAstrologers.map((astro) => (
              <div 
                key={astro.id} 
                className={`bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border overflow-hidden flex flex-col group relative ${astro.online && !astro.busy ? 'border-green-500/20 hover:border-green-500/40' : 'border-gray-800 hover:border-gray-700'}`}
              >
                <div className={`absolute inset-0 bg-linear-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 ${astro.online && !astro.busy ? 'from-green-500/5 to-transparent' : 'from-amber-500/5 to-transparent'}`}></div>

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
                    <h3 className="font-black text-white text-lg tracking-tight truncate group-hover:text-amber-500 transition-colors">{astro.name}</h3>
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${astro.busy ? 'bg-amber-600/20 text-orange-400 border border-orange-500/20' : 'bg-green-500/20 text-green-400 border border-green-500/20'}`}>
                      {astro.busy ? t.astroMeta.busyText : t.astroMeta.onlineBadge}
                    </span>
                    <p className="text-xs text-gray-400 font-medium mt-2 line-clamp-2 h-8 leading-snug">{astro.expertise.join(', ')}</p>
                    
                    <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-4 text-[11px] text-gray-300 border-t border-white/5 pt-3">
                      <div className="flex items-center font-medium">🎓 <strong>{astro.experience}</strong> {t.astroMeta.exp}</div>
                      <div className="flex items-center font-medium">💬 <strong>{astro.consultations.toLocaleString()}</strong> {t.astroMeta.consults}</div>
                      <div className="flex items-center col-span-2 font-medium truncate">🗣️ {astro.languages.join(', ')}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/80 border-t border-white/5 p-4 flex items-center justify-between relative z-10 backdrop-blur-sm">
                  <div>
                    <span className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-amber-600-400 tracking-tight">₹{astro.price}</span>
                    <span className="text-gray-400 text-[10px] font-bold">/{lang === 'hi' ? 'मिनट' : 'min'}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button onClick={() => handleConsultation(astro)} disabled={!astro.online || astro.busy} className={`px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg flex items-center space-x-1 transition-all ${!astro.online ? 'bg-gray-700 text-stone-600 cursor-not-allowed border border-gray-700' : astro.busy ? 'bg-amber-600/20 text-orange-400 border border-orange-500/30 hover:bg-amber-600/30' : 'bg-gray-700 border border-gray-700 text-white hover:bg-slate-700'}`}>
                      <span>💬</span> <span>{t.astroMeta.chatBtn}</span>
                    </button>
                    <button onClick={() => handleConsultation(astro)} disabled={!astro.online} className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-xl flex items-center space-x-1.5 transition-all active:scale-95 ${!astro.online ? 'bg-gray-700 text-stone-600 cursor-not-allowed border border-gray-700' : astro.busy ? 'bg-indigo-900 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-800 shadow-indigo-500/10' : 'bg-linear-to-r from-amber-500 to-amber-600-500 text-gray-800 hover:from-amber-400 hover:to-amber-600-400 shadow-amber-500/10 hover:shadow-amber-500/30'}`}>
                      <span>📞</span> <span>{astro.busy ? (lang === 'hi' ? 'कतार' : 'Queue') : t.astroMeta.callBtn}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <div className={`fixed inset-0 ${isDark ? 'bg-gray-800/80' : 'bg-gray-900/40'} backdrop-blur-sm`} onClick={() => setShowPaymentModal(false)}></div>
            <div className={`relative w-full max-w-md rounded-2xl shadow-2xl border overflow-hidden animate-fadeIn ${isDark ? 'bg-gray-800 border-white/10 text-white' : 'bg-white border-gray-100 text-gray-900'}`}>
              <div className={`p-5 text-center relative border-b ${isDark ? 'bg-linear-to-r from-gray-800 via-gray-950 to-gray-900 border-white/10' : 'bg-gray-50 border-gray-100'}`}>
                <button onClick={() => setShowPaymentModal(false)} className={`absolute right-4 top-4 transition-colors text-xl font-bold ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>✕</button>
                <div className="text-amber-600 text-xs font-bold tracking-[0.2em] mb-1">✦ ASTRO CONSULTATION ✦</div>
                <h3 className={`text-xl font-black ${isDark ? 'bg-clip-text text-transparent bg-linear-to-r from-white via-stone-200 to-amber-200' : 'text-emerald-900'}`}>{selectedAstro ? t.astroMeta.initConsult : t.astroMeta.rechargeTitle}</h3>
              </div>
              <div className="p-6">
                {selectedAstro && walletBalance >= selectedAstro.price ? (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl animate-float">📞</div>
                    <h4 className={`text-xl font-black mb-2 tracking-tight ${isDark ? 'text-white' : 'text-emerald-900'}`}>{t.astroMeta.connecting} {selectedAstro.name}...</h4>
                    <button onClick={() => { setWalletBalance(prev => prev - selectedAstro.price * 5); setShowPaymentModal(false); }} className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white font-black py-3.5 rounded-xl uppercase tracking-widest">📞 {t.astroMeta.startCall}</button>
                  </div>
                ) : (
                  <div>
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {[100, 250, 500, 1000, 2000, 5000].map((amt) => (
                        <button key={amt} onClick={() => setRechargeAmount(amt)} className={`p-3 rounded-xl border-2 font-black transition-all ${rechargeAmount === amt ? 'border-amber-600 bg-amber-600/10 text-amber-600' : 'border-gray-200 text-gray-500'}`}>₹{amt}</button>
                      ))}
                    </div>
                    <button onClick={() => { setWalletBalance(prev => prev + (rechargeAmount >= 500 ? rechargeAmount * 2 : rechargeAmount)); setShowPaymentModal(false); }} className="w-full bg-linear-to-r from-amber-600 to-amber-700 text-white font-black py-4 rounded-xl uppercase tracking-widest">💳 {t.astroMeta.rechargeBtn}</button>
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
