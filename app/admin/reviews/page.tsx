"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';
import { FaPlus, FaEdit, FaTrash, FaStar } from 'react-icons/fa';

interface Review {
  _id: string;
  name: string;
  company: string;
  role: string;
  text: string;
  rating: number;
  featured: boolean;
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this review?')) {
      try {
        await fetch(`/api/reviews/${id}`, { method: 'DELETE' });
        fetchReviews();
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
            <h1 className="text-3xl font-bold text-white">Client Reviews</h1>
            <Link
              href="/admin/reviews/new"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition-all"
            >
              <FaPlus size={14} /> Add Review
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
                    <th className="text-left p-4 text-white">Client</th>
                    <th className="text-left p-4 text-white">Company</th>
                    <th className="text-left p-4 text-white">Rating</th>
                    <th className="text-left p-4 text-white">Review</th>
                    <th className="text-left p-4 text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr key={review._id} className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-4 text-white">{review.name}</td>
                      <td className="p-4 text-gray-300">{review.company}</td>
                      <td className="p-4">
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-sm" />
                          ))}
                        </div>
                      </td>
                      <td className="p-4 text-gray-300 max-w-xs truncate">{review.text}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Link
                            href={`/admin/reviews/edit/${review._id}`}
                            className="p-2 text-blue-400 hover:bg-blue-400/20 rounded-lg transition-all"
                          >
                            <FaEdit />
                          </Link>
                          <button
                            onClick={() => handleDelete(review._id)}
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