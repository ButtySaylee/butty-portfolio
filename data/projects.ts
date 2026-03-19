export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  problem: string;
  approach: string;
  solution: string;
  impact: string;
  techStack: string[];
  github?: string;
  liveUrl?: string;
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "seeyaluxe-ecommerce",
    title: "SeeYaLuxe",
    subtitle: "Premium E-commerce Platform",
    problem: "Small businesses struggle to create professional online stores that compete with major retailers, losing potential customers due to poor user experience and limited payment options.",
    approach: "Built a modern, secure e-commerce platform with premium design aesthetics, seamless payment integration, and optimized performance for both desktop and mobile users.",
    solution: "Full-stack e-commerce application with Next.js frontend, secure payment processing, product catalog management, user authentication, shopping cart functionality, and responsive design.",
    impact: "Empowered small businesses with enterprise-level e-commerce capabilities, featuring modern UI/UX that increases customer trust and conversion rates.",
    techStack: ["Next.js", "React", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS", "Node.js"],
    github: "https://github.com/ButtySaylee/seeyaluxe-ecommerce",
    liveUrl: "https://seeyaluxeonlinestore.vercel.app/",
    featured: true,
    image: "/images/projects/seeyaluxe-preview.png"
  },
  {
    id: "gbana-market",
    title: "Gbana Market",
    subtitle: "Local Marketplace Platform",
    problem: "Local vendors lack a centralized platform to reach customers digitally, limiting their market reach and making it difficult for customers to discover local products and services.",
    approach: "Created a comprehensive marketplace platform that connects local vendors with customers, featuring vendor registration, product listings, and customer discovery features.",
    solution: "Modern web application with vendor dashboard, product catalog, search functionality, location-based services, and customer review system to build trust and facilitate local commerce.",
    impact: "Bridged the gap between local vendors and customers, fostering community commerce and supporting small business growth through digital transformation.",
    techStack: ["React", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Vercel"],
    liveUrl: "https://gbanamarket.vercel.app/",
    featured: true,
    image: "/images/projects/gbana-market-preview.png"
  },
  {
    id: "data-insights-generator",
    title: "Data Insights Generator",
    subtitle: "Student Well-being Analytics",
    problem: "Educational institutions struggle to analyze student well-being data efficiently, with manual survey processing taking 10+ hours weekly and delaying critical insights for student support programs.",
    approach: "Developed an automated analytics platform that transforms raw survey data into real-time insights with interactive dashboards, secure data processing, and automated reporting.",
    solution: "Full-stack analytics platform with Python backend, Streamlit interface, MongoDB database, advanced data visualizations, authentication system, and automated PDF report generation.",
    impact: "Achieved 40% efficiency improvement in data processing, analyzed 100+ surveys in real-time, enabling faster data-driven decisions for student well-being and mental health programs.",
    techStack: ["Python", "Streamlit", "MongoDB", "Plotly", "Pandas", "Google Sheets API", "Authentication"],
    github: "https://github.com/ButtySaylee/data-insights-generator-v2",
    liveUrl: "https://apnapanpulse.streamlit.app/",
    featured: true,
    image: "/images/projects/data-insights-generator.png"
  },
  {
    id: "apnapan-platform",
    title: "Apnapan Platform",
    subtitle: "Community Engagement Platform",
    problem: "Organizations struggle to build engaged communities and facilitate meaningful connections between members, leading to poor participation and weak community bonds.",
    approach: "Created a comprehensive platform that enables community building through interactive features, member engagement tools, and seamless communication channels.",
    solution: "Modern web platform with user profiles, community spaces, event management, real-time messaging, content sharing, and analytics to foster active community participation.",
    impact: "Enhanced community engagement and participation, providing organizations with tools to build stronger, more connected communities through digital interaction.",
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/ButtySaylee/apnapan-platform",
    liveUrl: "https://apnapan-platform.vercel.app/",
    featured: true,
    image: "/images/projects/apnapan-platform-preview.png"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Interactive Developer Showcase",
    problem: "Traditional portfolios fail to capture attention in a competitive tech market, making it challenging for developers to stand out and demonstrate both technical skills and design thinking to recruiters.",
    approach: "Crafted a premium, story-driven experience featuring advanced animations, interactive elements, and case study-style project presentations that showcase both development skills and user experience design.",
    solution: "Modern React/Next.js portfolio with sophisticated animations using Framer Motion, gradient mesh backgrounds, scroll-triggered reveals, dark/light theme system, and performance-optimized components.",
    impact: "Created a memorable first impression that demonstrates technical expertise while telling a compelling professional story, significantly improving recruiter engagement and interview opportunities.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Analytics"],
    github: "https://github.com/ButtySaylee/butty-portfolio",
    liveUrl: "https://butty-portfolio.vercel.app/",
    featured: false,
    image: "/images/projects/portfolio-preview.png"
  }
];
