"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
  _id: string;
  title: string;
  category: string;
  desc: string;
  icon: string;
  stats: string;
  link: string;
  github: string;
  featured: boolean;
}

const gradientColors = [
  "from-blue-600 to-cyan-600",
  "from-green-600 to-emerald-600",
  "from-red-600 to-orange-600",
  "from-pink-600 to-rose-600",
  "from-purple-600 to-indigo-600",
];

const icons = ["🛒", "🎯", "📹", "📈", "🏢", "🚀", "💡", "🎨"];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="py-24 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">No projects yet. Add some in admin panel.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black relative overflow-hidden">
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
              key={project._id}
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
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${gradientColors[index % gradientColors.length]} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                
                <div className="relative p-8 pb-0">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-4xl mb-6 border border-white/20"
                  >
                    {project.icon || icons[index % icons.length]}
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
                  
                  {project.stats && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={hoveredIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 }}
                      className="inline-block px-4 py-2 rounded-full bg-black/50 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-6"
                    >
                      📊 {project.stats}
                    </motion.div>
                  )}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  className="p-8 pt-0 flex gap-4"
                >
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all"
                    >
                      <FaGithub size={14} /> Code
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

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