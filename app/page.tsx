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


export default function Home() {
  return (
    <>
      <CustomCursor />
      <ThreeBackground />
      <main className="relative z-10">
        <HeroVideo />
        <Services />
        <Stats />
        <MembersSlider />
        <Projects />
        <ReviewsSlider />
        <Footer />
      </main>
    </>
  );
}