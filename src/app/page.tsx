"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, ExternalLink, Menu, X, 
  Smartphone, Zap, MonitorSmartphone, Palette
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- DATA ---
const DATA = {
  name: "SEAN EVANS",
  role: "Digital Architect",
  bio: "Engineering for impact. I build mobile-first, high-velocity digital experiences designed to maximize conversions. By achieving 90+ page speeds and seamless responsiveness, I ensure your message reaches every user, instantly.",
  aboutText: "I’m Sean Evans, a web developer specializing in custom websites for small businesses worldwide. I work closely with my clients to create dependable web solutions that grow alongside their business.",
  profileImg: "/profile.jpeg", 
  projects: [
    { 
      id: "1", 
      title: "Social Gold", 
      tag: "Social & Firebase", 
      desc: "Real-time social platform replicating Twitter/X functionality.", 
      img: "/p1.jpeg", 
      link: "https://social-gold-i2vk.vercel.app/" 
    },
    { 
      id: "2", 
      title: "Summit Pacific", 
      tag: "Corporate", 
      desc: "Premium construction management platform with a custom design system.", 
      img: "/p2.jpeg", 
      link: "https://summit-pacific.vercel.app/" 
    },
    { 
      id: "3", 
      title: "Obsidian Estates", 
      tag: "Real Estate", 
      desc: "Cinematic luxury property platform featuring real-time filtering.", 
      img: "/p3.jpeg", 
      link: "https://luxury-real-estate-swart.vercel.app/" 
    },
    { 
      id: "4", 
      title: "Vancouver Bistro", 
      tag: "Hospitality", 
      desc: "High-performance restaurant platform built on Next.js 16.", 
      img: "/p4.jpeg", 
      link: "https://vancouver-bistro.vercel.app/" 
    },
    { 
      id: "5", 
      title: "Sonic Journal", 
      tag: "AI Audio", 
      desc: "AI-powered mood tracker transforms text into curated soundtracks.", 
      img: "/p5.jpeg", 
      link: "https://music-journal-eight.vercel.app/" 
    },
  ],
  features: [
    { title: "Mobile First Design", icon: Smartphone, desc: "Every interaction is crafted for the smallest screen first. I prioritize touch-optimized navigation and content hierarchy." },
    { title: "90+ Lighthouse Scores", icon: Zap, desc: "Speed is a feature. By utilizing Next.js server-side rendering and efficient code-splitting, I deliver near-instant load times." },
    { title: "Fully Responsive", icon: MonitorSmartphone, desc: "Fluid layouts that adapt to any viewport. From 4K ultrawide monitors to tablets and foldables." }
  ]
};

// --- LOGO (ORIGINAL 3-RING) ---
const Logo = () => (
  <a href="#" className="group flex items-center gap-3 w-fit z-50 relative">
    <div className="relative w-9 h-9 flex items-center justify-center">
       <div className="absolute inset-0 rounded-full border-[2.5px] border-transparent border-t-white border-l-white/50 rotate-45 transition-transform duration-[1.5s] ease-in-out group-hover:rotate-[225deg]" />
       <div className="absolute inset-[4px] rounded-full border-[2.5px] border-transparent border-b-neutral-500 border-r-neutral-500/50 -rotate-12 transition-transform duration-[1s] ease-in-out group-hover:-rotate-[190deg]" />
       <div className="absolute inset-[8px] rounded-full border-[2.5px] border-transparent border-t-white border-r-white rotate-90 transition-transform duration-[0.8s] ease-in-out group-hover:rotate-[360deg]" />
       <div className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan]" />
    </div>
    <div className="text-2xl md:text-3xl tracking-tighter leading-none select-none text-white">
       <span className="font-black">SEANEVANS</span>
       <span className="font-light text-neutral-400">MEDIA</span>
    </div>
  </a>
);

