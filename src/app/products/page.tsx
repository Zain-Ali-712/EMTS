// app/products/page.tsx
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductsPage = () => {
  const productCategories = [
    {
      id: 1,
      title: "Operation Theater Products",
      description: "Complete surgical solutions including operation tables, lights, anesthesia machines, and surgical instruments for modern operating theaters.",
      image: "/op.jpg",
      type: "wide",
      position: "left"
    },
    {
      id: 2,
      title: "Emergency Equipment",
      description: "Critical care equipment including defibrillators, ventilators, patient monitors, and emergency response systems.",
      image: "/lab_bd.jpg",
      type: "small",
      position: "top"
    },
    {
      id: 3,
      title: "Gynecologist Products",
      description: "Specialized equipment for women's health including ultrasound systems, colposcopes, and labor monitoring devices.",
      image: "/bg.jpg",
      type: "small",
      position: "top"
    },
    {
      id: 4,
      title: "Oxygen Pipeline Systems",
      description: "Medical gas pipeline systems, oxygen concentrators, flow meters, and complete hospital gas distribution solutions.",
      image: "/op.jpg",
      type: "small",
      position: "top"
    },
    {
      id: 5,
      title: "Medical Tubing Products",
      description: "High-quality medical tubing, IV sets, catheters, and fluid management systems for various medical applications.",
      image: "/lab_bd.jpg",
      type: "small",
      position: "top"
    },
    {
      id: 6,
      title: "ICU Equipment",
      description: "Intensive care unit equipment including ICU beds, vital signs monitors, infusion pumps, and critical care ventilators.",
      image: "/bg.jpg",
      type: "wide",
      position: "right"
    },
    {
      id: 7,
      title: "Diagnostic Products",
      description: "Advanced diagnostic equipment including CT scanners, MRI machines, X-ray systems, and laboratory analyzers.",
      image: "/op.jpg",
      type: "wide",
      position: "top"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-black/80 to-black/60 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-65">
            <img
              src="/lab_bd.jpg"
              alt="Medical Products"
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
                  <span className="text-[#76b82a] font-semibold text-lg">Medical Equipment</span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Our <span className="text-[#76b82a]">Products</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Advanced Medical Equipment and Healthcare Solutions from World-Renowned Manufacturers
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

        {/* Product Categories Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Product <span className="text-[#76b82a]">Categories</span>
              </h2>
              <div className="w-24 h-1 bg-[#76b82a] mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive range of medical equipment and healthcare solutions for modern medical facilities
              </p>
            </motion.div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ${
                    product.type === 'wide' ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-1'
                  } ${product.type === 'wide' ? 'h-80' : 'h-64'}`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Clean gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className={`relative h-full flex text-white p-6 ${
                    product.position === 'top' ? 'flex-col justify-between' : 
                    product.position === 'left' ? 'items-center' : 
                    'items-center justify-end'
                  }`}>
                    
                    {product.position === 'top' && (
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-[#76b82a] transition-colors duration-300">
                            {product.title}
                          </h3>
                          <p className="text-white/90 text-sm leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                        <button className="bg-[#76b82a] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5a8f21] transition-all duration-300 transform hover:scale-105 w-fit">
                          Explore
                        </button>
                      </div>
                    )}

                    {product.position === 'left' && (
                      <div className="max-w-md">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#76b82a] transition-colors duration-300">
                          {product.title}
                        </h3>
                        <p className="text-white/90 text-base mb-4 leading-relaxed">
                          {product.description}
                        </p>
                        <button className="bg-[#76b82a] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#5a8f21] transition-all duration-300 transform hover:scale-105">
                          Explore Products
                        </button>
                      </div>
                    )}

                    {product.position === 'right' && (
                      <div className="max-w-md text-right">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#76b82a] transition-colors duration-300">
                          {product.title}
                        </h3>
                        <p className="text-white/90 text-base mb-4 leading-relaxed">
                          {product.description}
                        </p>
                        <button className="bg-[#76b82a] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#5a8f21] transition-all duration-300 transform hover:scale-105">
                          Explore Products
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#76b82a]/30 transition-all duration-300 rounded-xl"></div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-[#76b82a] to-[#5a8f21] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Medical Equipment Solutions?</h3>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Contact our experts for tailored medical equipment solutions that meet your specific healthcare facility requirements.
                  </p>
                  <button className="bg-white text-[#76b82a] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
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
};

export default ProductsPage;