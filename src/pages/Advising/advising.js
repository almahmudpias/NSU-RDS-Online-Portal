import React, { useState } from 'react';
import './Advising.css';
import advisorPhoto from '../../assets/advisor.jpg';
import studentPhoto from '../../assets/photo.jpg';
import { FiMessageSquare, FiCalendar, FiBook, FiCheckCircle, FiChevronDown } from 'react-icons/fi';

const Advising = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [expandedCourse, setExpandedCourse] = useState(null);

  // Sample data
  const student = {
    name: "Md Abdullah Al Mahmud Pias",
    id: "ID-2012434042",
    email: "abdullah.pias@northsouth.edu",
    program: "B.Sc. in Computer Science & Engineering",
    standing: "Senior",
    cgpa: "3.03",
    completedCredits: "133",
    photo: studentPhoto
  };

  const advisor = {
    name: "Dr. Riasat Khan ",
    initial: "RTK",
    title: "Associate Professor, CSE Department",
    email: "riasat.khan@northsouth.edu",
    office: "SAC 920",
    hours: "Mon-Wed 10:00 AM - 2:00 PM",
    photo: advisorPhoto
  };

  const recommendedCourses = [
    {
      code: "CSE445",
      title: "Advanced Software Engineering",
      credits: 3,
      description: "Covers advanced topics in software engineering including architectural patterns, formal methods, and software project management.",
      prerequisites: ["CSE327", "CSE332"],
      availability: "Spring 2023",
      status: "Recommended"
    },
    {
      code: "CSE498",
      title: "Undergraduate Thesis",
      credits: 3,
      description: "Individual research project under faculty supervision culminating in a thesis document and presentation.",
      prerequisites: ["Completion of 120 credits"],
      availability: "Spring 2023",
      status: "Required"
    },
    {
      code: "CSE425",
      title: "Computer Networks",
      credits: 3,
      description: "Fundamentals of computer networking including protocols, network architecture, and performance analysis.",
      prerequisites: ["CSE325"],
      availability: "Spring 2023",
      status: "Recommended"
    }
  ];

  const degreeProgress = {
    totalCredits: 130,
    completedCredits: 120,
    coreCourses: {
      completed: 12,
      total: 14
    },
    majorCourses: {
      completed: 18,
      total: 20
    },
    electiveCourses: {
      completed: 9,
      total: 10
    }
  };

  const toggleCourseExpand = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  return (
    <div className="advising-container">
      {/* Header Section */}
      <div className="advising-header">
        <h1>Academic Advising <span className="highlight">Portal</span></h1>
        <p>Plan your academic journey with guidance from your advisor</p>
      </div>

      {/* Main Content Grid */}
      <div className="advising-grid">
        {/* Student Profile Card */}
        <div className="profile-card advising-card">
  <div className="profile-header">
    <img src={student.photo} alt={student.name} className="profile-photo" />
    <div className="profile-info">
      <h2>{student.name}</h2>
      <p className="student-id">{student.id}</p>
      <div className="student-meta">
        <span>{student.program}</span>
        <span>{student.standing}</span>
      </div>
    </div>
  </div>
  <div className="profile-stats">
    <div className="stat-item">
      <span className="stat-value">{student.cgpa}</span>
      <span className="stat-label">CGPA</span>
    </div>
    <div className="stat-item">
      <span className="stat-value">{student.completedCredits}/{degreeProgress.totalCredits}</span>
      <span className="stat-label">Credits</span>
    </div>
  </div>
  {/* Add the three advising buttons here */}
  <div className="advising-buttons">
    <button className="advising-button pre-advising">
      <span>1.</span> Pre Advising
    </button>
    <button className="advising-button advising-window">
      <span>2.</span> Advising Window
    </button>
    <button className="advising-button advising-slip">
      <span>3.</span> Advising Slip
    </button>
  </div>
  
  
</div>

        {/* Advisor Card */}
        <div className="advisor-card advising-card">
          <div className="advisor-header">
            <img src={advisor.photo} alt={advisor.name} className="advisor-photo" />
            <div className="advisor-info">
              <h3>Your Advisor</h3>
              <h2>{advisor.name}</h2>
              <p>{advisor.initial}</p>
              <p>{advisor.title}</p>
            </div>
          </div>
          <div className="advisor-details">
            <div className="detail-item">
              <span>Email</span>
              <span>{advisor.email}</span>
            </div>
            <div className="detail-item">
              <span>Office</span>
              <span>{advisor.office}</span>
            </div>
            <div className="detail-item">
              <span>Office Hours</span>
              <span>{advisor.hours}</span>
            </div>
          </div>
          <div className="advisor-actions">
            <button className="action-button message">
              <FiMessageSquare /> Send Message
            </button>
            <button className="action-button schedule">
              <FiCalendar /> Schedule Meeting
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="content-card advising-card">
          {/* Navigation Tabs */}
          <div className="advising-tabs">
            <button 
              className={`tab-button ${activeTab === 'courses' ? 'active' : ''}`}
              onClick={() => setActiveTab('courses')}
            >
              <FiBook /> Course Recommendations
            </button>
            <button 
              className={`tab-button ${activeTab === 'progress' ? 'active' : ''}`}
              onClick={() => setActiveTab('progress')}
            >
              <FiCheckCircle /> Degree Progress
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'courses' ? (
              <div className="courses-content">
                <h3>Recommended Courses for Next Semester</h3>
                <p className="subtext">Based on your academic progress and degree requirements</p>
                
                <div className="courses-list">
                  {recommendedCourses.map((course, index) => (
                    <div 
                      key={course.code} 
                      className={`course-card ${course.status.toLowerCase()}`}
                      onClick={() => toggleCourseExpand(index)}
                    >
                      <div className="course-header">
                        <div className="course-code">{course.code}</div>
                        <div className="course-title">{course.title}</div>
                        <div className="course-credits">{course.credits} Credits</div>
                        <div className="course-status">{course.status}</div>
                        <FiChevronDown className={`expand-icon ${expandedCourse === index ? 'expanded' : ''}`} />
                      </div>
                      
                      {expandedCourse === index && (
                        <div className="course-details">
                          <p>{course.description}</p>
                          <div className="detail-row">
                            <span>Prerequisites:</span>
                            <span>{course.prerequisites.join(', ')}</span>
                          </div>
                          <div className="detail-row">
                            <span>Availability:</span>
                            <span>{course.availability}</span>
                          </div>
                          <div className="course-actions">
                            <button className="add-button">Add to Plan</button>
                            <button className="info-button">View Details</button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="progress-content">
                <h3>Your Degree Progress</h3>
                <p className="subtext">Track your completion of degree requirements</p>
                
                <div className="progress-summary">
                  <div className="progress-item">
                    <div className="progress-title">Overall Completion</div>
                    <div className="progress-bar-container">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${(degreeProgress.completedCredits / degreeProgress.totalCredits) * 100}%` }}
                      ></div>
                    </div>
                    <div className="progress-value">
                      {degreeProgress.completedCredits}/{degreeProgress.totalCredits} Credits ({Math.round((degreeProgress.completedCredits / degreeProgress.totalCredits) * 100)}%)
                    </div>
                  </div>
                  
                  <div className="progress-categories">
                    <div className="category-item">
                      <div className="category-title">Core Courses</div>
                      <div className="progress-bar-container">
                        <div 
                          className="progress-bar" 
                          style={{ width: `${(degreeProgress.coreCourses.completed / degreeProgress.coreCourses.total) * 100}%` }}
                        ></div>
                      </div>
                      <div className="progress-value">
                        {degreeProgress.coreCourses.completed}/{degreeProgress.coreCourses.total} Courses
                      </div>
                    </div>
                    
                    <div className="category-item">
                      <div className="category-title">Major Courses</div>
                      <div className="progress-bar-container">
                        <div 
                          className="progress-bar" 
                          style={{ width: `${(degreeProgress.majorCourses.completed / degreeProgress.majorCourses.total) * 100}%` }}
                        ></div>
                      </div>
                      <div className="progress-value">
                        {degreeProgress.majorCourses.completed}/{degreeProgress.majorCourses.total} Courses
                      </div>
                    </div>
                    
                    <div className="category-item">
                      <div className="category-title">Electives</div>
                      <div className="progress-bar-container">
                        <div 
                          className="progress-bar" 
                          style={{ width: `${(degreeProgress.electiveCourses.completed / degreeProgress.electiveCourses.total) * 100}%` }}
                        ></div>
                      </div>
                      <div className="progress-value">
                        {degreeProgress.electiveCourses.completed}/{degreeProgress.electiveCourses.total} Courses
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="action-section">
                  <button className="generate-plan">Generate Advising Plan</button>
                  <button className="print-plan">Print Progress Report</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advising;
