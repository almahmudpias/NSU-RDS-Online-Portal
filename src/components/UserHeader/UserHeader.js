import React from 'react';
import './UserHeader.css';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import nsuLogo from '../../assets/logo.png'; // Update path if needed

function UserHeader() {
  const navigate = useNavigate();

  const user = {
    name: 'Md Abdullah Al Mahmud Pias',
    id: '2012434042',
    status: 'Active',
    department: 'ECE',
    studentType: 'Undergraduate Student',
    cgpa: 3.02,
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className="user-navbar">
      <div className="navbar-left">
        <img src={nsuLogo} alt="NSU Logo" className="logo" />
        <h1 className="dashboard-title">NSU RDS</h1>
      </div>

      <div className="user-details-navbar">
        <span> <strong>{user.name}</strong></span>
        <span>ID: <strong>{user.id}</strong></span>
        <span>Dept: <strong>{user.department}</strong></span>
        <span>Status: <strong>{user.status}</strong></span>
        <span> <strong>{user.studentType}</strong></span>
        <span>CGPA: <strong>{user.cgpa}</strong></span>
      </div>

      <div className="navbar-right">
        <button className="logout-icon" onClick={handleLogout} title="Logout">
          <FiLogOut size={20} />
        </button>
      </div>
    </header>
  );
}

export default UserHeader;
