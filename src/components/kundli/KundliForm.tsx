import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../../App';

interface KundliFormProps {
  formData: any;
  setFormData: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

export default function KundliForm({ formData, setFormData, onSubmit, isLoading }: KundliFormProps) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`rounded-2xl border p-8 animate-fadeIn ${isDark ? 'bg-gray-800/80 backdrop-blur-md border-white/10' : 'bg-gray-50 border-gray-200'}`}>
      <h3 className={`font-black text-2xl mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {lang === 'hi' ? 'अपनी कुंडली बनाएं' : 'Create Your Kundli'}
      </h3>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
              {lang === 'hi' ? 'नाम' : 'Name'}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`}
              placeholder={lang === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter your name'}
              required
            />
          </div>
          <div>
            <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
              {lang === 'hi' ? 'लिंग' : 'Gender'}
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white' : 'bg-white border border-gray-200 text-gray-900'}`}
              required
            >
              <option value="">
                {lang === 'hi' ? 'लिंग चुनें' : 'Select gender'}
              </option>
              <option value="male">
                {lang === 'hi' ? 'पुरुष' : 'Male'}
              </option>
              <option value="female">
                {lang === 'hi' ? 'महिला' : 'Female'}
              </option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
              {lang === 'hi' ? 'जन्म तिथि' : 'Birth Date'}
            </label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white' : 'bg-white border border-gray-200 text-gray-900'}`}
              required
            />
          </div>
          <div>
            <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
              {lang === 'hi' ? 'जन्म समय' : 'Birth Time'}
            </label>
            <input
              type="time"
              name="birthTime"
              value={formData.birthTime}
              onChange={handleInputChange}
              className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white' : 'bg-white border border-gray-200 text-gray-900'}`}
              required
            />
          </div>
          <div>
            <label className={`block font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
              {lang === 'hi' ? 'जन्म स्थान' : 'Birth Place'}
            </label>
            <input
              type="text"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleInputChange}
              className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`}
              placeholder={lang === 'hi' ? 'जन्म स्थान दर्ज करें' : 'Enter birth place'}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <span>{lang === 'hi' ? 'कुंडली बनाएं' : 'Create Kundli'}</span>
          )}
        </button>
      </form>
    </div>
  );
}
