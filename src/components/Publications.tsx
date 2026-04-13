import { useState } from 'react';
import { motion } from 'motion/react';
import { Language, Publication } from '../types';
import { ExternalLink, Search, FileText } from 'lucide-react';

const publications: Publication[] = [
  {
    id: '1',
    title: 'Characterization of underwater ambient noise in the Arctic Ocean',
    authors: 'Han, D. G., et al.',
    journal: 'Journal of Marine Science and Engineering (JMSE)',
    year: 2023,
    tier: 'Q1',
    link: 'https://scholar.google.com/citations?user=WiPgecgAAAAJ'
  },
  {
    id: '2',
    title: 'Deep learning-based classification of underwater acoustic signals',
    authors: 'Han, D. G., et al.',
    journal: 'Frontiers in Marine Science',
    year: 2023,
    tier: 'Q1',
    link: 'https://scholar.google.com/citations?user=WiPgecgAAAAJ'
  },
  {
    id: '3',
    title: 'Acoustic propagation modeling in complex marine environments',
    authors: 'Han, D. G., et al.',
    journal: 'The Journal of the Acoustical Society of Korea',
    year: 2022,
    tier: 'KCI',
    link: 'https://scholar.google.com/citations?user=WiPgecgAAAAJ'
  },
  {
    id: '4',
    title: 'Strategic underwater sensor network deployment strategies',
    authors: 'Han, D. G., et al.',
    journal: 'Ocean Engineering',
    year: 2022,
    tier: 'Q1',
    link: 'https://scholar.google.com/citations?user=WiPgecgAAAAJ'
  },
  {
    id: '5',
    title: 'Bioacoustic monitoring of marine mammals in the Southern Ocean',
    authors: 'Han, D. G., et al.',
    journal: 'Polar Biology',
    year: 2021,
    tier: 'Q2',
    link: 'https://scholar.google.com/citations?user=WiPgecgAAAAJ'
  },
  {
    id: '6',
    title: 'Underwater target recognition using convolutional neural networks',
    authors: 'Han, D. G., et al.',
    journal: 'Applied Sciences',
    year: 2021,
    tier: 'Q2',
    link: 'https://scholar.google.com/citations?user=WiPgecgAAAAJ'
  },
  {
    id: '7',
    title: 'Analysis of low-frequency sound propagation in shallow water',
    authors: 'Han, D. G., et al.',
    journal: 'Journal of Marine Science and Engineering',
    year: 2020,
    tier: 'Q1',
    link: 'https://scholar.google.com/citations?user=WiPgecgAAAAJ'
  },
  {
    id: '8',
    title: 'Development of an autonomous underwater acoustic monitoring system',
    authors: 'Han, D. G., et al.',
    journal: 'Sensors',
    year: 2020,
    tier: 'Q1',
    link: 'https://scholar.google.com/citations?user=WiPgecgAAAAJ'
  },
  {
    id: '9',
    title: 'Marine digital twin for underwater acoustic simulation',
    authors: 'Han, D. G., et al.',
    journal: 'IEEE Access',
    year: 2019,
    tier: 'Q1',
    link: 'https://scholar.google.com/citations?user=WiPgecgAAAAJ'
  }
];

interface PublicationsProps {
  lang: Language;
}

export default function Publications({ lang }: PublicationsProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPubs = publications.filter(pub => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="publications" className="py-24 bg-deep-sea/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {lang === 'ko' ? '연구 성과' : 'Publications'}
            </h2>
            <div className="h-1 w-20 bg-accent" />
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder={lang === 'ko' ? '논문 검색...' : 'Search papers...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent outline-none transition-all text-sm"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredPubs.map((pub, i) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel p-6 rounded-2xl group hover:bg-white/10 transition-all flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-accent transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                    {pub.year}
                  </span>
                  {pub.tier && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                      {pub.tier}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-slate-400">
                  <span className="text-slate-200">{pub.authors}</span> • <span className="italic">{pub.journal}</span>
                </p>
              </div>

              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-3 rounded-full bg-white/5 hover:bg-accent hover:text-deep-sea transition-all text-slate-400"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://scholar.google.com/citations?user=WiPgecgAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors"
          >
            {lang === 'ko' ? 'Google Scholar에서 전체 보기' : 'View all on Google Scholar'}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
