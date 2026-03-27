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
  "I'm studying Computing Science at SFU with a minor in Business — which means I'm equally comfortable " +
  "shipping a feature and questioning whether the feature should exist at all.\n\n" +
  "I'm interested in AI, machine learning, data flow, and building products people " +
  "actually want to use. " +
  "I like building things end-to-end. Backend, frontend, whatever it takes to ship. Outside of that, I'm usually outdoors.";

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
      "Improved backend report efficiency by 30% through query optimization and process redesign.",
      "Managed and maintained 3 company websites, handling updates, bug fixes, and content changes.",
      "Designed and led an internally deployed phishing campaign, collecting and processing data to deliver actionable insights accross every department.",
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
      "Generates pitch slide decks and gives you a place to actually practice them — real-time listening, scoring, feedback, and narration powered by Gemini and ElevenLabs.",
    stack: ["React", "TypeScript", "Gemini API", "ElevenLabs API", "HTML", "CSS"],
    githubUrl: "https://github.com/StormHacks2025/pitchpal1",
    demoUrl: "https://devpost.com/software/pitchpal-t5opzn",
    accentColor: "#B07840",
  },
  {
    id: "portfolio",
    title: "My Website",
    description:
      "The site you're on. Built with Next.js, TypeScript, Tailwind, and Framer Motion — deployed on Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
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
    skills: ["React", "Next.js", "Node.js", "Supabase", "Azure", "Power Automate", "Microsoft 365"],
  },
  {
    category: "Dev Tools",
    skills: ["Git", "VS Code", "Figma", "npm", "yarn", "Bash", "Linux", "MATLAB"],
  },
];
