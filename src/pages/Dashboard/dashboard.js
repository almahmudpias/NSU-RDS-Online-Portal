import React from 'react';
import './Dashboard.css';
import userPhoto from '../../assets/photo.jpg'; // Update with actual photo path
import notices from '../Notice/Notice'; // Import your notices data
import messages from '../Massege/Massege'; // Import your messages data

function Dashboard() {
  // Sample user data - replace with your actual data
  const user = {
    name: "Md Abdullah Al Mahmud Pias",
    id: "ID- 2012434042",
    email: "abdullah.pias@northsouth.edu",
    degree: "B.S. in Computer Science Engineering",
    semester: "Spring 2020",
    cgpa: "3.03",
    credits: "133",
    photo: userPhoto,
  };

  // Sample data for the right column cards
  const importantNotices = notices.slice(0, 3); // Get first 3 notices
  const recentMessages = messages.slice(0, 3); // Get first 3 messages

  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        {/* Left Column - Main Dashboard */}
        <div className="dashboard-left">
          {/* Welcome Header */}
          <div className="welcome-header animate-fade-in">
            <h1>Welcome, <span className="highlight-text">{user.name}</span>!</h1>
            <p className="welcome-subtext">Here's your academic overview</p>
          </div>

          {/* User Profile Card */}
          <div className="profile-card animate-slide-up">
            <div className="profile-header">
              <img 
                src={user.photo} 
                alt={user.name} 
                className="profile-photo"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/150'
                }}
              />
              <div className="profile-titles">
                <h2>{user.name}</h2>
                <p className="student-id">{user.id}</p>
              </div>
            </div>

            <div className="profile-details">
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{user.email}</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Degree</span>
                <span className="detail-value">{user.degree}</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Entry Semester</span>
                <span className="detail-value">{user.semester}</span>
              </div>
              
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-value">{user.cgpa}</div>
                  <div className="metric-label">Current CGPA</div>
                  <div className="metric-progress">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${(parseFloat(user.cgpa)/4)*100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-value">{user.credits}</div>
                  <div className="metric-label">Completed Credits</div>
                  <div className="metric-progress">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${(parseInt(user.credits)/120)*100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Additional Cards */}
        <div className="dashboard-right">
          {/* Important Notices Card */}
          <div className="side-card animate-slide-up">
            <div className="side-card-header">
              <h3>Important Notices</h3>
              <span className="side-card-badge">{notices.length}</span>
            </div>
            <div className="side-card-content">
              {importantNotices.map((notice, index) => (
                <div key={index} className="side-card-item">
                  <h4>{notice.title}</h4>
                  <p>{notice.summary}</p>
                  <span className="side-card-date">{notice.date}</span>
                </div>
              ))}
              <button className="side-card-button">View All Notices</button>
            </div>
          </div>

          {/* Messages Card */}
          <div className="side-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="side-card-header">
              <h3>Messages</h3>
              <span className="side-card-badge">{messages.length}</span>
            </div>
            <div className="side-card-content">
              {recentMessages.map((message, index) => (
                <div key={index} className="side-card-item">
                  <h4>{message.sender}</h4>
                  <p>{message.preview}</p>
                  <span className="side-card-date">{message.time}</span>
                </div>
              ))}
              <button className="side-card-button">View All Messages</button>
            </div>
          </div>

          {/* Other Card */}
          <div className="side-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="side-card-header">
              <h3>Quick Links</h3>
            </div>
            <div className="side-card-content">
              <button className="side-card-action-button">
                <i className="fas fa-calendar-alt"></i> Academic Calendar
              </button>
              <button className="side-card-action-button">
                <i className="fas fa-book"></i> Course Registration
              </button>
              <button className="side-card-action-button">
                <i className="fas fa-file-invoice-dollar"></i> Fee Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;