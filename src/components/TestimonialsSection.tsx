import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import FadeInOut from './FadeInOut';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const testimonials: Testimonial[] = [
    {
      quote: "Singh & Johnson reimagined our brand, delivering a strategy that transformed our market presence and increased our leads by 240% within six months.",
      author: "Jane Smith",
      position: "CEO",
      company: "Leading Real Estate Firm",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      quote: "Their innovative approach and meticulous attention to detail have set a new standard in our industry. The campaign outperformed all our KPIs by at least 180%.",
      author: "Michael Brown",
      position: "CMO",
      company: "Healthcare Innovator",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "A truly collaborative experience that resulted in measurable growth and renewed market confidence. Our website traffic tripled and conversion rates doubled.",
      author: "Sarah Johnson",
      position: "Founder",
      company: "Premier Educational Institution",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  const clientLogos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvsdhwPGkzqBMkmwXjvVVBlLVInb_QMJ9Rw&s",
    "https://cdn.freebiesupply.com/logos/thumbs/2x/aroma-1-logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5PizvBeJYheF-6Uq8X9vufn9tBOLvpEy2A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAZvBGuQ-Jo_pI1C3lVH4bE9NrCiWbqM30g&s",
    "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5065/applications/64930a4a78ef4d2676f2d12a/application/pictures/free-logo/original/fN7017PpF-Baby-Aroosa.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP26e352fWM3bmuVb_YiBmlma5fTHkl2q6PA&s",
    "https://static.vecteezy.com/system/resources/previews/008/892/217/non_2x/simple-math-education-logo-design-happy-math-logo-smile-math-logo-vector.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdr5FTAM1ORuW-s_cnbxj9kSnrXDtKWoLV1Q&s",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAA+VBMVEUAAAD///9TU1NYWFgPDw8CBQcRLj4LHCYFDhQMICsBAwMTM0UGEBYRLDvY2dlVVVQrN0CJobBfYWJ5gYZrhZYAUHEPQVpCc44MR2QAPVcjXHgOJTIbTmrv8/UIFh1efpI2QkpdaXNwjqEkN0QVOU45YHc/SE4dVXQuLi4ASmwYQVhJSUkVOEvIyMjk5OQ8PDy0xc4AKT1XYGcjLTSIkJR5eXlMV18AL0myur8AFiOnrLCmt8IACBSbm5u2trYhISEbGxsAHzE6UF5qe4UAHTYALksAOlodSmE8ZXyRqLdmaGkxSVc3VWfCys9/mqsjPk6JjI4WIikAABe5sFeRAAAH8UlEQVR4nO2ca1vaSBSAJ1FuCcEWKw0m0ItRSAiklCorqwi1WyzVrfb//5g9M7lAIEAG+6wkz3k/KGEyifM+J5OZMSeEIAiCIAiCIAiCIAiCIAiCIAiCIAiCRCBJGW6k7WtKL9zcrWGNzXPiNnnLmgl1RZubL9brOQ7q9SJzBZq2qplYU/l6rqApSjYmiqIVctBiqgkqxq+puDWTqkoCUZeX426/Gpt+vzvWIDyop27XqFYrMakacnecg6hKpCkaUhdfvrzmRFYKBQjEr7e3b3i4vf1QqCfWVDE3bgucfDa6cDFlbevs4ECMD+x8oyXXVD6nffuLT9SFqX6UZfn+Xm+ccYgCnuTEmqL9lCb/w6XqwjR/dPqWdTo9bvCp6lnZxF59Er38FOM7hyoqSihVJ5O78h6fqp5qa7liQu99rEsvyFZsVTUmSiipuv62LHKp6umWktiQ8gZUWnxVIOo1/CqZxw0wxaMKRCX32qPwqXIjCkwdHR9TU66qg82IvYmR5IiiMFWFrFH9sJmvOouoOVNM1clmFMtOuih/RqPJBoy21XXojcbRD2HBFFPV0NcyqVhGVsslXRRbPckX6eQvm5XXYBsV/ai2ZEp839AtY11FmU4W6Vwx6aKCFQWY7RfWoGXtSYSpg/cNuLK0NRUTvooQgi020eWBdUBnZpmRpmhfva6mv6T10s38M2xewMzDEFWNMqXbdI6S2sXONXjSpHDjMpm6ZkTGlC4X6uGAkTJRR0gfQXQttH6NqWImxhFSh7vuW8wvdMEcpqToI6QNyb0NXi3e1TlMsTvpJdzxEjsdjoPEhqFa9/CStjNUEN8UDM9OzjStkNi14BhQUQUl238YfqOTj1BJXFPsGPb0p51N8CLLJlgjs3b1kzDoarmtTRVzyq/y3j2MSNOqSvImy58EYdCnrQyVxTcFB5mUxb1T1UipKleUpYIoYVBdbn98U5qsT2HyfKqnU5UXUUzUc03Zx1MxtarmIwpMqXTkHSrmMWUwU+lU5UWU6Ypipp4RU56pNKoKR9QfM5U+VaE+yu2nss+598m+qbSp8iLKDESBKeUZ46lCVvdNpUvVQh9F+Wxo247RCV3Ksmb/3EqRqihRbJCwtSkYJqgpVLXUR1FRxuKzFlyrLjCdsfTUqVq861FR3jQkvBuHKXbEtKmKiig14h/jPGue7v+lK+lSFVcUlylfVSNFqtaIyizuyWFKSp2q+KL4TPmqJo2zg1So4hDFaSplUcUjitdUEFV6CqIqasC5UhS3qRRFFVdEbTQV0fa0RFW0KFnLFVc8Y0CfS4g2tfq5hHw9p9h6sqMqSpSpswfCipFpVKufdaFtr0fnXhXpI2yWnuSoiuyjGhMwxZ53iqKgrHx+SlZWVtIUMNVIblRFi2IP17GsqQiysmE1Vj2TZ8sra0E1MJXUqIq89BpHR7qqVlYmYVVU/ch8WDZ1Ah7UNTlY9PnQRkKjKiqiTPPdx428MT1Vc6Z6+t27zRwnMqoi73rmv0IM/ja/P4RN9fS3X/Y2U2bPrSdMVeSlF08UVaU+zJuiosQ4lJMXVV5S0XaifFUl0zUVWxRTFY6qnU83Yil9cnVLUZ6qkjrR78o8opajqrLjyX40pApKf2tRVJX50GFZa1yillTdL69A7xSslxrPpRPF7cxDqq4Ny7p/xSdqSdVPmGPuuKmQKPPoNZ8oQfikGrYs29bdF5pczIGrymfv507nHLF82oveyS8XW9VPrw85efwqK5qWlS96r3jRdd1mwKC+8LTTz4HSfqo+VmCOYVUqlmUYtt2nLz1Ym4U1T6VqdOk7ImBKlzWsymR9GlY4I8uCs8GJoRZ8lJVVCzw7QsZNvKIvz6CvxWBsyMIK5VV1xxp9sUSRvYJjPO52u6HyYKvbnSuin9j7OzRtrCns1FrhkqUdvbSP1Ujzb3KpU556vd58FlbvVe9ythH8YFz1Dg97hKUMwVGupvRi9Ire00qXU69q7hxKzr2N358Pf3s5WVfTJ/fcV0+HTbLT4yk3K8Zpzt7f47QcR/STqfJNseW0xBs/AatFE7RaXpZWvliqtdtCe0TchTpSaw+HQ7eMtM8J/KwRd/NKgJKBu0GuO+3aU56te5FOM+OeVRgK52SHRRHqihCx5TVWyhBnREjT8bZvxH3YZb/lLVrus/38nUnnmh7gekhbCMpJh256ZW0BdoNv/F3niuDzo3cMMMU+kOtH4jy+nIS4OE2nOdsYMVMuTNQMMAW0vK3z9sJxOnOf21PhZu6b+aLBcK6Kd2Kn1iQJQJy1Hv5merl5PaskhnfMsIGiv+/wfOE4HRhd1bzP7ZZYmxNE1/yCjUHnJqjiC9oTFo+2gzRpzxT87U5THAVFC6bCMTWkF19ZqAVtDMVUi5x3omMKolHwTxeYIiNh968+sQkEQeWMbmYB1nIbMvI2mSnJL24J7u9a0OxRUJGaItftKFP7cGkPBv73nqkWvQCf1Yr/AbdTavnNhX7K8bspkhGbEpEc303YFLmuTaFix2/1YkxB1AkRRY7QJCU/fnxTnUfyGI67HaTFOqWR337ao7eCa0JyoF8KxC2YItMS9D6z/iXcT9GfQd89309Na0LwvW9KKgmlRPTpCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCSbGSy4QCtlH4vHSIY0gCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgaeE/zZyiiUoApZgAAAAASUVORK5CYII=",
    "data:image/png;base64,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"
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

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 7000);
    }
    
    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <FadeInOut>
          <h2 
            className={`heading-md mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            Trusted By 200 Brands
          </h2>
          </FadeInOut>
          <FadeInOut>
          <p 
            className={`text-gray-600 max-w-2xl mx-auto text-lg ${
              isVisible ? 'animate-fade-in-delay-1' : 'opacity-0'
            }`}
          >
            Our reputation is built on delivering exceptional results for world-class organizations
          </p>
          </FadeInOut>
        </div>
        
        {/* Client Logos Marquee */}
        <div 
          className={`mb-16 overflow-hidden ${
            isVisible ? 'animate-fade-in-delay-1' : 'opacity-0'
          }`}
        >
          <div className="animate-marquee flex items-center">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={index} 
                className="mx-8 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              >
                <img 
                  src={logo} 
                  alt="Client Logo" 
                  className="h-10 md:h-16 object-contain max-w-none"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials Slider */}
      </div>
    </section>
  );
};

export default TestimonialsSection;