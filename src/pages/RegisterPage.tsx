import React, { useState } from 'react';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'MENTEE' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} /><br />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="MENTEE">Mentee</option>
          <option value="MENTOR">Mentor</option>
        </select><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
