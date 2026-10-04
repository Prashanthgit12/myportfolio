export const personalInfo = {
  name: "Borra Prashanth",
  title: "Java Full Stack Developer",
  avatar: "/profile.jpg",
  roleHeadline: "Java Full Stack Developer | Distributed Microservices & Real-Time Web Specialist",
  tagline: "Engineering scalable web applications, real-time engines, and robust microservice architectures.",
  bio: "Passionate Full Stack Software Engineer with a deep foundation in Core & Advanced Java, Spring Boot, React.js, and Distributed Databases. Proven track record of developing high-throughput real-time platforms (IPL Auction Engine, Online Coding Judges) and enterprise-grade RESTful APIs. Graduated with a 9.1 CGPA from Sree Vidyanikethan Engineering College.",
  email: "prashanth9392557522@gmail.com",
  phone: "+91 9392557522",
  phoneRaw: "+919392557522",
  location: "Hyderabad / Tirupati, India (Open to Remote & Relocation)",
  github: "https://github.com/Prashanthgit12",
  githubUsername: "Prashanthgit12",
  linkedin: "https://linkedin.com/in/borra-prashanth",
  linkedinUsername: "borra-prashanth",
  availability: "Actively Open to Full-Time SDE & Full Stack Opportunities",
  stats: [
    { label: "B.Tech CGPA", value: "9.1", suffix: "/ 10.0", description: "Computer Science & Engineering" },
    { label: "Technical Coursework", value: "600", suffix: "+ Hrs", description: "Java Full Stack Immersion" },
    { label: "Full Stack Apps", value: "4", suffix: "+", description: "Production-ready architectures" },
    { label: "Latency Reduction", value: "30", suffix: "%", description: "Query & API optimizations" },
  ]
};

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks & Backend" },
  { id: "databases", label: "Databases & Storage" },
  { id: "tools", label: "Tools & Cloud" },
  { id: "methodologies", label: "Methodologies" }
];

export const skillsData = [
  // Languages
  { name: "Java (Core & Advanced)", category: "languages", level: 92, icon: "Coffee", highlight: "OOP, Multithreading, Streams API, Collections" },
  { name: "JavaScript (ES6+)", category: "languages", level: 88, icon: "Code2", highlight: "Async/Await, Promises, Closures, DOM" },
  { name: "SQL", category: "languages", level: 90, icon: "Database", highlight: "Complex Queries, Joins, Triggers, Query Indexing" },
  { name: "HTML5 & CSS3", category: "languages", level: 90, icon: "Layout", highlight: "Flexbox, CSS Grid, Semantic HTML, Responsive Design" },

  // Frameworks & Backend
  { name: "Spring Boot", category: "frameworks", level: 90, icon: "Layers", highlight: "REST APIs, Spring Data JPA, Security, Microservices" },
  { name: "React.js", category: "frameworks", level: 88, icon: "Atom", highlight: "Hooks, Context API, Virtual DOM, Component LifeCycle" },
  { name: "Node.js & Express.js", category: "frameworks", level: 85, icon: "Server", highlight: "Event Loop, Middleware, REST Services, Clustering" },
  { name: "Hibernate / JPA", category: "frameworks", level: 86, icon: "Boxes", highlight: "Entity Relationships, ORM, Caching, JPQL" },
  { name: "Bootstrap & Material-UI", category: "frameworks", level: 88, icon: "Palette", highlight: "UI Systems, Custom Theming, Accessibility" },
  { name: "Axios", category: "frameworks", level: 90, icon: "Send", highlight: "HTTP Interceptors, Request Handling, JWT Headers" },

  // Databases
  { name: "MySQL", category: "databases", level: 88, icon: "Database", highlight: "Relational Schema Design, Normalization, ACID" },
  { name: "PostgreSQL (Neon DB)", category: "databases", level: 86, icon: "HardDrive", highlight: "Cloud Postgres, Vector/Index Tuning, Connection Pools" },
  { name: "MongoDB Atlas", category: "databases", level: 85, icon: "Cpu", highlight: "Document Modeling, Aggregation Pipelines, Sharding" },

  // Tools & Cloud
  { name: "Docker", category: "tools", level: 80, icon: "Box", highlight: "Containerization, Multi-stage Builds, Microservice Deploy" },
  { name: "Git & GitHub", category: "tools", level: 92, icon: "GitBranch", highlight: "Version Control, Feature Branching, Pull Requests" },
  { name: "Postman", category: "tools", level: 90, icon: "Terminal", highlight: "API Testing, Automated Collections, Environment Variables" },
  { name: "Vercel & Render", category: "tools", level: 85, icon: "Cloud", highlight: "Continuous Deployment, Environment Secrets, Edge CDN" },
  { name: "Maven & npm", category: "tools", level: 88, icon: "Package", highlight: "Dependency Management, Build Automation, Scripts" },

  // Methodologies
  { name: "Agile / Scrum", category: "methodologies", level: 90, icon: "CheckCircle2", highlight: "Sprint Planning, Daily Standups, Retrospectives" },
  { name: "RESTful Microservices", category: "methodologies", level: 88, icon: "Network", highlight: "Loose Coupling, API Gateway, Stateless Auth" },
  { name: "Real-Time WebSockets", category: "methodologies", level: 90, icon: "Zap", highlight: "Socket.IO, Event-Driven Architecture, Low-Latency Bids" }
];

