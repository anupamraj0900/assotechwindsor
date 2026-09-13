'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const galleryImages = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1be989a4f-1773164988183.png",
  alt: 'Spacious modern living room interior with warm wood floors, floor-to-ceiling windows, minimalist decor',
  label: 'Living Spaces'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a5332b0a-1764793769742.png",
  alt: 'Luxury master bedroom with panoramic view, plush bedding, warm ambient lighting',
  label: 'Bedrooms'
},
{
  src: "https://images.unsplash.com/photo-1679504824947-140730fafc73",
  alt: 'Premium residential building exterior at twilight, warm lights glowing from windows',
  label: 'Exteriors'
},
{
  src: "https://images.unsplash.com/photo-1524806864050-55ce7d47f36d",
  alt: 'Resort-style swimming pool with deck chairs, surrounded by palm trees and manicured gardens',
  label: 'Amenities'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1dbc9f031-1774281562393.png",
  alt: 'Modern open-plan kitchen with marble countertops, premium appliances, natural light',
  label: 'Kitchens'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b287f7d5-1786294145354.png",
  alt: 'Luxury villa exterior at golden hour, Mediterranean-inspired architecture, private driveway',
  label: 'Villas'
}];


export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

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
    <section ref={sectionRef} className="py-16 relative" id="gallery">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal-hidden text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-4">
            Gallery
          </span>
          <h2 className="text-section-xl font-display font-semibold text-foreground">
            See the
            <span className="italic gradient-text-gold"> Difference.</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-base font-light">
            Every corner is designed with intention. Explore our properties through curated visuals.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages?.map((img, i) =>
          <div
            key={i}
            className={`scroll-reveal-hidden relative overflow-hidden rounded-xl group cursor-pointer ${
            i === 0 ? 'md:col-span-2 h-64 md:h-80' : 'h-48 md:h-64'}`
            }
            style={{ transitionDelay: `${i * 60}ms` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}>
            
              <AppImage
              src={img?.src}
              alt={img?.alt}
              fill
              className={`object-cover transition-all duration-700 group-hover:scale-110 ${
              hovered !== null && hovered !== i ? 'filter grayscale opacity-60' : 'filter-none opacity-100'}`
              }
              sizes={i === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'} />
            
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-semibold text-foreground uppercase tracking-widest">{img?.label}</span>
              </div>
            </div>
          )}
        </div>

        {/* Virtual Walkthrough CTA */}
        <div className="scroll-reveal-hidden mt-10 p-6 md:p-8 rounded-2xl border border-primary/20 card-glass flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">
              Take a Virtual Walkthrough
            </h3>
            <p className="text-muted-foreground text-sm">
              Explore our flagship projects from the comfort of your home. 360° virtual tours available.
            </p>
          </div>
          <button className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Launch Virtual Tour
          </button>
        </div>
      </div>
    </section>);

}