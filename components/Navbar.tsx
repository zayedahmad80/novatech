"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

 const navLinks = [
  { name: "Home", href: "/", action: "home" },
  { name: "Services", href: "#services", action: "services" },
  { name: "Team", href: "#team", action: "team" },
  { name: "Projects", href: "#projects", action: "projects" },
  { name: "Blog", href: "/blog", action: "blog" },
  { name: "Contact", href: "/contact", action: "contact" },
];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navLinks[0]) => {
  if (item.action === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  } else if (item.action === "blog") {
    // Blog page - normal link (no scroll)
    setIsOpen(false);
  } else if (item.action === "contact") {
    // Contact page - normal link
    setIsOpen(false);
  } else {
    scrollToSection(e, item.action);
  }
};

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(147,51,234,0)",
                      "0 0 10px rgba(147,51,234,0.8)",
                      "0 0 0px rgba(147,51,234,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                >
                  NovaTech
                </motion.div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                />
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleClick(e, link)}
                    className="text-white hover:text-purple-400 transition-colors relative group"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg"
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleClick(e, link)}
                  className="block text-white hover:text-purple-400 transition-colors py-2 text-lg"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.nav>
      <div className="h-20" />
    </>
  );
}