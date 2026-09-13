'use client';

import React, { useEffect, useRef, useState } from 'react';

const values = [
  { word: 'Integrity', desc: 'Do what we commit to.' },
  { word: 'Execution', desc: 'Ideas matter when they are delivered.' },
  { word: 'Long-Term Thinking', desc: 'Build for decades, not quarters.' },
  { word: 'Innovation', desc: 'Use technology to improve how businesses and communities operate.' },
];

export default function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeValues, setActiveValues] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          values.forEach((_, i) => {
            setTimeout(() => setActiveValues((prev) => [...prev, i]), i * 200);
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
        <div className="mb-16">
          <span className="text-eyebrow text-[#B8975A] block mb-4">Our Values</span>
          <div className="w-12 h-px bg-[#B8975A] mb-8" />
          <h2 className="font-display font-light text-[#1C1C1A] text-section-xl">
            What Defines<br />
            <span className="italic text-[#1B4332]">Windsor.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#D8D2C4]/50">
          {values.map((v, i) => (
            <div
              key={v.word}
              className="p-10 border-r border-[#D8D2C4]/50 last:border-r-0 border-b md:border-b-0"
              style={{
                opacity: activeValues.includes(i) ? 1 : 0,
                transform: activeValues.includes(i) ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <div
                className="font-display font-light text-[#1C1C1A] mb-6"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
              >
                {v.word}
              </div>
              <div className="w-6 h-px bg-[#B8975A] mb-4" />
              <p className="text-[#6B6558] text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
