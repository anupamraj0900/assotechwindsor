import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PartnershipsHero from './components/PartnershipsHero';
import PartnershipsContent from './components/PartnershipsContent';

export default function PartnershipsPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <PartnershipsHero />
      <PartnershipsContent />
      <Footer />
    </main>
  );
}
