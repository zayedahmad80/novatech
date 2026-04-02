"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;
  expertise: string[];
}

export default function AdminTeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await fetch('/api/team');
      const data = await res.json();
      setTeam(data);
    } catch (error) {
      console.error('Failed to fetch team:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      try {
        await fetch(`/api/team/${id}`, { method: 'DELETE' });
        fetchTeam();
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
            <h1 className="text-3xl font-bold text-white">Team Members</h1>
            <Link
              href="/admin/team/new"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition-all"
            >
              <FaPlus size={14} /> Add Member
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
                    <th className="text-left p-4 text-white">Name</th>
                    <th className="text-left p-4 text-white">Role</th>
                    <th className="text-left p-4 text-white">Skills</th>
                    <th className="text-left p-4 text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {team.map((member) => (
                    <tr key={member._id} className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-4 text-white">{member.name}</td>
                      <td className="p-4 text-gray-300">{member.role}</td>
                      <td className="p-4 text-gray-300">
                        <div className="flex flex-wrap gap-1">
                          {member.expertise?.slice(0, 2).map((skill, i) => (
                            <span key={i} className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Link
                            href={`/admin/team/edit/${member._id}`}
                            className="p-2 text-blue-400 hover:bg-blue-400/20 rounded-lg transition-all"
                          >
                            <FaEdit />
                          </Link>
                          <button
                            onClick={() => handleDelete(member._id)}
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