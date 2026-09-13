'use client';

import React, { useState } from 'react';

export default function SiteVisitForm() {
  const [form, setForm] = useState({ name: '', phone: '', project: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="section-divider mb-16" />
      <div
        className="card-glass rounded-3xl p-8 md:p-14 max-w-3xl mx-auto text-center"
        style={{ boxShadow: '0 0 60px -20px rgba(200,150,90,0.2)' }}
      >
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 mb-4">
          Schedule a Visit
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
          See It in Person.
        </h2>
        <p className="text-muted-foreground mb-8 font-light">
          Nothing beats walking through your future home. Book a complimentary site visit — we handle the rest.
        </p>

        {submitted ? (
          <div className="py-8">
            <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">Visit Scheduled!</h3>
            <p className="text-muted-foreground text-sm">We will confirm your slot within 2 hours.</p>
            <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-primary hover:text-accent transition-colors">
              Book another visit
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Name *</label>
                <input
                  type="text" required placeholder="Your full name"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Project</label>
                <select
                  value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className="select-field"
                >
                  <option value="">Select project</option>
                  <option>Windsor Heights, Bhopal</option>
                  <option>Windsor Greens MP, Indore</option>
                  <option>Windsor Kashi (Upcoming)</option>
                  <option>Windsor Vrindavan (Upcoming)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="input-field"
                  style={{ colorScheme: 'dark' }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-95 mt-2"
              style={{ boxShadow: '0 0 25px -5px rgba(200,150,90,0.4)' }}
            >
              Confirm Site Visit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}