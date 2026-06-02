/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIAL_CRAFT, goldLeafMural, texturalWall, goldenSculpture } from '../data';
import { Layers, Quote, Sparkles, Trophy } from 'lucide-react';

export default function Vision() {
  const [activeTextureIdx, setActiveTextureIdx] = useState(0);

  const textureShowcase = [
    {
      name: '24K GOLD LEAF APPLICATION',
      detail: 'Traditional gilding method layered on natural hand-rubbed plasters.',
      image: goldLeafMural,
      year: ''
    },
    {
      name: 'BAS-RELIEF CLAY SCULPTING',
      detail: 'Organic floral and architectural dimensions sculpted on stone compound backdrops.',
      image: texturalWall,
      year: ''
    },
    {
      name: 'OXIDIZED BRONZE & METAL PLATES',
      detail: 'Chemical-reaction patinas designed to develop complex characters over time.',
      image: goldenSculpture,
      year: ''
    }
  ];

  return (
    <section id="story" className="py-24 px-6 md:px-12 bg-vintage-sand/30 border-t border-vintage-sand relative overflow-hidden">
      {/* Structural subtle lines */}
      <div className="absolute top-0 left-12 w-px h-full bg-vintage-sand/20 hidden md:block" />
      <div className="absolute top-0 right-12 w-px h-full bg-vintage-sand/20 hidden md:block" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Vision Credentials & Quote */}
        <div className="lg:col-span-6 space-y-8 relative z-10" id="vision-left-content">
          <div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-400 block mb-2 uppercase">
              The Vision
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-vintage-charcoal leading-[1.15]">
              {TESTIMONIAL_CRAFT.visionTitle}
            </h2>
          </div>

          <p className="font-sans text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
            {TESTIMONIAL_CRAFT.visionSub}
          </p>
          <p className="font-sans text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
            {TESTIMONIAL_CRAFT.visionSub2}
          </p>

          {/* Blockquote with customized graphic mark */}
          <div className="relative pl-8 pt-4 pb-4 border-l-2 border-luxury-gold/50">
            <Quote className="absolute -top-1 left-3 w-8 h-8 text-luxury-gold/15 rotate-180 scale-x-[-1]" />
            <p className="font-serif text-lg text-vintage-charcoal/90 italic leading-relaxed font-light">
              {TESTIMONIAL_CRAFT.quote}
            </p>
          </div>

          {/* Large counters section removed */}
        </div>

        {/* Right Column: Immersive texture slideshow & Years overlay */}
        <div className="lg:col-span-6 space-y-8 relative z-10" id="vision-right-gilding">
          
          <div className="relative bg-vintage-cream rounded-none p-4 shadow-xl border border-vintage-sand">
            {/* Top Showcase Image wrapper */}
            <div className="relative w-full h-[320px] md:h-[380px] overflow-hidden select-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTextureIdx}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full"
                >
                  <img
                    src={textureShowcase[activeTextureIdx].image}
                    alt={textureShowcase[activeTextureIdx].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>

              {/* Removed Float Stamp badge */}

              {/* Bottom detail card */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-[8px] tracking-[0.2em] text-luxury-gold uppercase font-bold block mb-1">
                  {textureShowcase[activeTextureIdx].year}
                </span>
                <h4 className="font-sans text-xs tracking-[0.12em] font-semibold uppercase leading-tight">
                  {textureShowcase[activeTextureIdx].name}
                </h4>
              </div>
            </div>

            {/* Bottom quick navigation bar */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-2">
              {textureShowcase.map((tex, idx) => {
                const isActive = activeTextureIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTextureIdx(idx)}
                    className={`p-3 text-left transition-all border rounded-none cursor-pointer focus:outline-none ${
                      isActive
                        ? 'bg-vintage-charcoal border-vintage-charcoal text-white shadow-md'
                        : 'bg-vintage-sand/40 border-vintage-sand hover:bg-vintage-sand/80 text-vintage-charcoal/70'
                    }`}
                  >
                    <span className="font-mono text-[10px] tracking-widest block font-medium mb-1">0{idx + 1}</span>
                    <span className="font-sans text-[8px] tracking-[0.08em] font-bold block uppercase truncate">
                      {tex.name.split(' ')[1]} PROCESS
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
