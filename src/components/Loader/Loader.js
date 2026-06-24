import React from 'react';
import '../Loader/Loader.css'; // Create this CSS file

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <p>Loading page...</p>
      </div>
    </div>
  );
};

export default Loader;