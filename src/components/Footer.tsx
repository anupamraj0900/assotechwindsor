import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = {
  group: [
    { label: 'About', href: '/about' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Vision 2030', href: '/vision' },
  ],
  businesses: [
    { label: 'Real Estate', href: '/real-estate' },
    { label: 'Technology', href: '/technology' },
  ],
  developments: [
    { label: 'Windsor Heights', href: '/developments' },
    { label: 'Development Portfolio', href: '/developments' },
  ],
  connect: [
    { label: 'Contact', href: '/contact' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anupamrajsrivastav/', external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1A] pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-[#F8F6F0]/8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-6" style={{ filter: 'brightness-0 invert(1)' }}>
              <AppLogo size={32} />
            </div>
            <div className="font-display text-lg font-light text-[#F8F6F0] mb-3">Assotech Windsor Group</div>
            <p className="text-[#F8F6F0]/40 text-sm leading-relaxed max-w-xs">
              Building Places. Powering Technology. Shaping What's Next.
            </p>
            <div className="mt-6 text-[11px] text-[#F8F6F0]/30 tracking-wide">
              India · Canada · North America
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-eyebrow text-[#B8975A] mb-5">Group</div>
              <ul className="flex flex-col gap-3">
                {footerLinks?.group?.map((l) => (
                  <li key={l?.label}>
                    <Link href={l?.href} className="text-[13px] text-[#F8F6F0]/50 hover:text-[#F8F6F0] transition-colors duration-200">
                      {l?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-eyebrow text-[#B8975A] mb-5">Businesses</div>
              <ul className="flex flex-col gap-3">
                {footerLinks?.businesses?.map((l) => (
                  <li key={l?.label}>
                    <Link href={l?.href} className="text-[13px] text-[#F8F6F0]/50 hover:text-[#F8F6F0] transition-colors duration-200">
                      {l?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-eyebrow text-[#B8975A] mb-5">Developments</div>
              <ul className="flex flex-col gap-3">
                {footerLinks?.developments?.map((l) => (
                  <li key={l?.label}>
                    <Link href={l?.href} className="text-[13px] text-[#F8F6F0]/50 hover:text-[#F8F6F0] transition-colors duration-200">
                      {l?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-eyebrow text-[#B8975A] mb-5">Connect</div>
              <ul className="flex flex-col gap-3">
                {footerLinks?.connect?.map((l) => (
                  <li key={l?.label}>
                    {'external' in l && l?.external ? (
                      <a href={l?.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#F8F6F0]/50 hover:text-[#F8F6F0] transition-colors duration-200">
                        {l?.label}
                      </a>
                    ) : (
                      <Link href={l?.href} className="text-[13px] text-[#F8F6F0]/50 hover:text-[#F8F6F0] transition-colors duration-200">
                        {l?.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-[#F8F6F0]/25">
            © 2020–2025 Assotech Windsor Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[11px] text-[#F8F6F0]/25 hover:text-[#F8F6F0]/50 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[11px] text-[#F8F6F0]/25 hover:text-[#F8F6F0]/50 transition-colors">Terms of Use</Link>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-6 pt-6 border-t border-[#F8F6F0]/5">
          <p className="text-[10px] text-[#F8F6F0]/20 leading-relaxed max-w-3xl">
            Assotech Windsor Group is the operating brand of Assotech Windsor LLP. Selected historical projects reflect the prior development experience associated with the Group's leadership. This website is for information purposes only and does not constitute an offer or solicitation.
          </p>
        </div>
      </div>
    </footer>
  );
}