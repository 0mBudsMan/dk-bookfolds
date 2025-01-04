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
    <header className='header'>
        <div className='header-left-side'>
            <div className='header-content'>
                <span>Dhruv Karena's </span>
                <h1>Folded Wonders</h1>
                <h2>Where Books Become Timeless Art</h2>
                {/* <p>Unique Book Art Creations</p> */}
                <Link href='/products'>
                     <button className='btn' type='button'><CgShoppingCart size={26} />  Start Shopping</button>
                </Link>
            </div>

          
        </div>

        <div className='header-right-side'>
                <Image style={{"borderRadius" : "5%"}} className='header-img' src={headerImg} width={650} height={650} alt='header image' />
        </div>
    </header>
  )
}

export default HeroBanner