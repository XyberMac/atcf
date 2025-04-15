import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative w-full overflow-hidden bg-black">
      {/* Top Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-black/20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
      
      {/* Newsletter Section */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="bg-gradient-to-r from-black/60 via-warning/20 to-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-warning/20 shadow-lg shadow-warning/5 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for exclusive offers, event tips, and updates.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-warning/50 text-white"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-warning text-black font-bold rounded-lg transition-all hover:bg-amber-400 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h3 className="text-xl font-bold text-warning">
                Angel Top Class Events
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              A youth-empowered event staffing company based in Johannesburg, South Africa. 
              We provide professional waitstaff and event services to make your special occasions truly memorable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-warning/20 p-2.5 rounded-full transition-colors">
                <FaFacebookF className="text-warning" size={16} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-warning/20 p-2.5 rounded-full transition-colors">
                <FaTwitter className="text-warning" size={16} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-warning/20 p-2.5 rounded-full transition-colors">
                <FaInstagram className="text-warning" size={16} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-warning/20 p-2.5 rounded-full transition-colors">
                <FaLinkedinIn className="text-warning" size={16} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-warning"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-warning transition-colors flex items-center">
                  <span className="mr-2">›</span> Home
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-warning transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-warning transition-colors flex items-center">
                  <span className="mr-2">›</span> Our Services
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-gray-400 hover:text-warning transition-colors flex items-center">
                  <span className="mr-2">›</span> Gallery
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-gray-400 hover:text-warning transition-colors flex items-center">
                  <span className="mr-2">›</span> Testimonials
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-warning transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-warning"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/#services" className="text-gray-400 hover:text-warning transition-colors flex items-center">
                  <span className="mr-2">›</span> Event Setup
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-warning transition-colors flex items-center">
                  <span className="mr-2">›</span> Decoration
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-warning transition-colors flex items-center">
                  <span className="mr-2">›</span> Food & Drinks Service
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-warning transition-colors flex items-center">
                  <span className="mr-2">›</span> Professional Waitstaff
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-warning transition-colors flex items-center">
                  <span className="mr-2">›</span> Clearing & Cleanup
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-warning"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-warning mt-1 mr-3" size={18} />
                <span className="text-gray-400">Johannesburg, South Africa</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-warning mt-1 mr-3" size={18} />
                <a href="tel:+27721917182" className="text-gray-400 hover:text-warning transition-colors">
                  +27 72 191 7182
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-warning mt-1 mr-3" size={18} />
                <a href="mailto:jucusiphokazi10@gmail.com" className="text-gray-400 hover:text-warning transition-colors">
                  jucusiphokazi10@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaClock className="text-warning mt-1 mr-3" size={18} />
                <span className="text-gray-400">Available 24/7</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Angel Top Class Events. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-warning transition-colors">Privacy Policy</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-gray-500 hover:text-warning transition-colors">Terms of Service</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-gray-500 hover:text-warning transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 bg-warning text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-400 transition-colors z-50"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-40 left-10 w-20 h-20 border-2 border-warning/10 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-40 right-10 w-12 h-12 border-2 border-warning/10 rounded-full animate-pulse hidden lg:block"></div>
      
      {/* Custom animation for floating elements */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;