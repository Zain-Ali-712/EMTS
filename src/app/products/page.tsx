// app/products/page.tsx
'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const ProductsPage = () => {
  const router = useRouter();

  const productCategories = [
    {
      id: 1,
      title: "Operation Theater Products",
      description: "Complete surgical solutions including operation tables, lights, anesthesia machines, and surgical instruments for modern operating theaters.",
      shortDesc: "Complete surgical solutions",
      image: "/ot.jpg",
      type: "wide",
      position: "left",
      slug: "operation-theater"
    },
    {
      id: 2,
      title: "Emergency Equipment",
      shortDesc: "Critical care equipment and emergency response systems",
      image: "/emergency.jpg",
      type: "small",
      position: "top",
      slug: "emergency-equipment"
    },
    {
      id: 3,
      title: "Gynecologist Products",
      shortDesc: "Specialized equipment for women's health",
      image: "/gino.jpg",
      type: "small",
      position: "top",
      slug: "gynecologist-products"
    },
    {
      id: 4,
      title: "Oxygen Pipeline Systems",
      shortDesc: "Medical gas pipeline distribution solutions",
      image: "/gas.jpg",
      type: "small",
      position: "top",
      slug: "oxygen-pipeline"
    },
    {
      id: 5,
      title: "Pneumatic Tubing Products",
      shortDesc: "High-quality medical tubing systems",
      image: "/tube.jpg",
      type: "small",
      position: "top",
      slug: "pneumatic-tubing"
    },
    {
      id: 6,
      title: "ICU Equipment",
      description: "Intensive care unit equipment including ICU beds, vital signs monitors, infusion pumps, and critical care ventilators.",
      shortDesc: "Intensive care unit equipment",
      image: "/icu.jpg",
      type: "wide",
      position: "right",
      slug: "icu-equipment"
    },
    {
      id: 7,
      title: "Diagnostic Products",
      description: "Advanced diagnostic equipment including CT scanners, MRI machines, X-ray systems, and laboratory analyzers.",
      image: "/digno.jpg",
      type: "full",
      position: "top",
      slug: "diagnostic-products"
    }
  ];

  const handleProductClick = (slug: string) => {
    router.push(`/products/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/lab_bg.jpg"
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
                <div className="bg-[#76b82a]/30 backdrop-blur-sm border border-[#76b82a]/40 rounded-full px-6 py-3">
                  <span className="text-white font-semibold text-lg">Medical Equipment</span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Our <span className="text-[#76b82a]">Products</span>
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
                Advanced Medical Equipment and Healthcare Solutions from World-Renowned Manufacturers
              </p>
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 left-10 w-4 h-4 bg-[#76b82a] rounded-full opacity-70"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute top-20 right-20 w-6 h-6 bg-[#76b82a] rounded-full opacity-50"
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
            <div className="space-y-6">
              {/* Row 1: Wide left + 2 small right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Wide left */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-500 h-80 cursor-pointer"
                  onClick={() => handleProductClick(productCategories[0].slug)}
                >
                  <div className="absolute inset-0">
                    <img
                      src={productCategories[0].image}
                      alt={productCategories[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-[#76b82a]/10 to-transparent"></div>
                  </div>
                  <div className="relative h-full flex items-start p-6 md:p-8 text-white">
                    <div className="max-w-[350px]">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-700">
                        {productCategories[0].title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {productCategories[0].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* 2 small right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {productCategories.slice(1, 3).map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                      className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-500 h-80 cursor-pointer"
                      onClick={() => handleProductClick(product.slug)}
                    >
                      <div className="absolute inset-0">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-[#76b82a]/10 to-transparent"></div>
                      </div>
                      <div className="relative h-full flex flex-col justify-start p-6 text-white">
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-700">
                            {product.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {product.shortDesc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Row 2: 2 small left + wide right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 2 small left */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {productCategories.slice(3, 5).map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-500 h-80 cursor-pointer"
                      onClick={() => handleProductClick(product.slug)}
                    >
                      <div className="absolute inset-0">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-[#76b82a]/10 to-transparent"></div>
                      </div>
                      <div className="relative h-full flex flex-col justify-start p-6 text-white">
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-700">
                            {product.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {product.shortDesc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Wide right */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-500 h-80 cursor-pointer"
                  onClick={() => handleProductClick(productCategories[5].slug)}
                >
                  <div className="absolute inset-0">
                    <img
                      src={productCategories[5].image}
                      alt={productCategories[5].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-[#76b82a]/10 to-transparent"></div>
                  </div>
                  <div className="relative h-full flex items-start justify-end p-6 md:p-8 text-white">
                    <div className="max-w-[320px] text-right">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-700">
                        {productCategories[5].title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {productCategories[5].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Row 3: Full width */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-500 h-80 cursor-pointer"
                onClick={() => handleProductClick(productCategories[6].slug)}
              >
                <div className="absolute inset-0">
                  <img
                    src={productCategories[6].image}
                    alt={productCategories[6].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-[#76b82a]/10 to-transparent"></div>
                </div>
                <div className="relative h-full flex items-start p-6 md:p-8 text-white">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-4xl font-bold mb-3 text-gray-700">
                      {productCategories[6].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {productCategories[6].description}
                    </p>
                  </div>
                </div>
              </motion.div>
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