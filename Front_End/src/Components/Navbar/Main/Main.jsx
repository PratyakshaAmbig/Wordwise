import React from 'react'
import "./Main.css"
import { assets } from '../../../assets/assets'
import { IoRocket } from "react-icons/io5";
import { RxCodesandboxLogo } from "react-icons/rx";
import { BiLoaderCircle } from "react-icons/bi";

const Main = () => {
  return (
    <div>
        <div className='main'>
            <div className='main-section1'>
                <h2><sapn className="main-color1">Analytically</sapn> Insightful</h2>
                <h2><span className='main-color2'>Humanly </span>Crafted</h2>
                <h2>Original and Hyper - Local</h2>
                <h2>Linguistic User Experience</h2>
                <img src={assets.line_1}/>
                <div className='main-heading2'>
                <h2>
                In 22 Indian Official Languages
                </h2>
                <h2>
                with Countless Dialects & Variants.
                </h2>
                </div>
                <br/>
            </div>
            <div className='main-section2'>
              <img src={assets.language}/>
            </div>
        </div>
        <div className='city_vibes'>
          <img src={assets.city_vibe1}/>
        </div>
        <div className='order-btn'>
          <a>Quick Order</a>
        </div>
        <div className='main-section3'>
          <div className='section3-content1'>
            <h2>If You Are...</h2>
            <h3 className='span1'>Just Fed Up With The Centralized &
              <br/>
            Language-Agnostic Content Agencies? </h3>
            <br/>
            <h3 className='span2 span1'>Looking to Connect & Expand Into the
              <br/>
            Deeper and Potential Inroads of a Digital India? </h3>
            <br/>
            <img src={assets.sadface}/>
          </div>

          <div className='section3-content2'>
            <div className='section3-first'>
              <div className='first'>
                <a><IoRocket/></a>
                <h3>A Solopreneur?</h3>
                <p>A Coach,A Trainer,An Influencer, and an Educator confined to your mother tongue or English?</p>
              </div>
              <div className='first second'>
                <a><RxCodesandboxLogo/></a>
                <h3>A Product Owner?</h3>
                <p>And your wish is to sell your product to the exact target customer in corners of India?</p>
              </div>
              <div className='first'>
                <a><BiLoaderCircle/></a>
                <h3>A B2C or D2C?</h3>
                <p>And your ambition is to reach the very last user over the Indian linguistic supply chain?</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main