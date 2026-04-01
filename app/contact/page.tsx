"use client";

import { useState } from "react";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import Contact3D from "@/components/Contact3D";
import LoadingWrapper from "@/components/LoadingWrapper";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, title: "Email Us", info: "hello@novatech.com", detail: "support@novatech.com", color: "from-blue-500 to-cyan-500" },
    { icon: FaPhone, title: "Call Us", info: "+1 (555) 123-4567", detail: "Mon-Fri, 9am-6pm EST", color: "from-green-500 to-emerald-500" },
    { icon: FaMapMarkerAlt, title: "Visit Us", info: "123 Digital Avenue", detail: "New York, NY 10001", color: "from-red-500 to-orange-500" },
    { icon: FaClock, title: "Working Hours", info: "Monday - Friday", detail: "9:00 AM - 6:00 PM", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <LoadingWrapper>
      <CustomCursor />
      <Contact3D />
      <div className="min-h-screen relative">
        <div className="container mx-auto px-4 py-24">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-white hover:text-purple-400 transition-colors group">
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold mb-4"
                >
                  Get In Touch
                </motion.span>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Let's Talk
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ready to transform your digital presence? We're here to help. 
                  Fill out the form or reach out through any of these channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl backdrop-blur-lg shadow-xl group cursor-pointer`}
                  >
                    <item.icon className="text-white text-3xl mb-3" />
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.info}</p>
                    <p className="text-white/70 text-xs mt-1">{item.detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-4"
              >
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map((Icon, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-600 flex items-center justify-center text-white transition-all"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    disabled={status === "sending"}
                    className="w-full px-5 py-4 bg-white/5 backdrop-blur-lg rounded-xl text-white placeholder-gray-400 border border-white/20 focus:border-purple-500 focus:outline-none transition-all disabled:opacity-50"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    disabled={status === "sending"}
                    className="w-full px-5 py-4 bg-white/5 backdrop-blur-lg rounded-xl text-white placeholder-gray-400 border border-white/20 focus:border-purple-500 focus:outline-none transition-all disabled:opacity-50"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    disabled={status === "sending"}
                    className="w-full px-5 py-4 bg-white/5 backdrop-blur-lg rounded-xl text-white placeholder-gray-400 border border-white/20 focus:border-purple-500 focus:outline-none transition-all disabled:opacity-50"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    disabled={status === "sending"}
                    className="w-full px-5 py-4 bg-white/5 backdrop-blur-lg rounded-xl text-white placeholder-gray-400 border border-white/20 focus:border-purple-500 focus:outline-none transition-all resize-none disabled:opacity-50"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <FaCheckCircle />
                      Sent Successfully!
                    </>
                  ) : status === "error" ? (
                    "❌ Failed - Try Again"
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-center text-gray-400 text-sm"
              >
                <p>We typically respond within 24 hours</p>
                <p className="text-xs mt-1">Your information is secure with us</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </LoadingWrapper>
  );
}