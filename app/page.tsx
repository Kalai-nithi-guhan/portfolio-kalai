"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Calendar,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Cloud,
  Wrench,
  Trophy,
  Eye,
  Star,
  MapPin,
  Award,
  Monitor,
  Server,
  Layers,
  Globe,
  Palette,
  Cpu,
  Instagram,
  Download,
  ArrowUp,
  Sparkles,
  Zap,
  Github as GitHubIcon,
  Linkedin as LinkedInIcon,
  Eye as ViewIcon,
  Download as DownloadIcon,
} from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillsCategoryProps {
  title: string;
  skills: Skill[];
  icon: React.ElementType;
  color: string;
  delay: number;
}

interface Project {
  title: string;
  period: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
  featured: boolean;
}

interface EducationItem {
  degree: string;
  institute: string;
  location: string;
  year: string;
  cgpa?: string;
  marks?: string;
  highlights: string[];
}

interface Internship {
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  leetcode: string;
  instagram: string;
  tagline: string;
  objective: string;
  interests: string[];
  education: EducationItem[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
    databases: Skill[];
    programming: Skill[];
    tools: Skill[];
    aiml: Skill[];
  };
  projects: Project[];
  internships: Internship[];
}

const resume: ResumeData = {
  name: "Kalai Nithi Guhan M",
  email: "kalaiguhan98@gmail.com",
  phone: "+91 9659119924",
  linkedin: "https://www.linkedin.com/in/kalai-nithi-guhan-m",
  github: "https://github.com/Kalai-nithi-guhan",
  leetcode: "https://leetcode.com/u/kalainithiguhan",
  instagram: "@kalainithiguhan",
  tagline:
    "Aspiring Software Engineer | AI-powered Web Apps | Cloud | Full-Stack",
  objective:
    "Aspiring software engineer with a strong foundation in Computer Science and hands-on experience in building AI-powered web applications, integrating cloud services, and solving algorithmic problems. Passionate about developing scalable solutions using modern frameworks and tools. Eager to contribute innovative features to product development teams at forward-thinking tech companies.",
  interests: [
    "Web Development (React, Next.js, Firebase, Tailwind CSS, REST APIs)",
    "Computer Vision (OpenCV, MediaPipe, YOLO)",
    "Machine Learning (AI, Deep Learning, Model Deployment, Image Analysis)",
    "Cloud Integration (Firebase, Google Cloud, Real-time DB, Vercel Analytics)",
    "NLP (Text Classification)",
  ],
  education: [
    {
      degree: "B.E. Computer Science Engineering",
      institute: "Dr. Mahalingam College of Engineering and Technology (MCET)",
      location: "Pollachi, Coimbatore",
      year: "July 2027 (expected)",
      cgpa: "8.67/10",
      highlights: ["Dean's List", "Academic Excellence Award", "Active in Tech Clubs"],
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institute:
        "Srinivasa Vidhyalaya Matriculation Higher Secondary School",
      location: "Udumalaipet",
      year: "Mar 2023",
      marks: "539/600 (89.3%)",
      highlights: ["Mathematics Topper", "Science Excellence"],
    },
  ],
  skills: {
    frontend: [
      { name: "HTML", percentage: 95 },
      { name: "CSS", percentage: 90 },
      { name: "JavaScript", percentage: 88 },
      { name: "React", percentage: 90 },
      { name: "Next.js", percentage: 85 },
      { name: "Tailwind CSS", percentage: 95 },
    ],
    backend: [
      { name: "Node.js", percentage: 80 },
      { name: "Python", percentage: 90 },
      { name: "Java", percentage: 85 },
      { name: "REST APIs", percentage: 85 },
      { name: "Express.js", percentage: 78 },
    ],
    databases: [
      { name: "Firebase Firestore", percentage: 88 },
      { name: "MySQL", percentage: 82 },
      { name: "MongoDB", percentage: 75 },
      { name: "SQLite", percentage: 70 },
    ],
    programming: [
      { name: "Python", percentage: 90 },
      { name: "JavaScript", percentage: 88 },
      { name: "Java", percentage: 85 },
      { name: "C", percentage: 75 },
      { name: "TypeScript", percentage: 80 },
    ],
    tools: [
      { name: "Git", percentage: 90 },
      { name: "VS Code", percentage: 95 },
      { name: "Firebase", percentage: 85 },
      { name: "Vercel", percentage: 90 },
    ],
    aiml: [
      { name: "OpenCV", percentage: 85 },
      { name: "MediaPipe", percentage: 80 },
      { name: "TensorFlow", percentage: 70 },
      { name: "Scikit-learn", percentage: 75 },
      { name: "YOLO", percentage: 78 },
    ],
  },
  projects: [
    {
      title: "Fertilizer Recommendation Web Application",
      period: "May 2025 - Jul 2025",
      description:
        "Full-stack app that recommends fertilizers based on user input. AI logic lives in a custom api/analyze route, images are stored in Firebase, and the UI is built with Next.js, React & Tailwind.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Firebase", "Vercel"],
      liveLink: "https://fertilizer-recommendation.vercel.app",
      githubLink: "https://github.com/Kalai-nithi-guhan",
      image: "/fertilizer1.png",
      featured: true,
    },
    {
      title: "Curl Counter using OpenCV",
      period: "2024",
      description:
        "Computer-vision solution that counts push-ups, squats & biceps curls via webcam using OpenCV & MediaPipe.",
      techStack: ["OpenCV", "MediaPipe", "JavaScript"],
      githubLink: "https://github.com/Kalai-nithi-guhan",
      image: "/curlcounter1.png",
      featured: true,
    },
    {
      title: "Traffic Management System",
      period: "2024",
      description:
        "Detects opposite-lane violations and mobile-phone-while-driving using CCTV footage and OpenCV.",
      techStack: ["OpenCV", "Python"],
      githubLink: "https://github.com/Kalai-nithi-guhan",
      image: "/traffic1.png",
      featured: false,
    },
    {
      title: "Crime Rate Prediction",
      period: "2024 (ongoing)",
      description:
        "Predicts crime hot-spots using XGBoost, CatBoost & LightGBM classifiers + sends alerts to police department.",
      techStack: ["Python", "XGBoost", "CatBoost", "LightGBM"],
      githubLink: "https://github.com/Kalai-nithi-guhan",
      image: "/crime1.png",
      featured: true,
    },
  ],
  internships: [
    {
      company: "Boredom LLP Technology",
      location: "Bangalore",
      period: "May 2025 - Jul 2025",
      description:
        "Designed responsive webpages with HTML/CSS/JS, built React components, and integrated Firebase for real-time DB & authentication.",
      achievements: [
        "Built 5 responsive web components",
        "Improved page load time by 40%",
        "Integrated real-time authentication system",
      ],
    },
  ],
};

