'use client';

import React, { useEffect, useRef, useState } from 'react';

const leaders = [
  {
    name: 'Alpana Srivastava',
    title: 'Designated Partner · Development & Operations',
    bio: 'Alpana leads development execution and operating delivery across the Group\'s real-estate business. Her focus spans planning, stakeholder coordination, customer delivery and the on-ground execution required to translate the Group\'s vision into completed communities.',
    initials: 'AS',
  },
  {
    name: 'Anupam Raj',
    title: 'Designated Partner · Strategy & Growth',
    bio: 'Anupam leads corporate strategy, expansion, technology and new-business initiatives across Assotech Windsor Group. With an international perspective spanning India and Canada, along with connections to the San Francisco technology ecosystem, he is helping drive the Group\'s next phase.',
    initials: 'AR',
  },
];

export default function LeadershipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 bg-[#EDE8DC]">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div
              className="opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards' : 'none' }}
            >
              <span className="text-eyebrow text-[#B8975A] block mb-4">Leadership</span>
              <div className="w-12 h-px bg-[#B8975A] mb-8" />
            </div>
            <h2
              className="font-display font-light text-[#1C1C1A] text-section-xl opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' : 'none' }}
            >
              Experience.<br />
              Execution.<br />
              <span className="italic text-[#1B4332]">Perspective.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-[#6B6558] leading-relaxed opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards' : 'none' }}
            >
              Assotech Windsor Group is led by a management team combining decades of real-estate experience with next-generation thinking across development, operations, technology and strategic growth.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D8D2C4]/40">
          {leaders?.map((leader, i) => (
            <div
              key={leader?.name}
              className="group bg-[#EDE8DC] p-10 hover:bg-[#F8F6F0] transition-colors duration-500 opacity-0"
              style={{ animation: visible ? `slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.15}s forwards` : 'none' }}
            >
              {/* Portrait placeholder */}
              <div className="w-20 h-20 bg-[#1B4332] flex items-center justify-center mb-8">
                <span className="font-display text-2xl font-light text-[#F8F6F0]">{leader?.initials}</span>
              </div>

              <h3 className="font-display text-2xl font-light text-[#1C1C1A] mb-2 group-hover:text-[#1B4332] transition-colors duration-300">
                {leader?.name}
              </h3>
              <div className="text-eyebrow text-[#B8975A] mb-6">{leader?.title}</div>
              <div className="w-8 h-px bg-[#B8975A] mb-6 group-hover:w-16 transition-all duration-500" />
              <p className="text-[#6B6558] text-sm leading-relaxed">
                {leader?.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
