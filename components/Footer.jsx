import React from 'react'
import Image from 'next/image'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='logo'>
          <Image src="/assets/logo.png" width={120} height={100} alt="logo" />
          <p>An artisan collection of beautifully crafted, high-quality book art pieces, each made with care and precision.</p>
          <div className='icon-container'>
            <div><a href="https://x.com/KarenaDhruv?t=BMsIeo_QFPtGMF6YhxiDPg&s=08"><FaXTwitter size={20} /></a></div>
            <div><a href="https://www.instagram.com/dhruv__karena/"><FaInstagram size={20} /></a></div>
            <div><a href='https://www.linkedin.com/in/dhruv-karena-0ba04131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><GrLinkedinOption size={20} /></a></div>
          </div>
        </div>

        <div className='footer-links'>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Support</h3>
          <ul>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <p>Copyright © 2025 Dhruv Karena</p>
        <p>Design by. <span>yours truly</span></p>
        <p>Code by. <span>0mBudsMan & aadi_ish on github</span></p>
      </div>
    </footer>
  )
}

export default Footer
