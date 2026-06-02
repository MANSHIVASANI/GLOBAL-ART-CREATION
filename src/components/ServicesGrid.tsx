/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { FolderOpen, Palette, Layers, Sparkles, Columns, Hammer, ArrowUpRight } from 'lucide-react';

export default function ServicesGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const serviceIcons = [
    <Palette className="w-5 h-5 text-luxury-gold" />,
    <Layers className="w-5 h-5 text-luxury-gold" />,
    <Sparkles className="w-5 h-5 text-luxury-gold" />,
    <FolderOpen className="w-5 h-5 text-luxury-gold" />,
    <Columns className="w-5 h-5 text-luxury-gold" />
  ];

  return (
    <section
      id="services"
      className="py-24 bg-vintage-cream border-t border-b border-vintage-sand/50 relative overflow-hidden"
    >
      {/* Decorative ambient backgrounds */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-vintage-sand/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header section matching exact video description */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-500 block mb-2 uppercase">
              STUDIO ATELIER SELECTIONS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-vintage-charcoal">
              Our Services & Specialties
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-neutral-500 font-light max-w-md leading-relaxed">
            Hands-on artisanal transformations custom created in Gandhidham, Kutch. Browse our structural disciplines designed to bring depth and luxury artistic identity into contemporary galleries.
          </p>
        </div>

        {/* 5-Column layout grid beautifully spanning 12 cols total */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((elem, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={elem.num}
                className={`relative p-8 border border-vintage-sand bg-vintage-sand/15 overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-vintage-cream hover:shadow-xl flex flex-col justify-between min-h-[380px] ${
                  idx >= 3 ? 'lg:col-span-1 xl:col-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Micro accent top bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Card Top: Number + Icon */}
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-mono text-[11px] tracking-widest text-neutral-400 font-bold group-hover:text-luxury-gold transition-colors">
                      {elem.num}
                    </span>
                    <div className="p-2 bg-vintage-cream rounded-none text-luxury-gold border border-vintage-sand group-hover:bg-vintage-sand/1 transition-colors">
                      {serviceIcons[idx] || <Hammer className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-medium text-luxury-gold-dark group-hover:text-luxury-gold duration-300 transition-colors">
                      {elem.title}
                    </h3>
                    <p className="font-sans text-[12px] leading-relaxed text-neutral-500 font-light group-hover:text-neutral-600 transition-colors">
                      {elem.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom: Interactive Portfolio trigger + tags */}
                <div className="mt-8 space-y-4">
                  {/* Dynamic Tags Row like 0:17 inside video */}
                  {elem.tags && elem.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {elem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[8px] tracking-[0.15em] bg-vintage-sand/40 group-hover:bg-vintage-sand px-2 py-1 text-neutral-400 group-hover:text-vintage-charcoal transition-colors uppercase font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {elem.pdf ? (
                    <a href={elem.pdf} target="_blank" rel="noopener noreferrer" className="pt-4 border-t border-vintage-sand/30 flex items-center justify-between text-luxury-gold group-hover:text-luxury-gold-dark transition-colors block">
                      <span className="font-mono text-[9px] tracking-widest font-bold uppercase">
                        VIEW PORTFOLIO
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <div className="pt-4 border-t border-vintage-sand/30 flex items-center justify-between text-luxury-gold group-hover:text-luxury-gold-dark transition-colors">
                      <span className="font-mono text-[9px] tracking-widest font-bold uppercase">
                        VIEW PORTFOLIO
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  )}
                </div>

                {/* Immersive blurred thumbnail backdrop inside card */}
                <AnimatePresence>
                  {isHovered && elem.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.12 }}
                      animate={{ opacity: 0.04, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.12 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 pointer-events-none select-none z-0"
                    >
                      <img
                        src={elem.image}
                        alt=""
                        className="w-full h-full object-cover filter grayscale sepia"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
