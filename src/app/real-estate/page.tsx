import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RealEstateContent from './components/RealEstateContent';

export default function RealEstatePage() {
  return (
    <main className="relative min-h-screen bg-[#F8F6F0]">
      <Header />
      <RealEstateContent />
      <Footer />
    </main>
  );
}
