'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function EnquirySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', project: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.scroll-reveal-hidden');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-reveal-hidden');
            entry.target.classList.add('scroll-reveal');
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="py-16 relative" id="enquiry">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA copy */}
          <div className="scroll-reveal-hidden">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-6">
              Get in Touch
            </span>
            <h2 className="text-section-xl font-display font-semibold text-foreground mb-4">
              Ready for Your
              <span className="block italic gradient-text-gold">Dream Home?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              Schedule a site visit or register your interest. Our team will reach
              out within 24 hours with project details, pricing, and availability.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: '📍', title: 'Corporate Office', val: 'H-127, Sector-63, Noida, UP 201301' },
                { icon: '📞', title: 'Call Us', val: '+91 98100 XXXXX' },
                { icon: '✉️', title: 'Email', val: 'enquiry@assotechwindsor.com' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{item.title}</div>
                    <div className="text-sm text-foreground font-medium">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> RERA Registered</span>
              <span>·</span>
              <span>100% Transparent Pricing</span>
              <span>·</span>
              <span>No Brokerage</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="scroll-reveal-hidden">
            <div className="card-glass rounded-3xl p-7 md:p-10" style={{ boxShadow: '0 0 50px -15px rgba(200,150,90,0.15)' }}>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">Enquiry Received!</h3>
                  <p className="text-muted-foreground text-sm">Our team will contact you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-primary hover:text-accent transition-colors">
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">Book a Site Visit</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ramesh Agarwal"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98100 XXXXX"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Project of Interest</label>
                    <select
                      value={formState.project}
                      onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                      className="select-field"
                    >
                      <option value="">Select a project</option>
                      <option>Windsor Heights, Bhopal</option>
                      <option>Windsor Greens MP, Indore</option>
                      <option>Windsor Kashi (Upcoming)</option>
                      <option>Windsor Vrindavan (Upcoming)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="input-field resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-95"
                    style={{ boxShadow: '0 0 25px -5px rgba(200,150,90,0.4)' }}
                  >
                    Send Enquiry
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by our team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}