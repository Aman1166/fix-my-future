import { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Product } from '../../constants/data';

export default function SearchOverlay({ isOpen, onClose, allProducts }: { isOpen: boolean; onClose: () => void; allProducts: Product[] }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    const lower = query.toLowerCase();
    setResults(allProducts.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      (p.category && p.category.toLowerCase().includes(lower)) ||
      (p.carat && p.carat.toLowerCase().includes(lower))
    ).slice(0, 10));
  }, [query, allProducts]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60">
      <div className={`fixed inset-0 backdrop-blur-md ${isDark ? 'bg-gray-800/90' : 'bg-white/90'}`} onClick={onClose}></div>
      <div className="relative z-10 max-w-2xl mx-auto mt-20 px-4 animate-fadeIn">
        {/* Search Box */}
        <div className={`rounded-2xl shadow-2xl border overflow-hidden ${isDark ? 'bg-gray-800 border-white/10' : 'bg-white border-gray-200'}`}>
          <div className={`flex items-center p-4 border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
            <svg className="w-6 h-6 text-amber-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search gemstones, rudraksha, bracelets..."
              className={`flex-1 bg-transparent text-lg focus:outline-none ${isDark ? 'text-white placeholder-stone-500' : 'text-gray-900 placeholder-gray-400'}`}
            />
            <button onClick={onClose} className={`ml-3 font-bold text-sm px-3 py-1 rounded-lg ${isDark ? 'text-gray-400 hover:text-white bg-white/10' : 'text-gray-500 hover:text-gray-900 bg-gray-100'}`}>ESC</button>
          </div>

          {/* Results */}
          {query.trim().length >= 2 && (
            <div className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="text-4xl mb-3"><span className="material-symbols-outlined" style={{ fontSize: '48px' }}>search</span></div>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>No products found for "{query}"</p>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Try searching for "emerald", "rudraksha", or "bracelet"</p>
                </div>
              ) : (
                <div className="p-2">
                  <p className={`text-[10px] font-bold uppercase tracking-wider px-3 py-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{results.length} results found</p>
                  {results.map(product => (
                    <a
                      key={product.id}
                      href={`#${product.category || 'gemstones'}`}
                      onClick={onClose}
                      className={`flex items-center space-x-4 p-3 rounded-xl transition-colors group ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}
                    >
                      <img src={product.image} alt={product.name} className={`w-14 h-14 rounded-lg object-cover border transition-colors ${isDark ? 'border-white/10 group-hover:border-amber-500/30' : 'border-gray-200 group-hover:border-amber-500/50'}`} />
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-bold text-sm truncate transition-colors ${isDark ? 'text-white group-hover:text-amber-500' : 'text-gray-900 group-hover:text-amber-600'}`}>{product.name}</h4>
                        <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{product.category || 'Gemstone'}{product.carat ? ` • ${product.carat}` : ''}</p>
                      </div>
                      <span className="font-black text-amber-500 text-sm shrink-0">{product.price}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Quick Searches */}
          {query.trim().length < 2 && (
            <div className="p-4">
              <p className={`text-[10px] font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Emerald', 'Rudraksha', 'Dhan Yog Bracelet', 'Ruby', 'Zodiac', 'Amethyst', '7 Mukhi'].map(term => (
                  <button key={term} onClick={() => setQuery(term)} className={`px-3 py-1.5 border rounded-full text-xs font-bold transition-colors ${isDark ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-amber-500/10 hover:text-amber-500 hover:border-amber-500/20' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-500/30'}`}>
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
