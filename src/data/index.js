// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name:     'Andrew Ehab',
  title:    '.NET Full Stack Developer',
  location: 'Cairo, Egypt',
  email:    'andrewehab816@gmail.com',
  phone:    '01205164922',
  linkedin: 'https://www.linkedin.com/in/andrew-ehab-ab50b4322',
  github:   'https://github.com',
  intro:
    'Full-Stack Developer skilled in building scalable web applications, RESTful APIs, and responsive user interfaces.',
  summary:
    'Full-Stack Developer experienced with JavaScript, TypeScript, Git workflows, and databases. Able to quickly understand and work with any codebase.',
};

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    category: 'Frontend',
    icon: '🖥️',
    color: 'from-blue-500 to-indigo-500',
    skills: ['React.js', 'Next.js', 'Angular', 'TypeScript'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-indigo-500 to-purple-500',
    skills: ['ASP.NET Core', 'Web API'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: 'from-purple-500 to-pink-500',
    skills: ['SQL Server', 'Redis'],
  },
  {
    category: 'DevOps',
    icon: '🚀',
    color: 'from-emerald-500 to-teal-500',
    skills: ['Docker', 'CI/CD', 'Git'],
  },
  {
    category: 'Security',
    icon: '🔐',
    color: 'from-orange-500 to-red-500',
    skills: ['JWT', 'OAuth2'],
  },
];

