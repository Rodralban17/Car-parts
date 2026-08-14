import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Check, 
  Eye, 
  Heart, 
  Star, 
  CheckCircle2, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('all');
  const [addedItems, setAddedItems] = useState({});

  const filterTabs = [
    { id: 'all', label: 'All Parts' },
    { id: 'brakes', label: 'Brakes & Discs' },
    { id: 'engine', label: 'Engine & Turbo' },
    { id: 'suspension', label: 'Suspension' },
    { id: 'electrical', label: 'Electrical & Sensors' }
  ];

  const products = [
    {
      id: 'prod-1',
      category: 'brakes',
      name: 'Brembo Sport Drill Ventilated Brake Rotor Kit',
      sku: 'BM-8023-FR',
      price: 189.99,
      originalPrice: 229.99,
      rating: 4.9,
      reviewsCount: 128,
      compatibility: 'Fits BMW 3 Series, 5 Series (2018-2025)',
      inStock: true,
      image: 'https://images.unsplash.com/photo-1600706432522-e018e4ee675d?auto=format&fit=crop&w=600&q=80',
      badge: 'Best Seller'
    },
    {
      id: 'prod-2',
      category: 'engine',
      name: 'Garrett GTX3076R Gen II Turbocharger',
      sku: 'GR-9921-TB',
      price: 1249.00,
      originalPrice: 1399.00,
      rating: 5.0,
      reviewsCount: 64,
      compatibility: 'Universal Performance / VAG 2.0 TSI',
      inStock: true,
      image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80',
      badge: 'Hot Deal'
    },
    {
      id: 'prod-3',
      category: 'suspension',
      name: 'KW Variant 3 Coilover Suspension System',
      sku: 'KW-3522-SUS',
      price: 1850.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 42,
      compatibility: 'Fits Audi A4/S4, A5/S5 (2017-2024)',
      inStock: true,
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80',
      badge: 'OEM Spec'
    },
    {
      id: 'prod-4',
      category: 'brakes',
      name: 'Ferodo Racing Performance Ceramic Brake Pads',
      sku: 'FD-1102-PD',
      price: 89.50,
      originalPrice: 105.00,
      rating: 4.7,
      reviewsCount: 95,
      compatibility: 'Fits Golf GTI Mk7/Mk8, Leon Cupra',
      inStock: true,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
      badge: null
    },
    {
      id: 'prod-5',
      category: 'electrical',
      name: 'Bosch High-Output Alternator 180A',
      sku: 'BS-4401-ALT',
      price: 245.00,
      originalPrice: 280.00,
      rating: 4.9,
      reviewsCount: 51,
      compatibility: 'Fits Mercedes C-Class, E-Class (W205/W213)',
      inStock: true,
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=600&q=80',
      badge: 'Top Rated'
    },
    {
      id: 'prod-6',
      category: 'engine',
      name: 'NGK Iridium IX High Performance Spark Plugs (Set of 4)',
      sku: 'NGK-6619-SP',
      price: 48.00,
      originalPrice: 56.00,
      rating: 4.9,
      reviewsCount: 310,
      compatibility: 'Universal Fit (Check Thread Size)',
      inStock: true,
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
      badge: null
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  const handleAddToCart = (id) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <section className="w-full bg-slate-900 py-16 lg:py-24 text-white relative overflow-hidden">
      {/* Background Subtle Accent Lines */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* FULL-WIDTH CONTAINER */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* HEADER & FILTER TABS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-red-500 font-semibold text-xs uppercase tracking-widest mb-2">
              
              <span>In Stock & Ready To Ship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              FEATURED <span className="text-red-500">AUTO PARTS</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-red-600 rounded-xl"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const isAdded = addedItems[product.id];

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="group bg-slate-950 border border-slate-800 hover:border-red-500/50 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 relative"
                >
                  {/* Top Image Container */}
                  <div className="relative h-52 w-full bg-slate-900 overflow-hidden flex items-center justify-center p-4">
                    {/* Badge */}

                    {/* Product Image */}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* SKU & Rating Row */}
                      {/* <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span className="font-mono text-[10px] text-slate-500 uppercase">SKU: {product.sku}</span>
                        <div className="flex items-center space-x-1 text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span className="font-bold text-slate-200 text-[11px]">{product.rating}</span>
                          <span className="text-slate-500 text-[10px]">({product.reviewsCount})</span>
                        </div>
                      </div> */}

                      {/* Product Title */}
                      <h3 className="font-bold text-slate-100 group-hover:text-red-400 transition-colors line-clamp-2 text-sm leading-snug">
                        {product.name}
                      </h3>

                     
                    </div>

                    {/* Price and Add-To-Cart Action */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <div>
                        <div className="flex items-baseline space-x-1.5">
                          <span className="text-lg font-black text-white">${product.price.toFixed(2)}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-slate-500 line-through">${product.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                        <span className="text-[10px] text-emerald-400 block font-medium">In Stock</span>
                      </div>

                      {/* Animated Add To Cart Button */}
                      {/* <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAddToCart(product.id)}
                        className={`px-3.5 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-all duration-300 ${
                          isAdded 
                            ? 'bg-emerald-600 text-white' 
                            : 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/30'
                        }`}
                      >
                        <AnimatePresence mode="wait">
                          {isAdded ? (
                            <motion.div 
                              key="added"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="flex items-center space-x-1"
                            >
                              <Check className="w-4 h-4" />
                              <span>Added</span>
                            </motion.div>
                          ) : (
                            <motion.div 
                              key="add"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="flex items-center space-x-1"
                            >
                              <ShoppingCart className="w-4 h-4" />
                              <span className="hidden sm:inline">Add</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button> */}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}