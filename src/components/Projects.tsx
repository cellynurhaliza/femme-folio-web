
import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('semua');
  
  const filters = ['semua', 'web developer', 'data analyst', 'game developer'];
  
  const projects = [
    {
      title: "TestingTool Arqa",
      category: "Front End Developer",
      type: "web developer",
      image: "/img/arqa.png",
      description: "TestingTool Arqa adalah sebuah website dinamis tentang data data bank yang di buat sebagai tugas akhir praktik kerja lapangan (PKL). Website ini dibuat menggunakan AngularTS."
    },
    {
      title: "Berkah Tirta Alam (BETA)",
      category: "Back End Developer",
      type: "web developer",
      image: "/img/beta.png",
      description: "BETA adalah sebuah website dinamis yang berfungsi untuk melihat data data pelanggan mengenai pembayaran air. Website ini dibuat menggunakan Laravel dan PostgreSQL."
    },
    {
      title: "Plant Culture",
      category: "Front End Developer",
      type: "web developer",
      image: "/img/pc.png",
      description: "Plant Culture website adalah sebuah website statis restoran makanan vegan yang dibuat untuk memesan makanan. Website ini dibuat menggunakan AngularTS dan Tailwind."
    },
    {
      title: "Website Kasir",
      category: "Full Stack Developer",
      type: "web developer",
      image: "/img/kasir.png",
      description: "Sistem ini merupakan aplikasi web penjualan berbasis Laravel yang digunakan untuk mencatat dan memantau transaksi penjualan harian. Terdapat dua jenis pengguna dalam sistem ini, yaitu admin dan employee (karyawan). Setiap pengguna dapat login menggunakan email dan password yang telah didaftarkan sebelumnya. "
    },
    {
      title: "Math Adventure",
      category: "Game Developer",
      type: "game developer",
      image: "/img/math-adventure.png",
      description: "Math Adventure adalah game edukasi di mana pemain bertujuan mengumpulkan skor sebanyak mungkin dengan menjawab soal matematika. Skor digunakan untuk membuka level berikutnya. Pemain juga harus melewati rintangan dan menyelesaikan misi."
    },
    {
      title: "Website Masjid",
      category: "Front End Developer",
      type: "web developer",
      image: "/img/wakaf.png",
      description: "Website Masjid adalah sebuah website statis yang dibuat untuk memberikan wakaf pada masjid tersebut. Website ini dibuat menggunakan HTML, CSS"
    },
    {
      title: "Sistem Pengelolaan Surat",
      category: "Full Stack Developer",
      type: "web developer",
      image: "/img/surat.png",
      description: "Website ini merupakan aplikasi berbasis web yang digunakan untuk mengelola data surat dan data pengguna pada suatu instansi, seperti sekolah atau kantor. Website ini digunakan menggunakan Laravel dan MySql."
    },
    {
      title: "Absensi Sholat Jumat",
      category: "Front End Developer",
      type: "web developer",
      image: "/img/absensi.png",
      description: "Aplikasi ini dibuat untuk mencatat kehadiran siswa dalam ibadah Sholat Jumat secara digital di lingkungan SMK Wikrama Bogor. Dengan sistem ini, pemantauan kehadiran menjadi lebih akurat, efisien, dan terdokumentasi dengan baik."
    },
    {
      title: "K-Means Clustering",
      category: "Data Analyst",
      type: "data analyst",
      image: "/img/k-mean.png",
      description: "Saya telah menyelasaikan final project saat mengikuti bootcamp dari SRC Telkom Indonesia x Sanbercode. Saya menerapkan K-Means Clustering, negara dikelompokkan ke dalam beberapa klaster berdasarkan tingkat perkembangan sosial-ekonomi dan kesehatannya."
    },
  ];

  const filteredProjects = activeFilter === 'semua' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-secondary rounded-lg mb-4">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-center">Proyek</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeFilter === filter 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-1 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
