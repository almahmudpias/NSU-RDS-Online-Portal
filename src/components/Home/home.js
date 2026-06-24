// home.js
import React from 'react';
import './home.css';
import { useNavigate, Outlet } from 'react-router-dom';
import Sidebar from '../SideBar/sidebar'; // Import the Sidebar component

function Home() {
  const navigate = useNavigate();

  const user = {
    name: 'John Doe',
    id: '1912345',
    status: 'Active',
    department: 'CSE',
    cgpa: 3.75,
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="home-container">
      {/* Header replaces navbar */}
      
      {/* Main content with sidebar and dashboard */}
      <div className="home-main">
        {/* Use the Sidebar component instead of hardcoded sidebar */}
        <Sidebar />
        
        <main className="main-content">
          {/* Outlet will render the matched child route component */}
          <Outlet />
          
          {/* Default content when no specific route is matched */}
          {window.location.pathname === '/home' && (
            <>
              <h3>Dashboard Overview</h3>
              <p>This is your NSU RDS portal dashboard.</p>
            </>
          )}
        </main>
      </div>

      {/* Smaller footer */}
      <footer className="footer">
        <p>© 2025 NSU RDS Portal</p>
      </footer>
    </div>
  );
}

export default Home;