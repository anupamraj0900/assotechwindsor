'use client';

import React, { useEffect, useRef } from 'react';

import AppImage from '@/components/ui/AppImage';

const marketsData = [
{
  name: 'Delhi NCR',
  desc: 'India\'s largest urban agglomeration and a key growth corridor for residential and mixed-use development.',
  image: "https://images.unsplash.com/photo-1588236549916-5ae76bb9e88d",
  alt: 'Delhi skyline at dusk with modern buildings and urban infrastructure',
  tag: 'Growth Corridor'
},
{
  name: 'Uttar Pradesh',
  desc: 'A rapidly urbanising state with significant infrastructure investment and cultural significance.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15d8eb06f-1785502952782.png",
  alt: 'Historic temple architecture and spiritual landscape of Uttar Pradesh at golden hour',
  tag: 'Emerging Market'
},
{
  name: 'Madhya Pradesh',
  desc: 'Our home market — where Windsor Heights established our execution credentials in Central India.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_42fb45d88-1789130484538.png",
  alt: 'Central India landscape with residential development and open green spaces',
  tag: 'Active Market'
}];


export default function MarketsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.08 }
    );
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative" id="markets">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal-hidden text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-4">
            Looking Ahead
          </span>
          <h2 className="text-section-xl font-display font-semibold text-foreground mb-4">
            Markets We Are
            <span className="block italic gradient-text-gold">Exploring.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base font-light">
            As Assotech Windsor Group enters its next phase, we are evaluating opportunities across some of India&apos;s fastest-evolving urban, spiritual and cultural destinations. Our expansion will remain selective — guided by location fundamentals, infrastructure, partnership potential and our ability to create something meaningful for the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {marketsData?.map((market, i) =>
          <div
            key={market?.name}
            className="scroll-reveal-hidden group relative overflow-hidden rounded-2xl cursor-default h-72"
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              <AppImage
              src={market?.image}
              alt={market?.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <span className="self-start text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide bg-primary/15 text-primary border border-primary/25">
                  {market?.tag}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">{market?.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{market?.desc}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="scroll-reveal-hidden card-glass rounded-2xl p-6 text-center">
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
            Markets such as the broader Delhi NCR region, Uttar Pradesh, Madhya Pradesh and India&apos;s major heritage destinations form part of our long-term opportunity landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-muted-foreground/70 uppercase tracking-widest">
            <span>Delhi NCR</span>
            <span>·</span>
            <span>Uttar Pradesh</span>
            <span>·</span>
            <span>Madhya Pradesh</span>
            <span>·</span>
            <span>Emerging Pilgrimage &amp; Heritage Destinations</span>
          </div>
        </div>
      </div>
    </section>);

}