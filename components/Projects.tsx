"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    desc: "Full-featured online store with 10k+ monthly visitors",
    icon: "🛒",
  },
  {
    title: "Brand Identity Package",
    category: "Graphic Design",
    desc: "Complete branding solution for tech startup",
    icon: "🎯",
  },
  {
    title: "Product Launch Video",
    category: "Video Editing",
    desc: "30-second commercial with 1M+ views",
    icon: "📹",
  },
  {
    title: "SEO Campaign",
    category: "Marketing",
    desc: "300% increase in organic traffic",
    icon: "📈",
  },
  {
    title: "Corporate Website",
    category: "Web Development",
    desc: "Modern responsive design for enterprise client",
    icon: "🏢",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-purple-950/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            5+ successful projects delivered with excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotateX: 5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="text-5xl mb-4">{project.icon}</div>
              <span className="text-purple-400 text-sm uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
              <p className="text-gray-300">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}