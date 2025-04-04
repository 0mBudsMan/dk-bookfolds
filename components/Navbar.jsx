import React, { useState } from 'react'
import Image from 'next/image'
import {CiSearch} from 'react-icons/ci'
import {CgShoppingCart} from 'react-icons/cg'
import logo from '../src/assets/logoo.png'
import Link from 'next/link'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useStateContext } from '../context/StateContext';

const Navbar = ({Searchproducts}) => {
  const {showCart, setShowCart, totalQty} = useStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('')

  return (
    <nav>
      <Link href='/'>
        <Image src={logo} width={120} height={100} alt='logo' />
      </Link>
      <ul className='nav-links'>
      <Link href='/words'><li>Words</li></Link>
      <Link href='/portrait'><li>Portrait</li></Link>
      {/* <Link href='/slogan'><li>Slogan</li></Link> */}
      <Link href='/shapes-symbols'><li>Shapes and Symbols</li></Link>
      <Link href='/logo'><li>Logo</li></Link>
      <Link href='/customised'><li>Customised</li></Link>

      {/* <Link href='/logo'><li>Logo</li></Link> */}
      {/* <Link href='/number'><li>Number</li></Link> */}

      </ul>

        <div className='search-bar'>
          <CiSearch />
          <input 
            type='text' 
            placeholder='What you looking for'/>
        </div>
        {/* onChange={(event) => {
              setSearchTerm(event.target.value);
          }} */}

      

<div className='navbar-smallscreen'>
 
  <RiMenu3Line color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
  
 =
  {toggleMenu && (
    <div className='navbar-smallscreen_overlay'>
      <Link href='/'>
        <Image className='logo-small' src={logo} height={75} alt='logo' />
      </Link>
      
      
      <RiCloseLine color='black' fontSize={27} className='close_icon' onClick={() => setToggleMenu(false)} />
      
      
      <ul className='navbar-smallscreen_links'>
       

        
        <Link href='/words'>
          <li onClick={() => setToggleMenu(false)}>Words</li>
        </Link>
        <Link href='/portrait'>
          <li onClick={() => setToggleMenu(false)}>Portrait</li>
        </Link>
        <Link href='/shapes-symbols'>
          <li onClick={() => setToggleMenu(false)}>Shapes and Symbols</li>
        </Link>
        <Link href='/logo'>
          <li onClick={() => setToggleMenu(false)}>Logo</li>
        </Link>
        <Link href='/customised'>
          <li onClick={() => setToggleMenu(false)}>Customised</li>
        </Link>
      </ul>
    </div>
  )}
</div>

    </nav>
  )
}

export default Navbar