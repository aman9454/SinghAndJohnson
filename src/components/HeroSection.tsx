import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black bg-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20 animate-gradient-shift"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 text-center px-4">
        <h1
          className={`heading-lg text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span
            className={`inline-block transition-transform duration-500 ${
              hovered ? "rotate-3 scale-105" : ""
            }`}
          >
            The Branding House.
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-8 overflow-hidden">
          <p
            className={`text-white/90 text-lg md:text-xl ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-all duration-700 delay-300`}
          >
            {`At Singh & Johnson, we don't merely create brands – we forge legacies.`
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className="inline-block transition-transform hover:scale-110 hover:text-white duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {word}&nbsp;
                </span>
              ))}
          </p>
          <p
            className={`text-white/90 text-lg md:text-xl mt-4 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-all duration-700 delay-500`}
          >
            {`Our unique fusion of storytelling, strategic insight, and creative innovation transforms potential into high-performance identities. We align brand vision with market strategy to build impactful, results-driven identities. From positioning to execution, we deliver clarity, consistency, and measurable growth.`
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className="inline-block transition-transform hover:scale-110 hover:text-white duration-300"
                  style={{ transitionDelay: `${i * 30 + 500}ms` }}
                >
                  {word}&nbsp;
                </span>
              ))}
          </p>
        </div>

        <div
          className={`${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700 delay-700`}
        >
          <a
            href="#contact"
            className="btn-primary text-lg relative overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Let's Talk
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute inset-0 border-2 border-white/50 group-hover:border-transparent transition-all duration-300"></span>
          </a>
        </div>

        <div
          className={`absolute bottom-15 left-1/2 transform -translate-x-1/2 ${
            loaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 delay-1000`}
        >
          <a
            href="#about"
            className="animate-bounce flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
