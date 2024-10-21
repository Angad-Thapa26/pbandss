import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Notice } from '../types';

const Notices: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    // In a real application, you would fetch notices from an API
    // For now, we'll use localStorage to simulate data persistence
    const storedNotices = localStorage.getItem('notices');
    if (storedNotices) {
      setNotices(JSON.parse(storedNotices));
    }
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Notices</h1>
      
      {notices.length === 0 ? (
        <p className="text-gray-600">No notices available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notices.map((notice) => (
            <div key={notice.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Bell className="text-blue-500 mr-2" size={24} />
                <h2 className="text-xl font-semibold">{notice.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{notice.content}</p>
              <p className="text-sm text-gray-500">
                Posted on: {new Date(notice.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notices;