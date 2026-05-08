import { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

export default function FlamesCalculator({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const { lang } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ firstName: '', secondName: '' });
  const [result, setResult] = useState<{ percentage: number; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateFlames = () => {
    const percentage = Math.floor(Math.random() * 100) + 1;
    let message = '';
    if (percentage >= 80) message = lang === 'hi' ? 'उत्कृष्ट संगतता!' : 'Excellent compatibility!';
    else if (percentage >= 60) message = lang === 'hi' ? 'अच्छी संगतता' : 'Good compatibility';
    else if (percentage >= 40) message = lang === 'hi' ? 'औसत संगतता' : 'Average compatibility';
    else message = lang === 'hi' ? 'कम संगतता' : 'Low compatibility';
    return { percentage, message };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.secondName) {
      setResult(calculateFlames());
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[64] overflow-y-auto bg-[var(--primary-bg)]">
      <button onClick={onClose} className="fixed top-6 right-6 z-30 w-12 h-12 glass-heavy border border-[var(--border-color)] rounded-full flex items-center justify-center text-[var(--text-primary)] hover:glass-light transition-all shadow-xl hover:scale-110 active:scale-95">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center"><div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">🔥</span>
          <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'फ्लेम्स कैल्कुलेटर' : 'Flames Calculator'}
          </h1>
          <div className="w-20 h-1 bg-[var(--accent-color)] mt-6 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="glass-heavy rounded-2xl border border-[var(--border-color)] p-8">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div><label className="block text-gray-300 font-bold mb-2">{lang === 'hi' ? 'पहला नाम' : 'First Name'}</label><input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full input-glass border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-color)]/50" placeholder={lang === 'hi' ? 'पहला नाम दर्ज करें' : 'Enter first name'} required /></div>
                <div><label className="block text-gray-300 font-bold mb-2">{lang === 'hi' ? 'दूसरा नाम' : 'Second Name'}</label><input type="text" name="secondName" value={formData.secondName} onChange={handleInputChange} className="w-full input-glass border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-color)]/50" placeholder={lang === 'hi' ? 'दूसरा नाम दर्ज करें' : 'Enter second name'} required /></div>
              </div>
              <div className="text-center"><button type="submit" className="bg-gradient-to-r from-red-500 to-amber-600-500 hover:from-red-600 hover:to-amber-600-600 text-[var(--text-primary)] font-black py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-red-500/30 text-lg">{lang === 'hi' ? 'फ्लेम्स कैल्कुलेट करें' : 'Calculate Flames'}</button></div>
            </form>
          ) : (
            <div className="text-center">
              <div className="glass rounded-xl p-8 mb-6">
                <div className="text-6xl mb-4">🔥</div>
                <div className="text-4xl font-black text-red-400 mb-2">{result.percentage}%</div>
                <p className="text-gray-300 text-lg">{result.message}</p>
              </div>
              <button onClick={() => setResult(null)} className="btn-accent text-gray-800 font-bold text-[var(--text-primary)] font-bold py-2 px-6 rounded-xl transition-all">{lang === 'hi' ? 'दोबारा कैल्कुलेट करें' : 'Calculate Again'}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}





