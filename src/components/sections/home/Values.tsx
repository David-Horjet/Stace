const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Handcrafted with Love",
      description: "Every piece is carefully made by skilled artisans who pour their passion into each stitch, ensuring unique quality and character."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Sustainable Materials",
      description: "We use only the finest natural and eco-friendly yarns, supporting both your comfort and environmental responsibility."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Unique Designs",
      description: "Our pieces blend traditional crochet techniques with contemporary fashion, creating timeless pieces that stand out from the crowd."
    }
  ];
  
  const ValuesSection = () => {
    return (
      <section className="py-20 bg-gradient-soft" id="values">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="gradient-text">Our Crochet</span>
            </h2>
            <p className="text-lg text-foreground/70 font-body max-w-2xl mx-auto">
              Experience the difference that comes from authentic craftsmanship, sustainable practices, and designs that celebrate your individuality.
            </p>
          </div>
  
          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="fade-in-up text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  {/* Icon Container */}
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-soft group-hover:shadow-elegant transition-all duration-300 group-hover:scale-110">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 w-20 h-20 border-2 border-primary/20 rounded-full mx-auto animate-pulse" />
                </div>
  
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-foreground/70 font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
  
          {/* Bottom Decorative Element */}
          <div className="mt-16 flex justify-center">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-primary/30 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ValuesSection;