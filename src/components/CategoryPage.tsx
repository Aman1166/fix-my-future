import React from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../App';


// Wait, ProductCard is inline in App.tsx. For consistency, recreate similar component here.
import { useCart } from '../store';

// Types (copied from App.tsx for independence)
export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category?: string;
  carat?: string;
  sign?: string;
}

// CategoryProductCard Component (recreated to match App.tsx exactly)
function CategoryProductCard({ product, showCarat = false }: { product: Product; showCarat?: boolean }) {
  const { lang } = useContext(LanguageContext);
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);
  const [added, setAdded] = React.useState(false);

  const priceNum = parseInt(product.price.replace(/[^\d]/g, '')) || 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      priceNum,
      image: product.image,
      category: product.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group glass-heavy rounded-2xl shadow-xl hover:shadow-2xl border border-[var(--accent-color)]/20 hover:border-[var(--accent-color)]/40 transition-all duration-500 flex flex-col overflow-hidden hover-3d cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-square glass-light">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <button className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-[var(--text-primary)] hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
          <i className="far fa-heart"></i>
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>


        {/* Badges */}
        {showCarat && product.carat && (
          <span className="absolute top-3 left-3 glass border border-[var(--accent-color)]/30 text-[var(--accent-color)] font-black text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full shadow-lg  neon-glow">
            ✦ {product.carat}
          </span>
        )}



        {/* Added Toast */}
        {added && (
          <div className="absolute top-3 right-3 bg-emerald-500 text-gray-800 text-[10px] font-black px-3 py-1.5 rounded-full shadow-xl animate-fadeIn flex items-center space-x-1 z-20 border border-emerald-400">
            <span>✓</span><span>{lang === 'hi' ? 'कार्ट में जोड़ा' : 'Added!'}</span>
          </div>
        )}

        {/* Add Button */}
        <div className={`absolute inset-x-0 bottom-4 px-4 flex justify-center transition-all duration-300 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button onClick={handleAddToCart} className="w-full btn-accent text-gray-800 px-4 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase shadow-2xl transition-all duration-300 flex items-center justify-center space-x-1">
            <span>{lang === 'hi' ? 'कार्ट में जोड़ें' : 'Add to Cart'}</span>
            <span className="text-sm">🛒</span>
          </button>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between glass-light">
        <div>
          {/* Stars */}
          <div className="flex items-center mb-2">
            <div className="flex text-[var(--accent-color)] text-xs">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="drop-shadow">★</span>
              ))}
            </div>
            <span className="text-[10px] text-text-muted font-bold ml-1.5">(120+)</span>
          </div>

          <h3 className="font-extrabold text-text-main text-sm md:text-base mb-2 group-hover:text-accent-theme transition-colors line-clamp-2 leading-snug">

            {product.name}
          </h3>
        </div>

        <div className="flex items-baseline space-x-2 mt-2 pt-2 border-t border-[var(--accent-color)]/20">
          <p className="text-lg font-black text-[var(--accent-color)] tracking-tight">{product.price}</p>
          <p className="text-[10px] text-text-muted font-bold line-through">
            ₹{parseInt(product.price.replace(/[^\d]/g, '')) * 2 - 1}
          </p>
        </div>
      </div>
    </div>
  );
}

// SectionHeader (recreated)
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <span className="text-[var(--accent-color)] text-xs animate-pulse">✦</span>
        <span className="text-[var(--accent-color)] tracking-[0.2em] font-extrabold text-[10px] uppercase">
          {lang === 'hi' ? 'प्रीमियम कलेक्शन' : 'Premium Collection'}
        </span>
        <span className="text-[var(--accent-color)] text-xs animate-pulse">✦</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-text-main mb-4 tracking-tight gradient-text-strong">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center space-x-1 mt-6">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-600-400 rounded-full"></div>
        <span className="text-[var(--accent-color)] text-[8px] transform rotate-45">◆</span>
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-600-400 rounded-full"></div>
      </div>
    </div>
  );
}

// ProductGrid (recreated)
function ProductGrid({ products, showCarat = false }: { products: Product[]; showCarat?: boolean }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {products.map((product) => (
<CategoryProductCard key={product.id} product={product} showCarat={showCarat} />
      ))}
    </div>
  );
}

// Main CategoryPage Component
interface CategoryPageProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  categoryTitle: string;
  categoryIcon: string;
  products: Product[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  isOpen,
  onClose,
  category,
  categoryTitle,
  categoryIcon,
  products
}) => {
  const { lang } = useContext(LanguageContext);


  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 glass-heavy transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Category Overlay */}
      <div className="fixed inset-0 z-50 overflow-y-auto p-4 md:p-8 lg:p-12 transition-all duration-300">
        <button onClick={onClose} className="fixed top-6 right-6 z-30 w-12 h-12 glass-heavy border border-[var(--border-color)] rounded-full flex items-center justify-center text-[var(--text-primary)] hover:glass-light transition-all shadow-xl hover:scale-110 active:scale-95">
          <i className="fas fa-times text-xl"></i>
        </button>
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          {/* Header */}
          <div className="glass-heavy rounded-3xl p-6 md:p-8 mb-6 md:mb-8 shadow-2xl border border-accent-theme/30 flex items-center justify-between sticky top-4 z-10 backdrop-blur-xl bg-bg-primary/90">

            <div className="flex items-center space-x-4">
              <button
                onClick={onClose}
                className="text-2xl hover:scale-110 transition-transform text-text-muted hover:text-[var(--text-primary)]"
                aria-label="Close"
              >
                ←
              </button>
              <div className="text-3xl animate-pulse">{categoryIcon}</div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-text-main tracking-tight gradient-text-strong">

                  {categoryTitle}
                </h1>
                <p className="text-sm text-text-muted mt-1 capitalize">
                  {category} • {products.length} {lang === 'hi' ? 'उत्पाद' : 'products'} available
                </p>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-3 mb-6">
                <i className="fas fa-filter text-[var(--accent-color)]"></i>
                <h3 className="font-bold text-[var(--text-primary)] uppercase tracking-widest text-xs">{lang === 'hi' ? 'फ़िल्टर' : 'Filter by Category'}</h3>
              </div>
              <button className="btn-accent px-6 py-2.5 text-sm font-black uppercase tracking-wider flex items-center space-x-2 hover:scale-105">
                <i className="fas fa-filter"></i>
                <span>{lang === 'hi' ? 'फ़िल्टर' : 'Filter'}</span>
              </button>
              <button className="p-2.5 rounded-xl text-text-muted hover:text-[var(--accent-color)] hover:bg-[var(--accent-color)]/10 transition-all">
                <i className="far fa-heart text-xl"></i>
              </button>
              <button className="p-2.5 rounded-xl text-text-muted hover:text-[var(--accent-color)] hover:bg-[var(--accent-color)]/10 transition-all">
                <i className="fas fa-shopping-bag text-xl"></i>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="glass-heavy rounded-3xl p-6 md:p-8 flex-1 overflow-y-auto shadow-2xl border border-accent-theme/20 backdrop-blur-xl bg-bg-primary/70">

            {/* Category Description */}
            <div className="mb-8 text-center">
              <SectionHeader 
                title={categoryTitle} 
                subtitle={lang === 'hi' ? `सर्वश्रेष्ठ ${categoryTitle.toLowerCase()} संग्रह। प्रामाणिक और ज्योतिषीय रूप से सिद्ध।` : `Premium ${categoryTitle.toLowerCase()} collection. Authentic & astrologically certified.`}
              />
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <ProductGrid products={products} showCarat={false} />
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center text-text-muted">
                <div className="text-6xl mb-4 opacity-30">🛍️</div>
                <h3 className="text-2xl font-bold mb-2 text-text-main">No products found</h3>

                <p className="text-sm mb-6">Try adjusting your filters or check back later</p>
                <button 
                  onClick={onClose}
                  className="btn-accent px-8 py-3 font-bold uppercase tracking-wider"
                >
                  Browse All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;







