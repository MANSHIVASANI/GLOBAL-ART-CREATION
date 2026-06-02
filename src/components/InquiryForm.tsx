/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Calendar, Sparkles } from 'lucide-react';
import { InquiryFormState } from '../types';

export default function InquiryForm() {
  const [form, setForm] = useState<InquiryFormState>({
    fullName: '',
    email: '',
    serviceCategory: 'Wall Sculptures',
    specifications: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email) return;

    setIsSubmitting(true);
    
    const message = `Hello Global Art Creation,\n\nI would like to submit an inquiry for a new project.\n\n*Name:* ${form.fullName}\n*Email:* ${form.email}\n*Service Category:* ${form.serviceCategory}\n*Specifications:*\n${form.specifications || 'None provided'}\n\nLooking forward to hearing from you.`;
    const whatsappUrl = `https://wa.me/919106019993?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const categories = [
    'Wall Sculptures',
    'Fiber Wall Murals',
    'Lippan Mud Art',
    'Siporex Wall Art'
  ];

  return (
    <section id="contact" className="py-24 bg-vintage-charcoal text-vintage-cream px-6 md:px-12 relative overflow-hidden">
      {/* Absolute decorative star lights or abstract blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Column: Coordinates & Social handles */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
          
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] tracking-tight">
              Start Your <br />
              <span className="italic font-normal font-serif text-luxury-gold">Masterpiece</span>
            </h2>
          </div>

          <div className="space-y-8 pt-8 border-t border-vintage-cream/10">
            {/* Studio Address */}
            <button
              onClick={() => window.open('https://maps.google.com/maps?q=Gandhidham,+Gujarat,+India', '_blank')}
              className="flex items-start space-x-4 hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0 focus:outline-none"
              aria-label="Open location in Google Maps"
            >
              <div className="p-2.5 bg-white/5 rounded-none text-luxury-gold border border-white/10 mt-1">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] tracking-widest text-neutral-400 block mb-0.5">STUDIO ATELIER</span>
                <span className="font-sans text-xs font-semibold tracking-wider text-vintage-cream uppercase block">
                  Gandhidham, Kutch
                </span>
                <span className="font-sans text-xs text-neutral-400 font-light block">
                  Gujarat, India
                </span>
              </div>
            </button>

            {/* Email Contact */}
            <div className="flex items-start space-x-4">
              <div className="p-2.5 bg-white/5 rounded-none text-luxury-gold border border-white/10 mt-1">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] tracking-widest text-neutral-400 block mb-0.5">CORRESPONDENCE</span>
                <a
                  href="mailto:globalartcreation@gmail.com"
                  className="font-sans text-xs font-semibold tracking-wider text-luxury-gold hover:text-luxury-gold-dark lowercase block transition-colors"
                >
                  globalartcreation@gmail.com
                </a>
              </div>
            </div>

            {/* Direct Phone inquiries */}
            <div className="flex items-start space-x-4">
              <div className="p-2.5 bg-white/5 rounded-none text-luxury-gold border border-white/10 mt-1">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] tracking-widest text-neutral-400 block mb-0.5">INQUIRIES</span>
                <a
                  href="tel:+919106019993"
                  className="font-sans text-xs font-semibold tracking-wider text-vintage-cream uppercase block hover:text-luxury-gold transition-colors"
                >
                  +91 91060 19993
                </a>
              </div>
            </div>
          </div>



        </div>

        {/* Right Column: Dynamic Inquiry Submission Box */}
        <div className="lg:col-span-7" id="commission-form-wrapper">
          <div className="bg-white/[0.02] border border-white/10 rounded-none p-8 md:p-12 shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="inquiryform"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="font-serif text-neutral-300 italic text-sm md:text-base font-light border-b border-white/5 pb-4">
                    Submit your details and preferences to register a custom architectural design slot with our lead conceptualists.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Full Name input */}
                    <div className="relative group/field focus-within:border-luxury-gold/50 transition-colors">
                      <label className="font-mono text-[8px] tracking-[0.3em] text-neutral-400 block mb-2 uppercase font-semibold">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="Johnathan Doe"
                        className="w-full bg-transparent border-b border-white/15 focus:border-luxury-gold py-2 text-sm tracking-wide text-white outline-none transition-colors rounded-none placeholder-neutral-500 font-sans"
                      />
                    </div>

                    {/* Email address input */}
                    <div className="relative group/field focus-within:border-luxury-gold/50 transition-colors">
                      <label className="font-mono text-[8px] tracking-[0.3em] text-neutral-400 block mb-2 uppercase font-semibold">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@architect.com"
                        className="w-full bg-transparent border-b border-white/15 focus:border-luxury-gold py-2 text-sm tracking-wide text-white outline-none transition-colors rounded-none placeholder-neutral-500 font-sans"
                      />
                    </div>
                  </div>

                  {/* Service Category Selector */}
                  <div>
                    <label className="font-mono text-[8px] tracking-[0.3em] text-neutral-400 block mb-3 uppercase font-semibold">
                      SERVICE CATEGORY
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {categories.map((cat) => {
                        const isSelected = form.serviceCategory === cat;
                        return (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setForm({ ...form, serviceCategory: cat })}
                            className={`p-3 text-center transition-colors text-[9px] tracking-wider font-semibold border uppercase cursor-pointer rounded-none focus:outline-none ${
                              isSelected
                                ? 'bg-luxury-gold border-luxury-gold text-vintage-charcoal'
                                : 'bg-transparent border-white/10 hover:border-white/30 text-neutral-400'
                            }`}
                          >
                            {cat}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Specifications Textarea */}
                  <div>
                    <label className="font-mono text-[8px] tracking-[0.3em] text-neutral-400 block mb-2 uppercase font-semibold">
                      SPECIFICATIONS
                    </label>
                    <textarea
                      value={form.specifications}
                      onChange={(e) => setForm({ ...form, specifications: e.target.value })}
                      rows={4}
                      placeholder="Describe your vision (e.g. Lobby focal wall dimensions, color palette, architectural lighting coordinates...)"
                      className="w-full bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-luxury-gold text-sm text-white p-4 outline-none transition-all placeholder-neutral-510 font-sans leading-relaxed resize-none rounded-none"
                    />
                  </div>

                  {/* Submit commission button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-gold text-vintage-charcoal hover:bg-white text-xs tracking-[0.25em] font-bold py-4 transition-all duration-300 select-none cursor-pointer flex items-center justify-center space-x-3 rounded-none uppercase focus:outline-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-vintage-charcoal border-t-transparent rounded-full animate-spin" />
                        <span>COMMISSIONING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>SUBMIT INQUIRY</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                // Success View: Elegant credentials letter/envelope design
                <motion.div
                  key="inquirysuccess"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6 flex flex-col items-center"
                >
                  <div className="p-4 bg-luxury-gold/10 text-luxury-gold rounded-full border border-luxury-gold/20 animate-pulse">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2 max-w-lg">
                    <h3 className="font-serif text-2xl font-light text-white">
                      Inquiry Registered
                    </h3>
                    <p className="font-sans text-xs tracking-widest text-luxury-gold/90 font-semibold uppercase">
                      PROPOSAL ID: {Math.floor(100000 + Math.random() * 900000)}
                    </p>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-neutral-300 font-light leading-relaxed max-w-md">
                    Thank you, <strong className="text-white font-semibold">{form.fullName}</strong>. Your request for <span className="text-luxury-gold font-medium">"{form.serviceCategory}"</span> has been queued for our master conceptualists. 
                  </p>

                  <div className="bg-white/[0.02] p-4 border border-white/5 rounded-none text-left w-full space-y-3">
                    <div className="flex items-center space-x-2 text-[10px] text-neutral-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                      <span>CORRESPONDENCE ASSIGNMENT</span>
                    </div>
                    <p className="font-sans text-[11px] leading-relaxed text-neutral-300">
                      An official Atelier design dossier will be sent to <span className="text-white font-medium">{form.email}</span> within 24 hours. We appreciate your interest in collaborating with Global Art Creation.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setForm({
                        fullName: '',
                        email: '',
                        serviceCategory: 'Wall Sculptures',
                        specifications: ''
                      });
                    }}
                    className="font-mono text-[9px] tracking-widest font-semibold text-luxury-gold hover:text-white uppercase hover:underline cursor-pointer focus:outline-none"
                  >
                    ← SUBMIT ANOTHER PROPOSAL
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
