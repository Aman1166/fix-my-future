import { useState, useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import { ScrollReveal } from '../components/Animations';

interface KundliResultPageProps {
  isOpen: boolean;
  onClose: () => void;
  formData: any;
}

export default function KundliResultPage({
  isOpen,
  onClose,
  formData,
}: KundliResultPageProps) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('Basic');

  if (!isOpen) return null;

  const basicDetails = [
    { label: lang === 'hi' ? 'नाम' : 'Name', value: formData.name || 'Aman' },
    { label: lang === 'hi' ? 'तारीख' : 'Date', value: formData.birthDate || '01/01/1990' },
    { label: lang === 'hi' ? 'समय' : 'Time', value: formData.birthTime || '03:22 PM' },
    { label: lang === 'hi' ? 'स्थान' : 'Place', value: formData.birthPlace || 'Alwar, Rajasthan, India' },
    { label: lang === 'hi' ? 'अक्षांश' : 'Latitude', value: '27.56' },
    { label: lang === 'hi' ? 'देशांतर' : 'Longitude', value: '76.61' },
    { label: lang === 'hi' ? 'समयक्षेत्र' : 'Timezone', value: 'GMT+5.5' },
    { label: lang === 'hi' ? 'सूर्योदय' : 'Sunrise', value: '7:14:15' },
    { label: lang === 'hi' ? 'सूर्यास्त' : 'Sunset', value: '17:40:3' },
    { label: lang === 'hi' ? 'अयानांश' : 'Ayanamsha', value: '23.71742' },
  ];

  const avakhadaDetails = [
    { label: lang === 'hi' ? 'वर्ण' : 'Varna', value: 'Vaishya' },
    { label: lang === 'hi' ? 'वश्य' : 'Vashya', value: 'Nara' },
    { label: lang === 'hi' ? 'योनि' : 'Yoni', value: 'Ashva' },
    { label: lang === 'hi' ? 'गण' : 'Gan', value: 'Rakshasa' },
    { label: lang === 'hi' ? 'नाड़ी' : 'Nadi', value: 'Adhya' },
    { label: lang === 'hi' ? 'राशि' : 'Sign', value: 'Aquarius' },
    { label: lang === 'hi' ? 'राशि स्वामी' : 'Sign Lord', value: 'Saturn' },
    { label: lang === 'hi' ? 'नक्षत्र-चरण' : 'Nakshatra-Charan', value: 'Shatabhisha' },
    { label: lang === 'hi' ? 'योग' : 'Yog', value: 'Siddhi' },
    { label: lang === 'hi' ? 'करण' : 'Karan', value: 'Bav' },
    { label: lang === 'hi' ? 'तिथि' : 'Tithi', value: 'ShuklaPanchami' },
    { label: lang === 'hi' ? 'युंजा' : 'Yunja', value: 'Antya' },
    { label: lang === 'hi' ? 'तत्व' : 'Tatva', value: 'Air' },
    { label: lang === 'hi' ? 'नाम अक्षर' : 'Name alphabet', value: 'Go' },
    { label: lang === 'hi' ? 'पाया' : 'Paya', value: 'Copper' },
  ];

  const panchangDetails = [
    { label: lang === 'hi' ? 'तिथि' : 'Tithi', value: 'ShuklaPanchami' },
    { label: lang === 'hi' ? 'करण' : 'Karan', value: 'Bav' },
    { label: lang === 'hi' ? 'योग' : 'Yog', value: 'Siddhi' },
    { label: lang === 'hi' ? 'नक्षत्र' : 'Nakshatra', value: 'Shatabhisha' },
  ];

  const planetDetails = [
    { planet: 'Sun', sign: 'Leo', signLord: 'Sun', nakshatra: 'Magha', nakLord: 'Ketu', degree: "00' 25' 12\"", retro: 'No', house: 1 },
    { planet: 'Moon', sign: 'Cancer', signLord: 'Moon', nakshatra: 'Pushya', nakLord: 'Saturn', degree: "12' 45' 30\"", retro: 'No', house: 12 },
    { planet: 'Mars', sign: 'Aries', signLord: 'Mars', nakshatra: 'Ashwini', nakLord: 'Ketu', degree: "05' 10' 15\"", retro: 'No', house: 9 },
    { planet: 'Mercury', sign: 'Virgo', signLord: 'Mercury', nakshatra: 'Hasta', nakLord: 'Moon', degree: "22' 15' 40\"", retro: 'No', house: 2 },
    { planet: 'Jupiter', sign: 'Sagittarius', signLord: 'Jupiter', nakshatra: 'Moola', nakLord: 'Ketu', degree: "15' 30' 00\"", retro: 'No', house: 5 },
    { planet: 'Venus', sign: 'Libra', signLord: 'Venus', nakshatra: 'Chitra', nakLord: 'Mars', degree: "08' 20' 10\"", retro: 'No', house: 3 },
    { planet: 'Saturn', sign: 'Capricorn', signLord: 'Saturn', nakshatra: 'Shravana', nakLord: 'Moon', degree: "20' 40' 55\"", retro: 'No', house: 6 },
    { planet: 'Rahu', sign: 'Taurus', signLord: 'Venus', nakshatra: 'Rohini', nakLord: 'Moon', degree: "10' 10' 10\"", retro: 'No', house: 10 },
    { planet: 'Ketu', sign: 'Scorpio', signLord: 'Mars', nakshatra: 'Anuradha', nakLord: 'Saturn', degree: "10' 10' 10\"", retro: 'No', house: 4 },
  ];

  const dashaDetails = [
    { planet: 'Ketu', start: '01-Jan-2020', end: '01-Jan-2027' },
    { planet: 'Venus', start: '01-Jan-2027', end: '01-Jan-2047' },
    { planet: 'Sun', start: '01-Jan-2047', end: '01-Jan-2053' },
    { planet: 'Moon', start: '01-Jan-2053', end: '01-Jan-2063' },
    { planet: 'Mars', start: '01-Jan-2063', end: '01-Jan-2070' },
  ];

  const renderBasicTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Basic Details Table */}
      <ScrollReveal>
        <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className="bg-amber-500/5 py-4 px-6 border-b border-white/5">
            <h3 className={`font-black text-center uppercase tracking-widest text-sm ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
               {lang === 'hi' ? 'बुनियादी विवरण' : 'Basic Details'}
            </h3>
          </div>
          <div className="divide-y divide-white/5">
            {basicDetails.map((item, i) => (
              <div key={i} className="flex justify-between p-4 hover:bg-white/5 transition-colors">
                <span className={`text-sm font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</span>
                <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</span>
              </div>
            ))}
          </div>

          <div className="bg-amber-500/5 py-4 px-6 border-y border-white/5 mt-4">
            <h3 className={`font-black text-center uppercase tracking-widest text-sm ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
               {lang === 'hi' ? 'पंचांग विवरण' : 'Panchang Details'}
            </h3>
          </div>
          <div className="divide-y divide-white/5">
            {panchangDetails.map((item, i) => (
              <div key={i} className="flex justify-between p-4 hover:bg-white/5 transition-colors">
                <span className={`text-sm font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</span>
                <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Avakhada Details Table */}
      <ScrollReveal delay={100}>
        <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className="bg-amber-500/5 py-4 px-6 border-b border-white/5">
            <h3 className={`font-black text-center uppercase tracking-widest text-sm ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
               {lang === 'hi' ? 'अवखड़ा विवरण' : 'Avakhada Details'}
            </h3>
          </div>
          <div className="divide-y divide-white/5">
            {avakhadaDetails.map((item, i) => (
              <div key={i} className="flex justify-between p-4 hover:bg-white/5 transition-colors">
                <span className={`text-sm font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</span>
                <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );

  const KundliChart = ({ title }: { title: string }) => (
    <div className={`p-4 rounded-3xl border flex flex-col items-center ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-gray-100 shadow-sm'}`}>
       <h4 className={`text-xs font-black uppercase tracking-widest mb-4 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>{title}</h4>
       <div className="relative w-full aspect-square max-w-[300px]">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-500/50 fill-none">
             <rect x="5" y="5" width="90" height="90" strokeWidth="1" />
             <path d="M5 5 L95 95 M95 5 L5 95" strokeWidth="1" />
             <path d="M50 5 L95 50 L50 95 L5 50 Z" strokeWidth="1" />
             <text x="48" y="25" className="fill-amber-500 text-[6px] font-bold">Lagna</text>
             <text x="25" y="48" className="fill-amber-500 text-[6px] font-bold">Su</text>
             <text x="70" y="48" className="fill-amber-500 text-[6px] font-bold">Mo</text>
             <text x="48" y="75" className="fill-amber-500 text-[6px] font-bold">Ma</text>
          </svg>
       </div>
    </div>
  );

  const renderKundliTab = () => (
    <div className="space-y-8 mb-12">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <KundliChart title="Lagna / Ascendant / Basic birth chart" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <KundliChart title="Navamsha" />
          </ScrollReveal>
       </div>

       {/* Planet Details */}
       <ScrollReveal>
          <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
             <div className="bg-amber-500/5 py-4 px-6 border-b border-white/5">
                <h3 className={`font-black text-center uppercase tracking-widest text-sm ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                   {lang === 'hi' ? 'ग्रह विवरण' : 'Planet Details'}
                </h3>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className={`border-b ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                         {['Planet', 'Sign', 'Sign Lord', 'Nakshatra', 'Nak Lord', 'Degree', 'Retro', 'House'].map(h => (
                           <th key={h} className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500">{h}</th>
                         ))}
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                      {planetDetails.map((p, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                           <td className={`p-4 text-sm font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{p.planet}</td>
                           <td className="p-4 text-sm text-gray-400">{p.sign}</td>
                           <td className="p-4 text-sm text-gray-400">{p.signLord}</td>
                           <td className="p-4 text-sm text-gray-400">{p.nakshatra}</td>
                           <td className="p-4 text-sm text-gray-400">{p.nakLord}</td>
                           <td className="p-4 text-xs text-gray-400 font-mono">{p.degree}</td>
                           <td className="p-4 text-sm text-gray-400">{p.retro}</td>
                           <td className="p-4 text-sm font-bold text-amber-500">{p.house}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
       </ScrollReveal>

       {/* Dasha Details */}
       <ScrollReveal>
          <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
             <div className="bg-amber-500/5 py-4 px-6 border-b border-white/5">
                <h3 className={`font-black text-center uppercase tracking-widest text-sm ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                   {lang === 'hi' ? 'विंशोत्तरी दशा' : 'Vimshottari Dasha'}
                </h3>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className={`border-b ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                         <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500">Planet</th>
                         <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500">Start Date</th>
                         <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500">End Date</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                      {dashaDetails.map((d, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                           <td className={`p-4 text-sm font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{d.planet}</td>
                           <td className="p-4 text-sm text-gray-400">{d.start}</td>
                           <td className="p-4 text-sm text-gray-400">{d.end}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
       </ScrollReveal>
    </div>
  );

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

      {/* Header Breadcrumb */}
      <div className={`w-full py-3 px-4 md:px-8 border-b ${isDark ? 'bg-gray-800 border-white/5' : 'bg-white border-gray-100'}`}>
         <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400">
            <span>{lang === 'hi' ? 'मुफ्त कुंडली' : 'Free Kundli'}</span>
            <span>/</span>
            <span className="text-amber-500">{lang === 'hi' ? 'कुंडली विवरण' : 'Kundli Details'}</span>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide space-x-2">
           {['Basic', 'Kundli', 'KP', 'Ashtakvarga', 'Charts', 'Dasha', 'Free Report'].map((tab) => (
             <button 
               key={tab} 
               onClick={() => setActiveTab(tab)}
               className={`px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap ${activeTab === tab ? 'bg-amber-500 text-white' : (isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100 shadow-sm')}`}
             >
               {tab}
             </button>
           ))}
        </div>

        {activeTab === 'Basic' ? renderBasicTab() : activeTab === 'Kundli' ? renderKundliTab() : renderBasicTab()}

        {/* CTA Section */}
        <ScrollReveal>
          <div className={`rounded-3xl p-8 text-center mb-12 ${isDark ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-amber-500 border border-amber-600'}`}>
            <h3 className={`text-lg md:text-xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
               {lang === 'hi' ? 'अधिक व्यक्तिगत भविष्यवाणियों के लिए ज्योतिषी से जुड़ें' : 'Connect with an Astrologer on Call or Chat for more personalised detailed predictions.'}
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/talk'}
                className="px-8 py-3 bg-white text-gray-900 rounded-full font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-xl"
              >
                {lang === 'hi' ? 'ज्योतिषी से बात करें' : 'Talk to Astrologer'}
              </button>
              <button 
                onClick={() => window.location.href = '/chat'}
                className="px-8 py-3 bg-white text-gray-900 rounded-full font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-xl"
              >
                {lang === 'hi' ? 'ज्योतिषी से चैट करें' : 'Chat with Astrologer'}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Download Section */}
        <ScrollReveal>
           <div className={`rounded-3xl p-8 relative overflow-hidden mb-12 ${isDark ? 'bg-gray-800' : 'bg-gray-900'}`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 flex items-center justify-center bg-amber-500 rounded-2xl rotate-12 shadow-2xl">
                       <span className="text-4xl">📄</span>
                    </div>
                    <div className="text-left">
                       <h3 className="text-2xl font-black text-white mb-2">
                          {lang === 'hi' ? 'कुंडली रिपोर्ट डाउनलोड करें' : 'Download & share your kundli report'}
                       </h3>
                       <p className="text-gray-400 text-sm">
                          {lang === 'hi' ? 'अपने मोबाइल पर विस्तृत पीडीएफ प्राप्त करें' : 'Get detailed PDF analysis on your mobile'}
                       </p>
                    </div>
                 </div>
                 <button className="px-10 py-4 bg-amber-500 text-gray-900 rounded-full font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-2xl shadow-amber-500/20">
                    {lang === 'hi' ? 'कुंडली पीडीएफ डाउनलोड करें' : 'Download Kundli PDF'}
                 </button>
              </div>
           </div>
        </ScrollReveal>

        {/* Today's Horoscope Section */}
        <div className="mb-16">
           <ScrollReveal>
              <h2 className={`text-2xl md:text-3xl font-black text-center mb-12 uppercase tracking-widest ${isDark ? 'text-white' : 'text-gray-900'}`}>
                 {lang === 'hi' ? 'आज का राशिफल' : "Today's Horoscope"}
              </h2>
           </ScrollReveal>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Virgo', date: 'AUG 23 - SEP 22', icon: '♍' },
                { name: 'Libra', date: 'SEP 23 - OCT 23', icon: '♎' },
                { name: 'Scorpio', date: 'OCT 24 - NOV 21', icon: '♏' },
                { name: 'Sagittarius', date: 'NOV 22 - DEC 21', icon: '♐' },
              ].map((sign, i) => (
                <ScrollReveal key={sign.name} delay={i * 100}>
                   <div className={`p-6 rounded-3xl text-center border transition-all hover:shadow-2xl hover:-translate-y-2 group ${isDark ? 'bg-gray-800 border-white/5 hover:border-amber-500/30' : 'bg-white border-gray-100 hover:border-amber-500/30 shadow-sm'}`}>
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                         {sign.icon}
                      </div>
                      <h4 className={`font-black mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{sign.name}</h4>
                      <p className="text-[10px] font-bold text-gray-400 tracking-widest">{sign.date}</p>
                   </div>
                </ScrollReveal>
              ))}
           </div>
        </div>

        {/* Complimentary Services */}
        <div>
           <ScrollReveal>
              <h2 className={`text-2xl md:text-3xl font-black text-center mb-12 uppercase tracking-widest ${isDark ? 'text-white' : 'text-gray-900'}`}>
                 {lang === 'hi' ? 'निःशुल्क ज्योतिष सेवाएं' : 'Complimentary Astrology Services'}
              </h2>
           </ScrollReveal>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Daily Horoscope', desc: 'Read your daily horoscope prediction.', icon: '☀️' },
                { title: 'Free Kundli', desc: 'Generate your free online birth chart.', icon: '📊' },
                { title: 'Compatibility', desc: 'Check love compatibility with your partner.', icon: '❤️' },
                { title: 'Shubh Muhurat 2026', desc: 'Find the best time for your big events.', icon: '🪔' },
              ].map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 100}>
                   <div className={`p-8 rounded-3xl border text-center transition-all hover:scale-105 ${isDark ? 'bg-gray-800/50 border-white/5 hover:border-amber-500/30' : 'bg-white border-gray-100 shadow-sm hover:border-amber-500/30'}`}>
                      <div className="w-16 h-16 mx-auto mb-6 bg-amber-500/10 rounded-2xl flex items-center justify-center text-3xl">
                         {service.icon}
                      </div>
                      <h4 className={`font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{service.title}</h4>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.desc}</p>
                   </div>
                </ScrollReveal>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
