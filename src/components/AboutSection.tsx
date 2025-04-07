import { useState, useRef, useEffect } from "react";
import FadeInOut from "./FadeInOut";

interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
}

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const expertiseItems: ExpertiseItem[] = [
    {
      title: "Real Estate",
      description: "Transforming property narratives into lasting impressions.",
      icon: "",
    },
    {
      title: "Healthcare",
      description: "Crafting compassionate, credible brand experiences.",
      icon: "",
    },
    {
      title: "Education",
      description:
        "Inspiring learning and growth through visionary storytelling.",
      icon: "",
    },
    {
      title: "Products & Services",
      description: "Elevating offerings into market leaders.",
      icon: "",
    },
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
    <section id="about" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Animated Creative Process */}
          <FadeInOut>
          <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Replace with your actual image path */}
            <img
              src="meeting-team.jpg"
              alt="Creative Process"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-purple-900/20">
              <div className="absolute bottom-8 left-8">
                <p className="text-2xl font-bold text-white tracking-wide">
                  <span className="inline-block transition-transform hover:scale-105 hover:text-brand-orange">
                    Our Creative Process
                  </span>
                </p>
                <FadeInOut>
                <div className="flex gap-2 mt-4">
                  {["Strategy", "Design", "Development", "Launch"].map(
                    (step, i) => (
                      <span
                        key={step}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm 
                        transition-all hover:bg-brand-orange hover:scale-110 
                        ${
                          isVisible
                            ? `animate-fade-in delay-${i * 100}`
                            : "opacity-0"
                        }`}
                      >
                        {step}
                      </span>
                    )
                  )}
                </div>
                </FadeInOut>
              </div>
            </div>
          </div>
          </FadeInOut>
          <div>
            <FadeInOut>
            <h2
              className={`heading-md mb-8 bg-gradient-to-r from-black to-gray-700 bg-clip-text ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <span className="inline-block hover:rotate-1 hover:scale-105 transition-transform">
                Our Ethos & Expertise
              </span>
            </h2>
            </FadeInOut>
            <div className="mb-8 overflow-hidden">
              <FadeInOut>
              <p
                className="text-gray-700 mb-6 text-lg leading-relaxed">
                We are a multi-industry marketing agency dedicated to building
                not just brands but entire ecosystems. Our approach is rooted in
                creativity balanced with analytical precision, empowering us to
                deliver exceptional results across diverse sectors.
              </p>
              </FadeInOut>
            </div>

            {/* Expertise Bullets with Enhanced Animations */}
            <FadeInOut>
            <div className="space-y-6">
              {expertiseItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`group relative pl-14 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 rounded-xl p-4 ${
                    isVisible
                      ? `animate-fade-in-delay-${index + 1}`
                      : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div className="absolute left-4 top-4 text-3xl group-hover:scale-125 transition-transform">
                    {item.icon}
                  </div>
                  <div className="absolute left-0 top-0 w-1 h-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">
                    {item.description}
                  </p>
                  {/* <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-brand-orange"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div> */}
                </div>
              ))}
            </div>
            </FadeInOut>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
