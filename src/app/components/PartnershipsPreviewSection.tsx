'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const partnershipTypes = [
  {
    icon: '⬡',
    title: 'Public-Private Partnerships',
    desc: 'Urban development, tourism-linked infrastructure, housing and redevelopment opportunities.',
  },
  {
    icon: '◈',
    title: 'Joint Developments',
    desc: 'Partnerships with landowners and institutions where Windsor can bring planning, development, sales and execution capabilities.',
  },
  {
    icon: '◇',
    title: 'Strategic Land Opportunities',
    desc: 'Select opportunities in growth corridors across North and Central India.',
  },
];

const markets = [
  { name: 'Delhi NCR', type: 'Growth Corridor' },
  { name: 'Uttar Pradesh', type: 'Emerging Market' },
  { name: 'Madhya Pradesh', type: 'Active Market' },
  { name: 'Heritage Destinations', type: 'Exploring' },
];

export default function PartnershipsPreviewSection() {
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
    <section ref={sectionRef} className="py-16 relative" id="partnerships-preview">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="scroll-reveal-hidden max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-4">
            Partnerships
          </span>
          <h2 className="text-section-xl font-display font-semibold text-foreground mb-4">
            Building Through
            <span className="block italic gradient-text-gold">Partnership.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base font-light">
            India&apos;s next phase of urban growth will increasingly require collaboration between developers, landowners, institutions and government bodies. Assotech Windsor Group actively evaluates development opportunities through joint ventures, development partnerships and public-private partnership frameworks.
          </p>
        </div>

        {/* Partnership cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {partnershipTypes?.map((p, i) => (
            <div
              key={p?.title}
              className="scroll-reveal-hidden card-glass card-glass-hover rounded-2xl p-7 flex flex-col gap-4"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-primary text-2xl">{p?.icon}</span>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p?.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p?.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Markets strip */}
        <div className="scroll-reveal-hidden card-glass rounded-2xl p-6 mb-10">
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Markets We Are Exploring</div>
          <div className="flex flex-wrap gap-3">
            {markets?.map((m) => (
              <div key={m?.name} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/40">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">{m?.name}</span>
                <span className="text-xs text-muted-foreground">· {m?.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-reveal-hidden text-center">
          <Link
            href="/partnerships"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            style={{ boxShadow: '0 0 25px -5px rgba(46,139,87,0.4)' }}
          >
            Discuss a Development Opportunity
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
