// app/services/page.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Footer from '@/components/Footer';
import CenterModal from '@/components/CenterModal';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedCenter, setSelectedCenter] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      title: "1800+ Professional Team",
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

  const centersData = [
    {
      title: "DHQ Muzaffargarh",
      images: ["/op.jpg", "/lab_bd.jpg", "/bg.jpg"],
      description: "Muzaffargarh is a city in the southwestern Punjab province of Pakistan, located on the bank of the Chenab River. It is the capital city of the Muzaffargarh District. The city serves as a major agricultural and industrial center in the region.",
      address: "Muzaffargarh, Punjab"
    },
    {
      title: "DHQ Mianwali",
      images: ["/lab_bd.jpg", "/op.jpg", "/bg.jpg"],
      description: "Mianwali , is the capital city of Mianwali District, Pakistan",
      address: "Mianwali, Punjab"
    },
    {
      title: "DHQ Layyeh",
      images: ["/bg.jpg", "/lab_bd.jpg", "/op.jpg"],
      description: "Layyah, previously spelled as Leiah, is a city in the Punjab province of Pakistan. The city is headquarter of Layyah District and Layyah Tehsil.",
      address: "Layyeh, Punjab"
    },
    {
      title: "DHQ Chakwal", 
      images: ["/op.jpg", "/bg.jpg", "/lab_bd.jpg"],
      description: "Chakwal is the capital of Chakwal District in Punjab, Pakistan. It is located in the Dhanni region of the Salt Range. The city is known for its agricultural production and historical significance in the region.",
      address: "Chakwal, Punjab"
    },
    {
      title: "DHQ Okara",
      images: ["/lab_bd.jpg", "/op.jpg", "/bg.jpg"],
      description: "Okara is a city in the Punjab province of Pakistan and the capital of Okara District. The city is a major agricultural center and is known for its dairy production and textile industry.",
      address: "Okara, Punjab"
    },
    {
      title: "DHQ Rajanpur",
      images: ["/bg.jpg", "/op.jpg", "/lab_bd.jpg"],
      description: "Rajanpur, is a city and the headquarters of Rajanpur District in the far southwestern part of Punjab, Pakistan. The district is a narrow, 32km to 64km wide strip of land sandwiched between the Indus River on the east and the Sulaiman Mountains on the west.",
      address: "Rajanpur, Punjab"
    },
    {
      title: "DHQ Khanewal",
      images: ["/op.jpg", "/lab_bd.jpg", "/bg.jpg"],
      description: "Khanewal is a city and the capital of Khanewal District in the Punjab province of Pakistan. According to the 2017 Census of Pakistan, its population is 227,059. It is the 36th Biggest city of Pakistan by population.",
      address: "Khanewal, Punjab"
    },
    {
      title: "DHQ Toba Tek Singh",
      images: ["/lab_bd.jpg", "/bg.jpg", "/op.jpg"],
      description: "Toba Tek Singh, is a city and tehsil of Toba Tek Singh District in the Pakistani province of Punjab.",
      address: "Toba Tek Singh, Punjab"
    },
    {
      title: "DHQ Narowal",
      images: ["/bg.jpg", "/lab_bd.jpg", "/op.jpg"],
      description: "Narowal, is a city in the northeast of the Punjab province of Pakistan. The city is the capital of Narowal District and become Narowal Tehsil in 1989. Narowal is known for its University and for its Faiz Ahmed Park named after the Urdu poet Faiz Ahmed Faiz.",
      address: "Narowal, Punjab"
    },
    {
      title: "DHQ Pakpatan",
      images: ["/op.jpg", "/bg.jpg", "/lab_bd.jpg"],
      description: "Pakpattan, Pakpattan, often referred to as Pākpattan Sharīf, is the capital city of the Pakpattan District, located in central Punjab province in Pakistan.",
      address: "Pakpatan, Punjab"
    },
    {
      title: "DHQ Sheikhupura",
      images: ["/lab_bd.jpg", "/op.jpg", "/bg.jpg"],
      description: "Shekhupura, also known as Qila Sheikhupura is a city in the Pakistani province of Punjab. Founded by the Mughal Emperor Jehangir in 1607, Sheikhupura is now the 16th largest city in Pakistan, and is the headquarters of Sheikhupura District.",
      address: "Sheikhupura, Punjab"
    },
    {
      title: "DHQ Khushab",
      images: ["/bg.jpg", "/lab_bd.jpg", "/op.jpg"],
      description: "Khushab, is a city as well as a district in the Punjab province of Pakistan. The word Khushab means 'sweet water'. Khushab city also serves as the headquarters of Khushab Tehsil, an administrative subdivision of the district Khushab.",
      address: "Khushab, Punjab"
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

  const openModal = (center: any) => {
    setSelectedCenter(center);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCenter(null);
  };

  return (
    <div className="min-h-screen bg-white">      
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-[#76b82a]/80 to-[#5a8f21]/70 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-65">
            <img
              src="/lab_bd.jpg"
              alt="Medical Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#76b82a]/20 to-[#5a8f21]/10"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-8"
              >
                <div className="bg-[#76b82a]/20 backdrop-blur-sm border border-[#76b82a]/30 rounded-full px-6 py-3">
                  <span className="text-[#76b82a] font-semibold text-lg">Our Services</span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Our <span className="text-[#9aff27]">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Comprehensive Healthcare Solutions with Cutting-Edge Technology and Exceptional Service
              </p>
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 left-10 w-4 h-4 bg-[#76b82a] rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute top-20 right-20 w-6 h-6 bg-[#76b82a] rounded-full opacity-40"
          />
        </section>

        {/* PPP Project Section - Optimized Version */}
        <section className="py-20 bg-gradient-to-br from-white to-[#f8faf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                PPP Project with <span className="text-[#76b82a]">Government of Punjab</span>
              </h2>
              <div className="w-24 h-1 bg-[#76b82a] mx-auto mb-8"></div>
            </motion.div>

            {/* Partnership Showcase */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Content */}
                <div className="p-12 lg:p-16">
                  <div className="space-y-8">
                    <div>
                      <div className="inline-flex items-center px-4 py-2 bg-[#76b82a]/10 rounded-full mb-6">
                        <span className="text-[#76b82a] font-semibold">Public Private Partnership</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Transforming Healthcare in <span className="text-[#76b82a]">Punjab</span>
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <p className="text-gray-600 text-lg leading-relaxed">
                        EMTS is a partner with Primary & Secondary Healthcare department, Government of Punjab, Pakistan to provide service of CT Scan in 20 DHQ hospitals in Punjab.
                      </p>
                      
                      <p className="text-gray-600 text-lg leading-relaxed">
                        EMTS has established & running 20 state of the art CT Scan Centers all around Punjab on a Public Private Partnership basis. This project holds a great significance as it serves the masses all around Punjab.
                      </p>

                      <p className="text-gray-600 text-lg leading-relaxed">
                        Our centres directly benefit the nation by giving them an advance and state of the art service.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Partnership Visual with Integrated Achievements */}
                <div className="bg-gradient-to-br from-[#76b82a] to-[#5a8f21] p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10 text-center text-white">
                    {/* Partnership Logos */}
                    <div className="flex items-center justify-center space-x-4 mb-8">
                      <div className="bg-white/20 rounded-2xl p-2 backdrop-blur-sm transition-transform hover:scale-105">
                        <div className="w-36 h-36 bg-white rounded-lg flex items-center justify-center p-2">
                          <img 
                            src="/logo.png" 
                            alt="EMTS Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>              
                      <div className="bg-white/20 rounded-2xl p-2 backdrop-blur-sm transition-transform hover:scale-105">
                        <div className="w-36 h-36 bg-white rounded-lg flex items-center justify-center p-2">
                          <img 
                            src="/punjablogo.webp" 
                            alt="Government of Punjab Logo" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-4">Strategic Partnership</h4>
                    <p className="text-white/90 text-lg mb-8">
                      Working together for better healthcare across Punjab
                    </p>

                    {/* Key Achievements - Integrated with logos */}
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">20+</div>
                          <div className="text-white/90 text-sm font-medium">CT Scan Centers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">24/7</div>
                          <div className="text-white/90 text-sm font-medium">Service Availability</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Section */}
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
                Our <span className="text-[#76b82a]">Comprehensive Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Delivering excellence in healthcare technology and service solutions
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
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
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
                      <div className="bg-gradient-to-br from-white to-[#f8faf7] rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto border-2 border-[#76b82a] group-hover:bg-[#76b82a] transition-all duration-300">
                          <motion.div
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="text-[#76b82a] group-hover:text-white transition-colors duration-300"
                          >
                            {feature.icon}
                          </motion.div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2 text-center group-hover:text-[#76b82a] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
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
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
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
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
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
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="space-y-3">
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

            {/* Enhanced Stats Banner */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-[#76b82a] to-[#5a8f21] rounded-2xl p-12 text-white text-center overflow-hidden relative"
            >
              {/* Animated background elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { number: "25+", label: "Years of Experience" },
                  { number: "200+", label: "Professional Staff" },
                  { number: "50+", label: "Service Personnel" },
                  { number: "20+", label: "CT Scan Centers" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-md">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* CT Scan Centers Section */}
        <section className="py-20 bg-gradient-to-br from-[#f8faf7] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-[#76b82a]">CT Scan Centers</span>
              </h2>
              <div className="w-24 h-1 bg-[#76b82a] mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                State-of-the-art CT Scan facilities across Punjab under PPP with Government of Punjab
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {centersData.map((center, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => openModal(center)}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={center.images[0]}
                      alt={center.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-[#76b82a] transition-colors duration-300">
                        {center.title}
                      </h3>
                      <p className="text-white/90 text-sm flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {center.address}
                      </p>
                    </div>

                    {/* Hover Effect Indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#76b82a] text-white p-2 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-[#76b82a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        24/7 Service
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-[#76b82a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Free Emergency
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      </main>

      {/* Modal */}
      <CenterModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        center={selectedCenter} 
      />

      <Footer />
    </div>
  );
};

export default ServicesPage;