interface SkillCircleProps {
  skill: Skill;
  delay: number;
}

const SkillCircle: React.FC<SkillCircleProps> = ({ skill, delay }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(skill.percentage);
    }, delay);
    return () => clearTimeout(timer);
  }, [skill.percentage, delay]);

  const circumference = 2 * Math.PI * 40;
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3">
        <svg
          className="w-16 h-16 sm:w-20 sm:h-20 transform -rotate-90"
          viewBox="0 0 90 90"
        >
          <circle
            cx="45"
            cy="45"
            r="40"
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-gray-700"
          />
          <circle
            cx="45"
            cy="45"
            r="40"
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="text-blue-500 transition-all duration-1000 ease-out stroke-linecap-round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] sm:text-xs font-bold text-white">
            {animatedPercentage}%
          </span>
        </div>
      </div>
      <span className="text-[11px] sm:text-xs text-gray-300 text-center font-medium group-hover:text-blue-400 transition-colors duration-200">
        {skill.name}
      </span>
    </div>
  );
};

const SkillsCategory: React.FC<SkillsCategoryProps> = ({
  title,
  skills,
  icon: Icon,
  color,
  delay,
}) => {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/50">
      <div className="flex items-center mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-xl">
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-blue-400">{title}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <SkillCircle key={index} skill={skill} delay={delay + index * 100} />
        ))}
      </div>
    </div>
  );
};

interface AnimatedProjectCardProps {
  project: Project;
  index: number;
  highlighted?: boolean;
}

