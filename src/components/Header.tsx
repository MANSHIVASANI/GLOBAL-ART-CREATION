/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onInquireClick: () => void;
}

export default function Header({ onInquireClick }: HeaderProps) {
  const [activeHash, setActiveHash] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur/white transition on scroll
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Intersection observer-like hash detection
      const sections = ['home', 'collections', 'services', 'story', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
            setActiveHash(`#${section}`);
            // Safely push state without causing jumps
            window.history.replaceState(null, '', `#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLink = (hash: string) => {
    setActiveHash(hash);
    setMobileMenuOpen(false);
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'STUDIO', hash: '#story' },
    { label: 'SERVICES', hash: '#services' },
    { label: 'GALLERY', hash: '#collections' },
    { label: 'CONTACT', hash: '#contact' },
  ];

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-vintage-cream/80 backdrop-blur-md border-b border-vintage-sand py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          id="nav-logo-button"
          onClick={() => handleNavLink('#home')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif tracking-[0.25em] text-xl font-bold text-vintage-charcoal group-hover:text-luxury-gold transition-colors block leading-none">
            GLOBAL ART CREATION
          </span>
          <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-400 group-hover:text-vintage-charcoal transition-colors block mt-1 uppercase">
            GANDHIDHAM - KUTCH
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-navbar" className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => {
            const isActive = activeHash === item.hash;
            return (
              <button
                key={item.hash}
                onClick={() => handleNavLink(item.hash)}
                className="relative font-sans text-xs tracking-[0.15em] font-medium text-vintage-charcoal/70 hover:text-vintage-charcoal transition-colors duration-200 py-1 cursor-pointer focus:outline-none uppercase"
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Menu Icon */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-vintage-charcoal p-1 cursor-pointer focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-vintage-cream border-b border-vintage-sand overflow-hidden px-6 pb-8"
          >
            <div className="flex flex-col space-y-6 pt-4">
              {navItems.map((item) => {
                const isActive = activeHash === item.hash;
                return (
                  <button
                    key={item.hash}
                    onClick={() => handleNavLink(item.hash)}
                    className={`font-sans text-sm tracking-[0.15em] font-medium text-left py-2 border-b border-vintage-sand focus:outline-none uppercase ${
                      isActive ? 'text-luxury-gold' : 'text-vintage-charcoal/70'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
