"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';
import { FaSave, FaTimes } from 'react-icons/fa';

export default function NewProject() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    desc: '',
    stats: '',
    link: '',
    github: '',
    featured: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        router.push('/admin/projects');
      } else {
        alert('Failed to create project');
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
            <h1 className="text-3xl font-bold text-white">Add Project</h1>
            <Link
              href="/admin/projects"
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-xl transition-all"
            >
              <FaTimes /> Cancel
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl">
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Category *</label>
                <input
                  type="text"
                  required
                  placeholder="Web Development, Video Editing, Graphic Design, Marketing"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Description *</label>
                <textarea
                  rows={3}
                  required
                  value={formData.desc}
                  onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Stats (e.g., 10k+ visitors)</label>
                <input
                  type="text"
                  value={formData.stats}
                  onChange={(e) => setFormData({ ...formData, stats: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Live Demo URL</label>
                  <input
                    type="text"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
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
              </div>

              <div>
                <label className="flex items-center gap-2 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4"
                  />
                  Featured Project
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <FaSave /> {loading ? 'Saving...' : 'Save Project'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}