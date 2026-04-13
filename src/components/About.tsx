import { motion } from 'motion/react';
import { Language } from '../types';
import { Award, BookOpen, Building2, GraduationCap } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const career = [
    {
      icon: GraduationCap,
      ko: '한양대학교 ERICA 국방전략기술공학과 조교수',
      en: 'Assistant Professor, Dept. of Defense Strategy & Technology, Hanyang University ERICA'
    },
    {
      icon: Building2,
      ko: '(주)오션사운즈 대표이사',
      en: 'CEO, Ocean Sounds Co., Ltd.'
    },
    {
      icon: Award,
      ko: '한국음향학회 이사',
      en: 'Director, The Acoustical Society of Korea'
    },
    {
      icon: BookOpen,
      ko: '극지연구소(KOPRI) Post-Doc',
      en: 'Post-Doc, Korea Polar Research Institute (KOPRI)'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-panel relative z-10">
              <img
                src="https://picsum.photos/seed/ocean-lab/800/1000"
                alt="Prof. Dong-Gyun Han"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-sea via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white mb-1">
                  {lang === 'ko' ? '한동균 교수' : 'Prof. Dong-Gyun Han'}
                </h3>
                <p className="text-accent font-mono text-sm tracking-widest uppercase">
                  Principal Investigator
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
          </motion.div>

          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {lang === 'ko' ? '연구실 소개' : 'About AURAL'}
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed italic">
                "{lang === 'ko' 
                  ? '소리를 이용해 해양을 진단하고, 지속가능한 해양이용과 국방기술 발전에 기여한다.'
                  : 'We diagnose the ocean using sound, contributing to sustainable marine utilization and the advancement of defense technology.'}"
              </p>
            </div>

            <div className="space-y-6">
              {career.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    {item[lang]}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl glass-panel border-accent/20">
              <h4 className="text-accent font-mono text-xs tracking-widest uppercase mb-4">Our Mission</h4>
              <p className="text-slate-400 leading-relaxed">
                {lang === 'ko'
                  ? 'AURAL은 한양대학교 ERICA 국방전략기술공학과 소속 연구실로, 수중 음향 신호 처리, 극지 음향, AI 기반 표적 탐지 등 해양 안보와 생태계 보존을 위한 핵심 기술을 연구합니다.'
                  : 'AURAL is a research laboratory at Hanyang University ERICA, focusing on underwater acoustic signal processing, polar acoustics, and AI-based target detection for marine security and ecosystem conservation.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
