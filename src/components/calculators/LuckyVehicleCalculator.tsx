import { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

export default function LuckyVehicleCalculator({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    vehicleNumber: ''
  });
  const [result, setResult] = useState<{ number: string; isLucky: boolean; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateLuckyVehicle = (vehicleNumber: string) => {
    // Simplified calculation based on numerology
    const digits = vehicleNumber.replace(/\D/g, '');
    let sum = 0;
    for (let digit of digits) {
      sum += parseInt(digit);
    }
    let finalNumber = sum;
    while (finalNumber > 9) {
      finalNumber = Math.floor(finalNumber / 10) + (finalNumber % 10);
    }

    const luckyNumbers = [1, 3, 5, 6, 8, 9];
    const isLucky = luckyNumbers.includes(finalNumber);

    const message = isLucky
      ? (lang === 'hi' ? 'यह नंबर आपके लिए शुभ है। यात्रा सुरक्षित रहेगी।' : 'This number is lucky for you. Your journey will be safe.')
      : (lang === 'hi' ? 'इस नंबर से सावधान रहें। यदि संभव हो तो बदलें।' : 'Be cautious with this number. Consider changing if possible.');

    return { number: finalNumber.toString(), isLucky, message };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.vehicleNumber) {
      const vehicleResult = calculateLuckyVehicle(formData.vehicleNumber);
      setResult(vehicleResult);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[64] overflow-y-auto bg-[var(--primary-bg)]">
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-30 w-12 h-12 glass-heavy border border-[var(--border-color)] rounded-full flex items-center justify-center text-[var(--text-primary)] hover:glass-light transition-all shadow-xl hover:scale-110 active:scale-95"
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
          <span className="text-5xl md:text-7xl mb-4 animate-float">🚗</span>
          <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'लकी व्हीकल नंबर कैल्कुलेटर' : 'Lucky Vehicle Number Calculator'}
          </h1>
          <div className="w-20 h-1 bg-[var(--accent-color)] mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="glass-heavy rounded-2xl border border-[var(--border-color)] p-8">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-bold mb-2">
                    {lang === 'hi' ? 'आपका नाम' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full input-glass border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-color)]/50"
                    placeholder={lang === 'hi' ? 'वैकल्पिक' : 'Optional'}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-bold mb-2">
                    {lang === 'hi' ? 'जन्म तिथि' : 'Birth Date'}
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="w-full input-glass border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)]/50"
                  />
                </div>
              </div>
              <div className="text-center">
                <label className="block text-gray-300 font-bold mb-2 text-lg">
                  {lang === 'hi' ? 'वाहन नंबर दर्ज करें' : 'Enter Vehicle Number'}
                </label>
                <input
                  type="text"
                  name="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={handleInputChange}
                  className="w-full max-w-md mx-auto glass-light border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-color)]/50 text-center text-xl"
                  placeholder="ABC 1234"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-[var(--text-primary)] font-black py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-green-500/30 text-lg"
                >
                  {lang === 'hi' ? 'लकी नंबर जांचें' : 'Check Lucky Number'}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="glass rounded-xl p-8 mb-6">
                <div className={`text-8xl mb-4 ${result.isLucky ? 'text-green-400' : 'text-yellow-400'}`}>
                  {result.isLucky ? '🎉' : '⚠️'}
                </div>
                <h4 className={`font-bold text-2xl mb-2 ${result.isLucky ? 'text-green-400' : 'text-yellow-400'}`}>
                  {lang === 'hi' ? `न्यूमेरोलॉजी संख्या: ${result.number}` : `Numerology Number: ${result.number}`}
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {result.message}
                </p>
              </div>
              <button
                onClick={() => setResult(null)}
                className="btn-accent text-gray-800 font-bold text-[var(--text-primary)] font-bold py-2 px-6 rounded-xl transition-all"
              >
                {lang === 'hi' ? 'दोबारा जांचें' : 'Check Again'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}





