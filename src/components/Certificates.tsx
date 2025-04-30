
import React from 'react';
import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "UI/UX Design Professional",
      issuer: "Google Design Academy",
      date: "Oktober 2022",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Frontend Web Development",
      issuer: "Udemy",
      date: "Juni 2021",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "React JS Expert",
      issuer: "Coursera",
      date: "Maret 2020",
      icon: "⚛️",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Design Thinking Workshop",
      issuer: "IDEO",
      date: "Mei 2019",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
    },
  ];

  return (
    <section id="certificates" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-secondary rounded-lg mb-4">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-center">Sertifikat</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 aspect-video rounded-lg overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{certificate.icon}</span>
                <h3 className="text-xl font-semibold">{certificate.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-1">{certificate.issuer}</p>
              <p className="text-primary text-sm font-medium">{certificate.date}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Selain sertifikat di atas, saya juga mengikuti berbagai workshop dan pelatihan untuk terus mengembangkan keterampilan saya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
