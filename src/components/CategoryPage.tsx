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
      className="group glass-strong rounded-2xl shadow-xl hover:shadow-2xl border border-amber-600/20 hover:border-amber-600/40 transition-all duration-500 flex flex-col overflow-hidden hover-3d cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-800 to-gray-800">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Badges */}
        {showCarat && product.carat && (
          <span className="absolute top-3 left-3 glass border border-amber-600/30 text-amber-600 font-black text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm neon-glow">
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
          <button onClick={handleAddToCart} className="w-full btn-cyan text-gray-800 px-4 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase shadow-2xl transition-all duration-300 flex items-center justify-center space-x-1">
            <span>{lang === 'hi' ? 'कार्ट में जोड़ें' : 'Add to Cart'}</span>
            <span className="text-sm">🛒</span>
          </button>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-gray-800/50">
        <div>
          {/* Stars */}
          <div className="flex items-center mb-2">
            <div className="flex text-amber-600 text-xs">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="drop-shadow">★</span>
              ))}
            </div>
            <span className="text-[10px] text-slate-400 font-bold ml-1.5">(120+)</span>
          </div>

          <h3 className="font-extrabold text-gray-200 text-sm md:text-base mb-2 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </div>

        <div className="flex items-baseline space-x-2 mt-2 pt-2 border-t border-amber-600/20">
          <p className="text-lg font-black text-amber-600 tracking-tight">{product.price}</p>
          <p className="text-[10px] text-slate-500 font-bold line-through">
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
        <span className="text-amber-600 text-xs animate-pulse">✦</span>
        <span className="text-amber-600 tracking-[0.2em] font-extrabold text-[10px] uppercase">
          {lang === 'hi' ? 'प्रीमियम कलेक्शन' : 'Premium Collection'}
        </span>
        <span className="text-amber-600 text-xs animate-pulse">✦</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-gray-100 mb-4 tracking-tight gradient-text-strong">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center space-x-1 mt-6">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-600-400 rounded-full"></div>
        <span className="text-amber-600 text-[8px] transform rotate-45">◆</span>
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
  const { lang, t } = useContext(LanguageContext);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-gray-800/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Category Overlay */}
      <div className="fixed inset-0 z-50 overflow-y-auto p-4 md:p-8 lg:p-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          {/* Header */}
          <div className="glass-strong rounded-3xl p-6 md:p-8 mb-6 md:mb-8 shadow-2xl border border-amber-600/30 flex items-center justify-between sticky top-4 z-10 backdrop-blur-xl bg-gray-800/90">
            <div className="flex items-center space-x-4">
              <button
                onClick={onClose}
                className="text-2xl hover:scale-110 transition-transform text-slate-400 hover:text-gray-200"
                aria-label="Close"
              >
                ←
              </button>
              <div className="text-3xl animate-pulse">{categoryIcon}</div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-gray-100 tracking-tight gradient-text-strong">
                  {categoryTitle}
                </h1>
                <p className="text-sm text-slate-400 mt-1 capitalize">
                  {category} • {products.length} {lang === 'hi' ? 'उत्पाद' : 'products'} available
                </p>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center space-x-3">
              <button className="btn-cyan px-6 py-2.5 text-sm font-black uppercase tracking-wider flex items-center space-x-2 hover:scale-105">
                <span>🔍</span>
                <span>{lang === 'hi' ? 'फ़िल्टर' : 'Filter'}</span>
              </button>
              <button className="p-2.5 rounded-xl text-slate-400 hover:text-amber-600 hover:bg-amber-700/10 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="p-2.5 rounded-xl text-slate-400 hover:text-amber-600 hover:bg-amber-700/10 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="glass-strong rounded-3xl p-6 md:p-8 flex-1 overflow-y-auto shadow-2xl border border-amber-600/20 backdrop-blur-xl bg-gray-800/70">
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
              <div className="flex flex-col items-center justify-center h-64 text-center text-slate-400">
                <div className="text-6xl mb-4 opacity-30">🛍️</div>
                <h3 className="text-2xl font-bold mb-2 text-slate-300">No products found</h3>
                <p className="text-sm mb-6">Try adjusting your filters or check back later</p>
                <button 
                  onClick={onClose}
                  className="btn-cyan px-8 py-3 font-bold uppercase tracking-wider"
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

