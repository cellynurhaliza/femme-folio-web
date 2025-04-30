
import React from 'react';
import { User, Code, Palette } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "UI/UX Design", icon: <Palette className="w-4 h-4" />, level: 90 },
    { name: "Frontend Dev", icon: <Code className="w-4 h-4" />, level: 85 },
    { name: "React", icon: <User className="w-4 h-4" />, level: 80 },
    { name: "Figma", icon: <Palette className="w-4 h-4" />, level: 95 },
    { name: "Tailwind CSS", icon: <Code className="w-4 h-4" />, level: 85 }
  ];

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
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-medium mb-4">
              Saya adalah <span className="text-gradient font-semibold">UI/UX Designer & Frontend Developer</span> yang berpengalaman
            </h3>
            <p className="text-gray-600 mb-6">
              Saya memiliki pengalaman dalam membangun produk digital yang 
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
            
            <div className="space-y-5 mt-8">
              <h4 className="text-lg font-medium">Keahlian</h4>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
