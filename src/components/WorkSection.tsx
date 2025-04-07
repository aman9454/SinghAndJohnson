import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Expand } from 'lucide-react';
import FadeInOut from './FadeInOut';

interface CaseStudy {
  title: string;
  category: string;
  image: string;
}

const WorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const caseStudies: CaseStudy[] = [
    {
      title: "Goldenkey Realty",
      category: "Real Estate Brokerage",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SPyN9moQsZb0zkPx2BZwS-qvJfTRR3CaOQ&s"
    },
    {
      title: "Aroma Indulge",
      category: "Healthcare Marketing",
      image: "https://rukminim1.flixcart.com/image/300/300/jzblaq80/scrub/g/z/x/500-spa-indulge-coconut-aroma-treasures-original-imafjcj2czgehr3z.jpeg"
    },
    {
      title: "Easy Math",
      category: "Education Website",
      image: "https://static.vecteezy.com/system/resources/previews/008/892/217/non_2x/simple-math-education-logo-design-happy-math-logo-smile-math-logo-vector.jpg"
    },
    {
      title: "Babyroosa",
      category: "Baby Clothing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBq53wBuXtCkS8dL0lxstO3wOm7o0XDjC9g&s"
    },
    {
      title: "Rising Bowl",
      category: "Chinese Food Franchise",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVi5a3Ev_4IRSogsKXAVpvql9uQ3CdORYGeA&s"
    },
    {
      title: "Simran Chawla",
      category: "Tarot Reader & Numerologist",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLX-adHoVQtCb7hpxKqo2G3bQ2hKaLFao6Gg&s"
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
    <section id="work" className="section-padding bg-gray-50 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute inset-0 bg-[url('/images/dot-grid-pattern.svg')] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <FadeInOut>
          <h2 
            className={`heading-md mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            Our Success Stories
          </h2>
          </FadeInOut>
          <FadeInOut>
          <p 
            className={`text-gray-600 max-w-2xl mx-auto text-lg ${
              isVisible ? 'animate-fade-in-delay-1' : 'opacity-0'
            }`}
          >
            Trusted by over 200 brands and counting. From bold startups to global names, we’ve turned vision into impact, one brand at a time.
          </p>
          </FadeInOut>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((project, index) => (
            <FadeInOut>
            <div 
              key={project.title}
              className={`relative h-80 overflow-hidden rounded-xl group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <img 
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-contain transition-transform duration-700 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
              />
              
              <div className="absolute bottom-0 left-0 p-6 w-full z-20 transform transition-all duration-500 group-hover:translate-y-0 translate-y-10">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <span className="text-xs font-medium text-brand-orange mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  {/* <button className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors">
                    View case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button> */}
                </div>
              </div>
              
              {/* <div className="absolute top-4 right-4 z-20">
                <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-brand-orange hover:text-white transition-all">
                  <Expand className="h-5 w-5" />
                </button>
              </div> */}
            </div>
            </FadeInOut>
          ))}  
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden overflow-x-auto pb-6 -mx-4">
          <div className="flex gap-4 px-4" style={{ width: 'max-content' }}>
            {caseStudies.map((project, index) => (
              <FadeInOut>
              <div 
                key={project.title}
                className={`relative min-w-[280px] h-72 rounded-xl overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`
                }}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full z-20">
                  <span className="text-xs font-medium text-brand-orange mb-1 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <button className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white transition-colors">
                    View case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              </FadeInOut>
            ))}
          </div>
        </div>
        
        {/* <div className="text-center mt-16">
          <FadeInOut>
          <button className="btn-primary mx-auto">
            View Full Portfolio
          </button>
          </FadeInOut>
        </div> */}
      </div>
    </section>
  );
};

export default WorkSection;
