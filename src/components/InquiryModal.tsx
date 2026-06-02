/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, Mail, CheckCircle } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Wall Sculptures');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const categories = [
    'Wall Sculptures',
    'Fiber Wall Murals',
    'Lippan Mud Art',
    'Siporex Wall Art'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="quick-inquiry-modal-container" className="fixed inset-0 z-[100] flex justify-end">
          
          {/* Backdrop blurring effect overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-vintage-charcoal/60 backdrop-blur-sm"
          />

          {/* Drawer Content Panel (Right aligned) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 220 }}
            className="relative w-full max-w-lg bg-vintage-cream h-full shadow-2xl p-8 md:p-12 border-l border-vintage-sand flex flex-col justify-between z-10 overflow-y-auto"
          >
            {/* Drawer top close action buttons */}
            <div className="flex justify-between items-center pb-6 border-b border-vintage-sand">
              <div>
                <span className="font-mono text-[8px] tracking-[0.25em] text-neutral-400 block uppercase">
                  Atelier Correspondence
                </span>
                <span className="font-sans text-xs tracking-widest text-vintage-charcoal uppercase font-bold">
                  Quick Studio Request
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-vintage-charcoal hover:text-luxury-gold bg-vintage-sand/50 rounded-full cursor-pointer focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Drawer Forms */}
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="drawerform"
                  onSubmit={handleQuickSubmit}
                  className="space-y-6 my-auto pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="font-sans text-[13px] text-neutral-600 font-light leading-relaxed">
                    Provide your contact details and specified service category to schedule a telephone consult with our Gandhidham lead artisans.
                  </p>

                  <div className="space-y-5">
                    {/* Name input */}
                    <div>
                      <label className="font-mono text-[8px] tracking-[0.25em] text-neutral-400 block mb-2 uppercase font-semibold">
                        GUEST NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="E.g. Adrian Carter"
                        className="w-full bg-vintage-sand/40 border-b border-vintage-sand focus:border-luxury-gold py-2.5 px-3 text-sm text-vintage-charcoal outline-none transition-colors rounded-none placeholder-neutral-400 font-sans"
                      />
                    </div>

                    {/* Email input */}
                    <div>
                      <label className="font-mono text-[8px] tracking-[0.25em] text-neutral-400 block mb-2 uppercase font-semibold">
                        EMAIL ADRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E.g. adrian@domain.com"
                        className="w-full bg-vintage-sand/40 border-b border-vintage-sand focus:border-luxury-gold py-2.5 px-3 text-sm text-vintage-charcoal outline-none transition-colors rounded-none placeholder-neutral-400 font-sans"
                      />
                    </div>

                    {/* Dropdown service categories selection */}
                    <div>
                      <label className="font-mono text-[8px] tracking-[0.25em] text-neutral-400 block mb-2 uppercase font-semibold">
                        SELECT DISCIPLINE
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-vintage-sand/50 border border-vintage-sand focus:border-luxury-gold py-3 px-3 text-xs text-vintage-charcoal tracking-wide outline-none transition-colors rounded-none font-sans uppercase"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-vintage-charcoal text-white hover:bg-luxury-gold hover:text-vintage-charcoal text-xs tracking-[0.25em] py-4 transition-all duration-300 font-bold flex items-center justify-center space-x-2 rounded-none uppercase cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>PROCESSING SLOT...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>REQUEST CONSULTATION</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                // Success feedback model inside vertical drawer
                <motion.div
                  key="drawersuccess"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-12 flex flex-col items-center my-auto"
                >
                  <div className="w-16 h-16 bg-luxury-gold/10 text-luxury-gold flex items-center justify-center rounded-full border border-luxury-gold/35 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-light text-vintage-charcoal">
                      Consultation Assigned
                    </h3>
                    <p className="font-mono text-[9px] text-luxury-gold tracking-widest font-semibold uppercase">
                      CONFIRMATION TICKET: #ART-{Math.floor(2000 + Math.random() * 8000)}
                    </p>
                  </div>

                  <p className="font-sans text-[12px] leading-relaxed text-neutral-600 font-light max-w-xs mx-auto">
                    A dedicated specialist has been mapped to assist you. A meeting schedule has been queued and sent to your email at <strong className="text-vintage-charcoal font-semibold">{email}</strong>.
                  </p>

                  <div className="p-4 bg-vintage-sand/50 scale-95 border border-vintage-sand flex items-start space-x-3 text-left">
                    <Mail className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" />
                    <p className="font-sans text-[10px] text-neutral-500 leading-normal">
                      Please double-check your spam fold if our digital atelier specification sheet does not arrive shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                    }}
                    className="font-mono text-[8px] tracking-[0.2em] font-bold text-luxury-gold hover:text-vintage-charcoal uppercase cursor-pointer"
                  >
                    SUBMIT ANOTHER SLOT
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom footnote copyright info */}
            <div className="pt-6 border-t border-vintage-sand text-center">
              <span className="font-mono text-[8px] text-neutral-400 tracking-wider">
                © GLOBAL ART CREATION • BY APPOINTMENT ONLY
              </span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
