"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';
import { FaSave, FaTimes } from 'react-icons/fa';

export default function NewTeamMember() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    expertise: '',
    linkedin: '',
    github: '',
    twitter: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const expertiseArray = formData.expertise.split(',').map(s => s.trim());
    
    try {
      const res = await fetch('/api/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          role: formData.role,
          bio: formData.bio,
          expertise: expertiseArray,
          social: {
            linkedin: formData.linkedin,
            github: formData.github,
            twitter: formData.twitter,
          },
        }),
      });
      
      if (res.ok) {
        router.push('/admin/team');
      } else {
        alert('Failed to create team member');
      }
    } catch (error) {
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="ml-64 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Add Team Member</h1>
            <Link
              href="/admin/team"
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-xl transition-all"
            >
              <FaTimes /> Cancel
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl">
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Role *</label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Bio</label>
                <textarea
                  rows={4}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Expertise (comma separated)</label>
                <input
                  type="text"
                  placeholder="React, Next.js, Three.js"
                  value={formData.expertise}
                  onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white mb-2">LinkedIn URL</label>
                  <input
                    type="text"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">GitHub URL</label>
                  <input
                    type="text"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Twitter URL</label>
                  <input
                    type="text"
                    value={formData.twitter}
                    onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <FaSave /> {loading ? 'Saving...' : 'Save Team Member'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}