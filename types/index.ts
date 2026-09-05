export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  accentColor: string;
  /** Flip to true to promote a project into the "Spotlight" story popup. */
  spotlight?: boolean;
  /** Required when spotlight is true; unused otherwise. */
  story?: ProjectStory;
  /** Optional gallery strip shown in the spotlight popup. */
  images?: ProjectImage[];
  /** Cover art shown in the project cluster. Falls back to an accent-color swatch when unset. */
  coverImage?: string;
  /** Alt text for coverImage; falls back to `${title} cover art` when omitted. */
  coverAlt?: string;
  /** Set true to keep the project in data but leave it out of the visible project display. */
  hidden?: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectStory {
  subtitle: string;
  role: string;
  timeline: string;
  blocks: StoryBlock[];
}

export type StoryBlock =
  | { type: "text"; heading?: string; body: string }
  | { type: "callout"; label: string; body: string }
  | { type: "image"; src: string; alt: string; caption?: string };

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
