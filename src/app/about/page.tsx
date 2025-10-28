// app/about/page.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  return (
    <div className="min-h-screen bg-white">

        <main>
        {/* Hero Section with Lab Background */}
        <section className="relative py-14 lg:mx-16 bg-gradient-to-r from-[#76b82a] to-[#5a8f21] overflow-hidden border rounded-br-3xl rounded-bl-3xl">
          
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
                <div className="bg-[#76b82a]/80 backdrop-blur-sm border border-[#fff]/30 rounded-full px-6 py-3">
                  <span className="text-[#fff]/80 font-light text-lg">Since 1997</span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                About <span className="text-[#9aff27]">EMTS</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Pioneering Medical Technology Solutions with Excellence & Innovation for Over 25 Years
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

        {/* Introduction Section */}
        <section className="py-20 bg-gradient-to-br from-white to-[#f8faf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
                <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-[#76b82a]">Journey</span>
              </h2>
              <div className="w-24 h-1 bg-[#76b82a] mx-auto mb-8"></div>
              
            </motion.div>

              
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    <span className="font-semibold text-[#76b82a]">Eastern Medical Technology Services (EMTS)</span> was established in 1997. We deal in hi-tech medical equipment. We are the exclusive distributor of more than 30 worldwide renowned manufacturers, who are specialized in manufacturing of medical devices. We cover a lot of fields in medical sector. Our concentration is in Radiology products, Ultrasounds, ICU products, Operation theatre products, Gynecology products, Central Gas pipeline, general hospital products & hospital furniture.
                  </p>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    We have more than 200 employees, most of them are nationally and internationally trained. We provide turnkey and tailored solutions to our clients with the help of our expert consultants. We are responsible for complete project management, Installation of equipment, training of end user, maintenance of equipment, and all kind of after sale services to our valued customers.       
                  </p>
                </div>

            {/* Certifications & Partnerships */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-16 bg-gradient-to-r from-[#76b82a] to-[#5a8f21] rounded-2xl p-8 text-white"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Certifications & Partnerships</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      ISO 9001 Certified
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      OHSAS 18001 Certified
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Government of Punjab Partnership
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Office Locations</h3>
                  <p className="opacity-90">
                    Head Office: Lahore<br />
                    Regional Offices: Rawalpindi, Multan, Quetta & Karachi
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CEO Message Section */}
        <section className="py-20 bg-gradient-to-br from-white to-[#f0f7eb] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full opacity-[0.7]"
              style={{
                backgroundImage: "url('/bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Leadership <span className="text-[#76b82a]">Message</span>
              </h2>
              <div className="w-24 h-1 bg-[#76b82a] mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Visionary Leadership Driving Innovation in Healthcare Technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* CEO Image with Enhanced Design */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex justify-center lg:col-span-1"
              >
                <div className="relative">
                  <div className="absolute -inset-6 bg-[#76b82a]/10 rounded-full animate-pulse"></div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#76b82a] rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#76b82a] rounded-full"></div>
                  
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src="/ceo.png"
                      alt="CEO - Eastern Medical Technology Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#76b82a] text-white px-6 py-3 rounded-full shadow-lg">
                    <div className="text-center">
                      <div className="font-bold text-lg">CEO</div>
                      <div className="text-base opacity-90">Ghulam Ali Shakir</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CEO Message */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-8 lg:col-span-2"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                  <div className="space-y-6">
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-[#76b82a] pl-4"
                    >
                      "We started off in 1994 with basic selling of ICU Monitors and Pulse Oximeters. With continuous struggle, market intelligence & dedication, we are here now as one of the leading firms supplying medical equipment with a high end customer satisfaction in Pakistan."
                    </motion.p>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-[#76b82a] pl-4"
                    >
                      "We in Eastern Medical Technology Services believe in team working. I believe that behind every successful venture, there's a team who endeavor. One other interesting pattern of EMTS is that we have leaders here instead of bosses, to motivate and work hard along with employees."
                    </motion.p>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-[#76b82a] pl-4"
                    >
                      "I think that the sustained growth of our company is due to our market intelligence, transparent policy & trust in our employees."
                    </motion.p>
                  </div>
                </div>
                
                {/* Signature */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-right"
                >
                  <div className="text-[#76b82a] font-bold text-xl">Leadership Team</div>
                  <div className="text-gray-600">Eastern Medical Technology Services</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Vision & Mission Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-20"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('vision')}
                    className={`flex-1 py-6 px-8 text-lg font-semibold transition-all duration-300 ${
                      activeTab === 'vision'
                        ? 'bg-[#76b82a] text-white'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <div className={`w-3 h-3 rounded-full border-2 ${
                        activeTab === 'vision' ? 'border-white' : 'border-[#76b82a]'
                      }`} />
                      <span>Our Vision</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('mission')}
                    className={`flex-1 py-6 px-8 text-lg font-semibold transition-all duration-300 ${
                      activeTab === 'mission'
                        ? 'bg-[#76b82a] text-white'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <div className={`w-3 h-3 rounded-full border-2 ${
                        activeTab === 'mission' ? 'border-white' : 'border-[#76b82a]'
                      }`} />
                      <span>Our Mission</span>
                    </div>
                  </button>
                </div>

                {/* Content */}
                <div className="min-h-[300px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'vision' && (
                      <motion.div
                        key="vision"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="p-8"
                      >
                        <div className="text-center mb-8">
                          <div className="w-16 h-16 bg-[#76b82a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-[#76b82a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                        </div>
                        <p className="text-xl text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
                          The vision of EMTS is to become the most dynamic, valued and leading healthcare service provider in the community we serve.
                        </p>
                      </motion.div>
                    )}

                    {activeTab === 'mission' && (
                      <motion.div
                        key="mission"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="p-8"
                      >
                        <div className="text-center mb-8">
                          <div className="w-16 h-16 bg-[#76b82a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-[#76b82a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                        </div>
                        <div className="space-y-6 max-w-4xl mx-auto">
                          <p className="text-lg text-gray-700 text-center mb-8">
                            Eastern Medical Technology Services is committed to improve the health status of the community.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#76b82a]/5 rounded-lg p-4 border border-[#76b82a]/10">
                              <h4 className="font-semibold text-[#76b82a] mb-2">Leadership & Excellence</h4>
                              <p className="text-gray-600 text-sm">Delivering quality health care services with excellence</p>
                            </div>
                            <div className="bg-[#76b82a]/5 rounded-lg p-4 border border-[#76b82a]/10">
                              <h4 className="font-semibold text-[#76b82a] mb-2">Innovative Equipment</h4>
                              <p className="text-gray-600 text-sm">Providing innovative & top-notch medical equipment</p>
                            </div>
                            <div className="bg-[#76b82a]/5 rounded-lg p-4 border border-[#76b82a]/10">
                              <h4 className="font-semibold text-[#76b82a] mb-2">Customized Solutions</h4>
                              <p className="text-gray-600 text-sm">Tailored solutions matching our clients' specific needs</p>
                            </div>
                            <div className="bg-[#76b82a]/5 rounded-lg p-4 border border-[#76b82a]/10">
                              <h4 className="font-semibold text-[#76b82a] mb-2">Research & Education</h4>
                              <p className="text-gray-600 text-sm">Expanding medical knowledge through biomedical research and training</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How We're Different Section */}
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
                How We're <span className="text-[#76b82a]">Different</span>
              </h2>
              <div className="w-24 h-1 bg-[#76b82a] mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                More Than a Company - We're a Family
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Side - Content */}
                  <div className="p-12 lg:p-16">
                    <div className="space-y-8">
                      <div>
                        <div className="inline-flex items-center px-4 py-2 bg-[#76b82a]/10 rounded-full mb-6">
                          <span className="text-[#76b82a] font-semibold">Our Culture</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                          EMTS is not just a firm, <span className="text-[#76b82a]">it's a Family</span>
                        </h3>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#76b82a] rounded-full flex items-center justify-center mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Quality Working Environment</h4>
                            <p className="text-gray-600">We provide a very good quality working environment in our office with interactive and communicative staff</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#76b82a] rounded-full flex items-center justify-center mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Strong Client Relationships</h4>
                            <p className="text-gray-600">Our staff maintains excellent communication with both colleagues and clients</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#76b82a] rounded-full flex items-center justify-center mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">United Community</h4>
                            <p className="text-gray-600">Healthy working relationships with clients and all stakeholders make us One</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6">
                        <div className="inline-flex items-center space-x-2 text-[#76b82a] font-semibold">
                          <span>Join our family</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Visual */}
                  <div className="bg-gradient-to-br from-[#76b82a] to-[#5a8f21] p-12 lg:p-16 flex items-center justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
                      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10 text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold mb-4">One Family, One Vision</h4>
                      <p className="text-white/90 text-lg">
                        Where every member matters and every relationship is valued
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-[#76b82a] rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#76b82a] rounded-full opacity-30"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;