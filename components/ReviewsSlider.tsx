"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "John Smith",
    company: "TechStart Inc",
    text: "NovaTech transformed our online presence completely. The team's expertise in web development exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    company: "Creative Studio",
    text: "The video editing work was phenomenal. They captured our brand perfectly and delivered ahead of schedule.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    company: "Growth Marketing",
    text: "Marketing strategies implemented by NovaTech doubled our conversion rates within 3 months. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jessica Wilson",
    company: "Design Co",
    text: "Graphic design work is outstanding. Professional, creative, and great attention to detail.",
    rating: 5,
  },
];

export default function ReviewsSlider() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Client Reviews</h2>
        <p className="text-gray-300 text-center text-lg mb-12 max-w-2xl mx-auto">
          What our clients say about working with us
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20">
                <div className="flex mb-4">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="text-gray-200 text-lg mb-6 italic">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-xl">{review.name}</h4>
                  <p className="text-purple-400">{review.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}