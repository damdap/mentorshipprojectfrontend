import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to MentorMatch</h1>
        <p>Connecting aspiring minds with experienced mentors across industries.</p>
        <Link to="/register">
          <button className="cta-button">Get Started</button>
        </Link>
      </header>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div>
            <h3>1. Sign Up</h3>
            <p>Create your mentor or mentee profile in minutes.</p>
          </div>
          <div>
            <h3>2. Connect</h3>
            <p>Mentees browse mentors and request sessions.</p>
          </div>
          <div>
            <h3>3. Learn & Grow</h3>
            <p>Meet virtually, track sessions, and share feedback.</p>
          </div>
        </div>
      </section>

      <section className="roles">
        <h2>For Everyone</h2>
        <div className="role-cards">
          <div className="card">
            <h3>Mentors</h3>
            <p>Share your experience and give back.</p>
          </div>
          <div className="card">
            <h3>Mentees</h3>
            <p>Find guidance and grow your career.</p>
          </div>
          <div className="card">
            <h3>Admins</h3>
            <p>Manage users and sessions efficiently.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} MentorMatch. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
