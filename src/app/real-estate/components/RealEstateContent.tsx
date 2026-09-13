'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const capabilities = [
{ title: 'Residential', desc: 'Thoughtfully planned communities designed around modern living, open spaces and long-term value.' },
{ title: 'Mixed Use', desc: 'Integrated developments combining residential, commercial and community spaces.' },
{ title: 'Hospitality', desc: 'Hospitality-led developments in high-growth and heritage destinations.' },
{ title: 'PPP Development', desc: 'Public-private partnership frameworks for urban development and infrastructure.' },
{ title: 'Strategic Development', desc: 'Select opportunities in growth corridors across North and Central India.' }];


const markets = [
{ name: 'Madhya Pradesh', role: 'Strong Operating Base', desc: 'The Group\'s primary development market, anchored by Windsor Heights in Katni.' },
{ name: 'Vrindavan', role: 'Strategic Expansion', desc: 'A major focus market within the Group\'s next phase of development.' },
{ name: 'Kashi', role: 'Heritage-Led Development', desc: 'Part of the Group\'s vision for development in one of India\'s most important cultural centres.' }];


export default function RealEstateContent() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true);}},
      { threshold: 0.05 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1ca9266f9-1776371475000.png"
            alt="Premium real estate development — Assotech Windsor Group"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F15]/90 via-[#0F1F15]/60 to-[#0F1F15]/30" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8">
          <span className="text-eyebrow text-[#B8975A] block mb-6">Real Estate</span>
          <div className="w-12 h-px bg-[#B8975A] mb-10" />
          <h1 className="font-display font-light text-[#F8F6F0] text-section-xl max-w-3xl">
            Building for the<br />
            <span className="italic text-[#B8975A]">Next Generation.</span>
          </h1>
          <p className="text-[#F8F6F0]/55 mt-8 max-w-xl leading-relaxed">
            Development philosophy rooted in local understanding, disciplined execution and long-term thinking.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1B4332] py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-[#F8F6F0]/10">
            {[
            { v: '25+', l: 'Years Experience' },
            { v: '100+', l: 'Acres Targeted' },
            { v: '5', l: 'Year Vision' },
            { v: '3', l: 'Focus Markets' }]?.
            map((s) =>
            <div key={s?.l} className="text-center py-8 px-6">
                <div className="font-display text-4xl font-light text-[#F8F6F0] mb-2">{s?.v}</div>
                <div className="text-eyebrow text-[#B8975A]">{s?.l}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <span className="text-eyebrow text-[#B8975A] block mb-4">Capabilities</span>
              <div className="w-12 h-px bg-[#B8975A] mb-8" />
              <h2 className="font-display font-light text-[#1C1C1A] text-section-lg">
                Development<br />
                <span className="italic text-[#1B4332]">Capabilities.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8D2C4]/40">
            {capabilities?.map((cap, i) =>
            <div
              key={cap?.title}
              className="bg-[#F8F6F0] p-8 hover:bg-[#EDE8DC] transition-colors duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`
              }}>
              
                <div className="w-6 h-px bg-[#B8975A] mb-5" />
                <h3 className="font-display text-xl font-light text-[#1C1C1A] mb-3">{cap?.title}</h3>
                <p className="text-[#6B6558] text-sm leading-relaxed">{cap?.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-24 bg-[#EDE8DC]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-16">
            <span className="text-eyebrow text-[#B8975A] block mb-4">Focus Markets</span>
            <div className="w-12 h-px bg-[#B8975A] mb-8" />
            <h2 className="font-display font-light text-[#1C1C1A] text-section-lg">
              Strategic<br />
              <span className="italic text-[#1B4332]">Expansion Markets.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D8D2C4]/40">
            {markets?.map((m) =>
            <div key={m?.name} className="bg-[#EDE8DC] p-10 hover:bg-[#F8F6F0] transition-colors duration-300">
                <div className="text-eyebrow text-[#B8975A] mb-3">{m?.role}</div>
                <h3 className="font-display text-2xl font-light text-[#1C1C1A] mb-4">{m?.name}</h3>
                <div className="w-8 h-px bg-[#B8975A] mb-4" />
                <p className="text-[#6B6558] text-sm leading-relaxed">{m?.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1B4332]">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="font-display font-light text-[#F8F6F0] text-section-lg mb-8">
            Explore Our Developments
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/developments" className="btn-outline-ivory">View Portfolio</Link>
            <Link href="/contact" className="btn-outline-ivory" style={{ borderColor: 'rgba(184,151,90,0.4)', color: '#B8975A' }}>
              Discuss a Development
            </Link>
          </div>
        </div>
      </section>
    </div>);

}