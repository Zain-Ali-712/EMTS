'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Products', 
      href: '/products',
      dropdown: [
        'Operation Theatre Products',
        'ICU Products',
        'Diagnostics',
        'Emergency',
        'Gynecology Products',
        'Central Oxygen Gas Pipeline',
        'Pneumatic Tubing System'
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    if (itemName !== 'Products') {
      setIsProductsOpen(false);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" onClick={() => handleItemClick('Home')}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <img src="/logo.png" alt="Logo" width={80} height={80} className="mr-2"/>
              </motion.div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="p-1 bg-[#9bd444]/50 rounded-full shadow-inner flex items-center space-x-2 transition-all duration-300">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div 
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                      className="relative"
                    >
                      <button
                        onClick={() => {
                          handleItemClick(item.name);
                          setIsProductsOpen(!isProductsOpen);
                        }}
                        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          activeItem === item.name
                            ? 'bg-[#76b82a] text-white'
                            : 'text-gray-600 hover:bg-[#9bd444] hover:text-white'
                        }`}
                      >
                        {item.name}
                        <motion.svg
                          initial={false}
                          animate={{ rotate: isProductsOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`ml-1 h-4 w-4 inline-block`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                        {activeItem === item.name && (
                            <motion.div
                                layoutId="underline"
                                className="absolute inset-0 bg-[#76b82a] rounded-full -z-10"
                                initial={{ scale: 0.9, opacity: 0.5 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                      </button>

                      <AnimatePresence>
                        {isProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-64 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                            onMouseEnter={() => setIsProductsOpen(true)}
                            onMouseLeave={() => setIsProductsOpen(false)}
                          >
                            <div className="py-2">
                              {item.dropdown.map((product) => (
                                <a
                                  key={product}
                                  href={`/products/${product.toLowerCase().replace(/\s+/g, '-')}`}
                                  onClick={() => handleItemClick('Products')}
                                >
                                  <div className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#9bd444] hover:text-white transition-colors duration-150">
                                    {product}
                                  </div>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a href={item.href}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleItemClick(item.name)}
                        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                          activeItem === item.name
                            ? 'bg-[#76b82a] text-white'
                            : 'text-gray-600 hover:bg-[#9bd444] hover:text-white'
                        }`}
                      >
                        {item.name}
                        {activeItem === item.name && (
                            <motion.div
                                layoutId="underline"
                                className="absolute inset-0 bg-[#76b82a] rounded-full -z-10"
                                initial={{ scale: 0.9, opacity: 0.5 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                      </motion.div>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#76b82a] hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center ${
                          activeItem === item.name
                            ? 'bg-[#76b82a] text-white'
                            : 'text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {item.name}
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            isProductsOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {isProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6"
                          >
                            {item.dropdown.map((product) => (
                              <a
                                key={product}
                                href={`/products/${product.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={() => {
                                  handleItemClick('Products');
                                  setIsProductsOpen(false);
                                }}
                              >
                                <div className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-[#9bd444] hover:text-white">
                                  {product}
                                </div>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a href={item.href}>
                      <div
                        onClick={() => handleItemClick(item.name)}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          activeItem === item.name
                            ? 'bg-[#76b82a] text-white'
                            : 'text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {item.name}
                      </div>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
