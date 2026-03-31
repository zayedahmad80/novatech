"use client";

import { useState } from "react";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import Contact3D from "@/components/Contact3D";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <>
      <CustomCursor />
      <Contact3D />
      <div className="min-h-screen relative">
        <div className="container mx-auto px-4 py-24">
          <Link href="/" className="inline-block mb-8 text-white hover:text-purple-400 transition-colors">
            ← Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-center mb-4">Get in Touch</h1>
            <p className="text-gray-300 text-center mb-12">
              Ready to transform your digital presence? Let's talk.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileHover={{ scale: 1.02, x: 5 }} className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg rounded-xl text-white placeholder-gray-400 border border-white/20 focus:border-purple-500 focus:outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, x: 5 }} className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg rounded-xl text-white placeholder-gray-400 border border-white/20 focus:border-purple-500 focus:outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, x: 5 }} className="relative">
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg rounded-xl text-white placeholder-gray-400 border border-white/20 focus:border-purple-500 focus:outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-500 transition-all shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}