// ─── Home Skills (with levels) ──────────────────────────────────────────────
export const homeSkills = [
  { name: 'ASP.NET Core',  level: 90, icon: '⚙️',  color: 'from-indigo-500 to-purple-500' },
  { name: 'React.js',     level: 85, icon: '⚛️',  color: 'from-cyan-500 to-blue-500'     },
  { name: 'SQL Server',   level: 82, icon: '🗄️',  color: 'from-blue-500 to-indigo-500'   },
  { name: 'TypeScript',   level: 80, icon: '🔷',  color: 'from-blue-400 to-cyan-500'     },
  { name: 'Next.js',      level: 75, icon: '▲',   color: 'from-gray-600 to-gray-800'     },
  { name: 'Docker',       level: 70, icon: '🐳',  color: 'from-sky-500 to-cyan-500'      },
  { name: 'Redis',        level: 68, icon: '🔴',  color: 'from-red-500 to-orange-500'    },
  { name: 'Angular',      level: 65, icon: '🅰️', color: 'from-red-600 to-pink-500'      },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────
export const timeline = [
  {
    year: '2020',
    type: 'education',
    title: 'Canadian International College',
    subtitle: 'B.Sc. Computer Science',
    description: 'Started my CS degree — studied data structures, algorithms, OOP, databases, and software engineering fundamentals.',
    icon: '🎓',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    year: '2021',
    type: 'course',
    title: 'C# & .NET Fundamentals',
    subtitle: 'Udemy — Mosh Hamedani',
    description: 'Deep dive into C# language features, OOP principles, LINQ, async/await, and the .NET ecosystem.',
    icon: '📘',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    year: '2022',
    type: 'course',
    title: 'ASP.NET Core Web API',
    subtitle: 'Udemy — Neil Cummings',
    description: 'Built RESTful APIs with ASP.NET Core, Entity Framework Core, JWT authentication, and clean architecture patterns.',
    icon: '🔌',
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2022',
    type: 'course',
    title: 'React — The Complete Guide',
    subtitle: 'Udemy — Maximilian Schwarzmüller',
    description: 'Mastered React hooks, Context API, Redux Toolkit, React Router, and performance optimization techniques.',
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    year: '2023',
    type: 'course',
    title: 'Docker & CI/CD Pipelines',
    subtitle: 'Udemy — Bret Fisher',
    description: 'Containerizing .NET and Node apps with Docker, Docker Compose, and setting up GitHub Actions CI/CD pipelines.',
    icon: '🐳',
    color: 'from-sky-500 to-cyan-500',
  },
  {
    year: '2023',
    type: 'course',
    title: 'SQL Server & Database Design',
    subtitle: 'ITI — Online Track',
    description: 'Advanced SQL queries, stored procedures, indexing strategies, normalization, and performance tuning.',
    icon: '🗄️',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    year: '2024',
    type: 'education',
    title: 'Graduated — CIC',
    subtitle: 'B.Sc. Computer Science · GPA 3.4',
    description: 'Completed my degree with a graduation project: a full-stack hospital management system built with ASP.NET Core and Angular.',
    icon: '🏆',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    year: '2024',
    type: 'course',
    title: 'Clean Architecture & DDD',
    subtitle: 'Pluralsight — Steve Smith',
    description: 'Applied Domain-Driven Design, CQRS with MediatR, and clean architecture patterns in real .NET projects.',
    icon: '🏗️',
    color: 'from-violet-500 to-purple-500',
  },
];

// ─── Featured Projects (shown on Home) ────────────────────────────────────────
export const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce app with product catalog, cart, Stripe payments, and a real-time admin dashboard.',
    tech: ['ASP.NET Core', 'React', 'SQL Server', 'Redis'],
    color: 'from-blue-400 to-indigo-500',
    emoji: '🛒',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Real-Time Chat App',
    description: 'WebSocket-based chat with rooms, online presence indicators, and full message history using SignalR.',
    tech: ['ASP.NET Core', 'SignalR', 'React', 'Redis'],
    color: 'from-orange-400 to-red-500',
    emoji: '💬',
    github: 'https://github.com',
    live: null,
  },
  {
    title: 'Auth Microservice',
    description: 'Standalone auth service with OAuth2, JWT refresh tokens, email verification, and Docker deployment.',
    tech: ['ASP.NET Core', 'OAuth2', 'JWT', 'Docker'],
    color: 'from-violet-400 to-purple-500',
    emoji: '🔐',
    github: 'https://github.com',
    live: null,
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: '🌐',
    title: 'Full Stack Web Development',
    description:
      'End-to-end web applications using ASP.NET Core on the backend and React/Next.js on the frontend — scalable, maintainable, and production-ready.',
  },
  {
    icon: '🔌',
    title: 'RESTful API Development',
    description:
      'Clean, well-documented REST APIs with proper authentication, validation, error handling, and versioning using ASP.NET Core Web API.',
  },
  {
    icon: '📱',
    title: 'Responsive UI Development',
    description:
      'Pixel-perfect, mobile-first interfaces built with React, TypeScript, and Tailwind CSS that look great on every screen size.',
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description:
      'Profiling and optimizing both frontend and backend — lazy loading, caching with Redis, query optimization, and bundle size reduction.',
  },
  {
    icon: '🐛',
    title: 'Debugging & Problem Solving',
    description:
      'Systematic debugging, root-cause analysis, and refactoring of legacy codebases to improve reliability and developer experience.',
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce app with product catalog, cart, Stripe payments, and an admin dashboard.',
    tech: ['ASP.NET Core', 'React', 'SQL Server', 'Redis'],
    color: 'from-blue-400 to-indigo-500',
    emoji: '🛒',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management API',
    description:
      'RESTful API for a Kanban board with JWT auth, real-time updates via SignalR, and role-based access control.',
    tech: ['ASP.NET Core', 'Web API', 'SQL Server', 'JWT'],
    color: 'from-purple-400 to-pink-500',
    emoji: '📋',
    github: 'https://github.com',
    live: null,
  },
  {
    title: 'Blog CMS',
    description:
      'Content management system with rich-text editor, image uploads, SEO metadata, and a Next.js frontend.',
    tech: ['Next.js', 'TypeScript', 'ASP.NET Core', 'SQL Server'],
    color: 'from-emerald-400 to-teal-500',
    emoji: '✍️',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Real-Time Chat App',
    description:
      'WebSocket-based chat application with rooms, online presence, and message history using SignalR.',
    tech: ['ASP.NET Core', 'SignalR', 'React', 'Redis'],
    color: 'from-orange-400 to-red-500',
    emoji: '💬',
    github: 'https://github.com',
    live: null,
  },
  {
    title: 'Angular Dashboard',
    description:
      'Admin analytics dashboard with charts, data tables, filters, and role-based views built in Angular.',
    tech: ['Angular', 'TypeScript', 'ASP.NET Core', 'SQL Server'],
    color: 'from-cyan-400 to-blue-500',
    emoji: '📊',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Auth Microservice',
    description:
      'Standalone authentication service with OAuth2, JWT refresh tokens, email verification, and Docker deployment.',
    tech: ['ASP.NET Core', 'OAuth2', 'JWT', 'Docker'],
    color: 'from-violet-400 to-purple-500',
    emoji: '🔐',
    github: 'https://github.com',
    live: null,
  },
];
