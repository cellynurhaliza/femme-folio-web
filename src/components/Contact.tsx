
import React from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin  } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "nurhalizacelly@gmail.com",
      link: "mailto:nurhalizacelly@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telepon",
      value: "+62 831-5361-0775",
      link: "tel:+6283153610775"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Lokasi",
      value: "Bogor, Jawa Barat, Indonesia",
      link: "https://maps.app.goo.gl/ypX7b4G4zW9vpRcf8"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: "Instagram",
      value: "@ccellynur",
      link: "https://www.instagram.com/ccellynur"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "Celly Nurhaliza",
      link: "https://www.linkedin.com/in/celly-nurhaliza-5554a6270/"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-secondary rounded-lg mb-4">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-center">Kontak</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Mari Terhubung</h3>
            <p className="text-gray-600 mb-8">
              Tertarik untuk bekerja sama atau ingin mengetahui lebih lanjut tentang saya? 
              Jangan ragu untuk menghubungi saya melalui berbagai channel di bawah ini.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium">{item.title}</h4>
                    <a 
                      href={item.link} 
                      className="text-gray-600 hover:text-primary transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex space-x-4">
              {['twitter', 'linkedin', 'dribbble', 'instagram'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-gray-600 hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl p-6 shadow-lg animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
              <form className="space-y-6" action="https://formspree.io/f/mblodzvy" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nama</label>
                    <Input 
                      name="name"
                      id="name" 
                      placeholder="Nama Anda" 
                      required 
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <Input 
                      name="email"
                      id="email" 
                      placeholder="email@example.com" 
                      type="email" 
                      required 
                      className="rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subjek</label>
                  <Input 
                    name="subject"
                    id="subject" 
                    placeholder="Subjek pesan Anda" 
                    required 
                    className="rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Pesan</label>
                  <Textarea 
                    name="message"
                    id="message" 
                    placeholder="Tulis pesan Anda di sini..." 
                    required 
                    className="min-h-[150px] rounded-lg"
                  />
                </div>
                
                <Button type="submit" className="w-full rounded-lg">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
