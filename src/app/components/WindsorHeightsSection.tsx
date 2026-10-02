'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const whStats = [
{ value: '4.6', label: 'Acres' },
{ value: '576', label: 'Residences' },
{ value: 'G+6', label: 'Development' },
{ value: '200+', label: 'Bookings' }];


export default function WindsorHeightsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true);observer.disconnect();}},
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 bg-[#F8F6F0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Image */}
          <div
            className="lg:col-span-7 relative opacity-0"
            style={{ animation: visible ? 'slideInBlur 1s cubic-bezier(0.16,1,0.3,1) 0.1s forwards' : 'none' }}>
            
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src="https://img.rocket.new/generatedImages/rocket_gen_img_4f8f28475-1790861119962.png"
                alt="Windsor Heights residential community Katni Madhya Pradesh — modern apartments with open spaces"
                className="w-full h-full object-cover"
                style={{
                  transform: visible ? 'scale(1.0)' : 'scale(1.06)',
                  transition: 'transform 8s cubic-bezier(0.16, 1, 0.3, 1)'
                }} />
              
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F0]/20 to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#1B4332]/90 backdrop-blur-sm grid grid-cols-4">
              {whStats?.map((stat) =>
              <div key={stat?.label} className="text-center py-5 border-r border-[#F8F6F0]/10 last:border-r-0">
                  <div className="font-display text-2xl font-light text-[#F8F6F0]">{stat?.value}</div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-[#B8975A] mt-1">{stat?.label}</div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-5">
            <div
              className="opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards' : 'none' }}>
              
              <span className="text-eyebrow text-[#B8975A] block mb-4">Current Development</span>
              <div className="w-12 h-px bg-[#B8975A] mb-8" />
            </div>
            <h2
              className="font-display font-light text-[#1C1C1A] mb-2 opacity-0"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: '1', letterSpacing: '-0.02em', animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards' : 'none' }}>
              
              Windsor Heights
            </h2>
            <p
              className="text-[#6B6558] text-sm tracking-wide mb-8 opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s forwards' : 'none' }}>
              
              Katni, Madhya Pradesh
            </p>
            <p
              className="text-[#6B6558] leading-relaxed mb-10 opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s forwards' : 'none' }}>
              
              A thoughtfully planned residential community designed around modern living, open spaces, connectivity and long-term value.
            </p>
            <div
              className="opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s forwards' : 'none' }}>
              
              <Link
                href="https://windsorheights.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary">
                
                Explore Windsor Heights
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}