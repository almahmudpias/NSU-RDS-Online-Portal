import React, { useState } from 'react';
import './FacultyEvaluation.css';
import { FiUser, FiStar, FiCheckCircle, FiAlertCircle, FiChevronDown, FiClock } from 'react-icons/fi';

const FacultyEvaluation = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [expandedEvaluation, setExpandedEvaluation] = useState(null);
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});

  // Sample data
  const evaluations = {
    pending: [
      {
        id: "EVAL-2023-CSE445",
        course: "CSE445 - Advanced Software Engineering",
        instructor: "Dr. Riasat Khan",
        semester: "Spring 2023",
        deadline: "May 15, 2023",
        questions: [
          { id: 1, text: "The instructor was well prepared for classes" },
          { id: 2, text: "The instructor communicated clearly" },
          { id: 3, text: "The instructor showed concern for student learning" },
          { id: 4, text: "The course materials were relevant and useful" }
        ]
      },
      {
        id: "EVAL-2023-CSE425",
        course: "CSE425 - Computer Networks",
        instructor: "Dr. Ahmed Rahman",
        semester: "Spring 2023",
        deadline: "May 16, 2023",
        questions: [
          { id: 1, text: "The instructor was well prepared for classes" },
          { id: 2, text: "The instructor communicated clearly" },
          { id: 3, text: "The instructor showed concern for student learning" },
          { id: 4, text: "The course materials were relevant and useful" }
        ]
      }
    ],
    completed: [
      {
        id: "EVAL-2022-CSE327",
        course: "CSE327 - Software Engineering",
        instructor: "Dr. Fatima Ahmed",
        semester: "Fall 2022",
        submittedDate: "Dec 10, 2022",
        averageRating: 4.5
      },
      {
        id: "EVAL-2022-CSE332",
        course: "CSE332 - Database Systems",
        instructor: "Dr. Kamal Hossain",
        semester: "Fall 2022",
        submittedDate: "Dec 12, 2022",
        averageRating: 4.2
      }
    ]
  };

  const toggleEvaluation = (index) => {
    setExpandedEvaluation(expandedEvaluation === index ? null : index);
  };

  const handleRatingChange = (evalId, questionId, value) => {
    setRatings(prev => ({
      ...prev,
      [`${evalId}-${questionId}`]: value
    }));
  };

  const handleCommentChange = (evalId, value) => {
    setComments(prev => ({
      ...prev,
      [evalId]: value
    }));
  };

  const submitEvaluation = (evalId) => {
    alert(`Evaluation submitted for ${evalId}`);
    // In a real app, you would submit to your backend
  };

  return (
    <div className="faculty-evaluation-container">
      {/* Header Section */}
      <div className="evaluation-header">
        <h1>Faculty <span className="highlight">Evaluation</span></h1>
        <p>Provide feedback on your course instructors</p>
      </div>

      {/* Info Alert */}
      <div className="info-alert">
        <div className="alert-content">
          <FiClock className="alert-icon" />
          <div>
            <h4>Evaluation Period: May 1 - May 15, 2023</h4>
            <p>
              Your feedback is anonymous and helps improve teaching quality. 
              Evaluations must be completed to view final grades.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="evaluation-tabs">
        <button 
          className={`tab-button ${activeTab === 'pending' ? 'active' : ''}`}
          onClick={() => setActiveTab('pending')}
        >
          Pending Evaluations
        </button>
        <button 
          className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed Evaluations
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'pending' ? (
          <div className="pending-evaluations">
            <h3>Pending Course Evaluations</h3>
            <p className="subtext">Complete these evaluations to view your final grades</p>
            
            <div className="evaluation-list">
              {evaluations.pending.map((evaluation, index) => (
                <div key={index} className="evaluation-card">
                  <div className="evaluation-header" onClick={() => toggleEvaluation(index)}>
                    <div className="evaluation-info">
                      <h4>{evaluation.course}</h4>
                      <div className="evaluation-meta">
                        <span><FiUser /> {evaluation.instructor}</span>
                        <span>{evaluation.semester}</span>
                        <span className="deadline"><FiClock /> Due: {evaluation.deadline}</span>
                      </div>
                    </div>
                    <FiChevronDown className={`expand-icon ${expandedEvaluation === index ? 'expanded' : ''}`} />
                  </div>
                  
                  {expandedEvaluation === index && (
                    <div className="evaluation-form">
                      <div className="rating-questions">
                        {evaluation.questions.map((question) => (
                          <div key={question.id} className="question-item">
                            <p>{question.text}</p>
                            <div className="rating-stars">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <React.Fragment key={star}>
                                  <input
                                    type="radio"
                                    id={`${evaluation.id}-q${question.id}-${star}`}
                                    name={`${evaluation.id}-q${question.id}`}
                                    value={star}
                                    checked={ratings[`${evaluation.id}-${question.id}`] === star}
                                    onChange={() => handleRatingChange(evaluation.id, question.id, star)}
                                  />
                                  <label 
                                    htmlFor={`${evaluation.id}-q${question.id}-${star}`}
                                    className="star-label"
                                  >
                                    <FiStar className={`star-icon ${ratings[`${evaluation.id}-${question.id}`] >= star ? 'filled' : ''}`} />
                                  </label>
                                </React.Fragment>
                              ))}
                              <div className="rating-labels">
                                <span>Strongly Disagree</span>
                                <span>Strongly Agree</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="comment-section">
                        <label>Additional Comments (Optional)</label>
                        <textarea
                          placeholder="Provide any additional feedback about the course or instructor..."
                          value={comments[evaluation.id] || ''}
                          onChange={(e) => handleCommentChange(evaluation.id, e.target.value)}
                        />
                      </div>
                      
                      <div className="form-actions">
                        <button 
                          className="submit-button"
                          onClick={() => submitEvaluation(evaluation.id)}
                        >
                          Submit Evaluation
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="completed-evaluations">
            <h3>Completed Evaluations</h3>
            <p className="subtext">Your previously submitted evaluations</p>
            
            <div className="completed-list">
              {evaluations.completed.map((evaluation, index) => (
                <div key={index} className="completed-card">
                  <div className="completed-info">
                    <h4>{evaluation.course}</h4>
                    <div className="completed-meta">
                      <span><FiUser /> {evaluation.instructor}</span>
                      <span>{evaluation.semester}</span>
                      <span>Submitted: {evaluation.submittedDate}</span>
                    </div>
                  </div>
                  <div className="rating-summary">
                    <div className="average-rating">
                      <span>Average Rating:</span>
                      <div className="stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FiStar 
                            key={star} 
                            className={`star-icon ${star <= Math.round(evaluation.averageRating) ? 'filled' : ''}`} 
                          />
                        ))}
                      </div>
                      <span className="rating-value">{evaluation.averageRating.toFixed(1)}/5.0</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Evaluation Policy */}
      <div className="policy-section">
        <h3>Evaluation Policy</h3>
        <div className="policy-content">
          <div className="policy-item">
            <FiCheckCircle className="policy-icon" />
            <p>All evaluations are completely anonymous</p>
          </div>
          <div className="policy-item">
            <FiCheckCircle className="policy-icon" />
            <p>Instructors receive results only after final grades are submitted</p>
          </div>
          <div className="policy-item">
            <FiCheckCircle className="policy-icon" />
            <p>You must complete evaluations to view your final grades</p>
          </div>
          <div className="policy-item">
            <FiCheckCircle className="policy-icon" />
            <p>Evaluations are used for faculty development purposes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyEvaluation;