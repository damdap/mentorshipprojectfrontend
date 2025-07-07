import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Mentor {
  id: string;
  name: string;
  bio: string;
  expertise: string;
  role: string;
}

const MentorDirectory = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    const dummyMentors: Mentor[] = [
      {
        id: '1',
        name: 'Jane Doe',
        bio: 'Frontend Engineer with 5 years experience.',
        expertise: 'React, UI/UX',
        role: 'MENTOR',
      },
      {
        id: '2',
        name: 'John Smith',
        bio: 'Backend specialist and DevOps mentor.',
        expertise: 'Node.js, Docker',
        role: 'MENTOR',
      },
    ];
    setMentors(dummyMentors);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Mentor Directory</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '8px',
              width: '250px',
            }}
          >
            <h3>{mentor.name}</h3>
            <p>
              <strong>Expertise:</strong> {mentor.expertise}
            </p>
            <p>{mentor.bio}</p>

            <Link to={`/mentors/${mentor.id}`}>
              <button
                style={{
                  marginTop: '0.5rem',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                View Profile
              </button>
            </Link>

            <button
              style={{
                marginTop: '0.5rem',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Request Mentorship
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorDirectory;
