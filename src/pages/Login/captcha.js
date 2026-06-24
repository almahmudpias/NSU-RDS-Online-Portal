// src/Captcha.js
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = '6LfJepkrAAAAAFq3UWvtoEOD8lje9_ahBeXWz0Kh'; // Your site key here

function Captcha({ onChange }) {
  return (
    <div className="input-group">
      <label>Captcha</label>
      <ReCAPTCHA
        sitekey={SITE_KEY}
        onChange={onChange}
      />
    </div>
  );
}

export default Captcha;
