import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Disc, 
  Gauge, 
  Zap, 
  Sliders, 
  Droplet, 
  Flame, 
  ShieldAlert, 
  Wrench 
} from 'lucide-react';

export default function CategoryGrid() {
  const categories = [
    {
      id: 'brakes',
      title: 'Brake Systems & Discs',
      frenchTitle: 'Freinage & Disques',
      count: '12,450+ parts',
      icon: Disc,
      image: 'https://images.unsplash.com/photo-1600706432522-e018e4ee675d?auto=format&fit=crop&w=600&q=80',
      popular: true,
      color: 'from-red-500/20 to-orange-500/20'
    },
    {
      id: 'engine',
      title: 'Engine & Turbocharger',
      frenchTitle: 'Moteur & Turbo',
      count: '24,800+ parts',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80',
      popular: true,
      color: 'from-amber-500/20 to-red-500/20'
    },
    {
      id: 'suspension',
      title: 'Suspension & Steering',
      frenchTitle: 'Suspension & Direction',
      count: '9,300+ parts',
      icon: Sliders,
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80',
      popular: false,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'lighting',
      title: 'Lighting & Bodywork',
      frenchTitle: 'Éclairage & Carrosserie',
      count: '15,200+ parts',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80',
      popular: false,
      color: 'from-yellow-500/20 to-amber-500/20'
    },
    {
      id: 'fluids',
      title: 'Oils, Fluids & Filters',
      frenchTitle: 'Huiles & Filtration',
      count: '8,100+ parts',
      icon: Droplet,
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
      popular: false,
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      id: 'electronics',
      title: 'Electrical & Sensors',
      frenchTitle: 'Électricité & Capteurs',
      count: '18,600+ parts',
      icon: Gauge,
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=600&q=80',
      popular: false,
      color: 'from-purple-500/20 to-indigo-500/20'
    }
  ];

  // Container Stagger Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual Card Animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  };

  return (
    <section className="w-full bg-slate-950 py-16 lg:py-24 text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-red-500 font-semibold text-xs uppercase tracking-widest mb-2">
              <Wrench className="w-4 h-4" />
              <span>Explore By System</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              POPULAR <span className="text-red-500">PARTS CATEGORIES</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Browse our extensive catalog structured by mechanical and electronic automotive systems.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative bg-slate-900 border border-slate-800 hover:border-red-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between min-h-[260px]"
              >
                {/* Background Image with Hover Scale */}
                <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-40 transition-opacity duration-500 overflow-hidden">
                  <motion.img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent`} />
                </div>

                {/* Top Badge & Icon Row */}
                <div className="relative z-10 p-6 flex items-start justify-between">
                  <div className="p-3 bg-slate-950/80 border border-slate-700/80 rounded-xl text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {category.popular && (
                    <span className="bg-red-600/20 border border-red-500/40 text-red-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      High Demand
                    </span>
                  )}
                </div>

                {/* Card Bottom Details */}
                <div className="relative z-10 p-6 pt-0">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-red-400 transition-colors">
                    {category.count}
                  </span>
                  
                  <div className="flex items-center justify-between mt-1">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 italic">
                        {category.frenchTitle}
                      </p>
                    </div>

                    {/* Animated Arrow Icon */}
                    <div className="p-2 bg-slate-800/80 rounded-lg text-slate-300 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Active Hover Glow Accent at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}