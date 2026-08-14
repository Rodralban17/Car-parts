import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Car, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Send, 
  Check, 
  ChevronRight,
  Headphones,
  Award,
  Lock
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const footerLinks = {
    catalog: [
      { label: 'Brake Systems & Discs', href: '/products?cat=brakes' },
      { label: 'Engine & Turbochargers', href: '/products?cat=engine' },
      { label: 'Suspension & Steering', href: '/products?cat=suspension' },
      { label: 'Lighting & Bodywork', href: '/products?cat=lighting' },
      { label: 'Oils, Fluids & Filters', href: '/products?cat=fluids' },
      { label: 'Electrical & Sensors', href: '/products?cat=electrical' },
    ],
    customerService: [
      { label: 'Order Tracking', href: '/track-order' },
      { label: 'Compatibility Guarantee', href: '/fitment-guarantee' },
      { label: 'Shipping & Delivery Info', href: '/shipping' },
      { label: 'Returns & Exchange Policy', href: '/returns' },
      { label: 'Installation Guides', href: '/guides' },
      { label: 'Contact Support', href: '/contact' },
    ],
    company: [
      { label: 'About DriveParts', href: '/about' },
      { label: 'Our Partner Brands', href: '/brands' },
      { label: 'Careers', href: '/careers' },
      { label: 'B2B & Garage Accounts', href: '/b2b' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="w-full bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* 1. TOP VALUE PROPOSITION BANNER */}
      <div className="w-full border-b border-slate-800/80 bg-slate-900/50 py-8">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Guarantee Item 1 */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800"
            >
              <div className="p-3 bg-red-600/10 border border-red-500/20 text-red-500 rounded-xl">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-100">Express Delivery</h4>
                <p className="text-xs text-slate-400">24-48h dispatch on in-stock parts</p>
              </div>
            </motion.div>

            {/* Guarantee Item 2 */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800"
            >
              <div className="p-3 bg-red-600/10 border border-red-500/20 text-red-500 rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-100">100% Fitment Guarantee</h4>
                <p className="text-xs text-slate-400">Verified by VIN / OEM spec match</p>
              </div>
            </motion.div>

            {/* Guarantee Item 3 */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800"
            >
              <div className="p-3 bg-red-600/10 border border-red-500/20 text-red-500 rounded-xl">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-100">30-Day Easy Returns</h4>
                <p className="text-xs text-slate-400">Hassle-free parts exchange</p>
              </div>
            </motion.div>

            {/* Guarantee Item 4 */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800"
            >
              <div className="p-3 bg-red-600/10 border border-red-500/20 text-red-500 rounded-xl">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-100">Expert Mechanic Support</h4>
                <p className="text-xs text-slate-400">Technical advice on tap</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT & NEWSLETTER */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* BRAND INFO & NEWSLETTER (Columns 1 to 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <a href="/" className="inline-flex items-center space-x-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-white via-slate-200 to-red-500 bg-clip-text text-transparent">
                  DRIVE<span className="text-red-500">PARTS</span>
                </span>
                <p className="text-[9px] text-slate-400 -mt-1 tracking-widest uppercase">Auto Spare Parts</p>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your premier destination for certified OEM and high-performance aftermarket auto parts. Engineered for reliability, performance, and exact vehicle fitment.
            </p>
          </div>

          {/* NAVIGATION LINKS (Columns 5 to 12) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Catalog */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-200 mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Parts Catalog</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {footerLinks.catalog.map((link, idx) => (
                  <li key={idx}>
                    <a 
                       
                      className="hover:text-red-400 transition flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 mr-1 text-slate-600 group-hover:text-red-500 transition" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Customer Service */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-200 mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Customer Care</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {footerLinks.customerService.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      
                      className="hover:text-red-400 transition flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 mr-1 text-slate-600 group-hover:text-red-500 transition" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Company Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-200 mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Direct Contact</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start space-x-3 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                  <PhoneCall className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-200">Customer Helpline</p>
                    <p className="text-slate-400">+33 1 23 45 67 89</p>
                    <p className="text-[10px] text-slate-500">Mon-Fri: 8am - 7pm CET</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                  <Mail className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-200">Email Support</p>
                    <p className="text-slate-400">support@driveparts.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-200">Main Logistics Hub</p>
                    <p className="text-slate-400">124 Industrial Logistics Park, Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3. BOTTOM COPYRIGHT & PAYMENT BADGES */}
      <div className="w-full border-t border-slate-900 bg-slate-950 py-6">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          {/* Copyright notice */}
          <div className="flex items-center space-x-2">
            <span>&copy; {new Date().getFullYear()} DriveParts Inc. All rights reserved.</span>
            <span className="hidden md:inline text-slate-700">|</span>
            
          </div>

        </div>
      </div>
    </footer>
  );
}