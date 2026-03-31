"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    desc: "Full-featured online store with 10k+ monthly visitors, integrated payment gateway, and real-time inventory management.",
    icon: "🛒",
    gradient: "from-blue-600 to-cyan-600",
    stats: "10k+ monthly visitors",
    link: "#",
    github: "#",
  },
  {
    title: "Brand Identity Package",
    category: "Graphic Design",
    desc: "Complete branding solution including logo design, color palette, typography, and brand guidelines for tech startup.",
    icon: "🎯",
    gradient: "from-green-600 to-emerald-600",
    stats: "100% client satisfaction",
    link: "#",
    github: "#",
  },
  {
    title: "Product Launch Video",
    category: "Video Editing",
    desc: "30-second commercial with cinematic effects, motion graphics, and professional color grading. Achieved 1M+ views.",
    icon: "📹",
    gradient: "from-red-600 to-orange-600",
    stats: "1M+ views",
    link: "#",
    github: "#",
  },
  {
    title: "SEO Campaign",
    category: "Marketing",
    desc: "Comprehensive SEO strategy resulting in 300% increase in organic traffic and top 3 rankings for 20+ keywords.",
    icon: "📈",
    gradient: "from-pink-600 to-rose-600",
    stats: "300% traffic growth",
    link: "#",
    github: "#",
  },
  {
    title: "Corporate Website",
    category: "Web Development",
    desc: "Modern responsive website with CMS integration, custom animations, and optimized performance for enterprise client.",
    icon: "🏢",
    gradient: "from-purple-600 to-indigo-600",
    stats: "99.9% uptime",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                animate={{
                  rotateX: hoveredIndex === index ? 5 : 0,
                  rotateY: hoveredIndex === index ? 5 : 0,
                  y: hoveredIndex === index ? -10 : 0,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl h-full"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                
                {/* Project icon with animation */}
                <div className="relative p-8 pb-0">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-4xl mb-6 border border-white/20"
                  >
                    {project.icon}
                  </motion.div>
                  
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
                    {project.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  {/* Stats badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={hoveredIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 }}
                    className="inline-block px-4 py-2 rounded-full bg-black/50 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-6"
                  >
                    📊 {project.stats}
                  </motion.div>
                </div>
                
                {/* Links section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  className="p-8 pt-0 flex gap-4"
                >
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all"
                  >
                    <FaGithub size={14} /> Code
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            View All Projects →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}