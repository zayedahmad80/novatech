"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendar, FaUser, FaTag, FaArrowLeft } from "react-icons/fa";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";

const blogPosts = {
  1: {
    title: "10 Web Development Trends to Watch in 2024",
    date: "March 15, 2024",
    author: "Alex Chen",
    category: "Web Development",
    readTime: "5 min read",
    content: `
      <p>The web development landscape is constantly evolving. Here are the top trends shaping 2024:</p>
      
      <h2>1. AI-Powered Development</h2>
      <p>Artificial intelligence is revolutionizing how we code. From GitHub Copilot to ChatGPT, developers are leveraging AI to write cleaner code faster.</p>
      
      <h2>2. Serverless Architecture</h2>
      <p>More businesses are moving to serverless solutions for better scalability and cost efficiency.</p>
      
      <h2>3. WebAssembly</h2>
      <p>Running high-performance applications in the browser is becoming mainstream with WebAssembly.</p>
      
      <h2>4. Motion UI</h2>
      <p>Micro-interactions and smooth animations are becoming standard for engaging user experiences.</p>
      
      <h2>5. Privacy-First Development</h2>
      <p>With increasing privacy concerns, developers are building more secure and transparent applications.</p>
    `,
  },
  2: {
    title: "How Video Marketing Boosts Engagement",
    date: "March 10, 2024",
    author: "Mike Rodriguez",
    category: "Video Marketing",
    readTime: "4 min read",
    content: `
      <p>Video content is dominating the digital landscape. Here's why your brand needs video marketing:</p>
      
      <h2>Higher Engagement Rates</h2>
      <p>Videos generate 1200% more shares than text and images combined.</p>
      
      <h2>Improved SEO</h2>
      <p>Websites with video content are 53 times more likely to rank on the first page of Google.</p>
      
      <h2>Better Conversion Rates</h2>
      <p>Landing pages with video can increase conversions by up to 80%.</p>
      
      <h2>Enhanced Brand Recall</h2>
      <p>Viewers retain 95% of a message when watching video, compared to 10% when reading text.</p>
    `,
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const id = Number(params.id);
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <>
        <CustomCursor />
        <ParticleBackground />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-2xl text-white mb-4">Post not found</h1>
            <Link href="/blog" className="text-purple-400 hover:text-purple-300">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-purple-400 hover:text-white mb-8 transition-colors">
            <FaArrowLeft /> Back to Blog
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1"><FaCalendar /> {post.date}</span>
              <span className="flex items-center gap-1"><FaUser /> {post.author}</span>
              <span className="flex items-center gap-1"><FaTag /> {post.category}</span>
              <span className="text-purple-400">{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{post.title}</h1>

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
}