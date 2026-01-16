"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { 
  Float, MeshDistortMaterial, ContactShadows, 
  Environment, Sphere, useTexture 
} from "@react-three/drei";
import { 
  ArrowUpRight, ExternalLink, Mail, Menu, X, ArrowRight,
  Smartphone, Zap, MonitorSmartphone
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
  
  // PRESERVED: Speed & Conversion Bio
  bio: "Engineering for impact. I build mobile-first, high-velocity digital experiences designed to maximize conversions. By achieving 90+ page speeds and seamless responsiveness, I ensure your message reaches every user, instantly.",
  
  aboutText: "I am a Full Stack Developer who transforms abstract concepts into high-performance digital reality. With a deep focus on the Next.js ecosystem, I blend technical precision with creative design to build applications that are not only robust but memorable.",
  
  stack: ["Next.js", "TypeScript", "React", "Tailwind"],
  features: [
    {
      title: "Mobile First Design",
      icon: Smartphone,
      desc: "Every interaction is crafted for the smallest screen first. I prioritize touch-optimized navigation and content hierarchy to ensure the core experience is effortless on handheld devices before scaling up."
    },
    {
      title: "90+ Lighthouse Scores",
      icon: Zap,
      desc: "Speed is a feature, not an afterthought. By utilizing Next.js server-side rendering, image optimization, and efficient code-splitting, I deliver near-instant load times that boost SEO and user retention."
    },
    {
      title: "Fully Responsive",
      icon: MonitorSmartphone,
      desc: "Fluid layouts that adapt to any viewport. From 4K ultrawide monitors to tablets and foldables, your digital presence maintains its integrity, accessibility, and aesthetic impact across the entire device spectrum."
    }
  ],
  projects: [
    {
      id: "1",
      title: "Social Gold",
      tag: "Social & Firebase",
      desc: "Real-time social platform replicating Twitter/X functionality. Features live feeds, Google Auth, and mixed media uploads via Firestore.",
      // FIXED: Increased wait time to 8s to ensure UI loads fully before screenshot
      img: "https://api.microlink.io/?url=https://social-gold-i2vk.vercel.app/&screenshot=true&meta=false&embed=screenshot.url&waitFor=8s",
      link: "https://social-gold-i2vk.vercel.app/"
    },
    {
      id: "2",
      title: "Summit Pacific",
      tag: "Corporate & Construction",
      desc: "Premium construction management platform with a custom 'Executive' design system, featuring multi-page architecture and high-performance animations.",
      img: "https://api.microlink.io/?url=https://summit-pacific.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://summit-pacific.vercel.app/"
    },
    {
      id: "4",
      title: "Obsidian Estates",
      tag: "Real Estate & Supabase",
      desc: "Cinematic luxury property platform featuring real-time PostgreSQL filtering and an immersive dark-mode aesthetic.",
      img: "https://api.microlink.io/?url=https://luxury-real-estate-swart.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://luxury-real-estate-swart.vercel.app/"
    },
    {
      id: "5",
      title: "Vancouver Bistro",
      tag: "Hospitality & SEO",
      desc: "High-performance restaurant platform built on Next.js 16. Features a custom 'Matcha' design system and dynamic booking flow.",
      img: "https://api.microlink.io/?url=https://vancouver-bistro.vercel.app/&screenshot=true&meta=false&embed=screenshot.url&waitFor=5s",
      link: "https://vancouver-bistro.vercel.app/" 
    },
    {
      id: "3",
      title: "Sonic Journal",
      tag: "AI, Audio & Supabase",
      desc: "AI-powered mood tracker built with Next.js 15 and Supabase. Transforms text entries into curated soundtracks using a unique 'Guest Session' database architecture.",
      img: "https://api.microlink.io/?url=https://music-journal-eight.vercel.app&screenshot=true&meta=false&embed=screenshot.url", 
      link: "https://music-journal-eight.vercel.app/"
    },
  ]
};

// --- COMPONENT: LOGO ---
const Logo = () => (
  <a href="#" className="group flex items-center gap-3 w-fit z-50 relative">
    <div className="relative w-9 h-9 flex items-center justify-center">
       <div className="absolute inset-0 rounded-full border-[2.5px] border-transparent border-t-neutral-900 border-l-neutral-900/50 rotate-45 transition-transform duration-[1.5s] ease-in-out group-hover:rotate-[225deg]" />
       <div className="absolute inset-[4px] rounded-full border-[2.5px] border-transparent border-b-neutral-600 border-r-neutral-600/50 -rotate-12 transition-transform duration-[1s] ease-in-out group-hover:-rotate-[190deg]" />
       <div className="absolute inset-[8px] rounded-full border-[2.5px] border-transparent border-t-neutral-900 border-r-neutral-900 rotate-90 transition-transform duration-[0.8s] ease-in-out group-hover:rotate-[360deg]" />
       <div className="absolute w-1 h-1 bg-red-500 rounded-full shadow-sm" />
    </div>
    
    <div className="text-2xl md:text-3xl tracking-tighter leading-none select-none">
       <span className="font-black text-neutral-900">SEANEVANS</span>
       <span className="font-light text-neutral-600">MEDIA</span>
    </div>
  </a>
);

