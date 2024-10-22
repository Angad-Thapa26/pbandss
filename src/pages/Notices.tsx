import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Notice } from '../types';

// Fallback sample data
const sampleNotices: Notice[] = [
  {
    id: 1,
    title: "IT'S DEPLOYED",
    content:"We have successfully designed, developed, and deployed this website for our valued customers.",
    date: "2024-10-22"
  },
  {
   // id: 2,
   // title: "#",
   // content: "#",
   // date: "#"
  }
];

const Notices: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetch('/.netlify/functions/api/notices');
      if (response.ok) {
        const data = await response.json();
        setNotices(data);
      } else {
        // Fallback to sample data if API call fails
        console.warn('Failed to fetch notices from API, using sample data');
        setNotices(sampleNotices);
      }
    } catch (error) {
      console.error('Error fetching notices:', error);
      // Fallback to sample data if API call fails
      setNotices(sampleNotices);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Notices</h1>
      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-2">
              <Bell className="text-blue-500 mr-2" size={24} />
              <h2 className="text-xl font-semibold">{notice.title}</h2>
            </div>
            <p className="text-gray-700 mb-2">{notice.content}</p>
            <p className="text-right text-gray-500 text-sm">
              Posted on: {new Date(notice.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