export const experienceData = [
  {
    role: "Full Stack Developer (Academic & Projects)",
    company: "Independent Software Projects",
    location: "Hyderabad, India",
    period: "Jul 2024 – Present",
    type: "Full Stack Engineering",
    highlights: [
      "Designed and launched production-ready web applications leveraging MERN and Java Spring Boot tech stacks with 99.9% uptime.",
      "Architected end-to-end software solutions, including relational/document database indexing, REST API integrations, and cloud deployments on Render & Vercel.",
      "Built resilient socket-based real-time communication engines and code compilation sandboxes capable of handling concurrent client sessions.",
      "Applied strict test-driven paradigms, Postman collection automation, and modular clean-architecture guidelines."
    ],
    skills: ["Java", "Spring Boot", "React.js", "Node.js", "Socket.IO", "PostgreSQL", "Docker", "REST APIs"],
    metrics: [
      { label: "System Uptime", value: "99.9%" },
      { label: "Real-time Latency", value: "<150ms" },
      { label: "Deployment Frequency", value: "Weekly" }
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "CIT Internship Studio",
    location: "Remote / Hybrid",
    period: "Apr 2024 – Jun 2024",
    type: "Internship",
    highlights: [
      "Streamlined internal application workflows by 25% and reduced data retrieval response time by 30% across 5+ operational tools.",
      "Improved REST API throughput by 20% through endpoint logic optimization and database query indexing during Agile sprints.",
      "Collaborated with cross-functional engineering teams to triage and resolve production defects, enhancing accessibility and frontend UX.",
      "Authored API documentation and conducted comprehensive integration testing using Postman to minimize regression defects."
    ],
    skills: ["Spring Boot", "React.js", "SQL Tuning", "REST APIs", "Agile / Scrum", "Postman"],
    metrics: [
      { label: "Response Time Cut", value: "30%" },
      { label: "Throughput Boost", value: "+20%" },
      { label: "Tools Streamlined", value: "5+" }
    ]
  }
];

export const projectsData = [
  {
    id: "auctionx",
    title: "AuctionX",
    subtitle: "Real-Time IPL Virtual Auction Platform",
    tagline: "Sub-second real-time bidding platform simulating high-stakes cricket player auctions.",
    featured: true,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#06b6d4",
    metrics: [
      { label: "Latency", value: "<100ms" },
      { label: "Franchise Purse", value: "₹120 Cr" },
      { label: "Concurrency", value: "10+ Live Teams" }
    ],
    summary: "Architected a sub-second real-time bidding engine powered by Socket.IO, enabling seamless synchronized live auctions across concurrent team franchise war rooms.",
    highlights: [
      "Architected sub-second real-time bidding engine using Socket.IO for 10+ simultaneous user franchise sessions.",
      "Devised dynamic budget validation algorithms tracking ₹120 Cr franchise purses with instant validation against minimum squad constraints.",
      "Engineered an interactive Admin War Room Portal for master auction timers, rapid bid increments, player queueing, and bilateral trade desks.",
      "Constructed stateless JWT authentication and role-based access for franchise owners vs. auctioneer moderators.",
      "Deployed distributed microservice architecture on Vercel (frontend) and Render (backend) linked to MongoDB Atlas."
    ],
    architecture: {
      client: "React.js dynamic dashboard with reactive sound triggers, live bid feed ticker, and real-time purse visualizer.",
      server: "Node.js & Express.js event loop with custom Socket.IO room broadcasters and idempotent bid handling.",
      database: "MongoDB Atlas with compound indexes for real-time player states and audit logs.",
      security: "Stateless JWT authorization with trade desk permission verification."
    },
    demoUrl: "https://iplauctiongame-taupe.vercel.app/",
    githubUrl: "https://github.com/Prashanthgit12/IPL-Auction-Platform",
  },
  {
    id: "algox",
    title: "AlgoX",
    subtitle: "Online Coding & Automated Assessment Platform",
    tagline: "Scalable competitive programming judge with sandboxed multi-language execution.",
    featured: true,
    tech: ["React.js", "Spring Boot", "PostgreSQL", "Neon DB", "Bootstrap", "Axios"],
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    accentColor: "#6366f1",
    metrics: [
      { label: "Latency Cut", value: "35%" },
      { label: "Problem Bank", value: "500+" },
      { label: "Supported Runtimes", value: "Java, Python, JS" }
    ],
    summary: "Built a high-performance online coding platform with multi-language submission pipelines and automated test evaluation against PostgreSQL database.",
    highlights: [
      "Built multi-language code execution engine evaluating Java, Python, and JavaScript against automated test suites.",
      "Engineered asynchronous submission pipelines, cutting execution latency by 35% under concurrent load.",
      "Optimized PostgreSQL schema query indexing across a comprehensive catalog of 500+ algorithmic problems.",
      "Developed interactive code editor with syntax highlighting, custom test case runners, and real-time pass/fail feedback.",
      "Implemented robust exception handling and resource timeouts to protect system stability during execution."
    ],
    architecture: {
      client: "React.js with Monaco-style editor interface, tabbed testcase runner, and dynamic difficulty filtering.",
      server: "Spring Boot RESTful microservices with asynchronous thread pools for compilation and testing queues.",
      database: "PostgreSQL on Neon DB with B-Tree indexes on problem tags and user submission history.",
      security: "Sandboxed process execution with strict CPU time and memory thresholds."
    },
    githubUrl: "https://github.com/Prashanthgit12/AlgoX-Platform",
  },
  {
    id: "quillhub",
    title: "QuillHub",
    subtitle: "Full Stack Content & Tech Blog Platform",
    tagline: "Enterprise-grade publishing system with 3-tier Role-Based Access Control and rich Markdown support.",
    featured: true,
    tech: ["React.js", "Spring Boot", "MySQL", "Material-UI", "JWT", "Hibernate"],
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accentColor: "#a855f7",
    metrics: [
      { label: "Access Tiers", value: "3 Roles" },
      { label: "Auth Paradigm", value: "Stateless JWT" },
      { label: "Database", value: "MySQL ACID" }
    ],
    summary: "Engineered a production-ready publishing platform featuring multi-tier Role-Based Access Control (Admin, Editor, Reader) and Hibernate JPA relational mapping.",
    highlights: [
      "Engineered full-stack blogging platform featuring Role-Based Access Control (RBAC) across 3 distinct authorization tiers.",
      "Configured stateless JWT token lifecycle with auto-refresh and secure HTTP cookies to prevent XSS/CSRF exploits.",
      "Utilized Hibernate/JPA to manage relational entities (Users, Posts, Categories, Comments) with optimized eager/lazy fetching.",
      "Integrated Material-UI components with customized dark mode styling, markdown previewer, and draft auto-saving."
    ],
    architecture: {
      client: "React.js frontend with Material-UI theming, Markdown parser, and category-driven exploration feed.",
      server: "Spring Boot application with Spring Security filter chain and JPA repositories.",
      database: "MySQL with normalized 3NF schemas and cascading referential integrity.",
      security: "Role-based `@PreAuthorize` method level access control protecting administrative endpoints."
    },
    githubUrl: "https://github.com/Prashanthgit12/QuillHub-Blog",
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Sree Vidyanikethan Engineering College",
    period: "2021 – 2025",
    score: "CGPA: 9.1 / 10.0",
    badge: "First Class with Distinction",
    details: "Core focus on Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Object-Oriented Software Engineering."
  },
  {
    degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
    institution: "Sri Chaitanya Junior College",
    period: "2019 – 2021",
    score: "Percentage: 96.0%",
    badge: "State Top Tier",
    details: "Strong mathematical foundation, analytical problem solving, and logical reasoning."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Vishnu Vidya Mandir High School",
    period: "2018 – 2019",
    score: "GPA: 9.5 / 10.0",
    badge: "Academic Excellence Award",
    details: "Solid academic foundation with distinction in Science, Mathematics, and Computer Basics."
  }
];

export const certificationsData = [
  {
    title: "Java Full Stack Development Certification",
    issuer: "Elearn Info Tech",
    period: "Oct 2025 – Apr 2026",
    duration: "600+ Hours Coursework",
    credentialId: "ELIT-FS-2024-BP",
    description: "600+ hours of rigorous technical coursework covering Core & Advanced Java, Spring Boot, React.js, Hibernate/JPA, and SQL database architecture. Successfully conceptualized and built 4 full-stack applications.",
    skillsGained: ["Core & Advanced Java", "Spring Boot Microservices", "React.js Frontend", "RESTful Architecture", "Hibernate ORM", "SQL & Database Design"]
  }
];
