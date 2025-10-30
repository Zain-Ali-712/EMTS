// app/products/[category]/page.tsx
'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

// Mock data - This would come from your CMS/API
const productCategoriesData = {
  'operation-theater': {
    title: "Operation Theater Products",
    description: "Complete surgical solutions including operation tables, lights, anesthesia machines, and surgical instruments for modern operating theaters. We provide world-class operation theater equipment from leading manufacturers.",
    heroImage: "/ot.jpg",
    products: [
      {
        id: 1,
        name: "Operation Tables",
        description: "Advanced surgical operation tables with hydraulic and electric controls",
        image: "/ot-table.jpg"
      },
      {
        id: 2,
        name: "Surgical Lights",
        description: "LED surgical lights with shadow management technology",
        image: "/ot-lights.jpg"
      },
      {
        id: 3,
        name: "Anesthesia Machines",
        description: "Modern anesthesia workstations with ventilation systems",
        image: "/anesthesia.jpg"
      },
      {
        id: 4,
        name: "Electrosurgical Units",
        description: "Advanced electrosurgical generators and accessories",
        image: "/electrosurgical.jpg"
      },
      {
        id: 5,
        name: "Surgical Instruments",
        description: "Comprehensive range of surgical instruments and sets",
        image: "/instruments.jpg"
      },
      {
        id: 6,
        name: "Patient Monitoring",
        description: "Real-time patient monitoring during surgical procedures",
        image: "/monitoring.jpg"
      }
    ]
  },
  'emergency-equipment': {
    title: "Emergency Equipment",
    description: "Critical care equipment including defibrillators, ventilators, patient monitors, and emergency response systems for life-saving interventions in emergency departments and critical care settings.",
    heroImage: "/emergency-hero.png",
    products: [
      {
        id: 1,
        name: "Defibrillators",
        description: "AED and manual defibrillators for emergency cardiac care",
        image: "/defibrillator.jpg"
      },
      {
        id: 2,
        name: "Emergency Ventilators",
        description: "Portable and transport ventilators for critical care",
        image: "/ventilator.jpg"
      },
      {
        id: 3,
        name: "Patient Monitors",
        description: "Multi-parameter monitoring for critical patients",
        image: "/patient-monitor.jpg"
      },
      {
        id: 4,
        name: "Infusion Pumps",
        description: "Precision infusion pumps for medication delivery",
        image: "/infusion-pump.jpg"
      }
    ]
  },
  'gynecologist-products': {
    title: "Gynecologist Products",
    description: "Specialized equipment for women's health including ultrasound systems, colposcopes, and labor monitoring devices for comprehensive gynecological and obstetric care.",
    heroImage: "/gino-hero.jpg",
    products: [
      {
        id: 1,
        name: "Ultrasound Systems",
        description: "Advanced ultrasound for gynecology and obstetrics",
        image: "/ultrasound.jpg"
      },
      {
        id: 2,
        name: "Colposcopes",
        description: "Digital colposcopes for detailed cervical examination",
        image: "/colposcope.jpg"
      },
      {
        id: 3,
        name: "Fetal Monitors",
        description: "Fetal monitoring systems for labor and delivery",
        image: "/fetal-monitor.jpg"
      }
    ]
  },
  'icu-equipment': {
    title: "ICU Equipment",
    description: "Intensive care unit equipment including ICU beds, vital signs monitors, infusion pumps, and critical care ventilators for comprehensive patient care in intensive care settings.",
    heroImage: "/icu-hero.jpg",
    products: [
      {
        id: 1,
        name: "ICU Beds",
        description: "Electric ICU beds with advanced patient positioning",
        image: "/icu-bed.jpg"
      },
      {
        id: 2,
        name: "Vital Signs Monitors",
        description: "Multi-parameter patient monitoring systems",
        image: "/vital-monitor.jpg"
      },
      {
        id: 3,
        name: "Critical Care Ventilators",
        description: "Advanced ventilators for intensive care units",
        image: "/critical-ventilator.jpg"
      },
      {
        id: 4,
        name: "Syringe Pumps",
        description: "Precision syringe pumps for critical care",
        image: "/syringe-pump.jpg"
      }
    ]
  },
  'diagnostic-products': {
    title: "Diagnostic Products",
    description: "Advanced diagnostic equipment including CT scanners, MRI machines, X-ray systems, and laboratory analyzers for accurate medical diagnosis and patient care.",
    heroImage: "/digno-hero.jpg",
    products: [
      {
        id: 1,
        name: "CT Scanner",
        description: "Advanced computed tomography systems",
        image: "/ct-scanner.jpg"
      },
      {
        id: 2,
        name: "MRI Machines",
        description: "Magnetic resonance imaging systems",
        image: "/mri.jpg"
      },
      {
        id: 3,
        name: "X-Ray Systems",
        description: "Digital X-ray imaging systems",
        image: "/xray.jpg"
      },
      {
        id: 4,
        name: "Ultrasound Machines",
        description: "Diagnostic ultrasound systems",
        image: "/diagnostic-ultrasound.jpg"
      }
    ]
  }
};

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface CategoryData {
  title: string;
  description: string;
  heroImage: string;
  products: Product[];
}

export default function ProductCategoryPage({ params }: { params: { category: string } }) {
  const router = useRouter();
  const categoryData = productCategoriesData[params.category as keyof typeof productCategoriesData] as CategoryData;

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The requested product category does not exist.</p>
        </div>
      </div>
    );
  }

  const handleProductClick = (productId: number) => {
    // Will implement individual product pages later
    console.log(`Viewing product ${productId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-[#76b82a]/90 to-[#5a8f21]/80 overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={categoryData.heroImage}
              alt={categoryData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#76b82a]/30 to-[#5a8f21]/20"></div>
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
                  <span className="text-white font-semibold text-lg">Product Category</span>
                </div>
              </motion.div>
              
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                {categoryData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {categoryData.description}
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
                Explore our comprehensive range of {categoryData.title.toLowerCase()}
              </p>
            </motion.div>

            {/* Dynamic Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 h-80 cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
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

            {/* Empty State */}
            {categoryData.products.length === 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-center py-12"
              >
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m8-8V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v1M9 7h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Products Available</h3>
                <p className="text-gray-500">Products for this category will be added soon.</p>
              </motion.div>
            )}
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom {categoryData.title}?</h3>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Contact our experts for tailored solutions that meet your specific healthcare facility requirements.
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
}   