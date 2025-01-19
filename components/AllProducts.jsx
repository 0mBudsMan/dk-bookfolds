import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Allproducts = ({product}) => {  
  console.log(product)
  return (
        <div>
          <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-').toLowerCase()}`}>
            <div className='Allproduct-card'>
              <img src={product.img} width={250} height={270} />
              <p className='Allproduct-name'>{product.name}</p>
              {/* <p className='Allproduct-tags'>{product.}</p> */}
              <p className='Allproduct-price'>₹{product.pricediscounted}</p>
            </div>
          </Link>
        </div>
      )
}

export default Allproducts