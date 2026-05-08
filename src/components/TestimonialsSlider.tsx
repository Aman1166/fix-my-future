const TestimonialsSlider = () => {
  const testimonials = [
    {
      name: "Priya S.",
      text: "My Yellow Sapphire changed my career completely! Got promotion within 3 months.",
      rating: 5
    },
    {
      name: "Rajesh K.",
      text: "Authentic Rudraksha - genuine energy. My family is happier now.",
      rating: 5
    },
    {
      name: "Anita M.",
      text: "Perfect Emerald for my Pisces sign. Lab certified, fast delivery.",
      rating: 5
    },
    {
      name: "Vikram P.",
      text: "Astrologer consultation was spot on. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 gradient-text-strong">
            What Our Customers Say
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Trusted by thousands of happy customers across India
          </p>
        </div>
        <div className="flex overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full px-4 animate-marquee whitespace-nowrap">
              <div className="glass-strong rounded-2xl p-8 max-w-md mx-auto text-center hover:scale-105 transition-all">
                <div className="flex text-yellow-400 text-2xl mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-bold text-gray-100">
                  − {testimonial.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;

