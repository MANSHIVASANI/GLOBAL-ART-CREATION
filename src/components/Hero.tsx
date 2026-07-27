/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SIGNATURE_CATEGORIES } from '../data';

interface HeroProps {
  onInquireClick: () => void;
}

export default function Hero({ onInquireClick }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(() => {
    const defaultIndex = SIGNATURE_CATEGORIES.findIndex((cat) => cat.title === 'SIPOREX WALL ART');
    return defaultIndex >= 0 ? defaultIndex : 0;
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeCategory = SIGNATURE_CATEGORIES[activeIndex];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-white border-b border-black/10"
    >
      <div className="absolute top-0 left-12 w-px h-full bg-vintage-sand/30 hidden md:block" />
      <div className="absolute top-0 right-12 w-px h-full bg-vintage-sand/30 hidden md:block" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto z-10">
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8" id="hero-left-content">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-px bg-black" />
            <span className="font-mono text-[10px] tracking-[0.33em] text-black uppercase font-semibold">
              GLOBAL ART CREATION
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-semibold text-vintage-charcoal leading-[1.06] tracking-[-0.02em]">
            Where Heritage <br />
            Meets
            <span className="inline-flex items-baseline gap-[0.18em]">
              <span className="italic font-semibold font-serif text-neutral-500 underline decoration-black decoration-2 underline-offset-4">
                Architectural
              </span>
              <span className="font-semibold text-black">
                Luxury
              </span>
            </span>
          </h1>

          <div className="h-24 md:h-20">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="font-sans text-sm md:text-base text-neutral-700 font-medium leading-relaxed max-w-xl"
              >
                Handcrafted artistic installations that transform spaces into immersive visual experiences. Featured process: <strong className="text-black font-semibold">{activeCategory.title}</strong> of Kutch.
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('collections');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs tracking-[0.24em] font-semibold uppercase transition-all duration-300 rounded-none cursor-pointer focus:outline-none shadow-sm"
            >
              VIEW GALLERY
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-transparent border border-vintage-charcoal/25 hover:border-vintage-charcoal hover:bg-vintage-charcoal hover:text-white text-vintage-charcoal text-xs tracking-[0.24em] font-semibold uppercase transition-all duration-300 rounded-none cursor-pointer focus:outline-none"
            >
              BOOK YOUR WORK
            </button>
          </div>

          <div className="pt-8 border-t border-vintage-sand flex items-center space-x-12">
            <div>
              <span className="font-mono text-[10px] tracking-[0.24em] text-neutral-500 block mb-1 font-semibold">STUDIO BASE</span>
              <span className="font-sans text-xs tracking-[0.2em] font-semibold text-vintage-charcoal">GANDHIDHAM</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center" id="hero-right-display">
          <div className="col-span-1 md:col-span-7 flex justify-center">
            <div className="relative w-72 h-[410px] md:w-80 md:h-[460px] rounded-t-full rounded-b-full overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.16)] border-[3px] border-black ring-1 ring-black/10 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                  transition={{ duration: 0.618, cubicBezier: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative overflow-hidden"
                >
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none transition duration-900 ease-out group-hover:scale-[1.12] group-hover:brightness-[1.15] group-hover:contrast-[1.1] group-hover:saturate-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vintage-charcoal/25 via-transparent to-white/30 transition-opacity duration-500 group-hover:opacity-50" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="col-span-1 md:col-span-5 flex flex-col space-y-4 pt-4 md:pt-0 pl-0 md:pl-2">
            <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-500 mb-2 block uppercase font-semibold">
              Signature Categories
            </span>

            {SIGNATURE_CATEGORIES.map((cat, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={cat.id}
                  className="relative group/label py-2.5 border-b border-vintage-sand/50 transition-colors"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className="w-full text-left flex items-center justify-between cursor-pointer focus:outline-none"
                  >
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500 block mb-0.5 font-semibold">
                        {cat.num}
                      </span>
                      <span
                        className={`font-sans text-[11px] tracking-[0.22em] font-semibold transition-all uppercase ${
                          isActive
                            ? 'text-black tracking-[0.28em]'
                            : 'text-vintage-charcoal/80 group-hover/label:text-vintage-charcoal'
                        }`}
                      >
                        {cat.title}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
