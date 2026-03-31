"use client";

import CustomCursor from "@/components/CustomCursor";
import HeroVideo from "@/components/HeroVideo";
import ThreeBackground from "@/components/ThreeBackground";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import MembersSlider from "@/components/MembersSlider";
import Projects from "@/components/Projects";
import ReviewsSlider from "@/components/ReviewsSlider";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingWrapper from "@/components/LoadingWrapper";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <LoadingWrapper>
      <CustomCursor />
      <ThreeBackground />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroVideo /> <div className="text-center py-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm">
  <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
    Digital Innovation That Drives Results
  </h1>
  <p className="text-gray-300 mt-2">2+ Years Experience • 13 Experts • 50+ Happy Clients</p>
</div>
        <section id="services">
  <Services />
</section>
<section id="stats">
  <Stats />
</section>
<section id="team">
  <MembersSlider />
</section>
<section id="projects">
  <Projects />
</section>
        <ReviewsSlider />
        <Footer />
        <WhatsAppButton />
      </main>
    </LoadingWrapper>
  );
}