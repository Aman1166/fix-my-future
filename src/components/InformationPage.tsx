import { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import { useCart } from '../store';

type InfoPageType = 'about' | 'contact' | 'faq' | 'shipping' | 'returns' | 'pooja' | 'store' | 'blogs' | 'terms' | 'policy';


// Store Content Component
function StoreContent() {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());

  const storeProducts = [
    { id: 109, name: lang === 'hi' ? 'ब्राजीलियन एमरल्ड' : 'Brazilian Emerald', price: '₹15,999', image: '/product/emerald.jpg', category: 'gemstones' },
    { id: 110, name: lang === 'hi' ? 'अफ्रीकी माणिक्य' : 'African Ruby', price: '₹22,999', image: '/product/ruby.jpg', category: 'gemstones' },
    { id: 111, name: lang === 'hi' ? 'पीला पुखराज' : 'Yellow Sapphire', price: '₹19,999', image: '/product/yellow-sapphire.jpg', category: 'gemstones' },
  ];

  const handleAddToCart = (product: typeof storeProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      priceNum: parseInt(product.price.replace(/[^0-9]/g, '')) || 0,
      image: product.image,
    });
    setAddedItems(new Set([...addedItems, product.id]));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Filter Section */}
      <div className="flex flex-wrap gap-3 justify-center">
        {['all'].map((cat) => (
          <button
            key={cat}
            className="px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 glass hover:glass-strong hover:text-amber-400 hover:scale-105 active:scale-95"
          >
            {cat === 'all' ? (lang === 'hi' ? 'सभी' : 'All') : (lang === 'hi' ? 'रत्न' : 'Gemstones')}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {storeProducts.map((product) => (
          <div
            key={product.id}
            className={`group relative backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-600-500/20 ${isDark ? 'bg-gray-700/50 border-amber-600/20 hover:border-amber-600/50' : 'bg-white border-gray-200 hover:border-amber-500/50 shadow-md'}`}
          >
            {/* Product Image */}
            <div className={`relative h-48 overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-linear-to-t from-gray-800 via-transparent to-transparent' : 'bg-linear-to-t from-black/20 via-transparent to-transparent'}`}></div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className={`font-bold text-sm md:text-base line-clamp-2 mb-2 transition-colors ${isDark ? 'text-gray-200 group-hover:text-amber-600-300' : 'text-gray-800 group-hover:text-amber-600'}`}>
                {product.name}
              </h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg md:text-xl font-black text-amber-600">{product.price}</span>
                <span className="text-xs px-3 py-1 bg-amber-700/20 text-amber-400 rounded-full font-bold">
                  {(lang === 'hi' ? 'रत्न' : 'Gemstone')}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className={`w-full py-3 font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-300 active:scale-95 ${
                  addedItems.has(product.id)
                    ? 'bg-green-500/30 text-green-300 border border-green-500/50'
                    : 'bg-amber-700/20 text-amber-400 border border-amber-600/50 hover:bg-amber-700/40 hover:text-amber-200 hover:scale-105'
                }`}
              >
                {addedItems.has(product.id) ? `✓ ${lang === 'hi' ? 'जोड़ा गया' : 'Added'}` : <span><i className="fa-solid fa-cart-shopping"></i> {lang === 'hi' ? 'कार्ट में जोड़ें' : 'Add to Cart'}</span>}
              </button>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-yellow-400"><i className="fa-solid fa-star"></i></span>
                ))}
              </div>
            </div>

            {/* Quick view badge */}
            <div className="absolute top-3 right-3 bg-amber-700/80 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              <i className="fa-solid fa-bolt text-amber-500"></i> {lang === 'hi' ? 'लोकप्रिय' : 'Popular'}
            </div>
          </div>
        ))}
      </div>

      {/* Store Features */}
      <div className={`grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t ${isDark ? 'border-amber-600/20' : 'border-gray-200'}`}>
        <div className="text-center">
          <div className="text-4xl mb-3"><i className="fa-solid fa-truck-fast text-amber-500"></i></div>
          <h4 className="font-bold text-amber-500 mb-2">{lang === 'hi' ? 'तेज़ डिलीवरी' : 'Fast Delivery'}</h4>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{lang === 'hi' ? '3-5 दिनों में पूरे भारत में डिलीवरी' : 'Delivery across India in 3-5 days'}</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-3"><i className="fa-solid fa-certificate text-amber-500"></i></div>
          <h4 className="font-bold text-amber-500 mb-2">{lang === 'hi' ? 'प्रमाणित उत्पाद' : 'Certified Products'}</h4>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{lang === 'hi' ? 'सभी उत्पाद प्रमाणित और परीक्षित' : 'All products certified & tested'}</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-3"><i className="fa-solid fa-rotate-left text-amber-500"></i></div>
          <h4 className="font-bold text-amber-500 mb-2">{lang === 'hi' ? 'आसान रिटर्न' : 'Easy Returns'}</h4>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{lang === 'hi' ? '15 दिनों के भीतर बिना सवाल के' : '15 days no questions asked'}</p>
        </div>
      </div>
    </div>
  );
}


