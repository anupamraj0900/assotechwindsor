'use client';

import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: 'We purchased a 3 BHK in Windsor Heights and the entire process was completely transparent. No hidden charges, RERA-registered, and the quality of construction exceeded our expectations. Our family finally has the home we always dreamed of.',
    name: 'Ramesh Agarwal',
    role: 'Homeowner, Windsor Heights, Bhopal',
    initials: 'RA',
    metric1: { val: '₹0', label: 'Hidden Charges' },
    metric2: { val: '6 mo', label: 'Early Possession' },
  },
  {
    quote: 'As an NRI, I was worried about investing in Indian real estate from abroad. Assotech Windsor Group made it seamless — dedicated relationship manager, digital documentation, and regular site updates. The Vrindavan project is exactly the kind of spiritual investment I was looking for.',
    name: 'Priya Mehta',
    role: 'NRI Investor, Dubai',
    initials: 'PM',
    metric1: { val: '100%', label: 'Digital Process' },
    metric2: { val: 'NRI', label: 'Friendly' },
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef?.current?.querySelectorAll('.scroll-reveal-hidden');
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
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative" id="testimonials">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal-hidden text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-4">
            Homeowner Stories
          </span>
          <h2 className="text-section-xl font-display font-semibold text-foreground">
            Families Who
            <span className="italic gradient-text-gold"> Trust Us.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials?.map((t, i) => (
            <div key={i} className="scroll-reveal-hidden relative">
              {/* Stacked back layers */}
              <div className="pointer-events-none absolute inset-x-4 -top-4 h-32 border border-primary/5 bg-secondary/40 rounded-3xl opacity-40 scale-95 blur-[1px]" />
              <div className="pointer-events-none absolute inset-x-2 -top-2 h-32 border border-primary/8 bg-secondary/60 rounded-3xl opacity-70" />

              {/* Front card */}
              <div
                className="relative z-10 card-glass rounded-3xl p-7 md:p-10"
                style={{ boxShadow: '0 0 40px -15px rgba(200,150,90,0.15)' }}
              >
                {/* Quote mark */}
                <div className="text-primary/20 mb-4">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21V18c0-1.105.895-2 2-2h3c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v2c0 .552-.448 1-1 1h-1V5h10v10c0 3.314-2.686 6-6 6h-2zm-11 0V18c0-1.105.895-2 2-2h3c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1H4c-.552 0-1 .448-1 1v2c0 .552-.448 1-1 1H1V5h10v10c0 3.314-2.686 6-6 6H3z"/>
                  </svg>
                </div>

                <p className="font-display text-lg md:text-xl font-light text-foreground/90 leading-relaxed italic mb-8">
                  &ldquo;{t?.quote}&rdquo;
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-display font-semibold text-primary text-sm">
                      {t?.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{t?.name}</div>
                      <div className="text-xs text-muted-foreground">{t?.role}</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="font-display text-xl font-semibold gradient-text-gold">{t?.metric1?.val}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{t?.metric1?.label}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display text-xl font-semibold gradient-text-gold">{t?.metric2?.val}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{t?.metric2?.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}