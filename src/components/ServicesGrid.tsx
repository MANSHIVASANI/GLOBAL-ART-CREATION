/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { FolderOpen, Palette, Layers, Sparkles, Columns, Hammer, FileText } from 'lucide-react';

export default function ServicesGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const serviceIcons = [
    <Palette className="w-5 h-5 text-white" />,
    <Layers className="w-5 h-5 text-white" />,
    <Sparkles className="w-5 h-5 text-white" />,
    <FolderOpen className="w-5 h-5 text-white" />,
    <Columns className="w-5 h-5 text-white" />
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-12 bg-vintage-charcoal text-vintage-cream border-y border-white/10 relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[9px] tracking-[0.32em] text-white block mb-2 uppercase font-semibold">
              STUDIO ATELIER SELECTIONS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white">
              Our Services & Specialties
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-neutral-300 font-medium max-w-md leading-relaxed">
            Hands-on artisanal transformations custom created in Gandhidham, Kutch. Browse our structural disciplines designed to bring depth and luxury artistic identity into contemporary galleries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((elem, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={elem.num}
                className={`relative p-8 border border-white/10 bg-white/[0.04] overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-white/[0.08] hover:shadow-[0_24px_70px_rgba(0,0,0,0.32)] flex flex-col justify-between min-h-[380px] ${
                  idx >= 3 ? 'lg:col-span-1 xl:col-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-mono text-[11px] tracking-[0.24em] text-neutral-400 font-semibold group-hover:text-white transition-colors">
                      {elem.num}
                    </span>
                    <div className="p-2 bg-white/[0.08] rounded-none text-white border border-white/10 group-hover:bg-white/[0.12] transition-colors">
                      {serviceIcons[idx] || <Hammer className="w-4 h-4" />}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-white duration-300 transition-colors">
                      {elem.title}
                    </h3>
                    <p className="font-sans text-[12px] leading-relaxed text-neutral-300 font-medium group-hover:text-neutral-100 transition-colors">
                      {elem.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {elem.tags && elem.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {elem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[8px] tracking-[0.18em] bg-white/[0.08] px-2 py-1 text-neutral-200 uppercase font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {elem.pdf ? (
                    <a href={elem.pdf} target="_blank" rel="noopener noreferrer" className="pt-4 border-t border-white/10 flex items-center justify-between text-white hover:text-neutral-300 transition-colors block">
                      <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.22em] font-semibold uppercase">
                        <FileText className="w-3.5 h-3.5" />
                        PDF SPEC
                      </span>
                    </a>
                  ) : (
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-white transition-colors">
                      <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.22em] font-semibold uppercase">
                        <FileText className="w-3.5 h-3.5" />
                        PDF SPEC
                      </span>
                    </div>
                  )}
                </div>

                <AnimatePresence>
                  {isHovered && elem.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 0.24, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.08 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0 pointer-events-none select-none z-0"
                    >
                      <img
                        src={elem.image}
                        alt=""
                        className="w-full h-full object-cover transition duration-700 scale-[1.06] brightness-[1.22] contrast-[1.14] saturate-[1.15]"
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
