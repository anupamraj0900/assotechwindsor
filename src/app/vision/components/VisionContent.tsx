'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const pillars = [
  {
    title: 'Madhya Pradesh',
    role: 'Strong Operating Base',
    desc: 'Continue strengthening the Group\'s development presence across Central India. Windsor Heights in Katni is the foundation. The Group\'s five-year plan builds on this base with additional development across the region.',
  },
  {
    title: 'Vrindavan',
    role: 'Religious & Heritage Growth',
    desc: 'A major focus market within the Group\'s next phase of development. Vrindavan represents a significant opportunity at the intersection of religious tourism, heritage and residential demand.',
  },
  {
    title: 'Kashi',
    role: 'Heritage-Led Development',
    desc: 'Part of the Group\'s vision for development in one of India\'s most important cultural and religious centres. Kashi is a strategic expansion market in the Group\'s five-year plan.',
  },
];

export default function VisionContent() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); } },
      { threshold: 0.05 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#1B4332] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <span className="absolute font-display font-light text-[#F8F6F0]" style={{ fontSize: '40vw', lineHeight: '1', bottom: '-10%', right: '-5%', letterSpacing: '-0.05em' }}>2030</span>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8">
          <span className="text-eyebrow text-[#B8975A] block mb-6">Vision 2030</span>
          <div className="w-12 h-px bg-[#B8975A] mb-10" />
          <h1 className="font-display font-light text-[#F8F6F0] text-section-xl max-w-3xl">
            100+ Acres.<br />
            Five Years.<br />
            <span className="italic text-[#B8975A]">One Direction.</span>
          </h1>
          <p className="text-[#F8F6F0]/50 mt-8 max-w-xl leading-relaxed">
            Assotech Windsor Group is entering its next phase of development with a clear five-year growth plan.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#EDE8DC] py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-[#D8D2C4]/60">
            {[
              { v: '100+', l: 'Acres Targeted' },
              { v: '5', l: 'Year Plan' },
              { v: '3', l: 'Focus Markets' },
              { v: '2030', l: 'Target Year' },
            ]?.map((s) => (
              <div key={s?.l} className="text-center py-10 px-6">
                <div className="font-display text-4xl font-light text-[#1B4332] mb-2">{s?.v}</div>
                <div className="text-eyebrow text-[#B8975A]">{s?.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-16">
            <span className="text-eyebrow text-[#B8975A] block mb-4">Strategic Markets</span>
            <div className="w-12 h-px bg-[#B8975A] mb-8" />
            <h2 className="font-display font-light text-[#1C1C1A] text-section-lg">
              Three Markets.<br />
              <span className="italic text-[#1B4332]">One Vision.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {pillars?.map((p, i) => (
              <div
                key={p?.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-[#D8D2C4]/50 last:border-b-0"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `opacity 0.8s ease ${0.2 + i * 0.15}s, transform 0.8s ease ${0.2 + i * 0.15}s`,
                }}
              >
                <div className="lg:col-span-3">
                  <div className="text-eyebrow text-[#B8975A] mb-2">{p?.role}</div>
                  <h3 className="font-display text-2xl font-light text-[#1C1C1A]">{p?.title}</h3>
                </div>
                <div className="lg:col-span-1 flex items-center justify-center">
                  <div className="w-px h-full bg-[#D8D2C4]/50 hidden lg:block" />
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[#6B6558] leading-relaxed">{p?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology vision */}
      <section className="py-24 bg-[#1B4332]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-eyebrow text-[#B8975A] block mb-4">Technology</span>
              <div className="w-12 h-px bg-[#B8975A] mb-8" />
              <h2 className="font-display font-light text-[#F8F6F0] text-section-lg">
                A Global Technology<br />
                <span className="italic text-[#B8975A]">Platform.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <p className="text-[#F8F6F0]/55 leading-relaxed">
                Alongside real estate, Assotech Windsor is building a technology and digital engineering platform connecting Indian engineering talent with businesses across North America.
              </p>
              <p className="text-[#F8F6F0]/55 leading-relaxed">
                By 2030, the Group aims to operate as a genuinely diversified enterprise — with real estate and technology as complementary, self-sustaining businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#EDE8DC]">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="font-display font-light text-[#1C1C1A] text-section-lg mb-8">
            Be Part of the Journey
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Contact the Group</Link>
            <Link href="/developments" className="btn-outline">View Developments</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
