import React from 'react'
import Image from 'next/image'
import {CgShoppingCart} from 'react-icons/cg'
import headerImg from '../src/assets/Family.webp'
import featured1 from '../src/assets/Featured1.png';
import featured2 from '../src/assets/Featured2.png';
import featured3 from '../src/assets/Featured3.png';
import featured4 from '../src/assets/Featured4.png';
import Link from 'next/link';

const HeroBanner = () => {

  
  return (
    <>
    <header className='header' style={{"display" : "flex" , "alignItems" : "center"}}>
    <div className='header-right-side'>
                <Image style={{"borderRadius" : "5%"}} className='header-img' src={headerImg} width={650} height={650} alt='header image' />
        </div>
        <div className='header-left-side'>
            <div className='header-content'>
                <span>Dhruv Karena&apos;s </span>
                <h1>Folded Wonders</h1>
                <h2>India's First Bookfolding Webstore</h2>
                <h2>Where Books Become Timeless Art</h2>
                {/* <p>Unique Book Art Creations</p> */}
                <Link href='/products/words'>
                     <button className='btn' type='button'><CgShoppingCart size={26} />  Start Shopping</button>
                </Link>
            </div>

          
        </div> 
    </header>
    <div className="why-dk-bookfold">
      <h1>Why Choose DK Bookfold?</h1>
      <h2>DK Bookfold offers unique folded books that make memorable gifts and statement decor pieces:</h2>
      <ul>
        <li><b>• Personalized Gifts:</b> Thoughtful presents for loved ones, teachers, and colleagues.</li>
        <li><b>• Home Decor:</b> A conversation-starting addition to any space.</li>
        <li><b>• Creative Art:</b> Celebrate the beauty of craftsmanship with every piece.</li>
      </ul>
    </div>

    </>
  )
}

export default HeroBanner