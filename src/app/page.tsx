"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

// A reusable section component that ties opacity and scale to scroll position
function ScrollSection({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    // Tracks when the section enters the bottom of the screen (0) to when it leaves the top (1)
    offset: ["start end", "end start"]
  });

  // As it enters: fades from 0 to 1 and scales from 0.95 to 1.
  // As it leaves: fades from 1 to 0 and scales from 1 to 0.95 (giving that "fading into background" feel).
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.section 
      ref={ref}
      id={id}
      style={{ opacity, scale }}
      className={`py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

// For staggered elements within a section
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  });

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-800 dark:text-neutral-200 font-sans selection:bg-neutral-200 dark:bg-neutral-800 relative transition-colors duration-700 ease-in-out overflow-x-hidden">
      
      {/* Background Glow Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-700">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-sky-200/40 dark:bg-sky-900/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-700" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-200/40 dark:bg-blue-900/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-700" />
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-sky-300/30 dark:bg-sky-600/5 blur-[100px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-700" />
      </div>

      {/* Content Wrapper to sit above background */}
      <div className="relative z-10">
        
      {/* Cinematic Entrance Overlay */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] bg-neutral-50 dark:bg-black pointer-events-none"
      />

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={isNavVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed w-full z-50 flex flex-col md:flex-row justify-between md:items-center px-6 md:px-8 py-4 md:py-6 backdrop-blur-3xl bg-neutral-50/80 dark:bg-black/80 md:bg-neutral-50/50 dark:md:bg-black/20 border-b border-neutral-900/10 dark:border-white/10 transition-colors duration-700 ease-in-out"
      >
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/" className="text-xl font-bold tracking-tighter text-neutral-900 dark:text-white">
            My Portfolio
          </Link>
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white hover:scale-110 transition-all border border-neutral-300 dark:border-neutral-700" aria-label="Toggle Theme">
{theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <button 
              className="text-emerald-600 dark:text-emerald-300 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center gap-6 text-sm font-medium text-emerald-600 dark:text-emerald-300">
          <Link href="#about" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">My Story</Link>
          <Link href="#education" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Education</Link>
          <Link href="#certifications" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Certifications</Link>
          <Link href="#projects" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">My Work</Link>
          <Link href="#internships" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Experience</Link>
          <Link href="#outside-the-box" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Outside the Box</Link>
          <Link href="#contact" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Say Hi</Link>
          <div className="border-l border-neutral-300 dark:border-neutral-800 pl-6 ml-2">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white hover:scale-110 transition-all border border-neutral-300 dark:border-neutral-700 shadow-sm" aria-label="Toggle Theme">
              {mounted && theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden flex flex-col w-full gap-4 overflow-hidden mt-6 text-sm font-medium text-emerald-600 dark:text-emerald-300"
            >
              <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">My Story</Link>
              <Link href="#education" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Education</Link>
              <Link href="#certifications" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Certifications</Link>
              <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">My Work</Link>
              <Link href="#internships" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Experience</Link>
              <Link href="#outside-the-box" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Outside the Box</Link>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors pb-2">Say Hi</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="px-8 max-w-6xl mx-auto">

        {/* Hero Section */}
        <ScrollSection className="min-h-screen flex items-center pt-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center w-full"
          >
            <div className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left">
              <motion.div variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-neutral-900 dark:text-white min-h-[180px] md:min-h-[200px] lg:min-h-[220px]">
                <Typewriter
                  options={{
                    delay: 40,
                    cursor: '<span className="font-light">|</span>'
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1200)
                      .typeString('Hey there! I\'m <span class="text-sky-400 drop-shadow-md">Kailashwar Saravanan</span>,<br/>')
                      .pauseFor(300)
                      .typeString('<span >thanks for stopping by...</span>')
                      .start();
                  }}
                />
              </motion.div>
              <motion.p variants={fadeUp} className="text-xl text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
                I spend most of my time turning cool ideas into living, breathing digital experiences. Whether you're here to check out my code or just see what I'm up to, I'm glad you made it.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-4">
                <Link 
                  href="#projects" 
                  className="px-6 py-3 bg-sky-500 text-white dark:bg-sky-400 dark:text-black font-semibold rounded-full hover:bg-sky-600 dark:hover:bg-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-colors"
                >
                  See what I've built
                </Link>
                <Link 
                  href="#contact" 
                  className="px-6 py-3 border border-neutral-700 text-neutral-900 dark:text-white font-semibold rounded-full hover:bg-neutral-200 dark:bg-neutral-800 transition-colors"
                >
                  Let's chat
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end mt-12 lg:mt-20"
            >
              <div className="relative flex items-center justify-center">
                {/* Slow rippling glow behind the photo */}
                <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-red-400/40 bg-red-400/10 animate-ping" style={{ animationDuration: '4s' }}></div>
                
                {/* Second subtle pulse ring */}
                <div className="absolute w-[19rem] h-[19rem] md:w-[26rem] md:h-[26rem] rounded-full border border-red-400/30 animate-pulse" style={{ animationDuration: '3s' }}></div>

                {/* Actual Photo Container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-red-400/40 bg-neutral-900/5 dark:bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(248,113,113,0.25)] flex items-center justify-center z-10">
                  <Image 
                    src="/kailashwar-professional.jpg" 
                    alt="Kailashwar Saravanan" 
                    fill 
                    className="object-cover object-top drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </ScrollSection>

        {/* About Section */}
        <ScrollSection id="about" className="border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 text-center md:text-left">A Sneak Peek on Myself</h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg text-center md:text-left">
                <p>
                  I am currently pursuing a Bachelor of Technology in Artificial Intelligence and Data Science. Beyond my academic coursework, I am a hardware professional, an active public speaker, and a dedicated social enthusiast.
                </p>
                <p>
                  In my leisure time, I pursue activities that foster comprehensive development: football for full-body engagement, cycling as a healthy method of exploration, animation appreciation for its unique storytelling, and gaming to cultivate patience and perseverance.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 text-center md:text-left">My Toolkit</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {['Python', 'HTML', 'MySQL', 'MERN Stack', 'Modding Tools'].map((tech, i) => (
                  <motion.span 
                    key={tech} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.05 }}
                    className="px-5 py-2 bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 border border-sky-500/20 dark:border-sky-500/30 rounded-full text-base font-medium shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </ScrollSection>

        

        {/* Education Section */}
        <ScrollSection id="education" className="border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">My Educational Journey</motion.h2>
            <div className="relative border-l border-neutral-900/10 dark:border-white/10 ml-4 md:ml-6 space-y-12 pb-4">
              
              {/* Undergraduate */}
              <motion.div variants={fadeUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5">
                  <div className="relative flex h-4 w-4 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-400 ring-4 ring-neutral-50 dark:ring-black"></span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Undergraduate</h3>
                  <span className="text-sm font-medium text-sky-700 dark:text-sky-300/80">2024 - 2028</span>
                </div>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">SRM Easwari Engineering College, Ramapuram</p>
                <p className="text-sky-700 dark:text-sky-300/80 text-xs mb-2 mt-0.5">Chennai, Tamil Nadu, India</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  B.Tech in Artificial Intelligence and Data Science
                </p>
              </motion.div>

              {/* Senior Secondary Education */}
              <motion.div variants={fadeUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-500 ring-4 ring-neutral-50 dark:ring-black"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Senior Secondary Education</h3>
                  <span className="text-sm font-medium text-sky-700 dark:text-sky-300/80">2024</span>
                </div>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">Maharishi Vidya Mandir Senior Secondary School, Mangadu</p>
                <p className="text-sky-700 dark:text-sky-300/80 text-xs mb-2 mt-0.5">Chennai, Tamil Nadu, India</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  CBSE Board • Computer Science Group
                </p>
              </motion.div>

              {/* Secondary Education */}
              <motion.div variants={fadeUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-600 ring-4 ring-neutral-50 dark:ring-black"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Secondary Education</h3>
                  <span className="text-sm font-medium text-sky-700 dark:text-sky-300/80">2022</span>
                </div>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">Maharishi Vidya Mandir Senior Secondary School, Mangadu</p>
                <p className="text-sky-700 dark:text-sky-300/80 text-xs mb-2 mt-0.5">Chennai, Tamil Nadu, India</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  CBSE Board • Computer Science Group
                </p>
              </motion.div>



            </div>
          </motion.div>
        </ScrollSection>


        {/* Languages Section */}
        <ScrollSection id="languages" className="border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">Languages I Speak</motion.h2>
            
            <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto md:mx-0">
              {[
                { lang: "Tamil", level: "Native" },
                { lang: "English", level: "Bilingual" },
                { lang: "Hindi", level: "Proficient" },
                { lang: "Japanese", level: "Elementary" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 text-center flex flex-col items-center justify-center gap-4"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{item.lang}</h3>
                  <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 border border-sky-500/20 dark:border-sky-500/30 rounded-full text-sm md:text-base px-2 py-0.5 md:px-4 md:py-1.5 font-semibold tracking-wide">
                    {item.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollSection>

        {/* Certifications Section */}
        <ScrollSection id="certifications" className="border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">Certifications</motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { name: "MongoDB Basics for Students", org: "MongoDB Skills Check", year: "2026", icon: "🍃" },
                { name: "Introduction to Generative AI", org: "AWS Educate", year: "2026", icon: "🧠" },
                { name: "Introduction to Data Science", org: "AWS Educate", year: "2026", icon: "📊" },
                { name: "Machine Learning Foundations", org: "AWS Educate", year: "2026", icon: "🤖" },
                { name: "Blockchain and its Applications", org: "NPTEL", year: "2026", icon: "🔗" },
                { name: <>Human Computer Interaction <span className="whitespace-nowrap">(In English)</span></>, org: "NPTEL", year: "2026", icon: "🖥️" },
                { name: "Introduction to Modern AI", org: "Cisco Networking Academy", year: "2025", icon: "🌐" },
                { name: "Elements of AI", org: "University of Helsinki", year: "2024", icon: "💡" },
                { name: <>Parichaya to Praveshika <br/><span className="whitespace-nowrap">(5 levels)</span></>, org: "Dakshina Bharat Hindi Prachar Sabha", year: "2017 - 2021", icon: "📜" }
              ].map((cert, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 flex flex-col"
                >
                  <div className="text-3xl mb-4 text-sky-500 text-center md:text-left">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 text-center md:text-left">{cert.name}</h3>
                  <div className="text-sm text-sky-600 dark:text-sky-400 font-medium flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
                    <span>{cert.org}</span>
                    {cert.year && (
                      <>
                        <span className="text-neutral-400/50">•</span>
                        <span className="text-neutral-500 dark:text-neutral-500 whitespace-nowrap">{cert.year}</span>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollSection>

        {/* Projects Section */}
        <ScrollSection id="projects" className="border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">What I've been Building Lately</motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <motion.div 
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-neutral-900/10 dark:border-white/10 bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 overflow-hidden hover:border-neutral-700 transition-colors"
              >
                <div className="h-64 bg-white/10 w-full relative overflow-hidden">
                   <motion.div 
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.4 }}
                     className="absolute inset-0 flex items-center justify-center text-neutral-600 font-medium"
                   >
                     [Screenshot of Project 1]
                   </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">E-Commerce Platform</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                    I built this full-stack store from scratch. It handles everything from browsing products to secure checkout, keeping the experience incredibly smooth.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs font-medium text-sky-700 dark:text-sky-300/80">Next.js</span>
                    <span className="text-xs font-medium text-sky-700 dark:text-sky-300/80">Tailwind</span>
                    <span className="text-xs font-medium text-sky-700 dark:text-sky-300/80">Stripe</span>
                  </div>

                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div 
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-neutral-900/10 dark:border-white/10 bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 overflow-hidden hover:border-neutral-700 transition-colors"
              >
                <div className="h-64 bg-white/10 w-full relative overflow-hidden">
                   <motion.div 
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.4 }}
                     className="absolute inset-0 flex items-center justify-center text-neutral-600 font-medium"
                   >
                     [Screenshot of Project 2]
                   </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">Task Management Dashboard</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                    A productivity tool I made to help teams collaborate. It updates in real-time, so nobody ever misses a beat.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs font-medium text-sky-700 dark:text-sky-300/80">React</span>
                    <span className="text-xs font-medium text-sky-700 dark:text-sky-300/80">Node.js</span>
                    <span className="text-xs font-medium text-sky-700 dark:text-sky-300/80">Socket.io</span>
                  </div>

                </div>
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="mt-12 text-center">
              <a href="https://github.com/mr-ka1la5h" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors inline-flex items-center gap-2 text-lg">
                Visit my GitHub profile to view more of my projects &rarr;
              </a>
            </motion.div>
          </motion.div>
        </ScrollSection>

        {/* Internships Section */}
        <ScrollSection id="internships" className="border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">Internships & Experience</motion.h2>
            <div className="relative border-l border-neutral-900/10 dark:border-white/10 ml-4 md:ml-6 space-y-12 pb-4">
              
              {/* Internship 1 */}
              <motion.div variants={fadeUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5">
                  <div className="relative flex h-4 w-4 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-sky-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500 ring-4 ring-neutral-50 dark:ring-black"></span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Student Intern</h3>
                  <span className="text-sm font-medium text-sky-700 dark:text-sky-300/80">June 2025 (1 month)</span>
                </div>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">Godel Technologies LLP</p>
                <p className="text-sky-700 dark:text-sky-300/80 text-xs mb-2 mt-0.5">Remote</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  Identified a critical limitation in popular LLMs (such as ChatGPT, Gemini, and Claude) regarding their inability to reliably track and context-switch between multiple speakers in conversational data. To solve this, I engineered a stylometry plugin that analyzes linguistic patterns to accurately differentiate and identify multiple users in a single context.
                </p>
              </motion.div>

            </div>
          </motion.div>
        </ScrollSection>

        {/* Me Outside the Box Section */}
        <ScrollSection id="outside-the-box" className="border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">Me, Outside the Box</motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Toastmasters Placeholder */}
              <motion.div 
                variants={fadeUp}
                className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-700 flex-shrink-0 bg-neutral-200 dark:bg-neutral-800">
                    <Image 
                      src="/TM%20Logo.png" 
                      alt="Toastmasters Logo" 
                      fill 
                      className="object-contain p-2"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Speaking My Mind</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  Toastmasters has been the ultimate proving ground for building my confidence and communication style. When I take the stage, I focus on humor and active engagement—living the narrative rather than just reciting a script to deliver an immersive experience that genuinely connects with the audience.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-3">
                    <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                    <span>Charter Sergeant at Arms, Metanoia SRM Easwari Toastmasters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                    <span>Triple Crown Pin Awardee</span>
                  </li>
                </ul>
              </motion.div>

              {/* Right Column Stack */}
              <div className="flex flex-col gap-8">
                
                {/* Social Enthusiast Card */}
                <motion.div 
                  variants={fadeUp}
                  className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 flex-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-full flex items-center border border-sky-500/20 justify-center">
                      <span className="text-xl">🌍</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Community & Social</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    Apart from being a public speaker, I'm also an avid social enthusiast. I love dedicating my time to community service and helping organize local initiatives to make a positive impact.
                  </p>
                  <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                      <span>Former President, Annettes Club of Alandur</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                      <span>Former Director of International Services, Rotaract Club of Alandur Incredibles</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Leadership Roles Card */}
                <motion.div 
                  variants={fadeUp}
                  className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 flex-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-full flex items-center border border-sky-500/20 justify-center">
                      <span className="text-xl">👑</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Other Leadership Roles</h3>
                  </div>
                  <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                      <span>Former Joint Secretary, IEEE Student Chapter, Easwari Engineering College</span>
                    </li>
                  </ul>
                </motion.div>
                
              </div>
            </div>
          </motion.div>
        </ScrollSection>

        {/* Other Skills Section */}
        <ScrollSection id="other-skills" className="border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">Other Skills at my Inventory</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Programming Fundamentals", icon: "💻" },
                { name: "Database Management", icon: "🗄️" },
                { name: "Web Designing", icon: "🎨" },
                { name: "PC Building", icon: "🖥️" },
                { name: "Game Modding", icon: "🎮" },
                { name: "Photography", icon: "📸" },
                { name: "Audio & Video Editing", icon: "🎬" },
                { name: "Event Management", icon: "📅" },
              ].map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3"
                >
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollSection>

        

        {/* Contact Section */}
        <ScrollSection id="contact" className="border-t border-neutral-200 dark:border-neutral-800/50 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">Get in Touch</motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
              Whether you have a project idea, want to talk tech, swap public speaking tips, or to discuss new initiatives, my inbox is always open. I'd love to hear from you.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:kailashwar.sk@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white dark:bg-sky-400 dark:text-black font-semibold rounded-full hover:bg-sky-600 dark:hover:bg-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-colors text-lg"
              >
                Email Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/9884807204"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-neutral-700 text-neutral-900 dark:text-white font-semibold rounded-full hover:bg-[#25D366] hover:border-[#25D366] transition-colors text-lg"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </ScrollSection>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-neutral-200 dark:border-neutral-800/50 text-emerald-600 dark:text-emerald-300 text-sm flex flex-col md:flex-row justify-between items-center px-8 max-w-5xl mx-auto gap-4">
        <p>&copy; {new Date().getFullYear()} Kailashwar Saravanan. Thanks for scrolling this far!</p>
        <div className="flex gap-4">
          <a href="https://github.com/mr-ka1la5h" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/ka1la5h" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">LinkedIn</a>
        </div>
      </footer>
      </div>
    </div>
  );
}
