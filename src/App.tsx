/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Archive from './components/Archive';
import Vision from './components/Vision';
import InquiryForm from './components/InquiryForm';
import InquiryModal from './components/InquiryModal';
import { ArrowUp, Star, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="studio-app-root" className="min-h-screen flex flex-col justify-between selection:bg-luxury-gold selection:text-vintage-charcoal">
      {/* Decorative architectural background grids */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 opacity-[0.02] bg-[radial-gradient(#121211_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Core navigation header */}
      <Header onInquireClick={() => setIsInquiryOpen(true)} />

      {/* Main Single Page Sections */}
      <main className="flex-grow z-10">
        {/* Section 1: Hero landing screen */}
        <Hero onInquireClick={() => setIsInquiryOpen(true)} />

        {/* Section 2: Services Grid display */}
        <ServicesGrid />

        {/* Section 3: Archive Carousel / Collections list */}
        <Archive />

        {/* Section 4: Vision Credentials/Texture work */}
        <Vision />

        {/* Section 5: Dark Inquiry details */}
        <InquiryForm />
      </main>

      {/* Footer conforming exactly to the branding details at 0:42 in the video */}
      <footer id="studio-footer" className="bg-vintage-charcoal text-neutral-400 py-10 px-6 md:px-12 border-t border-white/5 relative z-10 selection:bg-white selection:text-vintage-charcoal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Left location tags */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            <button
              onClick={() => window.open('https://maps.google.com/maps?q=Gandhidham,+Gujarat,+India', '_blank')}
              className="flex items-center space-x-2 hover:text-luxury-gold transition-colors cursor-pointer focus:outline-none"
              aria-label="Open location in Google Maps"
            >
              <MapPin className="w-4 h-4" />
              <span className="font-mono text-[9px] tracking-[0.2em] font-semibold text-white uppercase">
                GANDHIDHAM - KUTCH
              </span>
            </button>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase font-medium">
              BY APPOINTMENT ONLY
            </span>
          </div>

          {/* Central Logo footprint */}
          <div className="text-center">
            <span className="font-serif text-sm tracking-[0.25em] text-white font-semibold block leading-none">
              GLOBAL ART CREATION
            </span>
          </div>

          {/* Scroller only */}
          <div className="flex items-center space-x-6">
            {/* Scroll back to top trigger */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/5 hover:bg-luxury-gold hover:text-vintage-charcoal text-white rounded-none border border-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Universal Inquire side drawer/modal */}
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </div>
  );
}
