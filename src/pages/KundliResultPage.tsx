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
  const [chartStyle, setChartStyle] = useState('North Indian');
  const [dashaType, setDashaType] = useState('Vimshottari');
  const [reportTab, setReportTab] = useState('General');
  const [reportSubTab, setReportSubTab] = useState('General');

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

  const kpRulingPlanets = [
    { label: 'Day', value: 'Monday' },
    { label: 'Sign Lord', value: 'Moon' },
    { label: 'Star Lord', value: 'Rahu' },
    { label: 'Sub Lord', value: 'Saturn' },
  ];

  const kpPlanets = [
    { planet: 'Sun', cusp: 10, sign: 'Sagittarius', signLord: 'Ju', starLord: 'Ve', subLord: 'Ra' },
    { planet: 'Moon', cusp: 12, sign: 'Aquarius', signLord: 'Sa', starLord: 'Ra', subLord: 'Ra' },
    { planet: 'Mars', cusp: 3, sign: 'Gemini', signLord: 'Me', starLord: 'Ra', subLord: 'Ju' },
    { planet: 'Mercury', cusp: 5, sign: 'Leo', signLord: 'Su', starLord: 'Me', subLord: 'Ju' },
    { planet: 'Jupiter', cusp: 7, sign: 'Libra', signLord: 'Ve', starLord: 'Ma', subLord: 'Me' },
  ];

  const kpCusps = [
    { cusp: 1, degree: "15' 45'", sign: 'Pisces', signLord: 'Ju', starLord: 'Sa', subLord: 'Me' },
    { cusp: 2, degree: "12' 30'", sign: 'Aries', signLord: 'Ma', starLord: 'Ke', subLord: 'Ju' },
    { cusp: 3, degree: "10' 15'", sign: 'Taurus', signLord: 'Ve', starLord: 'Mo', subLord: 'Sa' },
    { cusp: 4, degree: "08' 20'", sign: 'Gemini', signLord: 'Me', starLord: 'Ra', subLord: 'Ke' },
    { cusp: 5, degree: "05' 10'", sign: 'Cancer', signLord: 'Mo', starLord: 'Ju', subLord: 'Me' },
  ];

  const renderBasicTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Basic Details Table */}
      <ScrollReveal>
        <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className="bg-gray-50/50 py-5 px-8 border-b border-gray-100/10">
            <h3 className={`font-bold text-center text-lg ${isDark ? 'text-amber-500' : 'text-gray-900'}`}>
               {lang === 'hi' ? 'बुनियादी विवरण' : 'Basic Details'}
            </h3>
          </div>
          <div className="divide-y divide-gray-100/10">
            {basicDetails.map((item, i) => (
              <div key={i} className="flex justify-between p-5 transition-colors">
                <span className={`text-base font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</span>
                <span className={`text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-50/50 py-5 px-8 border-y border-gray-100/10 mt-6">
            <h3 className={`font-bold text-center text-lg ${isDark ? 'text-amber-500' : 'text-gray-900'}`}>
               {lang === 'hi' ? 'पंचांग विवरण' : 'Panchang Details'}
            </h3>
          </div>
          <div className="divide-y divide-gray-100/10">
            {panchangDetails.map((item, i) => (
              <div key={i} className="flex justify-between p-5 transition-colors">
                <span className={`text-base font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</span>
                <span className={`text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Avakhada Details Table */}
      <ScrollReveal delay={100}>
        <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className="bg-gray-50/50 py-5 px-8 border-b border-gray-100/10">
            <h3 className={`font-bold text-center text-lg ${isDark ? 'text-amber-500' : 'text-gray-900'}`}>
               {lang === 'hi' ? 'अवखड़ा विवरण' : 'Avakhada Details'}
            </h3>
          </div>
          <div className="divide-y divide-gray-100/10">
            {avakhadaDetails.map((item, i) => (
              <div key={i} className="flex justify-between p-5 transition-colors">
                <span className={`text-base font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</span>
                <span className={`text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );

  const NorthIndianChart = ({ title }: { title: string }) => (
    <ScrollReveal>
      <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg flex flex-col items-center ${isDark ? 'bg-gray-900 border-white/5' : 'bg-white border-gray-100'}`}>
        <h4 className={`text-sm font-semibold text-center leading-relaxed wrap-break-word mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{title}</h4>
        
        <div className="relative w-full aspect-square max-w-[400px] bg-[#FFF9E6] border-4 border-[#C4A462] rounded-xl overflow-hidden">
          {/* SVG Grid Lines ONLY */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full stroke-[#C4A462] fill-none" preserveAspectRatio="none">
             <path d="M0 0 L100 100 M100 0 L0 100" strokeWidth="1" />
             <path d="M50 0 L100 50 L50 100 L0 50 Z" strokeWidth="1" />
          </svg>

          {/* House Numbers - Clean Typography */}
          <div className="absolute inset-0 pointer-events-none">
             <span className="absolute top-[18%] left-[50%] -translate-x-1/2 text-xl font-bold text-[#A32A2A]/40 font-serif">1</span>
             <span className="absolute top-[8%] left-[25%] -translate-x-1/2 text-lg font-bold text-[#A32A2A]/30 font-serif">2</span>
             <span className="absolute top-[25%] left-[8%] -translate-x-1/2 text-lg font-bold text-[#A32A2A]/30 font-serif">3</span>
             <span className="absolute top-[50%] left-[25%] -translate-x-1/2 text-xl font-bold text-[#A32A2A]/40 font-serif">4</span>
             <span className="absolute top-[75%] left-[8%] -translate-x-1/2 text-lg font-bold text-[#A32A2A]/30 font-serif">5</span>
             <span className="absolute top-[92%] left-[25%] -translate-x-1/2 text-lg font-bold text-[#A32A2A]/30 font-serif">6</span>
             <span className="absolute top-[82%] left-[50%] -translate-x-1/2 text-xl font-bold text-[#A32A2A]/40 font-serif">7</span>
             <span className="absolute top-[92%] left-[75%] -translate-x-1/2 text-lg font-bold text-[#A32A2A]/30 font-serif">8</span>
             <span className="absolute top-[75%] left-[92%] -translate-x-1/2 text-lg font-bold text-[#A32A2A]/30 font-serif">9</span>
             <span className="absolute top-[50%] left-[75%] -translate-x-1/2 text-xl font-bold text-[#A32A2A]/40 font-serif">10</span>
             <span className="absolute top-[25%] left-[92%] -translate-x-1/2 text-lg font-bold text-[#A32A2A]/30 font-serif">11</span>
             <span className="absolute top-[8%] left-[75%] -translate-x-1/2 text-lg font-bold text-[#A32A2A]/30 font-serif">12</span>
          </div>

          {/* Planet Labels - Minimal & Readable */}
          <div className="absolute inset-0">
             {/* House 1 */}
             <div className="absolute top-[35%] left-[50%] -translate-x-1/2 flex flex-col items-center">
                <span className="text-lg font-bold text-purple-600">Asc</span>
                <span className="text-[10px] font-semibold text-purple-600/70">15.85°</span>
             </div>

             {/* House 2 */}
             <div className="absolute top-[18%] left-[25%] -translate-x-1/2 flex flex-col items-center">
                <span className="text-base font-bold text-amber-600">Ju®</span>
                <span className="text-[9px] font-semibold text-amber-600/70">11.44°</span>
             </div>

             {/* House 3 */}
             <div className="absolute top-[35%] left-[12%] -translate-x-1/2 flex flex-col items-center">
                <span className="text-base font-bold text-gray-700">Ke</span>
                <span className="text-[9px] font-semibold text-gray-700/70">24.72°</span>
             </div>

             {/* House 7 */}
             <div className="absolute bottom-[30%] left-[50%] -translate-x-1/2 flex flex-col items-center">
                <span className="text-base font-bold text-blue-700">Mo</span>
                <span className="text-[9px] font-semibold text-blue-700/70">8.35°</span>
             </div>

             {/* House 9 */}
             <div className="absolute bottom-[18%] left-[88%] -translate-x-1/2 flex flex-col items-center">
                <span className="text-base font-bold text-red-700">Ma</span>
                <span className="text-[9px] font-semibold text-red-700/70">16.22°</span>
             </div>

             {/* House 10 - Stacked Minimal */}
             <div className="absolute top-[50%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 items-center">
                <div className="flex gap-3">
                   <div className="flex flex-col items-center"><span className="text-sm font-bold text-green-700">Me</span><span className="text-[8px] font-medium opacity-70">1.9°</span></div>
                   <div className="flex flex-col items-center"><span className="text-sm font-bold text-pink-600">Ve</span><span className="text-[8px] font-medium opacity-70">12.5°</span></div>
                </div>
                <div className="flex gap-3">
                   <div className="flex flex-col items-center"><span className="text-sm font-bold text-gray-700">Ra</span><span className="text-[8px] font-medium opacity-70">24.7°</span></div>
                   <div className="flex flex-col items-center"><span className="text-sm font-bold text-orange-600">Su</span><span className="text-[8px] font-medium opacity-70">17.0°</span></div>
                </div>
                <div className="flex flex-col items-center"><span className="text-sm font-bold text-slate-800">Sa</span><span className="text-[8px] font-medium opacity-70">21.9°</span></div>
             </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );

  const SouthIndianChart = ({ title }: { title: string }) => (
    <ScrollReveal delay={100}>
      <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg flex flex-col items-center ${isDark ? 'bg-gray-900 border-white/5' : 'bg-white border-gray-100'}`}>
        <h4 className={`text-sm font-semibold text-center leading-relaxed wrap-break-word mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{title}</h4>
        
        <div className="relative w-full aspect-square max-w-[400px] bg-[#FFF9E6] border-4 border-[#C4A462] rounded-xl grid grid-cols-4 grid-rows-4 overflow-hidden">
           {/* Cells */}
           {[...Array(16)].map((_, i) => {
             const isCell = ![5, 6, 9, 10].includes(i + 1);
             return (
               <div key={i} className={`relative border border-[#C4A462]/20 flex flex-col items-center justify-center p-1 ${!isCell ? 'bg-[#C4A462]/5' : ''}`}>
                  {isCell && (
                    <div className="flex flex-col items-center">
                       {i === 0 && <span className="text-base font-bold text-amber-600">Ju</span>}
                       {i === 3 && <span className="text-base font-bold text-purple-600">Asc</span>}
                       {i === 11 && <span className="text-base font-bold text-blue-700">Mo</span>}
                    </div>
                  )}
                  {!isCell && i === 5 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <span className="text-xs font-bold text-[#C4A462]/20 uppercase -rotate-45">Vedic</span>
                    </div>
                  )}
               </div>
             )
           })}
        </div>
      </div>
    </ScrollReveal>
  );

  const KundliChart = ({ title }: { title: string }) => (
    chartStyle === 'North Indian' ? <NorthIndianChart title={title} /> : <SouthIndianChart title={title} />
  );

  const ChartStyleSwitcher = () => (
    <div className="flex justify-center mb-6">
       <div className={`p-1 rounded-full flex border ${isDark ? 'bg-gray-800/50 border-[#D4AF37]/30' : 'bg-[#FDF6E3] border-[#D4AF37]'}`}>
          {['North Indian', 'South Indian'].map((style) => (
            <button
              key={style}
              onClick={() => setChartStyle(style)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${chartStyle === style ? 'bg-[#D4AF37] text-white shadow-md' : 'text-[#8B4513] hover:bg-[#D4AF37]/10'}`}
            >
              {style}
            </button>
          ))}
       </div>
    </div>
  );

  const renderKundliTab = () => (
    <div className="space-y-8 mb-12">
       <ChartStyleSwitcher />
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

  const renderKPTab = () => (
    <div className="space-y-8 mb-12">
       <ChartStyleSwitcher />
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
             <KundliChart title="Bhav Chalit Chart" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
             <div className={`p-6 rounded-3xl border ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-gray-100 shadow-sm'}`}>
                <h4 className={`text-xs font-black uppercase tracking-widest text-center mb-6 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>Ruling Planets</h4>
                <div className="grid grid-cols-2 gap-4">
                   {kpRulingPlanets.map((p, i) => (
                     <div key={i} className={`p-4 rounded-xl text-center ${isDark ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                        <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">{p.label}</p>
                        <p className={`text-sm font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{p.value}</p>
                     </div>
                   ))}
                </div>
             </div>
          </ScrollReveal>
       </div>

       {/* KP Planets */}
       <ScrollReveal>
          <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
             <div className="bg-amber-500/5 py-4 px-6 border-b border-white/5">
                <h3 className={`font-black text-center uppercase tracking-widest text-sm ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                   Planets
                </h3>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className={`border-b ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                         {['Planet', 'Cusp', 'Sign', 'Sign Lord', 'Star Lord', 'Sub Lord'].map(h => (
                           <th key={h} className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">{h}</th>
                         ))}
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                      {kpPlanets.map((p, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                           <td className={`p-4 text-sm font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{p.planet}</td>
                           <td className="p-4 text-sm text-amber-500 font-bold">{p.cusp}</td>
                           <td className="p-4 text-sm text-gray-400">{p.sign}</td>
                           <td className="p-4 text-sm text-gray-400">{p.signLord}</td>
                           <td className="p-4 text-sm text-gray-400">{p.starLord}</td>
                           <td className="p-4 text-sm text-gray-400">{p.subLord}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
       </ScrollReveal>

       {/* KP Cusps */}
       <ScrollReveal>
          <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
             <div className="bg-amber-500/5 py-4 px-6 border-b border-white/5">
                <h3 className={`font-black text-center uppercase tracking-widest text-sm ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                   Cusps
                </h3>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className={`border-b ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                         {['Cusp', 'Degree', 'Sign', 'Sign Lord', 'Star Lord', 'Sub Lord'].map(h => (
                           <th key={h} className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500">{h}</th>
                         ))}
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                      {kpCusps.map((c, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                           <td className={`p-4 text-sm font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{c.cusp}</td>
                           <td className="p-4 text-xs font-mono text-gray-400">{c.degree}</td>
                           <td className="p-4 text-sm text-gray-400">{c.sign}</td>
                           <td className="p-4 text-sm text-gray-400">{c.signLord}</td>
                           <td className="p-4 text-sm text-gray-400">{c.starLord}</td>
                           <td className="p-4 text-sm text-gray-400">{c.subLord}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
       </ScrollReveal>
    </div>
  );

  const AshtakvargaChart = ({ title, data }: { title: string, data: number[] }) => (
    <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg flex flex-col items-center ${isDark ? 'bg-gray-900 border-white/5' : 'bg-white border-gray-100'}`}>
       <h4 className={`text-xs font-semibold text-center leading-relaxed wrap-break-word mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{title}</h4>
       <div className="relative w-full aspect-square max-w-[140px] bg-[#FFF9E6] border-2 border-[#C4A462]/50 rounded-lg overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#C4A462]/30 fill-none">
             <path d="M0 0 L100 100 M100 0 L0 100" strokeWidth="0.5" />
             <path d="M50 0 L100 50 L50 100 L0 50 Z" strokeWidth="0.5" />
             <g className="text-[7px] font-bold fill-[#8B4513]/80 font-serif">
                <text x="50" y="30" textAnchor="middle">{data[0]}</text>
                <text x="25" y="25" textAnchor="middle" className="fill-[#8B4513]/40 text-[6px]">{data[1]}</text>
                <text x="15" y="50" textAnchor="middle" className="fill-[#8B4513]/40 text-[6px]">{data[2]}</text>
                <text x="35" y="50" textAnchor="middle" className="fill-[#8B4513]/40 text-[6px]">{data[3]}</text>
                <text x="65" y="50" textAnchor="middle" className="fill-[#8B4513]/40 text-[6px]">{data[4]}</text>
                <text x="85" y="50" textAnchor="middle" className="fill-[#8B4513]/40 text-[6px]">{data[5]}</text>
                <text x="50" y="70" textAnchor="middle" className="fill-[#8B4513]/40 text-[6px]">{data[6]}</text>
                <text x="75" y="25" textAnchor="middle" className="fill-[#8B4513]/40 text-[6px]">{data[7]}</text>
                <text x="75" y="75" textAnchor="middle" className="fill-[#8B4513]/40 text-[6px]">{data[8]}</text>
             </g>
          </svg>
       </div>
    </div>
  );

  const renderAshtakvargaTab = () => (
    <div className="space-y-8 mb-12">
       <ScrollReveal>
          <div className={`p-6 rounded-3xl border ${isDark ? 'bg-gray-900 border-white/10' : 'bg-white border-gray-100 shadow-sm'}`}>
             <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>Ashtakvarga chart</h3>
             <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Ashtakvarga is used to assess the strength and patterns that are present in a birth chart. The total ashtakvarga is a numerical value that describes how much each planet contributes to the whole. For reference, when all the 7 planets and the Lagna (or House) are taken into account, the total numerical value will be 337.
             </p>
          </div>
       </ScrollReveal>

       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: 'Sar', data: [28, 24, 30, 25, 32, 27, 29, 31, 26] },
            { title: 'Asc', data: [4, 5, 3, 6, 2, 5, 4, 3, 5] },
            { title: 'Jupiter', data: [5, 4, 6, 3, 5, 4, 6, 5, 4] },
            { title: 'Mars', data: [3, 4, 2, 5, 4, 3, 4, 2, 3] },
            { title: 'Mercury', data: [4, 5, 4, 6, 3, 5, 4, 5, 4] },
            { title: 'Moon', data: [5, 4, 5, 4, 6, 3, 5, 4, 5] },
            { title: 'Saturn', data: [3, 2, 4, 3, 2, 4, 3, 2, 3] },
            { title: 'Sun', data: [4, 3, 5, 4, 3, 5, 4, 3, 4] },
            { title: 'Venus', data: [5, 6, 4, 5, 6, 4, 5, 6, 5] },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 50}>
               <AshtakvargaChart title={item.title} data={item.data} />
            </ScrollReveal>
          ))}
       </div>
    </div>
  );

  const renderDashaTab = () => {
    const yoginiData = [
      { p: 'DHA', s: 'Birth', e: '15-Aug-1992' },
      { p: 'BHR', s: '15-Aug-1992', e: '15-Aug-1996' },
      { p: 'BHA', s: '15-Aug-1996', e: '15-Aug-2001' },
      { p: 'ULK', s: '15-Aug-2001', e: '16-Aug-2007' },
      { p: 'SID', s: '16-Aug-2007', e: '15-Aug-2014' },
      { p: 'SAN', s: '15-Aug-2014', e: '15-Aug-2022' },
      { p: 'MAN', s: '15-Aug-2022', e: '16-Aug-2023' },
      { p: 'PIN', s: '16-Aug-2023', e: '15-Aug-2025' },
    ];

    const mahadashas = [
      { name: 'Rahu', range: '24-09-1987 - 23-09-2005', desc: 'Rahu Mahadasha lasts for 18 years. It is often a period of significant material ambition, foreign travel, and unconventional success. However, it can also bring psychological challenges, illusions, and sudden ups and downs. It is a time when one seeks worldly gratification but may feel a lack of spiritual peace.' },
      { name: 'Jupiter', range: '23-09-2005 - 23-09-2021', desc: 'Jupiter Mahadasha spans 16 years and is generally considered a golden period. It brings wisdom, wealth, children, and spiritual inclination. It is a time for expansion, higher learning, and performing good deeds. One often experiences prosperity and social recognition during this cycle.' },
      { name: 'Saturn', range: '23-09-2021 - 23-09-2040', desc: 'Saturn Mahadasha is the longest period, lasting 19 years. It is the period of the great taskmaster, requiring discipline, hard work, and patience. It brings life lessons, karmic settlements, and slow but steady progress. While it can be challenging, it ultimately builds character and provides lasting stability.' },
      { name: 'Mercury', range: '23-09-2040 - 23-09-2057', desc: 'Mercury Mahadasha lasts for 17 years, focusing on intellect, communication, and commerce. It is an excellent time for education, business ventures, and networking. One becomes more analytical and communicative, leading to growth in professional and academic spheres.' },
      { name: 'Ketu', range: '23-09-2057 - 23-09-2064', desc: 'Ketu Mahadasha is a 7-year spiritual journey. It often brings detachment from material desires, interest in occult sciences, and a search for enlightenment. It can cause isolation or confusion in worldly affairs but is deeply transformative for spiritual growth.' },
      { name: 'Venus', range: '23-09-2064 - 23-09-2084', desc: 'Venus Mahadasha spans 20 years and is the period of luxury, love, and arts. It brings comfort, marriage, and aesthetic pleasures. One often enjoys the finer things in life, success in creative fields, and harmonious relationships during this beautiful cycle.' },
      { name: 'Sun', range: '23-09-2084 - 23-09-2090', desc: 'Sun Mahadasha is a short 6-year period of power and authority. It highlights the ego, career, and public standing. It can bring success in government affairs, improved relations with father figures, and a strong sense of self-realization and leadership.' },
      { name: 'Moon', range: '23-09-2090 - 23-09-2100', desc: 'Moon Mahadasha lasts 10 years and is deeply tied to the mind and emotions. It brings a focus on mother, family, and domestic peace. While it can bring prosperity, it also makes one more sensitive and prone to emotional fluctuations.' },
      { name: 'Mars', range: '23-09-2100 - 23-09-2107', desc: 'Mars Mahadasha is a 7-year cycle of energy and action. It provides the courage and drive to conquer challenges. It is a time for property acquisitions, technical achievements, and assertive behavior, though it can also lead to conflicts if not channeled properly.' },
    ];

    return (
      <div className="space-y-8 mb-12">
        {/* Dasha Type Switcher */}
        <div className="flex justify-center">
          <div className={`p-1 rounded-full flex border ${isDark ? 'bg-gray-800 border-white/5' : 'bg-gray-100 border-gray-200'}`}>
            {['Vimshottari', 'Yogini'].map((type) => (
              <button
                key={type}
                onClick={() => setDashaType(type)}
                className={`px-8 py-2 rounded-full text-sm font-bold transition-all duration-300 ${dashaType === type 
                  ? 'bg-amber-500 text-white shadow-lg' 
                  : `text-gray-500 hover:text-gray-700 ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center">
            <h2 className={`text-2xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{dashaType}</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Understanding your dasha</p>
          </div>
        </ScrollReveal>

        {dashaType === 'Vimshottari' ? (
          <div className="grid grid-cols-1 gap-6">
            {mahadashas.map((d, i) => (
              <ScrollReveal key={d.name} delay={i * 50}>
                <div className={`p-8 rounded-[32px] border transition-all duration-300 hover:shadow-xl ${isDark ? 'bg-gray-900/50 border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                       <h3 className={`text-xl font-black ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>{d.name} Mahadasha</h3>
                       <p className={`text-sm font-bold mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>({d.range})</p>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                       <span className="text-xs font-black text-amber-500 uppercase tracking-widest">Active Cycle</span>
                    </div>
                  </div>
                  <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {d.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
             <ScrollReveal>
                <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-900 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
                   <div className="overflow-x-auto">
                      <table className="w-full text-left">
                         <thead>
                            <tr className={`border-b ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                               <th className="p-5 text-sm font-bold text-gray-500">Planet</th>
                               <th className="p-5 text-sm font-bold text-gray-500">Start Date</th>
                               <th className="p-5 text-sm font-bold text-gray-500">End Date</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-100/10">
                            {yoginiData.map((y, i) => (
                              <tr key={i} className="hover:bg-amber-500/5 transition-colors">
                                 <td className={`p-5 text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{y.p}</td>
                                 <td className="p-5 text-base text-gray-500 font-medium">{y.s}</td>
                                 <td className="p-5 text-base text-gray-500 font-medium">{y.e}</td>
                              </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                </div>
             </ScrollReveal>

             {/* Legend Section */}
             <ScrollReveal>
                <div className={`p-6 rounded-3xl border grid grid-cols-2 md:grid-cols-4 gap-4 ${isDark ? 'bg-gray-900/50 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                   {[
                     { k: 'MAN', v: 'Mangala' }, { k: 'PIN', v: 'Pingala' },
                     { k: 'DHA', v: 'Dhanya' }, { k: 'BHR', v: 'Bhramari' },
                     { k: 'BHA', v: 'Bhadrika' }, { k: 'ULK', v: 'Ulka' },
                     { k: 'SID', v: 'Siddha' }, { k: 'SAN', v: 'Sankata' }
                   ].map(note => (
                     <div key={note.k} className="flex items-center space-x-2">
                        <span className="text-xs font-black text-amber-500">{note.k}:</span>
                        <span className={`text-xs font-bold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{note.v}</span>
                     </div>
                   ))}
                </div>
             </ScrollReveal>

             {/* Rashi Chart Section */}
             <ScrollReveal>
                <div className="space-y-6">
                   <h3 className={`text-xl font-black text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Rashi Chart</h3>
                   <div className="flex justify-center">
                      <KundliChart title="Birth Chart (Lagna)" />
                   </div>
                </div>
             </ScrollReveal>
          </div>
        )}
      </div>
    );
  };

  const renderFreeReportTab = () => {
    const renderGeneralReport = () => {
      switch (reportSubTab) {
        case 'General':
          return (
            <ScrollReveal>
              <div className={`p-8 rounded-[32px] border ${isDark ? 'bg-gray-900/50 border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
                <h3 className={`text-2xl font-black mb-6 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>Description</h3>
                <div className={`space-y-6 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. It helps in making predictions about the minute events, unlike your Moon or Sun sign that help in making weekly, monthly or yearly predictions for you.</p>
                  <p className="font-bold text-amber-500">Your ascendant is Taurus</p>
                  
                  <div>
                    <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Personality</h4>
                    <p>Those born with the Taurus ascendant are relatively introverted, despite the fact they represent the animal bull. These people like to create their own little world stud with luxuries and comfort. However, they are also aware of the fact that having these luxuries will require hard work and commitment and thus always try to achieve greater and better things in life. Despite being an introvert, Taurus ascendants are really friendly and fun-loving. These people also have a great sense of humor, and you could never get bored when around them. However, one should know that these people never reveal all of them to anybody. They have their secrets which they try to deal with personally.</p>
                  </div>

                  <div>
                    <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Physical</h4>
                    <p>Ruled by the planet Venus, Taurus ascendants possess a short physique that is inclined to carelessness. They are generally gifted with a lovely face, full of large, gleaming eyes, nicely formed ears, nose, and seductive lips. In terms of physical shape, they are not too lucky. They have a square-shaped figure with no pleasing curves and a full-fat figure, with the possibility of a mark somewhat on the sides or back.</p>
                  </div>

                  <div>
                    <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Health</h4>
                    <p>The Taurus natives usually are good with health for the most part of their life. But they, too, have their weak spots in various instances. The people born under the rising sign of Taurus are prone to nervous system issues. Having a good sleep is very important for these people as if they don't, they develop skin problems faster than anyone else.</p>
                  </div>

                  <div>
                    <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Career</h4>
                    <p>Taurus rising people are absolutely eager to put in the effort and persevere in order to succeed, but their desire for stability and ease of mind leads them to choose a steady income with little chance of loss.</p>
                  </div>

                  <div>
                    <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Relationship</h4>
                    <p>When it comes to relationships, a Taurus ascendant is very sensual. However, they move very cautiously when it comes to love and relationships. They always seek long-lasting love as they don't like change.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        case 'Planetary':
          return (
            <div className="grid grid-cols-1 gap-4">
              {['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Rahu', 'Ketu'].map((planet, i) => (
                <ScrollReveal key={planet} delay={i * 50}>
                  <details className={`group p-6 rounded-2xl border transition-all ${isDark ? 'bg-gray-900/50 border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
                    <summary className={`flex justify-between items-center cursor-pointer list-none text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {planet} Consideration
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className={`mt-4 pt-4 border-t border-white/5 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {planet} plays a vital role in your birth chart. Its position in Taurus ascendant brings unique energies to your personality and destiny. This placement suggests a period of growth and learning in areas related to {planet.toLowerCase()}'s natural significations.
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          );
        case 'Vimshottari Dasha':
          return (
             <div className="space-y-6">
                {[
                  { name: 'Rahu', range: '1987 - 2005', desc: 'A period of expansion and material pursuits.' },
                  { name: 'Jupiter', range: '2005 - 2021', desc: 'A golden era of wisdom, prosperity, and spiritual growth.' },
                  { name: 'Saturn', range: '2021 - 2040', desc: 'A time for discipline, karmic lessons, and steady progress.' },
                  { name: 'Mercury', range: '2040 - 2057', desc: 'Focus on intellect, communication, and business growth.' }
                ].map((d, i) => (
                  <ScrollReveal key={d.name} delay={i * 50}>
                    <div className={`p-6 rounded-2xl border flex gap-6 ${isDark ? 'bg-gray-900/50 border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
                       <div className="hidden md:flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                          <div className="w-0.5 h-full bg-amber-500/20"></div>
                       </div>
                       <div>
                          <h4 className={`text-lg font-black ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>{d.name} Mahadasha</h4>
                          <p className="text-xs font-bold text-gray-500 mb-3 tracking-widest">{d.range}</p>
                          <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{d.desc}</p>
                       </div>
                    </div>
                  </ScrollReveal>
                ))}
             </div>
          );
        case 'Yoga':
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Anapha Yoga', 'Adhi Yoga', 'Vasumathi Yoga', 'Vesi Yoga', 'Ruchaka Yoga', 'Lakshmi Yoga', 'Kahala Yoga'].map((yoga, i) => (
                <ScrollReveal key={yoga} delay={i * 50}>
                  <div className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] ${isDark ? 'bg-gray-900/50 border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-xl">🕉️</div>
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{yoga}</h4>
                     </div>
                     <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        This yoga is formed by specific planetary alignments in your chart. It brings {yoga.includes('Lakshmi') ? 'wealth and abundance' : 'strength and prosperity'} to the native.
                     </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          );
        default: return null;
      }
    };

    const renderRemediesReport = () => {
      switch (reportSubTab) {
        case 'Rudraksha':
          return (
            <ScrollReveal>
               <div className={`p-8 rounded-[40px] border relative overflow-hidden ${isDark ? 'bg-gray-900/50 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h2 className={`text-2xl font-black mb-8 text-center ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>Rudraksha Suggestion Report</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                     <div className={`p-6 rounded-3xl border ${isDark ? 'bg-amber-500/5 border-amber-500/20' : 'bg-amber-50 border-amber-200'}`}>
                        <h4 className="text-sm font-black uppercase tracking-widest text-amber-600 mb-4">Recommendation</h4>
                        <div className="flex items-center gap-4">
                           <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">📿</div>
                           <div>
                              <p className="text-2xl font-black text-gray-900">9-Mukhi</p>
                              <p className="text-xs font-bold text-amber-700">Durga Shakti Rudraksha</p>
                           </div>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Rudraksha & its importance</h4>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Rudraksha is a divine bead that acts as a protective shield and enhances the native's aura. It connects the wearer with higher cosmic energies.</p>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Benefits</h4>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['Confidence', 'Protection', 'Focus', 'Spirituality'].map(b => (
                           <li key={b} className="flex items-center gap-3 text-sm text-gray-500">
                              <span className="w-2 h-2 rounded-full bg-amber-500"></span> {b}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </ScrollReveal>
          );
        case 'Gemstones':
          return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { name: 'Life Stone', stone: 'Diamond', color: 'bg-cyan-100 text-cyan-700', mantra: 'Om Shum Shukraya Namah' },
                 { name: 'Lucky Stone', stone: 'Emerald', color: 'bg-green-100 text-green-700', mantra: 'Om Bum Budhaya Namah' },
                 { name: 'Fortune Stone', stone: 'Blue Sapphire', color: 'bg-blue-100 text-blue-700', mantra: 'Om Sham Shanaishcharaya Namah' }
               ].map((s, i) => (
                 <ScrollReveal key={s.name} delay={i * 100}>
                    <div className={`p-6 rounded-3xl border flex flex-col items-center text-center transition-all hover:-translate-y-2 ${isDark ? 'bg-gray-900/50 border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
                       <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase mb-6 ${s.color}`}>{s.name}</span>
                       <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner">💎</div>
                       <h4 className={`text-xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{s.stone}</h4>
                       <p className={`text-xs mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Mantra: {s.mantra}</p>
                       <button className="w-full py-2 bg-amber-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-amber-500/20">How to wear</button>
                    </div>
                 </ScrollReveal>
               ))}
            </div>
          );
        default: return null;
      }
    };

    const renderDoshaReport = () => {
       return (
         <ScrollReveal>
            <div className={`p-8 rounded-[40px] border text-center ${isDark ? 'bg-gray-900/50 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
               <div className="w-24 h-24 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">⚠️</div>
               <h2 className={`text-2xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{reportSubTab} Analysis</h2>
               <p className="text-red-500 font-bold text-sm uppercase tracking-widest mb-8">Status: Negative / No Dosha Found</p>
               <div className={`max-w-2xl mx-auto text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Based on your planetary positions, you do not have {reportSubTab}. This is a favorable sign for your {reportSubTab === 'Manglik' ? 'married life' : reportSubTab === 'Kalsarpa' ? 'overall growth' : 'mental peace'}.
               </div>
            </div>
         </ScrollReveal>
       );
    };

    return (
      <div className="space-y-8 mb-12">
        {/* Level 1 Tabs */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {['General', 'Remedies', 'Dosha'].map(tab => (
            <button
              key={tab}
              onClick={() => { setReportTab(tab); setReportSubTab(tab === 'General' ? 'General' : tab === 'Remedies' ? 'Rudraksha' : 'Manglik'); }}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all ${reportTab === tab 
                ? 'bg-amber-500 text-white shadow-xl scale-105' 
                : `${isDark ? 'bg-gray-800 text-gray-400 border-white/5' : 'bg-white text-gray-500 border-gray-100 shadow-sm'} border hover:bg-amber-500/10`}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Level 2 Tabs */}
        <div className="flex justify-center flex-wrap gap-2">
           {(reportTab === 'General' ? ['General', 'Planetary', 'Vimshottari Dasha', 'Yoga'] :
             reportTab === 'Remedies' ? ['Rudraksha', 'Gemstones'] :
             ['Manglik', 'Kalsarpa', 'Sadesati']).map(sub => (
               <button
                 key={sub}
                 onClick={() => setReportSubTab(sub)}
                 className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${reportSubTab === sub 
                   ? 'bg-amber-500/20 text-amber-500 border-amber-500/30' 
                   : `${isDark ? 'text-gray-500 border-white/5' : 'text-gray-400 border-gray-100'} border hover:border-amber-500/20`}`}
               >
                 {sub}
               </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="mt-8">
           {reportTab === 'General' ? renderGeneralReport() :
            reportTab === 'Remedies' ? renderRemediesReport() :
            renderDoshaReport()}
        </div>
      </div>
    );
  };

  const renderChartsTab = () => (
    <div className="space-y-12 mb-12">
       <ChartStyleSwitcher />
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'Lagna / Ascendant', 'Sun Chart', 'Moon Chart', 'Chalit Chart',
            'Hora (D-2)', 'Drekkana (D-3)', 'Chaturthamsa (D-4)', 'Saptamsa (D-7)',
            'Navamsa (D-9)', 'Dasamsa (D-10)', 'Dwadasamsa (D-12)', 'Shodasamsa (D-16)',
            'Vimsamsa (D-20)', 'Chaturvimsamsa (D-24)', 'Bhamsa (D-27)', 'Trimsamsa (D-30)',
            'Khavedamsa (D-40)', 'Akshavedamsa (D-45)', 'Shastiamsa (D-60)'
          ].map((title, i) => (
            <ScrollReveal key={title} delay={i * 20}>
               <KundliChart title={title} />
            </ScrollReveal>
          ))}
       </div>
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

        {activeTab === 'Basic' ? renderBasicTab() : 
         activeTab === 'Kundli' ? renderKundliTab() : 
         activeTab === 'KP' ? renderKPTab() : 
         activeTab === 'Ashtakvarga' ? renderAshtakvargaTab() : 
         activeTab === 'Charts' ? renderChartsTab() : 
         activeTab === 'Dasha' ? renderDashaTab() :
         activeTab === 'Free Report' ? renderFreeReportTab() :
         renderBasicTab()}

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
