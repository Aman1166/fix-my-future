import { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import { ScrollReveal } from './Animations';

export default function PanchangPage({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [location, setLocation] = useState('New Delhi, Delhi, India');

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-64 overflow-y-auto ${isDark ? 'bg-gray-800' : 'bg-[#f8fcf9]'}`}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className={`fixed top-6 right-6 z-70 w-12 h-12 backdrop-blur-md border rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 ${
          isDark ? 'bg-gray-800/80 border-white/10 text-white hover:bg-gray-700' : 'bg-white/80 border-[#083f1d]/10 text-[#083f1d] hover:bg-[#eef5f0]'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Header Banner */}
      <div className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center">
          <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-b from-gray-800/60 via-gray-950/40 to-gray-900' : 'bg-linear-to-b from-white/40 via-[#eef5f0]/60 to-[#f8fcf9]'}`}></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <ScrollReveal>
            <h1 className={`text-4xl md:text-7xl font-black mb-3 tracking-tight drop-shadow-xl ${isDark ? 'text-white' : 'text-[#083f1d]'}`}>
              {lang === 'hi' ? 'आज का पंचांग' : "Today's Panchang"}
            </h1>
            <p className={`text-sm md:text-xl max-w-2xl font-medium ${isDark ? 'text-amber-500/80' : 'text-[#0a4f23]/70'}`}>
              {lang === 'hi' ? 'दैनिक ज्योतिषीय गणना और शुभ मुहूर्त' : 'Daily Astrological Calculations & Auspicious Timings'}
            </p>
            <div className={`w-24 h-1.5 mx-auto mt-6 rounded-full ${isDark ? 'bg-amber-600' : 'bg-[#0a4f23]'}`}></div>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 -mt-20 relative z-10">
        {/* Search Bar */}
        <div className={`backdrop-blur-xl rounded-3xl border p-6 mb-12 shadow-2xl transition-all ${
          isDark ? 'bg-gray-800/80 border-white/10' : 'bg-white/90 border-[#083f1d]/10'
        }`}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`w-full rounded-2xl px-6 py-4 pl-14 text-lg focus:outline-none focus:ring-2 transition-all ${
                  isDark ? 'bg-gray-900 border-white/5 text-white focus:ring-amber-500/30' : 'bg-[#f0f7f2] border-[#083f1d]/5 text-[#083f1d] focus:ring-[#0a4f23]/20'
                }`}
                placeholder="Enter location..."
              />
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl opacity-50">📍</span>
            </div>
            <button className={`px-8 py-4 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg ${
              isDark ? 'bg-amber-600 hover:bg-amber-700 text-gray-900' : 'bg-white/80 hover:bg-green-600 text-pure-white'
            }`}>
              {lang === 'hi' ? 'पंचांग प्राप्त करें' : 'Get Panchang'}
            </button>
          </div>
        </div>

        {/* Date Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className={`h-px w-12 md:w-24 ${isDark ? 'bg-white/10' : 'bg-[#083f1d]/10'}`}></div>
            <h2 className={`text-xl md:text-2xl font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-[#083f1d]'}`}>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </h2>
            <div className={`h-px w-12 md:w-24 ${isDark ? 'bg-white/10' : 'bg-[#083f1d]/10'}`}></div>
          </div>
          <p className={isDark ? 'text-gray-400' : 'text-[#083f1d]/60'}>{location}</p>
        </div>

        {/* Sunrise/Moonrise Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <TimingCard 
            title="Sunrise" 
            time="05:32 AM - 07:02 PM" 
            icon="☀️" 
            isDark={isDark} 
            color={isDark ? 'from-amber-500/20' : 'from-amber-100'} 
          />
          <TimingCard 
            title="Moonrise" 
            time="01:47 AM - 01:20 PM" 
            icon="🌙" 
            isDark={isDark} 
            color={isDark ? 'from-blue-500/20' : 'from-blue-50' } 
          />
        </div>

        {/* Main Info Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Panchang Details Table */}
          <div className="lg:col-span-2">
            <SectionTitle title="Panchang Details" isDark={isDark} />
            <div className={`rounded-3xl border overflow-hidden shadow-xl ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-[#083f1d]/10'}`}>
              <DataTable 
                data={[
                  { label: 'Tithi', value: 'Navami' },
                  { label: 'Nakshatra', value: 'Shatabhisha', suffix: 'upto 12:12' },
                  { label: 'Yoga', value: 'Brahma' },
                  { label: 'Karana', value: 'Taitil' },
                  { label: 'Paksha', value: 'Krishna' },
                  { label: 'Weekday', value: 'Monday' },
                  { label: 'Shaka Samvat', value: '1948 Vi\u0101\u1E6DA\u1E6DAvasu' },
                  { label: 'Vikram Samvat', value: '1948 Vi\u0101\u1E6DA\u1E6DAvasu' },
                ]} 
                isDark={isDark}
              />
            </div>
          </div>

          {/* Inauspicious Timings */}
          <div>
            <SectionTitle title="Inauspicious Timings" isDark={isDark} color="text-red-500" />
            <div className={`rounded-3xl border p-6 shadow-xl ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-[#083f1d]/10'}`}>
              <ul className="space-y-4">
                {[
                  { name: 'Rahu Kaal', from: '01:44 AM', to: '03:25 AM' },
                  { name: 'Yamaganda', from: '05:06 AM', to: '06:47 AM' },
                  { name: 'Gulika Kaal', from: '08:28 AM', to: '10:09 AM' },
                  { name: 'Dur Muhurat', from: '12:45 PM', to: '01:36 PM' },
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center group">
                    <span className={`font-bold ${isDark ? 'text-gray-300' : 'text-[#083f1d]'}`}>{item.name}</span>
                    <span className={`text-sm px-3 py-1 rounded-full ${isDark ? 'bg-red-500/10 text-red-400' : 'bg-red-50 text-red-600'}`}>
                      {item.from} - {item.to}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Charts and Lists Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Lagna Chart */}
          <div>
            <SectionTitle title="Lagna Chart at Sunrise" isDark={isDark} />
            <div className={`aspect-square rounded-3xl border p-8 shadow-2xl flex items-center justify-center ${
              isDark ? 'bg-gray-800/50 border-white/10' : 'bg-[#fffdf5] border-amber-200'
            }`}>
              <LagnaChart isDark={isDark} />
            </div>
          </div>

          {/* Bala Tables */}
          <div className="space-y-8">
            <div>
              <SectionTitle title="Chandrabalam And Tarabalam" isDark={isDark} />
              <div className={`rounded-3xl border overflow-hidden shadow-xl ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-[#083f1d]/10'}`}>
                <div className="p-6 border-b border-white/5 bg-amber-500/5">
                  <h4 className={`font-black uppercase tracking-widest text-sm mb-4 ${isDark ? 'text-amber-500' : 'text-amber-700'}`}>Tara Bala</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Bharani', 'Rohini', 'Aadra', 'Ashlesha', 'Purva Phalguni', 'Hasta', 'Swati', 'Jyeshtha', 'Purva Ashadha', 'Shravana', 'Shatabhisha'].map((t, i) => (
                      <span key={i} className={`px-3 py-1 rounded-lg text-xs font-bold ${isDark ? 'bg-gray-900/50 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-blue-500/5">
                  <h4 className={`font-black uppercase tracking-widest text-sm mb-4 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Chandra Bala</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Bharani', 'Rohini', 'Aadra', 'Ashlesha', 'Purva Phalguni', 'Hasta', 'Swati', 'Jyeshtha', 'Purva Ashadha', 'Shravana', 'Shatabhisha'].map((t, i) => (
                      <span key={i} className={`px-3 py-1 rounded-lg text-xs font-bold ${isDark ? 'bg-gray-900/50 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Planetary Positions */}
        <div>
          <SectionTitle title="Planetary Position at Sunrise" isDark={isDark} />
          <div className={`rounded-3xl border overflow-hidden shadow-2xl ${isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-[#083f1d]/10'}`}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className={isDark ? 'bg-white/5' : 'bg-[#0a4f23]/5'}>
                    {['Planets', 'Rashi', 'Longitude', 'Nakshatra', 'Pada'].map((h, i) => (
                      <th key={i} className={`px-6 py-4 font-black uppercase tracking-wider text-xs ${isDark ? 'text-amber-500' : 'text-[#0a4f23]'}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { p: 'Ascendant', r: 'Aries', l: "24\u00B037'29\"", n: 'Bharani', pa: 4 },
                    { p: 'Sun', r: 'Aries', l: "26\u00B06'12\"", n: 'Bharani', pa: 4 },
                    { p: 'Moon', r: 'Aquarius', l: "9\u00B010'26\"", n: 'Shatabhisha', pa: 1 },
                    { p: 'Mercury', r: 'Aries', l: "21\u00B048'31\"", n: 'Bharani', pa: 3 },
                    { p: 'Venus', r: 'Taurus', l: "26\u00B07'42\"", n: 'Mrigashirsha', pa: 1 },
                    { p: 'Mars', r: 'Pisces', l: "29\u00B046'30\"", n: 'Revati', pa: 4 },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className={`px-6 py-4 font-bold ${isDark ? 'text-white' : 'text-[#083f1d]'}`}>{row.p}</td>
                      <td className={isDark ? 'text-gray-400' : 'text-[#083f1d]/70'}>{row.r}</td>
                      <td className={isDark ? 'text-gray-400' : 'text-[#083f1d]/70'}>{row.l}</td>
                      <td className={isDark ? 'text-gray-400' : 'text-[#083f1d]/70'}>{row.n}</td>
                      <td className={isDark ? 'text-gray-400' : 'text-[#083f1d]/70'}>{row.pa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimingCard({ title, time, icon, isDark, color }: any) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border p-8 transition-all hover:scale-[1.02] ${
      isDark ? 'bg-gray-800/80 border-white/10' : 'bg-white border-[#083f1d]/10'
    } shadow-xl group`}>
      <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-bl ${color} to-transparent opacity-50 transition-all group-hover:scale-150`}></div>
      <div className="flex items-center gap-6">
        <span className="text-5xl drop-shadow-lg">{icon}</span>
        <div>
          <h3 className={`text-sm font-black uppercase tracking-widest mb-1 ${isDark ? 'text-gray-400' : 'text-[#083f1d]/50'}`}>{title}</h3>
          <p className={`text-2xl font-black ${isDark ? 'text-white' : 'text-[#083f1d]'}`}>{time}</p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title, isDark, color = '' }: any) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h3 className={`text-2xl font-black tracking-tight ${color || (isDark ? 'text-white' : 'text-[#083f1d]')}`}>{title}</h3>
      <div className={`flex-1 h-px ${isDark ? 'bg-white/10' : 'bg-[#083f1d]/10'}`}></div>
    </div>
  );
}

function DataTable({ data, isDark }: any) {
  return (
    <div className="divide-y divide-white/5">
      {data.map((item: any, i: number) => (
        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-white/5 transition-colors">
          <span className={`font-black uppercase tracking-widest text-xs ${isDark ? 'text-gray-500' : 'text-[#0a4f23]/60'}`}>{item.label}</span>
          <div className="flex items-baseline gap-2">
            <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[#083f1d]'}`}>{item.value}</span>
            {item.suffix && <span className="text-amber-500 text-xs font-black">{item.suffix}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

function LagnaChart({ isDark }: any) {
  const stroke = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(10,79,35,0.2)';
  const textPrimary = isDark ? '#ffffff' : '#083f1d';
  const textSecondary = '#f59e0b'; // Amber

  return (
    <svg viewBox="0 0 400 400" className="w-full h-full max-w-[400px]">
      {/* Outer Rectangle */}
      <rect x="20" y="20" width="360" height="360" fill="none" stroke={stroke} strokeWidth="2" />
      
      {/* Diagonal Lines */}
      <line x1="20" y1="20" x2="380" y2="380" stroke={stroke} strokeWidth="1.5" />
      <line x1="380" y1="20" x2="20" y2="380" stroke={stroke} strokeWidth="1.5" />
      
      {/* Diamond Shape */}
      <polygon points="200,20 380,200 200,380 20,200" fill="none" stroke={stroke} strokeWidth="2" />

      {/* House Numbers & Planetary Text (Matching screenshot layout) */}
      <g className="text-[14px] font-bold" fill={textPrimary}>
        {/* House 1 - Center Top Diamond */}
        <text x="200" y="140" textAnchor="middle">1</text>
        <text x="200" y="165" textAnchor="middle" fill={textSecondary} className="text-[12px]">Su Me Asc</text>
        
        {/* House 2 - Top Right Triangle */}
        <text x="235" y="120">2</text>
        <text x="235" y="100" fill={textSecondary} className="text-[10px]">Ve Ur</text>
        
        {/* House 3 - Far Right Triangle */}
        <text x="340" y="100">3</text>
        <text x="340" y="125" fill={textSecondary} className="text-[10px]">Ju</text>
        
        {/* House 4 - Bottom Right Triangle */}
        <text x="290" y="210">4</text>
        
        {/* House 5 - Far Bottom Triangle */}
        <text x="340" y="320">5</text>
        
        {/* House 6 - Center Bottom Right Triangle */}
        <text x="240" y="280">6</text>
        
        {/* House 7 - Center Bottom Diamond */}
        <text x="200" y="260" textAnchor="middle">7</text>
        
        {/* House 8 - Center Bottom Left Triangle */}
        <text x="160" y="280" textAnchor="end">8</text>
        
        {/* House 9 - Far Bottom Left Triangle */}
        <text x="60" y="320" textAnchor="end">9</text>
        
        {/* House 10 - Center Top Left Triangle */}
        <text x="110" y="210" textAnchor="middle">10</text>
        <text x="110" y="235" textAnchor="middle" fill={textSecondary} className="text-[10px]">Pl</text>
        
        {/* House 11 - Far Top Left Triangle */}
        <text x="60" y="100" textAnchor="end">11</text>
        <text x="60" y="125" textAnchor="end" fill={textSecondary} className="text-[10px]">Mo Ra\u00AE</text>
        
        {/* House 12 - Top Left Triangle */}
        <text x="165" y="120" textAnchor="end">12</text>
        <text x="165" y="100" textAnchor="end" fill={textSecondary} className="text-[10px]">Ma Sa Ne</text>
      </g>
    </svg>
  );
}
