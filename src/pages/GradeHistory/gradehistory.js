import React, { useState } from 'react';
import './Gradehistory.css';
import { FiDownload, FiPrinter, FiFilter, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const GradeHistory = () => {
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample data
  const gradeHistory = [
    {
      semester: "Spring 2023",
      gpa: "3.50",
      credits: "15",
      courses: [
        { code: "CSE445", title: "Advanced Software Engineering", credit: "3", grade: "A" },
        { code: "CSE425", title: "Computer Networks", credit: "3", grade: "A-" },
        { code: "CSE498", title: "Undergraduate Thesis", credit: "3", grade: "A" },
        { code: "MAT361", title: "Numerical Analysis", credit: "3", grade: "B+" },
        { code: "ENG105", title: "Technical Writing", credit: "3", grade: "A" }
      ]
    },
    {
      semester: "Fall 2022",
      gpa: "3.20",
      credits: "15",
      courses: [
        { code: "CSE327", title: "Software Engineering", credit: "3", grade: "B+" },
        { code: "CSE332", title: "Database Systems", credit: "3", grade: "A-" },
        { code: "CSE325", title: "Operating Systems", credit: "3", grade: "B" },
        { code: "PHY114", title: "Physics II", credit: "3", grade: "B+" },
        { code: "BUS201", title: "Principles of Management", credit: "3", grade: "A-" }
      ]
    },
    {
      semester: "Summer 2022",
      gpa: "3.80",
      credits: "9",
      courses: [
        { code: "CSE311", title: "Computer Architecture", credit: "3", grade: "A" },
        { code: "MAT221", title: "Linear Algebra", credit: "3", grade: "A" },
        { code: "ENG103", title: "Communication Skills", credit: "3", grade: "A-" }
      ]
    }
  ];

  const toggleSemester = (index) => {
    setExpandedSemester(expandedSemester === index ? null : index);
  };

  const filteredHistory = activeFilter === 'all' 
    ? gradeHistory 
    : gradeHistory.filter(sem => sem.semester.toLowerCase().includes(activeFilter));

  return (
    <div className="grade-history-container">
      {/* Header Section */}
      <div className="grade-history-header">
        <h1>Grade <span className="highlight">History</span></h1>
        <p>Review your academic performance over time</p>
      </div>

      {/* Actions Bar */}
      <div className="actions-bar">
        <div className="filter-options">
          <button 
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Semesters
          </button>
          <button 
            className={`filter-button ${activeFilter === 'spring' ? 'active' : ''}`}
            onClick={() => setActiveFilter('spring')}
          >
            Spring
          </button>
          <button 
            className={`filter-button ${activeFilter === 'fall' ? 'active' : ''}`}
            onClick={() => setActiveFilter('fall')}
          >
            Fall
          </button>
          <button 
            className={`filter-button ${activeFilter === 'summer' ? 'active' : ''}`}
            onClick={() => setActiveFilter('summer')}
          >
            Summer
          </button>
        </div>
        <div className="export-options">
          <button className="export-button">
            <FiDownload /> Export
          </button>
          <button className="export-button">
            <FiPrinter /> Print
          </button>
        </div>
      </div>

      {/* Summary Card */}
      <div className="summary-card">
        <div className="summary-item">
          <span className="summary-label">CGPA</span>
          <span className="summary-value">3.42</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Credits</span>
          <span className="summary-value">133</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Semesters Completed</span>
          <span className="summary-value">9</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Current Standing</span>
          <span className="summary-value">Senior</span>
        </div>
      </div>

      {/* Semester List */}
      <div className="semester-list">
        {filteredHistory.map((semester, index) => (
          <div key={index} className="semester-card">
            <div className="semester-header" onClick={() => toggleSemester(index)}>
              <div className="semester-info">
                <h3>{semester.semester}</h3>
                <div className="semester-stats">
                  <span>GPA: <strong>{semester.gpa}</strong></span>
                  <span>Credits: <strong>{semester.credits}</strong></span>
                </div>
              </div>
              {expandedSemester === index ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            
            {expandedSemester === index && (
              <div className="course-details">
                <table>
                  <thead>
                    <tr>
                      <th>Course Code</th>
                      <th>Course Title</th>
                      <th>Credits</th>
                      <th>Grade</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semester.courses.map((course, i) => (
                      <tr key={i}>
                        <td>{course.code}</td>
                        <td>{course.title}</td>
                        <td>{course.credit}</td>
                        <td className={`grade-cell ${course.grade.toLowerCase()}`}>{course.grade}</td>
                        <td>{calculateGradePoints(course.grade, course.credit)}</td>
                      </tr>
                    ))}
                    <tr className="semester-total">
                      <td colSpan="3"></td>
                      <td><strong>Semester GPA:</strong></td>
                      <td><strong>{semester.gpa}</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to calculate grade points
const calculateGradePoints = (grade, credit) => {
  const gradePoints = {
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'D': 1.0,
    'F': 0.0
  };
  return (gradePoints[grade] * parseFloat(credit)).toFixed(2);
};

export default GradeHistory;