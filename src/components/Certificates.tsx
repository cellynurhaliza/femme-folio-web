import React, { useState } from 'react';
import { Award } from 'lucide-react';

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      date: "November 2022",
      image: "/img/sertif-web.png"
    },
    {
      title: "Frontend - HTML",
      issuer: "MySkill",
      date: "Mei 2023",
      image: "/img/sertif-html.png"
    },
    {
      title: "Frontend - CSS",
      issuer: "MySkill",
      date: "Mei 2023",
      image: "/img/sertif-css.png"
    },
    {
      title: "Meneliti Karier sebagai Software Developer",
      issuer: "Dicoding",
      date: "Juli 2023",
      image: "/img/sertif-meneliti.png"
    },
    {
      title: "Belajar Dasar Git dengan GitHub",
      issuer: "Dicoding",
      date: "Agustus 2023",
      image: "/img/sertif-git.png"
    },
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      issuer: "Dicoding",
      date: "Agustus 2023",
      image: "/img/sertif-software.png"
    },
    {
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      issuer: "Dicoding",
      date: "Agustus 2023",
      image: "/img/sertif-logic.png"
    },
    {
      title: "Front-end Development with The Progressive JavaScript Framework Vue.js",
      issuer: "PT Wan Teknologi",
      date: "Oktober 2023",
      image: "/img/sertif-wantek.jpg"
    },
    {
      title: "Backend Development with JavaScript Framework",
      issuer: "PT Laskar Teknologi Mulia (CyberLabs)",
      date: "November 2023",
      image: "/img/sertif-cyberlabs.png"
    },
    {
      title: "Certificate On The Job Training",
      issuer: "PT Hexaon Business Mitrasindo",
      date: "Juni 2024",
      image: "/img/sertif-pkl.jpg"
    },
    {
      title: "Web Development Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Oktober 2024",
      image: "/img/sertif-fundamental.png"
    },
    {
      title: "Unity Essentials Pathway",
      issuer: "Unity Technologies",
      date: "November 2024",
      image: "/img/sertif-unity.png"
    },
    {
      title: "IGDX Career Seminar 'Career Guidance For Aspiring Game Developer'",
      issuer: "Kementerian Komunikasi dan Informatika",
      date: "Desember 2024",
      image: "/img/sertif-igdx.png"
    },
    {
      title: "Python - Data Science",
      issuer: "SRC Telkom Indonesia x Sanbercode",
      date: "Jan 2025",
      image: "/img/sertif-digi.png"
    },
    {
      title: "Python for Data Analysis",
      issuer: "MySkill",
      date: "April 2025",
      image: "/img/sertif-data.png"
    },
    {
      title: "Frontend and Backend Integration",
      issuer: "MySkill",
      date: "May 2025",
      image: "/img/integration.png"
    },
    {
      title: "Webinar Game Developer 'Exploring the Role of a Game Artist: Foundation for Aspiring Creatives in the Game Industry'",
      issuer: "CodeLamp",
      date: "Juni 2025",
      image: "/img/webinar-game.png"
    },
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 8);

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
          {visibleCertificates.map((certificate, index) => (
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
                <h3 className="text-xl font-semibold">{certificate.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-1">{certificate.issuer}</p>
              <p className="text-primary text-sm font-medium">{certificate.date}</p>
            </div>
          ))}
        </div>

        {certificates.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
            >
              {showAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
