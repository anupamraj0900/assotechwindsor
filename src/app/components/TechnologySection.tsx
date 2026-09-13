'use client';

import React, { useEffect, useRef, useState } from 'react';

const nodes = [
  {
    id: 'india',
    label: 'India',
    sublabel: 'Engineering & Delivery',
    x: 15,
    y: 50,
    delay: 300,
  },
  {
    id: 'canada',
    label: 'Canada',
    sublabel: 'Clients & Market',
    x: 50,
    y: 20,
    delay: 800,
  },
  {
    id: 'sf',
    label: 'San Francisco',
    sublabel: 'Technology Ecosystem',
    x: 20,
    y: 25,
    delay: 1300,
  },
];

const capabilities = [
  'AI & Automation',
  'Digital Products',
  'Web & Mobile',
  'Data Engineering',
  'Product Development',
];

export default function TechnologySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeNodes, setActiveNodes] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          nodes.forEach((n) => {
            setTimeout(() => {
              setActiveNodes((prev) => [...prev, n.id]);
            }, n.delay);
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
    <section ref={ref} className="py-32 bg-[#111A14] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-5">
            <div
              className="opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards' : 'none' }}
            >
              <span className="text-eyebrow text-[#B8975A] block mb-4">Technology</span>
              <div className="w-12 h-px bg-[#B8975A] mb-8" />
            </div>
            <h2
              className="font-display font-light text-[#F8F6F0] text-section-xl mb-8 opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' : 'none' }}
            >
              Technology<br />
              <span className="italic text-[#B8975A]">Without Borders.</span>
            </h2>
            <p
              className="text-[#F8F6F0]/50 leading-relaxed mb-10 opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards' : 'none' }}
            >
              A distributed technology model connecting engineering talent, businesses and ideas across global markets.
            </p>

            {/* Connection nodes */}
            <div className="flex flex-col gap-0 mb-10">
              {nodes.map((node, i) => (
                <div
                  key={node.id}
                  className="flex items-center gap-4 py-5 border-b border-[#F8F6F0]/8 last:border-b-0"
                  style={{
                    opacity: activeNodes.includes(node.id) ? 1 : 0.2,
                    transition: 'opacity 0.6s ease',
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: activeNodes.includes(node.id) ? '#B8975A' : '#F8F6F0' }}
                  />
                  {i < nodes.length - 1 && (
                    <div className="absolute left-[calc(1rem+4px)] mt-8 w-px h-8 bg-[#B8975A]/20" />
                  )}
                  <div>
                    <div className="text-[#F8F6F0] font-medium text-sm">{node.label}</div>
                    <div className="text-[#F8F6F0]/40 text-[11px] mt-0.5">{node.sublabel}</div>
                  </div>
                  {i < nodes.length - 1 && (
                    <div className="ml-auto text-[#B8975A]/40 text-xs">→</div>
                  )}
                </div>
              ))}
            </div>

            {/* Capabilities */}
            <div
              className="flex flex-wrap gap-2 opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s forwards' : 'none' }}
            >
              {capabilities.map((cap) => (
                <span key={cap} className="text-[10px] tracking-[0.12em] uppercase text-[#F8F6F0]/40 border border-[#F8F6F0]/15 px-3 py-1.5">
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Right: World map visualization */}
          <div className="lg:col-span-7 relative">
            <div
              className="relative aspect-[16/10] opacity-0"
              style={{ animation: visible ? 'slideInBlur 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards' : 'none' }}
            >
              {/* World map background */}
              <svg viewBox="0 0 800 500" className="w-full h-full opacity-20" fill="none">
                {/* Simplified world continents */}
                <path d="M 60 120 Q 80 100 120 110 Q 160 115 180 130 Q 200 145 190 165 Q 175 185 155 190 Q 130 195 110 185 Q 85 175 70 160 Q 55 145 60 120 Z" fill="#F8F6F0" />
                <path d="M 200 80 Q 250 60 320 70 Q 390 75 430 95 Q 470 115 480 145 Q 490 175 470 200 Q 445 225 410 235 Q 370 245 330 240 Q 285 235 255 215 Q 220 195 205 165 Q 190 135 200 80 Z" fill="#F8F6F0" />
                <path d="M 220 260 Q 255 245 290 255 Q 325 265 340 285 Q 355 305 345 330 Q 330 355 305 365 Q 275 375 250 365 Q 220 350 210 325 Q 200 300 220 260 Z" fill="#F8F6F0" />
                <path d="M 480 90 Q 530 75 590 85 Q 650 95 680 120 Q 710 145 705 175 Q 700 205 675 220 Q 645 235 610 230 Q 570 225 545 205 Q 515 185 505 160 Q 490 130 480 90 Z" fill="#F8F6F0" />
                <path d="M 100 280 Q 130 265 165 275 Q 200 285 215 305 Q 230 325 220 350 Q 205 375 180 385 Q 150 395 125 385 Q 95 370 85 345 Q 75 320 100 280 Z" fill="#F8F6F0" />
              </svg>

              {/* Connection lines */}
              <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full" fill="none">
                {/* India to Canada line */}
                {activeNodes.includes('canada') && (
                  <path
                    d="M 590 200 Q 500 100 200 150"
                    stroke="#B8975A"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    style={{ opacity: 0.5, animation: 'drawLine 1.5s ease forwards' }}
                  />
                )}
                {/* Canada to SF line */}
                {activeNodes.includes('sf') && (
                  <path
                    d="M 200 150 Q 160 140 120 155"
                    stroke="#B8975A"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    style={{ opacity: 0.5, animation: 'drawLine 1.5s ease forwards' }}
                  />
                )}

                {/* India dot */}
                {activeNodes.includes('india') && (
                  <g>
                    <circle cx="590" cy="200" r="6" fill="#1B4332" stroke="#B8975A" strokeWidth="1" />
                    <circle cx="590" cy="200" r="12" fill="none" stroke="#B8975A" strokeWidth="0.5" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
                    <text x="600" y="195" fontSize="10" fill="#F8F6F0" fontFamily="DM Sans, sans-serif">India</text>
                  </g>
                )}
                {/* Canada dot */}
                {activeNodes.includes('canada') && (
                  <g>
                    <circle cx="200" cy="150" r="6" fill="#1B4332" stroke="#B8975A" strokeWidth="1" />
                    <circle cx="200" cy="150" r="12" fill="none" stroke="#B8975A" strokeWidth="0.5" style={{ animation: 'pulse-dot 2s ease-in-out infinite 0.5s' }} />
                    <text x="210" y="145" fontSize="10" fill="#F8F6F0" fontFamily="DM Sans, sans-serif">Canada</text>
                  </g>
                )}
                {/* SF dot */}
                {activeNodes.includes('sf') && (
                  <g>
                    <circle cx="120" cy="155" r="6" fill="#1B4332" stroke="#B8975A" strokeWidth="1" />
                    <circle cx="120" cy="155" r="12" fill="none" stroke="#B8975A" strokeWidth="0.5" style={{ animation: 'pulse-dot 2s ease-in-out infinite 1s' }} />
                    <text x="130" y="150" fontSize="10" fill="#F8F6F0" fontFamily="DM Sans, sans-serif">San Francisco</text>
                  </g>
                )}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
