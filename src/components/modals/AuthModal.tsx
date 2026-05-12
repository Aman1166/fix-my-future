import { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { isDark } = useContext(ThemeContext);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      setEmail('');
      setPassword('');
      setName('');
      setPhone('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      <div className={`fixed inset-0 backdrop-blur-sm ${isDark ? 'bg-gray-800/80' : 'bg-white/80'}`} onClick={onClose}></div>
      <div className={`relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-fadeIn ${isDark ? 'bg-gray-800 border border-white/10' : 'bg-white border border-gray-200'}`}>
        {/* Header */}
        <div className="bg-linear-to-r from-amber-600 via-amber-500 to-amber-600 p-5 text-center relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-white/80 hover:text-white text-xl font-bold">✕</button>
          <div className="text-3xl mb-1 flex justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: '32px' }}>auto_awesome</span></div>
          <h2 className="text-xl font-black text-white">{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
          <p className="text-xs text-white/80 mt-1">{isLogin ? 'Login to your Fix My Future account' : 'Join Fix My Future for exclusive benefits'}</p>
        </div>

        {success ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>check</span>
            </div>
            <h3 className={`text-lg font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{isLogin ? 'Login Successful!' : 'Account Created!'}</h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Welcome to Fix My Future! 🎉</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Full Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Enter your name" className={`w-full mt-1 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'}`} />
                </div>
                <div>
                  <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Phone Number</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" className={`w-full mt-1 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'}`} />
                </div>
              </>
            )}
            <div>
              <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="your@email.com" className={`w-full mt-1 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'}`} />
            </div>
            <div>
              <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" className={`w-full mt-1 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'}`} />
            </div>

            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-xs text-amber-500 hover:text-amber-300 font-bold">Forgot Password?</button>
              </div>
            )}

            <button type="submit" className="w-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-3.5 rounded-xl shadow-xl shadow-amber-500/10 active:scale-[0.98] transition-all text-sm tracking-wider uppercase flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">{isLogin ? 'lock' : 'rocket_launch'}</span>
              <span>{isLogin ? 'Login' : 'Create Account'}</span>
            </button>

            <div className="flex items-center space-x-3 my-2">
              <div className={`flex-1 h-px ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}></div>
              <span className={`text-[10px] font-bold uppercase ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>or continue with</span>
              <div className={`flex-1 h-px ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className={`flex items-center justify-center space-x-2 rounded-xl py-2.5 transition-colors ${isDark ? 'bg-gray-700 border border-white/10 hover:bg-slate-700' : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'}`}>
                <span className="text-lg">G</span>
                <span className={`text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Google</span>
              </button>
              <button type="button" className={`flex items-center justify-center space-x-2 rounded-xl py-2.5 transition-colors ${isDark ? 'bg-gray-700 border border-white/10 hover:bg-slate-700' : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'}`}>
                <span className="material-symbols-outlined text-sm">phone_iphone</span>
                <span className={`text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>OTP Login</span>
              </button>
            </div>

            <p className={`text-center text-xs mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-amber-500 font-bold hover:text-amber-300">
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
