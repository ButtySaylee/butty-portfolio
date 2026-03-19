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
    title: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "JavaScript", proficiency: 90 },
      { name: "C", proficiency: 85 },
      { name: "C++", proficiency: 80 }
    ],
    usedIn: ["Apnapan Platform", "Portfolio Website", "Data Analysis Projects"]
  },
  {
    id: "web-data",
    title: "Web, Data & Databases",
    icon: "📊",
    skills: [
      { name: "React", proficiency: 92 },
      { name: "Next.js", proficiency: 88 },
      { name: "Streamlit", proficiency: 87 },
      { name: "Pandas", proficiency: 93 },
      { name: "Plotly", proficiency: 89 },
      { name: "MongoDB", proficiency: 86 },
      { name: "MySQL", proficiency: 84 }
    ],
    usedIn: ["Full-stack Applications", "Data Visualization", "Database Design"]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Cloud",
    icon: "🔐",
    skills: [
      { name: "Security Principles", proficiency: 87 },
      { name: "Risk Management", proficiency: 85 },
      { name: "Authentication & Access Control", proficiency: 88 },
      { name: "Data Privacy", proficiency: 90 },
      { name: "Cloud Computing", proficiency: 82 }
    ],
    usedIn: ["Secure Authentication Systems", "Data Privacy Compliance", "Cloud Deployments"]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git", proficiency: 91 },
      { name: "GitHub", proficiency: 90 },
      { name: "VS Code", proficiency: 94 },
      { name: "Jupyter Notebook", proficiency: 89 },
      { name: "Google Workspace", proficiency: 92 },
      { name: "Google Sheets API", proficiency: 86 },
      { name: "GitHub Copilot", proficiency: 88 }
    ],
    usedIn: ["Version Control", "Development Workflow", "API Integration"]
  },
  {
    id: "analytical",
    title: "Analytical & Professional",
    icon: "📈",
    skills: [
      { name: "Data Analysis", proficiency: 93 },
      { name: "Data Visualization", proficiency: 91 },
      { name: "Problem-Solving", proficiency: 95 },
      { name: "Technical Documentation", proficiency: 88 },
      { name: "Cross-functional Collaboration", proficiency: 90 }
    ],
    usedIn: ["Survey Analysis", "Team Projects", "Documentation"]
  },
  {
    id: "interests",
    title: "Interests",
    icon: "❤️",
    skills: [
      { name: "AI Ethics", proficiency: 85 },
      { name: "Social Impact Projects", proficiency: 92 },
      { name: "Open-Source Contributions", proficiency: 87 }
    ],
    usedIn: ["Community Projects", "Research", "Open Source"]
  }
];
