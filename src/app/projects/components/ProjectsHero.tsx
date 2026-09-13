'use client';

import React from 'react';

export default function ProjectsHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blob-gold animate-pulse-glow"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <span
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-6"
          style={{ animation: 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}
        >
          Our Portfolio
        </span>
        <h1
          className="text-hero-xl font-display font-semibold gradient-text-ivory mb-6"
          style={{ animation: 'slideInBlur 1s cubic-bezier(0.16,1,0.3,1) 0.4s both' }}
        >
          Every Project,
          <span className="block italic gradient-text-gold">A Legacy.</span>
        </h1>
        <p
          className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed font-light"
          style={{ animation: 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s both' }}
        >
          Discover our ongoing and upcoming residential projects across
          Madhya Pradesh, Kashi, and Vrindavan.
        </p>
      </div>
    </section>
  );
}