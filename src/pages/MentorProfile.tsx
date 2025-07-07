import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Mentor {
  id: string;
  name: string;
  bio: string;
  expertise: string;
  role: string;
}

const MentorProfile = () => {
  const { id } = useParams();
  const [mentor, setMentor] = useState<Mentor | null>(null);

  useEffect(() => {
    // Replace this with real API later
    const dummyMentors: Mentor[] = [
      { id: '1', name: 'Jane Doe', bio: 'Frontend dev, React lover', expertise: 'React, Figma', role: 'MENTOR' },
      { id: '2', name: 'John Smith', bio: 'Backend pro and DevOps guy', expertise: 'Node, Docker', role: 'MENTOR' }
    ];
    const found = dummyMentors.find(m => m.id === id);
    setMentor(found || null);
  }, [id]);

  if (!mentor) return <p style={{ padding: '2rem' }}>Mentor not found</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{mentor.name}</h2>
      <p><strong>Expertise:</strong> {mentor.expertise}</p>
      <p><strong>Bio:</strong> {mentor.bio}</p>
      <button style={{
        marginTop: '1rem',
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '5px'
      }}>
        Request Mentorship
      </button>
    </div>
  );
};

export default MentorProfile;
