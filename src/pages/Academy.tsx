import ScrollFadeIn from '../components/ScrollFadeIn';
import FloatingContact from '../components/FloatingContact';
import { useState } from 'react';

type CurriculumLevel = 'beginner' | 'intermediate' | 'advanced';

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
  const [selectedLevel, setSelectedLevel] = useState<CurriculumLevel>('beginner');
  const [selectedModule, setSelectedModule] = useState<number>(0);

  const curriculumData: Record<CurriculumLevel, CurriculumData> = {
    beginner: {
      duration: '11.5 Months',
      modules: [
        { id: 1, title: 'Programming Language Fundamentals', duration: '2 Months' },
        { id: 2, title: 'Data Structures and Algorithms', duration: '4.5 Months' },
        { id: 3, title: 'SQL', duration: '0.5 Month' },
        { id: 4, title: 'LLD and Project Specialisations', duration: '3.5 Months' },
        { id: 5, title: 'System Design Essentials', duration: '1 Month' }
      ],
      details: [
        [
          'Introduction to Java',
          'Input Output and Data Types',
          'Operators',
          'Conditions',
          'Loops',
          'Pattern Problems',
          'Functions',
          '1D and 2D Arrays',
          'Strings',
          'Memory Management',
          'Basic OOP for Problem Solving'
        ],
        [
          'Arrays and Strings',
          'Linked Lists',
          'Stacks and Queues',
          'Trees and Binary Trees',
          'Hash Tables',
          'Sorting Algorithms',
          'Searching Algorithms',
          'Recursion and Backtracking',
          'Time and Space Complexity',
          'Basic Graph Algorithms',
          'Dynamic Programming Basics'
        ],
        [
          'SQL Fundamentals',
          'Database Design',
          'CRUD Operations',
          'Joins and Relationships',
          'Indexes and Performance',
          'Stored Procedures',
          'Views and Triggers',
          'Data Normalization',
          'Query Optimization',
          'Database Security Basics'
        ],
        [
          'Object-Oriented Design',
          'Design Patterns',
          'SOLID Principles',
          'Clean Code Practices',
          'Testing Strategies',
          'Project Architecture',
          'Code Review Process',
          'Version Control',
          'Documentation',
          'Debugging Techniques',
          'Performance Optimization'
        ],
        [
          'System Design Fundamentals',
          'Scalability Concepts',
          'Load Balancing',
          'Caching Strategies',
          'Database Scaling',
          'Microservices Basics',
          'API Design',
          'Security Fundamentals',
          'Monitoring and Logging',
          'Deployment Strategies'
        ]
      ]
    },
    intermediate: {
      duration: '11.5 Months',
      modules: [
        { id: 1, title: 'Advanced Programming Concepts', duration: '2 Months' },
        { id: 2, title: 'Complex Data Structures', duration: '4.5 Months' },
        { id: 3, title: 'Database Management', duration: '0.5 Month' },
        { id: 4, title: 'System Architecture', duration: '3.5 Months' },
        { id: 5, title: 'Advanced System Design', duration: '1 Month' }
      ],
      details: [
        [
          'Advanced OOP Concepts',
          'Generic Programming',
          'Functional Programming',
          'Concurrent Programming',
          'Memory Management',
          'Performance Profiling',
          'Advanced Testing',
          'Code Optimization',
          'Design Patterns',
          'Architectural Patterns',
          'Refactoring Techniques'
        ],
        [
          'Advanced Trees (AVL, Red-Black)',
          'Heaps and Priority Queues',
          'Advanced Graph Algorithms',
          'Network Flow Algorithms',
          'String Algorithms',
          'Advanced Dynamic Programming',
          'Greedy Algorithms',
          'Divide and Conquer',
          'Advanced Sorting',
          'Computational Geometry',
          'Number Theory Algorithms'
        ],
        [
          'Advanced SQL Queries',
          'Database Administration',
          'Performance Tuning',
          'Replication and Sharding',
          'NoSQL Databases',
          'Data Warehousing',
          'OLAP vs OLTP',
          'Database Security',
          'Backup and Recovery',
          'Migration Strategies'
        ],
        [
          'Microservices Architecture',
          'Event-Driven Architecture',
          'Domain-Driven Design',
          'CQRS and Event Sourcing',
          'Service Mesh',
          'Container Orchestration',
          'CI/CD Pipelines',
          'Infrastructure as Code',
          'Monitoring and Observability',
          'Security Architecture',
          'Performance Engineering'
        ],
        [
          'Distributed Systems',
          'CAP Theorem',
          'Consistency Models',
          'Consensus Algorithms',
          'Fault Tolerance',
          'High Availability',
          'Disaster Recovery',
          'Global Distribution',
          'Edge Computing',
          'Real-time Systems'
        ]
      ]
    },
    advanced: {
      duration: '9.5 Months',
      modules: [
        { id: 1, title: 'Expert Programming Patterns', duration: '1.5 Months' },
        { id: 2, title: 'Advanced Algorithms & Optimization', duration: '3.5 Months' },
        { id: 3, title: 'Advanced Database Systems', duration: '0.5 Month' },
        { id: 4, title: 'Enterprise Architecture', duration: '3 Months' },
        { id: 5, title: 'Distributed Systems Design', duration: '1 Month' }
      ],
      details: [
        [
          'Enterprise Design Patterns',
          'Advanced Architectural Patterns',
          'Performance Engineering',
          'Scalability Engineering',
          'Security Engineering',
          'Reliability Engineering',
          'Machine Learning Integration',
          'AI/ML System Design',
          'Advanced Testing Strategies',
          'Code Generation',
          'Domain-Specific Languages'
        ],
        [
          'Advanced Graph Theory',
          'Network Flow Optimization',
          'Approximation Algorithms',
          'Randomized Algorithms',
          'Parallel Algorithms',
          'Quantum Algorithms',
          'Advanced Machine Learning',
          'Deep Learning Algorithms',
          'Optimization Theory',
          'Computational Complexity',
          'Algorithm Engineering'
        ],
        [
          'Distributed Database Systems',
          'Big Data Technologies',
          'Stream Processing',
          'Data Lake Architecture',
          'Real-time Analytics',
          'Graph Databases',
          'Time-Series Databases',
          'Vector Databases',
          'Database Internals',
          'Custom Storage Engines'
        ],
        [
          'Enterprise Architecture',
          'Cloud-Native Architecture',
          'Serverless Architecture',
          'Event-Driven Architecture',
          'Reactive Systems',
          'Multi-Cloud Strategies',
          'Hybrid Cloud Solutions',
          'Edge Computing Architecture',
          'IoT System Design',
          'Blockchain Integration',
          'Quantum Computing Prep'
        ],
        [
          'Large-Scale Distributed Systems',
          'Global Infrastructure',
          'Multi-Region Architecture',
          'Cross-Platform Integration',
          'Legacy System Modernization',
          'Zero-Downtime Migrations',
          'Chaos Engineering',
          'Site Reliability Engineering',
          'Platform Engineering',
          'Developer Experience'
        ]
      ]
    }
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
            <div className="mb-8">
              <nav className="text-gray-600 text-sm">
                <span className="hover:text-yellow-600 cursor-pointer">Home</span>
                <span className="mx-2">/</span>
                <span className="hover:text-yellow-600 cursor-pointer">Academy</span>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium">Data Structures And Algorithms</span>
              </nav>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Master Data Structures and Algorithms With the{" "}
                <span className="text-yellow-600">DevBee Academy Program</span>
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
                    Build intuition on the inner workings of various DSA, a foundational 
                    skill for any top software engineer
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Clear your concepts and know which data structure to use for the 
                    most optimum build
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
                Why <span className="text-yellow-600">Data Structures and Algorithms?</span>
              </h2>
              <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* What are Data Structures? */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What are Data Structures?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Data Structures are typically used to organize, process, retrieve and store data on computers for 
                  efficient use. Having the right understanding and using the right data structures helps software 
                  engineers write better code.
                </p>
              </div>

              {/* What are the types of Data Structures? */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What are the types of Data Structures?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  There are two types of Data structures -
                </p>
                <div className="text-gray-600 text-sm leading-relaxed">
                  <p className="mb-3">
                    <strong>Linear Data structure:</strong> If the elements of a data structure result in a sequence or a linear list then it is 
                    called a Linear data structure. Every data element is connected to its next and sometimes previous 
                    element in a sequential manner. Example - Arrays, Linked Lists, Stacks, Queues, etc.
                  </p>
                  <p>
                    <strong>Non-linear Data structure:</strong> If the elements of a Data structure result in a way that the traversal of 
                    nodes is not done in a sequential manner, then it is a Non-linear data structure. Its elements are not 
                    sequentially connected, and every element can attach to another element in multiple ways. Example 
                    - Hierarchical data structure like trees.
                  </p>
                </div>
              </div>

              {/* Why are Data Structures important? */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why are Data Structures important?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Data structures are a key component of Computer Science and help in understanding the nature of a 
                  given problem at a deeper level. They're widely utilized in Artificial Intelligence, operating systems, 
                  graphics, and other fields. If the programmer is unfamiliar with data structure and Algorithm, they 
                  may be unable to write efficient data-handling code.
                </p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    A strong grasp of this is of paramount significance if you want to learn how to organize and assemble 
                    data and solve real-life problems
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Almost all product-based companies look at how strong you are at data structures, so it will also help 
                    you in your day-to-day work
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Knowing when to apply the proper data structures is an important step to write efficient code by 
                    managing data properly
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
                Key highlights of the <span className="text-yellow-600">DevBee Academy's program</span>
              </h2>
              <p className="text-gray-600 max-w-4xl mx-auto">
                Our program is designed to help you become an expert in Data structures and Algorithms and ace product interviews to scale up in your tech career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Blue */}
              <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Structured, industry-vetted curriculum</h3>
              </div>

              {/* Card 2 - Red */}
              <div className="bg-red-500 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Live classes led by faculty members with hands-on experience</h3>
              </div>

              {/* Card 3 - Green */}
              <div className="bg-green-500 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Intensive practical experience through real-life projects and applications</h3>
              </div>

              {/* Card 4 - Purple */}
              <div className="bg-purple-500 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Aspirational network of peers, across batches and backgrounds</h3>
              </div>

              {/* Card 5 - Blue */}
              <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Regular 1:1 mentorship from product industry veterans</h3>
              </div>

              {/* Card 6 - Orange */}
              <div className="bg-orange-500 text-white p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Career support through mock interviews, profile building, and referral networks</h3>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        {/* Curriculum Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Curriculum is designed to make you a <span className="text-yellow-600 underline">solid engineer</span>
              </h2>
            </div>

            {/* Level Selection */}
            <div className="flex justify-center mb-12">
              <div className="flex bg-gray-100 rounded-lg p-2">
                <button
                  onClick={() => handleLevelChange('beginner')}
                  className={`px-8 py-4 rounded-lg font-medium transition-all ${
                    selectedLevel === 'beginner'
                      ? 'bg-yellow-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="text-left">
                    <div className="font-bold">Beginner</div>
                    <div className="text-sm opacity-75">11.5 Months</div>
                  </div>
                </button>
                <button
                  onClick={() => handleLevelChange('intermediate')}
                  className={`px-8 py-4 rounded-lg font-medium transition-all ${
                    selectedLevel === 'intermediate'
                      ? 'bg-yellow-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="text-left">
                    <div className="font-bold">Intermediate</div>
                    <div className="text-sm opacity-75">11.5 Months</div>
                  </div>
                </button>
                <button
                  onClick={() => handleLevelChange('advanced')}
                  className={`px-8 py-4 rounded-lg font-medium transition-all ${
                    selectedLevel === 'advanced'
                      ? 'bg-yellow-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
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
                        ? 'bg-yellow-600 text-white border-yellow-400'
                        : 'bg-gray-50 text-gray-900 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs font-medium opacity-75 mb-1">
                          MODULE - {module.id}
                        </div>
                        <div className="font-bold">{module.title}</div>
                      </div>
                      <div className="text-sm font-medium">{module.duration}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Side - Module Details */}
              <div className="bg-yellow-600 text-white p-8 rounded-lg">
                <div className="mb-6">
                  <div className="text-right font-bold text-lg mb-4">{curriculumData[selectedLevel].modules[selectedModule].duration}</div>
                  <h3 className="text-xl font-bold mb-4">• {curriculumData[selectedLevel].modules[selectedModule].title}</h3>
                </div>
                
                <div className="space-y-2">
                  {curriculumData[selectedLevel].details[selectedModule].map((detail, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white border-opacity-20">
                  <button 
                    onClick={() => selectedModule < curriculumData[selectedLevel].modules.length - 1 && setSelectedModule(selectedModule + 1)}
                    className={`text-sm font-medium ${
                      selectedModule < curriculumData[selectedLevel].modules.length - 1
                        ? 'text-yellow-200 hover:text-yellow-100 cursor-pointer'
                        : 'text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={selectedModule >= curriculumData[selectedLevel].modules.length - 1}
                  >
                    {selectedModule < curriculumData[selectedLevel].modules.length - 1
                      ? `Read Next: Module ${selectedModule + 2} - ${curriculumData[selectedLevel].modules[selectedModule + 1].title} →`
                      : 'This is the final module'
                    }
                  </button>
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
