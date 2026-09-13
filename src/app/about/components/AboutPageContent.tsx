'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const sections = [
  {
    num: '01',
    title: 'Who We Are',
    content: 'Assotech Windsor Group is a diversified enterprise operating across Real Estate and Technology. We are an India-rooted business with an international perspective — building developments across India while creating technology capabilities for North American markets.',
  },
  {
    num: '02',
    title: 'Our Journey',
    content: 'The leadership journey in Indian real estate began in 1986. Over more than 25 years, the Group\'s founders built experience spanning development, construction, sales and real-estate operations across multiple markets. In 2020, Assotech Windsor began its independent chapter — carrying decades of institutional knowledge into a new-generation enterprise.',
  },
  {
    num: '03',
    title: 'Real Estate',
    content: 'With a strong operating base in Madhya Pradesh, Assotech Windsor is targeting more than 100 acres of development over the next five years. The Group\'s real-estate strategy spans residential, mixed-use, hospitality and PPP-led development, with expansion toward Vrindavan and Kashi as strategic focus markets.',
  },
  {
    num: '04',
    title: 'Technology',
    content: 'Assotech Windsor\'s technology business is being built as a digital engineering and product-development platform. Engineering capability in India. Commercial focus in Canada. Connected to the San Francisco technology ecosystem.',
  },
  {
    num: '05',
    title: 'Leadership',
    content: 'The Group is led by a management team combining decades of real-estate experience with next-generation thinking. Alpana Srivastava leads development execution. Anupam Raj leads strategy, technology and growth.',
  },
  {
    num: '06',
    title: 'Vision',
    content: '100+ acres targeted over five years. A technology platform serving North American markets. Strategic expansion into India\'s most significant growth and heritage destinations. Assotech Windsor Group is building for the long term.',
  },
];

export default function AboutPageContent() {
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
          <span className="absolute font-display font-light text-[#F8F6F0]" style={{ fontSize: '40vw', lineHeight: '1', bottom: '-10%', right: '-5%', letterSpacing: '-0.05em' }}>AW</span>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8">
          <span className="text-eyebrow text-[#B8975A] block mb-6">About</span>
          <div className="w-12 h-px bg-[#B8975A] mb-10" />
          <h1 className="font-display font-light text-[#F8F6F0] text-section-xl max-w-3xl">
            A Group Built on<br />
            <span className="italic text-[#B8975A]">Decades of Experience.</span>
          </h1>
          <p className="text-[#F8F6F0]/50 mt-8 max-w-xl leading-relaxed">
            Established independently in 2020, Assotech Windsor Group carries more than 25 years of leadership experience into a new generation of businesses.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col gap-0">
            {sections?.map((s, i) => (
              <div
                key={s?.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 border-b border-[#D8D2C4]/50 last:border-b-0"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s`,
                }}
              >
                <div className="lg:col-span-2">
                  <span className="font-display text-5xl font-light text-[#D8D2C4]">{s?.num}</span>
                </div>
                <div className="lg:col-span-4">
                  <h2 className="font-display text-2xl font-light text-[#1C1C1A]">{s?.title}</h2>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-[#6B6558] leading-relaxed">{s?.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#EDE8DC]">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="font-display font-light text-[#1C1C1A] text-section-lg mb-8">
            Ready to Connect?
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
