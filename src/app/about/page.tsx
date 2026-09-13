import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutPageContent from './components/AboutPageContent';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#F8F6F0]">
      <Header />
      <AboutPageContent />
      <Footer />
    </main>
  );
}
