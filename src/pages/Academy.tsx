import ScrollFadeIn from "../components/ScrollFadeIn";
import FloatingContact from "../components/FloatingContact";
import { useState } from "react";
import PricingSection from "../components/PriceSection";

type CurriculumLevel = "beginner" | "intermediate" | "advanced";

interface Module {
  id: number;
  title: string;
  duration: string;
}

interface CurriculumData {
  duration: string;
  modules: Module[];
  details: string[][];
}

const Academy = () => {
  const [selectedLevel, setSelectedLevel] =
    useState<CurriculumLevel>("beginner");
  const [selectedModule, setSelectedModule] = useState<number>(0);

  const curriculumData: Record<CurriculumLevel, CurriculumData> = {
    beginner: {
      duration: "11.5 Months",
      modules: [
        {
          id: 1,
          title: " HTML, CSS & JavaScript (Frontend Basics)",
          duration: "2 Months",
        },
        { id: 2, title: "Advanced React.js", duration: "4.5 Months" },
        { id: 3, title: "PHP with MySQL", duration: "0.5 Month" },
        {
          id: 4,
          title: "Node.js with Express & MySQL",
          duration: "3.5 Months",
        },
        { id: 5, title: "Python with MySQL", duration: "1 Month" },
        { id: 6, title: " Internship & Final Project", duration: "1 Month" },
      ],
      details: [
        [
          " HTML, CSS & JavaScript (Frontend Basics)",
          "CSS3 styling, flexbox, grid",
          "Responsive design principles",
          "JavaScript (ES6+)",
          "Variables, loops, functions, and arrays",
          "DOM Manipulation",
          "Event Handling",
          "Fetch API",
          "Basic OOP for Problem Solving",
          "Mini Project: Build a responsive personal portfolio site",
        ],
        [
          "React basics: components, props, state",
          "Functional vs Class Components",
          "Hooks: useState, useEffect, useContext, useRef",
          "Routing with React Router",
          "Form Handling & Validation",
          "Context API & Redux (basics)",
          "API integration with Axios",
          "Deployment (Vercel/Netlify)",
          "Capstone Project: Build a full-featured React web app (like a ToDo app or Blog platform)",
        ],
        [
          "Introduction to PHP syntax",
          "Variables, Loops, Functions",
          "Forms and server handling",
          "Connecting PHP to MySQL",
          "CRUD operations with MySQL",
          "Basic authentication system",
          "Mini Project: PHP + MySQL Blog CMS",
        ],
        [
          "Node.js fundamentals",
          "NPM, package.json",
          "Express.js server basics",
          "RESTful APIs",
          "Middleware & routing",
          "Connecting to MySQL",
          "CRUD with Express + MySQL",
          "JWT Authentication",
          "Capstone Project: REST API for Task Manager or Booking System",
          "Debugging Techniques",
          "Performance Optimization",
        ],
        [
          "Python basics: syntax, data types, loops, functions",
          "File handling",
          "Connecting to MySQL using mysql-connector-python",
          "CRUD operations",
          "Flask basics (optional for interested students)",
          "Mini Project: Inventory or Employee Tracker",
          "API Design",
          "Security Fundamentals",
          "Monitoring and Logging",
          "Deployment Strategies",
        ],
        [
          "Work on a real task assigned by a DevBee developer",
          "Code reviews & mentorship",
          "Git and version control",
          "Collaboration via GitHub",
          "Use of Trello/Jira for task tracking",
        ],
      ],
    },
    intermediate: {
      duration: "11.5 Months",
      modules: [
        {
          id: 1,
          title: "Advanced JavaScript & TypeScript",
          duration: "2 Months",
        },
        {
          id: 2,
          title: "React.js Advanced Concepts & Ecosystem",
          duration: "4.5 Months",
        },
        {
          id: 3,
          title: "Full-stack PHP & Laravel with MySQL",
          duration: "0.5 Month",
        },
        {
          id: 4,
          title: "Node.js Advanced (Express, MySQL, REST, Real-time)",
          duration: "3.5 Months",
        },
        {
          id: 5,
          title: "Python for Web, APIs & Automation",
          duration: "1 Month",
        },
        {
          id: 6,
          title: "Team Project & Code Collaboration",
          duration: "1 Month",
        },
      ],
      details: [
        [
          "Deep dive into JS: closures, this, hoisting, prototype",
          "ES6+ patterns & async programming",
          "Error handling & debugging",
          "TypeScript: types, interfaces, generics, enums",
          "Tooling: Babel, Webpack, ESLint, Prettier",
          "Unit testing with Jest or Mocha",
          "Mini Project: TypeScript-based data visualization dashboard",
        ],
        [
          "React performance optimization",
          "Advanced hooks: useMemo, useCallback, custom hooks",
          "Redux Toolkit, React Query",
          "Server-side rendering (Next.js basics)",
          "Component libraries: Material UI / Tailwind integration",
          "Testing with React Testing Library",
          "Capstone Project: Feature-rich React Dashboard (Admin Panel or Analytics Portal)",
        ],
        [
          "MVC architecture with Laravel",
          "Laravel routing, controllers, Blade templating",
          "Eloquent ORM & relationships",
          "Authentication with Sanctum or Passport",
          "API creation with Laravel",
          "Capstone Project: Laravel-powered service booking platform",
        ],
        [
          "Advanced Express.js architecture",
          "File uploads, rate limiting, CORS",
          "WebSockets with Socket.IO (real-time apps)",
          "Role-based access control (RBAC)",
          "Logging with Winston/Morgan",
          "Capstone Project: Real-time collaboration tool or chat app",
        ],
        [
          "Intermediate Python concepts (decorators, generators)",
          "Flask RESTful API with SQLAlchemy",
          "Task scheduling (Celery, Cron)",
          "Web scraping & automation",
          "Testing with Pytest",
          "Capstone Project: Python backend API for monitoring & reports",
        ],
        [
          "Agile team collaboration",
          "Advanced Git workflows: feature branches, rebase, PRs",
          "CI/CD basics (GitHub Actions or GitLab CI)",
          "Code review process & testing standards",
          "Team Project: Full-stack collaborative product with API, dashboard, and DB",
        ],
      ],
    },
    advanced: {
      duration: "9.5 Months",
      modules: [
        {
          id: 1,
          title: "Enterprise Architecture & Design Patterns",
          duration: "2 Months",
        },
        { id: 2, title: "React SSR & Micro-Frontends", duration: "2 Months" },
        { id: 3, title: "Scalable Node.js Systems", duration: "2 Months" },
        { id: 4, title: "Advanced DevOps & Security", duration: "1.5 Months" },
        {
          id: 5,
          title: "Data Engineering with Python",
          duration: "1.5 Months",
        },
        {
          id: 6,
          title: "Final Capstone Project + Presentation",
          duration: "1 Month",
        },
      ],
      details: [
        [
          "SOLID Principles & Clean Code",
          "Design Patterns (Factory, Observer, Singleton, etc.)",
          "Modular code architecture",
          "Dependency Injection",
          "Monorepos & workspaces (Nx, TurboRepo)",
          "Microservices vs Monolith discussion",
        ],
        [
          "Next.js advanced routing, API routes",
          "Incremental static regeneration (ISR)",
          "Micro-frontend architecture (Module Federation)",
          "Authentication with NextAuth or Auth0",
          "Serverless functions",
          "Capstone Project: Multi-tenant SaaS web app",
        ],
        [
          "Scaling Node.js apps with clusters & PM2",
          "API Gateway pattern",
          "Service registry with Consul or Eureka (optional)",
          "Rate limiting, monitoring, logging",
          "Load balancing & caching with Redis",
          "Capstone Project: Enterprise-level scalable REST/GraphQL backend",
        ],
        [
          "Security: XSS, CSRF, OWASP Top 10",
          "HTTPS, SSL, JWT security best practices",
          "Docker basics + Docker Compose",
          "CI/CD pipelines (GitHub Actions, Jenkins)",
          "Monitoring with Prometheus + Grafana or ELK Stack",
          "Secrets management (Vault, .env best practices)",
        ],
        [
          "Data pipelines with Python (ETL basics)",
          "Data processing with Pandas/Numpy",
          "Storing and querying with MySQL/PostgreSQL",
          "Intro to data analysis and dashboards",
          "Capstone Project: Data dashboard with real-time metrics",
        ],
        [
          "Real-world product scope definition",
          "Team collaboration & milestones",
          "Deployment to cloud (AWS, Vercel, or DigitalOcean)",
          "Final Presentation to mentors or invited devs",
          "Job readiness checklist (resume, GitHub, LinkedIn audit)",
        ],
      ],
    },
  };

  // Reset selected module when level changes
  const handleLevelChange = (level: CurriculumLevel) => {
    setSelectedLevel(level);
    setSelectedModule(0);
  };

  return (
    <div>
      <ScrollFadeIn>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            {/* <div className="mb-8">
              <nav className="text-gray-600 text-sm">
                <span className="hover:text-yellow-600 cursor-pointer">Home</span>
                <span className="mx-2">/</span>
                <span className="hover:text-yellow-600 cursor-pointer">Academy</span>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium">Data Structures And Algorithms</span>
              </nav>
            </div> */}

            {/* Main Content */}
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                IT Training & Internship Program{" "}
                <span className="text-yellow-600">DevBee Academy</span>
              </h1>

              <div className="space-y-6 text-gray-600 text-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Secure product interviews with understanding of crucial data
                    structures and algorithms, and their implementation
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Build intuition on the inner workings of various DSA, a
                    foundational skill for any top software engineer
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Clear your concepts and know which data structure to use for
                    the most optimum build
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        {/* Why Data Structures and Algorithms Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🚀{" "}
                <span className="text-yellow-600">
                  Launch Your Tech Career with Real Developers
                </span>
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome to DevBee Inc.'s exclusive IT Training & Internship
                Program – designed for ongoing college students and fresh
                graduates who are passionate about coding and want to learn from
                real software engineers.
              </h3>
              <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* What are Data Structures? */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Train with Us?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We’re not a typical training institute. We’re a full-fledged
                  software development company, and your trainers are our
                  in-house developers and tech leads who work on real client
                  projects every day. You’ll get hands-on experience,
                  industry-relevant exposure, and insights that no textbook or
                  coaching center can offer.
                </p>
              </div>

              {/* What are the types of Data Structures? */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What We Offer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Full-Stack Developer Track
                </p>
                <div className="text-gray-600 text-sm leading-relaxed">
                  <p className="mb-3">
                    <ul>
                      <li className="text-gray-600 leading-relaxed mb-4">
                        15-Day Real-Time Internship (Optional)
                      </li>
                      <li className="text-gray-600 leading-relaxed mb-4">
                        Placement Support – Get up to 3 interview prep sessions
                      </li>
                      <li className="text-gray-600 leading-relaxed mb-4">
                        Certification on course completion
                      </li>
                      <li className="text-gray-600 leading-relaxed mb-4">
                        Job Opportunity at DevBee for top performers
                      </li>
                      <li className="text-gray-600 leading-relaxed mb-4">
                        Soft Skills + Communication Training
                      </li>
                      <li className="text-gray-600 leading-relaxed mb-4">
                        Final Technical Test to assess job readiness
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              {/* Why are Data Structures important? */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why are Data Structures important?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Data structures are a key component of Computer Science and
                  help in understanding the nature of a given problem at a
                  deeper level. They're widely utilized in Artificial
                  Intelligence, operating systems, graphics, and other fields.
                  If the programmer is unfamiliar with data structure and
                  Algorithm, they may be unable to write efficient data-handling
                  code.
                </p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    A strong grasp of this is of paramount significance if you
                    want to learn how to organize and assemble data and solve
                    real-life problems
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Almost all product-based companies look at how strong you
                    are at data structures, so it will also help you in your
                    day-to-day work
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Knowing when to apply the proper data structures is an
                    important step to write efficient code by managing data
                    properly
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        {/* Key Highlights Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key highlights of the{" "}
                <span className="text-yellow-600">
                  DevBee Academy's program
                </span>
              </h2>
              <p className="text-gray-600 max-w-4xl mx-auto">
                Our program is designed to help you become an expert in Data
                structures and Algorithms and ace product interviews to scale up
                in your tech career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Blue */}
              <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Structured, industry-vetted curriculum
                </h3>
              </div>

              {/* Card 2 - Red */}
              <div className="bg-red-500 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Live classes led by faculty members with hands-on experience
                </h3>
              </div>

              {/* Card 3 - Green */}
              <div className="bg-green-500 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Intensive practical experience through real-life projects and
                  applications
                </h3>
              </div>

              {/* Card 4 - Purple */}
              <div className="bg-purple-500 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Aspirational network of peers, across batches and backgrounds
                </h3>
              </div>

              {/* Card 5 - Blue */}
              <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Regular 1:1 mentorship from product industry veterans
                </h3>
              </div>

              {/* Card 6 - Orange */}
              <div className="bg-orange-500 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Career support through mock interviews, profile building, and
                  referral networks
                </h3>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        {/* Pricing Section */}
        <PricingSection />
      </ScrollFadeIn>

      <ScrollFadeIn>
        {/* Curriculum Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Curriculum is designed to make you a{" "}
                <span className="text-yellow-600 underline">
                  solid engineer
                </span>
              </h2>
            </div>

            {/* Level Selection */}
            <div className="flex justify-center mb-12">
              <div className="flex bg-gray-100 rounded-lg p-2">
                <button
                  onClick={() => handleLevelChange("beginner")}
                  className={`px-8 py-4 rounded-lg font-medium transition-all ${
                    selectedLevel === "beginner"
                      ? "bg-yellow-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <div className="text-left">
                    <div className="font-bold">Beginner</div>
                    <div className="text-sm opacity-75">11.5 Months</div>
                  </div>
                </button>
                <button
                  onClick={() => handleLevelChange("intermediate")}
                  className={`px-8 py-4 rounded-lg font-medium transition-all ${
                    selectedLevel === "intermediate"
                      ? "bg-yellow-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <div className="text-left">
                    <div className="font-bold">Intermediate</div>
                    <div className="text-sm opacity-75">11.5 Months</div>
                  </div>
                </button>
                <button
                  onClick={() => handleLevelChange("advanced")}
                  className={`px-8 py-4 rounded-lg font-medium transition-all ${
                    selectedLevel === "advanced"
                      ? "bg-yellow-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <div className="text-left">
                    <div className="font-bold">Advanced</div>
                    <div className="text-sm opacity-75">9.5 Months</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Curriculum Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Modules */}
              <div className="space-y-4">
                {curriculumData[selectedLevel].modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => setSelectedModule(index)}
                    className={`w-full p-4 rounded-lg border-l-4 text-left transition-all hover:shadow-md ${
                      index === selectedModule
                        ? "bg-yellow-600 text-white border-yellow-400"
                        : "bg-gray-50 text-gray-900 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs font-medium opacity-75 mb-1">
                          MODULE - {module.id}
                        </div>
                        <div className="font-bold">{module.title}</div>
                      </div>
                      <div className="text-sm font-medium">
                        {module.duration}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Side - Module Details */}
              <div className="bg-yellow-600 text-white p-8 rounded-lg">
                <div className="mb-6">
                  <div className="text-right font-bold text-lg mb-4">
                    {
                      curriculumData[selectedLevel].modules[selectedModule]
                        .duration
                    }
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    •{" "}
                    {
                      curriculumData[selectedLevel].modules[selectedModule]
                        .title
                    }
                  </h3>
                </div>

                <div className="space-y-2">
                  {curriculumData[selectedLevel].details[selectedModule].map(
                    (detail, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{detail}</span>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white border-opacity-20">
                  <button
                    onClick={() =>
                      selectedModule <
                        curriculumData[selectedLevel].modules.length - 1 &&
                      setSelectedModule(selectedModule + 1)
                    }
                    className={`text-sm font-medium ${
                      selectedModule <
                      curriculumData[selectedLevel].modules.length - 1
                        ? "text-yellow-200 hover:text-yellow-100 cursor-pointer"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={
                      selectedModule >=
                      curriculumData[selectedLevel].modules.length - 1
                    }
                  >
                    {selectedModule <
                    curriculumData[selectedLevel].modules.length - 1
                      ? `Read Next: Module ${selectedModule + 2} - ${
                          curriculumData[selectedLevel].modules[
                            selectedModule + 1
                          ].title
                        } →`
                      : "This is the final module"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        {/* Benefits & Placement Support Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🏆 <span className="text-yellow-600">What You Get</span>
              </h2>
              <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* What You Get */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-2">✅</span>
                    Course Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">
                        Certificate of Completion
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">
                        1 Capstone + 3 Mini Projects
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">
                        Portfolio + GitHub Setup
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-yellow-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">
                        Soft Skills & Interview Prep
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">
                        Mock Interviews (up to 3)
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">
                        Placement at DevBee (if qualified)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Who Can Join */}
              <div>
                <div className="bg-yellow-600 text-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-2xl mr-2">📍</span>
                    Who Can Join?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">
                        Final year students or recent graduates
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">
                        Passionate coders with basic computer knowledge
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">
                        Willing to commit full-time during course duration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Placement & Career Support */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-2">💼</span>
                Placement & Career Support
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-lg h-full">
                    <h4 className="text-lg font-bold mb-3">
                      🎯 For Top Performers
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span>✨</span>
                        <span>Final technical test by senior developers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🚀</span>
                        <span>Direct placement opportunity at DevBee</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🏆</span>
                        <span>Join our elite development team</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>💰</span>
                        <span>Competitive salary package</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg h-full">
                    <h4 className="text-lg font-bold mb-3">
                      🤝 For All Others
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span>📄</span>
                        <span>Resume review and feedback</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>💬</span>
                        <span>Communication & HR round preparation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🎭</span>
                        <span>3 rounds of mock interviews</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🔗</span>
                        <span>Job referral & interview guidance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Floating Contact Widget */}
      <FloatingContact />
    </div>
  );
};

export default Academy;
