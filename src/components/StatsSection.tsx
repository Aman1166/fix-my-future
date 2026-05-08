const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl md:text-4xl font-black text-[var(--accent-color)] mb-2 animate-float">
              50K+
            </div>
            <div className="text-sm text-[var(--text-secondary)] font-medium uppercase tracking-wide">
              Happy Customers
            </div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2 animate-float" style={{animationDelay: '0.1s'}}>
              100%
            </div>
            <div className="text-sm text-[var(--text-secondary)] font-medium uppercase tracking-wide">
              Natural & Certified
            </div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-black text-[var(--accent-color)] mb-2 animate-float" style={{animationDelay: '0.2s'}}>
              10+
            </div>
            <div className="text-sm text-[var(--text-secondary)] font-medium uppercase tracking-wide">
              Years Experience
            </div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2 animate-float" style={{animationDelay: '0.3s'}}>
              1M+
            </div>
            <div className="text-sm text-[var(--text-secondary)] font-medium uppercase tracking-wide">
              Gemstones Sold
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;







