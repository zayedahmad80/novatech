"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const members = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Lead Developer",
    bio: "Full-stack expert with 8 years experience in modern web technologies. Specializes in React, Next.js, and Three.js.",
    image: "👨‍💻",
    gradient: "from-blue-500 to-cyan-500",
    social: { linkedin: "#", github: "#", twitter: "#" },
    expertise: ["React", "Next.js", "Three.js"],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Creative Director",
    bio: "Visionary designer leading innovative visual solutions. Expert in branding, UI/UX, and creative direction.",
    image: "🎨",
    gradient: "from-pink-500 to-rose-500",
    social: { linkedin: "#", github: "#", twitter: "#" },
    expertise: ["UI/UX", "Branding", "Figma"],
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    role: "Video Editor",
    bio: "Cinematic storyteller specializing in motion graphics and post-production. 10+ years in film industry.",
    image: "🎬",
    gradient: "from-red-500 to-orange-500",
    social: { linkedin: "#", github: "#", twitter: "#" },
    expertise: ["Premiere Pro", "After Effects", "DaVinci"],
  },
  {
    id: 4,
    name: "Emma Watson",
    role: "Marketing Strategist",
    bio: "Data-driven marketer with proven campaign success. Expert in SEO, social media, and growth strategies.",
    image: "📊",
    gradient: "from-green-500 to-emerald-500",
    social: { linkedin: "#", github: "#", twitter: "#" },
    expertise: ["SEO", "Analytics", "Social Media"],
  },
];

export default function MembersSlider() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
      </div>

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
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth: 80,
                modifier: 1,
                slideShadows: true,
              },
            },
            1024: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 15,
                stretch: 0,
                depth: 60,
                modifier: 1,
                slideShadows: true,
              },
            },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={false}
          className="pb-16"
        >
          {members.map((member) => (
            <SwiperSlide key={member.id}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group cursor-pointer"
                onClick={() => window.location.href = `/member/${member.id}`}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  {/* Profile image with gradient background */}
                  <div className={`relative bg-gradient-to-br ${member.gradient} p-8 pt-12 text-center`}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-32 h-32 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-6xl border-4 border-white/30 shadow-xl"
                    >
                      {member.image}
                    </motion.div>
                    
                    {/* Social icons overlay */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.social.linkedin}
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-blue-600 flex items-center justify-center text-white transition-all"
                      >
                        <FaLinkedin size={14} />
                      </a>
                      <a
                        href={member.social.github}
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-gray-700 flex items-center justify-center text-white transition-all"
                      >
                        <FaGithub size={14} />
                      </a>
                      <a
                        href={member.social.twitter}
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-blue-400 flex items-center justify-center text-white transition-all"
                      >
                        <FaTwitter size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Member info */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-purple-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-purple-400 mb-3 font-semibold">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{member.bio}</p>
                    
                    {/* Expertise tags */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-full bg-white/10 text-purple-300 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* View profile button */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-purple-400 group-hover:text-white transition-colors text-sm font-semibold"
                    >
                      View Profile →
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}