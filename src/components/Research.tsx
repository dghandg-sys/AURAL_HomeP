import { motion } from 'motion/react';
import { Language, ResearchArea } from '../types';
import { Shield, Target, Waves, Cpu, Database } from 'lucide-react';

const researchAreas: ResearchArea[] = [
  {
    title: { ko: '극지/전략 음향', en: 'Polar/Strategic Acoustics' },
    description: { 
      ko: '북극해 등 극한 환경에서의 음파 전파 특성 분석 및 전략적 활용 연구', 
      en: 'Analysis of sound propagation characteristics in extreme environments like the Arctic Ocean.' 
    },
    icon: 'Waves'
  },
  {
    title: { ko: 'AI 표적 탐지', en: 'AI Target Recognition' },
    description: { 
      ko: '딥러닝 기반의 수중 표적 자동 탐지 및 식별 알고리즘 개발', 
      en: 'Development of deep learning-based algorithms for underwater target detection and identification.' 
    },
    icon: 'Target'
  },
  {
    title: { ko: '해양 생물 음향', en: 'Bioacoustics' },
    description: { 
      ko: '해양 포유류의 음성 신호 분석을 통한 생태계 모니터링', 
      en: 'Ecosystem monitoring through the analysis of vocal signals from marine mammals.' 
    },
    icon: 'Shield'
  },
  {
    title: { ko: '해양 디지털 트윈', en: 'Marine Digital Twin' },
    description: { 
      ko: '실시간 해양 환경 데이터를 활용한 가상 해양 공간 구축 및 시뮬레이션', 
      en: 'Construction and simulation of virtual marine spaces using real-time environmental data.' 
    },
    icon: 'Cpu'
  },
  {
    title: { ko: '국방 전략 기술', en: 'Defense Strategy' },
    description: { 
      ko: '수중 음향 센서 네트워크 및 차세대 해양 방위 체계 연구', 
      en: 'Research on underwater acoustic sensor networks and next-generation marine defense systems.' 
    },
    icon: 'Database'
  }
];

const iconMap: Record<string, any> = {
  Waves,
  Target,
  Shield,
  Cpu,
  Database
};

interface ResearchProps {
  lang: Language;
}

export default function Research({ lang }: ResearchProps) {
  return (
    <section id="research" className="py-24 bg-deep-sea relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {lang === 'ko' ? '연구 분야' : 'Research Areas'}
          </h2>
          <div className="h-1 w-20 bg-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {researchAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl group hover:border-accent/50 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-deep-sea transition-all duration-500">
                  <Icon className="w-6 h-6 text-accent group-hover:text-deep-sea" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {area.title[lang]}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                  {area.description[lang]}
                </p>
                <div className="mt-6 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                    AURAL Research Lab
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
