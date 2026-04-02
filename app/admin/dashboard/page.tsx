"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';
import { FaUsers, FaBriefcase, FaStar, FaBlog, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      // Decode token or fetch user info
      setUser({ name: 'Admin', email: 'admin@novatech.com' });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  const stats = [
    { title: 'Team Members', value: '4', icon: FaUsers, color: 'from-blue-500 to-cyan-500' },
    { title: 'Projects', value: '5', icon: FaBriefcase, color: 'from-green-500 to-emerald-500' },
    { title: 'Reviews', value: '5', icon: FaStar, color: 'from-yellow-500 to-orange-500' },
    { title: 'Blog Posts', value: '4', icon: FaBlog, color: 'from-purple-500 to-pink-500' },
  ];

  const menuItems = [
    { name: 'Team Members', path: '/admin/team', icon: FaUsers },
    { name: 'Projects', path: '/admin/projects', icon: FaBriefcase },
    { name: 'Reviews', path: '/admin/reviews', icon: FaStar },
    { name: 'Blog Posts', path: '/admin/blog', icon: FaBlog },
    { name: 'Subscribers', path: '/admin/subscribers', icon: FaEnvelope },
  ];

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-full w-64 bg-black/50 backdrop-blur-xl border-r border-white/10 p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
            NovaTech Admin
          </h1>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-600/20 hover:text-white transition-all group"
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          
          <button
            onClick={handleLogout}
            className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-600/20 transition-all"
          >
            <FaSignOutAlt size={18} />
            <span>Logout</span>
          </button>
        </aside>

        {/* Main Content */}
        <main className="ml-64 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400">Welcome back, {user?.name || 'Admin'}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-xl`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-sm">{stat.title}</p>
                    <p className="text-white text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className="text-white/50 text-4xl" />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/admin/team/new"
                className="text-center p-4 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 transition-all"
              >
                Add Team Member
              </Link>
              <Link
                href="/admin/projects/new"
                className="text-center p-4 rounded-xl bg-green-600/20 hover:bg-green-600/30 text-green-300 transition-all"
              >
                Add Project
              </Link>
              <Link
                href="/admin/blog/new"
                className="text-center p-4 rounded-xl bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 transition-all"
              >
                Write Blog Post
              </Link>
              <Link
                href="/admin/reviews/new"
                className="text-center p-4 rounded-xl bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-300 transition-all"
              >
                Add Review
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}