import React, { useState } from 'react';
import Captcha from './captcha';
import ServerTime from './ServerTime';
import '../../pages/Login/login.css'; // Import the CSS for styling
import nsuLogo from '../../assets/login.png'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom'; // For redirecting

function LoginBox() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);

  const navigate = useNavigate(); // Initialize navigation hook

  // Handle Next button (Username Step)
  const handleNext = (e) => {
    e.preventDefault();
    if (username.length !== 7) {
      setError('Please input your ID (first 7 digits)');
    } else {
      setError('');
      setStep(2);
    }
  };

  // Handle Login button (Password + CAPTCHA Step)
  const handleLogin = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Please complete the CAPTCHA');
      return;
    }

    if (password.length < 4) {
      alert('Invalid password');
      return;
    }

    // Simulate successful login
    alert(`Logging in as ${username}`);
    navigate('/home'); // ✅ Redirect to Home page
  };

  // Handle CAPTCHA token
  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-columns">
          {/* Left Section with Logo */}
          <div className="login-left">
            <img src={nsuLogo} alt="NSU Logo" className="nsu-logo" />
            <h1>RDS</h1>
            {step === 2 && (
              <p className="welcome-msg">
                Welcome, <strong>{username}</strong>
              </p>
            )}
          </div>

          {/* Right Section with Form */}
          <div className="login-right">
            <h2>NSU Portal : Login</h2>
            <form onSubmit={step === 1 ? handleNext : handleLogin}>
              {step === 1 ? (
                <>
                  <div className="input-group">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder="Please enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    {username.length > 7 && (
                      <p className="error-msg">Please input your ID (first 7 digits)</p>
                    )}
                    {error && <p className="error-msg">{error}</p>}
                  </div>
                  <button type="submit">Next</button>
                </>
              ) : (
                <>
                  <div className="input-group">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Captcha onChange={onCaptchaChange} />
                  <button type="submit">Login</button>
                </>
              )}
            </form>

            {step === 1 && (
              <a href="#" className="forgot-password">Forgot your password?</a>
            )}
          </div>
        </div>

        <ServerTime />
      </div>
    </div>
  );
}

export default LoginBox;
