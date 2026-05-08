import { useState, useEffect, useRef } from 'react';
import { Product } from '../App';

export default function SearchOverlay({ isOpen, onClose, allProducts }: { isOpen: boolean; onClose: () => void; allProducts: Product[] }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

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
    <div className="fixed inset-0 z-[60]">
      <div className="fixed inset-0 bg-[var(--primary-bg)]/90 " onClick={onClose}></div>
      <div className="relative z-10 max-w-2xl mx-auto mt-20 px-4 animate-fadeIn">
        {/* Search Box */}
        <div className="bg-[var(--primary-bg)] rounded-2xl shadow-2xl border border-[var(--border-color)] overflow-hidden">
          <div className="flex items-center p-4 border-b border-[var(--border-color)]">
            <i className="fas fa-search text-[var(--accent-color)] mr-3 flex-shrink-0 text-xl"></i>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search gemstones, rudraksha, bracelets..."
              className="flex-1 bg-transparent text-[var(--text-primary)] text-lg placeholder-[var(--text-secondary)] focus:outline-none"
            />
            <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] ml-3 font-bold text-sm bg-[var(--bg-secondary)] px-3 py-1 rounded-lg">ESC</button>
          </div>

          {/* Results */}
          {query.trim().length >= 2 && (
            <div className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="text-4xl mb-3"><i className="fas fa-search text-text-muted"></i></div>
                  <p className="text-[var(--text-secondary)] font-medium">No products found for "{query}"</p>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">Try searching for "emerald", "rudraksha", or "bracelet"</p>
                </div>
              ) : (
                <div className="p-2">
                  <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-wider px-3 py-2">{results.length} results found</p>
                  {results.map(product => (
                    <a
                      key={product.id}
                      href={`#${product.category || 'gemstones'}`}
                      onClick={onClose}
                      className="flex items-center space-x-4 p-3 rounded-xl hover:bg-[var(--accent-color)]/5 transition-colors group"
                    >
                      <img src={product.image} alt={product.name} className="w-14 h-14 rounded-lg object-cover border border-[var(--border-color)] group-hover:border-[var(--accent-color)]/30 transition-colors" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-[var(--text-primary)] text-sm truncate group-hover:text-[var(--accent-color)] transition-colors">{product.name}</h4>
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">{product.category || 'Gemstone'}{product.carat ? ` • ${product.carat}` : ''}</p>
                      </div>
                      <span className="font-black text-[var(--accent-color)] text-sm flex-shrink-0">{product.price}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Quick Searches */}
          {query.trim().length < 2 && (
            <div className="p-4">
              <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-wider mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Emerald', 'Rudraksha', 'Dhan Yog Bracelet', 'Ruby', 'Zodiac', 'Amethyst', '7 Mukhi'].map(term => (
                  <button key={term} onClick={() => setQuery(term)} className="px-3 py-1.5 bg-[var(--accent-color)]/5 border border-[var(--border-color)] rounded-full text-xs font-bold text-gray-300 hover:bg-[var(--accent-color)]/10 hover:text-[var(--accent-color)] hover:border-[var(--accent-color)]/20 transition-colors">
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






