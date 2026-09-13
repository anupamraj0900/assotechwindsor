'use client';

import React, { useEffect, useRef, useState } from 'react';

const milestones = [
  { year: '1986', title: 'The Journey Begins', desc: 'The leadership journey in Indian real estate begins.' },
  { year: '25+ Years', title: 'Decades of Experience', desc: 'Experience spanning development, construction, sales, customer relationships and real-estate operations.' },
  { year: '2020', title: 'A New Independent Chapter', desc: 'Assotech Windsor begins its independent chapter.' },
  { year: 'Today', title: 'Real Estate + Technology', desc: 'A diversified enterprise operating across two verticals with a growing international perspective.' },
  { year: '2030', title: 'The Next Phase', desc: '100+ acres targeted and a broader international business platform.' },
];

export default function LegacySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          milestones.forEach((_, i) => {
            setTimeout(() => setActiveIndex(i), 300 + i * 500);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 bg-[#1B4332] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="mb-20">
          <span className="text-eyebrow text-[#B8975A] block mb-4">Our Journey</span>
          <div className="w-12 h-px bg-[#B8975A] mb-8" />
          <h2 className="font-display font-light text-[#F8F6F0] text-section-xl max-w-2xl">
            A Legacy That<br />
            <span className="italic text-[#B8975A]">Predates the Name.</span>
          </h2>
          <p className="text-[#F8F6F0]/55 mt-6 max-w-xl leading-relaxed">
            Assotech Windsor may represent a new independent chapter, but the experience behind the Group spans decades.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[120px] top-0 bottom-0 w-px bg-[#F8F6F0]/10 hidden lg:block" />
          <div
            className="absolute left-[120px] top-0 w-px bg-[#B8975A]/40 hidden lg:block"
            style={{
              height: activeIndex >= milestones?.length - 1 ? '100%' : `${(activeIndex + 1) * 20}%`,
              transition: 'height 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />

          <div className="flex flex-col gap-0">
            {milestones?.map((m, i) => (
              <div
                key={m?.year}
                className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-16 py-10 border-b border-[#F8F6F0]/8 last:border-b-0"
                style={{
                  opacity: activeIndex >= i ? 1 : 0.2,
                  transition: 'opacity 0.6s ease',
                }}
              >
                <div className="relative">
                  <div
                    className="font-display text-lg font-light"
                    style={{ color: activeIndex >= i ? '#B8975A' : '#F8F6F0' }}
                  >
                    {m?.year}
                  </div>
                  {/* Dot on line */}
                  <div
                    className="absolute right-0 top-2 w-2 h-2 rounded-full border border-[#B8975A] hidden lg:block"
                    style={{
                      background: activeIndex >= i ? '#B8975A' : 'transparent',
                      transform: 'translateX(50%)',
                      transition: 'background 0.4s ease',
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-light text-[#F8F6F0] mb-2">{m?.title}</h3>
                  <p className="text-[#F8F6F0]/55 text-sm leading-relaxed">{m?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final line */}
        <div className="mt-20 pt-16 border-t border-[#F8F6F0]/10">
          <p className="font-display font-light text-section-lg text-[#F8F6F0] max-w-3xl">
            The name may be new.<br />
            <span className="italic text-[#B8975A]">The experience behind it is not.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
