import React , {useState , useEffect} from 'react'
import Image from 'next/image'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa";
import logo from '../src/assets/logoo.png'

import Link from 'next/link';

const Footer = () => {
  const whatsappNumber = '918320863774';
  const whatsappMessage = `https://wa.me/${whatsappNumber}?text=Hi, I have a query.`;
  const whatsappMessageBulk = `https://wa.me/${whatsappNumber}?text=Hi, I want to place a bluk order. Please provide me more details!`;

  
  const emailAddress = 'dkbookfold@gmail.com';
  const emailSubject = encodeURIComponent(`Customer Query`);
  const emailBody = encodeURIComponent(
    `Hi,\n\nI have a query.`
  );
  const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;


  return (
    <footer>
      <div className='footer'>
        <div className='logo'>
          <Image src={logo} width={120} height={100} alt="logo" />
          <p>An artisan collection of beautifully crafted, high-quality book art pieces, each made with care and precision.</p>
          <div className='icon-container' style={{"marginTop" : "20px"}}>
            <div><a href="https://x.com/KarenaDhruv?t=BMsIeo_QFPtGMF6YhxiDPg&s=08"><FaXTwitter size={20} /></a></div>
            <div><a href="https://www.instagram.com/dhruv__karena/"><FaInstagram size={20} /></a></div>
            <div><a href='https://www.linkedin.com/in/dhruv-karena-0ba04131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><GrLinkedinOption size={20} /></a></div>
          </div>
        </div>

        <div className='footer-links'>
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About the artist</Link></li>
            <li><Link href="/shipping-policy">Shipping Policy</Link></li>
            <li><Link href="/refund">Refund Policy</Link></li>
          </ul>
        </div>

        {/* <div className='footer-links'>
          <h3>Support</h3>
          <ul>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div> */}

        <div className='footer-links'>
          <h3>Contact</h3>
          <ul>
          <li onClick={() => window.open(whatsappMessage, '_blank')}>WhatsApp</li>
          <li onClick={() => window.location.href = mailtoLink}>Mail</li>
          <li onClick={() => window.open(whatsappMessageBulk, '_blank')}>Corporate/Bulk Order</li>
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
