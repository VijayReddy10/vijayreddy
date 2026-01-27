import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPageUrl } from './utils';

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Gallery', section: 'gallery' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50'}`}>
      {isDarkMode && (
        <style>{`
          :root {
            --bg-primary: #0f172a;
            --bg-secondary: #1e293b;
            --text-primary: #f1f5f9;
            --text-secondary: #94a3b8;
          }
          section {
            background: transparent !important;
          }
          h1, h2, h3, h4, h5, h6 {
            color: #f1f5f9 !important;
          }
          p, span {
            color: #94a3b8 !important;
          }
          .bg-white {
            background: #1e293b !important;
          }
          .text-slate-900 {
            color: #f1f5f9 !important;
          }
          .text-slate-600 {
            color: #94a3b8 !important;
          }
          .border-slate-100, .border-slate-200 {
            border-color: #334155 !important;
          }
        `}</style>
      )}
      
      {/* Sticky Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? isDarkMode 
              ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-slate-900/50' 
              : 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')} 
              className="flex items-center space-x-3 group"
            >
              <motion.div 
                whileHover={{ rotate: 12, scale: 1.05 }}
                className="w-11 h-11 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30"
              >
                <span className="text-white font-bold text-lg">VR</span>
              </motion.div>
              <span className={`text-xl font-bold hidden sm:block ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                Vijay Reddy
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isDarkMode
                      ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`ml-2 p-2.5 rounded-xl transition-all ${
                  isDarkMode
                    ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              
              <motion.a
                href__="/resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl text-sm font-medium hover:from-blue-700 hover:to-emerald-600 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2.5 rounded-xl ${
                  isDarkMode
                    ? 'bg-slate-800 text-yellow-400'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2.5 rounded-xl ${
                  isDarkMode 
                    ? 'text-slate-300 hover:bg-slate-800' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
            >
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.section)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isDarkMode
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.05 }}
                  href__="/resume.pdf"
                  download
                  className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl text-sm font-medium text-center"
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-slate-950' : 'bg-slate-900'} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">VR</span>
              </div>
              <div>
                <p className="font-bold text-white">Vijay Reddy</p>
                <p className="text-slate-400 text-sm">AI Engineer & Full-Stack Developer</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Vijay Reddy. Designed & Built with passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}