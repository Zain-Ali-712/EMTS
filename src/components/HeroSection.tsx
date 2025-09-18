// components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const medicalServices = [
    {
      title: "Operation Theatre",
      description: "Advanced surgical equipment"
    },
    {
      title: "ICU Equipment",
      description: "Critical care systems"
    },
    {
      title: "Diagnostic Imaging",
      description: "CT, MRI & ultrasound tech"
    }
  ];

  const medicalImages = [
    "/hero4.jpeg",
    "/hero2.avif",
    "/hero3.jpg"
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % medicalImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [medicalImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 lg:py-5 overflow-hidden">
      {/* Background Pattern with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full opacity-[0.95]"
          style={{
            backgroundImage: "url('/bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(1px) grayscale(10%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-20">
          
          {/* Left Content - Centered for mobile */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block mb-6 lg:mb-8"
            >
              <span className="bg-[#76b82a]/10 text-[#76b82a] px-5 py-2.5 rounded-full text-sm font-semibold border border-[#76b82a]/20 tracking-wide backdrop-blur-sm">
                Trusted Medical Equipment Provider
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              Innovative{' '}
              <span className="text-[#76b82a] bg-gradient-to-r from-[#76b82a] to-[#5a8f21] bg-clip-text text-transparent">
                Medical Equipment
              </span>{' '}
              for Precision Health Care
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 max-w-lg leading-relaxed mb-8 font-medium"
            >
              Advanced medical technology solutions trusted by healthcare professionals nationwide.
            </motion.p>
        
    
            {/* CTA Buttons */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(118, 184, 42, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#76b82a] hover:bg-[#68a325] text-white font-medium py-3.5 px-8 rounded-full shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Products</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, borderColor: "#76b82a", backgroundColor: "#f8faf7" }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-gray-700 hover:border-[#76b82a] hover:text-[#76b82a] font-medium py-3.5 px-8 rounded-full transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                Contact Us
              </motion.a>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              className="flex items-center justify-center gap-6 sm:gap-8 w-full max-w-md bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">12.5k+</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">Equipment Delivered</div>
              </div>
              <div className="h-10 w-px bg-gray-300/50"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">Healthcare Partners</div>
              </div>
              <div className="h-10 w-px bg-gray-300/50"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">Support</div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Image Gallery - Centered for all devices */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-2xl">
              
              {/* Main image - Wider aspect ratio */}
              <motion.div 
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative h-[350px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border-4 border-white/20"
              >
                <img 
                  src={medicalImages[currentImageIndex]} 
                  alt="Medical equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#76b82a] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Certified Equipment</h3>
                      <p className="text-xs text-gray-600">ISO 13485 Certified</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Image navigation dots */}
                <div className="absolute bottom-4 right-4 flex gap-2 bg-black/30 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                  {medicalImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#b0d684]/20 hidden sm:block backdrop-blur-sm"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
                className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-[#76b82a]/20 hidden sm:block backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;