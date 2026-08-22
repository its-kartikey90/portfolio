// ============================================================
//  PORTFOLIO DATA — update this file to personalise everything
// ============================================================

export const personal = {
  name: 'Kartikey Dixit',
  firstName: 'Kartikey',
  title: 'Creative Developer & Digital Problem Solver',
  tagline: 'I build modern websites, applications, and digital experiences that leave a lasting impression.',
  bio: `I'm a passionate full-stack developer with a love for crafting beautiful, performant, and accessible digital experiences. My journey started with curiosity about how the web works, and it evolved into a deep expertise in modern JavaScript ecosystems, UI/UX principles, and scalable software architecture.

I thrive at the intersection of design and engineering — turning complex problems into elegant solutions that users love. Whether it's a lightning-fast landing page, a data-driven dashboard, or a full-stack SaaS product, I bring the same level of care and craft to every project.`,
  availability: 'Available for Freelance Projects',
  location: 'Uttar Pradesh ,Lucknow , India',
  email: 'dixitkartikey172@gmail.com',        // ← replace
  phone: '+91 9235256629',              // ← replace
  resumeUrl: 'https://www.canva.com/design/DAHS6G7bN_4/Hkps8-76lP7_YpnzkHt3gA/view',                          // ← replace with your resume PDF URL

  social: {
    github:    'https://github.com/its-kartikey90',     // ← replace
    linkedin:  'https://www.linkedin.com/in/kartikey-dev/' // ← replace
       // ← replace
  },

  stats: [
    { label: 'Projects Completed', value: 40, suffix: '+' },
    { label: 'Technologies',        value: 20, suffix: '+' },
    { label: 'Certificates',        value: 12, suffix: '' },
    { label: 'Years of Learning',   value: 4,  suffix: '+' },
  ],
}

