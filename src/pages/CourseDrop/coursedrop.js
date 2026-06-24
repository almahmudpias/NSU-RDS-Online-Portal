import React, { useState } from 'react';
import './courseDrop.css';
import { FiXCircle, FiAlertTriangle, FiInfo, FiCalendar, FiChevronDown, FiDownload } from 'react-icons/fi';

const CourseDrop = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [dropReason, setDropReason] = useState('');

  // Sample data
  const currentCourses = [
    {
      id: "CSE445",
      title: "Advanced Software Engineering",
      credits: 3,
      instructor: "Dr. Riasat Khan",
      schedule: "Mon/Wed 10:00 AM - 11:30 AM",
      startDate: "Jan 10, 2023",
      endDate: "Apr 28, 2023",
      dropDeadline: "Feb 15, 2023",
      status: "Active",
      financialImpact: "No refund after Feb 1",
      academicImpact: "May delay graduation if required course"
    },
    {
      id: "CSE425",
      title: "Computer Networks",
      credits: 3,
      instructor: "Dr. Ahmed Rahman",
      schedule: "Tue/Thu 2:00 PM - 3:30 PM",
      startDate: "Jan 11, 2023",
      endDate: "Apr 29, 2023",
      dropDeadline: "Feb 16, 2023",
      status: "Active",
      financialImpact: "Partial refund before Feb 5",
      academicImpact: "Elective course - no graduation impact"
    },
    {
      id: "MAT361",
      title: "Numerical Analysis",
      credits: 3,
      instructor: "Dr. Fatima Ahmed",
      schedule: "Fri 9:00 AM - 12:00 PM",
      startDate: "Jan 13, 2023",
      endDate: "Apr 30, 2023",
      dropDeadline: "Feb 18, 2023",
      status: "Active",
      financialImpact: "Full refund before Jan 30",
      academicImpact: "Required for major - consult advisor"
    }
  ];

  const toggleCourse = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  const handleDropRequest = (courseId) => {
    setSelectedCourse(courseId);
    // In a real app, you would submit this to your backend
    console.log(`Drop request for ${courseId} with reason: ${dropReason}`);
    alert(`Drop request submitted for ${courseId}`);
    setSelectedCourse(null);
    setDropReason('');
  };

  return (
    <div className="course-drop-container">
      {/* Header Section */}
      <div className="drop-header">
        <h1>Course <span className="highlight">Drop</span></h1>
        <p>Manage your current course registrations</p>
      </div>

      {/* Warning Alert */}
      <div className="warning-alert">
        <FiAlertTriangle className="alert-icon" />
        <div className="alert-content">
          <h4>Important Drop Information</h4>
          <p>
            Dropping courses may affect your financial aid, academic progress, and graduation timeline. 
            Please review all impacts before submitting a drop request.
          </p>
        </div>
      </div>

      {/* Current Courses */}
      <div className="current-courses">
        <h3>Your Registered Courses</h3>
        <p className="subtext">Click on a course to view drop details and deadlines</p>
        
        <div className="course-list">
          {currentCourses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-header" onClick={() => toggleCourse(index)}>
                <div className="course-info">
                  <h4>{course.id} - {course.title}</h4>
                  <div className="course-meta">
                    <span>{course.instructor}</span>
                    <span>{course.schedule}</span>
                    <span>{course.credits} Credits</span>
                  </div>
                </div>
                <div className="course-status">
                  <span className="status-badge">{course.status}</span>
                  <FiChevronDown className={`expand-icon ${expandedCourse === index ? 'expanded' : ''}`} />
                </div>
              </div>
              
              {expandedCourse === index && (
                <div className="course-details">
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span>Start Date:</span>
                      <span>{course.startDate}</span>
                    </div>
                    <div className="detail-item">
                      <span>End Date:</span>
                      <span>{course.endDate}</span>
                    </div>
                    <div className="detail-item">
                      <span>Drop Deadline:</span>
                      <span className="deadline">{course.dropDeadline}</span>
                    </div>
                    <div className="detail-item">
                      <span>Financial Impact:</span>
                      <span className="financial-impact">{course.financialImpact}</span>
                    </div>
                    <div className="detail-item">
                      <span>Academic Impact:</span>
                      <span className="academic-impact">{course.academicImpact}</span>
                    </div>
                  </div>

                  {selectedCourse === course.id ? (
                    <div className="drop-form">
                      <div className="form-group">
                        <label htmlFor="dropReason">Reason for Dropping:</label>
                        <select 
                          id="dropReason" 
                          value={dropReason}
                          onChange={(e) => setDropReason(e.target.value)}
                          required
                        >
                          <option value="">Select a reason</option>
                          <option value="Schedule Conflict">Schedule Conflict</option>
                          <option value="Academic Difficulty">Academic Difficulty</option>
                          <option value="Financial Reasons">Financial Reasons</option>
                          <option value="Health Reasons">Health Reasons</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="form-actions">
                        <button 
                          className="cancel-button"
                          onClick={() => setSelectedCourse(null)}
                        >
                          Cancel
                        </button>
                        <button 
                          className="confirm-drop-button"
                          onClick={() => handleDropRequest(course.id)}
                          disabled={!dropReason}
                        >
                          Confirm Drop Request
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="drop-actions">
                      <button 
                        className="drop-button"
                        onClick={() => setSelectedCourse(course.id)}
                      >
                        <FiXCircle /> Request to Drop This Course
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Drop Policy */}
      <div className="policy-section">
        <h3>Course Drop Policy</h3>
        <div className="policy-cards">
          <div className="policy-card">
            <FiCalendar className="policy-icon" />
            <h4>Deadlines</h4>
            <ul>
              <li>Full refund: Before 10% of semester</li>
              <li>Partial refund: Before 25% of semester</li>
              <li>No refund: After 25% of semester</li>
              <li>Academic drop deadline: Week 8</li>
            </ul>
          </div>
          <div className="policy-card">
            <FiInfo className="policy-icon" />
            <h4>Important Notes</h4>
            <ul>
              <li>Dropping below full-time status may affect financial aid</li>
              <li>Required courses must be retaken</li>
              <li>W grade appears on transcript after deadline</li>
              <li>Maximum of 3 course drops allowed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="action-bar">
        <button className="contact-advisor">
          Contact Advisor Before Dropping
        </button>
        <button className="export-button">
          <FiDownload /> Export Course Schedule
        </button>
      </div>
    </div>
  );
};

export default CourseDrop;