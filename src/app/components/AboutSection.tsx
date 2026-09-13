'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.sr-hidden');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('sr-hidden');
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 bg-[#F8F6F0]" id="about">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: Heading */}
          <div className="lg:col-span-5">
            <div
              className="sr-hidden"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)' }}
            >
              <span className="text-eyebrow text-[#B8975A] block mb-6">About Assotech Windsor</span>
              <div className="w-12 h-px bg-[#B8975A] mb-8" />
            </div>
            <h2
              className="sr-hidden font-display font-light text-[#1C1C1A] text-section-xl"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s' }}
            >
              Built on Experience.<br />
              <span className="italic text-[#1B4332]">Driven by Ambition.</span>
            </h2>
          </div>

          {/* Right: Copy */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p
              className="sr-hidden text-[#1C1C1A]/70 text-lg font-light leading-relaxed"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s' }}
            >
              Assotech Windsor Group is a diversified enterprise operating across Real Estate and Technology.
            </p>
            <p
              className="sr-hidden text-[#6B6558] leading-relaxed"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s' }}
            >
              Established independently in 2020, the Group builds on more than 25 years of leadership experience in Indian real estate while creating a new generation of businesses for an increasingly connected world.
            </p>
            <p
              className="sr-hidden text-[#6B6558] leading-relaxed"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s' }}
            >
              Today, Assotech Windsor is expanding its real-estate footprint across India while building technology and digital engineering capabilities for North American markets.
            </p>
            <div
              className="sr-hidden pt-4"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s' }}
            >
              <Link href="/about" className="btn-outline">
                Discover Our Story
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}