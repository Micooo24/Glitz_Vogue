import React, { useRef, useEffect, useState } from 'react';
import './styles/Modal.css';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

//nadagdag
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const LoginModal = ({ closeModal }) => {
  //backend
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const url = 'http://localhost:4000/api/auth/login'
        const { data } = await axios.post(url, {
          email: values.email,
          password: values.password,
        }, {
          headers: { 'Content-Type': 'application/json' }
        });

        // Store token in local storage
        localStorage.setItem('authToken', data.token);

        // Redirect user to homepage or another route
        navigate('/');
      } catch (err) {
        setError('Invalid email or password');
        setLoading(false);
      }
    },
  });



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
          {error && <p className="error-message">{error}</p>}
          {/* Formik form */}
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="email-title">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}  // Tracks if input field is touched
                className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
              />
               {formik.touched.email && formik.errors.email && (
                <p className="error-message">{formik.errors.email}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="password-title">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}  // Tracks if input field is touched
                className={formik.touched.password && formik.errors.password ? 'input-error' : ''}
              />
                {formik.touched.password && formik.errors.password && (
              <p className="error-message">{formik.errors.password}</p>
            )}
            </div>

            <div className="form-group forgot-password">
              <button type="button" className="forgot-btn">Forgot Password?</button>
            </div>

            <button type="submit" className="login-btn" disabled={loading || !formik.isValid}>
            {loading ? 'Logging in...' : 'Login'}
            </button>
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
