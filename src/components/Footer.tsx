
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-lora font-semibold text-gradient">Portfolio</h2>
            <p className="text-gray-400 mt-2 max-w-md">
              Saya membantu klien menciptakan pengalaman digital yang luar biasa melalui desain dan pengembangan.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">Tentang</a>
            <a href="#resume" className="text-gray-400 hover:text-white transition-colors">Resume</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Proyek</a>
            <a href="#certificates" className="text-gray-400 hover:text-white transition-colors">Sertifikat</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontak</a>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Portfolio Personal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
