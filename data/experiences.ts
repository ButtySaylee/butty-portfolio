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
    period: "Jan 2026 – Jun 2026",
    startDate: "2026-01",
    endDate: "2026-06",
    description: "Conducted end-to-end QA reviews of educational books across multiple grade levels, verifying technical accuracy, grammar, and formatting against editorial standards. Identified and resolved errors in content, diagrams, and references, resulting in error-free learning materials.",
    achievements: [
      "Error-free learning materials across grades",
      "Enhanced content clarity and compliance",
      "Improved reliability of educational resources"
    ],
    type: "engineering"
  },
  {
    id: "apnapan",
    role: "Data & Software Engineering Intern",
    company: "Apnapan",
    period: "May 2025 – Aug 2025",
    startDate: "2025-05",
    endDate: "2025-08",
    description: "Built a full-stack data insights platform using Python, Streamlit, Pandas, and Plotly to process and visualize 100+ student survey responses via interactive dashboards. Integrated Google Sheets API with OAuth 2.0 authentication to enable secure, real-time, role-based data access for stakeholders.",
    achievements: [
      "Built platform analyzing 100+ surveys",
      "Real-time data insights for stakeholders",
      "Google Sheets API with OAuth 2.0 integration"
    ],
    type: "internship"
  },
  {
    id: "hypely",
    role: "Remote Virtual Assistant",
    company: "Hypley Pty Ltd",
    period: "Apr 2024 – May 2025",
    startDate: "2024-04",
    endDate: "2025-05",
    description: "Coordinated administrative operations, managed digital records, and utilized productivity tools to support remote teams and streamline business processes. Delivered professional customer support, performed internet research, and prepared reports and documentation while maintaining high accuracy and attention to detail.",
    achievements: [
      "Verified 200+ business listings",
      "Streamlined remote business operations",
      "Delivered professional customer support"
    ],
    type: "support"
  },
  {
    id: "computer-lab-assistant",
    role: "Computer Lab Assistant",
    company: "William Gabriel Kpoleh High School",
    period: "Sept 2017 – Nov 2021",
    startDate: "2017-09",
    endDate: "2021-11",
    description: "Provided computer literacy training to students, delivering hands-on instruction in Microsoft Word, Excel, PowerPoint, internet usage, and fundamental IT concepts. Maintained and troubleshot computer lab equipment, software, and network resources while assisting students and staff with technical support needs.",
    achievements: [
      "Trained students in computer literacy",
      "Maintained lab equipment & network resources",
      "Delivered hands-on IT instruction"
    ],
    type: "support"
  },
  {
    id: "dtu-society",
    role: "Technical Activity Coordinator",
    company: "DTU International Student Society",
    period: "Nov 2022 – Jan 2024",
    startDate: "2022-11",
    endDate: "2024-01",
    description: "Planned and executed 5+ technical events for 150+ international students, driving cross-cultural collaboration and peer networking across the university community.",
    achievements: [
      "Organized 5+ technical events",
      "Engaged 150+ international students",
      "Strengthened cross-cultural collaboration"
    ],
    type: "leadership"
  }
];