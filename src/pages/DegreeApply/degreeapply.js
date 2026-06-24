import React, { useState } from 'react';
import '../DegreeApply/DegreeApply.css'; // Assuming you have a CSS file for styling
import { FiAward, FiCalendar, FiCheckCircle, FiAlertTriangle, FiDownload, FiPrinter } from 'react-icons/fi';

const DegreeApply = () => {
  const [activeTab, setActiveTab] = useState('application');
  const [formData, setFormData] = useState({
    degree: 'B.Sc. in Computer Science and Engineering',
    graduationTerm: 'Spring 2024',
    graduationDate: 'June 15, 2024',
    nameAsOnDegree: 'Md Abdullah Al Mahmud Pias',
    diplomaDelivery: 'Mailing Address',
    mailingAddress: '123 Main St, Dhaka, Bangladesh',
    honorsApplication: 'No',
    clearanceStatus: {
      library: 'Clear',
      financial: 'Clear',
      administrative: 'Pending'
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Degree application submitted successfully!');
    // In a real app, you would submit to your backend
  };

  return (
    <div className="degree-apply-container">
      {/* Header Section */}
      <div className="degree-header">
        <h1>Degree <span className="highlight">Application</span></h1>
        <p>Complete your graduation application process</p>
      </div>

      {/* Progress Tracker */}
      <div className="progress-tracker">
        <div className={`progress-step ${activeTab === 'application' ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <div className="step-label">Application</div>
        </div>
        <div className={`progress-step ${activeTab === 'requirements' ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <div className="step-label">Requirements</div>
        </div>
        <div className={`progress-step ${activeTab === 'clearance' ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <div className="step-label">Clearance</div>
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {activeTab === 'application' && (
          <div className="application-tab">
            <div className="info-card">
              <FiAward className="info-icon" />
              <div className="info-content">
                <h3>Ready to Graduate?</h3>
                <p>
                  Complete this application to be considered for degree conferral. 
                  Applications must be submitted by the deadline to appear in the commencement program.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-section">
                <h4>Degree Information</h4>
                <div className="form-group">
                  <label>Degree to be Awarded</label>
                  <div className="form-value">{formData.degree}</div>
                </div>
                <div className="form-group">
                  <label>Expected Graduation Term</label>
                  <select
                    name="graduationTerm"
                    value={formData.graduationTerm}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Spring 2024">Spring 2024</option>
                    <option value="Summer 2024">Summer 2024</option>
                    <option value="Fall 2024">Fall 2024</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Expected Graduation Date</label>
                  <div className="form-value">{formData.graduationDate}</div>
                </div>
              </div>

              <div className="form-section">
                <h4>Personal Information</h4>
                <div className="form-group">
                  <label>Name as it should appear on diploma</label>
                  <input
                    type="text"
                    name="nameAsOnDegree"
                    value={formData.nameAsOnDegree}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Diploma Delivery Method</label>
                  <select
                    name="diplomaDelivery"
                    value={formData.diplomaDelivery}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Mailing Address">Mailing Address</option>
                    <option value="Pickup">Pickup from Registrar</option>
                  </select>
                </div>
                {formData.diplomaDelivery === 'Mailing Address' && (
                  <div className="form-group">
                    <label>Mailing Address</label>
                    <textarea
                      name="mailingAddress"
                      value={formData.mailingAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}
              </div>

              <div className="form-section">
                <h4>Honors Information</h4>
                <div className="form-group">
                  <label>Are you applying for honors?</label>
                  <select
                    name="honorsApplication"
                    value={formData.honorsApplication}
                    onChange={handleInputChange}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="save-button">
                  Save for Later
                </button>
                <button type="submit" className="submit-button">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'requirements' && (
          <div className="requirements-tab">
            <h3>Graduation Requirements Status</h3>
            
            <div className="requirements-grid">
              <div className="requirement-card complete">
                <FiCheckCircle className="status-icon" />
                <div className="requirement-details">
                  <h4>Credit Requirements</h4>
                  <p>150 credits completed (150 required)</p>
                </div>
              </div>
              
              <div className="requirement-card complete">
                <FiCheckCircle className="status-icon" />
                <div className="requirement-details">
                  <h4>CGPA Requirement</h4>
                  <p>3.42 CGPA (2.50 minimum required)</p>
                </div>
              </div>
              
              <div className="requirement-card complete">
                <FiCheckCircle className="status-icon" />
                <div className="requirement-details">
                  <h4>Core Courses</h4>
                  <p>14/14 core courses completed</p>
                </div>
              </div>
              
              <div className="requirement-card complete">
                <FiCheckCircle className="status-icon" />
                <div className="requirement-details">
                  <h4>Major Courses</h4>
                  <p>20/20 major courses completed</p>
                </div>
              </div>
              
              <div className="requirement-card warning">
                <FiAlertTriangle className="status-icon" />
                <div className="requirement-details">
                  <h4>Capstone Project</h4>
                  <p>In progress (Due May 15, 2024)</p>
                </div>
              </div>
              
              <div className="requirement-card complete">
                <FiCheckCircle className="status-icon" />
                <div className="requirement-details">
                  <h4>General Education</h4>
                  <p>6/6 courses completed</p>
                </div>
              </div>
            </div>
            
            <div className="action-section">
              <button className="print-button">
                <FiPrinter /> Print Requirements Checklist
              </button>
              <button className="advisor-button">
                Contact Advisor About Requirements
              </button>
            </div>
          </div>
        )}

        {activeTab === 'clearance' && (
          <div className="clearance-tab">
            <h3>Graduation Clearance Status</h3>
            <p className="subtext">All clearances must be completed before degree conferral</p>
            
            <div className="clearance-cards">
              <div className={`clearance-card ${formData.clearanceStatus.library.toLowerCase()}`}>
                <h4>Library Clearance</h4>
                <div className="clearance-status">
                  <span className="status-badge">{formData.clearanceStatus.library}</span>
                </div>
                <p>Return all books and pay outstanding fines</p>
                <button className="clearance-button">
                  Request Library Clearance
                </button>
              </div>
              
              <div className={`clearance-card ${formData.clearanceStatus.financial.toLowerCase()}`}>
                <h4>Financial Clearance</h4>
                <div className="clearance-status">
                  <span className="status-badge">{formData.clearanceStatus.financial}</span>
                </div>
                <p>Pay all outstanding tuition and fees</p>
                <button className="clearance-button">
                  View Financial Status
                </button>
              </div>
              
              <div className={`clearance-card ${formData.clearanceStatus.administrative.toLowerCase()}`}>
                <h4>Administrative Clearance</h4>
                <div className="clearance-status">
                  <span className="status-badge">{formData.clearanceStatus.administrative}</span>
                </div>
                <p>Complete all administrative requirements</p>
                <button className="clearance-button">
                  Check Administrative Status
                </button>
              </div>
            </div>
            
            <div className="commencement-info">
              <h4>Commencement Information</h4>
              <div className="info-grid">
                <div className="info-item">
                  <FiCalendar className="info-icon" />
                  <div>
                    <span className="info-label">Ceremony Date:</span>
                    <span className="info-value">June 10, 2024</span>
                  </div>
                </div>
                <div className="info-item">
                  <FiCalendar className="info-icon" />
                  <div>
                    <span className="info-label">Reporting Time:</span>
                    <span className="info-value">8:30 AM</span>
                  </div>
                </div>
                <div className="info-item">
                  <FiCalendar className="info-icon" />
                  <div>
                    <span className="info-label">Venue:</span>
                    <span className="info-value">University Convocation Hall</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        {activeTab !== 'application' && (
          <button 
            className="nav-button prev"
            onClick={() => setActiveTab(activeTab === 'clearance' ? 'requirements' : 'application')}
          >
            Previous
          </button>
        )}
        {activeTab !== 'clearance' && (
          <button 
            className="nav-button next"
            onClick={() => setActiveTab(activeTab === 'application' ? 'requirements' : 'clearance')}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default DegreeApply;