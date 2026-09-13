'use client';

import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] blob-gold animate-pulse-glow" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div
          style={{ animation: 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-6">
            Contact Us
          </span>
          <h1 className="text-hero-xl font-display font-semibold gradient-text-ivory mb-4">
            Let&apos;s Build
            <span className="block italic gradient-text-gold">Something Together.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed font-light">
            Whether you&apos;re a homebuyer, landowner, institution or development partner — our team is ready to explore the opportunity with you.
          </p>
        </div>
      </div>
    </section>
  );
}