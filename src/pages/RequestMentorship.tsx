import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // ✅ Import at the TOP, never inside a function

const RequestMentorship = () => {
  const { id } = useParams(); // mentorId from URL

  const [form, setForm] = useState({
    topic: '',
    availability: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://mentorshipprojectbackend.onrender.com/api/requests',
        {
          mentorId: id,
          ...form,
        }
      );

      alert('Mentorship request submitted successfully!');
    } catch (error: any) {
      console.error('Submission failed:', error);
      alert('Error sending request.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Request Mentorship</h2>
      <form onSubmit={handleSubmit}>
        <label>Topic:</label><br />
        <input name="topic" value={form.topic} onChange={handleChange} required /><br /><br />

        <label>Availability:</label><br />
        <input name="availability" value={form.availability} onChange={handleChange} required /><br /><br />

        <label>Message:</label><br />
        <textarea name="message" value={form.message} onChange={handleChange} required /><br /><br />

        <button type="submit" style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestMentorship;
