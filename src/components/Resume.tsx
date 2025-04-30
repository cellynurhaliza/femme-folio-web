
import React from 'react';
import { FileText } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "Pengembangan Perangkat Lunak dan Gim ",
      institution: "SMK Wikrama Bogor",
      period: "2022 - 2025",
      description: "Di sini saya mempelajari dasar-dasar pemrograman, pengembangan aplikasi, desain antarmuka, serta manajemen proyek perangkat lunak. Pendidikan ini membentuk fondasi kuat dalam keterampilan teknis dan problem solving yang saya miliki saat ini."
    }
  ];

  const experience = [
    {
      position: "Front End Developer",
      company: "PT Hexaon Business Mitrasindo",
      period: "Jan 2024 - Jun 2024",
      description: "Saya telah menyelesaikan magang di PT. Hexaon Business Mitrasindo selama 6 bulan. Pengalaman berharga ini telah mengasah keterampilan saya dan memberikan wawasan mendalam tentang industri. Saya telah membuat website mengenai transaksi antar bank menggunakan AngularTS."
    },
    {
      position: "Back End Developer",
      company: "Berkah Tirta Alam",
      period: "Jul 2024 - Des 2024",
      description: "Dengan menyelesaikan project work selama 6 bulan Berkah Tirta Alam, saya memperoleh pengalaman praktis yang memperdalam keterampilan dan pemahaman saya dalam bidang industri. Saya telah membuat website dinamis yang berfungsi untuk melihat data data pelanggan mengenai pembayaran air. Website ini dibuat menggunakan Laravel dan PostgreSQL."
    },
    {
      position: "Social Media Manager",
      company: "Freelance",
      period: "Okt 2024 - Des 2024",
      description: "Sebagai Social Media, Data Entry, dan Account Management diperusahaan individu, saya bertanggung jawab untuk mengelola engagement di media sosial dengan merespons komentar, mention, dan pesan untuk menjaga interaksi positif dengan audiens. Saya mampu bekerja sama dalam tim dan lingkungan baru dan saya mampu membagi waktu untuk bekerja dan bersekolah."
    },
    {
      position: "Teknik Kepramukaan",
      company: "Organisasi Dewan Ambalan SMK Wikrama Bogor",
      period: "2023 - 2024",
      description: "Dewan Ambalan adalah organisasi yang menjadi motor penggerak kegiatan kepramukaan di tingkat ambalan pramuka penegak. Di Dewan Ambalan saya memiliki posisi sebagai Koordinator Teknik Kepramukaan (Tekpram), tugas utamanya adalah memastikan pelaksanaan teknis kegiatan kepramukaan berjalan lancar dan sesuai rencana. Saya pun sudah pernah mengikuti beberapa lomba kepramukaan dan mengikuti beberapa kepanitiaan di organisasi ini."
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
