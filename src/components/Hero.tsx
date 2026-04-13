import { motion } from 'motion/react';
import { Language } from '../types';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const content = {
    ko: {
      title: "해양의 소리로 미래를 진단하다",
      subtitle: "Applied UnderwateR Acoustic Laboratory",
      description: "소리를 이용해 해양을 진단하고, 지속가능한 해양이용과 국방기술 발전에 기여합니다.",
      cta: "연구 분야 보기"
    },
    en: {
      title: "Diagnosing the Ocean through Sound",
      subtitle: "Applied UnderwateR Acoustic Laboratory",
      description: "We diagnose the ocean using sound, contributing to sustainable marine utilization and the advancement of defense technology.",
      cta: "Explore Research"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Wave Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/20 rounded-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.5, 1.5], 
              opacity: [0, 0.5, 0] 
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeOut"
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-sea via-transparent to-deep-sea" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-accent text-xs font-mono tracking-widest uppercase mb-6">
            {content[lang].subtitle}
          </span>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
            {content[lang].title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-3">
                {word}
              </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {content[lang].description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#research"
              className="px-8 py-4 bg-accent text-deep-sea font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              {content[lang].cta}
            </a>
            <a
              href="#publications"
              className="px-8 py-4 glass-panel text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              {lang === 'ko' ? '연구 성과' : 'Publications'}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
