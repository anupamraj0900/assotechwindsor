'use client';

import React, { useEffect, useRef, useState } from 'react';


const partnershipTypes = [
  {
    icon: '⬡',
    title: 'Public-Private Partnerships',
    desc: 'Urban development, tourism-linked infrastructure, housing and redevelopment opportunities. We work with public authorities and government bodies to create developments that serve both community and commercial objectives.',
    points: ['Urban housing development', 'Tourism-linked infrastructure', 'Redevelopment projects', 'Government housing schemes'],
  },
  {
    icon: '◈',
    title: 'Joint Developments',
    desc: 'Partnerships with landowners and institutions where Windsor can bring planning, development, sales and execution capabilities. We align our interests with yours to create shared, long-term value.',
    points: ['Landowner partnerships', 'Institutional collaborations', 'Revenue-share models', 'Full development management'],
  },
  {
    icon: '◇',
    title: 'Strategic Land Opportunities',
    desc: 'Select opportunities in growth corridors across North and Central India. We evaluate land with a long-term lens — looking at infrastructure, connectivity, demand fundamentals and future potential.',
    points: ['Growth corridor identification', 'Infrastructure-led locations', 'Heritage & cultural destinations', 'Emerging urban markets'],
  },
];

const whyPartner = [
  { title: 'Proven Execution', desc: 'Windsor Heights demonstrates our ability to plan, build and deliver at scale in emerging Indian markets.' },
  { title: 'Transparent Process', desc: 'RERA-compliant operations, clear documentation and aligned incentives at every stage of the partnership.' },
  { title: 'Local + Global', desc: 'On-ground execution capability combined with an internationally informed strategic perspective.' },
  { title: 'Long-Term Orientation', desc: 'We evaluate opportunities by what a location can become — not just what can be built today.' },
];

export default function PartnershipsContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', org: '', phone: '', email: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="py-16">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-6">

        {/* Partnership types */}
        <div className="scroll-reveal-hidden mb-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-4">
            How We Partner
          </span>
          <h2 className="text-section-xl font-display font-semibold text-foreground mb-12">
            Three Ways to
            <span className="block italic gradient-text-gold">Work Together.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {partnershipTypes.map((p, i) => (
            <div
              key={p.title}
              className="scroll-reveal-hidden card-glass card-glass-hover rounded-2xl p-8 flex flex-col gap-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-primary text-3xl">{p.icon}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="flex flex-col gap-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why partner */}
        <div className="section-divider mb-16" />
        <div className="scroll-reveal-hidden text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-4">
            Why Windsor
          </span>
          <h2 className="text-section-xl font-display font-semibold text-foreground">
            What We Bring to
            <span className="block italic gradient-text-gold">Every Partnership.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {whyPartner.map((w, i) => (
            <div
              key={w.title}
              className="scroll-reveal-hidden p-6 rounded-xl border border-border hover:border-primary/30 transition-colors duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3 className="font-semibold text-foreground text-sm mb-2">{w.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="section-divider mb-16" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="scroll-reveal-hidden">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-6">
              Get in Touch
            </span>
            <h2 className="text-section-xl font-display font-semibold text-foreground mb-4">
              Discuss a Development
              <span className="block italic gradient-text-gold">Opportunity.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              Whether you are a landowner, institution, government body or development partner — we would welcome the conversation. Share your opportunity and our team will respond within 48 hours.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: '📍', title: 'Corporate Office', val: 'H-127, Sector-63, Noida, UP 201301' },
                { icon: '✉️', title: 'Partnerships Email', val: 'partnerships@assotechwindsor.com' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{item.title}</div>
                    <div className="text-sm text-foreground font-medium">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal-hidden">
            <div className="card-glass rounded-3xl p-7 md:p-10" style={{ boxShadow: '0 0 50px -15px rgba(200,150,90,0.15)' }}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground text-sm">Our partnerships team will be in touch within 48 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-primary hover:text-accent transition-colors">
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">Partnership Enquiry</h3>
                    <p className="text-muted-foreground text-sm">Tell us about your opportunity.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Your Name *</label>
                      <input type="text" required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Organisation</label>
                      <input type="text" placeholder="Company / Institution" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} className="input-field" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Phone *</label>
                      <input type="tel" required placeholder="+91 98765 XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-field" />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Email *</label>
                      <input type="email" required placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Partnership Type</label>
                    <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="select-field">
                      <option value="">Select type</option>
                      <option>Public-Private Partnership</option>
                      <option>Joint Development</option>
                      <option>Strategic Land Opportunity</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Tell Us About the Opportunity *</label>
                    <textarea required rows={4} placeholder="Location, land area, current status, what you are looking for..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-95"
                    style={{ boxShadow: '0 0 25px -5px rgba(200,150,90,0.4)' }}
                  >
                    Submit Partnership Enquiry
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Your information is treated with complete confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
