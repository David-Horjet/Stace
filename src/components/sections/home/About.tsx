const AboutSection = () => {
    return (
      <section className="py-20 bg-[#f7f5f0]" id="about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="fade-in-up">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-foreground/80 font-body">
                <p className="text-lg leading-relaxed">
                  Born from a passion for sustainable fashion and timeless craftsmanship, our brand celebrates the art of crochet in contemporary design. Each piece is carefully handmade by skilled artisans who pour their heart into every stitch.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe that true beauty lies in the imperfections that make each piece unique. Our collections blend traditional crochet techniques with modern silhouettes, creating wearable art that tells a story.
                </p>
                <p className="text-lg leading-relaxed">
                  From intimate pieces to statement dresses, every item in our collection is designed to make you feel confident, comfortable, and connected to the artisan who created it.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-foreground/60 font-medium">Handmade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-foreground/60 font-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-foreground/60 font-medium">Years Crafting</div>
                </div>
              </div>
            </div>
  
            {/* Visual Element */}
            <div className="fade-in-up stagger-delay-2">
              <div className="relative">
                <div className="aspect-square bg-primary rounded-3xl p-8 shadow-elegant">
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Made with Love</h3>
                      <p className="text-foreground/60 font-body text-sm">Every piece carries the warmth and care of human hands</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-terracotta/30 rounded-full animate-gentle-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-soft-pink/40 rounded-full animate-gentle-bounce" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;