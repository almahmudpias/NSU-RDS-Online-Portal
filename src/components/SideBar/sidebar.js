// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="scrollable-content">
      <ul>
        <li><Link to="/dashboard">🏠 Dashboard</Link></li>
        <li><Link to="/advising">📝 Advising</Link></li>
        <li><Link to="/grade-history">📃 Grade History</Link></li>
        <li><Link to="/payments">💳 Payments</Link></li>
        <li><Link to="/attendance">📆 Attendance</Link></li>
        <li><Link to="/academic-progress">📈 Academic Progress</Link></li>
        <li><Link to="/degree-apply">🎓 Degree Apply</Link></li>
        <li><Link to="/course-drop">📄 Course Drop</Link></li>
        <li><Link to="/user-guide">📑 User Guide</Link></li>
        <li><Link to="/faculty-evaluation">💬 Faculty Evaluation</Link></li>
        <li><Link to="/services">🛠 Services</Link></li>
        <li><Link to="/settings">⚙ Settings</Link></li>
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;