import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Cloud, Package } from 'lucide-react';
import ScrollFadeIn from '../components/ScrollFadeIn';

const Home = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-yellow-600" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies.'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-600" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: <Package className="w-8 h-8 text-yellow-600" />, // Product Development icon
      title: 'Product Development',
      description: 'Got a vision? We can build it. (*Some product work is confidential due to NDAs.*)'
    },
    {
      icon: <Cloud className="w-8 h-8 text-yellow-600" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions.'
    }
  ];

  return (
    <div>
      <ScrollFadeIn>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
               Welcome to
                <span className="text-yellow-600"> Devbee inc.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto ">
               Dream to Reality on Any Platform –Built by Bees Who Mean Business.At DevBee Inc., we don’t just build software —we craft digital solutions that power businesses, inspire users, and scale with confidence. Whether you're a startup or an enterprise, our team is here to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-7 justify-center">
                <Link
                  to="/contact"
                  className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 flex items-center justify-center"
                >
                 Let’s build your product together
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors duration-200"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
    
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About DevBee Inc.
                </h2>
                <p className="text-gray-600 mb-6">
                  Founded with a passion for innovation, DevBee Inc. has been at the forefront of software development 
                  for over a decade. We specialize in creating custom solutions that help businesses thrive in the digital age.
                </p>
                <p className="text-gray-600 mb-8">
                  Our team of expert developers, designers, and strategists work collaboratively to deliver exceptional 
                  results that exceed expectations and drive measurable business outcomes.
                </p>
                <Link
                  to="/about"
                  className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-200 flex items-center"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="bg-yellow-50 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">50+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive software development services to help your business succeed in the digital world.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 inline-flex items-center"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        {/* Notable Clients & Projects Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Notable Clients & Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are proud to have worked with industry leaders and innovative startups.
              </p>
            </div>
            <div className="marquee-container py-4">
              <div className="marquee-track">
                {/* Marquee logos - duplicate for seamless loop */}
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <div className="marquee-logo-card">
                      <img src="STREET-82.png" alt="IBM" className="marquee-logo" />
                    </div>
                    <div className="marquee-logo-card">
                      <img src="islm.png" alt="Google" className="marquee-logo" />
                    </div>
                    <div className="marquee-logo-card">
                      <img src="natually.png" alt="Netflix" className="marquee-logo" />
                    </div>
                    <div className="marquee-logo-card">
                      <img src="lck-logo-1.png" alt="Spotify" className="marquee-logo" />
                    </div>
                    <div className="marquee-logo-card">
                      <img src="aamer.png" alt="WhatsApp" className="marquee-logo" />
                    </div>
                    <div className="marquee-logo-card">
                      <img src="NIHR.png" alt="Facebook" className="marquee-logo" />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        {/* CTA Section */}
        <section className="py-16 bg-yellow-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how DevBee can help you achieve your digital goals.
            </p>
            <Link
              to="/contact"
              className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              Talk to our experts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
};

export default Home;