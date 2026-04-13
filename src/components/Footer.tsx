import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer id="contact" className="bg-deep-sea border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Lab Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 bg-transparent">
              <img
                src="https://raw.githubusercontent.com/dghandg-sys/AURAL_Homepage/main/logo_Only_real_white.png"
                alt="AURAL Lab Logo"
                className="h-8 w-auto bg-transparent border-none mix-blend-screen invert brightness-200"
              />
              <span className="text-xl font-bold tracking-tighter text-white">AURAL</span>
            </div>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              {lang === 'ko' 
                ? '한양대학교 ERICA 응용 수중 음향 연구실(AURAL)은 소리를 통해 해양의 미래를 진단하고 혁신적인 국방 기술을 연구합니다.'
                : 'Applied UnderwateR Acoustic Laboratory (AURAL) at Hanyang University ERICA diagnoses the future of the ocean through sound and researches innovative defense technologies.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">{lang === 'ko' ? '연락처' : 'Contact'}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>
                  {lang === 'ko' 
                    ? '경기도 안산시 상록구 한양대학로 55 한양대학교 ERICA 제1과학기술관 227호'
                    : 'Room 227, Science & Technology Building I, Hanyang University ERICA, 55 Hanyangdaehak-ro, Sangnok-gu, Ansan, Gyeonggi-do, Korea'}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:dghandg@gmail.com" className="hover:text-accent transition-colors">dghandg@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+82-31-400-XXXX</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">{lang === 'ko' ? '관련 링크' : 'Links'}</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="https://www.hanyang.ac.kr" target="_blank" className="hover:text-accent transition-colors">Hanyang University</a></li>
              <li><a href="https://erica.hanyang.ac.kr" target="_blank" className="hover:text-accent transition-colors">Hanyang University ERICA</a></li>
              <li><a href="https://scholar.google.com/citations?user=WiPgecgAAAAJ" target="_blank" className="hover:text-accent transition-colors">Google Scholar</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
          <p>© 2024 AURAL. All Rights Reserved.</p>
          <p>Designed for Deep Sea & Precision</p>
        </div>
      </div>
    </footer>
  );
}
