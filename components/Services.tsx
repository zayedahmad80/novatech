"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const services = [
  {
    title: "Web Development",
    icon: "💻",
    desc: "Modern, responsive websites and web applications built with latest technologies",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Video Editing",
    icon: "🎬",
    desc: "Professional video editing, motion graphics, and post-production services",
    gradient: "from-red-600 to-orange-600",
  },
  {
    title: "Graphic Design",
    icon: "🎨",
    desc: "Stunning visuals, branding, and creative design solutions",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    title: "Marketing",
    icon: "📈",
    desc: "Strategic digital marketing campaigns that drive real results",
    gradient: "from-pink-600 to-rose-600",
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 bg-black/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.08, 
                y: -15,
                transition: { type: "spring", stiffness: 300 }
              }}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center cursor-pointer border border-white/20 relative overflow-hidden group`}
            >
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
              <motion.div
                animate={{ 
                  rotate: hoveredIndex === index ? [0, -10, 10, -5, 5, 0] : 0,
                  scale: hoveredIndex === index ? 1.2 : 1
                }}
                transition={{ duration: 0.5 }}
                className="text-6xl mb-4 relative z-10"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 relative z-10 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 relative z-10 group-hover:text-white transition-colors">
                {service.desc}
              </p>
              <motion.div 
                className="mt-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all"
                initial={{ y: 10 }}
                animate={{ y: hoveredIndex === index ? 0 : 10 }}
              >
                Learn more →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}