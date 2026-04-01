"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaCode, FaVideo, FaPalette, FaChartLine } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: FaCode,
    desc: "Modern, responsive websites and web applications built with latest technologies. Custom solutions tailored to your business needs.",
    gradient: "from-blue-600 to-cyan-600",
    features: ["React/Next.js", "Responsive Design", "SEO Optimized", "Fast Performance"],
    price: "From $999",
  },
  {
    title: "Video Editing",
    icon: FaVideo,
    desc: "Professional video editing, motion graphics, and post-production services. Cinematic content that captivates audiences.",
    gradient: "from-red-600 to-orange-600",
    features: ["4K Editing", "Motion Graphics", "Color Grading", "Sound Design"],
    price: "From $499",
  },
  {
    title: "Graphic Design",
    icon: FaPalette,
    desc: "Stunning visuals, branding, and creative design solutions. Make your brand stand out with unique designs.",
    gradient: "from-green-600 to-emerald-600",
    features: ["Logo Design", "Brand Identity", "Social Media Graphics", "Print Materials"],
    price: "From $299",
  },
  {
    title: "Marketing",
    icon: FaChartLine,
    desc: "Strategic digital marketing campaigns that drive real results. Data-driven approach for maximum ROI.",
    gradient: "from-pink-600 to-rose-600",
    features: ["SEO/SEM", "Social Media", "Email Marketing", "Analytics"],
    price: "From $599",
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black via-purple-950/5 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600 rounded-full blur-3xl opacity-10 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-5 animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold mb-4"
          >
            What We Offer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
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
                  y: hoveredIndex === index ? -15 : 0,
                  scale: hoveredIndex === index ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                
                {/* Icon section with animation */}
                <div className="relative p-8 pb-0">
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="text-white text-3xl" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  {/* Features list */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={hoveredIndex === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="text-purple-400">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Price and CTA */}
                <div className="p-8 pt-0 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400">Starting</span>
                      <p className="text-2xl font-bold text-white">{service.price}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02,  }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all`}
                    >
                      Get Started →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}