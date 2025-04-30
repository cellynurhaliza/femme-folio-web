
import React from 'react';
import { User, Code, Palette } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Bahasa Pemrograman : PHP, JavaScript, Python, C#", icon: <span>-</span>, level: 90 },
    { name: "Framework : Laravel, Angular, Unity", icon: <span>-</span>, level: 85 },
    { name: "Database Management: MySQL, PostgreSQL", icon: <span>-</span>, level: 80 },
    { name: "Version Control: Git", icon: <span>-</span>, level: 95 }
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
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="relative animate-slide-up h-full max-h-full">
            <div className="min-h-[300px] md:min-h-[400px] max-h-full rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center">
              <img
                src="public/img/profil.jpg"
                alt="Profile"
                className="w-auto h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-medium mb-4">
              Halo,  <span className="text-gradient font-semibold">Salam kenal!</span>
            </h3>
            <p className="text-gray-600 mb-6">
            Saya lulusan SMK Wikrama Bogor jurusan Pengembangan Perangkat Lunak dan Gim, dengan minat kuat di bidang 
            rekayasa perangkat lunak dan keahlian utama di pemrograman web. Saya pernah menjadi narasumber workshop 
            pembuatan game sederhana. Bersemangat untuk bergabung dengan perusahaan progresif yang mendukung pengembangan 
            keterampilan dan potensi saya.
            </p>
            
            <div className="space-y-5 mt-8">
              <h4 className="text-lg font-medium">Keterampilan Teknis</h4>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
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
