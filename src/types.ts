export type Language = 'ko' | 'en';

export interface NavItem {
  label: { ko: string; en: string };
  href: string;
}

export interface ResearchArea {
  title: { ko: string; en: string };
  description: { ko: string; en: string };
  icon: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  tier?: string; // Q1, Q2 etc
  link?: string;
}
