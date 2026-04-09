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
    role: "Software and Automation Intern",
    company: "HME Medical Distribution LTD.",
    location: "Vancouver, BC",
    period: "June 2025 – August 2025",
    bullets: [
      "Built and debugged automated reporting pipelines and automations in JavaScript and Power Automate, integrating external REST APIs bidirectionally and using Microsoft Graph API with Entra ID authentication; deployed as Azure Functions on a schedule, saving 25+ hours of manual work per month.",
      "Improved efficiency for 30%+ of existing monthly reporting processes.",
      "Designed and led an internal phishing awareness campaign across 130+ employees using Microsoft Entra ID to manage and target accounts; configured, deployed, and analyzed data to present actionable recommendations.",
      "Managed version control and documentation for internal projects using Git.",
      "Updated and maintained 3 company websites via WordPress to support product lines and a company rebrand.",
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
    id: "eyetag",
    title: "EyeTag",
    description:
      "An eye-tracking arcade shooter in Python using MediaPipe, iterating across ML approaches: V2, a custom ridge regression (22-feature iris landmark vectors, session-specific calibration, custom EMA smoother) and V3, a PyTorch feedforward neural network (ReLU activations, Adam optimizer, MSE loss).",
    stack: ["Python", "MediaPipe", "OpenCV", "PyTorch", "scikit-learn", "pygame"],
    githubUrl: "https://github.com/krishkaushk/EyeTag",
    accentColor: "#8C7355",
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
    id: "rubiks-cube",
    title: "Rubik's Cube Solver",
    description:
      "A Rubik's cube solver in Java; evolved from bidirectional BFS to Kociemba's two-phase algorithm with pattern databases.",
    stack: ["Java", "IDA*", "Kociemba's Algorithm"],
    githubUrl: "https://github.com/simonn810/CMPT-225-Rubiks-Cube-Project-",
    accentColor: "#A0845C",
  },
  {
    id: "lockalarm",
    title: "LockAlarm",
    description:
      "Webcam-based focus monitor that detects when you look away and blasts an alarm to keep you accountable. Tracks face absence, head position, and eye closure across three priority levels with real-time metrics and blink filtering.",
    stack: ["Python", "MediaPipe", "OpenCV"],
    githubUrl: "https://github.com/krishkaushk/LockAlarm",
    accentColor: "#7A6548",
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
