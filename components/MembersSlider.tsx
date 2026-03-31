"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

const members = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Lead Developer",
    bio: "Full-stack expert with 8 years experience in modern web technologies",
    image: "👨‍💻",
    hasImage: false,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Creative Director",
    bio: "Visionary designer leading innovative visual solutions",
    image: "🎨",
    hasImage: false,
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    role: "Video Editor",
    bio: "Cinematic storyteller specializing in motion graphics",
    image: "🎬",
    hasImage: false,
  },
  {
    id: 4,
    name: "Emma Watson",
    role: "Marketing Strategist",
    bio: "Data-driven marketer with proven campaign success",
    image: "📊",
    hasImage: false,
  },
];

export default function MembersSlider() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Team</h2>
        <p className="text-gray-300 text-center text-lg mb-12 max-w-2xl mx-auto">
          Meet the creative minds behind NovaTech
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {members.map((member) => (
            <SwiperSlide key={member.id}>
              <Link href={`/member/${member.id}`}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  {member.hasImage ? (
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {member.name.charAt(0)}
                    </div>
                  ) : (
                    <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {member.image}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                  <div className="mt-4 text-purple-400 group-hover:text-white transition-colors">
                    View Profile →
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}