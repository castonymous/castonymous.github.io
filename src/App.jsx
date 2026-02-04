import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Briefcase, Send, ChevronRight } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek scroll untuk navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce App",
      desc: "Aplikasi belanja online dengan integrasi payment gateway.",
      tech: ["React", "Tailwind", "Firebase"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      desc: "Monitoring cuaca real-time menggunakan OpenWeather API.",
      tech: ["JavaScript", "Chart.js", "API"],
      link: "#"
    },
    {
      title: "AI Chatbot",
      desc: "Interface chat sederhana yang terhubung ke model bahasa AI.",
      tech: ["Next.js", "OpenAI", "Tailwind"],
      link: "#"
    }
  ];

  const skills = ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Node.js", "Git & GitHub", "UI/UX Design"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Casto.dev
          </div>
          <div className="hidden md:flex space-x-8 font-medium">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Hire Me
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
            Available for Freelance
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Membangun Pengalaman Digital <br />
            <span className="text-blue-600">Masa Depan.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Halo! Saya Casto, seorang Frontend Developer yang hobi ngulik UI/UX dan bikin website yang nggak cuma jalan, tapi juga enak dipandang.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl">
              Lihat Karya <ChevronRight size={20} />
            </a>
            <div className="flex items-center justify-center gap-4 px-6">
              <Github className="cursor-pointer hover:text-blue-600 transition-colors" />
              <Linkedin className="cursor-pointer hover:text-blue-600 transition-colors" />
              <Mail className="cursor-pointer hover:text-blue-600 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl rotate-3"></div>
              <div className="relative bg-slate-200 aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
                <User size={120} className="text-slate-400" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Code2 className="text-blue-600" /> Tentang Saya
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Berfokus pada pengembangan web modern dengan performa tinggi. Saya percaya bahwa kode yang bersih menghasilkan produk yang luar biasa. Saya lahir di tahun 2000 dan terus belajar teknologi terbaru setiap harinya.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Proyek Pilihan</h2>
            <p className="text-slate-600">Beberapa pekerjaan yang pernah saya selesaikan baru-baru ini.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6 p-4 bg-blue-50 w-fit rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-slate-600 mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map(t => <span key={t} className="text-xs font-bold px-3 py-1 bg-slate-100 rounded-full">{t}</span>)}
                </div>
                <a href={p.link} className="flex items-center gap-2 font-bold text-blue-600 group-hover:gap-4 transition-all">
                  Lihat Detail <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Tertarik Kolaborasi?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            Saya selalu terbuka untuk diskusi proyek baru atau sekadar ngobrol soal teknologi.
          </p>
          <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl max-w-2xl mx-auto border border-white/10">
            <div className="grid gap-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Nama Anda" className="flex-1 bg-white/10 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Email Anda" className="flex-1 bg-white/10 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <textarea placeholder="Pesan Anda" rows="4" className="bg-white/10 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                Kirim Pesan <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center text-slate-500">
          <p>© 2026 Casto. Dibuat dengan React & ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default App;