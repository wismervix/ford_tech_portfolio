import exciteLogo from "../assets/images/excite_logo.png";

export interface Experience {
  id: number;
  company: string;
  logo: string;
  companyType: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Excite",
    logo: exciteLogo,
    companyType: "Tech Company",
    role: "Senior UI/UX Designer",
    duration: "2026 - Present",
    location: "Lagos, Nigeria",
    description:
      "Developed user-centered designs for electronic devices and products, emphasizing usability, accessibility, and visual appeal. Collaborated with product managers and developers to define product requirements and prioritize features based on user needs and business goals.",
    technologies: [
      "Figma",
      "Adobe Illustrator",
      "WordPress",
      "Corel Draw",
      "Prototype",
    ],
    achievements: [
      "Designed intuitive and visually appealing user interfaces",
      "Improved user experience through usability-focused design decisions",
      "Collaborated with developers to ensure accurate design implementation",
    ],
  },
  {
    id: 2,
    company: "Excite",
    logo: exciteLogo,
    companyType: "Tech Company",
    role: "UI/UX Designer",
    duration: "2024 - 2026",
    location: "Lagos, Nigeria",
    description:
      "Worked on digital product experiences, creating accessible interfaces and collaborating with cross-functional teams to deliver user-focused solutions.",
    technologies: ["Figma", "Adobe XD", "Photoshop"],
    achievements: [
      "Created reusable design components",
      "Designed responsive interfaces for multiple devices",
      "Contributed to product design improvements",
    ],
  },
  {
    id: 3,
    company: "Excite",
    logo: exciteLogo,
    companyType: "Tech Company",
    role: "Senior UI/UX Designer",
    duration: "2026 - Present",
    location: "Lagos, Nigeria",
    description:
      "Developed user-centered designs for electronic devices and products, emphasizing usability, accessibility, and visual appeal. Collaborated with product managers and developers to define product requirements and prioritize features based on user needs and business goals.",
    technologies: [
      "Figma",
      "Adobe Illustrator",
      "WordPress",
      "Corel Draw",
      "Prototype",
    ],
    achievements: [
      "Designed intuitive and visually appealing user interfaces",
      "Improved user experience through usability-focused design decisions",
      "Collaborated with developers to ensure accurate design implementation",
    ],
  },

  // Add more experiences here...
];