import { useContext, useState, useEffect } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import KundliForm from '../components/kundli/KundliForm';
import KundliResultPage from './KundliResultPage';

export default function FreeKundli({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  
  // Load initial state from localStorage if available
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('kundliFormData');
    return saved ? JSON.parse(saved) : {
      name: '',
      gender: '',
      birthDate: '',
      birthTime: '',
      birthPlace: '',
    };
  });
  
  const [showResult, setShowResult] = useState(() => {
    return localStorage.getItem('showKundliResult') === 'true';
  });
  
  const [isLoading, setIsLoading] = useState(false);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('kundliFormData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('showKundliResult', showResult.toString());
  }, [showResult]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.gender && formData.birthDate && formData.birthTime && formData.birthPlace) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setShowResult(true);
        // Scroll to top of result
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
    }
  };

  const handleBackToForm = () => {
    setShowResult(false);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-64 overflow-y-auto ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <button
        onClick={onClose}
        className={`fixed top-6 right-6 z-30 w-12 h-12 backdrop-blur-md border rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 ${isDark ? 'bg-gray-800/80 border-white/10 text-white hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-gray-100'}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center">
          <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-b from-gray-800/60 via-gray-950/40 to-gray-900' : 'bg-linear-to-b from-white/60 via-white/40 to-white'}`}></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">📊</span>
          <h1 className={`text-4xl md:text-6xl font-black mb-3 tracking-tight drop-shadow-xl animate-slideInUp ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'मुफ्त कुंडली ऑनलाइन' : 'Free Kundli Online'}
          </h1>
          <p className={`text-sm md:text-lg max-w-2xl animate-fadeIn ${isDark ? 'text-white' : 'text-gray-700'}`}>
            {lang === 'hi' ? 'तुरंत और सटीक जन्म कुंडली प्राप्त करें' : 'Get instant & accurate Janam Kundli'}
          </p>
          <div className="w-20 h-1 bg-amber-500 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {!showResult ? (
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <div className={`rounded-2xl border p-6 mb-8 animate-fadeIn ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-white' : 'text-gray-700'}`}>
                {lang === 'hi'
                  ? 'क्या आपने कभी सोचा है कि आपका भविष्य क्या लेकर आया है? एक मुफ्त ऑनलाइन कुंडली आपके व्यक्तित्व, करियर, रिश्तों और भविष्य के बारे में विवरण दिखा सकती है।'
                  : 'Ever thought about what your future holds? A free online kundli can show details about your personality, career, relationships, and future.'}
              </p>
            </div>

            <KundliForm 
              formData={formData} 
              setFormData={setFormData} 
              onSubmit={handleSubmit} 
              isLoading={isLoading} 
            />
          </div>
        ) : (
          <KundliResultPage 
            isOpen={showResult} 
            onClose={handleBackToForm} 
            formData={formData}
          />
        )}
      </div>
    </div>
  );
}
