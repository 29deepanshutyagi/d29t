import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiTailwindcss,
  SiSolidity,
  SiRust,
  SiDjango,
  SiFlask,
  SiEthereum,

  SiApachecassandra,
  SiTwitter,
  SiGithub,
  SiLinkedin,
  SiTelegram,
  SiNestjs,
  SiRecoil,
  SiPrisma

} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";
import { text } from "stream/consumers";
import { Anchor } from "lucide-react";
import { log } from "console";

export const skills = [
  
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  {
    icon:SiRecoil,
    text:"Recoil"
  }
  ,{
    icon: SiNestjs,
    text: "Nest",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiExpress,
    text: "Express",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon:SiPrisma,
    text:"Prisma"
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiDjango,
    text: "Django",
  },
  {
    icon: SiFlask,
    text: "Flask",
  },
  {
    icon: SiApachecassandra,
    text: "Apache Cassandra",
  },
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    text:"Tailwind"
  }
  
];

export interface Project {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "Healthify- AI-Powered Healthcare Report Analyzer",
    description:
      "Healthify- AI-Powered Healthcare Report Analyzer is a platform designed to simplify medical report analysis, providing patients with easy-to-understand summaries and personalized healthcare plans.",
    link: "https://github.com/29deepanshutyagi/Healthify",
    tags: [
      "React.js",
      "Tailwind",
      "Gemini api",
      "PostgreSQL",
      "Github",
    ],
  },
  {
    title: "JointPal",
    description: "JointPal is a web application designed to recommend stretching exercises based on user-reported symptoms. The application uses the OpenAI API to analyze symptoms and suggest appropriate stretches for various body parts.",
    link: "https://jointpal.vercel.app/",
    tags: [
      "react.js",
      "Tailwind",
      "Redux",
      "OpenAI API",
      
    ],
  },
  {
    title: "Chatwave (WebSocket Based Chat Application) ",
    description:
      "Created a real-time chat application using WebSocket .Implemented server-side logic (mocking of data from JSON file) with Express/Node.js, FS library and managed WebSocket connections Simple frontend with ReactJS to handle real-time message rendering and user interactions ",
    link: "https://github.com/29deepanshutyagi/Chatwave.git",
    tags: ["Typescript", "Express", "Socket.io", "React js","Real-Time Rendering"],
  },
  {
    title: "SongSlayer",
    description:
      "Song Voting Application WebSocket based writting in-memory songs list .Added upvote feature most upvoted song will be sent to QUEUE to be played",
    link: "https://github.com/29deepanshutyagi/SongSlayer",
    tags: [
      "Typescript",
      "Express",
      "WebSocket",
      
    ],
  },
  
  {
    title: "Zen Monke",
    description:
      "Zen Monke aims to fight the stigma against the topic and provide quick and simple resources to cope with life's highs and lows.",
    link: "https://zenmonke.netlify.app/",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
     
    ],
  },
  
  {
    title: "django react notes",
    description: "A full-stack application that uses React for the frontend and Django for the backend. It includes features such as user registration, note creation, and note deletion.",
    link: "https://github.com/29deepanshutyagi/django_react_notes",
    tags: [
      "Python",
      "REST API",
      "Django",
      "React.js",
      
      "Django Rest Framework",
      
    ],
  },
  {
    title: "Donate4Life",
    description: "A website to connect donors and recipients through techonology",
    link: "https://github.com/29deepanshutyagi/Donate4Life",
    tags: ["Python", "Django", "PostgreSQL",],
  },
];

export interface Social {
  name: string;
  link: string;
  icon: IconType;
}

export const socials: Social[] = [
  {
    name: "Twitter",
    link: "https://twitter.com/TheBackendMonk",
    icon: SiTwitter,
  },
  {
    name: "GitHub",
    link: "https://github.com/29deepanshutyagi",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deepanshu-tyagi-2122ab268/",
    icon: SiLinkedin,
  },
  {
    name: "Telegram",
    link: "https://t.me/thebackendmonk",
    icon: SiTelegram,
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
  link?: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Sudan's Tech",
    logo: "/sudan.png",
    position: "Web developer intern",
    description:
      "I worked on frontend of the Hack The Mountains 5.0 webiste ,and optimising their websites ,which increases the website views by 35% .I decrease their website loading time less by 75% ,made their website fast ",
    years: "July, 2024 - Oct,2024",
  },
 
  {
    company: "FOSSCU",
    logo: "/fosscu.png",
    position: " Member",
    description:
      "Contributing and Maintaining Open Source Projects under FOSSCU, a student-run community.",
    years: "Nov, 2023 - Present",
  },
 
  {
    company: "KIET",
    logo: "/kiet.png",
    position: "Student",
    description:
      "Pursuing Computer Science Engineering degree from KIET Group of Institutions, Ghaziabad.",
    years: "Nov, 2022 - July, 2026",
  },
];

export const aboutYou = {
  name: "Deepanshu Tyagi",
  description:
    "👋 Hi, I'm Deepanshu. Backend & Devops Developer. I've massive experience in Full Stack development. Backend Technologies like Django, Express, Nest. For a long time I've been a Python guy. But now list is just endless! ",
  yearsOfExperience: "3+ years",
  location: "Delhi, India",
  email: "29deepanshutyagi@gmail.com",
  twitter: "thebackendmonk",
};

export const logoText = "@d29t";

export const marketingHeadlines = {
  mainHeadline: "Hi There 👋",
  subHeadline: "Eat. Sleep. Code. Repeat.",
};

export const websiteMetadata = {
  title: "Deepanshu Tyagi | Developer",
  description: "👋 Hey, Deepanshu Tyagi here. Welcome to my portfolio.",
  url: "",
  image_url: "https://pbs.twimg.com/profile_images/1818003909404934148/44PKvyPr_400x400.jpg",
  logo_url: "https://pbs.twimg.com/profile_images/1818003909404934148/44PKvyPr_400x400.jpg",
  twitterSite: "@thebackendmonk",
  keywords: [
    "Deepanshu Tyagi",
    "Developer",
    "Backend",
    "Python",
    "Django",
    
    "FOSSCU",
    "Innogeeks",
    
    "D29T",
    "thebackendmonk",
    "KIET",
  ],
};
