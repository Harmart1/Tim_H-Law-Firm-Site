import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Ship, 
  Lightbulb, 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  ChevronUp,
  Award,
  Users,
  BookOpen,
  ArrowRight,
  ChalkboardTeacher
} from 'lucide-react';
import './App.css';

// Import assets
import logoImage from './assets/tim_harmar_logo_updated.png';
import heroBackground from './assets/hero_background.png';
import cybersecurityIcon from './assets/services_cybersecurity.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'training', 'resources', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity & Privacy Law",
      description: "PIPEDA compliance, data breach response, privacy policy development, and cybersecurity audits.",
      features: ["Data Protection", "Privacy Compliance", "Breach Response", "CASL Compliance"]
    },
    {
      icon: Ship,
      title: "Maritime & Shipping Law",
      description: "Specialized expertise in Great Lakes shipping, vessel documentation, and maritime regulations.",
      features: ["Vessel Documentation", "Shipping Contracts", "Maritime Insurance", "Port Authority Matters"]
    },
    {
      icon: Lightbulb,
      title: "Intellectual Property Law",
      description: "Comprehensive IP protection including patents, trademarks, copyrights, and licensing agreements.",
      features: ["Patent Applications", "Trademark Registration", "IP Licensing", "Trade Secrets"]
    },
    {
      icon: Building,
      title: "Business & Corporate Law",
      description: "Corporate structuring, commercial agreements, and business development consulting.",
      features: ["Corporate Structuring", "Commercial Agreements", "M&A", "Business Succession"]
    }
  ];

  const credentials = [
    "Master of Engineering, Cybersecurity Policy and Compliance (Candidate)",
    "Master of Laws, Business Law & Banking & Financial Services Law",
    "Juris Doctor, University of Windsor",
    "MBA, Finance & Accounting",
    "Chartered Privacy and Access Professional (CAPP)"
  ];

  const workshops = [
    {
      title: "Cybersecurity for Small Business",
      description: "Understand the threats and learn practical steps to protect your business data and systems."
    },
    {
      title: "IP Strategy for Startups",
      description: "Learn how to identify, protect, and monetize your intellectual property assets."
    },
    {
      title: "Privacy Compliance (PIPEDA)",
      description: "A deep dive into Canada's private sector privacy law and how it applies to your organization."
    },
    {
      title: "AI Governance & Risk Management",
      description: "Navigate the legal and ethical challenges of implementing AI in your business."
    }
  ];

  const publications = [
    {
      title: "The Digital Compass: Navigating Maritime Law in the 21st Century",
      journal: "Journal of Maritime Law & Commerce",
      year: 2023,
      summary: "An analysis of emerging legal challenges in the maritime industry, from autonomous shipping to cybersecurity threats on the Great Lakes.",
      link: "#"
    },
    {
      title: "PIPEDA for Innovators: A Guide to Privacy Compliance in Tech",
      journal: "Canadian Journal of Law and Technology",
      year: 2022,
      summary: "This article provides a practical framework for startups and tech companies to build privacy-by-design into their products and services.",
      link: "#"
    },
    {
      title: "Securing the Chain: Legal Implications of Supply Chain Cybersecurity",
      journal: "International Journal of Law and Information Technology",
      year: 2021,
      summary: "Examines the cascading legal responsibilities for cybersecurity failures within complex global supply chains.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logoImage} alt="Tim Harmar Legal" className="h-10 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'services', 'training', 'resources', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item
                        ? 'text-blue-900 border-b-2 border-teal-500'
                        : 'text-gray-700 hover:text-blue-900'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'services', 'training', 'resources', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-5xl md:text-7xl">TIM HARMAR</span>
              <br />
              <span className="text-2xl md:text-3xl text-teal-300">Legal & Consulting Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Where Technology Meets Law. Specialized expertise in cybersecurity, AI law, intellectual property, and maritime law in Sault Ste. Marie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Schedule Consultation <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                About Tim Harmar
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Award-winning lawyer with cross-functional experience in corporate and intellectual property law, 
                financial and process development consulting. Bringing cutting-edge expertise in cybersecurity, 
                AI law, and maritime law to Sault Ste. Marie's business community.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With a unique combination of legal expertise and business development experience, Tim provides 
                strategic counsel that bridges the gap between traditional legal practice and emerging technology challenges.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Award className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900">Award-Winning</h3>
                  <p className="text-sm text-gray-600">Recognized legal excellence</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900">Community Leader</h3>
                  <p className="text-sm text-gray-600">Active in local development</p>
                </div>
                <div className="text-center">
                  <BookOpen className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900">Educator</h3>
                  <p className="text-sm text-gray-600">Professor at Sault College</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Education & Credentials</h3>
              <ul className="space-y-4">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{credential}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Specialized Legal Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cutting-edge legal expertise for the digital age, serving businesses and entrepreneurs 
              in Sault Ste. Marie and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-teal-500 mr-3" />
                  <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training and Workshops Section */}
      <section id="training" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Training & Workshops
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Leveraging extensive experience as an educator, Tim Harmar offers customized training sessions.
              Available virtually or in-person, for individuals or entire organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <ChalkboardTeacher className="w-8 h-8 text-teal-500 mr-3" />
                  <h3 className="text-xl font-bold text-blue-900">{workshop.title}</h3>
                </div>
                <p className="text-gray-700">{workshop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Resources & Publications
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore insightful articles and publications by Tim Harmar, contributing to the discourse on law and technology.
            </p>
          </motion.div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">{pub.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-semibold">{pub.journal}</span>, {pub.year}
                </p>
                <p className="text-gray-700 mb-4">{pub.summary}</p>
                <a
                  href={pub.link}
                  className="text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-2"
                >
                  Read More <ArrowRight size={18} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to discuss your legal needs? Contact Tim Harmar Legal & Consulting Services today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-teal-300" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">705.943.0634</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-teal-300" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">timharmar@yahoo.ca</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-teal-300" />
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-blue-100">67 Hugill Street<br />Sault Ste. Marie, ON P6A 4E6</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Legal Matter</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-teal-300">
                    <option value="">Select a service area</option>
                    <option value="cybersecurity">Cybersecurity & Privacy Law</option>
                    <option value="maritime">Maritime & Shipping Law</option>
                    <option value="ip">Intellectual Property Law</option>
                    <option value="business">Business & Corporate Law</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    placeholder="Brief description of your legal needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logoImage} alt="Tim Harmar Legal" className="h-12 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-gray-400">
                Specialized legal services for the digital age, serving Sault Ste. Marie and beyond.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cybersecurity & Privacy Law</li>
                <li>Maritime & Shipping Law</li>
                <li>Intellectual Property Law</li>
                <li>Business & Corporate Law</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>67 Hugill Street</p>
                <p>Sault Ste. Marie, ON P6A 4E6</p>
                <p>705.943.0634</p>
                <p>timharmar@yahoo.ca</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tim Harmar Legal & Consulting Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200 z-40"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

