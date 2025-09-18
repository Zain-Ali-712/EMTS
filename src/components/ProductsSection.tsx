'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Operation Theatre Solutions",
      price: "$12,500",
      image: "op.jpg",
      description: "Advanced surgical equipment with precision technology."
    },
    {
      id: 2,
      name: "ICU Monitoring Systems",
      price: "$8,900",
      image: "m3.jpg",
      description: "Critical care monitoring with real-time data analysis."
    },
    {
      id: 3,
      name: "Diagnostic Imaging",
      price: "$23,750",
      image: "m2.webp",
      description: "High-resolution imaging for accurate diagnostics."
    },
    {
      id: 4,
      name: "Emergency Equipment",
      price: "$5,400",
      image: "em.jpg",
      image2: "em3.jpg",
      description: "Reliable emergency medical equipment and supplies."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8faf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#76b82a]">Medical Equipment</span> Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced medical technology solutions designed for precision, reliability, and exceptional patient care.
          </p>
        </motion.div>

        {/* Top Two Products - Overlay Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.slice(0, 2).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden h-96"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image with Scale Effect */}
              <motion.div
                className="relative w-full h-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Gradient Overlay - Always Visible but Lighter */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Product Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-light mb-2"
                  >
                    {product.name}
                  </motion.h3>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="h-0.5 bg-white mb-3"
                  />
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg mb-4"
                  >
                    {product.description}
                  </motion.p>
                  
                  <div className="flex items-center justify-between">
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-xl font-bold"
                    >
                      {product.price}
                    </motion.span>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Third Product - Left Image, Right Text */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center"
        >
          {/* Left Side - Product Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl h-96"
          >
            <motion.img
              src={products[2].image}
              alt={products[2].name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
              <div className="p-6 text-white">
                <motion.h3
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-light mb-2"
                >
                  {products[2].name}
                </motion.h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="h-0.5 bg-white mb-4"
                />
                <p className="text-lg font-semibold">{products[2].price}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{products[2].name}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {products[2].description}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#76b82a]">{products[2].price}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#76b82a] text-white rounded-full font-medium hover:bg-[#68a325] transition-colors duration-300"
                >
                  Add to Inquiry
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fourth Product - Two Images Side by Side */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative rounded-2xl overflow-hidden mb-16"
        >
          <div className="grid grid-cols-2 gap-0">
            {/* First Image */}
            <motion.div className="relative h-96 overflow-hidden">
              <motion.img
                src={products[3].image}
                alt={`${products[3].name} (Image 1)`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
            
            {/* Second Image */}
            <motion.div className="relative h-96 overflow-hidden">
              <motion.img
                src={products[3].image2}
                alt={`${products[3].name} (Image 2)`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
          
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
            <div className="p-12 text-white max-w-md">
              <h3 className="text-3xl font-light mb-4">{products[3].name}</h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="h-0.5 bg-white mb-6"
              />
              <p className="text-lg mb-6">{products[3].description}</p>
              <div className="flex items-center gap-6">
                <span className="text-2xl font-bold">{products[3].price}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(118, 184, 42, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#76b82a] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#68a325] transition-colors duration-300"
          >
            Explore All Products
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductsSection;