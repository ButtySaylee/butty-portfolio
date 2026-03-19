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
  period: "2021 - 2026",
  expectedGraduation: "Jul 2026"
};

export const certifications: Certification[] = [
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
  }
];
