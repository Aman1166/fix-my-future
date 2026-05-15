import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../../App';

interface PanchangCardProps {
  data: any;
}

export default function PanchangCard({ data }: PanchangCardProps) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  const details = [
    { label: lang === 'hi' ? 'तिथि' : 'Tithi', value: data.tithi || 'Shukla Navami' },
    { label: lang === 'hi' ? 'करण' : 'Karan', value: data.karan || 'Balava' },
    { label: lang === 'hi' ? 'योग' : 'Yog', value: data.yog || 'Siddhi' },
    { label: lang === 'hi' ? 'सूर्योदय' : 'Sunrise', value: data.sunrise || '06:42 AM' },
    { label: lang === 'hi' ? 'सूर्यास्त' : 'Sunset', value: data.sunset || '06:15 PM' },
    { label: lang === 'hi' ? 'पक्ष' : 'Paksha', value: data.paksha || 'Shukla' },
    { label: lang === 'hi' ? 'वर्ण' : 'Varna', value: data.varna || 'Brahmin' },
    { label: lang === 'hi' ? 'नाड़ी' : 'Nadi', value: data.nadi || 'Antya' },
  ];

  return (
    <div className={`rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
      <h3 className={`font-black text-xl mb-6 flex items-center space-x-2 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
        <span className="text-2xl">📅</span>
        <span>{lang === 'hi' ? 'पंचांग विवरण' : 'Panchang Details'}</span>
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {details.map((item, index) => (
          <div key={index} className={`p-3 rounded-xl ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
            <p className={`text-xs font-bold mb-1 opacity-70 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</p>
            <p className={`text-sm font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
