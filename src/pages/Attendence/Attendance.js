import React, { useState } from 'react';
import './Attendence.css';
import { FiCalendar, FiUserCheck, FiUserX, FiDownload, FiPrinter, FiChevronDown } from 'react-icons/fi';

const Attendance = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [expandedCourse, setExpandedCourse] = useState(null);

  // Sample data
  const attendanceData = {
    summary: {
      totalClasses: 42,
      attended: 36,
      percentage: 85.7,
      missed: 6
    },
    currentCourses: [
      {
        code: "CSE445",
        title: "Advanced Software Engineering",
        instructor: "Dr. Riasat Khan",
        schedule: "Mon/Wed 10:00 AM - 11:30 AM",
        attendance: {
          attended: 12,
          total: 14,
          percentage: 85.7,
          lastUpdated: "May 15, 2023"
        },
        sessions: [
          { date: "May 15, 2023", status: "Present", time: "10:05 AM" },
          { date: "May 10, 2023", status: "Absent", reason: "Medical Leave" },
          { date: "May 8, 2023", status: "Present", time: "10:02 AM" },
          { date: "May 3, 2023", status: "Present", time: "10:07 AM" }
        ]
      },
      {
        code: "CSE425",
        title: "Computer Networks",
        instructor: "Dr. Ahmed Rahman",
        schedule: "Tue/Thu 2:00 PM - 3:30 PM",
        attendance: {
          attended: 10,
          total: 12,
          percentage: 83.3,
          lastUpdated: "May 14, 2023"
        },
        sessions: [
          { date: "May 14, 2023", status: "Present", time: "2:01 PM" },
          { date: "May 9, 2023", status: "Present", time: "2:05 PM" },
          { date: "May 7, 2023", status: "Absent", reason: "Personal" }
        ]
      }
    ],
    previousCourses: [
      {
        code: "CSE327",
        title: "Software Engineering",
        semester: "Fall 2022",
        instructor: "Dr. Fatima Ahmed",
        attendance: {
          attended: 26,
          total: 28,
          percentage: 92.8
        }
      },
      {
        code: "CSE332",
        title: "Database Systems",
        semester: "Fall 2022",
        instructor: "Dr. Kamal Hossain",
        attendance: {
          attended: 24,
          total: 28,
          percentage: 85.7
        }
      }
    ]
  };

  const toggleCourse = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  return (
    <div className="attendance-container">
      {/* Header Section */}
      <div className="attendance-header">
        <h1>Attendance <span className="highlight">Tracking</span></h1>
        <p>Monitor your class attendance records</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card total">
          <div className="summary-icon">
            <FiCalendar />
          </div>
          <div className="summary-content">
            <span className="summary-label">Total Classes</span>
            <span className="summary-value">{attendanceData.summary.totalClasses}</span>
          </div>
        </div>
        <div className="summary-card attended">
          <div className="summary-icon">
            <FiUserCheck />
          </div>
          <div className="summary-content">
            <span className="summary-label">Attended</span>
            <span className="summary-value">{attendanceData.summary.attended}</span>
          </div>
        </div>
        <div className="summary-card percentage">
          <div className="summary-icon">
            <span>{attendanceData.summary.percentage}%</span>
          </div>
          <div className="summary-content">
            <span className="summary-label">Attendance Rate</span>
            <div className="progress-bar-container">
              <div 
                className="progress-bar" 
                style={{ width: `${attendanceData.summary.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="summary-card missed">
          <div className="summary-icon">
            <FiUserX />
          </div>
          <div className="summary-content">
            <span className="summary-label">Missed Classes</span>
            <span className="summary-value">{attendanceData.summary.missed}</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="attendance-tabs">
        <button 
          className={`tab-button ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          Current Courses
        </button>
        <button 
          className={`tab-button ${activeTab === 'previous' ? 'active' : ''}`}
          onClick={() => setActiveTab('previous')}
        >
          Previous Courses
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'current' ? (
          <div className="current-courses">
            <h3>Current Semester Attendance</h3>
            <div className="course-list">
              {attendanceData.currentCourses.map((course, index) => (
                <div key={index} className="course-card">
                  <div className="course-header" onClick={() => toggleCourse(index)}>
                    <div className="course-info">
                      <h4>{course.code} - {course.title}</h4>
                      <div className="course-meta">
                        <span>{course.instructor}</span>
                        <span>{course.schedule}</span>
                      </div>
                    </div>
                    <div className="attendance-stats">
                      <span className={`attendance-percentage ${getPercentageClass(course.attendance.percentage)}`}>
                        {course.attendance.percentage}%
                      </span>
                      <span>
                        {course.attendance.attended}/{course.attendance.total} classes
                      </span>
                    </div>
                    <FiChevronDown className={`expand-icon ${expandedCourse === index ? 'expanded' : ''}`} />
                  </div>
                  
                  {expandedCourse === index && (
                    <div className="course-details">
                      <div className="detailed-stats">
                        <div className="stat-item">
                          <span>Last Updated:</span>
                          <span>{course.attendance.lastUpdated}</span>
                        </div>
                        <div className="stat-item">
                          <span>Attendance Requirement:</span>
                          <span>75% to sit for final exam</span>
                        </div>
                      </div>
                      
                      <h5>Recent Sessions</h5>
                      <div className="sessions-table">
                        <table>
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Time/Reason</th>
                            </tr>
                          </thead>
                          <tbody>
                            {course.sessions.map((session, i) => (
                              <tr key={i}>
                                <td>{session.date}</td>
                                <td>
                                  <span className={`status-badge ${session.status.toLowerCase()}`}>
                                    {session.status}
                                  </span>
                                </td>
                                <td>
                                  {session.status === "Present" ? (
                                    <span className="time">{session.time}</span>
                                  ) : (
                                    <span className="reason">{session.reason}</span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="previous-courses">
            <h3>Previous Semesters Attendance</h3>
            <div className="course-table">
              <table>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Semester</th>
                    <th>Instructor</th>
                    <th>Attended</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.previousCourses.map((course, index) => (
                    <tr key={index}>
                      <td>{course.code}</td>
                      <td>{course.title}</td>
                      <td>{course.semester}</td>
                      <td>{course.instructor}</td>
                      <td>{course.attendance.attended}/{course.attendance.total}</td>
                      <td>
                        <span className={`attendance-percentage ${getPercentageClass(course.attendance.percentage)}`}>
                          {course.attendance.percentage}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="action-bar">
        <button className="request-button">
          Request Attendance Review
        </button>
        <div className="export-options">
          <button className="export-button">
            <FiDownload /> Export Records
          </button>
          <button className="export-button">
            <FiPrinter /> Print
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to determine percentage class
const getPercentageClass = (percentage) => {
  if (percentage >= 90) return 'excellent';
  if (percentage >= 75) return 'good';
  if (percentage >= 60) return 'warning';
  return 'danger';
};

export default Attendance;