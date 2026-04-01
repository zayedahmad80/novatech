"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendar, FaUser, FaTag } from "react-icons/fa";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "10 Web Development Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with these emerging web development trends that are shaping the digital landscape.",
    date: "March 15, 2024",
    author: "Alex Chen",
    category: "Web Development",
    readTime: "5 min read",
    image: "/images/blog/trends.jpg",
  },
  {
    id: 2,
    title: "How Video Marketing Boosts Engagement",
    excerpt: "Discover why video content is dominating social media and how to leverage it for your brand.",
    date: "March 10, 2024",
    author: "Mike Rodriguez",
    category: "Video Marketing",
    readTime: "4 min read",
    image: "/images/blog/video.jpg",
  },
  {
    id: 3,
    title: "The Psychology of Color in Branding",
    excerpt: "Learn how color choices impact consumer behavior and brand perception.",
    date: "March 5, 2024",
    author: "Sarah Johnson",
    category: "Graphic Design",
    readTime: "6 min read",
    image: "/images/blog/color.jpg",
  },
  {
    id: 4,
    title: "SEO Strategies That Actually Work in 2024",
    excerpt: "Practical SEO techniques that deliver real results without cutting corners.",
    date: "February 28, 2024",
    author: "Emma Watson",
    category: "Marketing",
    readTime: "7 min read",
    image: "/images/blog/seo.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Insights, tips, and stories from our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 group"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <span className="text-6xl">{post.id === 1 ? "🚀" : post.id === 2 ? "🎬" : post.id === 3 ? "🎨" : "📈"}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><FaCalendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><FaUser size={12} /> {post.author}</span>
                    <span className="flex items-center gap-1"><FaTag size={12} /> {post.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-400">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-purple-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}