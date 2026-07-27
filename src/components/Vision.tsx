/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIAL_CRAFT, goldLeafMural, texturalWall, goldenSculpture } from '../data';
import { Quote } from 'lucide-react';

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
    <section id="story" className="py-24 px-6 md:px-12 bg-vintage-charcoal text-vintage-cream border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-12 w-px h-full bg-white/10 hidden md:block" />
      <div className="absolute top-0 right-12 w-px h-full bg-white/10 hidden md:block" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 space-y-8 relative z-10" id="vision-left-content">
          <div>
            <span className="font-mono text-[9px] tracking-[0.32em] text-white block mb-2 uppercase font-semibold">
              The Vision
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-[1.15]">
              {TESTIMONIAL_CRAFT.visionTitle}
            </h2>
          </div>

          <p className="font-sans text-xs md:text-sm text-neutral-300 font-medium leading-relaxed">
            {TESTIMONIAL_CRAFT.visionSub}
          </p>
          <p className="font-sans text-xs md:text-sm text-neutral-300 font-medium leading-relaxed">
            {TESTIMONIAL_CRAFT.visionSub2}
          </p>

          <div className="relative pl-8 pt-4 pb-4 border-l-2 border-white/60">
            <Quote className="absolute -top-1 left-3 w-8 h-8 text-white/20 rotate-180 scale-x-[-1]" />
            <p className="font-serif text-lg text-white/90 italic leading-relaxed font-semibold">
              {TESTIMONIAL_CRAFT.quote}
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-8 relative z-10" id="vision-right-gilding">
          <div className="relative bg-white/[0.04] rounded-none p-4 shadow-[0_24px_90px_rgba(0,0,0,0.28)] border border-white/10">
            <div className="relative w-full h-[320px] md:h-[380px] overflow-hidden select-none group">
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
                    className="w-full h-full object-cover transition duration-700 group-hover:brightness-[1.1] group-hover:contrast-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-[8px] tracking-[0.24em] text-white uppercase font-semibold block mb-1">
                  {textureShowcase[activeTextureIdx].year}
                </span>
                <h4 className="font-sans text-xs tracking-[0.16em] font-semibold uppercase leading-tight">
                  {textureShowcase[activeTextureIdx].name}
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-2">
              {textureShowcase.map((tex, idx) => {
                const isActive = activeTextureIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTextureIdx(idx)}
                    className={`p-3 text-left transition-all border rounded-none cursor-pointer focus:outline-none ${
                      isActive
                        ? 'bg-white border-white text-black shadow-md'
                        : 'bg-white/[0.06] border-white/10 hover:bg-white/[0.12] text-neutral-200'
                    }`}
                  >
                    <span className="font-mono text-[10px] tracking-[0.22em] block font-semibold mb-1">0{idx + 1}</span>
                    <span className="font-sans text-[8px] tracking-[0.1em] font-semibold block uppercase truncate">
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
