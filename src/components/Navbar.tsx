
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xl  ${
        isScrolled ? '' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center rounded-sm">
          <img 
            src="/lovable-uploads/c5e2af59-4645-4e15-ab1d-909aca21db67.png" 
            alt="Singh & Johnson Logo" 
            className={`h-12 ${isScrolled ? "": "invert-0"}`}
          />
          {/* <div className='bg-white h-10 flex items-center justify-center'> */}
          <p className={`${isScrolled ? "hidden" : "text-white"}  text-xl px-1 font-serif`}>Singh & Johnson</p>
          {/* </div> */}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <a 
            href="#about" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-black hover:text-brand-orange' : 'text-white hover:text-brand-orange'
            }`}
          >
            About
          </a>
          <a 
            href="#services" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-black hover:text-brand-orange' : 'text-white hover:text-brand-orange'
            }`}
          >
            Services
          </a>
          <a 
            href="#work" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-black hover:text-brand-orange' : 'text-white hover:text-brand-orange'
            }`}
          >
            Work
          </a>
          <a 
            href="#contact" 
            className={`btn-primary ${
              isScrolled ? 'bg-black text-brand-white hover:bg-brand-orange hover:text-white' : 'bg-brand-orange text-white '
            }`}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-orange" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md py-4">
          <div className="container-custom flex flex-col space-y-4">
            <a 
              href="#about" 
              className="font-medium text-black hover:text-brand-orange"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="font-medium text-black hover:text-brand-orange"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#work" 
              className="font-medium text-black hover:text-brand-orange"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#contact" 
              className="btn-primary inline-block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
