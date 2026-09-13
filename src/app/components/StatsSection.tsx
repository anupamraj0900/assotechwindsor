'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 25, suffix: '+', label: 'Years', sublabel: 'Leadership Experience' },
  { value: 100, suffix: '+', label: 'Acres', sublabel: '5-Year Development Vision' },
  { value: 2, suffix: '', label: 'Verticals', sublabel: 'Real Estate + Technology' },
  { value: 3, suffix: '', label: 'Markets', sublabel: 'India · Canada · United States' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ stat, active, delay }: { stat: typeof stats[0]; active: boolean; delay: number }) {
  const count = useCountUp(stat.value, 1200, active);
  return (
    <div
      className="text-center px-8 py-10 border-r border-[#D8D2C4]/50 last:border-r-0 opacity-0"
      style={{
        animation: active ? `slideInBlur 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms forwards` : 'none',
      }}
    >
      <div className="stat-number mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1C1C1A] mb-1">{stat.label}</div>
      <div className="text-[11px] text-[#6B6558]">{stat.sublabel}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#F8F6F0] border-y border-[#D8D2C4]/50">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={active} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
