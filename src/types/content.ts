export interface PageMeta {
  title: string;
  description: string;
}

export interface HeroSubtitle {
  specialized: string;
  description: string;
}

export interface Hero {
  title: string;
  subtitle: HeroSubtitle;
}

export interface Titles {
  experience: string;
  projects: string;
  about: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  name: string;
  description: string;
  tecnologies: string[];
  url: string;
  repository?: string;
}

export interface Content {
  page: PageMeta;
  hero: Hero;
  titles: Titles;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
}

export default Content;
