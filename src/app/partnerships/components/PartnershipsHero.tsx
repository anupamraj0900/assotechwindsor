'use client';

import React from 'react';

export default function PartnershipsHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/80 to-background" />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] blob-gold animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] blob-warm animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div style={{ animation: 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-6">
            Partnerships
          </span>
          <h1 className="text-hero-xl font-display font-semibold gradient-text-ivory mb-6 max-w-3xl">
            Building Through
            <span className="block italic gradient-text-gold">Partnership.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light mb-8">
            India&apos;s next phase of urban growth will increasingly require collaboration between developers, landowners, institutions and government bodies. Assotech Windsor Group actively evaluates development opportunities through joint ventures, development partnerships and public-private partnership frameworks.
          </p>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed font-light">
            We focus particularly on opportunities where infrastructure, housing demand, tourism, cultural significance or urban expansion can create durable long-term value.
          </p>
        </div>
      </div>
    </section>
  );
}
