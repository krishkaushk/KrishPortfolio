import type { Project, ExperienceItem, SkillGroup, NavLink } from "@/types";

export const PERSONAL_INFO = {
  name: "Krish Zhao Kaushik",
  firstName: "Krish",
  email: "krish.z.kaushik@gmail.com",
  github: "https://github.com/krishkaushk",
  linkedin: "https://www.linkedin.com/in/krishzkaushik/",
  university: "Simon Fraser University",
  degree: "BSc Computing Science",
  minor: "Business",
  gradYear: 2028,
} as const;

export const TAGLINE = "I build things.";

export const BIO =
  "I'm studying Computing Science at SFU with a minor in Business — which means I'm equally " +
  "comfortable debugging a SQL query at midnight and thinking about why nobody uses the thing I just built.\n\n" +
  "Last summer I interned at HME Medical, where I built internal automation tools that cut the team's " +
  "manual admin work down significantly. I've also shipped InternLinked and PitchPal at hackathons — " +
  "one to track internship applications, one to practice pitch decks with AI feedback.\n\n" +
  "I like building things end-to-end. Backend, frontend, whatever it takes to ship.";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "IT & Marketing Developer Intern",
    company: "HME Medical Distribution",
    location: "Vancouver, BC",
    period: "June 2025 – August 2025",
    bullets: [
      "Built internal automation tools using JavaScript, Azure, Entra ID, and Power Automate — cutting repetitive admin work that was eating up the team's time.",
      "Improved backend report efficiency by 30% through query optimisation and process redesign.",
      "Managed and maintained 3 company websites, handling updates, bug fixes, and content changes.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "internlinked",
    title: "InternLinked",
    description:
      "A full-stack web app to manage internship applications end-to-end. Handles user auth, structured data storage, and document tracking so you can stop losing track of where you applied.",
    stack: ["JavaScript", "React", "Supabase", "SQL", "HTML", "CSS"],
    githubUrl: "https://github.com/krishkaushk/InternLinked",
    demoUrl: "https://devpost.com/software/internlinked",
    accentColor: "#C5975C",
  },
  {
    id: "pitchpal",
    title: "PitchPal",
    description:
      "Generates pitch slide decks and gives you a place to actually practice them — with real-time scoring, feedback, and narration powered by Gemini and ElevenLabs. Built at a hackathon.",
    stack: ["React", "TypeScript", "Gemini API", "ElevenLabs API", "HTML", "CSS"],
    githubUrl: "https://github.com/StormHacks2025/pitchpal1",
    demoUrl: "https://devpost.com/software/pitchpal-t5opzn",
    accentColor: "#B07840",
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    description:
      "The site you're on. Built from scratch — no templates. Focused on smooth animations, a clean design system, and a loading experience that doesn't feel like an afterthought.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/krishkaushk/krish-portfolio",
    accentColor: "#9A7B4F",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "SQL"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["React", "Next.js", "Node.js", "Supabase", "Azure", "Power Automate", "MATLAB"],
  },
  {
    category: "Dev Tools",
    skills: ["Git", "GitHub", "VS Code", "Entra ID"],
  },
];
