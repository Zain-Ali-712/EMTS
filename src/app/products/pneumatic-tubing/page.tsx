// app/products/oxygen-pipeline/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function OxygenPipelinePage() {

const router = useRouter();
  const handleContactClick = () => {
    router.push('/contact');
  };

  const products = [
    {
      id: 1,
      name: "Medical Gas Pipeline Systems",
      description: "Complete medical gas distribution systems for hospitals and healthcare facilities",
      image: "/tube.jpg"
    },
    {
      id: 2,
      name: "Oxygen Outlets",
      description: "Wall-mounted oxygen outlets with safety features",
      image: "/tube.jpg"
    },
    {
      id: 3,
      name: "Gas Manifolds",
      description: "Central gas manifolds for bulk storage and distribution",
      image: "/tube.jpg"
    },
    {
      id: 4,
      name: "Flow Meters",
      description: "Precision flow meters for gas control and monitoring",
      image: "/tube.jpg"
    },
    {
      id: 5,
      name: "Pipeline Valves",
      description: "Safety valves and control systems for gas pipelines",
      image: "/tube.jpg"
    },
    {
      id: 6,
      name: "Monitoring Systems",
      description: "Real-time monitoring and alarm systems for gas pipelines",
      image: "/tube.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-[#76b82a]/90 to-[#5a8f21]/80 overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/tube-hero.jpg"
              alt="Oxygen Pipeline Systems"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#76b82a]/40 to-[#5a8f21]/30"></div>
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
                <div className="bg-[#76b82a]/30 backdrop-blur-sm border border-[#76b82a]/40 rounded-full px-6 py-3">
                  <span className="text-white font-semibold text-lg">Tubing Systems</span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Pneumatic Tubing Systems
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Complete pneumatic tubing solutions for hospitals and healthcare facilities with advanced safety features
              </p>
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 left-10 w-4 h-4 bg-white rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute top-20 right-20 w-6 h-6 bg-white rounded-full opacity-40"
          />
        </section>

        {/* Telecom Partnership Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#76b82a]/5 to-[#5a8f21]/10 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Side - Content & Stats */}
              <div className="space-y-8">
                {/* Heading and Description */}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-gray-900"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Top Quality <span className="text-[#76b82a]">Pneumetic Tubing System</span>
                  </h2>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      For 6 decades Telecom is proud manufacturer of pneumatic tube systems. A pneumatic tube system is a network of tubes and stations, that allows multiple users to send goods in a carrier from station to station in any room to room floor to floor building to building.
                    </p>
                    
                    <p>
                      Telecom tube systems provides the means to optimize your organizations internal logistics, by increasing productivity in all aspects of internal transport of materials that fit in a carrier and weigh up to 20 kg.
                    </p>
                    
                    <p className="font-semibold text-[#76b82a]">
                      Please contact us for more information or send your information request here below.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Logos & Product Image */}
              <div className="space-y-12">
                {/* Partnership Logos */}
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-2 gap-6 h-32"
                >
                  {/* Telecom Logo Placeholder */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center border border-gray-200">
                      <div className="w-48 h-24 rounded flex items-center justify-center mx-auto mb-2">
                        <img 
                        src="/telecomlogo.png" 
                        alt="Telecom Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Holland Logo Placeholder */}
                  <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center border border-gray-200">
                      <div className="w-24 h-24 rounded flex items-center justify-center mx-auto mb-2">
                        <img 
                        src="/holland.png" 
                        alt="EMTS Logo"
                        className="w-full h-full object-contain"
                        />
                    </div>
                  </div>
                </motion.div>

                {/* Product Image */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-lg h-64"
                >
                  <img
                    src="/8tube.png"
                    alt="Pneumatic Tube System"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-4 left-4 w-6 h-6 bg-[#76b82a] rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-4 right-4 w-4 h-4 bg-[#76b82a] rounded-full opacity-40"
                  />
                </motion.div>
              </div>
            
            </div>
            {/* Stats Grid */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-4 gap-4 w-full mt-10"
                >
                  <div className="bg-gradient-to-br from-[#5a8f21]/20 to-[#76b82a]/10 rounded-xl p-6 text-center border border-[#76b82a]/20">
                    <div className="text-2xl md:text-3xl font-bold text-[#5a8f21] mb-2">13,000+</div>
                    <div className="text-gray-700 text-sm font-medium">Customers Worldwide</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#5a8f21]/20 to-[#76b82a]/10 rounded-xl p-6 text-center border border-[#76b82a]/20">
                    <div className="text-2xl md:text-3xl font-bold text-[#5a8f21] mb-2">45+</div>
                    <div className="text-gray-700 text-sm font-medium">Countries Served</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#5a8f21]/20 to-[#76b82a]/10 rounded-xl p-6 text-center border border-[#76b82a]/20">
                    <div className="text-2xl md:text-3xl font-bold text-[#5a8f21] mb-2">40+</div>
                    <div className="text-gray-700 text-sm font-medium">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#5a8f21]/20 to-[#76b82a]/10 rounded-xl p-6 text-center border border-[#76b82a]/20">
                    <div className="text-2xl md:text-3xl font-bold text-[#5a8f21] mb-2">60+</div>
                    <div className="text-gray-700 text-sm font-medium">Years in Healthcare</div>
                  </div>
                </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-[#76b82a]">Products</span>
              </h2>
              <div className="w-24 h-1 bg-[#76b82a] mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive range of oxygen pipeline systems and components
              </p>
            </motion.div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 h-80 cursor-pointer"
                >
                  {/* Product Image */}
                  <div className="absolute inset-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  </div>

                  {/* Product Content Overlay */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-700 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#76b82a]/30 transition-all duration-300 rounded-xl"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#76b82a] to-[#5a8f21] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Pneumatic Tubing Products?</h3>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Contact our experts for tailored solutions that meet your specific healthcare facility requirements.
                  </p>
                  <button 
                    onClick={handleContactClick}
                    className="bg-white text-[#76b82a] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Our Experts
                    <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}