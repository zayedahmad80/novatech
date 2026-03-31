"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";

const membersData = {
  1: { name: "Alex Chen", role: "Lead Developer", bio: "Full-stack expert with 8 years experience in modern web technologies. Specializes in React, Next.js, and Three.js.", image: "👨‍💻", email: "alex@novatech.com" },
  2: { name: "Sarah Johnson", role: "Creative Director", bio: "Visionary designer leading innovative visual solutions. Expert in branding, UI/UX, and creative direction.", image: "🎨", email: "sarah@novatech.com" },
  3: { name: "Mike Rodriguez", role: "Video Editor", bio: "Cinematic storyteller specializing in motion graphics and post-production. 10+ years in film industry.", image: "🎬", email: "mike@novatech.com" },
  4: { name: "Emma Watson", role: "Marketing Strategist", bio: "Data-driven marketer with proven campaign success. Expert in SEO, social media, and growth strategies.", image: "📊", email: "emma@novatech.com" },
};

export default function MemberPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const member = membersData[id as keyof typeof membersData];

  if (!member) {
    return (
      <>
        <CustomCursor />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl mb-4">Member not found</h1>
            <Link href="/" className="text-purple-400 hover:text-purple-300">
              Back to Home
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <main className="min-h-screen relative">
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 to-blue-900 -z-10" />
        <div className="container mx-auto px-4 py-24">
          <button
            onClick={() => router.back()}
            className="mb-8 text-white hover:text-purple-300 transition-colors"
          >
            ← Back
          </button>
          
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center">
            <div className="text-8xl mb-6">{member.image}</div>
            <h1 className="text-5xl font-bold mb-2">{member.name}</h1>
            <p className="text-purple-400 text-xl mb-6">{member.role}</p>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">{member.bio}</p>
            <p className="text-gray-300 mb-8">{member.email}</p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}