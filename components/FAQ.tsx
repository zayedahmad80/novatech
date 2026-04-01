"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What services does NovaTech offer?",
    answer: "NovaTech offers comprehensive digital solutions including Web Development, Video Editing, Graphic Design, and Digital Marketing. We specialize in creating modern, responsive websites, professional video content, stunning visual designs, and data-driven marketing campaigns tailored to your business needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity and scope. A typical website development project takes 2-4 weeks, while branding packages take 1-2 weeks. We provide detailed timelines during our initial consultation and ensure timely delivery without compromising quality.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing based on project requirements. Web Development starts at $999, Video Editing from $499, Graphic Design from $299, and Marketing campaigns from $599. Custom packages are available for comprehensive solutions. Contact us for a detailed quote.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer post-launch support and maintenance packages to ensure your digital assets continue performing optimally. This includes regular updates, security monitoring, performance optimization, and technical support as needed.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer: "Absolutely! Check out our Projects section to see featured work including e-commerce platforms, brand identity packages, promotional videos, and successful marketing campaigns. We're proud of our portfolio and happy to share more case studies upon request.",
  },
  {
    question: "How do I get started with NovaTech?",
    answer: "Getting started is easy! Click the 'Get Started' button on our hero section or visit our Contact page. Fill out the form with your project details, and our team will reach out within 24 hours to schedule a free consultation and discuss your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black via-purple-950/5 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
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
            Got Questions?
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with NovaTech
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm flex-shrink-0`}
                  >
                    {openIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 ml-4 border-l-2 border-purple-500/30">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-white/20"
        >
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/contact"}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}