'use client';

import React, { useEffect, useRef, useState } from 'react';


const leaders = [
  {
    name: 'Alpana Srivastava',
    title: 'Designated Partner · Development & Operations',
    initials: 'AS',
    bio: [
      'Alpana leads development execution and operating delivery across the Group\'s real-estate business.',
      'Her focus spans planning, stakeholder coordination, customer delivery and the on-ground execution required to translate the Group\'s vision into completed communities.',
      'Her leadership philosophy is simple: commitments made to customers must ultimately be visible on the ground.',
    ],
  },
  {
    name: 'Anupam Raj',
    title: 'Designated Partner · Strategy & Growth',
    initials: 'AR',
    bio: [
      'Anupam leads corporate strategy, expansion, technology and new-business initiatives across Assotech Windsor Group.',
      'With an international perspective spanning India and Canada, along with connections to the San Francisco technology ecosystem, he is helping drive the Group\'s next phase across technology, real estate and strategic growth.',
      'He is focused on building Assotech Windsor beyond individual projects into a scalable development platform with a long-term presence across India.',
    ],
  },
];

export default function LeadershipContent() {
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
      <section className="relative pt-40 pb-24 bg-[#1B4332]">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8">
          <span className="text-eyebrow text-[#B8975A] block mb-6">Leadership & Management</span>
          <div className="w-12 h-px bg-[#B8975A] mb-10" />
          <h1 className="font-display font-light text-[#F8F6F0] text-section-xl max-w-3xl">
            Experience.<br />
            Execution.<br />
            <span className="italic text-[#B8975A]">Perspective.</span>
          </h1>
          <p className="text-[#F8F6F0]/50 mt-8 max-w-xl leading-relaxed">
            Assotech Windsor Group is led by a management team combining decades of real-estate experience with next-generation thinking across development, operations, technology and strategic growth.
          </p>
        </div>
      </section>

      {/* Leaders */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col gap-0">
            {leaders?.map((leader, i) => (
              <div
                key={leader?.name}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 border-b border-[#D8D2C4]/50 last:border-b-0"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`,
                }}
              >
                <div className="lg:col-span-3">
                  <div className="w-24 h-24 bg-[#1B4332] flex items-center justify-center mb-6">
                    <span className="font-display text-3xl font-light text-[#F8F6F0]">{leader?.initials}</span>
                  </div>
                  <h2 className="font-display text-2xl font-light text-[#1C1C1A] mb-2">{leader?.name}</h2>
                  <div className="text-eyebrow text-[#B8975A]">{leader?.title}</div>
                </div>
                <div className="lg:col-span-9 flex flex-col gap-5 lg:pt-2">
                  {leader?.bio?.map((para, j) => (
                    <p key={j} className="text-[#6B6558] leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
