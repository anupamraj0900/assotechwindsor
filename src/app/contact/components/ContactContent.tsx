'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ContactContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', project: '', message: '', visitDate: '', visitTime: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.scroll-reveal-hidden');
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
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactDetails = [
    {
      title: 'Corporate Office',
      lines: ['Assotech Windsor LLP', 'H-127, Sector-63', 'Noida, Uttar Pradesh 201301'],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      title: 'Phone',
      lines: ['+91 98100 XXXXX', '+91 0120-XXX-XXXX'],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      title: 'Email',
      lines: ['enquiry@assotechwindsor.com', 'rera@assotechlimited.com'],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      title: 'Site Offices',
      lines: ['Bhopal: Windsor Heights Site Office', 'Indore: Windsor Greens MP Office'],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Info */}
        <div className="flex flex-col gap-8">
          {contactDetails.map((detail, i) => (
            <div
              key={detail.title}
              className="scroll-reveal-hidden flex items-start gap-4 p-5 rounded-xl border border-border hover:border-primary/30 transition-colors duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                {detail.icon}
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{detail.title}</div>
                {detail.lines.map((line) => (
                  <div key={line} className="text-sm text-foreground font-medium">{line}</div>
                ))}
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div className="scroll-reveal-hidden rounded-2xl overflow-hidden border border-border h-52 bg-muted/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-primary/40 mb-2">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              </div>
              <p className="text-muted-foreground text-sm">H-127, Sector-63, Noida</p>
              <a
                href="https://maps.google.com/?q=Sector+63+Noida+UP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:text-accent transition-colors mt-1 inline-block"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
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
                <p className="text-muted-foreground text-sm">We&apos;ll reach out within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-primary hover:text-accent transition-colors">
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-1">Send an Enquiry</h2>
                  <p className="text-muted-foreground text-sm">Fill in your details and we&apos;ll get back to you shortly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Full Name *</label>
                    <input
                      type="text" required placeholder="Suresh Verma"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Phone *</label>
                    <input
                      type="tel" required placeholder="+91 98765 XXXXX"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email" placeholder="suresh@email.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Project Interest</label>
                  <select
                    value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="select-field"
                  >
                    <option value="">Select a project</option>
                    <option>Windsor Heights, Bhopal</option>
                    <option>Windsor Greens MP, Indore</option>
                    <option>Windsor Kashi (Upcoming)</option>
                    <option>Windsor Vrindavan (Upcoming)</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Preferred Visit Date</label>
                    <input
                      type="date"
                      value={form.visitDate} onChange={(e) => setForm({ ...form, visitDate: e.target.value })}
                      className="input-field"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Preferred Time</label>
                    <select
                      value={form.visitTime} onChange={(e) => setForm({ ...form, visitTime: e.target.value })}
                      className="select-field"
                    >
                      <option value="">Select time</option>
                      <option>10:00 AM – 12:00 PM</option>
                      <option>12:00 PM – 2:00 PM</option>
                      <option>2:00 PM – 4:00 PM</option>
                      <option>4:00 PM – 6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    rows={3} placeholder="Tell us about your requirements, budget, or any specific queries..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-95"
                  style={{ boxShadow: '0 0 25px -5px rgba(200,150,90,0.4)' }}
                >
                  Submit Enquiry
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Your information is safe with us. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}