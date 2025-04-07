
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`${isLoading ? 'overflow-hidden h-screen' : ''}`}>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <img 
              src="/public/lovable-uploads/220f8cef-5d5e-4ec2-b302-8b606befe51f.png" 
              alt="Singh & Johnson Logo" 
              className="h-16 mb-4 animate-pulse"
            />
            <div className="w-40 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-brand-orange animate-[grow_1s_ease-in-out_forwards]"></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Main Content */}
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      
      {/* Back to top button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-brand-orange text-white z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-brand-black transition-colors duration-300"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
