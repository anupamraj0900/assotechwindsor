'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden" aria-label="Hero">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 overflow-hidden">
      <img
          ref={imgRef}
          src="https://img.rocket.new/generatedImages/rocket_gen_img_456bd6770-1790861117460.png"
          alt="Assotech Windsor Group development"
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center',
            transform: loaded ? 'scale(1.0)' : 'scale(1.08)',
            transition: 'transform 12s cubic-bezier(0.16, 1, 0.3, 1)'
          }} />
        
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F15]/90 via-[#0F1F15]/40 to-[#0F1F15]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F15]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 pb-24 pt-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}


          {/* Headline */}
          <h1 className="font-display font-light text-[#F8F6F0] mb-8" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: '1.5', letterSpacing: '-0.02em' }}>
            <span
              className="block overflow-hidden opacity-0"
              style={{ animation: loaded ? 'slideInBlur 1s cubic-bezier(0.16,1,0.3,1) 0.7s forwards' : 'none' }}>
              Building Legacy.
            </span>
            <span
              className="block overflow-hidden opacity-0 italic"
              style={{ animation: loaded ? 'slideInBlur 1s cubic-bezier(0.16,1,0.3,1) 0.95s forwards' : 'none', color: '#B8975A' }}>

              Creating What's Next.
            </span>
          </h1>

          {/* Subtitle */}
          <div
            className="mb-3 opacity-0"
            style={{ animation: loaded ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 1.25s forwards' : 'none' }}>
            
            <p className="text-[13px] tracking-[0.2em] uppercase text-[#F8F6F0]/60 font-medium">
              Real Estate · Technology · Strategic Growth
            </p>
          </div>

          {/* Supporting copy */}
          <div
            className="mb-12 opacity-0"
            style={{ animation: loaded ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 1.45s forwards' : 'none' }}>
            
            <p className="text-base text-[#F8F6F0]/55 font-light leading-relaxed max-w-lg">
              Built on decades of experience.<br />
              Growing across India and North America.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0"
            style={{ animation: loaded ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 1.65s forwards' : 'none' }}>
            
            <Link href="/about" className="btn-outline-ivory">
              Explore the Group
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/real-estate" className="btn-outline-ivory" style={{ borderColor: 'rgba(184,151,90,0.4)', color: '#B8975A' }}>
              Our Businesses
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 flex flex-col items-center gap-3 opacity-0"
        style={{ animation: loaded ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 2s forwards' : 'none' }}>
        
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#F8F6F0]/40 rotate-90 origin-center" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#B8975A]/60 to-transparent" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
      </div>
    </section>);

}