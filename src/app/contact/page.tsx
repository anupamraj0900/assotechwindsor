import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#F8F6F0]">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#1B4332]">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8">
          <span className="text-eyebrow text-[#B8975A] block mb-6">Contact</span>
          <div className="w-12 h-px bg-[#B8975A] mb-10" />
          <h1 className="font-display font-light text-[#F8F6F0] text-section-xl max-w-3xl">
            Get in Touch with<br />
            <span className="italic text-[#B8975A]">Assotech Windsor.</span>
          </h1>
          <p className="text-[#F8F6F0]/50 mt-8 max-w-xl leading-relaxed">
            Whether you are interested in our developments, exploring a partnership, or discussing a technology project — we would like to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-5">
              <div className="mb-12">
                <div className="text-eyebrow text-[#B8975A] mb-4">Registered Office</div>
                <div className="w-8 h-px bg-[#B8975A] mb-6" />
                <p className="text-[#6B6558] leading-relaxed">
                  Assotech Windsor LLP<br />
                  H-127, Sector-63<br />
                  Noida, Uttar Pradesh 201301<br />
                  India
                </p>
              </div>

              <div className="mb-12">
                <div className="text-eyebrow text-[#B8975A] mb-4">Connect</div>
                <div className="w-8 h-px bg-[#B8975A] mb-6" />
                <a
                  href="https://www.linkedin.com/in/anupamrajsrivastav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1B4332] hover:text-[#B8975A] transition-colors text-sm font-medium"
                >
                  LinkedIn →
                </a>
              </div>

              <div>
                <div className="text-eyebrow text-[#B8975A] mb-4">Windsor Heights</div>
                <div className="w-8 h-px bg-[#B8975A] mb-6" />
                <a
                  href="https://windsorheights.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1B4332] hover:text-[#B8975A] transition-colors text-sm font-medium"
                >
                  Visit Windsor Heights Website →
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <div className="text-eyebrow text-[#B8975A] mb-4">Send a Message</div>
              <div className="w-8 h-px bg-[#B8975A] mb-10" />
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[11px] tracking-[0.12em] uppercase text-[#6B6558] block mb-3">Name</label>
                    <input type="text" placeholder="Your name" className="input-field" />
                  </div>
                  <div>
                    <label className="text-[11px] tracking-[0.12em] uppercase text-[#6B6558] block mb-3">Email</label>
                    <input type="email" placeholder="your@email.com" className="input-field" />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] tracking-[0.12em] uppercase text-[#6B6558] block mb-3">Subject</label>
                  <select className="input-field bg-transparent appearance-none cursor-pointer">
                    <option value="">Select a topic</option>
                    <option value="real-estate">Real Estate Enquiry</option>
                    <option value="technology">Technology Project</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="windsor-heights">Windsor Heights</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] tracking-[0.12em] uppercase text-[#6B6558] block mb-3">Message</label>
                  <textarea placeholder="Your message" rows={5} className="input-field resize-none" />
                </div>
                <div>
                  <button type="submit" className="btn-primary">
                    Send Message
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}