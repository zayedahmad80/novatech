"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [
    {
      title: "Web Development",
      desc: "Modern, responsive websites that drive results",
      bg: "bg-gradient-to-r from-purple-900 to-blue-900",
    },
    {
      title: "Video Editing",
      desc: "Cinematic content that captivates audiences",
      bg: "bg-gradient-to-r from-red-900 to-orange-900",
    },
    {
      title: "Graphic Design",
      desc: "Stunning visuals that tell your story",
      bg: "bg-gradient-to-r from-green-900 to-teal-900",
    },
    {
      title: "Marketing",
      desc: "Strategic campaigns that grow your business",
      bg: "bg-gradient-to-r from-pink-900 to-rose-900",
    },
  ];

  return (
    <section className="h-screen w-full relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
  <SwiperSlide key={index}>
    <div className={`${slide.bg} h-full w-full flex items-center justify-center text-center px-4`}>
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          {slide.title}
        </h1>
        <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md">
          {slide.desc}
        </p>
        <button 
  className="mt-8 px-8 py-3 rounded-full font-semibold hover:scale-110 transition-all duration-300 shadow-lg"
  style={{ 
    backgroundColor: '#9333ea',
    color: '#ffffff',
    display: 'inline-block'
  }}
>
  Get Started
</button>
      </div>
    </div>
  </SwiperSlide>
))}
      </Swiper>
    </section>
  );
}