"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, ExternalLink, Mail, Menu, X, 
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
  bio: "Engineering for impact. I build mobile-first, high-velocity digital experiences designed to maximize conversions. By achieving 90+ page speeds and seamless responsiveness, I ensure your message reaches every user, instantly.",
  aboutText: "Hi, I’m Sean Evans. I run a web development agency that specializes in small business website design and development for clients across the U.S. and Canada. My goal is simple: build long-term relationships with clients and help their businesses grow over time."
  stack: ["Next.js", "TypeScript", "React", "Tailwind"],
  features: [
    { title: "Mobile First Design", icon: Smartphone, desc: "Every interaction is crafted for the smallest screen first. I prioritize touch-optimized navigation and content hierarchy." },
    { title: "90+ Lighthouse Scores", icon: Zap, desc: "Speed is a feature. By utilizing Next.js server-side rendering and efficient code-splitting, I deliver near-instant load times." },
    { title: "Fully Responsive", icon: MonitorSmartphone, desc: "Fluid layouts that adapt to any viewport. From 4K ultrawide monitors to tablets and foldables." }
  ],
  projects: [
    { id: "1", title: "Social Gold", tag: "Social & Firebase", desc: "Real-time social platform replicating Twitter/X functionality. Features live feeds and Google Auth.", img: "https://api.microlink.io/?url=https://social-gold-i2vk.vercel.app/&screenshot=true&meta=false&embed=screenshot.url&waitFor=8s", link: "https://social-gold-i2vk.vercel.app/" },
    { id: "2", title: "Summit Pacific", tag: "Corporate", desc: "Premium construction management platform with a custom 'Executive' design system.", img: "https://api.microlink.io/?url=https://summit-pacific.vercel.app/&screenshot=true&meta=false&embed=screenshot.url", link: "https://summit-pacific.vercel.app/" },
    { id: "4", title: "Obsidian Estates", tag: "Real Estate", desc: "Cinematic luxury property platform featuring real-time PostgreSQL filtering.", img: "https://api.microlink.io/?url=https://luxury-real-estate-swart.vercel.app/&screenshot=true&meta=false&embed=screenshot.url", link: "https://luxury-real-estate-swart.vercel.app/" },
    { id: "5", title: "Vancouver Bistro", tag: "Hospitality", desc: "High-performance restaurant platform built on Next.js 16 with a 'Matcha' design system.", img: "https://api.microlink.io/?url=https://vancouver-bistro.vercel.app/&screenshot=true&meta=false&embed=screenshot.url&waitFor=5s", link: "https://vancouver-bistro.vercel.app/" },
    { id: "3", title: "Sonic Journal", tag: "AI Audio", desc: "AI-powered mood tracker. Transforms text entries into curated soundtracks.", img: "https://api.microlink.io/?url=https://music-journal-eight.vercel.app&screenshot=true&meta=false&embed=screenshot.url", link: "https://music-journal-eight.vercel.app/" },
  ]
};

// --- COMPONENT: LOGO ---
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

