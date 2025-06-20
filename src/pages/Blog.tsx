const blogPosts = [
  {
    title: "DevBee Inc. Expands to New Markets in 2025",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    summary: "We are excited to announce our expansion into new international markets, bringing our expertise to more clients worldwide.",
    date: "June 10, 2025",
    category: "Company News"
  },
  {
    title: "Top 5 Software Development Trends to Watch in 2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    summary: "Stay ahead of the curve with these emerging trends in software development, from AI to low-code platforms.",
    date: "June 5, 2025",
    category: "Industry Trends"
  },
  {
    title: "Getting Started with React and Vite: A Step-by-Step Guide",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    summary: "A practical tutorial for building fast, modern web apps using React and Vite.",
    date: "May 28, 2025",
    category: "Technical Tutorial"
  },
  {
    title: "How We Helped a UK University Digitize Healthcare Data",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    summary: "A case study on our EDC data platform project, improving healthcare outcomes through technology.",
    date: "May 20, 2025",
    category: "Case Study"
  },
  {
    title: "Why User-Centric Design Matters in Modern Software",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    summary: "Explore the importance of designing software with the end user in mind for better adoption and satisfaction.",
    date: "May 12, 2025",
    category: "Thought Leadership"
  },
  {
    title: "Celebrating 500+ Projects Delivered by DevBee",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    summary: "A look back at our journey and the milestones we've achieved with our clients.",
    date: "May 1, 2025",
    category: "Company News"
  },
  {
    title: "The Rise of Low-Code and No-Code Platforms",
    image: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=600&q=80",
    summary: "How low-code and no-code tools are changing the software development landscape.",
    date: "April 25, 2025",
    category: "Industry Trends"
  },
  {
    title: "Implementing Secure Authentication in Web Apps",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    summary: "Best practices for keeping your users and data safe online.",
    date: "April 18, 2025",
    category: "Technical Tutorial"
  },
  {
    title: "Scaling an E-Commerce Platform for Growth",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    summary: "Case study: How we helped a leading t-shirt brand handle rapid growth.",
    date: "April 10, 2025",
    category: "Case Study"
  },
  {
    title: "The Future of DevOps: Automation and Beyond",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    summary: "Exploring the next wave of DevOps tools and practices for modern teams.",
    date: "April 2, 2025",
    category: "Thought Leadership"
  },
  {
    title: "Meet Our Newest Team Members at DevBee",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    summary: "Introducing the talented professionals who recently joined our hive.",
    date: "March 25, 2025",
    category: "Company News"
  },
  {
    title: "How AI is Transforming Business Operations",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    summary: "A deep dive into the impact of artificial intelligence on modern enterprises.",
    date: "March 18, 2025",
    category: "Industry Trends"
  },
  {
    title: "Optimizing Performance in Cloud Deployments",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    summary: "Tips and tricks for getting the most out of your cloud infrastructure.",
    date: "March 10, 2025",
    category: "Technical Tutorial"
  },
  {
    title: "Building a Real-Time Delivery Platform for Logistics",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    summary: "Case study: Our work with a UK-based logistics company to enable real-time tracking.",
    date: "March 2, 2025",
    category: "Case Study"
  },
  {
    title: "Cybersecurity Best Practices for Growing Businesses",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    summary: "Essential security tips every business should know in 2025.",
    date: "February 25, 2025",
    category: "Thought Leadership"
  }
];

const Blog = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 className="text-5xl font-bold text-yellow-600 mb-10 text-center">Devbee Blogs</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {blogPosts.map((post, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="text-xs text-yellow-600 font-semibold mb-2">{post.category}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            <div className="text-gray-400 text-xs mb-4">{post.date}</div>
            <button
              className="flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-200 group"
            >
              Learn More
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' /></svg>
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;