// --- PERFORMANCE AURORA THEMES ---
const AURORA_THEMES = {
  "Borealis": "radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 40%), radial-gradient(circle at 80% 70%, #10b981 0%, transparent 40%), radial-gradient(circle at 50% 50%, #6366f1 0%, transparent 50%)",
  "Solar": "radial-gradient(circle at 20% 30%, #f97316 0%, transparent 40%), radial-gradient(circle at 80% 70%, #ef4444 0%, transparent 40%), radial-gradient(circle at 50% 50%, #7c2d12 0%, transparent 50%)",
  "Midnight": "radial-gradient(circle at 20% 30%, #8b5cf6 0%, transparent 40%), radial-gradient(circle at 80% 70%, #4338ca 0%, transparent 40%), radial-gradient(circle at 50% 50%, #2e1065 0%, transparent 50%)",
  "Cyber": "radial-gradient(circle at 20% 30%, #ec4899 0%, transparent 40%), radial-gradient(circle at 80% 70%, #06b6d4 0%, transparent 40%), radial-gradient(circle at 50% 50%, #4c1d95 0%, transparent 50%)",
  "Ocean": "radial-gradient(circle at 20% 30%, #0ea5e9 0%, transparent 40%), radial-gradient(circle at 80% 70%, #2563eb 0%, transparent 40%), radial-gradient(circle at 50% 50%, #0c4a6e 0%, transparent 50%)",
  "Toxic": "radial-gradient(circle at 20% 30%, #a3e635 0%, transparent 40%), radial-gradient(circle at 80% 70%, #059669 0%, transparent 40%), radial-gradient(circle at 50% 50%, #064e3b 0%, transparent 50%)",
  "Volcano": "radial-gradient(circle at 20% 30%, #ef4444 0%, transparent 40%), radial-gradient(circle at 80% 70%, #000000 0%, transparent 40%), radial-gradient(circle at 50% 50%, #450a0a 0%, transparent 50%)",
  "Ice": "radial-gradient(circle at 20% 30%, #f8fafc 0%, transparent 40%), radial-gradient(circle at 80% 70%, #60a5fa 0%, transparent 40%), radial-gradient(circle at 50% 50%, #1e293b 0%, transparent 50%)",
  "Gold": "radial-gradient(circle at 20% 30%, #facc15 0%, transparent 40%), radial-gradient(circle at 80% 70%, #d97706 0%, transparent 40%), radial-gradient(circle at 50% 50%, #451a03 0%, transparent 50%)",
  "Ember": "radial-gradient(circle at 20% 30%, #fb923c 0%, transparent 40%), radial-gradient(circle at 80% 70%, #7c2d12 0%, transparent 40%), radial-gradient(circle at 50% 50%, #000000 0%, transparent 50%)",
};

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<keyof typeof AURORA_THEMES>("Borealis");
  const [showPicker, setShowPicker] = useState(false);

  const glassClass = "bg-black/40 border-white/10 backdrop-blur-md";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans selection:bg-cyan-500 selection:text-white scroll-smooth text-white">
      
      {/* PERFORMANCE CSS: GPU ACCELERATED BACKGROUND */}
      <style jsx global>{`
        @keyframes aurora-sway {
          0% { transform: scale(1) translate(0, 0) rotate(0deg); }
          50% { transform: scale(1.05) translate(1%, 1%) rotate(1deg); }
          100% { transform: scale(1) translate(0, 0) rotate(0deg); }
        }
        .aurora-container {
          will-change: transform;
          transform: translateZ(0);
          animation: aurora-sway 25s ease-in-out infinite;
        }
      `}</style>

      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 bg-[#020617] overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-40 blur-[100px] aurora-container transition-all duration-1000"
          style={{ background: AURORA_THEMES[currentTheme] }}
        />
      </div>

      {/* MASTER THEME SWITCHER */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button onClick={() => setShowPicker(!showPicker)} className="p-4 rounded-full bg-white text-black shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2">
          <Palette size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Switch Style</span>
        </button>
        <AnimatePresence>
          {showPicker && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute bottom-16 right-0 bg-black/95 border border-white/20 p-2 rounded-2xl backdrop-blur-xl w-48 shadow-2xl">
                {Object.keys(AURORA_THEMES).map((t) => (
                  <button key={t} onClick={() => { setCurrentTheme(t as any); setShowPicker(false); }} className={cn("w-full text-left px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all", currentTheme === t ? "bg-cyan-500 text-white" : "text-neutral-400 hover:text-white hover:bg-white/10")}>
                    {t}
                  </button>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 h-full">
        
        {/* NAVIGATION */}
        <nav className={cn("fixed top-0 w-full z-50 flex justify-between items-center border-b backdrop-blur-md transition-all duration-300", isScrolled ? "py-4 px-6 md:px-12 bg-black/80 border-white/10" : "py-6 md:py-8 bg-transparent border-transparent px-6 md:px-8")}>
          <Logo />
          <div className="hidden md:flex items-center gap-4">
             {["About", "Portfolio"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 rounded-full transition-all">{item}</a>
             ))}
             
             {/* ORIGINAL SHIMMER CONTACT BUTTON */}
             <a href="#contact" className="group relative px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] active:scale-95 transition-all duration-300 bg-white text-black">
               <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
               <div className="relative z-10 flex items-center gap-2">
                 <span>Contact</span>
                 <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
               </div>
             </a>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* --- SECTION 1: ABOUT (HERO) --- */}
        <section id="about" className="px-6 md:px-24 pt-28 pb-12 md:pt-40 max-w-7xl mx-auto flex flex-col justify-start">
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12"
           >
              <div className="w-full lg:w-2/3 text-left">
                <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-80 text-cyan-300">About Me</h2>
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 md:mb-12 text-white">Hi, I'm <br /> Sean Evans.</h1>
                <div className="flex flex-col md:flex-row gap-6 border-t border-white/10 pt-6">
                   <p className="text-xl max-w-2xl leading-relaxed font-medium text-white">{DATA.aboutText}</p>
                </div>
              </div>

              {/* PROFILE IMAGE */}
              <div className="relative shrink-0">
                 <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
                 <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl transition-transform duration-500 hover:rotate-0 rotate-3 bg-neutral-900">
                    <Image src={DATA.profileImg} alt="Sean Evans" fill priority quality={90} sizes="(max-width: 768px) 192px, 320px" className="object-cover" />
                 </div>
              </div>
           </motion.div>
        </section>

        {/* --- SECTION 2: PORTFOLIO --- */}
        <section id="portfolio" className="px-6 md:px-24 pb-12 md:pb-32 pt-4 max-w-7xl mx-auto">
           <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 border-b border-white/10 pb-4 text-white">Portfolio</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {DATA.projects.map((project) => (
                 <a href={project.link} target="_blank" key={project.id}
                   className={cn("group relative p-4 md:p-6 rounded-2xl transition-all duration-500", glassClass)}
                 >
                    <div className="relative aspect-video overflow-hidden rounded-lg mb-6 border border-white/10 bg-neutral-950">
                       <Image 
                        src={project.img} 
                        alt={project.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                      />
                    </div>
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-cyan-300">{project.tag}</p>
                          <h3 className="text-2xl md:text-4xl font-bold mb-2 group-hover:text-cyan-400 transition-colors flex items-center gap-2 text-white">{project.title} <ExternalLink size={16} /></h3>
                          <p className="text-neutral-300">{project.desc}</p>
                       </div>
                       <div className="p-3 rounded-full bg-white text-black group-hover:scale-110 transition-transform"><ArrowUpRight size={24} /></div>
                    </div>
                 </a>
              ))}
           </div>
        </section>

        {/* --- SECTION 3: PHILOSOPHY (CONSTRAINED WIDTH) --- */}
        <section className="px-6 md:px-24 pb-12 max-w-7xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-pink-300 uppercase tracking-[0.2em]">{DATA.role}</h2>
            <h1 className="text-5xl md:text-9xl font-bold leading-[0.9] tracking-tighter mb-12 text-white">
              Design is <br /> Intelligence <br /> <span className="opacity-40">Made Visible.</span>
            </h1>
            <p className="text-xl max-w-2xl border-t border-white/10 pt-8 text-white leading-relaxed font-medium">
              {DATA.bio}
            </p>
        </section>

        {/* --- SECTION 4: FEATURES (CENTERED CONTENT) --- */}
        <section className="px-6 md:px-24 pb-24 pt-4 max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DATA.features.map((feature, i) => (
                 <div key={i} className={cn("backdrop-blur-md border rounded-2xl p-8 flex flex-col items-center text-center", glassClass)}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white text-black"><feature.icon size={24} /></div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-neutral-300 leading-relaxed text-lg">{feature.desc}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* --- SECTION 5: CONTACT --- */}
        <section id="contact" className="px-6 md:px-24 pb-24 max-w-7xl mx-auto text-center">
           <div className={cn("border rounded-3xl p-12 md:p-24 flex flex-col items-center gap-6", glassClass)}>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">Ready to Collaborate?</h2>
              <p className="text-lg md:text-xl max-w-2xl text-neutral-300 font-medium">I am currently available for freelance opportunities.</p>
              <a href="mailto:seanevansmedia@gmail.com" className="text-lg md:text-4xl font-bold border-b-2 border-white hover:text-cyan-300 hover:border-cyan-300 transition-all text-white">seanevansmedia@gmail.com</a>
           </div>
        </section>

        {/* FOOTER */}
        <footer className="px-6 md:px-24 py-16 border-t border-white/10 bg-black/30 backdrop-blur-md">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <Logo />
              <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-neutral-400">
                 <a href="#about" className="hover:text-white transition-all">About</a>
                 <a href="#portfolio" className="hover:text-white transition-all">Portfolio</a>
                 <a href="#contact" className="hover:text-white transition-all">Contact</a>
              </div>
           </div>
        </footer>
      </div>
    </main>
  );
}