import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  ThumbsUp, 
  MessageSquare,
  Car,
  Award,
  SlidersHorizontal
} from 'lucide-react';

export default function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [helpfulCounts, setHelpfulCounts] = useState({ 1: 24, 2: 18, 3: 31, 4: 12 });
  const [liked, setLiked] = useState({});

  const toggleHelpful = (id) => {
    setLiked((prev) => {
      const isLiked = prev[id];
      setHelpfulCounts((counts) => ({
        ...counts,
        [id]: isLiked ? counts[id] - 1 : counts[id] + 1,
      }));
      return { ...prev, [id]: !isLiked };
    });
  };

  const reviews = [
    {
      id: 1,
      name: 'Stephane R.',
      role: 'Master Mechanic @ AutoCare Workshop',
      isGarage: true,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=120&h=120',
      rating: 5,
      date: '3 days ago',
      verified: true,
      vehicle: '2019 BMW 3 Series (330i)',
      partPurchased: 'Brembo Front Ceramic Brake Pads & Rotors Kit',
      title: 'Flawless OEM replacement for our workshop clients',
      comment:
        'We order brake kits weekly for client services. The VIN verification tool saved us twice this month from ordering wrong specs. Rotors arrived perfectly balanced with anti-corrosion coating intact.',
      helpful: 24,
    },
    {
      id: 2,
      name: 'Marc D.',
      role: 'DIY Car Enthusiast',
      isGarage: false,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120',
      rating: 5,
      date: '1 week ago',
      verified: true,
      vehicle: '2017 Golf VII GTI 2.0 TSI',
      partPurchased: 'Garrett Turbocharger & Gasket Set',
      title: 'Fast shipping and 100% exact fitment',
      comment:
        'Was worried about buying a turbo replacement online, but the support team confirmed fitment via my chassis number before dispatch. Engine runs like brand new!',
      helpful: 18,
    },
    {
      id: 3,
      name: 'Apex Racing Garage',
      role: 'Performance Tuning Shop',
      isGarage: true,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120&h=120',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
      vehicle: '2021 Audi RS5 Sportback',
      partPurchased: 'KW V3 Coilover Suspension Kit',
      title: 'Unbeatable B2B dispatch times and pricing',
      comment:
        'Having reliable wholesale stock availability is crucial for our shop turnaround. Parts arrived in heavy-duty protective packaging. Will continue using DriveParts as primary supplier.',
      helpful: 31,
    },
    {
      id: 4,
      name: 'Olivier M.',
      role: 'Verified Buyer',
      isGarage: false,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
      rating: 4,
      date: '3 weeks ago',
      verified: true,
      vehicle: '2015 Renault Clio IV 1.5 dCi',
      partPurchased: 'Bosch Alternator 12V 150A',
      title: 'Solid part, straightforward installation',
      comment:
        'Swapped out my dead alternator over the weekend. Packaging was intact, part matches OEM factory references exactly. Delivery took 2 days to Paris.',
      helpful: 12,
    },
  ];

  const filteredReviews = reviews.filter((r) => {
    if (activeFilter === 'garage') return r.isGarage;
    if (activeFilter === 'diy') return !r.isGarage;
    return true;
  });

  return (
    <section className="w-full bg-slate-900 py-16 lg:py-24 border-t border-slate-800 text-white relative overflow-hidden">
      
      {/* Background Accent Blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Trusted by Garages & Drivers
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              See genuine reviews from certified mechanics, auto repair shops, and everyday car owners who rely on our fitment-guaranteed spare parts.
            </p>
          </div>

          {/* Aggregate Rating Badge */}
          <div className="flex items-center space-x-4 bg-slate-950/80 border border-slate-800 p-4 rounded-2xl self-start md:self-auto">
            <div className="text-center">
              <span className="text-3xl font-black text-white">4.9</span>
              <span className="text-xs text-slate-500 block">out of 5</span>
            </div>
            <div className="h-10 w-[1px] bg-slate-800" />
            <div className="space-y-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-medium text-slate-300">Based on 12,480+ parts delivered</p>
            </div>
          </div>
        </div>

        {/* STATS & METRICS BANNER */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-950/50 border border-slate-800/80 p-4 rounded-xl text-center">
            <p className="text-2xl font-extrabold text-white">99.4%</p>
            <p className="text-xs text-slate-400 mt-1">Fitment Accuracy Rate</p>
          </div>
          <div className="bg-slate-950/50 border border-slate-800/80 p-4 rounded-xl text-center">
            <p className="text-2xl font-extrabold text-white">3,200+</p>
            <p className="text-xs text-slate-400 mt-1">Partner Garages & Mechanics</p>
          </div>
          <div className="bg-slate-950/50 border border-slate-800/80 p-4 rounded-xl text-center">
            <p className="text-2xl font-extrabold text-white">24h - 48h</p>
            <p className="text-xs text-slate-400 mt-1">Average Delivery Time</p>
          </div>
          <div className="bg-slate-950/50 border border-slate-800/80 p-4 rounded-xl text-center">
            <p className="text-2xl font-extrabold text-white">30 Days</p>
            <p className="text-xs text-slate-400 mt-1">Money-Back Guarantee</p>
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-4 mb-8 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-red-600 text-white'
                : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>All Feedback</span>
            <span className="bg-slate-900 px-1.5 py-0.5 rounded text-[10px]">{reviews.length}</span>
          </button>

          <button
            onClick={() => setActiveFilter('garage')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 whitespace-nowrap ${
              activeFilter === 'garage'
                ? 'bg-red-600 text-white'
                : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            <span>Garages & Mechanics</span>
            <span className="bg-slate-900 px-1.5 py-0.5 rounded text-[10px]">
              {reviews.filter((r) => r.isGarage).length}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter('diy')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 whitespace-nowrap ${
              activeFilter === 'diy'
                ? 'bg-red-600 text-white'
                : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Car className="w-3.5 h-3.5 text-blue-400" />
            <span>DIY Drivers & Owners</span>
            <span className="bg-slate-900 px-1.5 py-0.5 rounded text-[10px]">
              {reviews.filter((r) => !r.isGarage).length}
            </span>
          </button>
        </div>

        {/* REVIEWS GRID */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredReviews.map((review) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition"
              >
                <div className="space-y-4">
                  
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-11 h-11 rounded-full object-cover border border-slate-700"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-sm text-white">{review.name}</h4>
                          {review.verified && (
                            <span className="inline-flex items-center text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-semibold">
                              <ShieldCheck className="w-3 h-3 mr-1" /> Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 flex items-center space-x-1 mt-0.5">
                          {review.isGarage ? (
                            <Wrench className="w-3 h-3 text-amber-400 inline mr-1" />
                          ) : null}
                          <span>{review.role}</span>
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] text-slate-500">{review.date}</span>
                  </div>

                  {/* Rating & Title */}
                  <div className="space-y-1">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <h5 className="font-bold text-base text-slate-100">{review.title}</h5>
                  </div>

                  {/* Vehicle & Part Fitment Badge */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-1.5 text-xs">
                    <div className="flex items-center text-red-400 font-semibold space-x-1.5">
                      <Car className="w-3.5 h-3.5" />
                      <span>Fitted to: {review.vehicle}</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      <span className="text-slate-500">Part:</span> {review.partPurchased}
                    </p>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                {/* Helpful Button */}
                <div className="pt-4 mt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-[11px]">Was this review helpful?</span>
                  <button
                    onClick={() => toggleHelpful(review.id)}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition ${
                      liked[review.id]
                        ? 'bg-red-600/10 border-red-500/40 text-red-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${liked[review.id] ? 'fill-red-400' : ''}`} />
                    <span>Yes ({helpfulCounts[review.id]})</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}