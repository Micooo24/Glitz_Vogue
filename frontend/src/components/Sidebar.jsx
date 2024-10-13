import React from 'react'

import { FaSearch } from "react-icons/fa";
import { FaAppleWhole } from "react-icons/fa6";

import { Link } from 'react-router-dom'

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

import Slider, { Range } from 'rc-slider';

import './styles/Slider.css'

const Sidebar = ({ title }) => {
  return (
    <>
      <h5 className='sidebar-title'>{title}</h5>
      <div className="my-4 input-button">
        <input placeholder="Keywords..." className="fs-7" type="text" />
        <button><span className="fs-7"><FaSearch /></span></button>
      </div>

      <div className="my-3 category-container container">
        <h5>Category</h5>
        <ul>
          <li className='d-flex justify-content-between text-start'>
            <Link><FaAppleWhole /> &nbsp; Apples</Link>
            <span className='text-secondary'>(3)</span>
          </li>
          <li className='d-flex justify-content-between text-start'>
            <Link><FaAppleWhole /> &nbsp; Oranges</Link>
            <span className='text-secondary'>(3)</span>
          </li>
          <li className='d-flex justify-content-between text-start'>
            <Link><FaAppleWhole /> &nbsp; Mangoes</Link>
            <span className='text-secondary'>(3)</span>
          </li>
          <li className='d-flex justify-content-between text-start'>
            <Link><FaAppleWhole /> &nbsp; Melons</Link>
            <span className='text-secondary'>(3)</span>
          </li>
          <li className='d-flex justify-content-between text-start'>
            <Link><FaAppleWhole /> &nbsp; Strawberries</Link>
            <span className='text-secondary'>(3)</span>
          </li>
        </ul>
      </div>

      <div className="my-5 container price-filter">
        <h5>Price Filter</h5>
        <div className="m-2">
          <Slider range />
        </div>
      </div>

      <div className="my-5 featured-products-container container">
        <h5>Featured Products</h5>
        <div className="container">
          <div className="product-container d-flex gap-2">
            <div className="image-container">
              <img className='contained-img' src="https://placehold.co/400" alt="Product Image" />
            </div>
            <div className="body w-75 d-flex flex-column justify-content-center">
              <div className="title">Banana</div>
              <div className="ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className="price d-flex gap-2">
                <span>$2.99</span>
                <span className='oldPrice'>$4.99</span>
              </div>
            </div>
          </div>
          <div className="product-container d-flex gap-2">
            <div className="image-container">
              <img className='contained-img' src="https://placehold.co/400" alt="Product Image" />
            </div>
            <div className="body w-75 d-flex flex-column justify-content-center">
              <div className="title">Banana</div>
              <div className="ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className="price d-flex gap-2">
                <span>$2.99</span>
                <span className='oldPrice'>$4.99</span>
              </div>
            </div>
          </div>
          <div className="product-container d-flex gap-2">
            <div className="image-container">
              <img className='contained-img' src="https://placehold.co/400" alt="Product Image" />
            </div>
            <div className="body w-75 d-flex flex-column justify-content-center">
              <div className="title">Banana</div>
              <div className="ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className="price d-flex gap-2">
                <span>$2.99</span>
                <span className='oldPrice'>$4.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Sidebar.defaultProps = {
  title: ""
}

export default Sidebar