'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const allProjects = [
{
  id: 'windsor-heights-mp',
  name: 'Windsor Heights',
  location: 'Katni, Madhya Pradesh',
  state: 'Madhya Pradesh',
  status: 'Ongoing',
  type: '2 & 3 BHK Residences',
  price: '₹ 45L – ₹ 90L',
  area: '850 – 1,650 sq.ft.',
  possession: 'Q4 2026',
  units: '240 Units',
  rera: 'MPRERA/PROJ/2024/XXXX',
  highlights: ['Rooftop Infinity Pool', 'EV Charging', 'Smart Home Ready', '24/7 Security'],
  image: "/assets/images/LOGO_windsor-1789125533323.png",
  imageAlt: 'Windsor Heights project logo — a premium residential development by Assotech Windsor Group in Katni, Madhya Pradesh'
},
{
  id: 'windsor-greens-mp',
  name: 'Windsor Greens MP',
  location: 'Indore, Madhya Pradesh',
  state: 'Madhya Pradesh',
  status: 'Ongoing',
  type: '3 & 4 BHK Villas',
  price: '₹ 80L – ₹ 1.5Cr',
  area: '2,100 – 3,800 sq.ft.',
  possession: 'Q2 2026',
  units: '120 Villas',
  rera: 'MPRERA/PROJ/2023/XXXX',
  highlights: ['Private Pool Option', 'Club House', 'Vastu Compliant', 'Gated Community'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b287f7d5-1786294145354.png",
  imageAlt: 'Luxury villa exterior with private swimming pool, lush garden, evening warm lighting'
},
{
  id: 'windsor-kashi',
  name: 'Windsor Kashi',
  location: 'Varanasi (Kashi), UP',
  state: 'UP',
  status: 'Upcoming',
  type: 'Premium Apartments',
  price: 'Launch Price TBA',
  area: '1,200 – 2,400 sq.ft.',
  possession: '2028',
  units: '180 Units',
  rera: 'Registration Pending',
  highlights: ['Ganga View Apartments', 'Spiritual Architecture', 'Yoga Pavilion', 'Temple Proximity'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ead65cba-1785414469780.png",
  imageAlt: 'Sacred ghats of Varanasi at golden hour, spiritual atmosphere with warm amber light'
},
{
  id: 'windsor-vrindavan',
  name: 'Windsor Vrindavan',
  location: 'Vrindavan, UP',
  state: 'UP',
  status: 'Upcoming',
  type: 'Spiritual Residences',
  price: 'Pre-Launch',
  area: '900 – 2,000 sq.ft.',
  possession: '2028-29',
  units: '200 Units',
  rera: 'Registration Pending',
  highlights: ['Temple Circuit View', 'Meditation Centre', 'Organic Garden', 'Pilgrimage Support'],
  image: "https://images.unsplash.com/photo-1572055565897-34a13c7c9fae",
  imageAlt: 'Temple town skyline at dusk, ornate spires silhouetted against purple-orange sky'
}];


const filters = ['All', 'Ongoing', 'Upcoming'];

export default function ProjectsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? allProjects : allProjects?.filter((p) => p?.status === activeFilter);

  useEffect(() => {
    const els = sectionRef?.current?.querySelectorAll('.scroll-reveal-hidden');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-reveal-hidden');
            entry.target.classList.add('scroll-reveal');
          }
        });
      },
      { threshold: 0.05 }
    );
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, [filtered]);

  return (
    <section ref={sectionRef} className="py-12 max-w-7xl mx-auto px-6">
      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-10 scroll-reveal-hidden">
        {filters?.map((f) =>
        <button
          key={f}
          onClick={() => setActiveFilter(f)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          activeFilter === f ?
          'bg-primary text-primary-foreground shadow-lg' :
          'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'}`
          }>
          
            {f}
          </button>
        )}
        <span className="ml-auto text-xs text-muted-foreground">{filtered?.length} projects</span>
      </div>

      {/* Project Cards */}
      <div className="space-y-8">
        {filtered?.map((project, i) =>
        <article
          key={project?.id}
          className="scroll-reveal-hidden card-glass card-glass-hover rounded-2xl overflow-hidden"
          style={{ transitionDelay: `${i * 80}ms` }}>
          
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Image */}
              <div className="md:col-span-2 relative h-56 md:h-full min-h-[220px] overflow-hidden">
                <AppImage
                src={project?.image}
                alt={project?.imageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw" />
              
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide ${
                project?.status === 'Ongoing' ? 'status-badge-ongoing' : 'status-badge-upcoming'}`
                }>
                    {project?.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{project?.location}</div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-1">{project?.name}</h2>
                  <div className="text-sm text-muted-foreground mb-4">{project?.type}</div>

                  {/* Key specs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {[
                  { label: 'Price', val: project?.price },
                  { label: 'Area', val: project?.area },
                  { label: 'Possession', val: project?.possession },
                  { label: 'Units', val: project?.units }]?.
                  map((spec) =>
                  <div key={spec?.label} className="bg-muted/50 rounded-lg p-3">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{spec?.label}</div>
                        <div className="text-sm font-semibold text-foreground mt-0.5">{spec?.val}</div>
                      </div>
                  )}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.highlights?.map((h) =>
                  <span key={h} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                        {h}
                      </span>
                  )}
                  </div>

                  <div className="text-xs text-muted-foreground/60">RERA: {project?.rera}</div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  
                    Enquire Now
                  </Link>
                  <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary/40 transition-all duration-300">
                  
                    Book Site Visit
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>);

}