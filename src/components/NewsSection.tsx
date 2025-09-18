'use client';

import { motion } from 'framer-motion';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      date: "28 OCT",
      title: "Monthly Audit",
      summary: "The monthly audit for the month of October, 2019 is scheduled on 1st & 2nd of November, 2019 in head office of Eastern Medical Technology Services."
    },
    {
      id: 2,
      date: "28 AUG",
      title: "New Product Launch",
      summary: "We are excited to announce the launch of our new diagnostic imaging system, offering unparalleled resolution and speed for patient care."
    },
  ];
  
  return (
    <div className="relative overflow-hidden py-20 bg-gray-50/50">
      
      {/* Background Pattern with Overlay */}
      <div className="absolute inset-0 z-[-1]">
        <div 
          className="w-full h-full opacity-[0.80]"
          style={{
            backgroundImage: "url('/bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(1px) grayscale(10%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            <span className="text-[#76b82a]">Our</span> News
          </h2>
          <p className="text-sm font-medium uppercase text-gray-600 tracking-wider">Stay updated with the latest from our company</p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="text-center text-gray-700">
                  <span className="block text-3xl font-bold leading-none">{item.date.split(" ")[0]}</span>
                  <span className="block text-sm uppercase font-medium">{item.date.split(" ")[1]}</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-3">{item.summary}</p>
                <a href="#" className="text-[#76b82a] text-sm font-medium hover:underline transition-colors duration-300">
                  Read more &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="relative p-12 bg-gradient-to-br from-[#76b82a] to-[#68a325] text-white text-center rounded-2xl shadow-xl overflow-hidden"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 40v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 6v-4H10v4H6v2h4v4h2V8h4V6h-4zm0 40v-4H10v4H6v2h4v4h2v-4h4v-2h-4zM36 6v-4h-2v4h-4v2h4v4h2V8h4V6h-4zM12 30v-4H10v4H6v2h4v4h2v-4h4v-2h-4zM60 4v2h-4v4h-2V6h-4V4h4V0h2v4h4zM60 46v2h-4v4h-2v-4h-4v-2h4v-4h2v4h4zM48 30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-24 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 4v2h-4v4h-2V6h-4V4h4V0h2v4h4zM0 46v2h-4v4h-2v-4h-4v-2h4v-4h2v4h4zM24 6v-4h-2v4h-4v2h4v4h2V8h4V6h-4zM48 6v-4h-2v4h-4v2h4v4h2V8h4V6h-4zm0 40v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 46v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm12 12v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 18v-4H10v4H6v2h4v4h2v-4h4v-2h-4zM24 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM48 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 30v-4H-4v4h-2v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          <motion.blockquote
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light italic z-10 relative"
          >
            &ldquo;Behind Every Successful Business Venture, there is a team who endeavours&rdquo;
          </motion.blockquote>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-base font-bold z-10 relative uppercase tracking-widest"
          >
            - CEO EMTS
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsSection;
