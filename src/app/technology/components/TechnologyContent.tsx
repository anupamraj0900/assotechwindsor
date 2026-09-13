'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const capabilities = [
{ title: 'AI & Automation', desc: 'Intelligent systems and automation solutions for modern businesses.' },
{ title: 'Product Engineering', desc: 'End-to-end product development from concept to deployment.' },
{ title: 'Web Development', desc: 'Scalable web applications built for performance and reliability.' },
{ title: 'Mobile Development', desc: 'Native and cross-platform mobile applications.' },
{ title: 'Data Platforms', desc: 'Data infrastructure, analytics and engineering solutions.' },
{ title: 'Custom Software', desc: 'Bespoke software solutions tailored to specific business requirements.' }];


const model = [
{ location: 'India', role: 'Engineering & Delivery', desc: 'A deep pool of engineering talent delivering high-quality software across time zones.' },
{ location: 'Canada', role: 'Commercial Market', desc: 'Commercial focus and client relationships across the Canadian market.' },
{ location: 'San Francisco', role: 'Technology Ecosystem', desc: 'Connections to the San Francisco technology ecosystem, industry networks and emerging technology trends.' }];


export default function TechnologyContent() {
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
      <section className="relative pt-40 pb-24 bg-[#111A14] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://img.rocket.new/generatedImages/rocket_gen_img_15d3c66bc-1769675952713.png"
            alt="Technology and digital engineering — Assotech Windsor Group"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-[#111A14]/70" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8">
          <span className="text-eyebrow text-[#B8975A] block mb-6">Technology</span>
          <div className="w-12 h-px bg-[#B8975A] mb-10" />
          <h1 className="font-display font-light text-[#F8F6F0] text-section-xl max-w-3xl">
            Engineering Without<br />
            <span className="italic text-[#B8975A]">Borders.</span>
          </h1>
          <p className="text-[#F8F6F0]/55 mt-8 max-w-xl leading-relaxed">
            India-built technology for a connected North American market. Digital engineering and product development at scale.
          </p>
        </div>
      </section>

      {/* Distributed Model */}
      <section className="py-24 bg-[#1B4332]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-16">
            <span className="text-eyebrow text-[#B8975A] block mb-4">Our Model</span>
            <div className="w-12 h-px bg-[#B8975A] mb-8" />
            <h2 className="font-display font-light text-[#F8F6F0] text-section-lg">
              A Distributed<br />
              <span className="italic text-[#B8975A]">Technology Model.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F8F6F0]/5">
            {model?.map((m, i) =>
            <div
              key={m?.location}
              className="bg-[#1B4332] p-10 hover:bg-[#0F2D1E] transition-colors duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`
              }}>
              
                <div className="text-eyebrow text-[#B8975A] mb-3">{m?.role}</div>
                <h3 className="font-display text-2xl font-light text-[#F8F6F0] mb-4">{m?.location}</h3>
                <div className="w-8 h-px bg-[#B8975A] mb-4" />
                <p className="text-[#F8F6F0]/50 text-sm leading-relaxed">{m?.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-16">
            <span className="text-eyebrow text-[#B8975A] block mb-4">Capabilities</span>
            <div className="w-12 h-px bg-[#B8975A] mb-8" />
            <h2 className="font-display font-light text-[#1C1C1A] text-section-lg">
              What We<br />
              <span className="italic text-[#1B4332]">Build.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8D2C4]/40">
            {capabilities?.map((cap, i) =>
            <div
              key={cap?.title}
              className="bg-[#F8F6F0] p-8 hover:bg-[#EDE8DC] transition-colors duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.7s ease ${0.3 + i * 0.1}s, transform 0.7s ease ${0.3 + i * 0.1}s`
              }}>
              
                <div className="w-6 h-px bg-[#B8975A] mb-5" />
                <h3 className="font-display text-xl font-light text-[#1C1C1A] mb-3">{cap?.title}</h3>
                <p className="text-[#6B6558] text-sm leading-relaxed">{cap?.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#111A14]">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="font-display font-light text-[#F8F6F0] text-section-lg mb-8">
            Discuss a Technology Project
          </h2>
          <p className="text-[#F8F6F0]/40 mb-10 max-w-lg mx-auto leading-relaxed">
            Whether you are building a product, scaling engineering capacity or exploring AI and automation — we would like to hear from you.
          </p>
          <Link href="/contact" className="btn-outline-ivory">
            Build With Us →
          </Link>
        </div>
      </section>
    </div>);

}