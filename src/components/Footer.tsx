import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/devbee/Devbee.png" alt="DevBee Inc." className="h-8 w-auto" />
           
            </div>
            <p className="text-gray-300 text-sm">
              Innovative software solutions for modern businesses. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/919003095635" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <SiWhatsapp size={20} />
              </a>
              <a href="https://github.com/devbee-engineering" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/company/devbeeinc/people/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>AI Solutions</li>
              <li>Cloud Services</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">DevBee Inc., Coimbatore , India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">+91 90030 95635</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">support@dev-bee.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 DevBee Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors duration-200">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;