import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DevelopmentsContent from './components/DevelopmentsContent';

export default function DevelopmentsPage() {
  return (
    <main className="relative min-h-screen bg-[#F8F6F0]">
      <Header />
      <DevelopmentsContent />
      <Footer />
    </main>
  );
}
