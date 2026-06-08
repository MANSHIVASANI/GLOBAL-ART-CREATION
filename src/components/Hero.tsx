/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SIGNATURE_CATEGORIES } from '../data';

interface HeroProps {
  onInquireClick: () => void;
}

export default function Hero({ onInquireClick }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeCategory = SIGNATURE_CATEGORIES[activeIndex];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Decorative vertical lines for architecture firm look */}
      <div className="absolute top-0 left-12 w-px h-full bg-vintage-sand/30 hidden md:block" />
      <div className="absolute top-0 right-12 w-px h-full bg-vintage-sand/30 hidden md:block" />

      {/* Main Split Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto z-10">
        
        {/* Left Column: Hero Typography */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8" id="hero-left-content">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-px bg-luxury-gold" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase font-semibold">
              GLOBAL ART CREATION
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-light text-vintage-charcoal leading-[1.1] tracking-tight">
            Where Heritage <br />
            Meets <span className="italic font-normal font-serif text-luxury-gold pr-2">Architectural</span>
            Luxury
          </h1>

          <div className="h-24 md:h-20">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="font-sans text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-xl"
              >
                Handcrafted artistic installations that transform spaces into immersive visual experiences. Featured process: <strong className="text-luxury-gold font-medium">{activeCategory.title}</strong> of Kutch.
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Buttons matching video 2 */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('collections');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-luxury-gold hover:bg-luxury-gold-dark text-vintage-charcoal text-xs tracking-widest font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-none cursor-pointer focus:outline-none shadow-sm"
            >
              VIEW GALLERY
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-transparent border border-vintage-charcoal/20 hover:border-vintage-charcoal hover:bg-vintage-charcoal hover:text-white text-vintage-charcoal text-xs tracking-widest font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-none cursor-pointer focus:outline-none"
            >
              BOOK YOUR WORK
            </button>
          </div>

          {/* Quick Stats/Links Row matching bottom-left of video */}
          <div className="pt-8 border-t border-vintage-sand flex items-center space-x-12">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 block mb-1">STUDIO BASE</span>
              <span className="font-sans text-xs tracking-wider font-semibold text-vintage-charcoal">GANDHIDHAM</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Sculpture Display and Panel */}
        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center" id="hero-right-display">
          
          {/* Main Arched/Oval Capsule Image Mask */}
          <div className="col-span-1 md:col-span-7 flex justify-center">
            <div className="relative w-72 h-[410px] md:w-80 md:h-[460px] rounded-t-full rounded-b-full overflow-hidden shadow-2xl border-[3px] border-vintage-cream ring-1 ring-vintage-sand/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.618, cubicBezier: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                  {/* Subtle decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vintage-charcoal/20 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Signature Categories list */}
          <div className="col-span-1 md:col-span-5 flex flex-col space-y-4 pt-4 md:pt-0 pl-0 md:pl-2">
            <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-400 mb-2 block uppercase">
              Signature Categories
            </span>

            {SIGNATURE_CATEGORIES.map((cat, idx) => {
              const isActive = activeIndex === idx;
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={cat.id}
                  className="relative group py-2.5 border-b border-vintage-sand/50 transition-colors"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className="w-full text-left flex items-center justify-between cursor-pointer focus:outline-none"
                  >
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400 block mb-0.5">
                        {cat.num}
                      </span>
                      <span
                        className={`font-sans text-[11px] tracking-[0.16em] font-semibold transition-all uppercase ${
                          isActive
                            ? 'text-luxury-gold tracking-[0.2em]'
                            : 'text-vintage-charcoal/80 group-hover:text-vintage-charcoal'
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
