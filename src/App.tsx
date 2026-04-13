/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('ko');

  return (
    <div className="min-h-screen bg-deep-sea selection:bg-accent selection:text-deep-sea overflow-x-hidden">
      <SEO lang={lang} />
      
      {/* Immersive Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-screen bg-[radial-gradient(circle_at_50%_-20%,rgba(0,229,255,0.15),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-screen bg-[radial-gradient(circle_at_80%_120%,rgba(0,229,255,0.1),transparent_70%)]" />
      </div>

      <Navigation lang={lang} setLang={setLang} />
      
      <main className="relative z-10">
        <Hero lang={lang} />
        <About lang={lang} />
        <Research lang={lang} />
        <Publications lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}

