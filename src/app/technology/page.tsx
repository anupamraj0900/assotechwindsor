import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechnologyContent from './components/TechnologyContent';

export default function TechnologyPage() {
  return (
    <main className="relative min-h-screen bg-[#F8F6F0]">
      <Header />
      <TechnologyContent />
      <Footer />
    </main>
  );
}