// Blog Content Component
function BlogContent() {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  const blogPosts = [
    {
      id: 1,
      title: lang === 'hi' ? 'रत्नों की शक्ति: आपके जीवन को कैसे बदल सकते हैं' : 'The Power of Gemstones: How They Can Transform Your Life',
      category: lang === 'hi' ? 'रत्न' : 'Gemstones',
      image: '/blog/stone.jpg',
      height: 'aspect-[4/5]',
      date: 'May 10, 2026',
      readTime: '5 min'
    },
    {
      id: 2,
      title: lang === 'hi' ? 'आधुनिक समय में वैदिक ज्योतिष का महत्व' : 'Importance of Vedic Astrology in Modern Times',
      category: lang === 'hi' ? 'ज्योतिष' : 'Astrology',
      image: '/blog/Vedic.jpg',
      height: 'aspect-[3/4]',
      date: 'May 08, 2026',
      readTime: '8 min'
    },
    {
      id: 3,
      title: lang === 'hi' ? 'अपनी सूर्य राशि को गहराई से समझें' : 'Understand Your Sun Sign in Depth',
      category: lang === 'hi' ? 'राशिफल' : 'Horoscopes',
      image: '/blog/Sun.jpg',
      height: 'aspect-square',
      date: 'May 05, 2026',
      readTime: '6 min'
    },
    {
      id: 4,
      title: lang === 'hi' ? 'आंतरिक शांति के लिए ध्यान के सरल तरीके' : 'Simple Ways to Meditate for Inner Peace',
      category: lang === 'hi' ? 'आध्यात्मिकता' : 'Spirituality',
      image: '/blog/depth.jpg',
      height: 'aspect-[16/9]',
      date: 'May 02, 2026',
      readTime: '4 min'
    },
    {
      id: 5,
      title: lang === 'hi' ? 'रुद्राक्ष: दिव्य बीज के रहस्य' : 'Rudraksha: Secrets of the Divine Seed',
      category: lang === 'hi' ? 'रुद्राक्ष' : 'Rudraksha',
      image: '/blog/rudraksha.jpg',
      height: 'aspect-[4/5]',
      date: 'Apr 28, 2026',
      readTime: '7 min'
    },
    {
      id: 6,
      title: lang === 'hi' ? 'वास्तु शास्त्र: अपने घर में खुशहाली लाएं' : 'Vastu Shastra: Bringing Prosperity to Your Home',
      category: lang === 'hi' ? 'वास्तु' : 'Vastu',
      image: '/blog/vastu.png',
      height: 'aspect-[3/4]',
      date: 'Apr 25, 2026',
      readTime: '10 min'
    }
  ];

  return (
    <div className="space-y-12 pb-20">
      {/* Section Indicator */}
      <div className="flex items-start gap-6 animate-fadeIn">
        <div className="flex flex-col items-center">
          <span className={`text-xs font-black tracking-tighter mb-2 ${isDark ? 'text-amber-500/50' : 'text-[#083f1d]/50'}`}></span>
          <div className={`w-px h-24 ${isDark ? 'bg-linear-to-b from-amber-500 to-transparent' : 'bg-linear-to-b from-[#083f1d] to-transparent'}`}></div>
        </div>
        <div className="pt-2">
          <h2 className={`text-3xl md:text-5xl font-black tracking-tighter uppercase mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'हमारे लेख' : 'Our Insights'}
          </h2>
          <p className={`text-sm md:text-base max-w-xl ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            {lang === 'hi' 
              ? 'ज्योतिष, अध्यात्म और जीवन शैली पर हमारे विशेषज्ञों के गहन विचार और लेख।' 
              : 'Deep thoughts and articles by our experts on astrology, spirituality and lifestyle.'}
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className={`break-inside-avoid relative group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover-3d ${isDark ? 'bg-gray-800 border border-white/5' : 'bg-white border border-gray-200 shadow-xl'}`}
          >
            {/* Featured Image */}
            <div className={`relative overflow-hidden ${post.height}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay Gradient */}
              <div className={`absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 ${isDark ? 'bg-linear-to-t from-gray-900 via-transparent to-transparent' : 'bg-linear-to-t from-black/40 via-transparent to-transparent'}`}></div>
              
              {/* Caption Tag (Style from sample) */}
              <div className="absolute bottom-4 right-4">
                <span className="bg-black/40 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-lg border border-white/10 font-bold tracking-widest uppercase">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Post Details */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                  {post.date}
                </span>
                <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`}></span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                  {post.readTime} read
                </span>
              </div>
              <h3 className={`text-xl font-black leading-tight mb-4 group-hover:text-amber-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {post.title}
              </h3>
              
              {/* Action Button (Style from sample) */}
              <button className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 group/btn ${isDark ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                <span>{lang === 'hi' ? 'लेख पढ़ें' : 'Read Article'}</span>
                <span className="w-8 h-px bg-current transition-all duration-300 group-hover/btn:w-12"></span>
              </button>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-linear-to-br from-amber-500/10 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Call to Action Footer (Style from sample) */}
      <div className={`mt-20 p-10 rounded-[3rem] text-center relative overflow-hidden group ${isDark ? 'bg-gray-800/80 border border-white/5' : 'bg-gray-50 border border-gray-200'}`}>
        <div className="relative z-10">
          <h3 className={`text-2xl md:text-4xl font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'hi' ? 'कुछ नया सीखना चाहते हैं?' : 'Want to discover more?'}
          </h3>
          <p className={`text-sm md:text-base mb-8 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            {lang === 'hi' 
              ? 'हमारे न्यूज़लेटर को सब्सक्राइब करें और हर हफ्ते नए लेख और भविष्यवाणियां प्राप्त करें।' 
              : 'Subscribe to our newsletter and receive new articles and predictions every week.'}
          </p>
          <button className="btn-cyan px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all">
            {lang === 'hi' ? 'न्यूज़लेटर सब्सक्राइब करें' : 'Subscribe to Newsletter'}
          </button>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[120px] rounded-full group-hover:bg-amber-500/10 transition-all duration-500"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 blur-[120px] rounded-full group-hover:bg-cyan-500/10 transition-all duration-500"></div>
      </div>
    </div>
  );
}

export default function InformationPage({
  isOpen,
  onClose,
  page,
}: {
  isOpen: boolean;
  onClose: () => void;
  page: InfoPageType;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  if (!isOpen) return null;

  const pageContent = {
    about: {
      icon: <i className="fa-solid fa-sparkles"></i>,
      title: lang === 'hi' ? 'हमारे बारे में' : 'About Us',
      subtitle:
        lang === 'hi'
          ? 'Fix My Future — आपका भरोसेमंद ज्योतिष और रत्न प्लेटफॉर्म'
          : 'Fix My Future — Your trusted astrology and gemstone platform',
    },
    contact: {
      icon: <i className="fa-solid fa-phone"></i>,
      title: lang === 'hi' ? 'संपर्क करें' : 'Contact Us',
      subtitle:
        lang === 'hi'
          ? 'हमारी टीम आपकी सहायता के लिए हमेशा तैयार है'
          : 'Our team is always ready to help you',
    },
    faq: {
      icon: <i className="fa-solid fa-circle-question"></i>,
      title: lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions',
      subtitle:
        lang === 'hi'
          ? 'आपके सामान्य सवालों के जवाब'
          : 'Answers to your most common questions',
    },
    shipping: {
      icon: <i className="fa-solid fa-truck-fast"></i>,
      title: lang === 'hi' ? 'शिपिंग पॉलिसी' : 'Shipping Policy',
      subtitle:
        lang === 'hi'
          ? 'डिलीवरी और शिपिंग की पूरी जानकारी'
          : 'Complete delivery and shipping information',
    },
    returns: {
      icon: <i className="fa-solid fa-rotate-left"></i>,
      title: lang === 'hi' ? 'रिटर्न पॉलिसी' : 'Returns Policy',
      subtitle:
        lang === 'hi'
          ? 'रिटर्न और रिफंड की जानकारी'
          : 'Return and refund details',
    },
    pooja: {
      icon: <i className="fa-solid fa-om"></i>,
      title: lang === 'hi' ? 'पूजा बुक करें' : 'Book A Pooja',
      subtitle:
        lang === 'hi'
          ? 'घर बैठे पूजा करवाएं'
          : 'Book pooja from home',
    },
    store: {
      icon: <i className="fa-solid fa-cart-shopping"></i>,
      title: lang === 'hi' ? 'एस्ट्रोटॉक स्टोर' : 'Astrotalk Store',
      subtitle:
        lang === 'hi'
          ? 'ज्योतिष संबंधित प्रोडक्ट्स'
          : 'Astrology related products',
    },
    blogs: {
      icon: <i className="fa-solid fa-file-contract"></i>,
      title: lang === 'hi' ? 'ब्लॉग' : 'Blogs',
      subtitle:
        lang === 'hi'
          ? 'ज्योतिष और आत्मा से संबंधित लेख'
          : 'Articles on astrology and spirituality',
    },
    terms: {
      icon: <i className="fa-solid fa-scale-balanced"></i>,
      title: lang === 'hi' ? 'सेवा की शर्तें' : 'Terms of Service',
      subtitle:
        lang === 'hi'
          ? 'Fix My Future के उपयोग के नियम और शर्तें'
          : 'Terms and conditions for using Fix My Future',
    },
    policy: {
      icon: <i className="fa-solid fa-shield-halved"></i>,
      title: lang === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy',
      subtitle:
        lang === 'hi'
          ? 'आपकी जानकारी की सुरक्षा और गोपनीयता'
          : 'Your information security and privacy',
    },

  } as const;

  const faqItems = [
    {
      q: lang === 'hi' ? 'क्या आपके रत्न प्रमाणित होते हैं?' : 'Are your gemstones certified?',
      a:
        lang === 'hi'
          ? 'हाँ, हमारे सभी रत्न प्रमाणित और लैब-टेस्टेड होते हैं। हर प्रोडक्ट के साथ authenticity assurance दी जाती है।'
          : 'Yes, all our gemstones are certified and lab-tested. Every product comes with authenticity assurance.',
    },
    {
      q: lang === 'hi' ? 'डिलीवरी में कितना समय लगता है?' : 'How long does delivery take?',
      a:
        lang === 'hi'
          ? 'सामान्यतः 3-5 business days में delivery हो जाती है। Metro cities में delivery और तेज हो सकती है।'
          : 'Typically delivery takes 3-5 business days. Delivery can be faster in metro cities.',
    },
    {
      q: lang === 'hi' ? 'क्या मैं astrology consultation book कर सकता हूँ?' : 'Can I book an astrology consultation?',
      a:
        lang === 'hi'
          ? 'हाँ, आप AI astrologer से free में बात कर सकते हैं या expert astrologers से paid consultation भी book कर सकते हैं।'
          : 'Yes, you can chat with our AI astrologer for free or book a paid consultation with expert astrologers.',
    },
    {
      q: lang === 'hi' ? 'क्या COD available है?' : 'Is Cash on Delivery available?',
      a:
        lang === 'hi'
          ? 'हाँ, selected locations पर Cash on Delivery उपलब्ध है। Checkout page पर यह option दिखेगा।'
          : 'Yes, Cash on Delivery is available for selected locations. You will see the option on the checkout page.',
    },
  ];

  const current = pageContent[page];

  return (
    <div className={`fixed inset-0 z-64 overflow-y-auto ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <button
        onClick={onClose}
        className={`fixed top-6 right-6 z-30 w-12 h-12 backdrop-blur-md border rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 ${isDark ? 'bg-gray-800/80 border-white/10 text-white hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-gray-100'}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center">
          <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-b from-gray-800/60 via-gray-950/40 to-gray-900' : 'bg-linear-to-b from-white/60 via-white/40 to-white'}`}></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">{current.icon}</span>
          <h1 className={`text-4xl md:text-6xl font-black mb-3 tracking-tight drop-shadow-xl animate-slideInUp ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {current.title}
          </h1>
          <p className={`text-sm md:text-lg max-w-2xl animate-fadeIn ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{current.subtitle}</p>
          <div className="w-20 h-1 bg-amber-700 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        {page === 'about' && (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className={`backdrop-blur-md rounded-2xl border p-6 ${isDark ? 'bg-gray-800/80 border-white/10' : 'bg-gray-50 border-gray-200 shadow-lg'}`}>
              <h3 className={`font-black text-2xl mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {lang === 'hi' ? 'हमारी कहानी' : 'Our Story'}
              </h3>
              <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {lang === 'hi'
                  ? 'Fix My Future एक modern spiritual commerce platform है जहाँ certified gemstones, authentic rudraksha, astrology guidance और personalized recommendations एक ही जगह मिलते हैं।'
                  : 'Fix My Future is a modern spiritual commerce platform where certified gemstones, authentic rudraksha, astrology guidance and personalized recommendations come together in one place.'}
              </p>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {lang === 'hi'
                  ? 'हमारा लक्ष्य है कि हर व्यक्ति को सही guidance, सही product और सही spiritual support मिले।'
                  : 'Our mission is to help every person get the right guidance, the right product, and the right spiritual support.'}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '50,000+', label: lang === 'hi' ? 'खुश ग्राहक' : 'Happy Customers' },
                { value: '100+', label: lang === 'hi' ? 'प्रमाणित प्रोडक्ट्स' : 'Certified Products' },
                { value: '15+', label: lang === 'hi' ? 'सालों का अनुभव' : 'Years Experience' },
                { value: '24/7', label: lang === 'hi' ? 'सपोर्ट' : 'Support' },
              ].map((item) => (
                <div key={item.label} className={`backdrop-blur-md rounded-2xl border p-6 text-center ${isDark ? 'bg-gray-800/80 border-white/10' : 'bg-gray-50 border-gray-200 shadow-lg'}`}>
                  <div className="text-3xl font-black text-amber-500 mb-2 stats-number-white">{item.value}</div>
                  <div className={`text-sm font-bold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'contact' && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className={`backdrop-blur-md rounded-2xl border p-6 space-y-5 ${isDark ? 'bg-gray-800/80 border-white/10' : 'bg-gray-50 border-gray-200 shadow-lg'}`}>
              <div>
                <h3 className={`font-black text-2xl mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{lang === 'hi' ? 'संपर्क विवरण' : 'Contact Details'}</h3>
                <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="flex items-start gap-3"><span><i className="fa-solid fa-phone text-amber-500"></i></span><div><div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>+91 98765 43210</div><div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{lang === 'hi' ? 'सुबह 9 बजे - रात 9 बजे' : '9 AM - 9 PM'}</div></div></div>
                  <div className="flex items-start gap-3"><span><i className="fa-solid fa-envelope text-amber-500"></i></span><div><div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>support@fixmyfuture.com</div><div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{lang === 'hi' ? '24 घंटे ईमेल सपोर्ट' : '24/7 email support'}</div></div></div>
                  <div className="flex items-start gap-3"><span><i className="fa-solid fa-location-dot text-amber-500"></i></span><div><div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>New Delhi, India</div><div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{lang === 'hi' ? 'हेडक्वार्टर ऑफिस' : 'Headquarters Office'}</div></div></div>
                </div>
              </div>
            </div>
            <div className={`backdrop-blur-md rounded-2xl border p-6 ${isDark ? 'bg-gray-800/80 border-white/10' : 'bg-gray-50 border-gray-200 shadow-lg'}`}>
              <h3 className={`font-black text-2xl mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{lang === 'hi' ? 'मैसेज भेजें' : 'Send a Message'}</h3>
              <div className="space-y-4">
                <input className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border-white/10 text-white placeholder-stone-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'}`} placeholder={lang === 'hi' ? 'आपका नाम' : 'Your Name'} />
                <input className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border-white/10 text-white placeholder-stone-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'}`} placeholder={lang === 'hi' ? 'आपका ईमेल' : 'Your Email'} />
                <textarea rows={5} className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 resize-none ${isDark ? 'bg-gray-700 border-white/10 text-white placeholder-stone-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'}`} placeholder={lang === 'hi' ? 'आपका संदेश...' : 'Your message...'} />
                <button className="w-full bg-linear-to-r from-amber-500 to-amber-600-500 hover:from-amber-600 hover:to-amber-600-600 text-gray-800 font-black py-3.5 rounded-xl transition-all shadow-lg active:scale-95">
                  {lang === 'hi' ? 'मैसेज भेजें' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>
        )}

        {page === 'faq' && (
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.q} className={`backdrop-blur-md rounded-2xl border overflow-hidden ${isDark ? 'bg-gray-800/80 border-white/10' : 'bg-gray-50 border-gray-200 shadow-md'}`}>
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                >
                  <span className={`font-bold text-base md:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.q}</span>
                  <span className={`text-amber-500 text-xl transition-transform ${activeFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {activeFaq === index && (
                  <div className={`px-6 pb-5 leading-relaxed animate-fadeIn ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {page === 'shipping' && (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: lang === 'hi' ? 'स्टैंडर्ड डिलीवरी' : 'Standard Delivery',
                text: lang === 'hi' ? '3-5 business days' : '3-5 business days',
                icon: <i className="fa-solid fa-truck-fast"></i>,
              },
              {
                title: lang === 'hi' ? 'फ्री शिपिंग' : 'Free Shipping',
                text: lang === 'hi' ? '₹999 से ऊपर के ऑर्डर पर' : 'On orders above ₹999',
                icon: <i className="fa-solid fa-gift"></i>,
              },
              {
                title: lang === 'hi' ? 'एक्सप्रेस डिलीवरी' : 'Express Delivery',
                text: lang === 'hi' ? 'Metro cities में उपलब्ध' : 'Available in metro cities',
                icon: <i className="fa-solid fa-bolt"></i>,
              },
            ].map((item) => (
              <div key={item.title} className={`backdrop-blur-md rounded-2xl border p-6 text-center ${isDark ? 'bg-gray-800/80 border-white/10' : 'bg-gray-50 border-gray-200 shadow-lg'}`}>
                <div className="text-4xl mb-4 text-amber-500">{item.icon}</div>
                <h3 className={`font-black text-xl mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {page === 'returns' && (
          <div className={`backdrop-blur-md rounded-2xl border p-8 ${isDark ? 'bg-gray-800/80 border-white/10' : 'bg-gray-50 border-gray-200 shadow-lg'}`}>
            <h3 className={`font-black text-2xl mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{lang === 'hi' ? 'रिटर्न और रिफंड जानकारी' : 'Returns & Refund Information'}</h3>
            <div className={`space-y-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>{lang === 'hi' ? '• 7 दिन की easy return policy selected products पर उपलब्ध है।' : '• 7-day easy return policy is available on selected products.'}</p>
              <p>{lang === 'hi' ? '• Customized, energized या specially blessed products returnable नहीं हैं।' : '• Customized, energized or specially blessed products are not returnable.'}</p>
              <p>{lang === 'hi' ? '• Damaged product मिलने पर 24 घंटे के अंदर support team से संपर्क करें।' : '• Contact support within 24 hours if you receive a damaged product.'}</p>
              <p>{lang === 'hi' ? '• Refund process आमतौर से 5-7 business days लेता है।' : '• Refund process usually takes 5-7 business days.'}</p>
            </div>
          </div>
        )}
        {page === 'pooja' && (
          <div className={`backdrop-blur-md rounded-2xl border p-8 text-center ${isDark ? 'bg-gray-800/80 border-white/10' : 'bg-gray-50 border-gray-200 shadow-lg'}`}>
            <div className="text-6xl mb-6 text-amber-500"><i className="fa-solid fa-person-digging"></i></div>
            <h3 className={`font-black text-2xl mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{current.title}</h3>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Content coming soon...</p>
            <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>{lang === 'hi' ? 'हम इस पेज पर काम कर रहे हैं। जल्द ही यह उपलब्ध होगा।' : 'We are working on this page. It will be available soon.'}</p>
          </div>
        )}
        {page === 'blogs' && (
          <BlogContent />
        )}

        {page === 'terms' && (
          <div className={`backdrop-blur-md rounded-2xl border p-8 ${isDark ? 'bg-gray-800/80 border-white/10' : 'bg-gray-50 border-gray-200 shadow-lg'}`}>
            <h3 className={`font-black text-2xl mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{lang === 'hi' ? 'सेवा की शर्तें' : 'Terms of Service'}</h3>
            <div className={`space-y-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <section>
                <h4 className="text-amber-500 font-bold mb-2">{lang === 'hi' ? '1. समझौते की स्वीकृति' : '1. Acceptance of Terms'}</h4>
                <p>{lang === 'hi' ? 'Fix My Future का उपयोग करके, आप इन शर्तों से सहमत होते हैं। यदि आप सहमत नहीं हैं, तो कृपया सेवाओं का उपयोग न करें।' : 'By using Fix My Future, you agree to these terms. If you do not agree, please do not use the services.'}</p>
              </section>
              <section>
                <h4 className="text-amber-500 font-bold mb-2">{lang === 'hi' ? '2. ज्योतिषीय सलाह' : '2. Astrological Guidance'}</h4>
                <p>{lang === 'hi' ? 'ज्योतिषीय भविष्यवाणियाँ केवल मार्गदर्शन के लिए हैं। हम किसी भी सटीकता की गारंटी नहीं देते हैं और निर्णय लेने की जिम्मेदारी आपकी है।' : 'Astrological predictions are for guidance only. We do not guarantee accuracy and decision-making responsibility lies with you.'}</p>
              </section>
              <section>
                <h4 className="text-amber-500 font-bold mb-2">{lang === 'hi' ? '3. भुगतान और रिफंड' : '3. Payments & Refunds'}</h4>
                <p>{lang === 'hi' ? 'डिजिटल सेवाओं और परामर्श के लिए भुगतान रिफंडेबल नहीं है, जब तक कि सेवा प्रदान करने में कोई तकनीकी खराबी न हो।' : 'Payments for digital services and consultations are non-refundable unless there is a technical failure in providing the service.'}</p>
              </section>
            </div>
          </div>
        )}

        {page === 'policy' && (
          <div className={`backdrop-blur-md rounded-2xl border p-8 ${isDark ? 'bg-gray-800/80 border-white/10' : 'bg-gray-50 border-gray-200 shadow-lg'}`}>
            <h3 className={`font-black text-2xl mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{lang === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}</h3>
            <div className={`space-y-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <section>
                <h4 className="text-amber-500 font-bold mb-2">{lang === 'hi' ? '1. डेटा संग्रह' : '1. Data Collection'}</h4>
                <p>{lang === 'hi' ? 'हम आपकी कुंडली बनाने और बेहतर अनुभव प्रदान करने के लिए नाम, जन्म तिथि और स्थान जैसी जानकारी एकत्र करते हैं।' : 'We collect information such as name, date of birth, and location to create your kundli and provide a better experience.'}</p>
              </section>
              <section>
                <h4 className="text-amber-500 font-bold mb-2">{lang === 'hi' ? '2. डेटा सुरक्षा' : '2. Data Security'}</h4>
                <p>{lang === 'hi' ? 'हम आपकी निजी जानकारी को सुरक्षित रखने के लिए उद्योग-मानक एन्क्रिप्शन और सुरक्षा उपायों का उपयोग करते हैं।' : 'We use industry-standard encryption and security measures to protect your private information.'}</p>
              </section>
              <section>
                <h4 className="text-amber-500 font-bold mb-2">{lang === 'hi' ? '3. गोपनीयता' : '3. Confidentiality'}</h4>
                <p>{lang === 'hi' ? 'आपकी ज्योतिषीय रिपोर्ट और परामर्श पूरी तरह से गोपनीय हैं और किसी तीसरे पक्ष के साथ साझा नहीं किए जाते हैं।' : 'Your astrological reports and consultations are strictly confidential and are not shared with any third parties.'}</p>
              </section>
            </div>
          </div>
        )}


        {page === 'store' && (
          <StoreContent />
        )}
      </div>
    </div>
  );
}
