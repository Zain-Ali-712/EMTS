// components/CenterModal.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface CenterModalProps {
  isOpen: boolean;
  onClose: () => void;
  center: {
    title: string;
    images: string[];
    description: string;
    address: string;
  };
}

const CenterModal = ({ isOpen, onClose, center }: CenterModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === center.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? center.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl max-w-5xl max-h-[90vh] w-full overflow-hidden flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Pattern with Green Accent */}
            <div className="absolute inset-0 opacity-5 z-0">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: "url('/bg.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
            
            {/* Green Accent Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#76b82a] to-[#5a8f21]"></div>

            {/* Header - Compact Design */}
            <div className="relative z-10 flex items-center justify-between p-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#76b82a] to-[#5a8f21] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{center.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <svg className="w-4 h-4 mr-1 text-[#76b82a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{center.address}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative z-10">
              {/* Image Carousel - Larger Size */}
              <div className="md:w-3/5 p-6 flex flex-col">
                <div className="relative flex-1 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
                  <motion.img
                    key={currentImageIndex}
                    src={center.images[currentImageIndex]}
                    alt={`${center.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} / {center.images.length}
                  </div>
                </div>

                {/* Thumbnail Navigation with Green Accent */}
                <div className="flex justify-center space-x-3 mt-4">
                  {center.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-10 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-gradient-to-r from-[#76b82a] to-[#5a8f21] scale-110' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="md:w-2/5 p-6 border-t md:border-t-0 md:border-l border-gray-200 bg-white/70 backdrop-blur-sm">
                <div className="h-full flex flex-col">
                  {/* About Section with Green Accent */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-1 h-6 bg-gradient-to-b from-[#76b82a] to-[#5a8f21] rounded-full mr-3"></div>
                      <h4 className="text-lg font-bold text-gray-900">About the Center</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {center.description}
                    </p>
                  </div>
                  
                  {/* Services Info with Green Theme */}
                  <div className="mt-auto">
                    <div className="flex items-center mb-4">
                      <div className="w-1 h-6 bg-gradient-to-b from-[#76b82a] to-[#5a8f21] rounded-full mr-3"></div>
                      <h5 className="text-lg font-bold text-gray-900">Services Available</h5>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { 
                          name: "Advanced CT Equipment", 
                          icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                          description: "Latest Hitachi Medical technology"
                        },
                        { 
                          name: "Expert Medical Staff", 
                          icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                          description: "Internationally trained professionals"
                        }
                      ].map((service, index) => (
                        <div 
                          key={index}
                          className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-white border border-green-100 hover:border-green-200 transition-all duration-200"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#76b82a] to-[#5a8f21] rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 text-sm">{service.name}</div>
                            <div className="text-gray-500 text-xs">{service.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-center space-x-4 text-sm">
                        <button className="flex items-center space-x-2 text-[#76b82a] hover:text-[#5a8f21] transition-colors duration-200">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>Call Center</span>
                        </button>
                        <button className="flex items-center space-x-2 text-[#76b82a] hover:text-[#5a8f21] transition-colors duration-200">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Get Directions</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CenterModal;