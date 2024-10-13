import React, { useRef, useEffect } from 'react';
import './styles/Modal.css';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LoginModal = ({ closeModal }) => {
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-background">
      <div className="modal-container" ref={dropdownRef}>
        <div className="modal-content">
          <h3 className="modal-title">Login</h3>
          <form>
            <div className="form-group">
              <label htmlFor="email" className="email-title">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="password-title">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                required 
              />
            </div>

            <div className="form-group forgot-password">
              <button type="button" className="forgot-btn">Forgot Password?</button>
            </div>

            <button type="submit" className="login-btn">Login</button>
          </form>

          <div className="social-login">
            <p>Or login with</p>
            <div className="social-buttons">
              <button className="facebook-btn"><FaFacebook /> &nbsp; Facebook</button>
              <button className="google-btn"><FaGoogle /> &nbsp; Google</button>
              <button className="github-btn"><FaGithub /> &nbsp; GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
