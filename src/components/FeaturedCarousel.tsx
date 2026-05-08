const FeaturedCarousel = () => {
  return (
    <section className="py-16 bg-dark-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-cyan-400" style={{ color: '#0A4F23' }}>
            Featured Products
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Our best selling gemstones and rudraksha collections
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder products */}
          <div className="glass-heavy rounded-2xl p-8 text-center hover:scale-105 transition-all">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-600-500 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-4xl text-white">
              <i className="fas fa-gem"></i>
            </div>
            <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">Premium Emerald</h3>
            <p className="text-2xl font-black text-[var(--accent-color)] mb-4">₹15,999</p>
            <button className="btn-accent px-6 py-2 rounded-xl font-bold text-sm">
              Add to Cart
            </button>
          </div>
          <div className="glass-heavy rounded-2xl p-8 text-center hover:scale-105 transition-all">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-4xl text-white">
              <i className="fas fa-om"></i>
            </div>
            <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">7 Mukhi Rudraksha</h3>
            <p className="text-2xl font-black text-emerald-400 mb-4">₹2,499</p>
            <button className="btn-accent px-6 py-2 rounded-xl font-bold text-sm">
              Add to Cart
            </button>
          </div>
          <div className="glass-heavy rounded-2xl p-8 text-center hover:scale-105 transition-all">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-4xl text-white">
              <i className="fas fa-magic"></i>
            </div>
            <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">Zodiac Bracelet</h3>
            <p className="text-2xl font-black text-[var(--accent-color)] mb-4">₹1,799</p>
            <button className="btn-accent px-6 py-2 rounded-xl font-bold text-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;







