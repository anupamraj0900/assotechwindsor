import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VisionContent from './components/VisionContent';

export default function VisionPage() {
  return (
    <main className="relative min-h-screen bg-[#F8F6F0]">
      <Header />
      <VisionContent />
      <Footer />
    </main>
  );
}