// ---- Skills ------------------------------------------------
export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#6366f1',
    skills: [
      { name: 'HTML5',       icon: 'SiHtml5',       level: 'Expert',    color: '#e34f26' },
      { name: 'CSS3',        icon: 'SiCss',         level: 'Expert',    color: '#1572b6' },
      { name: 'JavaScript',  icon: 'SiJavascript',  level: 'Advanced',  color: '#f7df1e' },
      { name: 'React',       icon: 'SiReact',       level: 'Advanced',  color: '#61dafb' },
      { name: 'Tailwind CSS',icon: 'SiTailwindcss', level: 'Advanced',  color: '#06b6d4' },
    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    color: '#8b5cf6',
    skills: [
      { name: 'C',      icon: 'SiC',          level: 'Intermediate', color: '#a8b9cc' },
      { name: 'C++',    icon: 'SiCplusplus',   level: 'Intermediate', color: '#00599c' },
      { name: 'Java',   icon: 'SiOpenjdk',     level: 'Intermediate', color: '#ed8b00' },
      { name: 'Python', icon: 'SiPython',      level: 'Advanced',     color: '#3776ab' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#06b6d4',
    skills: [
      { name: 'Node.js',  icon: 'SiNodedotjs', level: 'Advanced',     color: '#339933' },
      { name: 'Express',  icon: 'SiExpress',   level: 'Advanced',     color: '#ffffff' },
      { name: 'MongoDB',  icon: 'SiMongodb',   level: 'Intermediate', color: '#47a248' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    color: '#10b981',
    skills: [
      { name: 'Git',    icon: 'SiGit',    level: 'Advanced',     color: '#f05032' },
      { name: 'GitHub', icon: 'SiGithub', level: 'Advanced',     color: '#ffffff' },
      { name: 'VS Code',icon: 'SiVSCode', level: 'Expert', color: '#007acc' },
      { name: 'Figma',  icon: 'SiFigma',  level: 'Intermediate', color: '#f24e1e' },
    ],
  },
]

// ---- Projects ----------------------------------------------
export const projects = [
  {
    id: 1,
    title: 'DevFlow — Project Management SaaS',
    shortDesc: 'A full-stack SaaS platform for agile teams with real-time collaboration, Kanban boards, and sprint analytics.',
    category: ['Full Stack', 'React'],
    image: null,
    color: '#6366f1',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/devflow',   // ← replace
    live: 'https://devflow.example.com',                  // ← replace
    featured: true,
    overview: 'DevFlow is a modern project management platform designed to help development teams collaborate in real time, track progress, and ship features faster.',
    problem: 'Existing tools are either too complex for small teams or too limited for growing startups.',
    solution: 'A clean, real-time Kanban system with smart sprint analytics built on the MERN stack.',
    features: ['Real-time Kanban boards', 'Sprint planning & velocity tracking', 'Team workload visualisation', 'Slack & GitHub integrations', 'Role-based permissions'],
    challenges: ['Implementing conflict-free real-time updates using Socket.io', 'Optimising MongoDB aggregation pipelines for analytics at scale'],
    results: ['40% faster sprint delivery for pilot teams', '3,000+ sign-ups in the first month', '4.8 / 5 user satisfaction rating'],
  },
  {
    id: 2,
    title: 'Luminary — Design System & Component Library',
    shortDesc: 'An open-source React component library with 60+ accessible, themeable components and a Storybook documentation site.',
    category: ['React', 'UI/UX'],
    image: null,
    color: '#8b5cf6',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Radix UI'],
    github: 'https://github.com/yourusername/luminary',
    live: 'https://luminary.example.com',
    featured: true,
    overview: 'Luminary is a production-ready design system that helps teams build consistent, accessible UIs at speed.',
    problem: 'Rebuilding UI components from scratch for every project wastes weeks of engineering time.',
    solution: 'A composable, fully accessible component library with first-class TypeScript support and a live documentation site.',
    features: ['60+ accessible components', 'Dark & light themes', 'Radix UI primitives', 'Full keyboard navigation', 'Storybook + Chromatic CI'],
    challenges: ['Maintaining WCAG 2.1 AA compliance across all components', 'Tree-shaking bundle to keep install size minimal'],
    results: ['Used in 12+ production projects', '200+ GitHub stars', 'Bundle size < 45 kB gzipped'],
  },
  {
    id: 3,
    title: 'Shopwave — E-Commerce Platform',
    shortDesc: 'A performant, SEO-optimised e-commerce storefront with a headless CMS, Stripe payments, and sub-second page loads.',
    category: ['Full Stack', 'Web Development'],
    image: null,
    color: '#06b6d4',
    tags: ['React', 'Next.js', 'Stripe', 'Sanity CMS', 'Vercel'],
    github: 'https://github.com/yourusername/shopwave',
    live: 'https://shopwave.example.com',
    featured: false,
    overview: 'Shopwave is a headless commerce platform built for speed, scalability, and developer experience.',
    problem: 'Traditional e-commerce platforms are slow, inflexible, and hard to customise.',
    solution: 'A headless Next.js storefront with Sanity CMS for content and Stripe for payments, deployed on Vercel edge.',
    features: ['< 1s Time to Interactive', 'Headless CMS with live previews', 'Stripe Checkout & subscriptions', 'Personalised product recommendations', 'Inventory management dashboard'],
    challenges: ['ISR cache invalidation strategy for real-time stock updates', 'Implementing personalised recommendations without sacrificing page speed'],
    results: ['Core Web Vitals all green', '35% higher conversion vs previous platform', '$120 k in GMV processed in beta'],
  },
  {
    id: 4,
    title: 'Aura — AI-Powered Writing Assistant',
    shortDesc: 'A browser extension and web app that uses AI to improve writing clarity, tone, and grammar in real time.',
    category: ['Web Development', 'JavaScript'],
    image: null,
    color: '#ec4899',
    tags: ['JavaScript', 'OpenAI API', 'Chrome Extension', 'React', 'Express'],
    github: 'https://github.com/yourusername/aura',
    live: 'https://aura.example.com',
    featured: false,
    overview: 'Aura is an AI writing companion that gives context-aware suggestions as you type across any website.',
    problem: 'Writers waste time switching between writing tools and grammar checkers.',
    solution: 'A lightweight Chrome extension powered by GPT-4 that provides inline suggestions without leaving the page.',
    features: ['Inline grammar & tone suggestions', 'Custom style profiles', 'Works on Gmail, Notion, Docs', 'Offline fallback mode', 'Privacy-first — no text stored'],
    challenges: ['Minimising latency for real-time suggestions', 'Handling content editable elements consistently across sites'],
    results: ['5,000+ extension installs', '4.7 / 5 Chrome Web Store rating', '15 min avg. time saved per user per day'],
  },
  {
    id: 5,
    title: 'Pulse — Developer Dashboard',
    shortDesc: 'A customisable personal dashboard that aggregates GitHub activity, tasks, weather, and news in one glanceable view.',
    category: ['React', 'JavaScript'],
    image: null,
    color: '#10b981',
    tags: ['React', 'GitHub API', 'Tailwind CSS', 'PWA', 'Vite'],
    github: 'https://github.com/yourusername/pulse',
    live: 'https://pulse.example.com',
    featured: false,
    overview: 'Pulse is a developer-first new-tab dashboard with drag-and-drop widgets and deep GitHub integration.',
    problem: 'Developers juggle too many tabs and tools to stay in flow.',
    solution: 'A single, beautiful, customisable dashboard that surfaces the information that matters most.',
    features: ['GitHub contributions heatmap', 'Drag-and-drop widget grid', 'Focus timer (Pomodoro)', 'Real-time weather & news', 'Offline-capable PWA'],
    challenges: ['GitHub API rate limiting for high-frequency users', 'Persisting layout across devices with no backend'],
    results: ['2,000+ weekly active users', 'Featured on Product Hunt (#3 of the day)', '98 Lighthouse performance score'],
  },
  {
    id: 6,
    title: 'Portfolio v1 — Personal Brand Site',
    shortDesc: 'My first-generation personal portfolio with smooth animations, dark mode, and a custom CMS for blog posts.',
    category: ['UI/UX', 'Web Development'],
    image: null,
    color: '#f59e0b',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'MDX', 'Netlify'],
    github: 'https://github.com/yourusername/portfolio-v1',
    live: 'https://alexmorgan.dev',
    featured: false,
    overview: 'The first public version of my personal brand site — a showcase of my skills, projects, and writing.',
    problem: 'A developer without a portfolio is like a chef without a menu.',
    solution: 'A fast, accessible, beautifully animated site built with React and MDX for zero-config blogging.',
    features: ['MDX-powered blog', 'Dark / light mode', 'Framer Motion page transitions', 'RSS feed', 'Sitemap & SEO optimised'],
    challenges: ['Getting MDX to work seamlessly with React Router', 'Keeping animation performance smooth on low-end devices'],
    results: ['500+ monthly unique visitors', 'Landed 3 freelance clients', '100 / 100 Lighthouse SEO score'],
  },
]

// ---- Experience --------------------------------------------
export const experiences = [
 
  {
    id: 2,
    type: 'work',
    organisation: 'Freelance',
    role: 'Full-Stack Developer',
    period: 'Jan 2024 – Jun 2025',
    location: 'Remote',
    description: 'Delivered 15+ end-to-end web projects for clients across e-commerce, SaaS, and creative agencies. Specialised in React frontends, Node/Express APIs, and MongoDB data layers.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    color: '#8b5cf6',
  },
  {
    id: 3,
    type: 'education',
    organisation: 'Maharishi University of Information and Technology',
    role: 'Batchelor of computer application',
    period: '2025 – 2028',
    location: 'Uttar Pradesh,Lucknow,India',
    description: 'Pursuing a degree in Computer Science with a focus on software engineering and human-computer interaction. CGPA 9.8 / 10.0. Active member of the ACM student chapter.',
    skills: ['Data Structures', 'Algorithms', 'OS', 'Databases', 'HCI'],
    color: '#06b6d4',
  },
  {
    id: 4,
    type: 'education',
    organisation: 'IBM + freeCodeCamp',
    role: 'Self-Directed Web Development',
    period: '2025 – 2026',
    location: 'offline + Online',
    description: 'Completed comprehensive full-stack curricula covering HTML, CSS, JavaScript, React, Node.js, and databases. Built 30+ projects from scratch with zero hand-holding.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    color: '#10b981',
  },
]

// ---- Services ----------------------------------------------
export const services = [
  {
    id: 1,
    icon: 'Globe',
    title: 'Web Development',
    description: 'Full-stack web applications built with modern technologies. From concept to deployment — fast, secure, and scalable.',
    features: ['Custom architecture', 'REST & GraphQL APIs', 'Database design', 'Cloud deployment', 'CI/CD pipelines'],
    color: '#6366f1',
  },
  {
    id: 2,
    icon: 'Layers',
    title: 'React Development',
    description: 'High-performance React applications with clean code, reusable components, and excellent developer experience.',
    features: ['Component libraries', 'State management', 'Performance optimisation', 'Testing (Jest / RTL)', 'JavaScript'],
    color: '#8b5cf6',
  },
  {
    id: 3,
    icon: 'Paintbrush',
    title: 'UI/UX Implementation',
    description: 'Pixel-perfect implementation of designs with smooth animations and micro-interactions that delight users.',
    features: ['Figma to code', 'Framer Motion', 'Accessibility (WCAG)', 'Design systems', 'Cross-browser testing'],
    color: '#ec4899',
  },
  {
    id: 4,
    icon: 'Zap',
    title: 'Landing Pages',
    description: 'Conversion-optimised landing pages that load instantly and communicate your value proposition clearly.',
    features: ['Sub-1s load times', 'A/B test ready', 'Analytics integration', 'SEO optimised', 'Mobile-first'],
    color: '#06b6d4',
  },
  {
    id: 5,
    icon: 'User',
    title: 'Portfolio Websites',
    description: 'Standout personal brand sites that showcase your work and attract the right clients and opportunities.',
    features: ['Unique designs', 'Blog / CMS', 'Dark & light modes', 'Contact forms', 'Domain & hosting setup'],
    color: '#10b981',
  },
  {
    id: 6,
    icon: 'BarChart2',
    title: 'Website Optimisation',
    description: 'Audit and improve existing websites for speed, accessibility, SEO, and overall user experience.',
    features: ['Lighthouse audits', 'Core Web Vitals', 'Image optimisation', 'Code splitting', 'Caching strategies'],
    color: '#f59e0b',
  },
]

// ---- Achievements ------------------------------------------
export const achievements = [
  {
    id: 1,
    type: 'certificate',
    title: ' Front-End Developer Certificate',
    issuer: 'IBM',
    date: 'MARCH 2026',
    description: 'Completed the 9-course professional certificate covering  JavaScript, HTML/CSS, and UX design principles.',
    color: '#6366f1',
    badge: '🏅',
  },
  {
    id: 2,
    type: 'certificate',
    title: 'Libre office ',
    issuer: 'IIT BOMBAY',
    date: 'May 2025',
    description: 'Deep dive into office automation',
    color: '#8b5cf6',
    badge: '🎓',
  }
]

// ---- Testimonials ------------------------------------------
export const testimonials = [
  {
    id: 1,
    name: 'Devendra yadav',
    role: 'CTO, TechNova Labs',
    avatar: null,
    initials: 'SC',
    rating: 5,
    text: "Kartikey delivered a flawless React dashboard in record time. The code quality was exceptional — well-structured, fully tested, and easy to maintain. Exactly the kind of engineer you want on your team.",
    color: '#6366f1',
  },
  {
    id: 2,
    name: 'Avinash',
    role: null,
    avatar: null,
    initials: 'MR',
    rating: 5,
    text: "Working with Kartikey was a pleasure from start to finish. He took our vague brief and turned it into a stunning e-commerce platform that converted 35% better than our old site. Highly recommend.",
    color: '#8b5cf6',
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Product Manager, DevCorp',
    avatar: null,
    initials: 'PP',
    rating: 5,
    text: "Kartikey has a rare combination of strong technical skills and great design sensibility. He redesigned our company site and the feedback from stakeholders was overwhelmingly positive.",
    color: '#06b6d4',
  }
]
