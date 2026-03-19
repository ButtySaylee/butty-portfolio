export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements?: string[];
  type: "engineering" | "leadership" | "support" | "internship";
}

export const experiences: Experience[] = [
  {
    id: "experience-lead",
    role: "Quality Assurance Freelancer",
    company: "LEAD Group",
    period: "Jan 2026 – Present",
    startDate: "2026-01",
    description: "Performing quality assurance reviews of educational books to ensure accuracy, grammar, and formatting consistency. Identifying and correcting errors in content, diagrams, and references to improve clarity and compliance with standards. Delivering error-free learning materials across multiple grade levels, enhancing reliability and student outcomes.",
    achievements: [
      "Error-free learning materials across grades",
      "Enhanced content clarity and compliance",
      "Improved reliability of educational resources"
    ],
    type: "engineering"
  },
  {
    id: "apnapan",
    role: "Data/Software Engineering Intern",
    company: "Apnapan Fellow",
    period: "May 2025 – Aug 2025",
    startDate: "2025-05",
    endDate: "2025-08",
    description: "Engineered a data insights platform using Python, Streamlit, Pandas and Plotly to analyze 100+ student surveys. Integrated Google Sheets API and authentication to enable secure real-time data access. Improved reporting efficiency and stakeholder adoption by approximately 40%.",
    achievements: [
      "Built platform analyzing 100+ surveys",
      "40% efficiency improvement in reporting",
      "Real-time data insights for stakeholders"
    ],
    type: "internship"
  },
  {
    id: "swanirbhar",
    role: "PR Strategist Intern",
    company: "Swanirbhar",
    period: "May 2025 – Aug 2025",
    startDate: "2025-05",
    endDate: "2025-08",
    description: "Conducted data collection from 50+ surveys and interviews. Analyzed insights from survey and interview responses to support incubation and research strategy reports.",
    achievements: [
      "Collected data from 50+ surveys",
      "Supported research strategy with insights",
      "Contributed to incubation programs"
    ],
    type: "internship"
  },
  {
    id: "hypely",
    role: "Remote Virtual Assistant",
    company: "Hypely Pty Ltd",
    period: "Apr 2024 – May 2025",
    startDate: "2024-04",
    endDate: "2025-05",
    description: "Managed and verified 200+ business listings to improve marketplace accuracy. Conducted web research and assisted with email marketing campaigns. Increased outreach engagement by approximately 15%.",
    achievements: [
      "Verified 200+ business listings",
      "15% increase in engagement",
      "Improved marketplace accuracy"
    ],
    type: "support"
  },
  {
    id: "libtelco",
    role: "Technical Support Assistant",
    company: "Libtelco",
    period: "Oct 2019 – Jul 2021",
    startDate: "2019-10",
    endDate: "2021-07",
    description: "Diagnosed and resolved software/hardware issues for internal users, minimizing downtime by 25% through proactive maintenance.",
    achievements: [
      "25% reduction in system downtime",
      "Proactive maintenance protocols",
      "Resolved complex technical issues"
    ],
    type: "support"
  },
  {
    id: "dtu-society",
    role: "Technical Coordinator",
    company: "DTU International Student Society",
    period: "Nov 2022 - Jan 2024",
    startDate: "2022-11",
    endDate: "2024-01",
    description: "Led planning and execution of 5+ technical events with 150+ international student participants. Strengthened cross-cultural collaboration among 150+ international students, improving event participation and peer networking.",
    achievements: [
      "Organized 5+ technical events",
      "Engaged 150+ international students",
      "Strengthened cross-cultural collaboration"
    ],
    type: "leadership"
  }
];
