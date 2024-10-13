import React, { useRef, useEffect, useState } from 'react';
import './styles/Modal.css';
import LoginModal from './LoginModal';

//nadagdag
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const RegisterModal = ({ closeModal }) => {
    // const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loginModalOpen, setLoginModalOpen] = useState(false); // State to handle LoginModal visibility
    const [registerModalOpen, setRegisterModalOpen] = useState(true); // State to handle RegisterModal visibility

    // Validate form fields
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        address: Yup.string().required('Address is required'),
        zipCode: Yup.string().required('Zip Code is required'),
        profileImage: Yup.mixed()
            .required('A profile image is required')
            .test('fileSize', 'Image size is too large. Max 2MB.', (value) => {
                return value && value.size <= 2 * 1024 * 1024;
            })
            .test('fileType', 'Unsupported file format. Allowed: jpeg, png.', (value) => {
                return value && ['image/jpeg', 'image/png'].includes(value.type);
            }),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            zipCode: '',
            profileImage: null,  // Initial null value for the file input
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const formData = new FormData();

                // Append form data
                formData.append('username', values.username);
                formData.append('email', values.email);
                formData.append('password', values.password);
                formData.append('firstName', values.firstName);
                formData.append('lastName', values.lastName);
                formData.append('phoneNumber', values.phoneNumber);
                formData.append('address', values.address);
                formData.append('zipCode', values.zipCode);

                // Append image
                if (values.profileImage) {
                    formData.append('profileImage', values.profileImage);
                }
                
                const url = 'http://localhost:4000/api/auth/signup';
                const response = await axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                if (response.data.success) {
                    // Hide the register modal and show the login modal
                    setRegisterModalOpen(false); // Close the register modal
                    setTimeout(() => setLoginModalOpen(true), 300); // Open login modal after a slight delay
                }
            } catch (error) {
                setError(error.response?.data?.message || 'Registration failed');
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
        <>
        {registerModalOpen && (
            <div className="modal-background" style={{ display: 'flex' }}> {/* Ensure it's visible when active */}
                <div className="modal-container" ref={dropdownRef}>
                    <div className="modal-content">
                        {/* Yup and Formik Validations */}
                        <form onSubmit={formik.handleSubmit}>
                            <h3 className="modal-title">Register</h3>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input 
                                type="text" 
                                id="username" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                                />
                                {formik.touched.username && formik.errors.username ? (
                                <div className="error">{formik.errors.username}</div>
                            ) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="username">Email</label>
                                <input
                                type="email" 
                                id="email" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                            ) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                type="password"
                                id="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                <div className="error">{formik.errors.password}</div>
                            ) : null}
                            </div>


                        {/* Customer input fields  */}
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                type="text" 
                                id="firstName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? (
                                <div className="error">{formik.errors.firstName}</div>
                            ) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                type="text" 
                                id="lastName" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                />
                                {formik.touched.lastName && formik.errors.lastName ? (
                                <div className="error">{formik.errors.lastName}</div>
                            ) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input 
                                type="text" 
                                id="phoneNumber"  
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                                />
                            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                <div className="error">{formik.errors.phoneNumber}</div>
                            ) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input 
                                type="text" 
                                id="address" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                                />
                                {formik.touched.address && formik.errors.address ? (
                                <div className="error">{formik.errors.address}</div>
                            ) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="zipCode">Zip Code</label>
                                <input 
                                type="text" 
                                id="zipCode"  
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.zipCode}
                                />
                                {formik.touched.zipCode && formik.errors.zipCode ? (
                                <div className="error">{formik.errors.zipCode}</div>
                            ) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="profileImage">Profile Image</label>
                                <input 
                                type="file"
                                id="profileImage" 
                                onChange={(event) => {
                                    formik.setFieldValue('profileImage', event.target.files[0]);
                                }}
                                accept="image/*"
                                />
                                {formik.touched.profileImage && formik.errors.profileImage ? (
                                <div className="error">{formik.errors.profileImage}</div>
                            ) : null}
                            </div>

                            <button type="submit" className="login-btn">Register</button>
                            {error && <h2>{error}</h2>}
                        </form>
                    </div>
                </div>
            </div>
        )}
        {loginModalOpen && <LoginModal closeModal={setLoginModalOpen} />}
        </>
    );
}

export default RegisterModal;
