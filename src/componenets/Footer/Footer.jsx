import React from 'react'
import './Footer.css'
import { assets } from './../../assets/assets';
import Myimage from '../../assets/Myimage.png';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={Myimage} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, distinctio sequi. Maiores iusto ea tempore assumenda nostrum praesentium voluptatibus at.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>800-600-678</li>
                    <li>contact@khaopiyo.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ Khaopiyo.com - All Right Reserved</p>
      
    </div>
  )
}

export default Footer
