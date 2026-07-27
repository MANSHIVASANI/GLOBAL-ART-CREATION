/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, FileText, Hammer, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ARCHIVE_COLLECTIONS } from '../data';
import { ArchiveItem } from '../types';

export default function Archive() {
  const [selectedArchive, setSelectedArchive] = useState<ArchiveItem | null>(null);

  return (
    <section id="collections" className="py-24 px-6 md:px-12 bg-white relative border-y border-vintage-sand/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-500 block mb-2 uppercase font-semibold">
              The Archive
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-vintage-charcoal">
              Our Collections
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {ARCHIVE_COLLECTIONS.map((item) => {
            return (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedArchive(item)}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="relative w-full h-[480px] lg:h-[520px] rounded-t-full rounded-b-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.14)] border-[3px] border-black ring-1 ring-black/10 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.14] group-hover:brightness-[1.17] group-hover:contrast-[1.12]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vintage-charcoal/55 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                </div>

                <div className="mt-6 flex flex-col gap-3 px-4">
                  <h3 className="font-serif text-xl font-semibold text-vintage-charcoal group-hover:text-black transition-colors duration-250">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 self-start rounded-none border border-black/20 bg-black px-4 py-2 text-[10px] font-mono font-semibold uppercase tracking-[0.28em] text-white">
                    <FileText className="w-4 h-4 text-white" />
                    PDF DOSSIER
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedArchive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArchive(null)}
              className="absolute inset-0 bg-vintage-charcoal/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="relative bg-vintage-cream w-full max-w-5xl rounded-none shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] md:max-h-[85vh]"
            >
              <button
                onClick={() => setSelectedArchive(null)}
                className="absolute top-6 right-6 z-20 p-2 text-vintage-charcoal hover:text-black bg-vintage-sand/60 rounded-full focus:outline-none transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px] bg-vintage-sand select-none">
                <img
                  src={selectedArchive.image}
                  alt={selectedArchive.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-vintage-charcoal/70 to-transparent flex flex-col justify-end text-white">
                  <h4 className="font-serif text-2xl font-semibold">
                    {selectedArchive.title}
                  </h4>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 md:p-12 overflow-y-auto flex flex-col justify-between max-h-[50vh] lg:max-h-[85vh]">
                <div className="space-y-8">
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-500 block mb-2 uppercase font-semibold">
                      STUDIO PROFILE & INTENT
                    </span>
                    <p className="font-sans text-sm md:text-base text-neutral-700 font-medium leading-relaxed">
                      {selectedArchive.description}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-none border border-white/20 bg-vintage-charcoal px-3 py-2 text-[9px] font-mono font-semibold uppercase tracking-[0.24em] text-white">
                    <FileText className="w-3.5 h-3.5 text-white" />
                    Atelier PDF Specification Dossier
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-vintage-sand">
                    <div>
                      <div className="flex items-center space-x-2 text-black mb-2">
                        <Hammer className="w-4 h-4" />
                        <span className="font-mono text-[10px] tracking-[0.2em] font-semibold uppercase">
                          PURE MATERIALS
                        </span>
                      </div>
                      <ul className="space-y-1.5 pl-0">
                        {selectedArchive.materials.map((mat, i) => (
                          <li key={i} className="font-sans text-xs text-neutral-700 font-medium flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-black rounded-full" />
                            <span>{mat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 text-black mb-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="font-mono text-[10px] tracking-[0.2em] font-semibold uppercase">
                          STANDARD DIMENSIONS
                        </span>
                      </div>
                      <p className="font-sans text-xs text-neutral-700 font-medium leading-relaxed">
                        {selectedArchive.dimensions}
                      </p>
                    </div>
                  </div>

                  {selectedArchive.specSection && (
                    <div className="p-4 bg-vintage-sand/40 border-l-[3px] border-black">
                      <div className="flex items-center space-x-2 text-vintage-charcoal mb-1">
                        <HelpCircle className="w-3.5 h-3.5 text-black" />
                        <span className="font-mono text-[9px] tracking-[0.2em] font-semibold uppercase">
                          STUDIO DESIGN DIRECTIVE
                        </span>
                      </div>
                      <p className="font-sans text-[11px] leading-relaxed text-neutral-700 font-semibold italic">
                        {selectedArchive.specSection}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-8 mt-12 border-t border-vintage-sand flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.24em] text-neutral-500 block font-semibold">PRODUCED BY</span>
                    <span className="font-sans text-xs font-semibold tracking-[0.18em] text-vintage-charcoal uppercase">
                      Atelier Gandhidham Workshops
                    </span>
                  </div>
                  <a
                    href={`mailto:globalartcreation@gmail.com?subject=Atelier PDF Specification Dossier Request for ${selectedArchive.title}&body=Hello Global Art Creation, I would like to request the PDF specification dossier for ${selectedArchive.title}. Please share the material guide and architectural blueprint details.`}
                    className="w-full sm:w-auto bg-vintage-charcoal text-white hover:bg-black px-6 py-3 text-xs tracking-[0.24em] font-semibold transition-colors uppercase rounded-none cursor-pointer text-center"
                  >
                    Request Dossier
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
