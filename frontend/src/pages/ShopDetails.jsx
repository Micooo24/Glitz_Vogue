import React from 'react'

import Sidebar from '../components/Sidebar'

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { CiCirclePlus,CiCircleMinus  } from "react-icons/ci";
import { IoBag } from "react-icons/io5";

const ShopDetails = () => {
  return (
    <>
      <div className="banner-crumbs d-flex flex-column justify-content-center align-items-center py-5 mb-5">
        <h3 className='text-light'><b>Shop Details</b></h3>
        <div className="breadcrumbs text-light">
          Home / Shop / Shop Details
        </div>

      </div>
      <div className="container d-flex">
        <div className="container">
          <div className="product-spotlight d-flex gap-4">
            <div className="image-container border border-gray">
              <img className="img-fluid cover-img rounded" src="https://placehold.co/600x400" alt="Product Image" />
            </div>
            <div className="body w-50 d-flex flex-column">
              <div className="title">
                <h4><b>Broccoli</b></h4>
              </div>
              <div className="category text-gray my-3">
                Category: Vegetables
              </div>
              <div className="price">
                <h4><b>$2.99</b></h4>
              </div>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <FaRegStar />
              </div>
              <div className="description my-3">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</div>
              <div className="quantity">
                <CiCircleMinus className='fs-2 control' /> &nbsp; <span>1</span> &nbsp; <CiCirclePlus className='fs-2 control' />
              </div>
              <div className="controls">
                <a href="#" class="mt-3 btn border border-secondary rounded-pill px-3 text-primary"><IoBag /> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="my-3 container">
            <div class="nav nav-tabs mb-3">
              <button class="nav-link border-white border-bottom-0" type="button" role="tab"
                  id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                  aria-controls="nav-about" aria-selected="true">Description</button>
              <button class="nav-link active border-white border-bottom-0" type="button" role="tab"
                  id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission"
                  aria-controls="nav-mission" aria-selected="false">Reviews</button>
            </div>
          </div>
        </div>
        <div className="sidebar-container">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default ShopDetails