const AnimatedProjectCard: React.FC<AnimatedProjectCardProps> = ({
  project,
  index,
  highlighted = false,
}) => {
  return (
    <div
      className={`bg-gradient-to-br from-gray-900/80 to-gray-800/50 
        border border-gray-700/50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden 
        hover:shadow-blue-500/20 transition-all duration-700 transform 
        hover:-translate-y-3 sm:hover:-translate-y-4 hover:border-blue-500/40 backdrop-blur-md 
        group relative`}
    >
      <div className="h-52 sm:h-64 relative overflow-hidden bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <div
              key={i}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-1.5 sm:mb-2 shadow-lg"
            >
              <span className="text-[10px] sm:text-xs font-bold text-white">
                {tech.charAt(0)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {highlighted && (
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold mb-3 sm:mb-4 shadow-lg animate-pulse">
            ✨ Featured Project
          </span>
        )}

        <div className="flex flex-col space-y-3 sm:space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-all duration-500">
            {project.title}
          </h3>

          <p className="text-sm sm:text-lg text-gray-400 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.techStack.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-blue-900/40 text-blue-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border border-blue-500/30 hover:bg-blue-800/60 hover:scale-105 transition-all duration-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center text-xs sm:text-sm text-gray-500 bg-gray-800/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
            <Calendar size={14} className="mr-2" />
            {project.period}
          </span>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-2xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-green-500/25 text-sm sm:text-base"
              >
                <Eye size={18} />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-2xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-gray-500/25 text-sm sm:text-base"
              >
                <Github size={18} />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl backdrop-blur-sm animate-pulse shadow-lg" />
      <div
        className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-xl animate-bounce shadow-lg"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Dot {
  left: string;
  top: string;
  width: string;
  height: string;
  animationDelay: string;
  animationDuration: string;
  className: string;
}

const navItems: string[] = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

const skillsCategories: SkillsCategoryProps[] = [
  {
    title: "Frontend Development",
    skills: resume.skills.frontend,
    icon: Monitor,
    color: "blue",
    delay: 0,
  },
  {
    title: "Backend Development",
    skills: resume.skills.backend,
    icon: Server,
    color: "green",
    delay: 200,
  },
  {
    title: "Databases",
    skills: resume.skills.databases,
    icon: Database,
    color: "purple",
    delay: 400,
  },
  {
    title: "Programming Languages",
    skills: resume.skills.programming,
    icon: Code,
    color: "orange",
    delay: 600,
  },
  {
    title: "Tools & Technologies",
    skills: resume.skills.tools,
    icon: Wrench,
    color: "cyan",
    delay: 800,
  },
  {
    title: "AI / Machine Learning",
    skills: resume.skills.aiml,
    icon: Cpu,
    color: "pink",
    delay: 1000,
  },
];

const Portfolio: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [dots, setDots] = useState<Dot[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");
  const [backToTop, setBackToTop] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const generatedDots: Dot[] = Array.from({ length: 60 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 6 + 3}px`,
      height: `${Math.random() * 6 + 3}px`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${Math.random() * 4 + 3}s`,
      className: `absolute rounded-full animate-float ${
        i % 3 === 0
          ? "bg-blue-500/10"
          : i % 3 === 1
          ? "bg-purple-500/10"
          : "bg-pink-500/10"
      }`,
    }));
    setDots(generatedDots);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://formspree.io/f/xovnjgda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          replyto: formData.email,
          subject: `Portfolio Contact - Message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Formspree error:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800/30 to-gray-900/80">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-xl ${
          scrolled
            ? "bg-gray-900/95 shadow-2xl border-b border-gray-800/80"
            : "bg-transparent/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="font-black text-xl sm:text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              KNG
            </div>

            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm lg:text-base text-gray-300 hover:text-blue-400 transition-all duration-300 font-semibold relative group p-1.5"
                >
                  {item}
                  <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 origin-center rounded-full" />
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-5 py-2.5 lg:px-8 lg:py-3 rounded-2xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center gap-2 text-sm lg:text-base"
              >
                <DownloadIcon size={18} />
                Download Resume
              </a>
            </div>

            <button
              className="md:hidden text-white p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50">
              <div className="px-4 pt-3 pb-6 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2.5 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-xl transition-all duration-200 font-semibold text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="block w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl font-bold text-center hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 shadow-xl text-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/90 to-gray-900/90" />
        <div className="absolute inset-0">
          {dots.map((dot, i) => (
            <div
              key={i}
              className={dot.className}
              style={{
                left: dot.left,
                top: dot.top,
                width: dot.width,
                height: dot.height,
                animationDelay: dot.animationDelay,
                animationDuration: dot.animationDuration,
              }}
            />
          ))}
        </div>

        <div className="absolute top-16 left-4 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 bg-blue-500/20 rounded-2xl blur-xl animate-float-slow" />
        <div
          className="absolute top-32 right-6 sm:right-20 w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-6 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 bg-pink-500/20 rounded-xl blur-xl animate-bounce-slow"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-10 right-4 sm:right-10 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-3xl blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="flex justify-center lg:justify-end">
              <div className="relative group cursor-pointer">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1.5 sm:p-2 group-hover:scale-105 transition-all duration-700 shadow-2xl hover:shadow-blue-500/30">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl flex items-center justify-center overflow-hidden border-2 sm:border-4 border-gray-700/50">
                    <img
                      src="https://i.ibb.co/VW4Lvr5x/kalaiimg.jpg"
                      alt="Kalai Nithi Guhan M"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl sm:blur-3xl -z-10 group-hover:blur-3xl sm:group-hover:blur-4xl transition-all duration-700 animate-pulse" />
              </div>
            </div>

            <div className="text-center lg:text-left lg:pl-6 xl:pl-12">
              <div className="mb-6 sm:mb-8">
                <div className="text-xs sm:text-sm text-blue-400 font-bold mb-3 sm:mb-4 flex items-center justify-center lg:justify-start gap-2 animate-pulse">
                  <Sparkles size={18} className="animate-spin" />
                  Hello, I'm
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
                    {resume.name}
                  </span>
                </h1>
              </div>

              <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-semibold mb-6 sm:mb-10 leading-relaxed max-w-xl sm:max-w-2xl mx-auto lg:mx-0">
                {resume.tagline}
              </p>

              <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-xl sm:max-w-2xl mx-auto lg:mx-0">
                {resume.objective}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mb-10 sm:mb-16">
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1.5 sm:hover:-translate-y-2 transition-all duration-500 shadow-2xl animate-float-slow text-center"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="w-full sm:w-auto border-2 sm:border-4 border-blue-400/50 text-blue-400 px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg hover:bg-blue-400 hover:text-gray-900 hover:shadow-xl hover:shadow-blue-400/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 backdrop-blur-sm text-center"
                >
                  ✨ View My Work
                </a>
              </div>

              <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-10 sm:mb-16 pt-6 border-t border-gray-800/50">
                {[
                  {
                    href: resume.github,
                    icon: Github,
                    label: "GitHub",
                    color: "text-gray-200 hover:text-white",
                    bg: "bg-gray-800/80 hover:bg-gray-700",
                  },
                  {
                    href: resume.linkedin,
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "text-blue-300 hover:text-blue-400",
                    bg: "bg-blue-950/80 hover:bg-blue-900",
                  },
                  {
                    href: resume.leetcode,
                    icon: Trophy,
                    label: "LeetCode",
                    color: "text-yellow-300 hover:text-yellow-400",
                    bg: "bg-yellow-950/80 hover:bg-yellow-900",
                  },
                  {
                    href: `https://instagram.com/${resume.instagram.replace(
                      "@",
                      ""
                    )}`,
                    icon: Instagram,
                    label: "Instagram",
                    color: "text-pink-300 hover:text-pink-400",
                    bg: "bg-pink-950/80 hover:bg-pink-900",
                  },
                  {
                    href: `mailto:${resume.email}`,
                    icon: Mail,
                    label: "Email",
                    color: "text-emerald-300 hover:text-emerald-400",
                    bg: "bg-emerald-950/80 hover:bg-emerald-900",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 sm:p-4 rounded-2xl transition-all duration-500 transform hover:scale-110 sm:hover:scale-125 hover:-translate-y-2 sm:hover:-translate-y-3 shadow-2xl hover:shadow-pink-500/20 backdrop-blur-md border border-gray-700/50 ${social.color} ${social.bg}`}
                    title={social.label}
                  >
                    <social.icon size={22} className="sm:w-7 sm:h-7" />
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-lg mx-auto lg:mx-0 pt-6 sm:pt-8">
                {[
                  {
                    value: "8.67",
                    label: "CGPA",
                    color:
                      "from-blue-900/30 to-blue-800/20 text-blue-400 border-blue-500/20",
                  },
                  {
                    value: "14+",
                    label: "Projects",
                    color:
                      "from-purple-900/30 to-purple-800/20 text-purple-400 border-purple-500/20",
                  },
                  {
                    value: "1+",
                    label: "Experience",
                    color:
                      "from-pink-900/30 to-pink-800/20 text-pink-400 border-pink-500/20",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 sm:p-6 rounded-2xl border backdrop-blur-sm hover:scale-105 sm:hover:scale-110 transition-all duration-500 cursor-pointer ${stat.color} shadow-xl hover:shadow-2xl`}
                  >
                    <div className="text-2xl sm:text-4xl font-black mb-1.5 sm:mb-2 drop-shadow-lg">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={30} className="text-gray-500 drop-shadow-lg" />
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-800/90 to-gray-900/100 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="space-y-6 sm:space-y-8 pr-0 lg:pr-10">
              <p className="text-base sm:text-xl text-gray-300 leading-relaxed">
                I'm a passionate software engineering student with a strong
                foundation in computer science and hands-on experience building
                AI-powered web applications. Currently pursuing my B.E. in
                Computer Science at MCET with a CGPA of 8.67/10.
              </p>
              <p className="text-base sm:text-xl text-gray-300 leading-relaxed">
                My journey in tech has led me to explore various domains
                including web development, computer vision, and machine
                learning. Creating solutions that combine cutting-edge technology
                with practical applications excites me.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-200 flex items-center gap-3">
                  <Sparkles size={28} className="text-blue-400" />
                  Areas of Interest
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {resume.interests.map((interest, index) => (
                    <div
                      key={index}
                      className="group p-5 sm:p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border-l-4 border-blue-400 hover:border-purple-400 transition-all duration-500 transform hover:translate-x-2 sm:hover:translate-x-4 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-md"
                    >
                      <p className="text-sm sm:text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        {interest}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="text-center p-8 sm:p-10 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-3xl border border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-400 mb-3 sm:mb-4 drop-shadow-2xl">
                  8.67
                </div>
                <div className="text-sm sm:text-lg text-gray-400 font-bold">
                  Current CGPA
                </div>
              </div>
              <div className="text-center p-8 sm:p-10 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-3xl border border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-400 mb-3 sm:mb-4 drop-shadow-2xl">
                  14+
                </div>
                <div className="text-sm sm:text-lg text-gray-400 font-bold">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS / TECHNICAL EXPERTISE */}
      <section
        id="skills"
        className="py-20 sm:py-24 lg:py-32 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gray-900" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 20%, #1F2933 0%, transparent 50%), radial-gradient(circle at 80% 80%, #111827 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-14 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              Technical Expertise
            </h2>
            <p className="text-sm sm:text-xl text-gray-400 max-w-2xl sm:max-w-3xl mx-auto">
              My comprehensive skill set spans across multiple domains of
              software development, from frontend design to backend
              architecture, databases, and emerging technologies like AI/ML.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-24">
            {skillsCategories.map((category, index) => (
              <SkillsCategory
                key={index}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
                color={category.color}
                delay={category.delay}
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 sm:p-10 lg:p-12">
            <h3 className="text-2xl sm:text-4xl font-black text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-xl">
              Skill Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  value: "95%",
                  label: "Frontend Technologies",
                  color: "text-blue-400 bg-blue-900/30 border-blue-500/20",
                },
                {
                  value: "90%",
                  label: "Backend Technologies",
                  color: "text-green-400 bg-green-900/30 border-green-500/20",
                },
                {
                  value: "88%",
                  label: "Database Systems",
                  color:
                    "text-purple-400 bg-purple-900/30 border-purple-500/20",
                },
                {
                  value: "85%",
                  label: "AI/ML Technologies",
                  color: "text-pink-400 bg-pink-900/30 border-pink-500/20",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`text-center p-6 sm:p-8 rounded-2xl border backdrop-blur-sm cursor-pointer hover:scale-105 sm:hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl ${skill.color}`}
                >
                  <div className="text-3xl sm:text-5xl font-black mb-3 sm:mb-4 drop-shadow-lg">
                    {skill.value}
                  </div>
                  <div className="text-sm sm:text-lg text-gray-400 font-bold">
                    {skill.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-800/100 to-gray-900/100 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in web
              development, AI, computer vision, and full-stack development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-24">
            {resume.projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <AnimatedProjectCard
                  key={index}
                  project={project}
                  index={index}
                  highlighted
                />
              ))}
          </div>

          <div className="text-center mb-10 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-gray-200">
              Other Projects
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {resume.projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <AnimatedProjectCard
                  key={index}
                  project={project}
                  index={index}
                />
              ))}
          </div>
        </div>

        <div className="absolute top-20 sm:top-32 left-6 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 sm:bottom-32 right-6 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-purple-500/10 rounded-3xl blur-xl sm:blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="py-20 sm:py-24 lg:py-32 bg-gray-900/100 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              Professional Experience
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto space-y-10 sm:space-y-16">
            <div className="hidden sm:block absolute left-8 sm:left-12 top-10 bottom-4 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            {resume.internships.map((internship, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/50 border border-gray-700/50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-12 hover:shadow-blue-500/10 transition-all duration-500 hover:border-blue-500/30 backdrop-blur-md sm:ml-10"
              >
                <div className="hidden sm:block absolute -left-4 sm:-left-8 top-10 w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl border-4 sm:border-8 border-gray-900 shadow-xl" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl mb-4 sm:mb-0">
                    <Briefcase size={26} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-2 sm:mb-0">
                        {internship.company}
                      </h3>
                      <div className="flex items-center text-sm sm:text-lg text-gray-500">
                        <MapPin size={18} className="mr-2" />
                        {internship.location}
                      </div>
                    </div>

                    <span className="inline-flex items-center text-sm sm:text-lg text-gray-500 bg-gray-800/50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl mb-5 sm:mb-8">
                      <Calendar size={18} className="mr-2 sm:mr-3" />
                      {internship.period}
                    </span>

                    <p className="text-sm sm:text-xl text-gray-400 leading-relaxed mb-6 sm:mb-8">
                      {internship.description}
                    </p>

                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                        Key Achievements
                        <Zap
                          size={22}
                          className="sm:w-7 sm:h-7 text-yellow-400 animate-pulse"
                        />
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {internship.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-center text-sm sm:text-lg text-gray-300 p-3 sm:p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/20"
                          >
                            <Star
                              size={18}
                              className="sm:w-5 sm:h-5 text-yellow-400 mr-3 sm:mr-4 flex-shrink-0"
                            />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-800/90 to-gray-900/90"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              Educational Journey
            </h2>
            <p className="text-sm sm:text-xl text-gray-400 max-w-2xl mx-auto">
              My academic background and achievements that shaped my technical
              foundation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="hidden sm:block absolute left-10 sm:left-16 top-0 bottom-3 w-1.5 sm:w-2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-2xl" />
              {resume.education.map((edu, index) => (
                <div key={index} className="relative mb-12 sm:mb-20">
                  <div className="hidden sm:block absolute left-8 sm:left-14 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl border-4 sm:border-8 border-gray-900 z-10 shadow-2xl" />
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-12 hover:shadow-blue-500/10 transition-all duration-500 hover:border-blue-500/30 backdrop-blur-md sm:ml-10 lg:ml-20">
                    <div className="flex flex-col lg:flex-row items-start lg:items-start lg:space-x-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-2xl mb-4 sm:mb-0">
                        <GraduationCap size={28} className="sm:w-9 sm:h-9 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 sm:mb-8">
                          <div className="flex-1">
                            <h3 className="text-2xl sm:text-4xl font-bold text-gray-200 mb-3 sm:mb-4">
                              {edu.degree}
                            </h3>
                            <p className="text-lg sm:text-2xl text-gray-300 mb-4 sm:mb-6">
                              {edu.institute}
                            </p>
                          </div>
                          <div className="flex items-center text-sm sm:text-xl text-gray-500 mb-4 lg:mb-0">
                            <MapPin size={18} className="sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-lg">
                          <span className="inline-block bg-blue-900/40 text-blue-300 px-5 sm:px-8 py-2.5 sm:py-4 rounded-2xl text-base sm:text-xl font-bold border border-blue-500/30">
                            {edu.year}
                          </span>
                          {edu.cgpa && (
                            <div className="text-xl sm:text-3xl font-black text-green-400">
                              CGPA {edu.cgpa}
                            </div>
                          )}
                          {edu.marks && (
                            <div className="text-lg sm:text-2xl font-bold text-green-400">
                              {edu.marks}
                            </div>
                          )}
                        </div>

                        <div>
                          <h4 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-5 sm:mb-8 flex items-center gap-3 sm:gap-4">
                            Highlights & Achievements
                            <Award size={24} className="sm:w-8 sm:h-8 text-yellow-400" />
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {edu.highlights.map((highlight, hlIndex) => (
                              <div
                                key={hlIndex}
                                className="flex items-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 px-5 sm:px-8 py-4 sm:py-6 rounded-2xl border border-purple-500/20 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/20"
                              >
                                <Award
                                  size={20}
                                  className="sm:w-6 sm:h-6 text-yellow-400 mr-3 sm:mr-4 flex-shrink-0"
                                />
                                <span className="text-sm sm:text-xl text-gray-300 font-semibold">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 sm:py-24 lg:py-32 bg-gray-900/100 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-14 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-sm sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to discuss your next project? Open to new opportunities and
              interesting conversations about technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-10 sm:space-y-12">
              <div>
                <h3 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-10 text-gray-200 flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Mail size={30} className="sm:w-10 sm:h-10 text-blue-400" />
                  Get In Touch
                </h3>
                <p className="text-sm sm:text-xl text-gray-400 leading-relaxed mb-8 sm:mb-12 max-w-2xl">
                  Whether you're looking to hire, collaborate, or just say
                  hello, feel free to reach out. Let's create something
                  extraordinary together.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: resume.email,
                    href: `mailto:${resume.email}`,
                    bg: "bg-blue-900/40",
                    border: "border-blue-500/30",
                    text: "text-blue-400",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: resume.phone,
                    href: `tel:${resume.phone}`,
                    bg: "bg-green-900/40",
                    border: "border-green-500/30",
                    text: "text-green-400",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 sm:space-x-6 group cursor-pointer hover:scale-105 transition-all duration-300"
                  >
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 ${contact.bg} ${contact.border} border rounded-3xl flex items-center justify-center group-hover:scale-110 sm:group-hover:scale-125 transition-transform duration-300 shadow-2xl backdrop-blur-md`}
                    >
                      <contact.icon
                        size={26}
                        className={`sm:w-8 sm:h-8 ${contact.text}`}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-base sm:text-xl text-gray-200 mb-1">
                        {contact.title}
                      </p>
                      <a
                        href={contact.href}
                        className={`${contact.text} hover:underline transition-colors duration-300 text-sm sm:text-xl font-mono break-all`}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-8 pt-8 border-t border-gray-800/50">
                {[
                  {
                    href: resume.github,
                    icon: GitHubIcon,
                    title: "GitHub",
                    color: "hover:bg-gray-600 hover:text-white",
                    bg: "bg-gray-700 border-gray-600 text-gray-300",
                  },
                  {
                    href: resume.linkedin,
                    icon: LinkedInIcon,
                    title: "LinkedIn",
                    color: "hover:bg-blue-800 hover:text-white",
                    bg: "bg-blue-900/40 border-blue-500/30 text-blue-400",
                  },
                  {
                    href: resume.leetcode,
                    icon: Trophy,
                    title: "LeetCode",
                    color: "hover:bg-yellow-800 hover:text-white",
                    bg: "bg-yellow-900/40 border-yellow-500/30 text-yellow-400",
                  },
                  {
                    href: `https://instagram.com/${resume.instagram.replace(
                      "@",
                      ""
                    )}`,
                    icon: Instagram,
                    title: "Instagram",
                    color: "hover:bg-pink-800 hover:text-white",
                    bg: "bg-pink-900/40 border-pink-500/30 text-pink-400",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 sm:w-20 sm:h-20 ${social.bg} border rounded-3xl flex items-center justify-center ${social.color} transition-all duration-500 transform hover:scale-115 sm:hover:scale-125 hover:-translate-y-2 sm:hover:-translate-y-3 shadow-2xl hover:shadow-2xl backdrop-blur-md`}
                    title={social.title}
                  >
                    <social.icon size={22} className="sm:w-7 sm:h-7" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/50 border border-gray-700/50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-12 backdrop-blur-xl">
              <h3 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-gray-200 text-center">
                Send me a message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-green-900/40 border border-green-500/30 rounded-2xl text-green-300 text-sm sm:text-base">
                  <div className="flex items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-white text-xs sm:text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    Thank you for your message! I'll get back to you soon.
                  </div>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-red-900/40 border border-red-500/30 rounded-2xl text-red-300 text-sm sm:text-base">
                  <div className="flex items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-500 rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-white text-xs sm:text-sm font-bold">
                        !
                      </span>
                    </div>
                    Please fill in all fields or try again later.
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div>
                  <label className="block text-sm sm:text-lg font-bold text-gray-300 mb-2 sm:mb-4">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-6 sm:px-8 py-4 sm:py-6 bg-gray-700/50 border border-gray-600 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-blue-500/50 focus:border-transparent transition-all duration-500 text-sm sm:text-xl text-white placeholder-gray-400 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-blue-500/50"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-lg font-bold text-gray-300 mb-2 sm:mb-4">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-6 sm:px-8 py-4 sm:py-6 bg-gray-700/50 border border-gray-600 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-blue-500/50 focus:border-transparent transition-all duration-500 text-sm sm:text-xl text-white placeholder-gray-400 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-blue-500/50"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-lg font-bold text-gray-300 mb-2 sm:mb-4">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-6 sm:px-8 py-4 sm:py-6 bg-gray-700/50 border border-gray-600 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-blue-500/50 focus:border-transparent transition-all duration-500 resize-none text-sm sm:text-xl text-white placeholder-gray-400 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-blue-500/50"
                    placeholder="Tell me about your project... or just say hello!"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !formData.name ||
                    !formData.email ||
                    !formData.message
                  }
                  className="w-full py-4 sm:py-6 rounded-2xl sm:rounded-3xl font-black text-sm sm:text-xl transition-all duration-500 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-300 shadow-2xl hover:shadow-3xl hover:shadow-blue-500/30 transform hover:scale-[1.02] hover:-translate-y-1 disabled:transform-none bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-2xl h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-white mr-3 sm:mr-4" />
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-950 to-gray-900 border-t border-gray-800/50 text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #3B82F6 0%, transparent 70%), linear-gradient(-45deg, #8B5CF6 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <h3 className="text-3xl sm:text-5xl font-black mb-5 sm:mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              {resume.name}
            </h3>
            <p className="text-base sm:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              {resume.tagline}
            </p>

            <div className="flex justify-center space-x-6 sm:space-x-12 mb-10 sm:mb-16">
              {[
                {
                  href: resume.github,
                  icon: Github,
                  size: 26,
                  title: "GitHub",
                },
                {
                  href: resume.linkedin,
                  icon: Linkedin,
                  size: 26,
                  title: "LinkedIn",
                },
                {
                  href: resume.leetcode,
                  icon: Trophy,
                  size: 26,
                  title: "LeetCode",
                },
                {
                  href: `https://instagram.com/${resume.instagram.replace(
                    "@",
                    ""
                  )}`,
                  icon: Instagram,
                  size: 26,
                  title: "Instagram",
                },
                {
                  href: `mailto:${resume.email}`,
                  icon: Mail,
                  size: 26,
                  title: "Email",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-500 transform hover:scale-125 sm:hover:scale-150 hover:-translate-y-3 sm:hover:-translate-y-4 shadow-2xl hover:shadow-white/20 p-3 sm:p-4 rounded-3xl backdrop-blur-md border border-gray-700/50 hover:border-white/30"
                  title={social.title}
                >
                  <social.icon size={social.size} className="sm:w-9 sm:h-9" />
                </a>
              ))}
            </div>

            <div className="border-t border-gray-800/50 pt-8 sm:pt-12">
              <p className="text-xs sm:text-xl text-gray-500 mb-2 sm:mb-4">
                © 2025 {resume.name}. Crafted with ❤️ React & Tailwind CSS.
              </p>
              <p className="text-[11px] sm:text-lg text-gray-600 italic">
                "Building the future, one line of code at a time."
              </p>
            </div>
          </div>
        </div>
      </footer>

      {backToTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 z-40 border border-white/20 backdrop-blur-xl flex items-center justify-center animate-pulse"
        >
          <ArrowUp size={20} className="sm:w-6 sm:h-6" />
        </button>
      )}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 7s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
