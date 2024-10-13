import React from 'react'
import BrowseShop from '../components/BrowseShop';
import Sidebar from '../components/Sidebar';

const Shop = () => {
  return (
    <div className="container d-flex">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div>
          <BrowseShop />
        </div>

    </div>
  )
}

export default Shop