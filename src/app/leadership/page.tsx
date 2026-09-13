import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadershipContent from './components/LeadershipContent';

export default function LeadershipPage() {
  return (
    <main className="relative min-h-screen bg-[#F8F6F0]">
      <Header />
      <LeadershipContent />
      <Footer />
    </main>
  );
}
