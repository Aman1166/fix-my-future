import React, { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { useCart } from '../store';
import { gemstoneProducts, rudrakshaProducts, braceletProducts } from '../constants/data';

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category?: string;
  carat?: string;
  sign?: string;
}

function ProductCard({ product, isDark }: { product: Product; isDark: boolean }) {
  const { lang } = useContext(LanguageContext);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

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
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${isDark ? 'bg-gray-800/80 border-white/10 backdrop-blur-md' : 'bg-white border-gray-200 shadow-md'}`}
    >
      <div className={`relative h-48 overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-t from-gray-800 via-transparent to-transparent' : 'bg-linear-to-t from-white via-transparent to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      </div>

      <div className="p-4">
        <h3 className={`font-bold text-sm md:text-base line-clamp-2 mb-2 group-hover:text-amber-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {product.name}
        </h3>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-lg md:text-xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{product.price}</span>
          {product.carat && (
            <span className="text-xs px-3 py-1 bg-amber-500/20 text-amber-600 rounded-full font-bold">
              {product.carat}
            </span>
          )}
        </div>

        {added && (
          <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-xl animate-fadeIn flex items-center space-x-1 z-20">
            <span>✓</span><span>{lang === 'hi' ? 'कार्ट में जोड़ा' : 'Added!'}</span>
          </div>
        )}

        <button 
          onClick={handleAddToCart}
          className="w-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-2.5 rounded-xl transition-all text-xs uppercase tracking-wider"
        >
          {lang === 'hi' ? 'कार्ट में जोड़ें' : 'Add to Cart'} 🛒
        </button>
      </div>
    </div>
  );
}

interface ProductCategoryPageProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  categoryTitle: string;
  categoryIcon: string;
  products: Product[];
}

const ProductCategoryPage: React.FC<ProductCategoryPageProps> = ({
  isOpen,
  onClose,
  category,
  categoryTitle,
  categoryIcon,
  products
}) => {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  const displayProducts = products.length > 0 ? products : (
    category === 'gemstones' ? gemstoneProducts :
    category === 'rudraksha' ? rudrakshaProducts :
    category === 'bracelets' ? braceletProducts : []
  );

  if (!isOpen) return null;

  const descriptions: Record<string, string> = {
    gemstones: lang === 'hi' 
      ? 'प्राकृतिक रत्न - ज्योतिषीय लाभ के लिए प्रमाणित और ऊर्जावान' 
      : 'Natural gemstones - certified and energized for astrological benefits',
    rudraksha: lang === 'hi'
      ? 'नेपाली रुद्राक्ष - आध्यात्मिक शक्ति और सकारात्मक ऊर्जा के लिए'
      : 'Nepali Rudraksha - for spiritual power and positive energy',
    bracelets: lang === 'hi'
      ? 'धन योग ब्रेसलेट - समृद्धि और सौभाग्य के लिए'
      : 'Dhan Yog Bracelets - for prosperity and good fortune'
  };

  return (
    <div className={`fixed inset-0 z-64 overflow-y-auto ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className={`fixed top-6 right-6 z-30 w-12 h-12 backdrop-blur-md border rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 ${isDark ? 'bg-gray-800/80 border-white/10 text-white hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-gray-100'}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Hero Section */}
      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center">
          <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-b from-gray-800/60 via-gray-950/40 to-gray-900' : 'bg-linear-to-b from-white/60 via-white/40 to-white'}`}></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">{categoryIcon}</span>
          <h1 className={`text-4xl md:text-6xl font-black mb-3 tracking-tight drop-shadow-xl animate-slideInUp ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {categoryTitle}
          </h1>
          <p className={`text-sm md:text-lg max-w-2xl animate-fadeIn ${isDark ? 'text-white' : 'text-gray-700'}`}>
            {descriptions[category] || ''}
          </p>
          <div className="w-20 h-1 bg-amber-500 mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-amber-500 text-xs animate-pulse">✦</span>
            <span className={`tracking-[0.2em] font-extrabold text-[10px] uppercase ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
              {lang === 'hi' ? 'प्रीमियम कलेक्शन' : 'Premium Collection'}
            </span>
            <span className="text-amber-500 text-xs animate-pulse">✦</span>
          </div>
          <h2 className={`text-2xl md:text-3xl font-black text-center mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {categoryTitle} - {products.length} {lang === 'hi' ? 'उत्पाद' : 'Products'}
          </h2>
          <div className="w-16 h-0.5 bg-linear-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>
        </div>

        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} isDark={isDark} />
            ))}
          </div>
        ) : (
          <div className={`flex flex-col items-center justify-center h-64 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <div className="text-6xl mb-4 opacity-30">🛍️</div>
            <h3 className="text-2xl font-bold mb-2">No products found</h3>
            <p className="text-sm mb-6">Check back later for new arrivals</p>
            <button 
              onClick={onClose}
              className="bg-linear-to-r from-amber-500 to-amber-600 text-white font-black px-8 py-3 rounded-xl transition-all uppercase tracking-wider"
            >
              {lang === 'hi' ? 'वापस जाएं' : 'Go Back'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
