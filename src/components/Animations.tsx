import { useState, useEffect, useRef, useContext } from 'react';
import { useCart } from '../store';
import { LanguageContext } from '../App';

// Hook for scroll animations
export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Animated Counter Component
export function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// Testimonials Slider
export function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    { name: 'Priya Sharma', location: 'Delhi', rating: 5, text: 'I bought the Yellow Sapphire and my career took off within months! The quality is exceptional and the certification gave me confidence. Highly recommend!', image: '/astro/L1.jpg' },
    { name: 'Rajesh Kumar', location: 'Mumbai', rating: 5, text: 'The 7 Mukhi Rudraksha changed my life. My business has grown 3x since I started wearing it. The energization process was done properly. Amazing service!', image: '/astro/L2.jpg' },
    { name: 'Anjali Patel', location: 'Ahmedabad', rating: 5, text: 'Beautiful gemstone bracelet! The amethyst quality is top-notch. Fast delivery and excellent packaging. Will definitely shop again!', image: '/astro/L3.jpg' },
    { name: 'Vikram Singh', location: 'Jaipur', rating: 5, text: 'The AI astrologer is incredibly accurate! It recommended the perfect gemstone for my zodiac. The consultation was free and very helpful!', image: '/astro/L4.jpg' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-bg-primary overflow-hidden">

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[var(--accent-color)] text-xs font-bold tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-black text-text-main mt-2">What Our Customers Say</h2>

          <div className="w-16 h-1 bg-[var(--accent-color)] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ${i === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              style={{ position: i === current ? 'relative' : 'absolute' }}
            >
              <div className="rounded-3xl p-8 md:p-12 card-border shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-[var(--accent-color)]/50" />
                  <div>
                    <h4 className="text-text-main font-bold text-lg">{t.name}</h4>
                    <p className="text-text-muted text-sm">{t.location}</p>

                    <div className="flex text-[var(--accent-color)] text-sm mt-1">
                      {[...Array(t.rating)].map((_, r) => <i key={r} className="fas fa-star"></i>)}
                    </div>
                  </div>
                </div>
                <p className="text-text-main text-lg leading-relaxed italic">"{t.text}"</p>

                <div className="mt-6 flex items-center gap-2 text-[var(--accent-color)]">
                  <i className="fas fa-certificate text-xl"></i>
                  <span className="text-sm font-bold">Verified Purchase</span>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[var(--accent-color)]' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Counter Section
export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 bg-accent-gradient relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72  rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { count: 50000, suffix: '+', label: 'Happy Customers', icon: '' },
            { count: 100, suffix: '+', label: 'Certified Products', icon: '' },
            { count: 15, suffix: '+', label: 'Years Experience', icon: '' },
            { count: 4.9, suffix: '★', label: 'Average Rating', icon: '' },
          ].map((stat, i) => (
            <div key={i} className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">
                {typeof stat.count === 'number' && stat.count < 10 ? stat.count.toFixed(1) : <AnimatedCounter end={stat.count} suffix={stat.suffix} />}
              </div>
              <div className="text-white/80 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Products Carousel
export function FeaturedCarousel({ products, title }: { products?: any[], title?: string }) {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());
  const { lang } = useContext(LanguageContext);

  const defaultProducts = [
    { id: 101, name: 'Dhan Yog Bracelet', price: '₹1,999', image: '/product/a1.jpg', tag: 'Bestseller', category: 'bracelets' },
    { id: 102, name: '7 Mukhi Rudraksha', price: '₹2,499', image: '/product/rudraksha.jpg', tag: 'Trending', category: 'rudraksha' },
    { id: 103, name: 'Brazilian Emerald', price: '₹15,999', image: '/product/emerald.jpg', tag: 'Premium', category: 'gemstones' },
    { id: 104, name: 'Amethyst Bracelet', price: '₹1,499', image: '/product/a4.webp', tag: 'New', category: 'bracelets' },
    { id: 105, name: 'Pyrite Bracelet', price: '₹1,299', image: '/product/a5.webp', tag: 'Hot', category: 'bracelets' },
    { id: 106, name: 'Yellow Sapphire', price: '₹19,999', image: '/product/yellow-sapphire.jpg', tag: 'Rare', category: 'gemstones' },
  ];

  const activeProducts = products || defaultProducts;
  const activeTitle = title || (lang === 'hi' ? 'विशेष उत्पाद' : 'Featured Products');

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const priceNum = parseInt(product.price.replace(/[^\d]/g, '')) || 0;

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      priceNum,
      image: product.image,
      category: product.category,
    });

    setAddedItems(prev => new Set([...prev, product.id]));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <section className="py-16 bg-bg-primary overflow-hidden">

      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[var(--accent-color)] text-xs font-bold tracking-[0.3em] uppercase animate-pulse">Featured Products</span>
          <h2 className="text-3xl md:text-4xl font-black text-text-main mt-2 gradient-text-strong">Trending Now</h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-carousel">
            {/* Duplicate products multiple times for seamless loop */}
            {[...activeProducts, ...activeProducts, ...activeProducts, ...activeProducts].map((p, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] group">
                <div className="relative rounded-2xl overflow-hidden glass-heavy product-card card-border hover:border-[var(--accent-color)]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--accent-color)]/20 hover-3d">
                  <div className="relative h-72 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute top-3 left-3 bg-[var(--accent-color)] text-gray-900 text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-lg">{p.tag}</span>
                  </div>
                  <div className="p-4 product-card-gradient relative">
                    <h3 className="text-text-main font-bold group-hover:text-accent-theme transition-colors line-clamp-2">{p.name}</h3>


                    {/* Add to Cart Button */}
                    <div className="mt-3 mb-2 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button
                        onClick={(e) => handleAddToCart(p, e)}
                        className="w-full btn-accent text-gray-900 px-4 py-2 rounded-lg font-bold text-xs tracking-wider uppercase shadow-xl transition-all duration-300 flex items-center justify-center space-x-1"
                      >
                        <span>Add to Cart</span>
                        <i className="fas fa-shopping-cart text-sm"></i>
                      </button>
                    </div>

                    <p className="text-[var(--accent-color)] font-black text-lg">{p.price}</p>

                    {/* Added to Cart Toast */}
                    {addedItems.has(p.id) && (
                      <div className="absolute top-3 right-3 bg-emerald-500 text-gray-800 text-[10px] font-black px-3 py-1.5 rounded-full shadow-xl animate-fadeIn flex items-center space-x-1 z-20 border border-emerald-400">
                        <i className="fas fa-check"></i><span>{lang === 'hi' ? 'कार्ट में जोड़ा' : 'Added!'}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Scroll Animation Wrapper
export function ScrollReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Floating Elements Background
export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        >
          <span className="text-[var(--accent-color)]/10 text-4xl">
            {['✦', '✧', '★', '✦', '◆'][i % 5]}
          </span>
        </div>
      ))}
    </div>
  );
}

// Marquee Banner
export function MarqueeBanner() {
  const items = ['✦ Free Shipping on orders above ₹999', '✦ 100% Certified Gemstones', '✦ Cash on Delivery Available', '✦ Lab Tested & Verified', '✦ Energized by Vedic Rituals', '✦ 7 Days Easy Return'];

  return (
    <div className="fixed top-0 left-0 right-0 z-60 bg-bg-primary py-3 overflow-hidden border-b border-border-theme">

      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-[var(--accent-color)] font-bold text-sm mx-8">{item}</span>
        ))}
      </div>
    </div>
  );
}

// Glowing Border Effect
export function GlowCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-accent-gradient rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        {children}
      </div>
    </div>
  );
}

// Typewriter Effect
export function TypewriterText({ text, className = '' }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Pulse Ring Animation
export function PulseRing({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-[var(--accent-color)] animate-ping opacity-20"></div>
      <div className="relative">{children}</div>
    </div>
  );
}






