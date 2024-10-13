import React from 'react'
import './styles/Welcome.css'
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import BrowseShop from '../components/BrowseShop';
import CarouselShop from '../components/CarouselShop';

const Welcome = () => {
    return (
        <>
            <div className="container-fluid py-5 mt-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-12 col-lg-7 w-50">
                            <h4 className="mb-3 text-secondary secondary-color">All-Natural Makeup</h4>
                            <h1 className="mb-5 display-3 text-primary primary-color text-outline">GlitzVogue: a Haven for Makeup Lovers</h1>
                            <div className="position-relative mx-auto input-button">
                                <input type="text" placeholder="Search" />
                                <button type="submit">Submit Now</button>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-5">
                            {/* <div id="carouselId" class="carousel slide position-relative" data-bs-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active rounded">
                                    <img src="img/hero-img-1.png" class="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                                    <a href="#" class="btn px-4 py-2 text-white rounded">Fruites</a>
                                </div>
                                <div class="carousel-item rounded">
                                    <img src="img/hero-img-2.jpg" class="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                    <a href="#" class="btn px-4 py-2 text-white rounded">Vesitables</a>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Start */}
            <div className="container-fluid featurs py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle mb-5 mx-auto">
                                    <MdOutlineLocalShipping />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Free Shipping</h5>
                                    <p className="mb-0">Free on order over $300</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle mb-5 mx-auto">
                                    <FaUserShield />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Security Payment</h5>
                                    <p className="mb-0">100% security payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle mb-5 mx-auto">
                                    <FaArrowRightArrowLeft />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>30 Day Return</h5>
                                    <p className="mb-0">30 day money guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle mb-5 mx-auto">
                                    <FaPhone />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>24/7 Support</h5>
                                    <p className="mb-0">Support every time fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shop Start */}
            <BrowseShop />

            {/* Features Start */}

            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <a href="#">
                                <div className="service-item bg-secondary rounded border border-secondary">
                                    <img src="https://placehold.co/600x400" className="img-fluid rounded-top w-100" alt="" />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-primary text-center p-4 rounded">
                                            <h5 className="text-white">Fresh Apples</h5>
                                            <h3 className="text-dark mb-0">20% OFF</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a href="#">
                                <div className="service-item bg-dark rounded border border-dark">
                                    <img src="https://placehold.co/600x400" className="img-fluid rounded-top w-100" alt="" />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-light text-center p-4 rounded">
                                            <h5 className="text-primary">Tasty Fruits</h5>
                                            <h3 className="text-dark mb-0">Free delivery</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a href="#">
                                <div className="service-item bg-primary rounded border border-primary">
                                    <img src="https://placehold.co/600x400" className="img-fluid rounded-top w-100" alt="" />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-secondary text-center p-4 rounded">
                                            <h5 className="text-white">Exotic Vegitable</h5>
                                            <h3 className="text-dark mb-0">Discount 30$</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Shop Start */}
            <CarouselShop />

        </>

    )
}

export default Welcome