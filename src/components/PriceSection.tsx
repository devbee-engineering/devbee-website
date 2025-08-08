import { useState } from 'react';
import { Link } from 'react-router-dom';

type Currency = 'INR' | 'USD';

const PricingSection = () => {
  const [currency, setCurrency] = useState<Currency>('INR');

  const prices: Record<Currency, { title: string; price: string; icons: string[] }[]> = {
    INR: [
      {
        title: 'Full Stack Web Development',
        price: '₹30,000',
        icons: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Redis', 'Mongo'],
      },
      {
        title: 'Front End Web Development',
        price: '₹20,000',
        icons: ['HTML', 'CSS', 'JS', 'React'],
      },
      {
        title: 'Back End Web Development',
        price: '₹25,000',
        icons: ['Node', 'Express', 'Redis', 'Mongo'],
      },
      {
        title: '15-Day Internship Program',
        price: '₹3,000',
        icons: ['HTML', 'CSS', 'JS', 'Php', 'Mongo'],
      },
    ],
    USD: [
      {
        title: 'Full Stack Web Development',
        price: '$342',
        icons: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Redis', 'Mongo'],
      },
      {
        title: 'Front End Web Development',
        price: '$228',
        icons: ['HTML', 'CSS', 'JS', 'React'],
      },
      {
        title: 'Back End Web Development',
        price: '$285',
        icons: ['Node', 'Express', 'Redis', 'Mongo'],
      },
      {
        title: '15-Day Internship Program',
        price: '$57',
        icons: ['HTML', 'CSS', 'JS', 'Php', 'Mongo'],
      },
    ],
  };

  const renderIcon = (tech: string) => {
    const iconMap: Record<string, string> = {
      HTML: '/icons/html.svg',
      CSS: '/icons/Php.svg',
      JS: '/icons/javascript.svg',
      React: '/icons/react.svg',
      Node: '/icons/nodejs.svg',
      Express: '/icons/express.svg',
      Redis: '/icons/redis.svg',
      Mongo: '/icons/mongodb.svg',
      Php: '/icons/Php.svg',
      Mysql: '/icons/mysql.svg'
    };

    const src = iconMap[tech];

    return (
       <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
      <img src={src} alt={tech} className="w-30 h-30 object-contain" />
    </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Take control of your career,
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">
            start by choosing
          </h2>
          
          {/* Toggle Button - Centered */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all ${
                  currency === 'USD'
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all ${
                  currency === 'INR'
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                INR
              </button>
            </div>
          </div>
        </div>

        {/* Learning Tracks */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            choose a learning track
          </h3>
          <p className="text-gray-600 text-lg">starting at {prices[currency][3].price}</p>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mt-4"></div>
        </div>

        {/* Centered Content */}
        <div className="max-w-5xl mx-auto space-y-6">
          {prices[currency].map((track, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-300 group">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left side - Title and Icons */}
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-yellow-600 transition-colors duration-300">
                    {track.title}
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {track.icons.map((icon, index) => (
                      <div key={index} className="transform hover:scale-110 transition-transform duration-200">
                        {renderIcon(icon)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side - Price and Action */}
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="text-center lg:text-right">
                    <p className="text-sm text-gray-500 mb-1">Starting at</p>
                    <span className="text-3xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                      {track.price}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/course-details?type=${
                      track.title.toLowerCase().includes('full stack') 
                        ? 'fullstack' 
                        : track.title.toLowerCase().includes('front end') || track.title.toLowerCase().includes('frontend')
                        ? 'frontend' 
                        : track.title.toLowerCase().includes('internship')
                        ? 'internship'
                        : 'backend'
                    }`}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium"
                  >
                    <span className="font-semibold">View Details</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Bottom border accent */}
              <div className="mt-8 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default PricingSection;
