import React from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import VisionSection from '@/components/VisionSection';
import ResourcesSection from '@/components/ResourcesSection';
import FeatureCards from '@/components/FeatureCards';
import ServicesGrid from '@/components/ServicesGrid';
import HowToJoin from '@/components/HowTojoin';
import FaqAndFooter from '@/components/Faq/Footer';


export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#0F1318]">
      <Navbar />
      <HeroBanner />
      <VisionSection />
      <ResourcesSection />
      <FeatureCards />
      <ServicesGrid />
      <HowToJoin />
      <FaqAndFooter />
    </main>
  );
}