'use client';

import React, { useState, useEffect, useRef } from 'react';


const allProjects = [
{
  name: 'Windsor Heights',
  location: 'Katni, Madhya Pradesh',
  category: 'Residential',
  status: 'current',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4613ac7b5-1789151620646.png",
  alt: 'Windsor Heights residential development Katni Madhya Pradesh',
  desc: 'A thoughtfully planned residential community designed around modern living, open spaces, connectivity and long-term value.',
  stats: ['4.6 Acres', '576 Residences', 'G+6', '200+ Bookings']
},
{
  name: 'Windsor Green',
  location: 'Noida / Delhi NCR',
  category: 'Residential',
  status: 'experience',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_178549a01-1784192763045.png",
  alt: 'Windsor Green residential development Noida Delhi NCR',
  desc: 'Residential development in the Noida / Delhi NCR region.',
  stats: []
},
{
  name: 'Windsor Park',
  location: 'Delhi NCR',
  category: 'Residential',
  status: 'experience',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd2d0a60-1784995469936.png",
  alt: 'Windsor Park residential development Delhi NCR',
  desc: 'Residential development in Delhi NCR.',
  stats: []
},
{
  name: 'GAIL Society',
  location: 'Greater Noida',
  category: 'Residential',
  status: 'experience',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e46920a3-1766835242597.png",
  alt: 'GAIL Society residential community Greater Noida',
  desc: 'Residential community in Greater Noida.',
  stats: []
},
{
  name: 'Windsor Hills',
  location: 'Gwalior, Madhya Pradesh',
  category: 'Residential',
  status: 'experience',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_48417f143-1789151622329.png",
  alt: 'Windsor Hills residential development Gwalior Madhya Pradesh',
  desc: 'Residential development in Gwalior, Madhya Pradesh.',
  stats: []
},
{
  name: 'Metropolis City',
  location: 'Rudrapur, Uttarakhand',
  category: 'Township',
  status: 'experience',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_49808fe63-1789151619279.png",
  alt: 'Metropolis City township development Rudrapur Uttarakhand',
  desc: 'Township development in Rudrapur, Uttarakhand.',
  stats: []
}];


const filters = [
{ label: 'All', value: 'all' },
{ label: 'Current', value: 'current' },
{ label: 'Residential', value: 'Residential' },
{ label: 'Township', value: 'Township' },
{ label: 'Leadership Experience', value: 'experience' }];


export default function DevelopmentsContent() {
  const [activeFilter, setActiveFilter] = useState('all');
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

  const filtered = allProjects?.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'current') return p?.status === 'current';
    if (activeFilter === 'experience') return p?.status === 'experience';
    return p?.category === activeFilter;
  });

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#1B4332]">
        <div className="absolute inset-0 opacity-5">
          <span className="absolute font-display font-light text-[#F8F6F0]" style={{ fontSize: '40vw', lineHeight: '1', bottom: '-10%', right: '-5%', letterSpacing: '-0.05em' }}>AW</span>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8">
          <span className="text-eyebrow text-[#B8975A] block mb-6">Developments</span>
          <div className="w-12 h-px bg-[#B8975A] mb-10" />
          <h1 className="font-display font-light text-[#F8F6F0] text-section-xl max-w-3xl">
            A Development Journey<br />
            <span className="italic text-[#B8975A]">Across Markets.</span>
          </h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-[#F8F6F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-16">
            {filters?.map((f) =>
            <button
              key={f?.value}
              onClick={() => setActiveFilter(f?.value)}
              className={`text-[11px] tracking-[0.12em] uppercase px-5 py-2.5 border transition-all duration-300 ${
              activeFilter === f?.value ?
              'bg-[#1B4332] text-[#F8F6F0] border-[#1B4332]' :
              'bg-transparent text-[#6B6558] border-[#D8D2C4] hover:border-[#1B4332] hover:text-[#1B4332]'}`
              }>
              
                {f?.label}
              </button>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8D2C4]/40">
            {filtered?.map((project, i) =>
            <div
              key={project?.name}
              className="group bg-[#F8F6F0] overflow-hidden"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`
              }}>
              
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                  src={project?.image}
                  alt={project?.alt}
                  className="w-full h-full object-cover img-hover-zoom" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/50 to-transparent" />
                  {project?.status === 'current' &&
                <div className="absolute top-4 left-4">
                      <span className="text-[9px] tracking-[0.18em] uppercase bg-[#1B4332] text-[#F8F6F0] px-3 py-1.5">Current</span>
                    </div>
                }
                  {project?.status === 'experience' &&
                <div className="absolute top-4 right-4">
                      <span className="text-[9px] tracking-[0.15em] uppercase bg-[#1C1C1A]/60 text-[#F8F6F0]/70 px-3 py-1.5">Leadership Experience</span>
                    </div>
                }
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl font-light text-[#1C1C1A] mb-1 group-hover:text-[#1B4332] transition-colors">{project?.name}</h3>
                  <div className="text-[11px] text-[#6B6558] mb-4">{project?.location}</div>
                  <div className="w-6 h-px bg-[#B8975A] mb-4 group-hover:w-12 transition-all duration-500" />
                  <p className="text-[#6B6558] text-sm leading-relaxed mb-4">{project?.desc}</p>
                  {project?.stats?.length > 0 &&
                <div className="flex flex-wrap gap-3 mt-4">
                      {project?.stats?.map((s) =>
                  <span key={s} className="text-[10px] tracking-[0.1em] uppercase text-[#1B4332] border border-[#1B4332]/20 px-3 py-1">{s}</span>
                  )}
                    </div>
                }
                </div>
              </div>
            )}
          </div>

          <p className="text-[11px] text-[#6B6558]/60 italic mt-10 text-center">
            Selected projects reflect the prior development experience of the Group's leadership.
          </p>
        </div>
      </section>
    </div>);

}