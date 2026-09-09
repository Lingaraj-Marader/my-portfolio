export const personalInfo = {
  name: "Lingaraj Marader",
  firstName: "Lingaraj",
  lastName: "Marader",
  title: "AI/ML Engineer & Full Stack Developer",
  tagline: "Bridging the gap between cutting-edge Machine Learning and high-performance Web Engineering to build intelligent, production-ready digital products.",
  roles: [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Generative AI & LLM Specialist",
    "Python & MERN Architect"
  ],
  bio: [
    "I am an AI/ML Engineer and Full Stack Developer focused on building end-to-end intelligent systems, not just theoretical models. Currently crafting high-impact web applications as a Full Stack Developer at Zeta Coding Innovation.",
    "Previously, as an ML & GenAI Intern at Contriver, I built production-grade AI decision support tools. I have designed and deployed agents like the Resume Screening Agent, combining dense semantic embeddings with LLM-based reasoning for automated candidate evaluation.",
    "Driven by clean architecture, deep algorithmic thinking, and modern web technologies, I love transforming complex data problems into seamless, elegant user experiences."
  ],
  contact: {
    email: "lingarajmarader7@gmail.com",
    phones: ["+91 9535256698", "+91 8618006822"],
    github: "https://github.com/Lingaraj-Marader",
    linkedin: "https://www.linkedin.com/in/lingaraj-marader/",
    location: "Bengaluru, Karnataka, India",
    resumeUrl: "resume.pdf",
    availableForWork: true,
  },
  stats: [
    { label: "Projects Delivered", value: "8+", highlight: "AI & Web" },
    { label: "Tech Stack Tools", value: "15+", highlight: "Mastered" },
    { label: "Screening Precision", value: "95%", highlight: "Semantic Match" },
    { label: "Engineering Dedication", value: "100%", highlight: "Clean Code" },
  ]
};

export const skillsData = [
  {
    category: "AI, ML & Generative AI",
    icon: "Brain",
    description: "Developing intelligent agents, embedding search pipelines, and predictive algorithms.",
    skills: [
      { name: "Generative AI & LLMs", level: 92, tag: "GenAI" },
      { name: "Semantic Embeddings", level: 90, tag: "Vector" },
      { name: "Prompt Engineering", level: 94, tag: "LLMs" },
      { name: "NLP & Text Processing", level: 88, tag: "Core AI" },
      { name: "Scikit-learn", level: 86, tag: "ML" },
      { name: "Model Evaluation & Tuning", level: 85, tag: "Metrics" },
      { name: "Data Preprocessing", level: 90, tag: "Pipelines" },
    ]
  },
  {
    category: "Full Stack Web Development",
    icon: "Layers",
    description: "Building responsive, modern user interfaces and robust scalable backend services.",
    skills: [
      { name: "React.js & Vite", level: 90, tag: "Frontend" },
      { name: "Node.js & Express", level: 88, tag: "Backend" },
      { name: "RESTful API Design", level: 92, tag: "Architecture" },
      { name: "JavaScript (ES6+)", level: 90, tag: "Core Web" },
      { name: "HTML5 & Modern CSS", level: 95, tag: "UI" },
      { name: "Tailwind CSS", level: 94, tag: "Styling" },
      { name: "Component Systems", level: 88, tag: "Design" },
    ]
  },
  {
    category: "Programming & Core Engineering",
    icon: "Code",
    description: "Strong foundation in data structures, algorithms, and object-oriented paradigms.",
    skills: [
      { name: "Python", level: 94, tag: "Primary" },
      { name: "C & C++", level: 82, tag: "Foundational" },
      { name: "Data Structures & Algorithms", level: 88, tag: "CS Core" },
      { name: "Object Oriented Design (OOP)", level: 90, tag: "Clean Code" },
      { name: "Pandas & NumPy", level: 89, tag: "Data Sci" },
    ]
  },
  {
    category: "Databases & Development Tools",
    icon: "Database",
    description: "Database modeling, query optimization, analytics, and modern version control.",
    skills: [
      { name: "MySQL (Relational)", level: 88, tag: "SQL" },
      { name: "MongoDB (NoSQL)", level: 86, tag: "Document" },
      { name: "Git & GitHub", level: 92, tag: "DevOps" },
      { name: "Power BI", level: 84, tag: "BI & Dashboards" },
      { name: "Jupyter Notebook", level: 90, tag: "Analysis" },
      { name: "Postman & VS Code", level: 92, tag: "Productivity" },
      { name: "MS Excel Analytics", level: 85, tag: "Reporting" },
    ]
  }
];

export const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Zeta Coding Innovation",
    location: "Bengaluru, India",
    period: "2026 – Present",
    status: "Current Role",
    badgeColor: "cyan",
    description: "Engineered scalable web applications and resilient micro-services across front-end and back-end layers.",
    achievements: [
      "Architecting responsive frontend interfaces using React, Vite, and Tailwind CSS for interactive client dashboards.",
      "Developing high-throughput REST APIs and backend workflows using Node.js and Express.",
      "Designing and optimizing relational (MySQL) and document (MongoDB) database queries to maintain low-latency responses.",
      "Collaborating on full lifecycle feature delivery, secure authentication, API debugging, and cloud deployment."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "Tailwind CSS"]
  },
  {
    role: "Machine Learning & Generative AI Intern",
    company: "Contriver",
    location: "Bengaluru, India",
    period: "Feb 2026 – May 2026",
    status: "Completed (90-Day Intensive)",
    badgeColor: "violet",
    description: "Applied cutting-edge machine learning and predictive data science techniques to solve real-world industry problems.",
    achievements: [
      "Completed an intensive 90-day production track in Web Development, Machine Learning, and Data Science.",
      "Engineered data cleaning, feature selection, and data transformation pipelines using Python, Pandas, and NumPy.",
      "Contributed to an AI-assisted decision-support system designed to empower train controllers with predictive recommendations during traffic bottlenecks.",
      "Conducted rigorous model evaluation using metrics like precision, recall, confusion matrix, and ROC-AUC curves."
    ],
    tech: ["Python", "Machine Learning", "Generative AI", "Pandas", "NumPy", "Scikit-Learn", "Model Evaluation"]
  }
];

