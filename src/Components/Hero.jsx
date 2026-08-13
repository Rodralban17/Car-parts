import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Car, 
  Search, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export default function Hero() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [engine, setEngine] = useState('');

  // Sample Vehicle Data
  const makes = ['BMW', 'Audi', 'Mercedes-Benz', 'Volkswagen', 'Toyota', 'Peugeot', 'Renault'];
  const models = make ? ['3 Series', '5 Series', 'X5', 'M3', 'Golf', 'A4'] : [];
  const years = Array.from({ length: 25 }, (_, i) => 2026 - i);
  const engines = ['2.0L Turbo Diesel', '3.0L V6 Petrol', '1.8L TSI', 'Electric / Hybrid'];

  // Animation Stagger Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="relative w-full min-h-[85vh] bg-slate-950 text-white overflow-hidden flex flex-col justify-center py-12 lg:py-16">
      {/* BACKGROUND GRAPHICS & AMBIENT GLOW - FULL BLEED */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/30 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* FULL-WIDTH INNER CONTAINER */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: HERO HEADLINE & VEHICLE FINDER */}
          <motion.div 
            className="lg:col-span-7 xl:col-span-6 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 px-3.5 py-1.5 rounded-full text-red-400 text-xs font-semibold uppercase tracking-wider">
              
              <span>Certified OEM & Aftermarket Parts</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1]">
              FIND THE <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">EXACT PART</span> FOR YOUR VEHICLE.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl">
              Over 500,000 auto spare parts in stock. Guarantee 100% vehicle compatibility before you order.
            </motion.p>

          

            {/* Quick Benefits */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-slate-300 pt-2">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-red-500" />
                <span>Fast 24-48h Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>2-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="w-4 h-4 text-red-500" />
                <span>Verified OEM Quality</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: HIGH-IMPACT ANIMATED PART VISUAL */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* Glowing Backdrop */}
            <div className="absolute w-80 h-80 bg-red-600/25 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Floating Main Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6 shadow-2xl backdrop-blur-sm group">
                <motion.img 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSorQqXxlX1m7v5GBs15s7fPy5NhSWBpz-b25kH44kNhuypT6CAcopgqSiJnsGVr8ilXPSwcziP2amHdTo" 
                  alt="High Performance Ventilated Brake System" 
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition duration-700"
                />

                {/* Floating Highlight Badge 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-8 left-8 bg-slate-950/90 border border-slate-700 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs flex items-center space-x-3 shadow-xl"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <div>
                    <p className="font-bold text-white">Carbon-Ceramic</p>
                    <p className="text-[10px] text-slate-400">Extreme Heat Resistance</p>
                  </div>
                </motion.div>

                {/* Floating Highlight Badge 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute bottom-8 right-8 bg-slate-950/90 border border-slate-700 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs flex items-center space-x-3 shadow-xl"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <div>
                    <p className="font-bold text-white">In Stock Now</p>
                    <p className="text-[10px] text-slate-400">Ready for Dispatch</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}