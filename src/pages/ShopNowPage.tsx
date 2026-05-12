import React, { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import { useCart } from '../store';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category?: string;
  carat?: string;
}

const allProducts: Product[] = [
  { id: 1, name: 'Dhan Yog Bracelet', price: '₹1,999', image: '/product/a1.jpg', category: 'bracelets' },
  { id: 2, name: 'Rudraksha Bracelet', price: '₹1,499', image: '/product/a2.jpg', category: 'bracelets' },
  { id: 3, name: '7 Mukhi Rudraksha', price: '₹2,499', image: '/product/a3.avif', category: 'rudraksha' },
  { id: 4, name: 'Premium Gemstone', price: '₹5,999', image: '/product/a4.webp', category: 'gemstones' },
  { id: 5, name: 'Crystal Bracelet', price: '₹999', image: '/product/a5.webp', category: 'bracelets' },
  { id: 6, name: 'Silver Bracelet', price: '₹1,799', image: '/product/a6.webp', category: 'bracelets' },
  { id: 7, name: 'Gold Bracelet', price: '₹2,999', image: '/product/a7.webp', category: 'bracelets' },
  { id: 8, name: 'Premium Bracelet', price: '₹3,499', image: '/product/a8.webp', category: 'bracelets' },
  { id: 9, name: 'Gemstone Set', price: '₹8,999', image: '/product/a9.webp', category: 'gemstones' },
  { id: 10, name: 'Blue Sapphire (Neelam)', price: '₹12,999', image: '/product/blue-sapphire.jpg', category: 'gemstones', carat: '5.2 Ct' },
  { id: 11, name: 'Emerald (Panna)', price: '₹15,999', image: '/product/emerald.jpg', category: 'gemstones', carat: '4.8 Ct' },
  { id: 12, name: 'Ruby (Manik)', price: '₹18,999', image: '/product/ruby.jpg', category: 'gemstones', carat: '6.1 Ct' },
  { id: 13, name: 'Yellow Sapphire (Pukhraj)', price: '₹14,999', image: '/product/yellow-sapphire.jpg', category: 'gemstones', carat: '5.5 Ct' },
  { id: 14, name: 'Diamond Ring', price: '₹25,999', image: '/product/jewelry-ring.jpg', category: 'gemstones', carat: '1.2 Ct' },
  { id: 15, name: '5 Mukhi Rudraksha', price: '₹1,499', image: '/product/rudraksha.jpg', category: 'rudraksha' },
];

function ProductCard({ product }: { product: Product }) {
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
    <div className="group relative bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer">
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-800 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-sm md:text-base text-white line-clamp-2 mb-2 group-hover:text-amber-500 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg md:text-xl font-black text-white">{product.price}</span>
          {product.carat && (
            <span className="text-xs px-3 py-1 bg-amber-500/20 text-white rounded-full font-bold">
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

interface ShopNowPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShopNowPage: React.FC<ShopNowPageProps> = ({ isOpen, onClose }) => {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  if (!isOpen) return null;

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
          <span className="text-5xl md:text-7xl mb-4 animate-float">🛍️</span>
          <h1 className={`text-4xl md:text-6xl font-black mb-3 tracking-tight drop-shadow-xl animate-slideInUp ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'हमारी दुकान' : 'Our Shop'}
          </h1>
          <p className={`text-sm md:text-lg max-w-2xl animate-fadeIn ${isDark ? 'text-white' : 'text-gray-700'}`}>
            {lang === 'hi' ? 'प्राकृतिक रत्न, रुद्राक्ष और ब्रेसलेट का संग्रह' : 'Collection of natural gemstones, rudraksha and bracelets'}
          </p>
          <div className="w-20 h-1 bg-amber-500 mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-amber-500 text-xs animate-pulse">✦</span>
            <span className={`tracking-[0.2em] font-extrabold text-[10px] uppercase ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
              {lang === 'hi' ? 'सभी उत्पाद' : 'All Products'}
            </span>
            <span className="text-amber-500 text-xs animate-pulse">✦</span>
          </div>
          <h2 className={`text-2xl md:text-3xl font-black text-center mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {allProducts.length} {lang === 'hi' ? 'उत्पाद उपलब्ध' : 'Products Available'}
          </h2>
          <div className="w-16 h-0.5 bg-linear-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopNowPage;
