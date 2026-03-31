"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const socials = [
  { name: "Facebook", icon: FaFacebook, url: "https://facebook.com", color: "hover:bg-[#1877F2]" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com", color: "hover:bg-[#E4405F]" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com", color: "hover:bg-[#333]" },
  { name: "WhatsApp", icon: FaWhatsapp, url: "https://whatsapp.com", color: "hover:bg-[#25D366]" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com", color: "hover:bg-[#0A66C2]" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">NovaTech</h3>
        <p className="text-gray-400 mb-6">
          Sustainable solutions for the web industry
        </p>
        
        <div className="flex justify-center gap-4 mb-8">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl transition-all duration-300 hover:shadow-lg ${social.color} hover:text-white`}
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} NovaTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}