"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const videos = [
  {
    src: "https://media.istockphoto.com/id/1356762790/video/web-development-concept.mp4?s=mp4-640x640-is&k=20&c=uH-ubOdfazcHRUBGQs_T8UukaDS9wf-3tMktdXoDaws=",
    title: "Web Development",
    desc: "Modern, responsive websites that drive results",
  },
  {
    src: "https://media.istockphoto.com/id/1466762124/video/the-movie-editor-highlights-selects-and-moves-footage-in-a-timeline-editing-project-in-a.mp4?s=mp4-640x640-is&k=20&c=YW6HWIpt5FyECyPacuxRgTh99ZN4ZFM0bO19R7_4dfc=",
    title: "Video Editing",
    desc: "Cinematic content that captivates audiences",
  },
  {
    src: "https://media.istockphoto.com/id/1400081953/video/black-teen-woman-creating-and-rendering-3d-model-of-unique-sneaker-at-personal-computer.mp4?s=mp4-640x640-is&k=20&c=Ce8_i5iyHMPLZXGIuX5I4NGtXymdbwrfwZl4y5CJVb8=",
    title: "Graphic Design",
    desc: "Stunning visuals that tell your story",
  },
  {
    src: "https://media.istockphoto.com/id/1872444510/video/social-media-internet-web-concept-animated-stream-of-content-browsing-through-multimedia-all.mp4?s=mp4-640x640-is&k=20&c=tgvjyTa7XkY1ouStrwV2koQnMABTW7f7P9FQuDnenYc=",
    title: "Marketing",
    desc: "Strategic campaigns that grow your business",
  },
];

export default function HeroVideo() {
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
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative h-full w-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl">
                  <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                    {video.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md mb-8">
                    {video.desc}
                  </p>
                 <Link href="/contact">
                <button 
                   className="px-8 py-3 rounded-full font-semibold hover:scale-110 transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: '#9333ea', color: '#ffffff' }}
                       >
                     Get Started
                      </button>
                   </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}