import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Request {
  id: string;
  topic: string;
  availability: string;
  message: string;
  createdAt: string;
  menteeId: string;
}

const MentorDashboard = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const mentorId = '1'; // Replace this with real user ID from context/auth later

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(`https://mentorshipprojectbackend.onrender.com/api/requests/mentor/${mentorId}`);
        setRequests(res.data);
      } catch (err) {
        console.error('Failed to fetch requests:', err);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Mentorship Requests</h2>
      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        requests.map((req) => (
          <div key={req.id} style={{
            border: '1px solid #ccc',
            marginBottom: '1rem',
            padding: '1rem',
            borderRadius: '6px'
          }}>
            <p><strong>Topic:</strong> {req.topic}</p>
            <p><strong>Availability:</strong> {req.availability}</p>
            <p><strong>Message:</strong> {req.message}</p>
            <p><small>Submitted: {new Date(req.createdAt).toLocaleString()}</small></p>
          </div>
        ))
      )}
    </div>
  );
};

export default MentorDashboard;
