import { Language } from '../types';

interface SEOProps {
  lang: Language;
}

export default function SEO({ lang }: SEOProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Applied UnderwateR Acoustic Laboratory (AURAL)",
    "alternateName": "응용 수중 음향 연구실",
    "url": "https://ais-dev-4dsh2fxrrzdzykizkfczkt-407802741293.run.app",
    "logo": "https://raw.githubusercontent.com/dghandg-sys/AURAL_Homepage/main/logo_Only_real_white.png",
    "parentOrganization": {
      "@type": "CollegeOrUniversity",
      "name": "Hanyang University ERICA",
      "url": "https://erica.hanyang.ac.kr"
    },
    "founder": {
      "@type": "Person",
      "name": "Dong-Gyun Han",
      "jobTitle": "Assistant Professor",
      "affiliation": "Hanyang University ERICA"
    },
    "description": lang === 'ko' 
      ? "한양대학교 ERICA 응용 수중 음향 연구실(AURAL) 공식 웹사이트. 극지 음향, AI 표적 탐지, 해양 생물 음향 연구."
      : "Official website of AURAL at Hanyang University ERICA. Researching Polar Acoustics, AI Target Recognition, and Bioacoustics.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "55 Hanyangdaehak-ro, Sangnok-gu",
      "addressLocality": "Ansan",
      "addressRegion": "Gyeonggi-do",
      "postalCode": "15588",
      "addressCountry": "KR"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
