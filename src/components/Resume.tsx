
import React from 'react';
import { FileText } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "Sarjana Teknik Informatika",
      institution: "Universitas Indonesia",
      period: "2015 - 2019",
      description: "Lulus dengan predikat cum laude dengan fokus pada pengembangan web dan desain interaksi."
    },
    {
      degree: "Master UI/UX Design",
      institution: "Digital Design Academy",
      period: "2019 - 2020",
      description: "Fokus pada desain pengalaman pengguna, riset, dan prototyping."
    }
  ];

  const experience = [
    {
      position: "Senior UI/UX Designer",
      company: "Tech Innovate",
      period: "2022 - Sekarang",
      description: "Memimpin tim desain untuk mengembangkan produk digital dengan fokus pada pengalaman pengguna. Berkolaborasi dengan tim pengembangan untuk memastikan implementasi desain yang akurat."
    },
    {
      position: "Frontend Developer",
      company: "Digital Solutions",
      period: "2020 - 2022",
      description: "Mengembangkan antarmuka pengguna yang responsif menggunakan React dan Tailwind CSS. Berkolaborasi dengan tim desain untuk menerjemahkan mockup ke dalam kode yang berfungsi."
    },
    {
      position: "UI/UX Designer",
      company: "Creative Agency",
      period: "2019 - 2020",
      description: "Merancang antarmuka pengguna untuk berbagai klien dari berbagai industri. Melakukan pengujian pengguna dan mengimplementasikan peningkatan berdasarkan umpan balik."
    }
  ];

  const ResumeItem = ({ title, organization, period, description }) => (
    <div className="border-l-2 border-primary pl-5 pb-8 relative animate-slide-up">
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
      <h4 className="text-xl font-medium mb-1">{title}</h4>
      <p className="text-primary font-medium mb-2">{organization}</p>
      <p className="text-gray-500 text-sm mb-3">{period}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <section id="resume" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-secondary rounded-lg mb-4">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-center">Resume</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Pendidikan</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <ResumeItem
                  key={index}
                  title={item.degree}
                  organization={item.institution}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Pengalaman</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <ResumeItem
                  key={index}
                  title={item.position}
                  organization={item.company}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
