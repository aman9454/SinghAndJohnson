
import { useRef, useEffect, useState } from 'react';
import FadeInOut from './FadeInOut';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20" ref={sectionRef}>
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-orange to-orange-400 py-16 px-6 md:px-12">
          {/* Animated Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white"></div>
            <div className="absolute top-24 right-24 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-12 left-1/3 w-32 h-32 rounded-full bg-white"></div>
          </div>
          <FadeInOut>
          <div className="relative z-10 text-center">
            <h2 
              className={`heading-md text-white mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            >
              Ready to Elevate Your Brand?
            </h2>
            <p 
              className={`text-white/90 max-w-2xl mx-auto mb-8 text-lg ${isVisible ? 'animate-fade-in-delay-1' : 'opacity-0'}`}
            >
              At Singh & Johnson, we believe every brand has the potential to lead its industry. 
              Collaborate with us to craft a compelling narrative that not only captivates but also converts. 
              Your journey towards transformative market impact starts here.
            </p>
            <button 
              className={`bg-white text-brand-orange px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-black hover:text-white ${
                isVisible ? 'animate-fade-in-delay-2 hover:animate-pulse-light' : 'opacity-0'
              }`} onClick={() => window.location.href = "mailto:admin@singhandjohnson.in?subject=Let's%20Connect&body=Hi%20there!"}

            >
              Book a Discovery Call
            </button>
          </div>
          </FadeInOut>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
