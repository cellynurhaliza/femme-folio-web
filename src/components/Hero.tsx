
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.google.com/imgres?q=foto%20coding&imgurl=https%3A%2F%2Fonline.binus.ac.id%2Fwp-content%2Fuploads%2F2024%2F01%2FPerbedaan-Coding-dan-Programming.jpg&imgrefurl=https%3A%2F%2Fonline.binus.ac.id%2F2024%2F01%2F03%2Fperbedaan-coding-dan-programming-yang-wajib-diketahui%2F&docid=_tUKqaBcZbgwmM&tbnid=8K2g5cC2YSPw3M&vet=12ahUKEwjfkqW2q-iNAxXESmwGHQSlFHsQM3oFCIMBEAA..i&w=1920&h=1282&hcb=2&ved=2ahUKEwjfkqW2q-iNAxXESmwGHQSlFHsQM3oFCIMBEAA')] bg-cover bg-center opacity-[0.03]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            <span className="block">Halo, Saya</span> 
            <span className="text-gradient">Celly Nurhaliza</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Software Engineer
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#contact">Hubungi Saya</a>
            </Button>
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="/img/CV_Celly Nurhaliza.pdf">Lihat CV</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 flex flex-col items-center">
          <span className="text-sm mb-2">Gulir</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
