export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
  usedIn?: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "JavaScript", proficiency: 90 },
      { name: "C", proficiency: 85 },
      { name: "C++", proficiency: 80 },
      { name: "SQL", proficiency: 85 }
    ],
    usedIn: ["Apnapan Platform", "Data Insights Platform", "FertilNet ML Model"]
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    icon: "⚙️",
    skills: [
      { name: "OOP & Data Structures", proficiency: 92 },
      { name: "Algorithms & SDLC", proficiency: 90 },
      { name: "RESTful APIs", proficiency: 88 },
      { name: "Database Design", proficiency: 86 },
      { name: "Web Development", proficiency: 92 },
      { name: "Version Control (Git)", proficiency: 91 },
      { name: "Agile Methodologies", proficiency: 85 }
    ],
    usedIn: ["Full-stack Applications", "API Integration", "Web Platforms"]
  },
  {
    id: "web-data",
    title: "Web, Data & Frameworks",
    icon: "📊",
    skills: [
      { name: "React", proficiency: 92 },
      { name: "Next.js", proficiency: 88 },
      { name: "Streamlit", proficiency: 87 },
      { name: "Pandas", proficiency: 93 },
      { name: "Plotly", proficiency: 89 },
      { name: "MongoDB", proficiency: 86 },
      { name: "Node.js", proficiency: 82 }
    ],
    usedIn: ["Full-stack Applications", "Data Visualization", "Interactive Dashboards"]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "🔐",
    skills: [
      { name: "Security Principles", proficiency: 88 },
      { name: "Risk Management", proficiency: 86 },
      { name: "Authentication & Access Control", proficiency: 90 },
      { name: "Data Privacy", proficiency: 90 },
      { name: "Ethical Hacking", proficiency: 82 },
      { name: "Malware Analysis", proficiency: 80 },
      { name: "Cyber Forensics & Cyber Law", proficiency: 85 },
      { name: "Secure Coding", proficiency: 84 }
    ],
    usedIn: ["Secure Authentication Systems", "Data Privacy Compliance", "Security Assessments"]
  },
  {
    id: "it-support",
    title: "IT & Technical Support",
    icon: "🖥️",
    skills: [
      { name: "Hardware & OS Fundamentals", proficiency: 90 },
      { name: "Networking (TCP/IP, DNS, DHCP)", proficiency: 87 },
      { name: "System Troubleshooting & Diagnostics", proficiency: 92 },
      { name: "System Administration", proficiency: 85 },
      { name: "Help Desk & Ticketing", proficiency: 88 }
    ],
    usedIn: ["Computer Lab Management", "Technical Support", "System Administration"]
  },
  {
    id: "cloud-tools",
    title: "Cloud & Tools",
    icon: "☁️",
    skills: [
      { name: "Git & GitHub", proficiency: 92 },
      { name: "VS Code", proficiency: 94 },
      { name: "Google Workspace", proficiency: 92 },
      { name: "Microsoft 365", proficiency: 88 },
      { name: "Cloud Fundamentals (IaaS, PaaS, SaaS)", proficiency: 82 },
      { name: "Jupyter Notebook", proficiency: 89 },
      { name: "PyTorch / Scikit-Learn", proficiency: 80 }
    ],
    usedIn: ["Version Control", "Development Workflow", "Cloud Deployments", "ML Projects"]
  },
  {
    id: "core-competencies",
    title: "Core Competencies",
    icon: "📈",
    skills: [
      { name: "Data Analysis & Visualization", proficiency: 93 },
      { name: "API Integration", proficiency: 88 },
      { name: "Technical Documentation", proficiency: 90 },
      { name: "QA & Testing", proficiency: 92 },
      { name: "Cross-Functional Collaboration", proficiency: 90 },
      { name: "Problem-Solving", proficiency: 95 }
    ],
    usedIn: ["Survey Analysis", "Team Projects", "Documentation", "QA Reviews"]
  },
  {
    id: "interests",
    title: "Interests",
    icon: "❤️",
    skills: [
      { name: "AI & Machine Learning", proficiency: 85 },
      { name: "Social Impact Projects", proficiency: 92 },
      { name: "Open-Source Contributions", proficiency: 87 },
      { name: "Cyber Forensics Research", proficiency: 83 }
    ],
    usedIn: ["FertilNet ML", "Community Projects", "Research"]
  }
];