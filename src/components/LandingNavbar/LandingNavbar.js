// components/LandingNavbar/LandingNavbar.js
import React, { useState, useEffect } from 'react';
import './LandingNavbar.css';
import nsuLogo from '../../assets/logo.png';

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;

const TAGLINES = [
  "# The First Private University in Bangladesh",
  "# Center of Excellence in Higher Education",
  "# Shaping Future Leaders Since 1992",
  "# Where Innovation Meets Tradition"
];

const LandingNavbar = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTagline = TAGLINES[currentTaglineIndex];
    let timeoutId;

    const handleTyping = () => {
      if (displayText.length < currentTagline.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentTagline.substring(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeoutId = setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    };

    const handleDeleting = () => {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, DELETING_SPEED);
      } else {
        setIsTyping(true);
        setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % TAGLINES.length);
      }
    };

    if (isTyping) {
      handleTyping();
    } else {
      handleDeleting();
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTaglineIndex]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <img src={nsuLogo} alt="NSU Logo" className="navbar-logo" />
          <div className="navbar-titles">
            <div className="navbar-title">
              NORTH SOUTH UNIVERSITY
            </div>
            <div className="navbar-subtitle">
              # Center of Excellence in Higher Education
            </div>
          </div>
        </div>

        <div className="navbar-tagline">
          <div className="tagline-text">
            {displayText}
            <span className="cursor">|</span>
          </div>
        </div>
      </div>
      <div className="navbar-wave"></div>
      <div className="navbar-accent"></div>
    </nav>
  );
};

export default LandingNavbar;