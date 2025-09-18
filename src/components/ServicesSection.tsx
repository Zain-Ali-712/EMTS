'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('services');

  const serviceFeatures = [
    {
      title: "24/7 Hassle Free Service",
      description: "Round-the-clock medical services without complications",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" fill="none" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      title: "Free Emergency Scans",
      description: "Complimentary scans for emergency DHQ Hospital patients",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" fill="none" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    },
    {
      title: "Central Reporting System",
      description: "Advanced PACS for seamless medical imaging",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" fill="none" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "200+ Professional Team",
      description: "Large team of healthcare experts and specialists",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" fill="none" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Qualified Staff",
      description: "Internationally trained medical professionals",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" fill="none" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      title: "Advanced Diagnostic Center",
      description: "State-of-the-art diagnostic facilities in Punjab",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" fill="none" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      title: "Top Radiologists",
      description: "Expert radiologists for comprehensive reporting",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" fill="none" strokeWidth="1.5">
          <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
        </svg>
      )
    },
    {
      title: "Advanced CT Equipment",
      description: "Cutting-edge Hitachi Medical CT scan technology",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" fill="none" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    }
  ];

  const mainServices = [
    {
      title: "Medical Equipment Distributors",
      description: "25+ years providing world-class medical equipment from leading international manufacturers with guaranteed quality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8" fill="none" strokeWidth="1.5">
          <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h4v1c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-1h4c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5z"/>
        </svg>
      ),
      features: ["25+ years experience", "World-renowned manufacturers", "Quality guaranteed"]
    },
    {
      title: "Turn Key Solutions",
      description: "Customized hospital solutions with experienced consultation teams and government partnerships.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8" fill="none" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 8 8 12 12 16" />
          <polyline points="16 12 12 16" />
        </svg>
      ),
      features: ["Customized solutions", "Government partnerships", "Comprehensive solutions"]
    },
    {
      title: "Customer Service",
      description: "50+ internationally trained personnel providing technical support and client training programs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8" fill="none" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      features: ["50+ qualified personnel", "International training", "Technical support"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8faf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#76b82a]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions with cutting-edge technology and exceptional service
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-full p-1 shadow-lg border border-gray-100">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'services' 
                  ? 'bg-[#76b82a] text-white shadow-md' 
                  : 'text-gray-600 hover:text-[#76b82a] hover:bg-gray-50'
              }`}
            >
              Main Services
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'features' 
                  ? 'bg-[#76b82a] text-white shadow-md' 
                  : 'text-gray-600 hover:text-[#76b82a] hover:bg-gray-50'
              }`}
            >
              Key Features
            </button>
          </div>
        </motion.div>

        {/* Content based on active tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'features' ? (
            <motion.div
              key="features-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            >
              {serviceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.2 } 
                  }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-white to-[#f8faf7] rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 mx-auto border-2 border-[#76b82a] group-hover:bg-[#76b82a] transition-all duration-300">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="text-[#76b82a] group-hover:text-white transition-colors duration-300"
                      >
                        {feature.icon}
                      </motion.div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm text-center group-hover:text-[#76b82a] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-xs text-center leading-tight">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="services-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 } 
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#76b82a] to-[#8dcc33] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
                    {/* Icon with outline that fills on hover */}
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border-2 border-[#76b82a] group-hover:bg-[#76b82a] transition-all duration-300">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="text-[#76b82a] group-hover:text-white transition-colors duration-300"
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    
                    <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-[#76b82a] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-[#76b82a] rounded-full mr-3"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Banner with Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#76b82a] to-[#5a8f21] rounded-2xl p-8 text-white text-center overflow-hidden relative"
        >
          {/* Animated background elements */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { number: "25+", label: "Years of Experience" },
              { number: "200+", label: "Professional Staff" },
              { number: "50+", label: "Service Personnel" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2 drop-shadow-md">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;