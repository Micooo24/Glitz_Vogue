import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation  } from 'react-router-dom'
import './styles/Header.css'
import logo from '../assets/logo.png';

import { IoSearch } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

import { CSSTransition } from 'react-transition-group';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [currentPage, setCurrentPage] = useState('');
    const location = useLocation();
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === '/') setCurrentPage('Home');
        else if (currentPath === '/shop') setCurrentPage('Shop');
        else if (currentPath === '/shop-detail') setCurrentPage('ShopDetail');
      }, [location]);
    
      const scrollUp = () => {
        window.scrollTo({
          top: 0, // Scroll to the top
          behavior: 'smooth' // Smooth scrolling
        });
      };

      const [isOpen, setIsOpen] = useState(false);

      const toggleDropdown = () => {
          setIsOpen(!isOpen); 
      };

      const [loginModal, loginModalSetOpen] = useState(false);

      const toggleLogin = () => {
        loginModalSetOpen(!loginModal); 
      };

      const [registerModal, registerModalSetOpen] = useState(false);

      const toggleRegister = () => {
        registerModalSetOpen(!registerModal); 
      };
  return (
    <div className={`container-fluid fixed-top main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className={`container topbar `}>
                <div class="d-flex w-100 justify-content-between">
                    <div class="top-info ps-2">
                        <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-secondary"></i><FaMapMarkerAlt className='color-sec' /> <a href="#" class="text-white">123 Street, New York</a></small>
                        <small class="me-3"><i class="fas fa-envelope me-2 text-secondary"></i><IoMailSharp className='color-sec' /> <a href="#" class="text-white">Email@Example.com</a></small>
                    </div>
                    <div class="top-link pe-2">
                        <a href="#" class="text-white"><small class="text-white mx-2">Privacy Policy</small>/</a>
                        <a href="#" class="text-white"><small class="text-white mx-2">Terms of Use</small>/</a>
                        <a href="#" class="text-white"><small class="text-white ms-2">Sales and Refunds</small></a>
                    </div>
                </div>
            </div>
            <div class="container px-0">
                <nav class="navbar navbar-light bg-white navbar-expand-xl">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt="GlitzVogue Logo" className="img-fluid" style={{ height: '100px' }} />
                </a>
                    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-primary"></span>
                    </button>
                    <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div class="navbar-nav mx-auto">
                            <Link 
                                to="/" 
                                className={`me-3 nav-item nav-link ${currentPage === "Home" ? 'active' : ''}`}
                                onClick={scrollUp}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/shop" 
                                className={`me-3 nav-item nav-link ${currentPage === "Shop" ? 'active' : ''}`}
                                onClick={scrollUp}
                            >
                                Shop
                            </Link>
                            <Link 
                                to="/shop-detail" 
                                className={`me-3 nav-item nav-link ${currentPage === "ShopDetail" ? 'active' : ''}`}
                                onClick={scrollUp}
                            >
                                Shop Detail
                            </Link>
                            <div class="me-3 nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="cart.html" class="dropdown-item">Cart</a>
                                    <a href="chackout.html" class="dropdown-item">Chackout</a>
                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                    <a href="404.html" class="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" class="me-3 nav-item nav-link">Contact</a>
                        </div>
                        <div class="d-flex me-0 icon-navigation">
                            <a class="position-relative me-4 my-auto" data-bs-toggle="modal" data-bs-target="#searchModal">
                                <IoSearch />
                            </a>
                            <a href="#" class="position-relative me-4 my-auto">
                                <IoBag />
                            </a>
                            <span 
                                href="#" 
                                class="dropdown position-relative me-4 my-auto dropdown-active" 
                                ref={dropdownRef}
                            >
                                <FaUser onClick={toggleDropdown}/>
                                <CSSTransition
                                    in={isOpen}
                                    timeout={300}
                                    classNames="dropdown"
                                    unmountOnExit
                                >
                                    <div className="dropdown-content">
                                        <a onClick={toggleLogin} class="dropdown-link" href="#">Login</a>
                                        <a onClick={toggleRegister} class="dropdown-link" href="#">Register</a>
                                    </div>
                                </CSSTransition>
                            </span>
                        </div>
                    </div>
                </nav>
                            <CSSTransition
                                in={loginModal}
                                timeout={300}
                                classNames="modal"
                                unmountOnExit
                            >
                                <LoginModal 
                                    closeModal={loginModalSetOpen}
                                />
                            </CSSTransition>

                            <CSSTransition
                                in={registerModal}
                                timeout={300}
                                classNames="modal"
                                unmountOnExit
                            >
                                <RegisterModal 
                                    closeModal={registerModalSetOpen}
                                />
                            </CSSTransition>
            </div>
        </div>
  )
}

export default Header