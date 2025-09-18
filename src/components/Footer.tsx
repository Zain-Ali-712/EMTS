'use client';

import { motion } from 'framer-motion';

const FooterSection = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 flex flex-col items-start justify-center pl-10 gap-10"
        >
          <img src="/logo.png" alt="EMTS Logo" className="h-30 w-30 mr-3"/>
          <p className="text-sm leading-relaxed text-gray-400">
            The vision of EMTS is to become the most dynamic, valued and leading healthcare service provider in the community we serve.
          </p>
        </motion.div>

        {/* Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-base font-bold text-white mb-4 uppercase tracking-wider">Products</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-[#76b82a] transition-colors duration-300">Operation Theatre Products</a></li>
            <li><a href="#" className="hover:text-[#76b82a] transition-colors duration-300">ICU Products</a></li>
            <li><a href="#" className="hover:text-[#76b82a] transition-colors duration-300">Diagnostics</a></li>
            <li><a href="#" className="hover:text-[#76b82a] transition-colors duration-300">Emergency</a></li>
            <li><a href="#" className="hover:text-[#76b82a] transition-colors duration-300">Gynecology Products</a></li>
            <li><a href="#" className="hover:text-[#76b82a] transition-colors duration-300">Central Oxygen Gas Pipeline</a></li>
            <li><a href="#" className="hover:text-[#76b82a] transition-colors duration-300">Pneumatic Tubing System</a></li>

          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-1 md:col-start-4"
        >
          <h4 className="text-base font-bold text-white mb-4 uppercase tracking-wider">Contact</h4>
          <address className="space-y-3 text-gray-400 text-sm not-italic">
            <p>3-Aziz Avenue, Gulberg-V, Lahore.<br/>Pakistan</p>
            <a href="mailto:info@emts.com.pk" className="block hover:text-[#76b82a] transition-colors duration-300">info@emts.com.pk</a>
            <p className="block">+92-42-3577-5771-3</p>
            <p className="block">+92-42-3577-5774</p>
            <p>EMTS</p>
          </address>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 text-center text-[#76b82a] text-xs border-t border-gray-700 pt-8"
      >
        <p>&copy; All rights reserved by Eastern Medical Technology Services | Designed and Developed by Technophobia</p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
