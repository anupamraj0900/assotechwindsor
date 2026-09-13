'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const projects = [
{
  name: 'Windsor Heights',
  location: 'Katni, Madhya Pradesh',
  category: 'Residential Development',
  status: 'Current',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_40e1f71ef-1789151619848.png",
  alt: 'Windsor Heights residential development Katni Madhya Pradesh modern apartment complex',
  current: true
},
{
  name: 'Windsor Green',
  location: 'Noida / Delhi NCR',
  category: 'Residential',
  status: 'Leadership Experience',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4c85651ed-1789152250235.png",
  alt: 'Assotech Windsor Greens apartment building elevation Sector 50 Noida',
  current: false
},
{
  name: 'Windsor Park',
  location: 'Delhi NCR',
  category: 'Residential',
  status: 'Leadership Experience',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_455b64c4c-1789152249860.png",
  alt: 'Assotech Windsor Park residential development Vaibhav Khand Ghaziabad',
  current: false
},
{
  name: 'GAIL Society',
  location: 'Greater Noida',
  category: 'Residential',
  status: 'Leadership Experience',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_178549a01-1784192763045.png",
  alt: 'GAIL Society residential community Greater Noida housing development',
  current: false
},
{
  name: 'Windsor Hills',
  location: 'Gwalior, Madhya Pradesh',
  category: 'Residential',
  status: 'Leadership Experience',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4d5a1d488-1789152249668.png",
  alt: 'Assotech Windsor Hills apartment building elevation City Centre Gwalior',
  current: false
},
{
  name: 'Metropolis City',
  location: 'Rudrapur, Uttarakhand',
  category: 'Township',
  status: 'Leadership Experience',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_48b60fed2-1789151620925.png",
  alt: 'Metropolis City township development Rudrapur Uttarakhand urban planning',
  current: false
}];


export default function DevelopmentsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true);observer.disconnect();}},
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
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards' : 'none' }}>
              
              <span className="text-eyebrow text-[#B8975A] block mb-4">Developments</span>
              <div className="w-12 h-px bg-[#B8975A] mb-8" />
            </div>
            <h2
              className="font-display font-light text-[#1C1C1A] text-section-xl opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' : 'none' }}>
              
              Built Across Cities.<br />
              <span className="italic text-[#1B4332]">Built Across Generations.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-[#6B6558] leading-relaxed opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards' : 'none' }}>
              
              A portfolio spanning Central India and the Delhi NCR region, reflecting decades of development experience and the Group's current active development.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8D2C4]/40">
          {projects?.map((project, i) =>
          <Link
            key={project?.name}
            href="/developments"
            className="group relative overflow-hidden bg-[#EDE8DC] block"
            style={{
              opacity: 0,
              animation: visible ? `slideInBlur 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.08}s forwards` : 'none'
            }}>
            
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                src={project?.image}
                alt={project?.alt}
                className="w-full h-full object-cover img-hover-zoom" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/60 to-transparent" />
                {project?.current &&
              <div className="absolute top-4 left-4">
                    <span className="text-[9px] tracking-[0.18em] uppercase bg-[#1B4332] text-[#F8F6F0] px-3 py-1.5">
                      Current
                    </span>
                  </div>
              }
              </div>
              <div className="p-6 border-b border-[#D8D2C4]/60">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display text-xl font-light text-[#1C1C1A] group-hover:text-[#1B4332] transition-colors duration-300">
                      {project?.name}
                    </h3>
                    <div className="text-[11px] text-[#6B6558] mt-1">{project?.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div
                  className="h-px bg-[#B8975A] flex-shrink-0"
                  style={{
                    width: 0,
                    transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1)'
                  }}
                  ref={(el) => {
                    if (el) {
                      el?.closest('.group')?.addEventListener('mouseenter', () => {el.style.width = '24px';});
                      el?.closest('.group')?.addEventListener('mouseleave', () => {el.style.width = '0px';});
                    }
                  }} />
                
                  <span className="text-[10px] tracking-[0.12em] uppercase text-[#6B6558]">{project?.category}</span>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-[#6B6558]/70 italic mt-8 text-center">
          Selected projects reflect the prior development experience of the Group's leadership.
        </p>

        <div className="text-center mt-10">
          <Link href="/developments" className="btn-outline">
            View All Developments
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>);

}