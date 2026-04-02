"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

interface Project {
  _id: string;
  title: string;
  category: string;
  stats: string;
  featured: boolean;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await fetch(`/api/projects/${id}`, { method: 'DELETE' });
        fetchProjects();
      } catch (error) {
        console.error('Failed to delete:', error);
      }
    }
  };

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="ml-64 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Projects</h1>
            <Link
              href="/admin/projects/new"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition-all"
            >
              <FaPlus size={14} /> Add Project
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" />
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20">
              <table className="w-full">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="text-left p-4 text-white">Title</th>
                    <th className="text-left p-4 text-white">Category</th>
                    <th className="text-left p-4 text-white">Stats</th>
                    <th className="text-left p-4 text-white">Featured</th>
                    <th className="text-left p-4 text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project._id} className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-4 text-white">{project.title}</td>
                      <td className="p-4 text-gray-300">{project.category}</td>
                      <td className="p-4 text-gray-300">{project.stats}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${project.featured ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                          {project.featured ? 'Featured' : 'Standard'}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Link
                            href={`/admin/projects/edit/${project._id}`}
                            className="p-2 text-blue-400 hover:bg-blue-400/20 rounded-lg transition-all"
                          >
                            <FaEdit />
                          </Link>
                          <button
                            onClick={() => handleDelete(project._id)}
                            className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-all"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}