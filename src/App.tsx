import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './auth/Login';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import MentorDirectory from './pages/MentorDirectory';
import MentorProfile from './pages/MentorProfile';
import RequestMentorship from './pages/RequestMentorship';
import MentorDashboard from './pages/MentorDashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mentors" element={<MentorDirectory />} />
      <Route path="/mentors/:id" element={<MentorProfile />} />
      <Route path="/mentors/:id/request" element={<RequestMentorship />} />
      <Route path="/mentor/dashboard" element={<MentorDashboard />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
