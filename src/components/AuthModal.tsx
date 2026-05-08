import { useState } from 'react';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-gray-800/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-gray-800 w-full max-w-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-500-500 to-amber-600 p-5 text-center relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-white/80 hover:text-white text-xl font-bold">✕</button>
          <div className="text-3xl mb-1">✨</div>
          <h2 className="text-xl font-black text-white">{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
          <p className="text-xs text-white/80 mt-1">{isLogin ? 'Login to your Fix My Future account' : 'Join Fix My Future for exclusive benefits'}</p>
        </div>

        {success ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl animate-bounce">✓</div>
            <h3 className="text-lg font-black text-white mb-2">{isLogin ? 'Login Successful!' : 'Account Created!'}</h3>
            <p className="text-sm text-gray-400">Welcome to Fix My Future! 🎉</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Enter your name" className="w-full mt-1 bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" className="w-full mt-1 bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50" />
                </div>
              </>
            )}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="your@email.com" className="w-full mt-1 bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" className="w-full mt-1 bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/50" />
            </div>

            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-xs text-amber-500 hover:text-amber-300 font-bold">Forgot Password?</button>
              </div>
            )}

            <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-600-500 hover:from-amber-600 hover:to-amber-600-600 text-gray-800 font-black py-3.5 rounded-xl shadow-xl shadow-amber-500/10 active:scale-[0.98] transition-all text-sm tracking-wider uppercase">
              {isLogin ? '🔐 Login' : '🚀 Create Account'}
            </button>

            <div className="flex items-center space-x-3 my-2">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-[10px] text-stone-500 font-bold uppercase">or continue with</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center space-x-2 bg-gray-700 border border-white/10 rounded-xl py-2.5 hover:bg-slate-700 transition-colors">
                <span className="text-lg">G</span>
                <span className="text-xs font-bold text-gray-300">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center space-x-2 bg-gray-700 border border-white/10 rounded-xl py-2.5 hover:bg-slate-700 transition-colors">
                <span className="text-lg">📱</span>
                <span className="text-xs font-bold text-gray-300">OTP Login</span>
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 mt-2">
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
