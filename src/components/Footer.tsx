
import { Instagram, Linkedin, Mail } from 'lucide-react';
import FadeInOut from './FadeInOut';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <FadeInOut>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Mini About */}
          <div>
            <img 
              src="/public/lovable-uploads/c5e2af59-4645-4e15-ab1d-909aca21db67.png" 
              alt="Singh & Johnson Logo" 
              className="h-12 mb-4 invert"
            />
            <p className="text-gray-400 mb-6">
              Singh & Johnson is committed to delivering innovative, strategic, and results-driven 
              solutions for your brand.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  Branding
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  Performance Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  Lead Generation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  Content Creation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-orange mr-2" />
                <a href="mailto:admin@singhandjohnson.in" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  admin@singhandjohnson.in
                </a>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/company/singh-and-johnson/" 
                target='_blank'
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-brand-orange transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/singhandjohnson?igsh=MXQweXFub205MHlmbg==" 
                target='_blank'
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-brand-orange transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:admin@singhandjohnson.in" 
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-brand-orange transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        </FadeInOut>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Singh & Johnson. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-brand-orange text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-orange text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
