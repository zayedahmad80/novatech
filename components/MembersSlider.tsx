"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface TeamMember {
  _id: string;
  id?: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  gradient?: string;
  social: { linkedin: string; github: string; twitter: string };
  expertise: string[];
}

const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-pink-500 to-rose-500",
  "from-red-500 to-orange-500",
  "from-green-500 to-emerald-500",
  "from-purple-500 to-indigo-500",
  "from-yellow-500 to-amber-500",
];

export default function MembersSlider() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    fetch('/api/team')
      .then(res => res.json())
      .then(data => {
        setMembers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch team:', err);
        setLoading(false);
      });
  }, []);

  const openSocial = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (url && url !== "#") window.open(url, "_blank");
  };

  if (loading) {
    return (
      <section className="py-24 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading team...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 md:px-8 bg-black/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Creative Team
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate experts dedicated to bringing your vision to life
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
          breakpoints={{
            768: { slidesPerView: 2, coverflowEffect: { rotate: 20, stretch: 0, depth: 80, modifier: 1, slideShadows: true } },
            1024: { slidesPerView: 3, coverflowEffect: { rotate: 15, stretch: 0, depth: 60, modifier: 1, slideShadows: true } },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={false}
          className="pb-16"
        >
          {members.map((member, index) => (
            <SwiperSlide key={member._id}>
              <Link href={`/member/${member._id}`}>
                <div className="group cursor-pointer bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                  <div className={`relative bg-gradient-to-br ${gradientColors[index % gradientColors.length]} p-8 pt-12 text-center`}>
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-xl transition-transform duration-500 group-hover:scale-110 bg-white/20 flex items-center justify-center">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-6xl">{member.name.charAt(0)}</span>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                      <button
                        onClick={(e) => openSocial(member.social?.linkedin, e)}
                        className="w-8 h-8 rounded-full bg-black/50 hover:bg-blue-600 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                      >
                        <FaLinkedin size={14} />
                      </button>
                      <button
                        onClick={(e) => openSocial(member.social?.github, e)}
                        className="w-8 h-8 rounded-full bg-black/50 hover:bg-gray-700 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                      >
                        <FaGithub size={14} />
                      </button>
                      <button
                        onClick={(e) => openSocial(member.social?.twitter, e)}
                        className="w-8 h-8 rounded-full bg-black/50 hover:bg-blue-400 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                      >
                        <FaTwitter size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-purple-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-purple-400 mb-3 font-semibold">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.expertise?.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-white/10 text-purple-300 text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 text-purple-400 group-hover:text-white transition-colors text-sm font-semibold">
                      View Profile →
                    </div>
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