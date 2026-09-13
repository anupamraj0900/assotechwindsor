import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import BusinessesSection from './components/BusinessesSection';
import DevelopmentsSection from './components/DevelopmentsSection';
import WindsorHeightsSection from './components/WindsorHeightsSection';
import LegacySection from './components/LegacySection';
import Vision2030Section from './components/Vision2030Section';
import TechnologySection from './components/TechnologySection';
import LeadershipSection from './components/LeadershipSection';
import ValuesSection from './components/ValuesSection';
import FinalCTASection from './components/FinalCTASection';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#F8F6F0]">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <BusinessesSection />
      <DevelopmentsSection />
      <WindsorHeightsSection />
      <LegacySection />
      <Vision2030Section />
      <TechnologySection />
      <LeadershipSection />
      <ValuesSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}