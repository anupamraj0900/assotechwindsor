'use client';

import React, { useEffect, useRef } from 'react';

const team = [
  {
    name: 'Alpana Srivastava',
    role: 'Designated Partner · Development & Operations',
    bio: 'Alpana Srivastava leads development execution and on-ground operations across the Group. Closely involved in Windsor Heights from planning through delivery, she brings a disciplined, detail-oriented and people-first approach to project execution. Her leadership philosophy is simple: commitments made to customers must ultimately be visible on the ground.',
    initials: 'AS',
  },
  {
    name: 'Anupam Raj',
    role: 'Designated Partner · Strategy & Growth',
    bio: 'Anupam Raj leads strategy, expansion and new business initiatives for Assotech Windsor Group. With an international education and experience spanning technology, business and real estate, he brings a global perspective to the Group\'s growth strategy — from technology-led operations and customer acquisition to development partnerships and emerging PPP opportunities. He is focused on building Assotech Windsor beyond individual projects into a scalable development platform with a long-term presence across India.',
    initials: 'AR',
    linkedin: 'https://www.linkedin.com/in/anupamrajsrivastav/',
  },
];

export default function TeamSection() {
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
    <section ref={sectionRef} className="py-16 max-w-7xl mx-auto px-6" id="leadership">
      <div className="section-divider mb-16" />

      <div className="scroll-reveal-hidden text-center mb-12">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-4">
          Leadership
        </span>
        <h2 className="text-section-xl font-display font-semibold text-foreground">
          The Founders Behind
          <span className="italic gradient-text-gold"> Windsor.</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base font-light leading-relaxed">
          Assotech Windsor Group is led by partners who combine on-ground execution with an international outlook — united by a long-term vision for building trusted developments and enduring businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {team?.map((member, i) => (
          <div
            key={member?.name}
            className="scroll-reveal-hidden card-glass card-glass-hover rounded-2xl overflow-hidden group"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Avatar */}
            <div className="relative h-40 overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="w-24 h-24 rounded-full border-2 border-primary/40 flex items-center justify-center bg-muted/60">
                <span className="font-display text-3xl font-semibold gradient-text-gold">{member?.initials}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <div className="text-xs text-primary uppercase tracking-widest mb-1">{member?.role}</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{member?.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member?.bio}</p>
              {member?.linkedin && (
                <a
                  href={member?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-accent transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  View LinkedIn Profile
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom trust strip */}
      <div className="scroll-reveal-hidden mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { val: 'RERA', label: 'All Projects Registered' },
          { val: '2020', label: 'Year Founded' },
          { val: 'Real Estate', label: 'Core Sector' },
          { val: 'PPP', label: 'Growth Strategy' },
        ]?.map((item) => (
          <div
            key={item?.label}
            className="text-center p-5 rounded-xl border border-border hover:border-primary/30 transition-colors duration-300"
          >
            <div className="font-display text-2xl font-semibold gradient-text-gold mb-1">{item?.val}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">{item?.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