// --- COMPONENT: VAPORWAVE BACKGROUND ---
const VaporwaveBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#240046]">
      {/* Deep Space Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#10002b] via-[#3c096c] to-[#9d4edd]" />
      
      {/* Retro Sun */}
      <div className="absolute bottom-[30%] md:bottom-[40%] left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-t from-yellow-300 to-pink-500 blur-md shadow-[0_0_50px_rgba(255,0,128,0.5)]">
        {/* Sun lines */}
        <div className="absolute inset-0 w-full h-full flex flex-col justify-end gap-1 md:gap-2 pb-4 md:pb-8 opacity-40">
           <div className="h-1 bg-[#240046] w-full" />
           <div className="h-1.5 bg-[#240046] w-full" />
           <div className="h-2 bg-[#240046] w-full" />
           <div className="h-3 bg-[#240046] w-full" />
           <div className="h-4 bg-[#240046] w-full" />
        </div>
      </div>

      {/* Moving Grid */}
      <motion.div 
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: "0px 100px" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 w-[150%] -left-[25%] h-[50%] opacity-50"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, .5) 25%, rgba(0, 255, 255, .5) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .5) 75%, rgba(0, 255, 255, .5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 255, .6) 25%, rgba(255, 0, 255, .6) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .6) 75%, rgba(255, 0, 255, .6) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
          perspective: '150px',
          transform: 'perspective(300px) rotateX(60deg) translateY(100px) scale(2)'
        }}
      />
      
      {/* Star Field Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>
  );
};

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Locked Theme Constants
  const glassClass = "bg-black/40 border-white/10 backdrop-blur-md";
  const textClass = "text-white";
  const subTextClass = "text-neutral-300";

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
    <main className="min-h-screen relative overflow-x-hidden font-sans selection:bg-cyan-500 selection:text-black scroll-smooth text-white">
      
      <style jsx global>{` html { scroll-behavior: smooth; } `}</style>

      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <VaporwaveBackground />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 h-full">
        
        {/* NAVIGATION */}
        <nav 
          className={cn(
            "fixed top-0 w-full z-50 flex justify-between items-center border-b backdrop-blur-md transition-all duration-300 ease-in-out",
            isScrolled ? "py-4 px-6 md:px-12 bg-black/80 border-white/10" : "py-6 md:py-8 bg-transparent border-transparent px-6 md:px-8"
          )}
        >
          
          <Logo />
          
          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-4">
             {["About", "Portfolio"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full transition-colors text-white hover:bg-white/10"
                >
                  {item}
                </a>
             ))}
             
             {/* CONTACT BUTTON */}
             <a 
               href="#contact" 
               className="group relative px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] active:scale-95 transition-all duration-300 bg-white text-black"
             >
               <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
               <div className="relative z-10 flex items-center gap-2">
                 <span>Contact</span>
                 <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
               </div>
             </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            onClick={toggleMenu}
            className="md:hidden z-50 p-2 rounded-full transition-colors text-white hover:bg-white/10"
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
              className="fixed inset-0 z-40 pt-32 px-6 flex flex-col gap-8 md:hidden bg-[#10002b] text-white"
            >
               {["About", "Portfolio", "Contact"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="text-4xl font-black tracking-tighter border-b border-white/20 pb-4">
                    {item}
                  </a>
               ))}
               <div className="mt-auto pb-12 opacity-50 text-xs font-bold uppercase tracking-widest text-cyan-200">
                  © Copyright 2026 seanevansmedia.com 
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
             className={cn("rounded-3xl p-6 md:p-0 shadow-xl md:shadow-none", glassClass, "md:bg-transparent md:border-none")}
           >
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 opacity-80 text-cyan-300">
                 About Me
              </h2>
              
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 md:mb-12 break-words drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-white">
                 Hi, I'm <br />
                 Sean Evans.
              </h1>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-t border-white/10 pt-6 md:pt-8">
                 <p className="text-xl md:text-xl max-w-2xl leading-relaxed font-medium text-white">
                    {DATA.aboutText}
                 </p>
              </div>
           </motion.div>
        </section>

        {/* --- SECTION 2: PORTFOLIO (MIDDLE) --- */}
        {/* Adjusted Mobile Spacing: pt-4 on mobile, pt-12 on desktop */}
        <section id="portfolio" className="px-6 md:px-24 pb-12 md:pb-32 pt-4 md:pt-12 max-w-7xl mx-auto">
           {/* HEADER */}
           <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 border-b border-white/10 pb-4">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter w-full md:w-auto text-left text-white">
                 Portfolio
              </h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {DATA.projects.map((project, i) => {
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
                       "group relative p-4 md:p-6 rounded-2xl shadow-sm transition-all duration-500 cursor-pointer block hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]",
                       glassClass,
                       isLastItem ? "md:col-span-2" : ""
                     )}
                   >
                      {/* Live Screenshot Container */}
                      <div className={cn(
                        "relative w-full overflow-hidden rounded-lg mb-4 md:mb-6 border bg-neutral-900 border-white/10",
                        isLastItem ? "aspect-video md:aspect-[21/9]" : "aspect-video"
                      )}>
                         <Image 
                            src={project.img} 
                            alt={project.title}
                            fill
                            unoptimized
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                         />
                         <div className="absolute inset-0 transition-colors bg-black/0 group-hover:bg-black/20" />
                      </div>
                      
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-2 text-cyan-300">{project.tag}</p>
                            <h3 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 transition-colors flex items-center gap-2 text-white group-hover:text-cyan-200">
                               {project.title}
                               <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className={cn(
                              "text-lg leading-tight text-neutral-300",
                              isLastItem ? "max-w-xl md:max-w-2xl" : "max-w-sm md:max-w-md"
                            )}>
                              {project.desc}
                            </p>
                         </div>
                         <div className="p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform bg-white text-black">
                            <ArrowUpRight size={24} />
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
             className={cn("rounded-3xl p-6 md:p-0 shadow-xl md:shadow-none", glassClass, "md:bg-transparent md:border-none")}
           >
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 opacity-80 text-pink-300">
                 {DATA.role}
              </h2>
              
              <h1 className={cn("text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 md:mb-12 break-words drop-shadow-sm", textClass)}>
                 Design is <br />
                 Intelligence <br />
                 <span className="opacity-40">Made Visible.</span>
              </h1>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-t border-white/10 pt-6 md:pt-8">
                 <p className={cn("text-xl md:text-xl max-w-4xl leading-relaxed font-medium", textClass)}>
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
                   className={cn(
                     "backdrop-blur-md border rounded-2xl p-8 shadow-sm hover:shadow-[0_0_20px_rgba(255,0,255,0.2)] transition-all flex flex-col items-center text-center",
                     glassClass
                   )}
                 >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white text-black">
                       <feature.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="leading-relaxed text-lg text-neutral-300">
                       {feature.desc}
                    </p>
                 </motion.div>
              ))}
           </div>
        </section>

        {/* --- SECTION 5: CONTACT (TEXT ONLY) --- */}
        <section id="contact" className="px-6 md:px-24 pb-24 max-w-7xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className={cn("flex flex-col items-center gap-6 backdrop-blur-xl border rounded-3xl p-12 md:p-24 shadow-2xl", glassClass)}
           >
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
                 Ready to Collaborate?
              </h2>
              <p className={cn("text-lg md:text-xl max-w-2xl", subTextClass)}>
                 I am currently available for freelance projects and open to full-time opportunities.
              </p>
              <a 
                href="mailto:seanevansmedia@gmail.com" 
                className="text-1xl md:text-4xl font-bold border-b-2 transition-all pb-1 border-white hover:text-cyan-300 hover:border-cyan-300 text-white"
              >
                 seanevansmedia@gmail.com
              </a>
           </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="px-6 md:px-24 py-16 border-t border-white/10 bg-black/30 backdrop-blur-md">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div className="flex flex-col items-start gap-6">
                 <Logo />
<a 
  href="mailto:seanevansmedia@gmail.com" 
  className="text-lg md:text-1xl font-bold transition-all pb-1 border-white hover:text-cyan-300 hover:border-cyan-300 text-white"
>
   seanevansmedia@gmail.com
</a>
              </div>
              <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-left md:text-right text-neutral-300">
                 <a href="#about" className="transition-transform hover:text-white hover:-translate-x-2">About</a>
                 <a href="#portfolio" className="transition-transform hover:text-white hover:-translate-x-2">Portfolio</a>
                 <a href="#contact" className="transition-transform hover:text-white hover:-translate-x-2">Contact</a>
              </div>
           </div>
        </footer>

      </div>
    </main>
  );
}