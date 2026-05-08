import { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { useCart } from '../store';

type InfoPageType = 'about' | 'contact' | 'faq' | 'shipping' | 'returns' | 'horoscopes' | 'pooja' | 'store' | 'blogs' | 'terms' | 'policy';

// Store Content Component
function StoreContent() {
  const { lang } = useContext(LanguageContext);
  const { addToCart } = useCart();

  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());

  const [activeCategory, setActiveCategory] = useState<'all' | 'gemstones' | 'rudraksha' | 'bracelets'>('all');

  const storeProducts = [
    { id: 109, name: lang === 'hi' ? 'ब्राजीलियन एमरल्ड' : 'Brazilian Emerald', price: '₹15,999', image: '/product/emerald.jpg', category: 'gemstones' },
    { id: 110, name: lang === 'hi' ? 'अफ्रीकी माणिक्य' : 'African Ruby', price: '₹22,999', image: '/product/ruby.jpg', category: 'gemstones' },
    { id: 111, name: lang === 'hi' ? 'पीला पुखराज' : 'Yellow Sapphire', price: '₹19,999', image: '/product/yellow-sapphire.jpg', category: 'gemstones' },
    { id: 112, name: lang === 'hi' ? 'नीलम रत्न' : 'Blue Sapphire', price: '₹24,999', image: '/product/blue-sapphire.jpg', category: 'gemstones' },
    { id: 113, name: lang === 'hi' ? 'पंचमुखी रुद्राक्ष' : '5 Mukhi Rudraksha', price: '₹1,299', image: '/product/rudraksha.jpg', category: 'rudraksha' },
    { id: 114, name: lang === 'hi' ? 'सात मुखी रुद्राक्ष' : '7 Mukhi Rudraksha', price: '₹2,499', image: '/product/a1.jpg', category: 'rudraksha' },
    { id: 115, name: lang === 'hi' ? 'छह मुखी रुद्राक्ष' : '6 Mukhi Rudraksha', price: '₹1,899', image: '/product/a2.jpg', category: 'rudraksha' },
    { id: 116, name: lang === 'hi' ? 'सिद्ध ब्रेसलेट' : 'Energized Bracelet', price: '₹3,499', image: '/product/a3.avif', category: 'bracelets' },
    { id: 117, name: lang === 'hi' ? 'स्फटिक ब्रेसलेट' : 'Crystal Bracelet', price: '₹2,999', image: '/product/a4.webp', category: 'bracelets' },
    { id: 118, name: lang === 'hi' ? 'टाइगर आई ब्रेसलेट' : 'Tiger Eye Bracelet', price: '₹1,599', image: '/product/a5.webp', category: 'bracelets' },
    { id: 119, name: lang === 'hi' ? 'एमेथिस्ट ब्रेसलेट' : 'Amethyst Bracelet', price: '₹2,199', image: '/product/a6.webp', category: 'bracelets' },
    { id: 120, name: lang === 'hi' ? 'रोज क्वार्ट्ज ब्रेसलेट' : 'Rose Quartz Bracelet', price: '₹1,899', image: '/product/a7.webp', category: 'bracelets' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? storeProducts 
    : storeProducts.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', label: lang === 'hi' ? 'सभी' : 'All' },
    { id: 'gemstones', label: lang === 'hi' ? 'रत्न' : 'Gemstones' },
    { id: 'rudraksha', label: lang === 'hi' ? 'रुद्राक्ष' : 'Rudraksha' },
    { id: 'bracelets', label: lang === 'hi' ? 'ब्रेसलेट' : 'Bracelets' },
  ];

  const handleAddToCart = (product: typeof storeProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      priceNum: parseInt(product.price.replace(/[^\d]/g, '')) || 0,
      image: product.image,
      category: product.category,
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
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
              activeCategory === cat.id 
                ? 'bg-[var(--accent-color)] text-gray-900 shadow-lg shadow-[var(--accent-color)]/30 scale-105'
                : 'glass hover:glass-heavy hover:text-amber-400 hover:scale-105 active:scale-95'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative glass card-border border-[var(--accent-color)]/20 hover:border-[var(--accent-color)]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--accent-color)]/20"
          >
            {/* Product Image */}
            <div className="relative h-48 overflow-hidden bg-[var(--primary-bg)]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-bold text-sm md:text-base text-text-main line-clamp-2 mb-2 group-hover:text-[var(--accent-color)] transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg md:text-xl font-black text-[var(--accent-color)]">{product.price}</span>
                <span className="text-xs px-3 py-1 bg-[var(--accent-color)]/20 text-amber-400 rounded-full font-bold">
                  {product.category === 'gemstones' ? (lang === 'hi' ? 'रत्न' : 'Gemstone') : 
                   product.category === 'rudraksha' ? (lang === 'hi' ? 'रुद्राक्ष' : 'Rudraksha') : 
                   (lang === 'hi' ? 'ब्रेसलेट' : 'Bracelet')}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className={`w-full py-3 font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-300 active:scale-95 ${addedItems.has(product.id)
                    ? 'bg-green-500/30 text-green-300 border border-green-500/50'
                    : 'bg-[var(--accent-color)]/20 text-amber-400 border border-[var(--accent-color)]/50 hover:bg-[var(--accent-color)]/40 hover:text-amber-200 hover:scale-105'
                  }`}
              >
                {addedItems.has(product.id) ? `✓ ${lang === 'hi' ? 'जोड़ा गया' : 'Added'}` : `🛒 ${lang === 'hi' ? 'कार्ट में जोड़ें' : 'Add to Cart'}`}
              </button>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
              </div>
            </div>

            {/* Quick view badge */}
            <div className="absolute top-3 right-3 bg-[var(--accent-color)]/80 text-[var(--text-primary)] px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              ⚡ {lang === 'hi' ? 'लोकप्रिय' : 'Popular'}
            </div>
          </div>
        ))}
      </div>

      {/* Store Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[var(--accent-color)]/20">
        <div className="text-center">
          <div className="text-4xl mb-3">🚚</div>
          <h4 className="font-bold text-amber-400 mb-2">{lang === 'hi' ? 'तेज़ डिलीवरी' : 'Fast Delivery'}</h4>
          <p className="text-text-muted text-sm">{lang === 'hi' ? '3-5 दिनों में पूरे भारत में डिलीवरी' : 'Delivery across India in 3-5 days'}</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-3">✅</div>
          <h4 className="font-bold text-amber-400 mb-2">{lang === 'hi' ? 'प्रमाणित उत्पाद' : 'Certified Products'}</h4>
          <p className="text-text-muted text-sm">{lang === 'hi' ? 'सभी उत्पाद प्रमाणित और परीक्षित' : 'All products certified & tested'}</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-3">🔄</div>
          <h4 className="font-bold text-amber-400 mb-2">{lang === 'hi' ? 'आसान रिटर्न' : 'Easy Returns'}</h4>
          <p className="text-text-muted text-sm">{lang === 'hi' ? '15 दिनों के भीतर बिना सवाल के' : '15 days no questions asked'}</p>
        </div>
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
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  if (!isOpen) return null;

  const pageContent = {
    about: {
      icon: '✨',
      title: lang === 'hi' ? 'हमारे बारे में' : 'About Us',
      subtitle:
        lang === 'hi'
          ? 'Fix My Future — आपका भरोसेमंद ज्योतिष और रत्न प्लेटफॉर्म'
          : 'Fix My Future — Your trusted astrology and gemstone platform',

    },
    contact: {
      icon: '📞',
      title: lang === 'hi' ? 'संपर्क करें' : 'Contact Us',
      subtitle:
        lang === 'hi'
          ? 'हमारी टीम आपकी सहायता के लिए हमेशा तैयार है'
          : 'Our team is always ready to help you',
    },
    faq: {
      icon: '❓',
      title: lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions',
      subtitle:
        lang === 'hi'
          ? 'आपके सामान्य सवालों के जवाब'
          : 'Answers to your most common questions',
    },
    shipping: {
      icon: '🚚',
      title: lang === 'hi' ? 'शिपिंग पॉलिसी' : 'Shipping Policy',
      subtitle:
        lang === 'hi'
          ? 'डिलीवरी और शिपिंग की पूरी जानकारी'
          : 'Complete delivery and shipping information',
    },
    returns: {
      icon: '↩️',
      title: lang === 'hi' ? 'रिटर्न पॉलिसी' : 'Returns Policy',
      subtitle:
        lang === 'hi'
          ? 'रिटर्न और रिफंड की जानकारी'
          : 'Return and refund details',
    },
    horoscopes: {
      icon: '♈',
      title: lang === 'hi' ? 'राशिफल' : 'Horoscopes',
      subtitle:
        lang === 'hi'
          ? 'दैनिक, साप्ताहिक और मासिक भविष्यवाणियां'
          : 'Daily, weekly and monthly predictions',
    },






    pooja: {
      icon: '🕉️',
      title: lang === 'hi' ? 'पूजा बुक करें' : 'Book A Pooja',
      subtitle:
        lang === 'hi'
          ? 'घर बैठे पूजा करवाएं'
          : 'Book pooja from home',
    },
    store: {
      icon: '🛒',
      title: lang === 'hi' ? 'एस्ट्रोटॉक स्टोर' : 'Astrotalk Store',
      subtitle:
        lang === 'hi'
          ? 'ज्योतिष संबंधित प्रोडक्ट्स'
          : 'Astrology related products',
    },
    blogs: {
      icon: '📝',
      title: lang === 'hi' ? 'ब्लॉग' : 'Blogs',
      subtitle:
        lang === 'hi'
          ? 'ज्योतिष और आत्मा से संबंधित लेख'
          : 'Articles on astrology and spirituality',
    },
    terms: {
      icon: '📜',
      title: lang === 'hi' ? 'नियम और शर्तें' : 'Terms & Conditions',
      subtitle:
        lang === 'hi'
          ? 'हमारी सेवाओं के उपयोग की शर्तें'
          : 'Terms of service for using our platform',
    },
    policy: {
      icon: <i className="fas fa-shield-alt"></i>,
      title: lang === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy',
      subtitle:
        lang === 'hi'
          ? 'आपकी जानकारी की सुरक्षा हमारी प्राथमिकता है'
          : 'Your privacy and data security are our priority',
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
    <div className="fixed inset-0 z-[64] overflow-y-auto bg-[var(--primary-bg)]">
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-30 w-12 h-12 glass-heavy border border-border-gray rounded-full flex items-center justify-center text-[var(--text-primary)] hover:glass-light transition-all shadow-xl hover:scale-110 active:scale-95"
      >
        <i className="fas fa-times text-xl"></i>
      </button>

      <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">{current.icon}</span>
          <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {current.title}
          </h1>
          <p className="text-text-main text-sm md:text-lg max-w-2xl animate-fadeIn">{current.subtitle}</p>
          <div className="w-20 h-1 bg-[var(--accent-color)] mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        {page === 'about' && (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="glass-heavy rounded-2xl border border-border-gray p-6">
              <h3 className="text-[var(--text-primary)] font-black text-2xl mb-4">
                {lang === 'hi' ? 'हमारी कहानी' : 'Our Story'}
              </h3>
              <p className="text-text-main leading-relaxed mb-4">
                {lang === 'hi'
                  ? 'Fix My Future एक modern spiritual commerce platform है जहाँ certified gemstones, authentic rudraksha, astrology guidance और personalized recommendations एक ही जगह मिलते हैं।'
                  : 'Fix My Future is a modern spiritual commerce platform where certified gemstones, authentic rudraksha, astrology guidance and personalized recommendations come together in one place.'}
              </p>
              <p className="text-text-muted leading-relaxed">
                {lang === 'hi'
                  ? 'हमारा लक्ष्य है कि हर व्यक्ति को सही guidance, सही product और सही spiritual support मिले।'
                  : 'Our mission is to help every person get the right guidance, the right product, and the right spiritual support.'}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '50,000+', label: lang === 'hi' ? 'खुश ग्राहक' : 'Happy Customers' },
                { value: '100%', label: lang === 'hi' ? 'प्रमाणित प्रोडक्ट्स' : 'Certified Products' },
                { value: '15+', label: lang === 'hi' ? 'सालों का अनुभव' : 'Years Experience' },
                { value: '24/7', label: lang === 'hi' ? 'सपोर्ट' : 'Support' },
              ].map((item) => (
                <div key={item.label} className="glass-heavy rounded-2xl border border-border-gray p-6 text-center">
                  <div className="text-3xl font-black text-[var(--accent-color)] mb-2">{item.value}</div>
                  <div className="text-text-main text-sm font-bold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'contact' && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-heavy rounded-2xl border border-border-gray p-6 space-y-5">
              <div>
                <h3 className="text-[var(--text-primary)] font-black text-2xl mb-4">{lang === 'hi' ? 'संपर्क विवरण' : 'Contact Details'}</h3>
                <div className="space-y-4 text-text-main">
                  <div className="flex items-start gap-3"><span>📞</span><div><div className="font-bold text-[var(--text-primary)]">+91 98765 43210</div><div className="text-sm text-text-muted">{lang === 'hi' ? 'सुबह 9 बजे - रात 9 बजे' : '9 AM - 9 PM'}</div></div></div>
                  <div className="flex items-start gap-3"><span>📧</span><div><div className="font-bold text-[var(--text-primary)]">support@fixmyfuture.com</div><div className="text-sm text-text-muted">{lang === 'hi' ? '24 घंटे ईमेल सपोर्ट' : '24/7 email support'}</div></div></div>
                  <div className="flex items-start gap-3"><span>📍</span><div><div className="font-bold text-[var(--text-primary)]">New Delhi, India</div><div className="text-sm text-text-muted">{lang === 'hi' ? 'हेडक्वार्टर ऑफिस' : 'Headquarters Office'}</div></div></div>
                </div>
              </div>
            </div>
            <div className="glass-heavy rounded-2xl border border-border-gray p-6">
              <h3 className="text-[var(--text-primary)] font-black text-2xl mb-4">{lang === 'hi' ? 'मैसेज भेजें' : 'Send a Message'}</h3>
              <div className="space-y-4">
                <input className="w-full input-glass border border-border-gray rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-color)]/50" placeholder={lang === 'hi' ? 'आपका नाम' : 'Your Name'} />
                <input className="w-full input-glass border border-border-gray rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-color)]/50" placeholder={lang === 'hi' ? 'आपका ईमेल' : 'Your Email'} />
                <textarea rows={5} className="w-full input-glass border border-border-gray rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-color)]/50 resize-none" placeholder={lang === 'hi' ? 'आपका संदेश...' : 'Your message...'} />
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600-500 hover:from-amber-600 hover:to-amber-600-600 text-gray-800 font-black py-3.5 rounded-xl transition-all">
                  {lang === 'hi' ? 'मैसेज भेजें' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>
        )}

        {page === 'faq' && (
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.q} className="glass-heavy rounded-2xl border border-border-gray overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                >
                  <span className="text-[var(--text-primary)] font-bold text-base md:text-lg">{item.q}</span>
                  <span className={`text-[var(--accent-color)] text-xl transition-transform ${activeFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 text-text-main leading-relaxed animate-fadeIn">{item.a}</div>
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
                icon: '🚚',
              },
              {
                title: lang === 'hi' ? 'फ्री शिपिंग' : 'Free Shipping',
                text: lang === 'hi' ? '₹999 से ऊपर के ऑर्डर पर' : 'On orders above ₹999',
                icon: '🎁',
              },
              {
                title: lang === 'hi' ? 'एक्सप्रेस डिलीवरी' : 'Express Delivery',
                text: lang === 'hi' ? 'Metro cities में उपलब्ध' : 'Available in metro cities',
                icon: '⚡',
              },
            ].map((item) => (
              <div key={item.title} className="glass-heavy rounded-2xl border border-border-gray p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-[var(--text-primary)] font-black text-xl mb-2">{item.title}</h3>
                <p className="text-text-main">{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {page === 'returns' && (
          <div className="glass-heavy rounded-2xl border border-border-gray p-8">
            <h3 className="text-[var(--text-primary)] font-black text-2xl mb-6">{lang === 'hi' ? 'रिटर्न और रिफंड जानकारी' : 'Returns & Refund Information'}</h3>
            <div className="space-y-4 text-text-main leading-relaxed">
              <p>{lang === 'hi' ? '• 7 दिन की easy return policy selected products पर उपलब्ध है।' : '• 7-day easy return policy is available on selected products.'}</p>
              <p>{lang === 'hi' ? '• Customized, energized या specially blessed products returnable नहीं हैं।' : '• Customized, energized or specially blessed products are not returnable.'}</p>
              <p>{lang === 'hi' ? '• Damaged product मिलने पर 24 घंटे के अंदर support team से संपर्क करें।' : '• Contact support within 24 hours if you receive a damaged product.'}</p>
              <p>{lang === 'hi' ? '• Refund process आमतौर से 5-7 business days लेता है।' : '• Refund process usually takes 5-7 business days.'}</p>
            </div>
          </div>
        )}

        {page === 'terms' && (
          <div className="glass-heavy rounded-2xl border border-border-gray p-8">
            <h3 className="text-[var(--text-primary)] font-black text-2xl mb-6">{lang === 'hi' ? 'नियम और शर्तें' : 'Terms & Conditions'}</h3>
            <div className="space-y-6 text-text-main leading-relaxed">
              <div>
                <h4 className="text-lg font-bold text-[var(--accent-color)] mb-2">{lang === 'hi' ? '1. सेवा की शर्तें' : '1. Terms of Service'}</h4>
                <p>{lang === 'hi' ? 'हमारी वेबसाइट का उपयोग करके, आप इन शर्तों से सहमत होते हैं।' : 'By using our website, you agree to these terms and conditions.'}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[var(--accent-color)] mb-2">{lang === 'hi' ? '2. उत्पाद प्रामाणिकता' : '2. Product Authenticity'}</h4>
                <p>{lang === 'hi' ? 'हम केवल प्रमाणित और शुद्ध रत्नों की गारंटी देते हैं।' : 'We guarantee only certified and pure gemstones.'}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[var(--accent-color)] mb-2">{lang === 'hi' ? '3. गोपनीयता' : '3. Privacy'}</h4>
                <p>{lang === 'hi' ? 'आपकी जानकारी हमारे पास सुरक्षित है और कभी साझा नहीं की जाएगी।' : 'Your information is safe with us and will never be shared.'}</p>
              </div>
            </div>
          </div>
        )}

        {page === 'policy' && (
          <div className="glass-heavy rounded-2xl border border-border-gray p-8">
            <h3 className="text-[var(--text-primary)] font-black text-2xl mb-6">{lang === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}</h3>
            <div className="space-y-6 text-text-main leading-relaxed">
              <div>
                <h4 className="text-lg font-bold text-[var(--accent-color)] mb-2">{lang === 'hi' ? 'डेटा सुरक्षा' : 'Data Protection'}</h4>
                <p>{lang === 'hi' ? 'हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उच्चतम सुरक्षा मानकों का उपयोग करते हैं।' : 'We use the highest security standards to protect your personal information.'}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[var(--accent-color)] mb-2">{lang === 'hi' ? 'सूचना संग्रह' : 'Information Collection'}</h4>
                <p>{lang === 'hi' ? 'हम केवल वही जानकारी एकत्र करते हैं जो आपकी सेवा को बेहतर बनाने के लिए आवश्यक है।' : 'We only collect information necessary to improve your service.'}</p>
              </div>
            </div>
          </div>
        )}

        {(page === 'pooja' || page === 'blogs') && (
          <div className="glass-heavy rounded-2xl border border-border-gray p-8 text-center">
            <div className="text-6xl mb-6">🚧</div>
            <h3 className="text-[var(--text-primary)] font-black text-2xl mb-4">{current.title}</h3>
            <p className="text-text-main text-lg mb-6">Content coming soon...</p>
            <p className="text-text-muted">{lang === 'hi' ? 'हम इस पेज पर काम कर रहे हैं। जल्द ही यह उपलब्ध होगा।' : 'We are working on this page. It will be available soon.'}</p>
          </div>
        )}

        {page === 'store' && (
          <StoreContent />
        )}
      </div>
    </div>
  );
}






