import React from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { TbMessageLanguage } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
        <nav className='header'>
            <div>
             <img src={assets.site_logo} alt='logo'/>
            </div>
            <div className='header-items'>
              <ul>
                <li>Who You Are</li>
                <li>Who We Are</li>
                <li>What We Offer</li>
                <li>Wise Words</li>
              </ul>
            </div>
            <div className='header-change '>
              <span><TbMessageLanguage/></span>
              <span><IoLanguage/></span>
            </div>
            <div className='nav-button'>
              <a>Connect</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar