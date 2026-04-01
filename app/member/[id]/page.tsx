"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CustomCursor from "@/components/CustomCursor";
import LoadingWrapper from "@/components/LoadingWrapper";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowLeft, FaImages } from "react-icons/fa";
import { useState } from "react";

const membersData: Record<number, {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  gallery?: string[];
  social?: { linkedin?: string; github?: string; twitter?: string };
  skills?: string[];
  experience?: string;
  projects?: number;
}> = {
  1: {
    name: "Alex Chen",
    role: "Lead Developer",
    bio: "Full-stack expert with 8 years experience in modern web technologies. Specializes in React, Next.js, and Three.js. Passionate about creating immersive web experiences and leading development teams to deliver exceptional results.",
    image: "/images/alex.jpg",
    email: "alex@novatech.com",
    gallery: ["/images/alex.jpg", "/images/alex2.jpg", "/images/alex3.jpg"],
    social: { linkedin: "#", github: "#", twitter: "#" },
    skills: ["React", "Next.js", "Three.js", "Node.js", "TypeScript"],
    experience: "8+ years",
    projects: 45,
  },
  2: {
    name: "Sarah Johnson",
    role: "Creative Director",
    bio: "Visionary designer leading innovative visual solutions. Expert in branding, UI/UX, and creative direction. With a keen eye for aesthetics and user experience, she transforms ideas into stunning visual narratives.",
    image: "/images/sarah.jpg",
    email: "sarah@novatech.com",
    gallery: ["/images/sarah.jpg", "/images/sarah2.jpg", "/images/sarah3.jpg"],
    social: { linkedin: "#", github: "#", twitter: "#" },
    skills: ["UI/UX", "Branding", "Figma", "Adobe XD", "Illustrator"],
    experience: "10+ years",
    projects: 78,
  },
  3: {
    name: "Mike Rodriguez",
    role: "Video Editor",
    bio: "Cinematic storyteller specializing in motion graphics and post-production. 10+ years in film industry. Creates compelling visual stories that captivate audiences and drive engagement.",
    image: "/images/mike.jpg",
    email: "mike@novatech.com",
    gallery: ["/images/mike.jpg", "/images/mike2.jpg", "/images/mike3.jpg"],
    social: { linkedin: "#", github: "#", twitter: "#" },
    skills: ["Premiere Pro", "After Effects", "DaVinci", "Final Cut", "Motion Graphics"],
    experience: "10+ years",
    projects: 112,
  },
  4: {
    name: "Emma Watson",
    role: "Marketing Strategist",
    bio: "Data-driven marketer with proven campaign success. Expert in SEO, social media, and growth strategies. Helped 50+ clients achieve 200%+ ROI on their marketing investments.",
    image: "/images/emma.jpg",
    email: "emma@novatech.com",
    gallery: ["/images/emma.jpg", "/images/emma2.jpg", "/images/emma3.jpg"],
    social: { linkedin: "#", github: "#", twitter: "#" },
    skills: ["SEO", "Analytics", "Social Media", "Content Strategy", "Email Marketing"],
    experience: "7+ years",
    projects: 93,
  },
};

// Image Gallery Modal
function ImageModal({ images, currentIndex, onClose, onNext, onPrev }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="relative max-w-4xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt="Gallery"
          className="w-full h-full object-contain rounded-2xl"
        />
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-purple-600 text-white flex items-center justify-center transition-all"
        >
          ←
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-purple-600 text-white flex items-center justify-center transition-all"
        >
          →
        </button>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-red-600 text-white flex items-center justify-center transition-all"
        >
          ✕
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MemberPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const member = membersData[id];
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!member) {
    return (
      <LoadingWrapper>
        <CustomCursor />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl mb-4 text-white">Member not found</h1>
            <Link href="/" className="text-purple-400 hover:text-purple-300">
              Back to Home
            </Link>
          </div>
        </div>
      </LoadingWrapper>
    );
  }

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % (member.gallery?.length || 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + (member.gallery?.length || 1)) % (member.gallery?.length || 1));
  };

  return (
    <LoadingWrapper>
      <CustomCursor />
      <main className="min-h-screen relative">
        {/* Background */}
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-black -z-10" />

        <div className="container mx-auto px-4 py-24">
          {/* Back Button */}
                  <Link
  href="/"
  className="inline-flex items-center gap-2 mb-8 text-white hover:text-purple-400 transition-colors group"
>
  <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
  Back to Home
</Link>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <FaImages className="text-white text-3xl" />
                  </div>
                </div>
              </motion.div>

              {/* Member Info */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">{member.name}</h1>
                <p className="text-purple-400 text-xl mb-4">{member.role}</p>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20">
                    <span className="text-purple-400 font-bold">{member.experience}</span>
                    <span className="text-gray-300 text-sm ml-1">Experience</span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20">
                    <span className="text-purple-400 font-bold">{member.projects}+</span>
                    <span className="text-gray-300 text-sm ml-1">Projects</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-200 text-lg mb-6 leading-relaxed">{member.bio}</p>

                {/* Skills */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills?.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact & Social */}
                <div className="flex flex-wrap gap-4">
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white transition-all">
                    <FaEnvelope /> Email
                  </a>
                  {member.social?.linkedin && (
                    <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-all">
                      <FaLinkedin />
                    </a>
                  )}
                  {member.social?.github && (
                    <a href={member.social.github} className="w-10 h-10 rounded-full bg-white/10 hover:bg-gray-700 flex items-center justify-center text-white transition-all">
                      <FaGithub />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-400 flex items-center justify-center text-white transition-all">
                      <FaTwitter />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            {member.gallery && member.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 pt-8 border-t border-white/20"
              >
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <FaImages /> Photo Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {member.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => openGallery(idx)}
                    >
                      <img
                        src={img}
                        alt={`${member.name} ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <FaImages className="text-white text-2xl" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>

      {/* Modal */}
      {modalOpen && member.gallery && (
        <ImageModal
          images={member.gallery}
          currentIndex={currentImageIndex}
          onClose={() => setModalOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </LoadingWrapper>
  );
}