import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Sparkles, ChevronRight } from 'lucide-react';
import FloatingShapes from '../components/portfolio/FloatingShapes';
import TextReveal from '../components/portfolio/TextReveal';
import QuickFacts from '../components/portfolio/QuickFacts';
import SkillsSection from '../components/portfolio/SkillsSection';
import ImageGallery from '../components/portfolio/ImageGallery';
import ContactForm from '../components/portfolio/ContactForm';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingShapes />
        
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Open to Opportunities
              </motion.div>

              <TextReveal
                text="Hi, I'm Vijay Reddy"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4"
                delay={0.3}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-xl sm:text-2xl bg-gradient-to-r from-blue-600 to-emerald-500 text-transparent bg-clip-text font-semibold mb-4">
                  AI Engineer & Full-Stack Developer
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  Passionate about building intelligent systems that solve real-world problems. 
                  Combining creativity with technical expertise to craft exceptional digital experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollToSection('about')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                >
                  Explore My Work
                  <ChevronRight className="w-5 h-5" />
                </button>
                <a
                  href__="/resume.pdf"
                  download
                  className="px-8 py-4 bg-white text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-all border-2 border-slate-200 flex items-center gap-2 hover:border-slate-300"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </motion.div>
            </div>

            {/* Right - Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Decorative ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-full"
                />
                
                {/* Gradient backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full blur-2xl opacity-30" />
                
                {/* Photo container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6978ef5602765aa032850a27/e0928a1ce_pic.jpg"
                    alt="Vijay Reddy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -bottom-2 -right-2 bg-white rounded-2xl shadow-lg px-4 py-2"
                >
                  <p className="text-sm font-bold text-slate-900">9.1 GPA</p>
                  <p className="text-xs text-slate-500">B.Tech CSE</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
              Get to Know Me
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A passionate developer with a knack for turning ideas into reality through code and creativity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I'm a Computer Science student specializing in AI and Machine Learning at Anurag University, 
                Hyderabad. With a strong foundation in full-stack development and a passion for artificial intelligence, 
                I build solutions that matter.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or solving complex problems that challenge my thinking.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuickFacts />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase">My Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A diverse set of skills spanning frontend, backend, and AI/ML technologies.
            </p>
          </motion.div>

          <SkillsSection />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase">Inspirations</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
              Hobbies & Passions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A glimpse into what drives and inspires me beyond the code.
            </p>
          </motion.div>

          <ImageGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
