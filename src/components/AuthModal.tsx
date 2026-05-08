import { useState } from 'react';

export default function AuthModal({ 
  isOpen, 
  onClose,
  variant = 'heavy'
}: { 
  isOpen: boolean; 
  onClose: () => void;
  variant?: 'light' | 'medium' | 'heavy';
}) {
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

  const glassClass = variant === 'light' ? 'glass-light' : variant === 'heavy' ? 'glass-heavy' : 'glass';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-[var(--primary-bg)]/80 " onClick={onClose}></div>
      <div className={`relative ${glassClass} w-full max-w-md rounded-2xl shadow-2xl border border-[var(--border-color)] overflow-hidden animate-fadeIn`}>
        {/* Header */}
        <div className="bg-accent-gradient p-5 text-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-text-muted hover:text-[var(--text-primary)] transition-colors">
            <i className="fas fa-times text-xl"></i>
          </button>
          <div className="text-3xl mb-1"><i className="fas fa-sparkles text-yellow-400"></i></div>
          <h2 className="text-xl font-black text-gray-900">{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
          <p className="text-xs text-gray-900/80 mt-1">{isLogin ? 'Login to your Fix My Future account' : 'Join Fix My Future for exclusive benefits'}</p>
        </div>

        {success ? (
          <div className="p-8 text-center text-[var(--text-primary)]">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl animate-bounce"><i className="fas fa-check"></i></div>
            <h3 className="text-lg font-black mb-2">{isLogin ? 'Login Successful!' : 'Account Created!'}</h3>
            <p className="text-sm text-[var(--text-secondary)]">Welcome to Fix My Future! 🎉</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Full Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Enter your name" className="w-full mt-1 input-glass rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Phone Number</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" className="w-full mt-1 input-glass rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]" />
                </div>
              </>
            )}
            <div>
              <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="your@email.com" className="w-full mt-1 input-glass rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]" />
            </div>
            <div>
              <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" className="w-full mt-1 input-glass rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]" />
            </div>

            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] font-bold transition-colors">Forgot Password?</button>
              </div>
            )}

            <button type="submit" className="w-full btn-accent text-gray-900 font-black py-3.5 rounded-xl shadow-xl active:scale-[0.98] transition-all text-sm tracking-wider uppercase">
              {isLogin ? '🔐 Login' : '🚀 Create Account'}
            </button>

            <div className="flex flex-col gap-3">
              <div className="flex items-center space-x-3 my-2">
                <div className="flex-1 h-px bg-[var(--bg-secondary)]"></div>
                <span className="text-[10px] text-[var(--text-secondary)] font-bold uppercase">or continue with</span>
                <div className="flex-1 h-px bg-[var(--bg-secondary)]"></div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: <i className="fab fa-google text-red-500"></i>, label: 'Google' },
                  { icon: <i className="fab fa-facebook-f text-blue-600"></i>, label: 'Facebook' },
                  { icon: <i className="fab fa-apple text-gray-800 dark:text-white"></i>, label: 'Apple' },
                ].map((social) => (
                  <button key={social.label} type="button" className="w-full glass hover:bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-center space-x-3 transition-all active:scale-95">
                    <span className="text-xl">{social.icon}</span>
                    <span className="text-sm font-bold text-gray-300">{social.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-[var(--text-secondary)] mt-2">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-[var(--accent-color)] font-bold hover:text-[var(--text-primary)] transition-colors">
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}






