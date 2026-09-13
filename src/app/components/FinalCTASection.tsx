'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-40 bg-[#1B4332] overflow-hidden">
      {/* AW monogram background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          transform: visible ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <span
          className="font-display font-light text-[#F8F6F0]"
          style={{ fontSize: 'clamp(20rem, 40vw, 50rem)', lineHeight: '1', opacity: 0.04, letterSpacing: '-0.05em' }}
        >
          AW
        </span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 text-center">
        <div
          className="opacity-0"
          style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' : 'none' }}
        >
          <span className="text-eyebrow text-[#B8975A] block mb-8">Assotech Windsor Group</span>
        </div>

        <h2
          className="font-display font-light text-[#F8F6F0] text-section-xl mb-6 opacity-0"
          style={{ animation: visible ? 'slideInBlur 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s forwards' : 'none' }}
        >
          Building the<br />
          <span className="italic text-[#B8975A]">Next Chapter.</span>
        </h2>

        <p
          className="text-[#F8F6F0]/50 text-sm tracking-[0.15em] uppercase mb-16 opacity-0"
          style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s forwards' : 'none' }}
        >
          Real Estate · Technology · Strategic Growth
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
          style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s forwards' : 'none' }}
        >
          <Link href="/contact" className="btn-outline-ivory">
            Partner With Us
          </Link>
          <Link
            href="/contact"
            className="btn-outline-ivory"
            style={{ borderColor: 'rgba(184,151,90,0.4)', color: '#B8975A' }}
          >
            Contact the Group
          </Link>
        </div>
      </div>
    </section>
  );
}
