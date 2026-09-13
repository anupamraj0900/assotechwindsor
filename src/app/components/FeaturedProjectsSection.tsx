'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const metrics = [
{ value: '4.6 Acres', label: 'Total Site Area' },
{ value: '576', label: 'Residences' },
{ value: 'G+6', label: 'Low-Rise Development' },
{ value: '200+', label: 'Bookings Secured' },
{ value: '~90%', label: 'Construction Progress' }];


export default function FeaturedProjectsSection() {
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
      { threshold: 0.08 }
    );
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative" id="projects-preview">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="scroll-reveal-hidden text-center mb-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-4">
            Featured Development
          </span>
          <h2 className="text-section-xl font-display font-semibold text-foreground">
            Windsor Heights
            <span className="block italic gradient-text-gold">Katni, Madhya Pradesh.</span>
          </h2>
        </div>

        {/* Windsor Heights — Case Study Treatment */}
        <div className="scroll-reveal-hidden relative rounded-3xl overflow-hidden border border-border mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image side */}
            <div className="relative h-72 lg:h-auto min-h-[400px] overflow-hidden">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_4324d1a6c-1789130484983.png"
                alt="Windsor Heights residential community in Katni, Madhya Pradesh — G+6 low-rise towers with landscaped grounds and open spaces"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30 lg:bg-gradient-to-l" />
              <div className="absolute top-4 left-4">
                <span className="status-badge-ongoing text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wide">
                  Ongoing · ~90% Complete
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 lg:p-12 flex flex-col justify-between bg-card/60">
              <div>
                <p className="text-muted-foreground leading-relaxed text-base font-light mb-8">
                  A thoughtfully planned residential community designed around modern families, open spaces and connectivity. Located along the Jabalpur–Katni corridor, Windsor Heights represents the foundation of Assotech Windsor Group&apos;s development philosophy: accessible housing, considered planning, community spaces and dependable execution.
                </p>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {metrics?.map((m) =>
                  <div key={m?.label} className="p-4 rounded-xl border border-border bg-secondary/40 text-center">
                      <div className="font-display text-xl font-semibold gradient-text-gold mb-1">{m?.value}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{m?.label}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  style={{ boxShadow: '0 0 20px -5px rgba(46,139,87,0.4)' }}>
                  
                  Discover Windsor Heights
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-foreground font-semibold text-sm hover:bg-primary/10 transition-all duration-300">
                  
                  Book Site Visit
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Brand philosophy note */}
        <div className="scroll-reveal-hidden mt-10 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground text-sm leading-relaxed font-light italic">
            &ldquo;Windsor Heights is our first expression of a simple belief: successful real estate is built through a combination of location, execution, trust and an understanding of the communities that will ultimately call it home.&rdquo;
          </p>
          <div className="mt-4 text-xs text-muted-foreground/60 uppercase tracking-widest">Assotech Windsor Group · Development Philosophy</div>
        </div>
      </div>
    </section>);

}