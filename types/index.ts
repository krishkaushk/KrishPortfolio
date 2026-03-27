export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  accentColor: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
