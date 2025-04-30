
import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-secondary rounded-lg mb-4">
            <User className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-center">Tentang Saya</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative animate-slide-up">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-primary/20">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full border-8 border-white bg-secondary flex items-center justify-center">
              <div className="text-center">
                <span className="block text-xl font-semibold text-gray-800">5+</span>
                <span className="text-sm text-gray-600">Tahun Pengalaman</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-medium mb-4">
              Saya adalah <span className="text-gradient font-semibold">UI/UX Designer & Frontend Developer</span> yang berpengalaman
            </h3>
            <p className="text-gray-600 mb-6">
              Saya memiliki pengalaman lebih dari 5 tahun dalam membangun produk digital yang 
              berkualitas dan berbasis user experience. Dengan latar belakang yang kuat dalam 
              desain dan pengembangan frontend, saya dapat membantu mewujudkan visi produk 
              digital Anda dari konsep hingga implementasi.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: "Nama", value: "Nama Lengkap" },
                { label: "Email", value: "email@example.com" },
                { label: "Lokasi", value: "Jakarta, Indonesia" },
                { label: "Ketersediaan", value: "Fulltime / Freelance" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-gray-500 text-sm">{item.label}:</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {["UI/UX Design", "Frontend Dev", "React", "Figma", "Tailwind CSS"].map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-secondary text-gray-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
