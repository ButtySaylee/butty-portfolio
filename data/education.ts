export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  expectedGraduation?: string;
  minor?: string;
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  platform: string;
  year: number;
  url: string;
}

export const education: Education = {
  degree: "B.Tech Software Engineering",
  minor: "Cyber Forensics & Cyber Law",
  institution: "Delhi Technological University (DTU)",
  location: "Delhi, India",
  period: "2022 - 2026",
  expectedGraduation: "Jun 2026"
};

export const certifications: Certification[] = [
  {
    id: "google-it-support-professional",
    title: "Google IT Support Professional Certificate",
    provider: "Google",
    platform: "Coursera",
    year: 2026,
    url: "https://coursera.org/verify/professional-cert/TUDFRYY8ATIM"
  },
  {
    id: "google-cybersecurity",
    title: "Foundations of Cybersecurity",
    provider: "Google",
    platform: "Coursera",
    year: 2025,
    url: "https://www.coursera.org/account/accomplishments/records/ZHL0CFO2U1Q6"
  },
  {
    id: "nptel-python",
    title: "Joy of Computing with Python",
    provider: "IIT Madras",
    platform: "NPTEL",
    year: 2025,
    url: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS69S105370453804451484"
  },
  {
    id: "ibm-software-engineering",
    title: "Introduction to Software Engineering",
    provider: "IBM",
    platform: "Coursera",
    year: 2024,
    url: "https://coursera.org/share/1c0d45c64bdc78d2266e0cf60636e1c2"
  },
  {
    id: "duke-programming",
    title: "Programming Fundamentals",
    provider: "Duke University",
    platform: "Coursera",
    year: 2024,
    url: "https://coursera.org/share/cf9e90d5a4b709c8aa07e4747fa5261f"
  },
  {
    id: "alx-va",
    title: "Virtual Assistant Training",
    provider: "ALX Africa",
    platform: "ALX",
    year: 2024,
    url: "https://www.virtualbadge.io/certificate-validator?credential=cer-bb6d7034-0fea-483f-8b58-0c104aaf"
  },
  {
    id: "google-tech-support",
    title: "Technical Support Fundamentals",
    provider: "Google",
    platform: "Coursera",
    year: 2026,
    url: "https://www.coursera.org/account/accomplishments/"
  },
  {
    id: "web-design-odl",
    title: "Web Design",
    provider: "Orange Liberia Digital Center",
    platform: "OLDC",
    year: 2022,
    url: ""
  },
  {
    id: "cso-ymca",
    title: "Computer Software Operator",
    provider: "YMCA of Liberia",
    platform: "YMCA",
    year: 2015,
    url: ""
  }
];
