// app/products/oxygen-gas/page.tsx
'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { link } from 'fs';

export default function OxygenGasPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const router = useRouter();
  const handleContactClick = () => {
    router.push('/contact');
  };


  const products = [
    {
      id: 1,
      name: "DMED",
      subtitle: "DEVICES FOR MEDICAL GASES",
      description: "The line DMED includes a wide range of Devices suitable with use for medical gases, vacuums and anaesthetic gas scavenging systems. All the equipment are manufactured from Delta p. DMED was developed to create new generation of devices for medical gas, vacuums and anaesthetic gas scavenging systems in demanding facilities with high requirements and attention to highest international standards.",
      image: "/dmed-gas.png",
      link: "https://www.deltap.it/en/solutions/dmed/"
    },
    {
      id: 2,
      name: "DLAB",
      subtitle: "PURE GASES EQUIPMENT",
      description: "The line DLAB includes a wide range of Devices and systems for not toxic and not corrosive pure gases suitable for use in analysis laboratories, gas cromatography, and mass spectrometry. Demanding operational conditions define strict requirements for pure gas equipment in laboratories. Our DLAB production line offers wide range of equipment and systems for nontoxic and noncorrosive pure gases (inert, combustive, comburant) suitable for use in analysis laboratories, gas chromatography, and mass spectrometry. High quality pressure regulators of first and second stages, decompression units, alarms and accessories for pure gas equipment is manufactured in line with highest international standards to suit most demanding laboratory environments all over the world.",
      image: "/dlab-gas.png",
      link: "https://www.deltap.it/"

    },
    {
      id: 3,
      name: "OXGEN",
      subtitle: "MEDICAL OXYGEN CONCENTRATORS",
      description: "OxGen line imprints DeltaP expertise, reliability and high quality standards. We are proud to present PSA oxygen generators ensuring 93% onsite production of this gas in line with requirements of European Pharmacopoeia. OxGen range of oxygen concentrators and generators deliver optimal conditions and performance for various applications with a special emphasis on source of supply in healthcare facilities, veterinary clinics and industrial applications. Innovations and experience introduce our innovative approach to oxygen generator manufacturing embracing our local technological heritage and unique expertise in the field.",
      image: "/oxygen-gas.png",
      link: "https://www.deltap.it/soluzioni/oxgen/"

    }
  ];

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-[#76b82a]/90 to-[#5a8f21]/80 overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/gas-hero.jpg"
              alt="Oxygen Gas Systems"
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
                  <span className="text-white font-semibold text-lg">Medical Gas Systems</span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Oxygen Gas Systems
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Advanced medical oxygen solutions and gas pipeline systems for healthcare facilities
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

        {/* Delta P Company Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Delta P Logo */}
              <div className="mb-8">
                <div className="bg-gray-100 rounded-2xl p-8 inline-block shadow-lg">
                  <div className="w-64 h-24 rounded-lg flex items-center justify-center">
                      <img 
                        src="/telecomlogo.png" 
                        alt="Telecom Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                </div>
              </div>

              {/* Company Description */}
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Delta P developpe complete and advanced solutions for medical gas pipeline system, with a continuous commitment looking to the innovation, ensuring excellence and security in every equipment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Sections */}
        {products.map((product, index) => (
          <section 
            key={product.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-[#76b82a]/5 to-[#5a8f21]/10'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}>
                
                {/* Image Side */}
                <motion.div
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                    onClick={() => openImageModal(product.image)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                    
                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ x: index % 2 === 0 ? 30 : -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h2>
                      <div className="w-16 h-1 bg-[#76b82a] mb-4"></div>
                      <h3 className="text-xl font-semibold text-[#76b82a] mb-4">
                        {product.subtitle}
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      {product.description}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#76b82a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5a8f21] transition-all duration-300 shadow-lg"
                      onClick={() => window.open(product.link, '_blank')}
                    >
                      Explore More at Delta P
                      <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

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
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Oxygen Pipeline Products?</h3>
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl max-h-full"
          >
            <img
              src={selectedImage}
              alt="Product Preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}