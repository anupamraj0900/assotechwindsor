'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const developments = [
{ name: 'Windsor Heights', location: 'Katni, Madhya Pradesh', tag: 'Current', href: '/developments' },
{ name: 'Windsor Green', location: 'Noida / Delhi NCR', href: '/developments' },
{ name: 'Windsor Park', location: 'Delhi NCR', href: '/developments' },
{ name: 'GAIL Society', location: 'Greater Noida', href: '/developments' },
{ name: 'Windsor Hills', location: 'Gwalior, Madhya Pradesh', href: '/developments' },
{ name: 'Metropolis City', location: 'Rudrapur, Uttarakhand', href: '/developments' }];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [bizOpen, setBizOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const bizRef = useRef<HTMLDivElement>(null);
  const megaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bizTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {document.body.style.overflow = '';};
  }, [menuOpen]);

  const openMega = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimerRef.current = setTimeout(() => setMegaOpen(false), 120);
  };
  const openBiz = () => {
    if (bizTimerRef.current) clearTimeout(bizTimerRef.current);
    setBizOpen(true);
  };
  const closeBiz = () => {
    bizTimerRef.current = setTimeout(() => setBizOpen(false), 120);
  };

  const textColor = scrolled ? 'text-[#1C1C1A]' : 'text-[#F8F6F0]';
  const logoFilter = scrolled ? '' : 'brightness-0 invert';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ?
        'bg-[#F8F6F0]/95 backdrop-blur-md border-b border-[#D8D2C4]/60' :
        'bg-transparent'}`
        }>
        
        <div className="max-w-[1400px] mx-auto px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div style={{ filter: logoFilter, transition: 'filter 0.5s ease' }}>
              <AppLogo size={36} />
            </div>
            <div className={`hidden sm:block transition-colors duration-500 ${textColor}`}>
              <div className="text-[16px] font-semibold tracking-[0.18em] uppercase leading-tight">Assotech Windsor</div>
              <div className="text-[16px] tracking-[0.22em] uppercase opacity-70">Group</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0">
            <Link href="/" className={`px-4 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 hover:opacity-60 ${textColor}`}>
              Home
            </Link>

            {/* About */}
            <Link href="/about" className={`px-4 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 hover:opacity-60 ${textColor}`}>
              About
            </Link>

            {/* Businesses dropdown */}
            <div
              ref={bizRef}
              className="relative"
              onMouseEnter={openBiz}
              onMouseLeave={closeBiz}>
              
              <button className={`flex items-center gap-1 px-4 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 hover:opacity-60 ${textColor}`}>
                Businesses
                <svg className={`w-3 h-3 transition-transform duration-300 ${bizOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-52 bg-[#F8F6F0] border border-[#D8D2C4]/60 shadow-xl transition-all duration-300 ${
                bizOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`
                }>
                
                <Link href="/real-estate" className="flex items-center gap-3 px-5 py-4 text-[11px] font-medium tracking-[0.12em] uppercase text-[#1C1C1A] hover:bg-[#1B4332] hover:text-[#F8F6F0] transition-colors duration-200 border-b border-[#D8D2C4]/40">
                  Real Estate
                </Link>
                <Link href="/technology" className="flex items-center gap-3 px-5 py-4 text-[11px] font-medium tracking-[0.12em] uppercase text-[#1C1C1A] hover:bg-[#1B4332] hover:text-[#F8F6F0] transition-colors duration-200">
                  Technology
                </Link>
              </div>
            </div>

            {/* Developments mega menu */}
            <div
              ref={megaRef}
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}>
              
              <button className={`flex items-center gap-1 px-4 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 hover:opacity-60 ${textColor}`}>
                Developments
                <svg className={`w-3 h-3 transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link href="/leadership" className={`px-4 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 hover:opacity-60 ${textColor}`}>
              Leadership
            </Link>
            <Link href="/vision" className={`px-4 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 hover:opacity-60 ${textColor}`}>
              Vision 2030
            </Link>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase border transition-all duration-300 ${
              scrolled ?
              'border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-[#F8F6F0]' :
              'border-[#F8F6F0]/50 text-[#F8F6F0] hover:bg-[#F8F6F0]/10 hover:border-[#F8F6F0]'}`
              }>
              
              Contact Us
            </Link>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Open menu">
              
              <span className={`block w-6 h-px transition-colors duration-500 ${scrolled ? 'bg-[#1C1C1A]' : 'bg-[#F8F6F0]'}`} />
              <span className={`block w-6 h-px transition-colors duration-500 ${scrolled ? 'bg-[#1C1C1A]' : 'bg-[#F8F6F0]'}`} />
              <span className={`block w-4 h-px transition-colors duration-500 ${scrolled ? 'bg-[#B8975A]' : 'bg-[#B8975A]'}`} />
            </button>
          </div>
        </div>

        {/* Mega Menu — Developments */}
        <div
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
          className={`absolute top-full left-0 right-0 bg-[#F8F6F0] border-b border-[#D8D2C4]/60 shadow-2xl transition-all duration-350 ${
          megaOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'}`
          }
          style={{ transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)' }}>
          
          <div className="max-w-[1400px] mx-auto px-8 py-10 grid grid-cols-12 gap-12">
            {/* Left: Current Development */}
            <div className="col-span-4">
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B8975A] mb-5">Current Development</div>
              <div className="group relative overflow-hidden bg-[#1B4332] aspect-[4/3]">
                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_433b3d914-1789151620116.png"
                  alt="Windsor Heights residential development in Katni Madhya Pradesh"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105"
                  style={{ transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease' }} />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-[#B8975A] mb-1">Katni, Madhya Pradesh</div>
                  <div className="font-display text-xl font-light text-[#F8F6F0] mb-3">Windsor Heights</div>
                  <div className="text-[10px] text-[#F8F6F0]/60 mb-4">Residential Development</div>
                  <Link
                    href="/developments"
                    onClick={() => setMegaOpen(false)}
                    className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.15em] uppercase text-[#B8975A] hover:text-[#F8F6F0] transition-colors">
                    
                    View Project →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Portfolio */}
            <div className="col-span-8">
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B8975A] mb-5">Development Portfolio</div>
              <div className="grid grid-cols-2 gap-0">
                {developments.slice(1).map((dev) =>
                <Link
                  key={dev.name}
                  href={dev.href}
                  onClick={() => setMegaOpen(false)}
                  className="group flex items-start gap-4 py-4 px-4 border-b border-[#D8D2C4]/40 hover:bg-[#1B4332]/5 transition-colors duration-200">
                  
                    <div className="w-1 h-1 rounded-full bg-[#B8975A] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <div>
                      <div className="text-[13px] font-medium text-[#1C1C1A] group-hover:text-[#1B4332] transition-colors">{dev.name}</div>
                      <div className="text-[11px] text-[#6B6558] mt-0.5">{dev.location}</div>
                    </div>
                  </Link>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-[#D8D2C4]/40">
                <Link
                  href="/developments"
                  onClick={() => setMegaOpen(false)}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1B4332] hover:text-[#B8975A] transition-colors">
                  
                  View All Developments →
                </Link>
                <p className="text-[10px] text-[#6B6558] mt-2 italic">Selected historical projects reflect the prior development experience of the Group's leadership.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[80] bg-[#F8F6F0] flex flex-col transition-transform duration-700 ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'}`
        }
        style={{ transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}>
        
        <div className="flex items-center justify-between px-8 h-[72px] border-b border-[#D8D2C4]/60">
          <AppLogo size={32} />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Close menu">
            
            <svg className="w-5 h-5 text-[#1C1C1A]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Businesses', children: [{ label: 'Real Estate', href: '/real-estate' }, { label: 'Technology', href: '/technology' }] },
          { label: 'Developments', children: developments.map((d) => ({ label: d.name, href: d.href })) },
          { label: 'Leadership', href: '/leadership' },
          { label: 'Vision 2030', href: '/vision' },
          { label: 'Contact', href: '/contact' }].
          map((item) =>
          <div key={item.label} className="border-b border-[#D8D2C4]/40">
              {item.children ?
            <>
                  <button
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                className="w-full flex items-center justify-between py-5 text-left">
                
                    <span className="font-display text-2xl font-light text-[#1C1C1A]">{item.label}</span>
                    <svg className={`w-4 h-4 text-[#6B6558] transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileExpanded === item.label &&
              <div className="pb-4 pl-4 flex flex-col gap-2">
                      {item.children.map((child) =>
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[#6B6558] hover:text-[#1B4332] py-1.5 transition-colors">
                  
                          {child.label}
                        </Link>
                )}
                    </div>
              }
                </> :

            <Link
              href={item.href!}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-5">
              
                  <span className="font-display text-2xl font-light text-[#1C1C1A]">{item.label}</span>
                  <svg className="w-4 h-4 text-[#6B6558]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
            }
            </div>
          )}
        </div>

        <div className="px-8 py-6 border-t border-[#D8D2C4]/60">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full justify-center">
            
            Contact Us
          </Link>
          <p className="text-center text-[10px] text-[#6B6558] mt-4 tracking-[0.18em] uppercase">
            Assotech Windsor Group · Est. 2020
          </p>
        </div>
      </div>
    </>);

}