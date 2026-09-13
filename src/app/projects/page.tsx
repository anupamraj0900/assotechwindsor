import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsHero from './components/ProjectsHero';
import ProjectsGrid from './components/ProjectsGrid';
import SiteVisitForm from './components/SiteVisitForm';

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <ProjectsHero />
      <ProjectsGrid />
      <SiteVisitForm />
      <Footer />
    </main>
  );
}