export const projectsData = [
  {
    id: "resume-screening-agent",
    title: "Resume Screening Agent",
    subtitle: "Autonomous Candidate-Job Match Evaluator",
    category: "AI & GenAI",
    description: "An advanced hybrid AI agent combining dense semantic embeddings with LLM-generated chain-of-thought reasoning to analyze resumes, benchmark candidate competence against job specs, and produce natural language hiring rationales.",
    highlights: [
      "Multi-format resume parsing (PDF, DOCX, Text)",
      "High-dimensional vector embeddings for deep semantic match",
      "LLM qualitative justification reports explaining strengths & skill gaps",
      "Automated ranking dashboard reducing manual screening overhead by 80%"
    ],
    tech: ["Python", "Generative AI", "LLM Reasoning", "Vector Embeddings", "NLP", "Scikit-Learn"],
    featured: true,
    github: "https://github.com/Lingaraj-Marader",
    demo: "#",
    metrics: "Semantic AI Scoring"
  },
  {
    id: "hireai-resume-ranker",
    title: "HireAI Resume Ranker",
    subtitle: "Algorithmic ATS Matching Engine",
    category: "Machine Learning",
    description: "A precision machine learning tool that tokenizes, scores, and ranks candidate resumes directly against recruiter job descriptions, identifying critical keyword mismatches and calculating cosine similarity indices.",
    highlights: [
      "Natural Language keyword extraction & TF-IDF vectorization",
      "Algorithmic candidate relevance percentage scoring",
      "Automated summary reports highlighting missing qualifications",
      "Optimized for high-volume recruitment screening workflows"
    ],
    tech: ["Python", "Machine Learning", "NLP", "Pandas", "Scikit-learn", "Data Extraction"],
    featured: true,
    github: "https://github.com/Lingaraj-Marader",
    demo: "#",
    metrics: "Instant ATS Analysis"
  },
  {
    id: "train-controller-ai",
    title: "Train Controller Decision-Support System",
    subtitle: "AI Traffic & Conflict Mitigation",
    category: "AI & Data Science",
    description: "Engineered at Contriver, this decision-support system predicts railway track congestion, evaluates alternative scheduling options, and generates timely recommendations for railway controllers.",
    highlights: [
      "Real-world operational dataset preprocessing and analysis",
      "Predictive delay modeling based on historic schedules",
      "Visual decision dashboard for instant controller situational awareness",
      "Demonstrated measurable reduction in bottleneck escalation"
    ],
    tech: ["Python", "Machine Learning", "Data Pipelines", "NumPy", "Pandas", "Predictive Analytics"],
    featured: false,
    github: "https://github.com/Lingaraj-Marader",
    demo: "#",
    metrics: "Internship Capstone"
  },
  {
    id: "zeta-fullstack-app",
    title: "Full-Stack Enterprise Web Application",
    subtitle: "Scalable MERN Platform with Realtime Analytics",
    category: "Full Stack",
    description: "A production-grade full-stack web application with modular React components, custom responsive styling, JWT-secured RESTful backend, and optimized relational and NoSQL database schemas.",
    highlights: [
      "Responsive, accessible UI with smooth micro-interactions",
      "Secure RESTful API architecture with robust error boundaries",
      "Dual database integration with MySQL and MongoDB",
      "Deployed with modern CI/CD practices"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Tailwind CSS"],
    featured: false,
    github: "https://github.com/Lingaraj-Marader",
    demo: "#",
    metrics: "Production Ready"
  }
];

export const educationData = {
  degree: "Bachelor of Engineering (B.E.)",
  major: "Information Science and Engineering",
  institution: "Sri Taralabalu Jagadguru Institute of Technology (STJIT)",
  location: "Ranebennur, Karnataka",
  graduationYear: "2026",
  highlights: [
    "Specialized coursework in Data Structures, Algorithms, Artificial Intelligence, Database Management, and Full-Stack Web Development.",
    "Active participant in technical hackathons, coding challenges, and open-source project initiatives.",
    "Strong theoretical and practical background in computational problem-solving and software architecture."
  ]
};

export const certificationsData = [
  {
    title: "Full Stack Development",
    issuer: "Dhee Coding Lab",
    icon: "Layers",
    description: "Mastery in end-to-end web architectures, React, Node.js, Express, MongoDB, and production deployment.",
    tag: "Full Stack"
  },
  {
    title: "Python Programming & Core CS",
    issuer: "Certified Specialist",
    icon: "Code",
    description: "Comprehensive Python mastery including OOP, data structures, scripting, and scientific computing packages.",
    tag: "Python"
  },
  {
    title: "MySQL Database Administration & SQL",
    issuer: "Database Systems",
    icon: "Database",
    description: "Relational schema design, complex joins, indexing, query optimization, and transaction management.",
    tag: "Database"
  },
  {
    title: "Power BI Data Visualization & Analytics",
    issuer: "Business Intelligence",
    icon: "BarChart3",
    description: "Building dynamic interactive KPI dashboards, DAX queries, data modeling, and business insights.",
    tag: "Analytics"
  }
];
