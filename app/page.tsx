"use client";

import dynamic from 'next/dynamic';
import CustomCursor from "@/components/CustomCursor";
import LoadingWrapper from "@/components/LoadingWrapper";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";

// Lazy load heavy components
const HeroVideo = dynamic(() => import("@/components/HeroVideo"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Stats = dynamic(() => import("@/components/Stats"), { ssr: false });
const MembersSlider = dynamic(() => import("@/components/MembersSlider"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const ReviewsSlider = dynamic(() => import("@/components/ReviewsSlider"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <LoadingWrapper>
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroVideo />
        <Services />
        <Stats />
        <MembersSlider />
        <Projects />
        <ReviewsSlider />
        <FAQ />
        <Footer />
        <WhatsAppButton />
      </main>
    </LoadingWrapper>
  );
}