// --- 3D SCENE ---
const Orb = () => {
  const texture = useTexture("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop");
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere args={[1.2, 64, 64]}>
        <MeshDistortMaterial 
          map={texture}
          color="#ffffff"
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0} 
          metalness={0.2} 
          roughness={0.3}
          distort={0.4} 
          speed={2} 
        />
      </Sphere>
    </Float>
  );
};

const Scene = () => (
  <Canvas camera={{ position: [0, 0, 4] }}>
    <Environment preset="studio" />
    <Orb />
    <ContactShadows position={[0, -2, 0]} opacity={0.4} blur={2.5} scale={10} far={4} />
  </Canvas>
);

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#e0e0e0] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white scroll-smooth">
      
      {/* GLOBAL STYLES FOR SMOOTH SCROLL */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* 3D BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 opacity-80 md:opacity-100 pointer-events-none">
         <Scene />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 h-full">
        
        {/* NAVIGATION */}
        <nav 
          className={cn(
            "fixed top-0 w-full z-50 flex justify-between items-center border-b border-neutral-400/30 backdrop-blur-md transition-all duration-300 ease-in-out",
            isScrolled ? "py-4 bg-[#e0e0e0]/90 px-6 md:px-12" : "py-6 md:py-8 bg-[#e0e0e0]/80 px-6 md:px-8"
          )}
        >
          
          <Logo />
          
          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-4">
             <a href="#about" className="px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-neutral-900/5 rounded-full transition-colors text-neutral-800">
                About
             </a>
             <a href="#portfolio" className="px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-neutral-900/5 rounded-full transition-colors text-neutral-800">
                Portfolio
             </a>
             
             {/* CONTACT BUTTON */}
             <a 
               href="#contact" 
               className="group relative px-6 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-bold uppercase tracking-wider overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300"
             >
               <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
               <div className="relative z-10 flex items-center gap-2">
                 <span>Contact</span>
                 <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
               </div>
             </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            onClick={toggleMenu}
            className="md:hidden z-50 p-2 text-neutral-900 hover:bg-black/5 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-[#e0e0e0] pt-32 px-6 flex flex-col gap-8 md:hidden"
            >
               <a href="#about" onClick={closeMenu} className="text-4xl font-black tracking-tighter text-neutral-900 border-b border-neutral-300 pb-4">
                  About
               </a>
               <a href="#portfolio" onClick={closeMenu} className="text-4xl font-black tracking-tighter text-neutral-900 border-b border-neutral-300 pb-4">
                  Portfolio
               </a>
               <a href="#contact" onClick={closeMenu} className="text-4xl font-black tracking-tighter text-neutral-900 border-b border-neutral-300 pb-4">
                  Contact
               </a>
               
               <div className="mt-auto pb-12 opacity-50 text-xs font-bold uppercase tracking-widest">
                  Sean Evans Media © 2026
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- SECTION 1: ABOUT (HERO) --- */}
        <section id="about" className="px-6 md:px-24 pt-28 pb-12 md:pt-40 max-w-7xl mx-auto flex flex-col justify-start">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="rounded-3xl p-6 md:p-0 bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/50 md:border-none shadow-xl md:shadow-none"
           >
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 opacity-60 text-neutral-800">
                 About Me
              </h2>
              
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 md:mb-12 break-words text-black drop-shadow-sm">
                 Hi, I'm <br />
                 Sean Evans.
              </h1>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-t border-neutral-900/10 pt-6 md:pt-8">
                 <p className="text-xl md:text-xl max-w-2xl leading-relaxed font-medium text-neutral-900">
                    {DATA.aboutText}
                 </p>
              </div>
           </motion.div>
        </section>

        {/* --- SECTION 2: PORTFOLIO (MIDDLE) --- */}
        <section id="portfolio" className="px-6 md:px-24 pb-12 md:pb-32 pt-12 max-w-7xl mx-auto">
           {/* HEADER */}
           <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 border-b border-black/10 pb-4">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 w-full md:w-auto text-left">
                 Portfolio
              </h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {DATA.projects.map((project, i) => {
                 // Check if it's the LAST item (Sonic Journal) to make it full width
                 const isLastItem = i === DATA.projects.length - 1;
                 
                 return (
                   <motion.a
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     key={project.id}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ delay: i * 0.1, duration: 0.5 }}
                     className={cn(
                       "group relative p-4 md:p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer block",
                       isLastItem ? "md:col-span-2" : ""
                     )}
                   >
                      {/* Live Screenshot Container */}
                      <div className={cn(
                        "relative w-full overflow-hidden rounded-lg mb-4 md:mb-6 bg-neutral-200 border border-black/5",
                        isLastItem ? "aspect-video md:aspect-[21/9]" : "aspect-video"
                      )}>
                         <Image 
                            src={project.img} 
                            alt={project.title}
                            fill
                            unoptimized
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                         />
                         <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors" />
                      </div>
                      
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1 md:mb-2">{project.tag}</p>
                            <h3 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-neutral-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                               {project.title}
                               <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className={cn(
                              "text-neutral-600 text-lg leading-tight",
                              isLastItem ? "max-w-xl md:max-w-2xl" : "max-w-sm md:max-w-md"
                            )}>
                              {project.desc}
                            </p>
                         </div>
                         <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                            <ArrowUpRight size={24} className="text-neutral-900" />
                         </div>
                      </div>
                   </motion.a>
                 );
              })}
           </div>
        </section>

        {/* --- SECTION 3: PHILOSOPHY (BOTTOM) --- */}
        <section className="px-6 md:px-24 pb-12 max-w-7xl mx-auto flex flex-col justify-start">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="rounded-3xl p-6 md:p-0 bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/50 md:border-none shadow-xl md:shadow-none"
           >
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 opacity-60 text-neutral-800">
                 {DATA.role}
              </h2>
              
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 md:mb-12 break-words text-black drop-shadow-sm">
                 Design is <br />
                 Intelligence <br />
                 <span className="opacity-40">Made Visible.</span>
              </h1>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-t border-neutral-900/10 pt-6 md:pt-8">
                 <p className="text-xl md:text-xl max-w-4xl leading-relaxed font-medium text-neutral-900">
                    {DATA.bio}
                 </p>
              </div>
           </motion.div>
        </section>

        {/* --- SECTION 4: FEATURES --- */}
        <section className="px-6 md:px-24 pb-24 pt-4 max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DATA.features.map((feature, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.5 }}
                   className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
                 >
                    <div className="bg-neutral-900 w-12 h-12 rounded-full flex items-center justify-center text-white mb-6">
                       <feature.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-neutral-900">{feature.title}</h3>
                    <p className="text-neutral-700 leading-relaxed text-lg">
                       {feature.desc}
                    </p>
                 </motion.div>
              ))}
           </div>
        </section>

        {/* --- SECTION 5: CONTACT (TEXT ONLY) - WITH BACKGROUND --- */}
        <section id="contact" className="px-6 md:px-24 pb-24 max-w-7xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="flex flex-col items-center gap-6 bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-12 md:p-24 shadow-2xl"
           >
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-neutral-900">
                 Ready to Collaborate?
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">
                 I am currently available for freelance projects and open to full-time opportunities.
              </p>
              <a 
                href="mailto:seanevansmedia@gmail.com" 
                className="text-2xl md:text-4xl font-bold text-neutral-900 hover:text-neutral-600 border-b-2 border-neutral-900 hover:border-neutral-600 transition-all pb-1"
              >
                 seanevansmedia@gmail.com
              </a>
           </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="px-6 md:px-24 py-16 border-t border-neutral-400/30 bg-[#e0e0e0]/80 backdrop-blur-md">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div className="flex flex-col items-start gap-6">
                 <Logo />
                 <a href="mailto:seanevansmedia@gmail.com" className="flex items-center gap-2 text-neutral-800 font-bold hover:underline hover:text-black transition-colors text-lg">
                    <Mail size={20} />
                    seanevansmedia@gmail.com
                 </a>
              </div>
              <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-neutral-800 text-left md:text-right">
                 <a href="#about" className="hover:text-black hover:-translate-x-2 transition-transform">About</a>
                 <a href="#portfolio" className="hover:text-black hover:-translate-x-2 transition-transform">Portfolio</a>
                 <a href="#contact" className="hover:text-black hover:-translate-x-2 transition-transform">Contact</a>
              </div>
           </div>
        </footer>

      </div>
    </main>
  );
}