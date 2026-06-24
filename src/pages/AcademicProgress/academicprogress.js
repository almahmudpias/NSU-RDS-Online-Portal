import React, { useState } from 'react';
import './academicprogress.css';
import { FiBook, FiCheckCircle, FiAlertTriangle, FiRefreshCw, FiDownload, FiPrinter } from 'react-icons/fi';
import { FiChevronDown } from "react-icons/fi";
const AcademicProgress = () => {
  const [activeTab, setActiveTab] = useState('progress');
  const [expandedCourse, setExpandedCourse] = useState(null);

  // Sample data
  const academicData = {
    cgpa: 3.42,
    creditsCompleted: 133,
    creditsRemaining: 17,
    graduationRequirement: 150,
    standing: "Senior",
    expectedGraduation: "Spring 2024",
    retakeCourses: [
      {
        code: "MAT361",
        title: "Numerical Analysis",
        semesterTaken: "Fall 2022",
        grade: "D+",
        status: "Eligible for Retake",
        replacement: "MAT362 (Advanced Numerical Methods)",
        impact: "Will replace previous grade in CGPA calculation"
      },
      {
        code: "PHY114",
        title: "Physics II",
        semesterTaken: "Spring 2021",
        grade: "F",
        status: "Retake In Progress",
        replacement: "PHY114 (Same Course)",
        impact: "Must pass to fulfill core requirement"
      }
    ],
    currentCourses: [
      {
        code: "CSE445",
        title: "Advanced Software Engineering",
        credits: 3,
        status: "In Progress",
        requirement: "Major Core"
      },
      {
        code: "CSE498",
        title: "Undergraduate Thesis",
        credits: 3,
        status: "In Progress",
        requirement: "Capstone"
      }
    ],
    completedRequirements: {
      core: { completed: 12, total: 14 },
      major: { completed: 18, total: 20 },
      electives: { completed: 9, total: 10 },
      general: { completed: 6, total: 6 }
    }
  };

  const toggleCourse = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  return (
    <div className="academic-progress-container">
      {/* Header Section */}
      <div className="progress-header">
        <h1>Academic <span className="highlight">Progress</span></h1>
        <p>Track your degree completion and performance</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card cgpa">
          <div className="summary-icon">
            <FiBook />
          </div>
          <div className="summary-content">
            <span className="summary-label">CGPA</span>
            <span className="summary-value">{academicData.cgpa.toFixed(2)}</span>
            <div className="progress-bar-container">
              <div 
                className="progress-bar" 
                style={{ width: `${(academicData.cgpa / 4.0) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="summary-card credits">
          <div className="summary-icon">
            <FiCheckCircle />
          </div>
          <div className="summary-content">
            <span className="summary-label">Credits Completed</span>
            <span className="summary-value">
              {academicData.creditsCompleted}/{academicData.graduationRequirement}
            </span>
            <div className="progress-bar-container">
              <div 
                className="progress-bar" 
                style={{ width: `${(academicData.creditsCompleted / academicData.graduationRequirement) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="summary-card standing">
          <div className="summary-icon">
            <span>{academicData.standing.charAt(0)}</span>
          </div>
          <div className="summary-content">
            <span className="summary-label">Academic Standing</span>
            <span className="summary-value">{academicData.standing}</span>
            <span className="summary-subtext">Expected Graduation: {academicData.expectedGraduation}</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="progress-tabs">
        <button 
          className={`tab-button ${activeTab === 'progress' ? 'active' : ''}`}
          onClick={() => setActiveTab('progress')}
        >
          <FiCheckCircle /> Degree Progress
        </button>
        <button 
          className={`tab-button ${activeTab === 'retake' ? 'active' : ''}`}
          onClick={() => setActiveTab('retake')}
        >
          <FiRefreshCw /> Retake Courses
        </button>
        <button 
          className={`tab-button ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          <FiBook /> Current Courses
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'progress' && (
          <div className="progress-content">
            <h3>Degree Requirement Completion</h3>
            
            <div className="requirements-grid">
              <div className="requirement-card">
                <h4>Core Courses</h4>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${(academicData.completedRequirements.core.completed / academicData.completedRequirements.core.total) * 100}%` }}
                  ></div>
                </div>
                <div className="requirement-stats">
                  <span>{academicData.completedRequirements.core.completed}/{academicData.completedRequirements.core.total} courses</span>
                  <span>{Math.round((academicData.completedRequirements.core.completed / academicData.completedRequirements.core.total) * 100)}%</span>
                </div>
              </div>
              
              <div className="requirement-card">
                <h4>Major Courses</h4>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${(academicData.completedRequirements.major.completed / academicData.completedRequirements.major.total) * 100}%` }}
                  ></div>
                </div>
                <div className="requirement-stats">
                  <span>{academicData.completedRequirements.major.completed}/{academicData.completedRequirements.major.total} courses</span>
                  <span>{Math.round((academicData.completedRequirements.major.completed / academicData.completedRequirements.major.total) * 100)}%</span>
                </div>
              </div>
              
              <div className="requirement-card">
                <h4>Electives</h4>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${(academicData.completedRequirements.electives.completed / academicData.completedRequirements.electives.total) * 100}%` }}
                  ></div>
                </div>
                <div className="requirement-stats">
                  <span>{academicData.completedRequirements.electives.completed}/{academicData.completedRequirements.electives.total} courses</span>
                  <span>{Math.round((academicData.completedRequirements.electives.completed / academicData.completedRequirements.electives.total) * 100)}%</span>
                </div>
              </div>
              
              <div className="requirement-card">
                <h4>General Education</h4>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${(academicData.completedRequirements.general.completed / academicData.completedRequirements.general.total) * 100}%` }}
                  ></div>
                </div>
                <div className="requirement-stats">
                  <span>{academicData.completedRequirements.general.completed}/{academicData.completedRequirements.general.total} courses</span>
                  <span>{Math.round((academicData.completedRequirements.general.completed / academicData.completedRequirements.general.total) * 100)}%</span>
                </div>
              </div>
            </div>
            
            <div className="action-section">
              <button className="generate-plan">Generate Degree Plan</button>
              <button className="contact-advisor">Contact Advisor</button>
            </div>
          </div>
        )}

        {activeTab === 'retake' && (
          <div className="retake-content">
            <h3>Courses Eligible for Retake</h3>
            <p className="subtext">These courses can be retaken to improve your GPA</p>
            
            <div className="retake-list">
              {academicData.retakeCourses.map((course, index) => (
                <div key={index} className="retake-card">
                  <div className="retake-header" onClick={() => toggleCourse(index)}>
                    <div className="course-info">
                      <h4>{course.code} - {course.title}</h4>
                      <div className="course-meta">
                        <span>Semester: {course.semesterTaken}</span>
                        <span>Grade: <span className={`grade-badge ${course.grade === 'F' ? 'fail' : 'low'}`}>{course.grade}</span></span>
                        <span className={`status-badge ${course.status.includes('Progress') ? 'in-progress' : 'eligible'}`}>
                          {course.status}
                        </span>
                      </div>
                    </div>
                    <FiChevronDown className={`expand-icon ${expandedCourse === index ? 'expanded' : ''}`} />
                  </div>
                  
                  {expandedCourse === index && (
                    <div className="retake-details">
                      <div className="detail-row">
                        <span>Replacement Course:</span>
                        <span>{course.replacement}</span>
                      </div>
                      <div className="detail-row">
                        <span>Impact on CGPA:</span>
                        <span>{course.impact}</span>
                      </div>
                      <div className="retake-actions">
                        <button className="register-button">Register for Retake</button>
                        <button className="advisor-button">Consult Advisor</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'current' && (
          <div className="current-content">
            <h3>Current Semester Courses</h3>
            
            <div className="current-courses-grid">
              {academicData.currentCourses.map((course, index) => (
                <div key={index} className="course-card">
                  <div className="course-code">{course.code}</div>
                  <div className="course-title">{course.title}</div>
                  <div className="course-meta">
                    <span>{course.credits} Credits</span>
                    <span>{course.requirement}</span>
                  </div>
                  <div className={`course-status ${course.status.toLowerCase().replace(' ', '-')}`}>
                    {course.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="action-bar">
        <button className="request-button">
          Request Academic Review
        </button>
        <div className="export-options">
          <button className="export-button">
            <FiDownload /> Export Progress Report
          </button>
          <button className="export-button">
            <FiPrinter /> Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicProgress;