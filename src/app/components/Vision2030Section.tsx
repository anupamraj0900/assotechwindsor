'use client';

import React, { useEffect, useRef, useState } from 'react';

const markets = [
  {
    id: 'mp',
    name: 'Madhya Pradesh',
    label: 'Strong Operating Base',
    desc: 'Continue strengthening the Group\'s development presence across Central India.',
    cx: 42, cy: 52,
    delay: 400,
  },
  {
    id: 'vrindavan',
    name: 'Vrindavan',
    label: 'Religious & Heritage Growth',
    desc: 'A major focus market within the Group\'s next phase of development.',
    cx: 47, cy: 40,
    delay: 900,
  },
  {
    id: 'kashi',
    name: 'Kashi',
    label: 'Heritage-Led Development',
    desc: 'Part of the Group\'s vision for development in one of India\'s most important cultural and religious centres.',
    cx: 52, cy: 42,
    delay: 1400,
  },
];

export default function Vision2030Section() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeMarkets, setActiveMarkets] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          markets.forEach((m) => {
            setTimeout(() => {
              setActiveMarkets((prev) => [...prev, m.id]);
            }, m.delay);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 bg-[#F8F6F0]">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div
              className="opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards' : 'none' }}
            >
              <span className="text-eyebrow text-[#B8975A] block mb-4">Vision 2030</span>
              <div className="w-12 h-px bg-[#B8975A] mb-8" />
            </div>
            <h2
              className="font-display font-light text-[#1C1C1A] text-section-xl opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' : 'none' }}
            >
              100+ Acres.<br />
              Five Years.<br />
              <span className="italic text-[#1B4332]">One Direction.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-[#6B6558] leading-relaxed opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards' : 'none' }}
            >
              Assotech Windsor Group is entering its next phase of development with a clear five-year growth plan — expanding its real-estate footprint across strategically selected markets in India.
            </p>
          </div>
        </div>

        {/* Map + Markets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* India Map SVG */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Simplified India outline */}
              <svg viewBox="0 0 100 120" className="w-full h-full" fill="none">
                {/* India shape — simplified */}
                <path
                  d="M35 8 L42 6 L50 8 L58 7 L65 10 L70 15 L72 22 L74 28 L72 35 L75 40 L78 45 L76 52 L72 58 L68 65 L65 72 L60 78 L55 85 L52 92 L50 100 L48 92 L45 85 L40 78 L35 72 L30 65 L26 58 L22 52 L20 45 L23 38 L25 32 L24 25 L27 18 L32 12 Z"
                  fill="#E8E3D8"
                  stroke="#D8D2C4"
                  strokeWidth="0.5"
                  style={{
                    opacity: visible ? 1 : 0.3,
                    transition: 'opacity 1s ease',
                  }}
                />

                {/* Market dots */}
                {markets.map((m) => (
                  <g key={m.id}>
                    {/* Pulse ring */}
                    <circle
                      cx={m.cx}
                      cy={m.cy}
                      r="4"
                      fill="none"
                      stroke="#1B4332"
                      strokeWidth="0.5"
                      style={{
                        opacity: activeMarkets.includes(m.id) ? 0.3 : 0,
                        transform: `scale(${activeMarkets.includes(m.id) ? 1 : 0.5})`,
                        transformOrigin: `${m.cx}px ${m.cy}px`,
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                        animation: activeMarkets.includes(m.id) ? 'pulse-dot 2s ease-in-out infinite' : 'none',
                      }}
                    />
                    {/* Main dot */}
                    <circle
                      cx={m.cx}
                      cy={m.cy}
                      r="2"
                      fill={activeMarkets.includes(m.id) ? '#1B4332' : '#D8D2C4'}
                      style={{
                        transition: 'fill 0.6s ease',
                      }}
                    />
                    {/* Label */}
                    <text
                      x={m.cx + 3}
                      y={m.cy - 3}
                      fontSize="3"
                      fill="#1B4332"
                      fontFamily="DM Sans, sans-serif"
                      style={{
                        opacity: activeMarkets.includes(m.id) ? 1 : 0,
                        transition: 'opacity 0.6s ease 0.3s',
                      }}
                    >
                      {m.name}
                    </text>
                  </g>
                ))}

                {/* Connecting paths */}
                {activeMarkets.length >= 2 && (
                  <path
                    d={`M ${markets[0].cx} ${markets[0].cy} L ${markets[1].cx} ${markets[1].cy}`}
                    stroke="#B8975A"
                    strokeWidth="0.3"
                    strokeDasharray="2 1"
                    style={{ opacity: 0.5 }}
                  />
                )}
                {activeMarkets.length >= 3 && (
                  <path
                    d={`M ${markets[1].cx} ${markets[1].cy} L ${markets[2].cx} ${markets[2].cy}`}
                    stroke="#B8975A"
                    strokeWidth="0.3"
                    strokeDasharray="2 1"
                    style={{ opacity: 0.5 }}
                  />
                )}
              </svg>
            </div>
          </div>

          {/* Market cards */}
          <div className="lg:col-span-6 flex flex-col gap-0">
            {markets.map((m, i) => (
              <div
                key={m.id}
                className="py-8 border-b border-[#D8D2C4]/50 last:border-b-0"
                style={{
                  opacity: activeMarkets.includes(m.id) ? 1 : 0.3,
                  transform: activeMarkets.includes(m.id) ? 'translateX(0)' : 'translateX(20px)',
                  transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: activeMarkets.includes(m.id) ? '#1B4332' : '#D8D2C4' }}
                  />
                  <div>
                    <div className="text-eyebrow text-[#B8975A] mb-2">{m.label}</div>
                    <h3 className="font-display text-2xl font-light text-[#1C1C1A] mb-3">{m.name}</h3>
                    <p className="text-[#6B6558] text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
