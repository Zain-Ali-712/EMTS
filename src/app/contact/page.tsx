// app/contact/page.tsx
'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {

  const router = useRouter();
  const handleClick = () => {
    router.push('https://www.facebook.com/EMTSPK/?ref=br_rs&_rdc=1&_rdr#');
  };  
  const [selectedCity, setSelectedCity] = useState('Lahore');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const cities = [
    { name: 'Lahore', coordinates: '31.5204° N, 74.3587° E' },
    { name: 'Karachi', coordinates: '24.8607° N, 67.0011° E' },
    { name: 'Multan', coordinates: '30.1575° N, 71.5249° E' },
    { name: 'Peshawar', coordinates: '34.0151° N, 71.5249° E' },
    { name: 'Quetta', coordinates: '30.1798° N, 66.9750° E' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
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
                  <span className="text-white font-semibold text-lg">Get In Touch</span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Contact <span className="text-white">Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Reach out to our team for any inquiries or support or go ahead and visit our branches across Pakistan for personalized service.
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

        {/* Contact Information & Form Section */}
        <section className="py-20 bg-gradient-to-br from-[#76b82a]/5 to-[#5a8f21]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Side - Contact Information */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    We hope you will find all the information concerning our products and our company on this website. If you still have questions, please, feel free to contact us.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#76b82a] rounded-full p-3 mt-1">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-700">3-Aziz Avenue, Gulberg-V, Lahore, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#76b82a] rounded-full p-3 mt-1">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                      <p className="text-gray-700">+92-42-3577-5774</p>
                      <p className="text-gray-700">Phone +92-42-3577-5771-3</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#76b82a] rounded-full p-3 mt-1">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9a9 9 0 00-9 9h18a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Social Media</h3>
                      <p className="text-gray-700 mb-2">For more details and updates visit our Facebook Page:</p>
                      <button 
                      onClick={handleClick}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Visit Facebook
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#76b82a] focus:border-transparent transition-all duration-300"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#76b82a] focus:border-transparent transition-all duration-300"
                        placeholder="Your Phone"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#76b82a] focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#76b82a] focus:border-transparent transition-all duration-300"
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  {/* CAPTCHA Placeholder */}
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-600 mb-2">I'm not a robot</p>
                    <p className="text-xs text-gray-500 mb-3">nCARTOMA is changing its terms of service.</p>
                    <div className="bg-[#76b82a] text-white px-4 py-2 rounded inline-block text-sm font-semibold">
                      SIGNATI
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-[#76b82a] text-white py-4 rounded-lg font-semibold hover:bg-[#5a8f21] transition-all duration-300 shadow-lg"
                  >
                    Send Message
                    <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Find Our <span className="text-[#76b82a]">Branches</span>
              </h2>
              <div className="w-24 h-1 bg-[#76b82a] mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit any of our branches across Pakistan for personalized service and support
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* City Selector */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-1"
              >
                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Select City</h3>
                  <div className="space-y-3">
                    {cities.map((city) => (
                      <button
                        key={city.name}
                        onClick={() => setSelectedCity(city.name)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                          selectedCity === city.name
                            ? 'bg-[#76b82a] text-white shadow-md'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="font-semibold">{city.name}</span>
                        <span className={`text-sm block mt-1 ${
                          selectedCity === city.name ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {city.coordinates}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Map Container */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="bg-gradient-to-br from-[#76b82a]/10 to-[#5a8f21]/5 rounded-2xl shadow-2xl overflow-hidden h-96 relative">
                  {/* Map Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
                        <div className="w-16 h-16 bg-[#76b82a] rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedCity} Branch</h3>
                        <p className="text-gray-600 mb-2">{cities.find(c => c.name === selectedCity)?.coordinates}</p>
                        <p className="text-sm text-gray-500">Interactive map will be integrated here</p>
                      </div>
                    </div>
                  </div>

                  {/* Map Overlay Elements */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <span className="text-sm font-semibold text-gray-700">{selectedCity} - Pakistan</span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-[#76b82a] text-white rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}