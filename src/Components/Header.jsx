import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  User, 
  Car, 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  Heart,
  Globe
} from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [cartCount, setCartCount] = useState(3);

  // Animation variants
  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const badgeVariants = {
    initial: { scale: 1 },
    bounce: { scale: [1, 1.2, 1], transition: { duration: 0.3 } }
  };

  const mainNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Catalog & Parts', href: '/products' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact & Support', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-xl">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-1.5 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="bg-black/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
              Express Delivery
            </span>
            <span className="hidden sm:inline">Free shipping on orders over $99!</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+33123456789" className="flex items-center hover:text-slate-200 transition">
              <PhoneCall className="w-3 h-3 mr-1" />
              <span className="hidden md:inline">Support:</span> +33 1 23 45 67 89
            </a>
            <span className="text-red-300">|</span>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-slate-200 transition">
              <Globe className="w-3 h-3" />
              <span>FR / EUR (€)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-6">
        {/* Brand / Logo */}
        <motion.a 
          href="/"
          whileHover={{ scale: 1.02 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className="bg-red-600 p-2 rounded-lg">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-slate-200 to-red-500 bg-clip-text text-transparent">
              DRIVE<span className="text-red-500">PARTS</span>
            </span>
            <p className="text-[9px] text-slate-400 -mt-1 tracking-widest uppercase">Auto Spare Parts</p>
          </div>
        </motion.a>

        {/* Primary Page Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          {mainNavLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              whileHover={{ y: -1, color: '#f87171' }}
              className="transition"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right Action Group: Vehicle Selector + User Controls */}
        <div className="flex items-center space-x-3 md:space-x-4">
          
          {/* <motion.button 
            whileTap={{ scale: 0.97 }}
            className="hidden sm:flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-red-500/50 px-3 py-2 rounded-xl text-xs transition-all"
          >
            <div className="p-1.5 bg-red-500/10 rounded-lg text-red-500">
              <Car className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] text-slate-400 leading-none">Your Vehicle</span>
              <span className="font-semibold text-slate-200">
                {selectedVehicle ? selectedVehicle : 'Select Vehicle'}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
          </motion.button> */}

          {/* Wishlist Icon */}
          {/* <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
          </motion.button> */}

          {/* User Account */}
          {/* <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
            title="Account"
          >
            <User className="w-5 h-5" />
          </motion.button> */}

          {/* Cart Icon with Framer Motion Badge */}
          {/* <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-3.5 py-2 rounded-xl transition text-white"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    variants={badgeVariants}
                    animate="bounce"
                    key={cartCount}
                    className="absolute -top-2 -right-2.5 bg-black text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-slate-900"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <span className="hidden lg:inline text-xs font-semibold">Cart</span>
          </motion.button> */}

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. ANIMATED MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-slate-950 border-t border-slate-800 overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {/* Mobile Vehicle Selector trigger */}
              {/* <button className="w-full flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs sm:hidden">
                <div className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-red-500" />
                  <span className="font-semibold text-slate-200">
                    {selectedVehicle ? selectedVehicle : 'Select Your Vehicle'}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button> */}

              {/* Navigation Links */}
              <div className="space-y-1">
                {mainNavLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    whileTap={{ scale: 0.98 }}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}