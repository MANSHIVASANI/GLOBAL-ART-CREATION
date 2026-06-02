/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, X, ArrowUpRight, ShieldCheck, Hammer, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ARCHIVE_COLLECTIONS } from '../data';
import { ArchiveItem } from '../types';

export default function Archive() {
  const [selectedArchive, setSelectedArchive] = useState<ArchiveItem | null>(null);

  return (
    <section id="collections" className="py-24 px-6 md:px-12 bg-vintage-cream relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Archive Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-400 block mb-2 uppercase">
              The Archive
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-vintage-charcoal">
              Our Collections
            </h2>
          </div>
        </div>

        {/* Triple Capsule/Arched Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {ARCHIVE_COLLECTIONS.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedArchive(item)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {/* Vertical Capsule image container */}
                <div className="relative w-full h-[480px] lg:h-[520px] rounded-t-full rounded-b-full overflow-hidden shadow-lg border-[3px] border-vintage-cream ring-1 ring-vintage-sand">
                  
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />

                  {/* Dark transparent gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vintage-charcoal/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                {/* Info Text details underneath card */}
                <div className="mt-6 flex justify-between items-center px-4">
                  <h3 className="font-serif text-xl font-light text-vintage-charcoal group-hover:text-luxury-gold transition-colors duration-250">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Craftsmanship Dossier Interactive Modal Details overlay */}
      <AnimatePresence>
        {selectedArchive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArchive(null)}
              className="absolute inset-0 bg-vintage-charcoal/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="relative bg-vintage-cream w-full max-w-5xl rounded-none shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArchive(null)}
                className="absolute top-6 right-6 z-20 p-2 text-vintage-charcoal hover:text-luxury-gold bg-vintage-sand/50 rounded-full focus:outline-none transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Vertical Image block */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px] bg-vintage-sand select-none">
                <img
                  src={selectedArchive.image}
                  alt={selectedArchive.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-vintage-charcoal/70 to-transparent flex flex-col justify-end text-white">
                  <h4 className="font-serif text-2xl font-light">
                    {selectedArchive.title}
                  </h4>
                </div>
              </div>

              {/* Right Column: Elaborate Dossier Info Specs */}
              <div className="lg:col-span-7 p-8 md:p-12 overflow-y-auto flex flex-col justify-between max-h-[50vh] lg:max-h-[85vh]">
                <div className="space-y-8">
                  
                  {/* Category description */}
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-400 block mb-2 uppercase">
                      STUDIO PROFILE & INTENT
                    </span>
                    <p className="font-sans text-sm md:text-base text-neutral-600 font-light leading-relaxed">
                      {selectedArchive.description}
                    </p>
                  </div>

                  {/* Materials listing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-vintage-sand">
                    <div>
                      <div className="flex items-center space-x-2 text-luxury-gold mb-2">
                        <Hammer className="w-4 h-4" />
                        <span className="font-mono text-[10px] tracking-widest font-semibold uppercase">
                          PURE MATERIALS
                        </span>
                      </div>
                      <ul className="space-y-1.5 pl-0">
                        {selectedArchive.materials.map((mat, i) => (
                          <li key={i} className="font-sans text-xs text-neutral-600 font-light flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
                            <span>{mat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 text-luxury-gold mb-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="font-mono text-[10px] tracking-widest font-semibold uppercase">
                          STANDARD DIMENSIONS
                        </span>
                      </div>
                      <p className="font-sans text-xs text-neutral-600 font-light leading-relaxed">
                        {selectedArchive.dimensions}
                      </p>
                    </div>
                  </div>

                  {/* Placement advice description */}
                  {selectedArchive.specSection && (
                    <div className="p-4 bg-vintage-sand/40 border-l-[3px] border-luxury-gold">
                      <div className="flex items-center space-x-2 text-vintage-charcoal mb-1">
                        <HelpCircle className="w-3.5 h-3.5 text-luxury-gold" />
                        <span className="font-mono text-[9px] tracking-widest font-semibold uppercase">
                          STUDIO DESIGN DIRECTIVE
                        </span>
                      </div>
                      <p className="font-sans text-[11px] leading-relaxed text-neutral-600 font-medium italic">
                        {selectedArchive.specSection}
                      </p>
                    </div>
                  )}

                </div>

                {/* Actions bottom row */}
                <div className="pt-8 mt-12 border-t border-vintage-sand flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[8px] tracking-widest text-neutral-400 block">PRODUCED BY</span>
                    <span className="font-sans text-xs font-semibold tracking-wider text-vintage-charcoal">
                      Atelier Gandhidham Workshops
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedArchive(null)}
                    className="w-full sm:w-auto bg-vintage-charcoal text-white hover:bg-luxury-gold px-6 py-3 text-xs tracking-widest font-bold transition-colors uppercase rounded-none cursor-pointer"
                  >
                    CLOSE SPECIFICATION
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
