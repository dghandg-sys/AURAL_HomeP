import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, NavItem } from '../types';

const navItems: NavItem[] = [
  { label: { ko: '연구실 소개', en: 'About' }, href: '#about' },
  { label: { ko: '연구 분야', en: 'Research' }, href: '#research' },
  { label: { ko: '연구 성과', en: 'Publications' }, href: '#publications' },
  { label: { ko: '구성원', en: 'Members' }, href: '#members' },
  { label: { ko: '문의하기', en: 'Contact' }, href: '#contact' },
];

interface NavigationProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navigation({ lang, setLang }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'ko' ? 'en' : 'ko');

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-deep-sea/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative bg-transparent">
            <img
              src="https://raw.githubusercontent.com/dghandg-sys/AURAL_Homepage/main/logo_Only_real_white.png"
              alt="AURAL Lab Logo"
              className="h-10 w-auto bg-transparent border-none mix-blend-screen invert brightness-200"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white group-hover:text-accent transition-colors">
              AURAL
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none">
              Applied Underwater Acoustics
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-accent transition-colors relative group"
            >
              {item.label[lang]}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-accent/50 transition-all text-xs font-mono text-slate-400 hover:text-accent"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'ko' ? 'EN' : 'KO'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLang}
            className="p-2 text-slate-400 hover:text-accent"
          >
            <Globe className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-accent"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-deep-sea border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-accent transition-colors"
                >
                  {item.label[lang]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
