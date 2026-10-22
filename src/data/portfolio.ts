// All site content lives here so it can be updated without touching components.
// Keep every claim verifiable: only link repositories and demos that exist.

export const profile = {
  name: 'Nisha Kumari',
  shortName: 'Nisha',
  roles: ['Junior Software Developer', 'Web Developer', 'Aspiring AI/ML Engineer'],
  email: 'guptanisha702@gmail.com',
  github: 'https://github.com/Nishagupta2212',
  linkedin: 'https://www.linkedin.com/in/nisha-kumari22/',
  resume: '/Nisha_Kumari_Resume.pdf',
  location: 'Chandigarh, India',
  education: {
    school: 'Chandigarh University',
    degree: 'B.Tech, Information Technology',
    years: '2022 – 2026',
  },
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export type SkillGroup = {
  title: string
  icon: 'code' | 'layout' | 'server' | 'database' | 'brain' | 'tool'
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'Programming Languages', icon: 'code', skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java'] },
  { title: 'Frontend Development', icon: 'layout', skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Responsive design'] },
  { title: 'Backend Development', icon: 'server', skills: ['Node.js', 'Express.js', 'REST APIs', 'Flask', 'JWT auth'] },
  { title: 'Databases', icon: 'database', skills: ['MongoDB', 'MySQL', 'Firebase Firestore'] },
  { title: 'AI and Machine Learning', icon: 'brain', skills: ['Machine Learning', 'Scikit-learn', 'TensorFlow', 'Keras', 'Pandas', 'NumPy'] },
  { title: 'Tools and Technologies', icon: 'tool', skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'Vercel'] },
]

export const foundations = ['Data Structures & Algorithms', 'Object-Oriented Programming', 'API integration', 'Authentication flows']

export type ProjectVisual = 'tasks' | 'store' | 'model' | 'auth' | 'vision' | 'contacts'

export type Project = {
  name: string
  category: string
  description: string
  features: string[]
  tech: string[]
  visual: ProjectVisual
  repo?: string
  demo?: string
  // Shown when a project has no public repository yet.
  note?: string
}

export const projects: Project[] = [
  {
    name: 'TeamTask — Task Management System',
    category: 'Web application',
    description:
      'A team task manager where admins create projects and assign tasks, and members track their own work from a personal dashboard.',
    features: [
      'Firebase sign-up and login with protected routes',
      'Admin and member roles, with admin approval for new users',
      'Tasks with assignees, due dates and To do / In progress / Completed status',
    ],
    tech: ['React', 'TypeScript', 'Firebase', 'React Router'],
    visual: 'tasks',
    repo: 'https://github.com/Nishagupta2212/task_manager',
    demo: 'https://authentication-system-login-signup-blond.vercel.app',
  },
  {
    name: 'GayaSpices — E-commerce Storefront',
    category: 'Frontend web app',
    description:
      'A multi-page online spice store with a 100+ product catalogue, search, cart and a demo checkout flow. Accounts and orders are stored in the browser.',
    features: [
      'Product search, wishlist and persistent cart',
      'Checkout form validation with React Hook Form and Zod',
      'Coupon codes, order history and account pages',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Zod'],
    visual: 'store',
    repo: 'https://github.com/Nishagupta2212/GayaSpices',
    demo: 'https://gaya-spices.vercel.app',
  },
  {
    name: 'Diabetes Disease Detection',
    category: 'Machine learning',
    description:
      'A web app that estimates diabetes risk from eight health measurements, using a classifier trained on the PIMA Indians Diabetes dataset.',
    features: [
      'Compares SVM, Random Forest and Logistic Regression with grid search',
      'Treats impossible zero readings as missing and imputes medians',
      'Flask web interface (plus a Streamlit version) for instant predictions',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
    visual: 'model',
    repo: 'https://github.com/Nishagupta2212/Diabetes_Disease_detection',
    demo: 'https://diabetes-disease-detection-p9t8.vercel.app',
  },
  {
    name: 'MERN Authentication System',
    category: 'Full-stack',
    description:
      'An authentication and user-management starter with an Express + MongoDB API and a React client for signup, login and profile management.',
    features: [
      'JWT authentication with bcrypt password hashing',
      'Request validation with express-validator',
      'Password reset, profile update/delete and an admin user list',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    visual: 'auth',
    repo: 'https://github.com/Nishagupta2212/Authentication-System-Login-Signup-page-',
  },
  {
    name: 'Face Mask Detection',
    category: 'Computer vision',
    description:
      'A deep-learning project that classifies faces as masked or unmasked, using transfer learning on MobileNetV2 and OpenCV to run on live webcam frames.',
    features: [
      'CNN classifier built on a pre-trained MobileNetV2 base',
      'Face detection on video frames with OpenCV',
      'Real-time label overlay on the camera feed',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    visual: 'vision',
    note: 'Repository not public yet',
  },
  {
    name: 'Contact Management System',
    category: 'C++ console app',
    description:
      'A menu-driven console application for storing and managing contacts, built with a C++ class and binary file storage.',
    features: [
      'Create, list, search, edit and delete contacts',
      'Records persisted to a binary file between runs',
      'Object-oriented design around a single contact class',
    ],
    tech: ['C++', 'OOP', 'File I/O'],
    visual: 'contacts',
    repo: 'https://github.com/Nishagupta2212/phone-book-management-system',
  },
]

export type Service = {
  title: string
  description: string
  icon: 'monitor' | 'react' | 'layout' | 'bug' | 'plug' | 'terminal'
}

export const services: Service[] = [
  {
    title: 'Responsive websites',
    description: 'Clean, mobile-friendly sites built from your content or design, ready to deploy.',
    icon: 'monitor',
  },
  {
    title: 'React UI development',
    description: 'New components and pages, or improvements to the layout and usability of an existing React app.',
    icon: 'react',
  },
  {
    title: 'Landing pages & portfolios',
    description: 'Focused single-page sites that present you, your product or your work clearly.',
    icon: 'layout',
  },
  {
    title: 'Frontend bug fixing',
    description: 'Fixing layout issues, broken interactions and responsive problems in HTML, CSS, JS and React.',
    icon: 'bug',
  },
  {
    title: 'REST API integration',
    description: 'Connecting a frontend to an existing API: fetching data, forms, loading and error states.',
    icon: 'plug',
  },
  {
    title: 'Python automation',
    description: 'Small scripts to clean CSV/Excel data, automate repetitive tasks or produce simple reports.',
    icon: 'terminal',
  },
]

export const workPrinciples = [
  {
    title: 'Clear communication',
    description: 'I confirm requirements before starting and share regular progress updates, so there are no surprises.',
  },
  {
    title: 'Attention to detail',
    description: 'I test on different screen sizes and check edge cases before calling something done.',
  },
  {
    title: 'Organised delivery',
    description: 'Work is broken into small milestones with clean, readable code and version control on GitHub.',
  },
  {
    title: 'Quick to learn',
    description: "If a task needs a tool I haven't used, I'll say so honestly and learn it properly.",
  },
  {
    title: 'Committed to scope',
    description: 'I deliver what we agree on, and flag early if anything needs to change.',
  },
]
