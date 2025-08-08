import ScrollFadeIn from '../components/ScrollFadeIn';
import FloatingContact from '../components/FloatingContact';
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
  const { courseType } = useParams();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'projects' | 'career'>('overview');
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const [syllabusEmail, setSyllabusEmail] = useState('');
  const [expandedModules, setExpandedModules] = useState<number[]>([]);
  const [enrollFormData, setEnrollFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    motivation: ''
  });

  // Get course type from URL params or search params
  const currentCourseType = courseType || searchParams.get('type') || 'fullstack';

  const courseData = {
    fullstack: {
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and MySQL. Build real-world applications and launch your career as a full stack developer.',
      duration: '4 Months',
      price: '₹30,000',
      level: 'Beginner to Advanced',
      heroGradient: 'from-yellow-50 to-white',
      themeColor: 'yellow',
      accentColor: 'blue',
      totalLectures: 185,
      totalProjects: 4,
      modules: [
        {
          id: 1,
          title: 'Frontend Fundamentals',
          duration: '1 Month',
          lectures: 45,
          totalTime: '32 hours',
          description: 'Master the fundamentals of web development with HTML5, CSS3, and modern JavaScript',
          project: 'Responsive Portfolio Website',
          topics: [
            { title: 'Introduction to Web Development', duration: '45 min', type: 'video', isPreview: true },
            { title: 'Setting up Development Environment', duration: '30 min', type: 'video' },
            { title: 'HTML5 Document Structure', duration: '1 hour', type: 'video' },
            { title: 'Semantic HTML Elements', duration: '1.5 hours', type: 'video' },
            { title: 'Forms and Input Elements', duration: '1 hour', type: 'video' },
            { title: 'HTML Accessibility Best Practices', duration: '45 min', type: 'video' },
            { title: 'CSS Fundamentals and Selectors', duration: '2 hours', type: 'video' },
            { title: 'Box Model and Layout', duration: '1.5 hours', type: 'video' },
            { title: 'Flexbox Layout System', duration: '2 hours', type: 'video' },
            { title: 'CSS Grid Layout', duration: '2.5 hours', type: 'video' },
            { title: 'Responsive Design with Media Queries', duration: '2 hours', type: 'video' },
            { title: 'CSS Animations and Transitions', duration: '1.5 hours', type: 'video' },
            { title: 'JavaScript Basics - Variables & Data Types', duration: '1.5 hours', type: 'video' },
            { title: 'JavaScript Functions & Scope', duration: '1.5 hours', type: 'video' },
            { title: 'DOM Manipulation', duration: '2 hours', type: 'video' },
            { title: 'Event Handling', duration: '1.5 hours', type: 'video' },
            { title: 'ES6+ Modern Features', duration: '2 hours', type: 'video' },
            { title: 'Fetch API & Async JavaScript', duration: '1.5 hours', type: 'video' },
            { title: 'Git & GitHub Fundamentals', duration: '1 hour', type: 'video' },
            { title: 'Portfolio Project Planning', duration: '30 min', type: 'assignment' },
            { title: 'Building Responsive Portfolio - Part 1', duration: '2 hours', type: 'project' },
            { title: 'Building Responsive Portfolio - Part 2', duration: '2 hours', type: 'project' },
            { title: 'Code Review Session', duration: '1 hour', type: 'live' },
            { title: 'Quiz: HTML, CSS & JavaScript Basics', duration: '30 min', type: 'quiz' }
          ],
          topicsWithDetails: [
            {
              title: 'HTML5 Fundamentals',
              description: 'Document structure, semantic tags, forms, accessibility, meta tags, input types, tables, lists, and modern HTML5 elements like header, nav, main, section, article, aside, footer'
            },
            {
              title: 'CSS3 Advanced Styling',
              description: 'Box model, typography, colors, backgrounds, borders, display properties, positioning, float, flexbox, grid layout, media queries, transitions, animations, and custom properties'
            },
            {
              title: 'JavaScript Core Concepts',
              description: 'Variables (var, let, const), data types, operators, conditionals, loops, functions, arrays, objects, scope, closures, hoisting, ES6+ features, and error handling'
            },
            {
              title: 'DOM Manipulation & Events',
              description: 'Selecting elements, modifying content, handling events, event delegation, form handling, local storage, and dynamic content creation'
            },
            {
              title: 'Version Control with Git',
              description: 'Git basics, repositories, commits, branches, merging, GitHub workflows, collaboration, and project management'
            }
          ]
        },
        {
          id: 2,
          title: 'React.js Mastery',
          duration: '1 Month',
          lectures: 65,
          totalTime: '52 hours',
          description: 'Deep dive into React ecosystem with hooks, state management, and modern patterns',
          project: 'E-commerce Web Application',
          topics: [
            { title: 'React Fundamentals & JSX', duration: '2 hours', type: 'video', isPreview: true },
            { title: 'Components & Props Deep Dive', duration: '1.5 hours', type: 'video' },
            { title: 'State Management with useState', duration: '1 hour', type: 'video' },
            { title: 'useEffect Hook Masterclass', duration: '2 hours', type: 'video' },
            { title: 'Custom Hooks Creation', duration: '1.5 hours', type: 'video' },
            { title: 'Context API & useContext', duration: '2 hours', type: 'video' },
            { title: 'React Router Setup & Navigation', duration: '1.5 hours', type: 'video' },
            { title: 'Advanced Routing Techniques', duration: '1 hour', type: 'video' },
            { title: 'Form Handling & Validation', duration: '2 hours', type: 'video' },
            { title: 'Redux Fundamentals', duration: '3 hours', type: 'video' },
            { title: 'Redux Toolkit (RTK)', duration: '2 hours', type: 'video' },
            { title: 'API Integration with Axios', duration: '2 hours', type: 'video' },
            { title: 'Error Boundaries & Error Handling', duration: '1 hour', type: 'video' },
            { title: 'React Testing with Jest & RTL', duration: '3 hours', type: 'video' },
            { title: 'Performance Optimization Techniques', duration: '2 hours', type: 'video' },
            { title: 'Deployment to Vercel/Netlify', duration: '1 hour', type: 'video' },
            { title: 'E-commerce Project Planning', duration: '1 hour', type: 'assignment' },
            { title: 'Building Product Catalog', duration: '3 hours', type: 'project' },
            { title: 'Shopping Cart Implementation', duration: '2 hours', type: 'project' },
            { title: 'Payment Integration', duration: '2 hours', type: 'project' },
            { title: 'User Authentication System', duration: '2 hours', type: 'project' },
            { title: 'Final Project Review', duration: '2 hours', type: 'live' },
            { title: 'React Advanced Quiz', duration: '45 min', type: 'quiz' }
          ],
          topicsWithDetails: [
            {
              title: 'React Components & JSX',
              description: 'Functional and class components, JSX syntax, props, children, composition patterns, and component hierarchy design'
            },
            {
              title: 'State Management & Hooks',
              description: 'useState, useEffect, useContext, useReducer, useMemo, useCallback, custom hooks, and state management patterns'
            },
            {
              title: 'Routing & Navigation',
              description: 'React Router setup, nested routing, protected routes, programmatic navigation, and URL parameters handling'
            },
            {
              title: 'Global State with Redux',
              description: 'Redux fundamentals, actions, reducers, store, Redux Toolkit, middleware, and async operations with RTK Query'
            },
            {
              title: 'API Integration & HTTP',
              description: 'Axios setup, HTTP methods, error handling, loading states, data fetching patterns, and API authentication'
            },
            {
              title: 'Testing & Performance',
              description: 'Jest and React Testing Library, unit testing, integration testing, performance optimization, and code splitting'
            }
          ]
        },
        {
          id: 3,
          title: 'Backend Development',
          duration: '1 Month',
          lectures: 55,
          totalTime: '45 hours',
          description: 'Build robust server-side applications with Node.js, Express, and databases',
          project: 'Task Management API',
          topics: [
            'Node.js Runtime Environment',
            'Express.js Framework',
            'RESTful API Design & Development',
            'Database Design & MySQL',
            'Authentication & Authorization (JWT)',
            'File Upload & Middleware',
            'Error Handling & Logging',
            'API Security Best Practices'
          ],
          topicsWithDetails: [
            {
              title: 'Node.js Fundamentals',
              description: 'Runtime environment, event loop, modules, NPM packages, file system operations, HTTP modules, and debugging techniques'
            },
            {
              title: 'Express.js Framework',
              description: 'Server setup, routing, middleware, request/response handling, template engines, static files, and application structure'
            },
            {
              title: 'Database Design & MySQL',
              description: 'Database design principles, MySQL setup, CRUD operations, joins, relationships, migrations, and query optimization'
            },
            {
              title: 'Authentication & Security',
              description: 'JWT implementation, password hashing, session management, CORS, rate limiting, input validation, and security best practices'
            },
            {
              title: 'API Development',
              description: 'RESTful API design, HTTP methods, status codes, error handling, documentation, testing, and API versioning'
            }
          ]
        },
        {
          id: 4,
          title: 'Full Stack Integration',
          duration: '1 Month',
          lectures: 30,
          totalTime: '25 hours',
          description: 'Connect frontend and backend, deploy applications, and implement DevOps practices',
          project: 'Complete Social Media Platform',
          topics: [
            'Frontend-Backend Integration',
            'Database Optimization',
            'Deployment Strategies',
            'Cloud Services (AWS/Vercel)',
            'Performance Optimization',
            'Monitoring & Analytics',
            'CI/CD Basics',
            'Production Best Practices'
          ],
          topicsWithDetails: [
            {
              title: 'Frontend-Backend Integration',
              description: 'API integration, CORS handling, authentication flow, data synchronization, error handling, and state management'
            },
            {
              title: 'Database Optimization',
              description: 'Query optimization, indexing, connection pooling, caching strategies, and database performance tuning'
            },
            {
              title: 'Deployment & DevOps',
              description: 'Cloud deployment, Docker basics, CI/CD pipelines, environment management, and production configurations'
            },
            {
              title: 'Performance & Monitoring',
              description: 'Application performance optimization, monitoring tools, logging, analytics, and error tracking'
            },
            {
              title: 'Production Best Practices',
              description: 'Security hardening, backup strategies, scaling considerations, and maintenance procedures'
            }
          ]
        }
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MySQL'],
      careerPaths: [
        { role: 'Frontend Developer', salary: '₹4-8 LPA', description: 'Build user interfaces and experiences' },
        { role: 'Backend Developer', salary: '₹5-10 LPA', description: 'Develop server-side logic and APIs' },
        { role: 'Full Stack Developer', salary: '₹6-12 LPA', description: 'Work on both frontend and backend' },
        { role: 'React Developer', salary: '₹5-10 LPA', description: 'Specialize in React.js applications' },
        { role: 'Node.js Developer', salary: '₹5-9 LPA', description: 'Build scalable backend services' },
        { role: 'JavaScript Engineer', salary: '₹4-8 LPA', description: 'Expert in JavaScript ecosystem' }
      ]
    },
    frontend: {
      title: 'Frontend Web Development',
      description: 'Master modern frontend development with HTML, CSS, JavaScript, and React. Create stunning user interfaces and interactive web applications.',
      duration: '4 Months',
      price: '₹20,000',
      level: 'Beginner to Intermediate',
      heroGradient: 'from-yellow-50 to-white',
      themeColor: 'yellow',
      accentColor: 'green',
      modules: [
        {
          id: 1,
          title: 'HTML & CSS Mastery',
          duration: '1 Month',
          topics: [
            'HTML5 Semantic Elements',
            'CSS3 Advanced Styling',
            'Flexbox & Grid Layout',
            'Responsive Web Design',
            'CSS Animations & Transitions',
            'SASS/SCSS Preprocessing',
            'CSS Framework Integration'
          ],
          project: 'Responsive Landing Page'
        },
        {
          id: 2,
          title: 'JavaScript Fundamentals',
          duration: '1 Month',
          topics: [
            'ES6+ Modern JavaScript',
            'DOM Manipulation',
            'Event Handling',
            'Async Programming',
            'Fetch API & AJAX',
            'Local Storage & Session Storage',
            'JavaScript Design Patterns'
          ],
          project: 'Interactive Web Calculator'
        },
        {
          id: 3,
          title: 'React.js Development',
          duration: '1 Month',
          topics: [
            'React Components & JSX',
            'State Management with Hooks',
            'React Router for Navigation',
            'Context API for State',
            'Component Lifecycle',
            'Form Handling & Validation',
            'React Performance Optimization'
          ],
          project: 'Task Management Dashboard'
        },
        {
          id: 4,
          title: 'Frontend Tools & Deployment',
          duration: '1 Month',
          topics: [
            'Webpack & Build Tools',
            'Version Control with Git',
            'Package Management (NPM)',
            'Code Quality Tools (ESLint, Prettier)',
            'Deployment to Vercel/Netlify',
            'Performance Optimization',
            'Browser DevTools Mastery'
          ],
          project: 'Portfolio Website with Deployment'
        }
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
      careerPaths: [
        { role: 'Frontend Developer', salary: '₹3-7 LPA', description: 'Create user interfaces and experiences' },
        { role: 'React Developer', salary: '₹4-8 LPA', description: 'Specialize in React.js applications' },
        { role: 'UI Developer', salary: '₹3-6 LPA', description: 'Focus on user interface implementation' },
        { role: 'JavaScript Developer', salary: '₹3-7 LPA', description: 'Frontend JavaScript specialist' }
      ]
    },
    backend: {
      title: 'Backend Web Development',
      description: 'Master server-side development with Node.js, Express, and databases. Build robust APIs and scalable backend systems.',
      duration: '1 Month',
      price: '₹25,000',
      level: 'Beginner to Advanced',
      heroGradient: 'from-yellow-50 to-white',
      themeColor: 'yellow',
      accentColor: 'purple',
      modules: [
        {
          id: 1,
          title: 'Node.js Fundamentals',
          duration: '1 Month',
          topics: [
            'Node.js Runtime Environment',
            'NPM & Package Management',
            'File System Operations',
            'HTTP Module & Server Creation',
            'Event Loop & Asynchronous Programming',
            'Modules & CommonJS',
            'Debugging Node.js Applications'
          ],
          project: 'Basic HTTP Server'
        },
        {
          id: 2,
          title: 'Express.js Framework',
          duration: '1 Month',
          topics: [
            'Express.js Setup & Configuration',
            'Routing & Middleware',
            'Request & Response Handling',
            'Template Engines',
            'Error Handling',
            'File Upload & Processing',
            'RESTful API Design'
          ],
          project: 'RESTful Blog API'
        },
        {
          id: 3,
          title: 'Database Integration',
          duration: '1 Month',
          topics: [
            'MySQL Database Design',
            'Database Connections',
            'CRUD Operations',
            'Joins & Relationships',
            'Database Migrations',
            'Query Optimization',
            'Data Validation & Sanitization'
          ],
          project: 'User Management System'
        },
        {
          id: 4,
          title: 'Advanced Backend Concepts',
          duration: '1 Month',
          topics: [
            'Authentication & Authorization (JWT)',
            'API Security Best Practices',
            'Rate Limiting & Throttling',
            'Logging & Monitoring',
            'Testing APIs',
            'Deployment & DevOps',
            'Performance Optimization'
          ],
          project: 'Secure E-commerce API'
        }
      ],
      techStack: ['Node.js', 'Express', 'MySQL', 'Redis'],
      careerPaths: [
        { role: 'Backend Developer', salary: '₹4-9 LPA', description: 'Build server-side applications and APIs' },
        { role: 'Node.js Developer', salary: '₹4-8 LPA', description: 'Specialize in Node.js backend development' },
        { role: 'API Developer', salary: '₹3-7 LPA', description: 'Focus on API design and development' },
        { role: 'Database Developer', salary: '₹3-8 LPA', description: 'Database design and optimization specialist' }
      ]
    },
    internship: {
      title: '15-Day Internship Program',
      description: 'Learn to Build Your Own Project with HTML, CSS, JS, PHP/Python, MySQL, and Git. A hands-on, beginner-friendly bootcamp designed for college students to build their very own web project from scratch.',
      duration: '15 Days',
      price: '₹5,000',
      level: 'Beginner',
      heroGradient: 'from-green-50 to-white',
      themeColor: 'green',
      accentColor: 'blue',
      totalLectures: 30,
      totalProjects: 1,
      modules: [
        {
          id: 1,
          title: 'Development Fundamentals',
          duration: '5 Days',
          lectures: 10,
          totalTime: '15 hours',
          description: 'Learn the basics of software development, project structure, and essential tools',
          project: 'Setting up Development Environment',
          topics: [
            { title: 'What is Software Development?', duration: '1 hour', type: 'video', isPreview: true },
            { title: 'Project Structure and Setup', duration: '1.5 hours', type: 'video' },
            { title: 'Tools for Frontend/Backend Development', duration: '1 hour', type: 'video' },
            { title: 'HTML Fundamentals', duration: '2 hours', type: 'video' },
            { title: 'CSS Styling and Box Model', duration: '2 hours', type: 'video' },
            { title: 'CSS Flexbox Layout', duration: '1.5 hours', type: 'video' },
            { title: 'JavaScript Basics for Interactivity', duration: '2 hours', type: 'video' },
            { title: 'DOM Manipulation', duration: '1.5 hours', type: 'video' },
            { title: 'Creating Your First Web Page', duration: '2 hours', type: 'project' },
            { title: 'Day 1-5 Assessment', duration: '30 min', type: 'quiz' }
          ],
          topicsWithDetails: [
            {
              title: 'Software Development Overview',
              description: 'Understanding how software projects work, development lifecycle, and real-world project structure'
            },
            {
              title: 'HTML Foundation',
              description: 'Document structure, semantic elements, forms, and basic page layout principles'
            },
            {
              title: 'CSS Fundamentals',
              description: 'Styling techniques, box model, flexbox layout, responsive design basics, and modern CSS practices'
            },
            {
              title: 'JavaScript Essentials',
              description: 'Variables, functions, DOM manipulation, event handling, and basic interactivity'
            }
          ]
        },
        {
          id: 2,
          title: 'Backend Programming',
          duration: '5 Days',
          lectures: 10,
          totalTime: '15 hours',
          description: 'Master backend programming with PHP or Python and database integration',
          project: 'Dynamic Web Application',
          topics: [
            { title: 'Introduction to Backend Development', duration: '1 hour', type: 'video', isPreview: true },
            { title: 'PHP/Python Basics', duration: '2 hours', type: 'video' },
            { title: 'Server-Side Programming Concepts', duration: '1.5 hours', type: 'video' },
            { title: 'MySQL Database Fundamentals', duration: '2 hours', type: 'video' },
            { title: 'Creating and Connecting to Database', duration: '2 hours', type: 'video' },
            { title: 'CRUD Operations', duration: '2 hours', type: 'video' },
            { title: 'Form Processing and Validation', duration: '1.5 hours', type: 'video' },
            { title: 'Building Your Backend Logic', duration: '2 hours', type: 'project' },
            { title: 'Database Integration Practice', duration: '1 hour', type: 'project' },
            { title: 'Backend Development Quiz', duration: '30 min', type: 'quiz' }
          ],
          topicsWithDetails: [
            {
              title: 'Backend Programming',
              description: 'PHP or Python fundamentals, server-side logic, data processing, and backend architecture'
            },
            {
              title: 'MySQL Database',
              description: 'Database design, table creation, relationships, SQL queries, and data management'
            },
            {
              title: 'Database Integration',
              description: 'Connecting backend code to database, CRUD operations, data validation, and error handling'
            },
            {
              title: 'Form Processing',
              description: 'Handling user input, form validation, data sanitization, and secure data processing'
            }
          ]
        },
        {
          id: 3,
          title: 'Version Control & Learning Resources',
          duration: '3 Days',
          lectures: 6,
          totalTime: '8 hours',
          description: 'Master Git/GitHub and learn to use online resources effectively',
          project: 'GitHub Portfolio Setup',
          topics: [
            { title: 'Git and GitHub Fundamentals', duration: '1.5 hours', type: 'video' },
            { title: 'Version Control Best Practices', duration: '1 hour', type: 'video' },
            { title: 'Using ChatGPT for Coding Help', duration: '1 hour', type: 'video' },
            { title: 'Online Learning Platforms (W3Schools, FreeCodeCamp)', duration: '1 hour', type: 'video' },
            { title: 'Problem Solving and Debugging', duration: '1.5 hours', type: 'video' },
            { title: 'Setting up GitHub Repository', duration: '2 hours', type: 'project' }
          ],
          topicsWithDetails: [
            {
              title: 'Git & GitHub',
              description: 'Version control basics, repositories, commits, branches, collaboration, and project management'
            },
            {
              title: 'AI-Assisted Learning',
              description: 'Using ChatGPT effectively for code writing, debugging, learning, and problem-solving'
            },
            {
              title: 'Self-Learning Resources',
              description: 'Effective use of W3Schools, MDN, FreeCodeCamp, Udemy, and other online platforms'
            }
          ]
        },
        {
          id: 4,
          title: 'Final Project & Documentation',
          duration: '2 Days',
          lectures: 4,
          totalTime: '6 hours',
          description: 'Build your complete project and create professional documentation',
          project: 'Complete CRUD Application (Student Registration or To-Do App)',
          topics: [
            { title: 'Project Planning and Requirements', duration: '1 hour', type: 'video' },
            { title: 'Building Your CRUD Application', duration: '3 hours', type: 'project' },
            { title: 'Writing Professional README Files', duration: '1 hour', type: 'video' },
            { title: 'Project Documentation and Submission', duration: '1 hour', type: 'project' }
          ],
          topicsWithDetails: [
            {
              title: 'Complete Project Development',
              description: 'Planning, building, and testing a full CRUD application with frontend and backend integration'
            },
            {
              title: 'Professional Documentation',
              description: 'Creating README files, project documentation, and presenting your work professionally'
            }
          ]
        }
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Git'],
      careerPaths: [
        { role: 'Junior Web Developer', salary: '₹2-4 LPA', description: 'Entry-level web development positions' },
        { role: 'Frontend Developer Intern', salary: '₹1-3 LPA', description: 'Internship opportunities in frontend development' },
        { role: 'Backend Developer Intern', salary: '₹1-3 LPA', description: 'Internship opportunities in backend development' },
        { role: 'Full Stack Trainee', salary: '₹2-4 LPA', description: 'Trainee positions for full stack development' }
      ],
      requirements: [
        'Basic computer operation skills',
        'A laptop with internet connection',
        'Willingness to learn and build your own project',
        'No prior coding knowledge required'
      ],
      targetAudience: [
        'College students preparing for final year or mini projects',
        'Beginners with no prior programming experience',
        'Students who want to build and understand their own project',
        'Aspiring developers looking for a structured path',
        'Anyone interested in web development fundamentals'
      ],
      uniqueFeatures: [
        'Complete roadmap from beginner to project builder',
        'Learn to use ChatGPT and online resources effectively',
        'Build your own college-level project',
        'Professional project documentation',
        'Certificate verification via website',
        'No copied projects - build your own understanding'
      ]
    }
  };

  const currentCourse = courseData[currentCourseType as keyof typeof courseData] || courseData.fullstack;

  const keyFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Industry-Relevant Curriculum',
      description: 'Learn technologies used by top companies like Google, Facebook, and Netflix',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Real Developer Mentors',
      description: 'Learn from our in-house developers who work on live client projects',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Portfolio Projects',
      description: 'Build 4+ real-world projects to showcase your skills to employers',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
        </svg>
      ),
      title: 'Job Placement Support',
      description: 'Resume building, interview prep, and direct placement opportunities',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Hands-on Learning',
      description: 'Code along with instructors and get immediate feedback on your work',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Industry Certification',
      description: 'Get certified upon completion with our industry-recognized certificate',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    }
  ];

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Enrollment data:', {
      course: currentCourse.title,
      ...enrollFormData
    });
    // You can add API call here to submit the enrollment
    alert('Enrollment request submitted successfully! We will contact you soon.');
    setShowEnrollModal(false);
    setEnrollFormData({
      fullName: '',
      email: '',
      phone: '',
      education: '',
      experience: '',
      motivation: ''
    });
  };

  const handleSyllabusDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle syllabus download here
    console.log('Syllabus download for:', {
      course: currentCourse.title,
      email: syllabusEmail
    });
    // You can add API call here to send syllabus to email
    alert(`Syllabus for ${currentCourse.title} has been sent to ${syllabusEmail}!`);
    setShowSyllabusModal(false);
    setSyllabusEmail('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEnrollFormData({
      ...enrollFormData,
      [e.target.name]: e.target.value
    });
  };

  const toggleModuleExpansion = (moduleId: number) => {
    setExpandedModules(prev =>
        prev.includes(moduleId)
            ? prev.filter(id => id !== moduleId)
            : [...prev, moduleId]
    );
};

  return (
    <div>
      <ScrollFadeIn>
        {/* Hero Section */}
        <section className={`bg-gradient-to-br ${currentCourse.heroGradient} py-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8">
              <nav className="text-gray-600 text-sm">
                <Link to="/" className="hover:text-yellow-600 cursor-pointer">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/academy" className="hover:text-yellow-600 cursor-pointer">Academy</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium">{currentCourse.title}</span>
              </nav>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {currentCourse.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {currentCourse.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
                  <span className="text-sm text-gray-600">Duration:</span>
                  <span className="font-bold text-yellow-600 ml-2">{currentCourse.duration}</span>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
                  <span className="text-sm text-gray-600">Price:</span>
                  <span className="font-bold text-green-600 ml-2">{currentCourse.price}</span>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
                  <span className="text-sm text-gray-600">Level:</span>
                  <span className="font-bold text-purple-600 ml-2">{currentCourse.level}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowEnrollModal(true)}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={() => setShowSyllabusModal(true)}
                  className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        {/* Navigation Tabs */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="flex bg-gray-100 rounded-lg p-2">
                {[
                  {
                    key: 'overview',
                    label: 'Overview'
                  },
                  {
                    key: 'curriculum',
                    label: 'Curriculum'
                  },
                  {
                    key: 'projects',
                    label: 'Projects'
                  },
                  {
                    key: 'career',
                    label: 'Career Paths'
                  }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as typeof activeTab)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      activeTab === tab.key
                        ? 'bg-yellow-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Tab Content */}
      <ScrollFadeIn>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Why Choose <span className="text-yellow-600">{currentCourse.title}?</span>
                  </h2>
                  <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className={`${feature.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100`}>
                      <div className={`mb-4 ${feature.iconColor}`}>{feature.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technologies You'll Master</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                    {currentCourse.techStack.map((tech, index) => {
                      const getIconPath = (techName: string) => {
                        const iconMap: Record<string, string> = {
                          'HTML': '/public/icons/html.svg',
                          'CSS': '/public/icons/Php.svg',
                          'JavaScript': '/public/icons/javascript.svg',
                          'React': '/public/icons/react.svg',
                          'Node.js': '/public/icons/nodejs.svg',
                          'Express': '/public/icons/express.svg',
                          'MySQL': '/public/icons/mysql.svg',
                          'Redis': '/public/icons/redis.svg',
                          'Git': '/public/icons/git.svg'
                        };
                        return iconMap[techName] || '/icons/default.svg';
                      };

                      return (
                        <div key={index} className="text-center group">
                          <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md p-4">
                            <img 
                              src={getIconPath(tech)} 
                              alt={tech} 
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                // Fallback to text if icon fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<span class="text-yellow-700 font-bold text-lg">${tech.slice(0, 2)}</span>`;
                                }
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700">{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Requirements, Target Audience, and Unique Features - Only for Internship Program */}
                {currentCourseType === 'internship' && (
                  <div className="mt-16 space-y-12">
                    {/* Requirements Section */}
                    {'requirements' in currentCourse && currentCourse.requirements && (
                      <div className="bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                          <svg className="w-8 h-8 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Requirements
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentCourse.requirements.map((requirement, index) => (
                            <div key={index} className="flex items-center p-4 bg-white rounded-lg border border-blue-100">
                              <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                              <span className="text-gray-700">{requirement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Target Audience Section */}
                    {'targetAudience' in currentCourse && currentCourse.targetAudience && (
                      <div className="bg-green-50 p-8 rounded-xl shadow-lg border border-green-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                          <svg className="w-8 h-8 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Who This Course is For
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentCourse.targetAudience.map((audience, index) => (
                            <div key={index} className="flex items-center p-4 bg-white rounded-lg border border-green-100">
                              <div className="w-3 h-3 bg-green-600 rounded-full mr-4 flex-shrink-0"></div>
                              <span className="text-gray-700">{audience}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Unique Features Section */}
                    {'uniqueFeatures' in currentCourse && currentCourse.uniqueFeatures && (
                      <div className="bg-purple-50 p-8 rounded-xl shadow-lg border border-purple-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                          <svg className="w-8 h-8 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          What Makes This Program Unique
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentCourse.uniqueFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center p-4 bg-white rounded-lg border border-purple-100">
                              <div className="w-3 h-3 bg-purple-600 rounded-full mr-4 flex-shrink-0"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Curriculum Tab */}
            {activeTab === 'curriculum' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Comprehensive <span className="text-yellow-600">Curriculum</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Our curriculum is designed by industry experts and updated regularly to match current market demands.
                  </p>
                  <div className="w-24 h-1 bg-yellow-600 mx-auto mt-4"></div>
                </div>

                {/* Course Statistics */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">
                        {'totalLectures' in currentCourse ? currentCourse.totalLectures : 185}
                      </div>
                      <div className="text-gray-600 text-sm">Total Lectures</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        {'totalProjects' in currentCourse ? currentCourse.totalProjects : 4}
                      </div>
                      <div className="text-gray-600 text-sm">Hands-on Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{currentCourse.modules.length}</div>
                      <div className="text-gray-600 text-sm">Modules</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">Lifetime</div>
                      <div className="text-gray-600 text-sm">Access</div>
                    </div>
                  </div>
                </div>

                {/* Detailed Module List */}
                <div className="space-y-6">
                  {currentCourse.modules.map((module) => {
                    const isExpanded = expandedModules.includes(module.id);

                    return (
                      <div key={module.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <div
                          className="flex items-center justify-between cursor-pointer mb-6"
                          onClick={() => toggleModuleExpansion(module.id)}
                        >
                          <div className="flex items-center">
                            <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                              {module.id}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                              <span className="text-yellow-600 font-medium text-lg">{module.duration}</span>
                              {'lectures' in module && (
                                <div className="text-sm text-gray-600 mt-1">
                                  {module.lectures} lectures • {module.totalTime}
                                </div>
                              )}
                            </div>
                          </div>
                          <svg
                            className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>

                        {isExpanded && (
                          <div className="lg:flex gap-6">
                            <div className="lg:w-1/3 mb-6 lg:mb-0">
                              <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg border-l-4 border-green-500">
                                <h4 className="font-bold text-green-800 mb-2 flex items-center">
                                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                  Project:
                                </h4>
                                <p className="text-green-700 text-sm font-medium">{module.project}</p>
                              </div>
                            </div>

                            <div className="lg:w-2/3">
                              <h4 className="font-bold text-gray-900 mb-4 text-lg">What You'll Learn:</h4>
                              <div className="space-y-4">
                                {'topicsWithDetails' in module && module.topicsWithDetails ? (
                                  module.topicsWithDetails.map((topic, idx) => (
                                    <div key={idx} className="bg-gray-50 p-4 rounded-md border-l-4 border-yellow-500 shadow-sm">
                                      <h5 className="font-semibold text-gray-800 mb-2">{topic.title}</h5>
                                      <p className="text-sm text-gray-600 leading-relaxed">{topic.description}</p>
                                    </div>
                                  ))
                                ) : (
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {Array.isArray(module.topics) && module.topics.map((topic, topicIndex) => (
                                      <div key={topicIndex} className="flex items-center p-2 bg-gray-50 rounded-lg">
                                        <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">
                                          {typeof topic === 'string' ? topic : topic.title}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Build <span className="text-yellow-600">Real-World Projects</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Gain hands-on experience by building projects that showcase your skills to potential employers.
                  </p>
                  <div className="w-24 h-1 bg-yellow-600 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentCourse.modules.map((module) => (
                    <div key={module.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3 shadow-lg">
                          {module.id}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{module.project}</h3>
                      </div>
                      <p className="text-gray-600 mb-4 bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold">Module:</span> {module.title}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          Key Features:
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          {Array.isArray(module.topics) ? 
                            module.topics.slice(0, 3).map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-center p-2 bg-yellow-50 rounded-lg">
                                <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2"></span>
                                {typeof topic === 'string' ? topic : topic.title}
                              </li>
                            )) :
                            'topicsWithDetails' in module && module.topicsWithDetails ? 
                              module.topicsWithDetails.slice(0, 3).map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-center p-2 bg-yellow-50 rounded-lg">
                                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2"></span>
                                  {topic.title}
                                </li>
                              )) : null
                          }
                        </ul>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <span className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          Portfolio Ready
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Career Paths Tab */}
            {activeTab === 'career' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    <span className="text-yellow-600">Career Opportunities</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    {currentCourse.title} professionals are in high demand. Here are the career paths you can pursue.
                  </p>
                  <div className="w-24 h-1 bg-yellow-600 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {currentCourse.careerPaths?.map((career, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{career.role}</h3>
                        <div className="text-3xl font-bold text-green-600 mb-3">{career.salary}</div>
                        <p className="text-gray-600 text-sm leading-relaxed">{career.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Placement Support */}
                <div className="bg-gradient-to-r from-yellow-600 to-orange-500 text-white p-8 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                    <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Placement Support
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                      <div className="flex justify-center mb-3">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold mb-2">Resume Building</h4>
                      <p className="text-sm opacity-90">Professional resume review and optimization</p>
                    </div>
                    <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                      <div className="flex justify-center mb-3">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h4 className="font-bold mb-2">Mock Interviews</h4>
                      <p className="text-sm opacity-90">Practice with real interview scenarios</p>
                    </div>
                    <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                      <div className="flex justify-center mb-3">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold mb-2">Job Referrals</h4>
                      <p className="text-sm opacity-90">Direct connections to hiring partners</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>
      </ScrollFadeIn>

      {/* CTA Section */}
      <ScrollFadeIn>
        <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <svg className="w-10 h-10 inline mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Join thousands of students who have successfully launched their tech careers with DevBee Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowEnrollModal(true)}
                className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Enroll Now - {currentCourse.price}
              </button>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3l2 5-2.5 1.5a11 11 0 0011 11L18 17l5 2v3a2 2 0 01-2 2h-1C10.954 23 1 13.046 1 3V2a2 2 0 012-2z" />
                </svg>
                Talk to Counsellor
              </a>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Syllabus Download Modal */}
      {showSyllabusModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Download Syllabus</h3>
                  <p className="text-gray-600">{currentCourse.title}</p>
                </div>
                <button
                  onClick={() => setShowSyllabusModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Course Info */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-semibold text-blue-900">What you'll get:</span>
                </div>
                <ul className="text-sm text-blue-800 space-y-1 ml-7">
                  <li>• Complete curriculum breakdown</li>
                  <li>• Module-wise learning objectives</li>
                  <li>• Project details and timelines</li>
                  <li>• Prerequisites and requirements</li>
                  <li>• Career guidance information</li>
                </ul>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSyllabusDownload} className="space-y-4">
                <div>
                  <label htmlFor="syllabusEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="syllabusEmail"
                    value={syllabusEmail}
                    onChange={(e) => setSyllabusEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    We'll send the syllabus PDF to this email address
                  </p>
                </div>

                {/* Privacy Note */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.25-1.75a8.25 8.25 0 11-4.5 0"></path>
                    </svg>
                    <p className="text-xs text-gray-600">
                      Your email will only be used to send the syllabus and occasional course updates. We respect your privacy.
                    </p>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSyllabusModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-semibold flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Send Syllabus
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Enrollment Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Enroll in Course</h3>
                  <p className="text-gray-600">{currentCourse.title}</p>
                </div>
                <button
                  onClick={() => setShowEnrollModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Course Info Summary */}
              <div className="bg-yellow-50 p-4 rounded-lg mb-6 border border-yellow-200">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-yellow-700 ml-1">{currentCourse.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold text-green-600 ml-1">{currentCourse.price}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Level:</span>
                    <span className="font-semibold text-purple-600 ml-1">{currentCourse.level}</span>
                  </div>
                </div>
              </div>

              {/* Enrollment Form */}
              <form onSubmit={handleEnrollSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={enrollFormData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={enrollFormData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={enrollFormData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                      Education Level *
                    </label>
                    <select
                      id="education"
                      name="education"
                      value={enrollFormData.education}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Programming Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={enrollFormData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select your experience level</option>
                    <option value="complete-beginner">Complete Beginner</option>
                    <option value="some-knowledge">Some Basic Knowledge</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join this course?
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={enrollFormData.motivation}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Tell us about your goals and motivation..."
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Course Terms:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Full payment required before course start</li>
                    <li>• 15-day money-back guarantee if not satisfied</li>
                    <li>• Access to course materials for lifetime</li>
                    <li>• Placement support included</li>
                  </ul>
                </div>

                {/* Form Actions */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowEnrollModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
                  >
                    Submit Enrollment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <FloatingContact />
    </div>
  );
};

export default CourseDetails;
