import React from 'react';
import { Users, Target, Eye, Award, CheckCircle } from 'lucide-react';
import ScrollFadeIn from '../components/ScrollFadeIn';

const About = () => {
  const team = [
    {
      name: 'Abuthair Mohammed Rafiq',
      role: 'CEO & Founder',
      image: '/devbee/abpfp.png',
      description: 'Visionary leader with 15+ years in software development and business strategy.'
    },
    {
      name: 'Fasil Marshooq',
      role: 'Co-Founder & COO',
      image: '/devbee/fasil.webp',
      description: 'Technical expert specializing in AI, cloud architecture, and scalable systems.'
    },
    {
      name: 'Musthak Ahamed',
      role: 'Lead Developer',
      image: '/devbee/mus.png',
      description: 'Full-stack developer with expertise in modern web and mobile technologies.'
    },
    {
      name: 'Thowfeeq ahmad',
      role: 'UI/UX Designer',
      image: '/devbee/pfp.webp',
      description: 'Creative designer focused on user-centered design and digital experiences.'
    }
  ];

  const whyChooseUs = [
    'Customer-first, always.',
    'End-to-end support —from idea to deployment and beyond.',
    'Built with precision, quality, and practical thinking.',
    'Transparent communication',
    '24/7 support and maintenance',
    'Powered by strategic insight, not buzzwords.',
    'On-time project delivery',
    'Scalable and secure solutions'
  ];

  return (
    <div>
      <ScrollFadeIn>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-yellow-600">DevBee Inc.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are a passionate team of software developers, designers, and innovators dedicated to 
                creating exceptional digital solutions that drive business success.
              </p>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        {/* Company Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2020 by Abuthair Mohammed Rafiq and Fasil Marshooq, DevBee Inc. is a customer-centric software firm headquartered in India, with expansion plans underway for the Middle East.
                </p>
                <p className="text-gray-600 mb-6">
                  Our journey has been marked by continuous learning, adaptation, and an unwavering commitment 
                  to excellence. We've weathered market changes, embraced new technologies, and always kept 
                  our clients' success at the heart of everything we do.
                </p>
                <p className="text-gray-600">
                  Today, DevBee Inc. stands as a testament to the power of innovation, hard work, and the 
                  belief that great software can transform businesses and lives.
                </p>
              </div>
              <div className="bg-yellow-50 p-8 rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team collaboration" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        {/* Mission, Vision, Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                 Create apps that touch people’s lives.We believe in transparency, practicality, and meaningful technology —every line of code we write solves a real problem.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading software development partner for businesses worldwide, 
                  known for our innovation, quality, and commitment to client success.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Excellence, integrity, innovation, and collaboration guide everything we do. 
                  We believe in building lasting relationships based on trust and mutual success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our diverse team of experts brings together years of experience and a passion for creating 
                exceptional software solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        {/* Why Choose Us Section */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose DevBee?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that not only work 
                but drive real business results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
};

export default About;