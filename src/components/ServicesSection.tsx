import { useRef, useEffect, useState } from 'react';
import { Briefcase, BarChart, Code, Target, FileEdit, ArrowRight, CameraIcon } from 'lucide-react';
import FadeInOut from './FadeInOut';
import clsx from 'clsx';


interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  const services: Service[] = [
    {
      icon: Briefcase,
      title: "Branding",
      description: "We engineer iconic brand identities that resonate deeply, ensuring every element from visual design to messaging reflects your unique value proposition."
    },
    {
      icon: BarChart,
      title: "Performance Marketing",
      description: "Our data-driven strategies are designed to optimize conversions and maximize ROI. We blend strategic insights with tactical execution to create campaigns that outperform market benchmarks."
    },
    {
      icon: Code,
      title: "Website Development",
      description: "From initial concept to final launch, we build digital experiences that are both visually stunning and functionally robust, ensuring a seamless and engaging user journey."
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Our targeted initiatives capture high-quality leads, nurturing them through sophisticated, conversion-focused funnels that drive sustainable business growth."
    },
    {
      icon: FileEdit,
      title: "Content Creation",
      description: "We craft compelling narratives and engaging multimedia content that tells your brand story, captivates audiences, and fosters enduring relationships."
    },
    {
      icon: CameraIcon,
      title: "Photoshop",
      description: "Bring your ideas to life with precision, creativity, and pixel-perfect execution. From high-end photo retouching and background removal to custom graphics, mockups, and visual enhancements, we deliver results that elevate your brand."
    }
  ];

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
    <section id="services" className="section-padding relative overflow-hidden bg-orange-600" ref={sectionRef}>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-purple-50/30"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <FadeInOut>
          <h2 
            className={clsx(
              "heading-md mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 inline-block transition-transform duration-500",
              isVisible ? "animate-fade-in" : "opacity-0",
              hovered && "rotate-3 scale-105"
            )}
          >
            Our service toolkit
          </h2>
          </FadeInOut>
          <FadeInOut>
          <p 
            className={`text-gray-600 max-w-2xl mx-auto text-lg ${
              isVisible ? 'animate-fade-in-delay-1' : 'opacity-0'
            }`}
          >
            We deliver comprehensive solutions tailored to your unique needs
          </p>
          </FadeInOut>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInOut>
              <div 
                key={service.title}
                className={`relative group h-full ${
                  isVisible ? `opacity-100 translate-y-0` : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`
                }}
              >
                <div className="absolute inset-0 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-500"></div>
                <div className="absolute inset-0 rounded-xl border border-gray-100 group-hover:border-brand-orange/30 transition-colors duration-500"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white to-gray-50 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-orange/5 to-purple-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors duration-500">
                    <Icon className="text-brand-orange h-8 w-8 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-brand-orange transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-500">
                    {service.description}
                  </p>
                  {/* <div className="mt-auto pt-4">
                    <span className="inline-flex items-center text-brand-orange font-medium group-hover:translate-x-2 transition-transform duration-500">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </span>
                  </div> */}
                </div>
              </div>
              </FadeInOut>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
