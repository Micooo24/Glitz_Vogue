import React, { useRef, useEffect } from 'react';
import './styles/Modal.css';

const RegisterModal = ({ closeModal }) => {
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
        <div className="modal-background" style={{ display: 'flex' }}> {/* Ensure it's visible when active */}
            <div className="modal-container" ref={dropdownRef}>
                <div className="modal-content">
                    <form>
                        <h3 className="modal-title">Register</h3>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input type="email" id="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="zipCode">Zip Code</label>
                            <input type="text" id="zipCode" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="profileImage">Profile Image</label>
                            <input type="file" id="profileImage" accept="image/*" />
                        </div>

                        <button type="submit" className="login-btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;
