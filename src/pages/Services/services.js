import React, { useState } from 'react';
import '../Services/service.css';
import { 
  FiFileText, 
  FiBook, 
  FiUnlock, 
  FiCalendar,
  FiDollarSign,
  FiCreditCard,
  FiMinusCircle,
  FiCheckCircle,
  FiSearch
} from 'react-icons/fi';
import { TfiCar } from "react-icons/tfi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    {
      id: 'academic-documents',
      title: 'Academic Documents',
      icon: <FiFileText />,
      description: 'Request transcripts, certificates, and other academic documents',
      form: [
        { label: 'Document Type', type: 'select', options: ['Transcript', 'Degree Certificate', 'Enrollment Verification'] },
        { label: 'Delivery Method', type: 'select', options: ['Pickup', 'Mail'] },
        { label: 'Additional Notes', type: 'textarea' }
      ]
    },
    {
      id: 'car-parking',
      title: 'Car Parking',
      icon: <TfiCar />,
      description: 'Apply for campus parking permits and manage parking account',
      form: [
        { label: 'Vehicle Registration Number', type: 'text' },
        { label: 'Parking Zone Preference', type: 'select', options: ['North Zone', 'South Zone', 'East Zone'] },
        { label: 'Permit Duration', type: 'select', options: ['Semester', 'Annual'] }
      ]
    },
    {
      id: 'course-exclusion',
      title: 'Course Exclusion',
      icon: <FiBook />,
      description: 'Request exclusion from specific courses due to prior learning',
      form: [
        { label: 'Course Code', type: 'text' },
        { label: 'Reason for Exclusion', type: 'select', options: ['Prior Learning', 'Medical Condition', 'Other'] },
        { label: 'Supporting Documents', type: 'file' }
      ]
    },
    {
      id: 'id-unlock',
      title: 'ID Unlock',
      icon: <FiUnlock />,
      description: 'Unlock your student ID for system access',
      form: [
        { label: 'Student ID', type: 'text', disabled: true, value: 'ID-2012434042' },
        { label: 'Reason for Unlock', type: 'select', options: ['Forgot Password', 'Account Locked', 'Other'] }
      ]
    },
    {
      id: 'leave-request',
      title: 'Leave Request',
      icon: <FiCalendar />,
      description: 'Apply for academic leave of absence',
      form: [
        { label: 'Leave Type', type: 'select', options: ['Medical', 'Personal', 'Academic'] },
        { label: 'Start Date', type: 'date' },
        { label: 'End Date', type: 'date' },
        { label: 'Supporting Documents', type: 'file' }
      ]
    },
    {
      id: 'resource-center-payment',
      title: 'Resource Center Payment',
      icon: <FiDollarSign />,
      description: 'Pay for library fines and resource center services',
      form: [
        { label: 'Payment Type', type: 'select', options: ['Library Fine', 'Printing Charges', 'Other Services'] },
        { label: 'Amount', type: 'number' },
        { label: 'Payment Method', type: 'select', options: ['Credit Card', 'Mobile Banking', 'Bank Transfer'] }
      ]
    },
    {
      id: 'rfid-card-ribbon',
      title: 'RFID Card & Ribbon',
      icon: <FiCreditCard />,
      description: 'Request new or replacement ID cards and ribbons',
      form: [
        { label: 'Request Type', type: 'select', options: ['New Card', 'Replacement', 'Ribbon Only'] },
        { label: 'Reason', type: 'select', options: ['Lost', 'Damaged', 'Other'] }
      ]
    },
    {
      id: 'semester-drop',
      title: 'Semester Drop',
      icon: <FiMinusCircle />,
      description: 'Apply to drop the entire semester',
      form: [
        { label: 'Semester', type: 'select', options: ['Spring 2023', 'Summer 2023', 'Fall 2023'] },
        { label: 'Reason for Drop', type: 'select', options: ['Financial', 'Medical', 'Personal'] },
        { label: 'Supporting Documents', type: 'file' }
      ]
    },
    {
      id: 'waiver-course-issue',
      title: 'Waiver Course Issue',
      icon: <FiCheckCircle />,
      description: 'Request course waivers based on previous qualifications',
      form: [
        { label: 'Course to Waive', type: 'text' },
        { label: 'Equivalent Qualification', type: 'text' },
        { label: 'Supporting Documents', type: 'file' }
      ]
    },
    {
      id: 'application-status',
      title: 'Application Status',
      icon: <FiSearch />,
      description: 'Check status of your submitted applications',
      form: [
        { label: 'Application Type', type: 'select', options: ['All', 'Academic Documents', 'Leave Request', 'Course Exclusion'] },
        { label: 'Reference Number', type: 'text' }
      ]
    }
  ];

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleServiceClick = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  const handleSubmit = (e, serviceId) => {
    e.preventDefault();
    alert(`Request submitted for ${serviceId}`);
    setActiveService(null);
  };

  return (
    <div className="services-container">
      {/* Header Section */}
      <div className="services-header">
        <h1>Student <span className="highlight">Services</span></h1>
        <p>Access various university services and submit requests</p>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {filteredServices.map((service) => (
          <div 
            key={service.id}
            className={`service-card ${activeService === service.id ? 'active' : ''}`}
          >
            <div 
              className="service-header"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className={`expand-icon ${activeService === service.id ? 'expanded' : ''}`}>
                ▼
              </div>
            </div>
            
            {activeService === service.id && (
              <div className="service-form">
                <form onSubmit={(e) => handleSubmit(e, service.id)}>
                  {service.form.map((field, index) => (
                    <div key={index} className="form-group">
                      <label>{field.label}</label>
                      {field.type === 'select' ? (
                        <select required>
                          <option value="">Select {field.label}</option>
                          {field.options.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : field.type === 'textarea' ? (
                        <textarea placeholder={`Enter ${field.label}`} />
                      ) : field.type === 'file' ? (
                        <input type="file" required />
                      ) : field.type === 'date' ? (
                        <input type="date" required />
                      ) : (
                        <input 
                          type={field.type} 
                          placeholder={`Enter ${field.label}`}
                          required
                          disabled={field.disabled}
                          value={field.value || ''}
                        />
                      )}
                    </div>
                  ))}
                  <div className="form-actions">
                    <button type="submit" className="submit-button">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <h3>Quick Access</h3>
        <div className="links-grid">
          <a href="#" className="quick-link">
            <FiFileText /> Academic Calendar
          </a>
          <a href="#" className="quick-link">
            <FaBangladeshiTakaSign /> Fee Payment
          </a>
          <a href="#" className="quick-link">
            <FiBook /> Course Registration
          </a>
          <a href="#" className="quick-link">
            <FiSearch /> Application Status
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;