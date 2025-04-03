// import React from 'react'
// import Link from 'next/link'
// import { urlFor } from '../lib/client'

// const Allproducts = ({product}) => {  
//   console.log(product)
//   return (
//         <div>
//           <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-').toLowerCase()}`}>
//             <div className='Allproduct-card'>
//               <img src={product.img} width={250} height={270} />
//               <p className='Allproduct-name'>{product.name}</p>
//               {/* <p className='Allproduct-tags'>{product.}</p> */}
//               <p className='Allproduct-price'>₹{product.pricediscounted}</p>
//             </div>
//           </Link>
//         </div>
//       )
// }

// export default Allproducts

import React from 'react'
import Link from 'next/link'

const Allproducts = ({ product }) => {  
  return (
    <div>
      <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-').toLowerCase()}`}>
        <div className='Allproduct-card'>
          {/* Image container for uniform sizing and shadow effect */}
          <div className="image-container">
            <img src={product.img} alt={product.name} className="product-image" />
          </div>
          
          <p className='Allproduct-name'>{product.name}</p>
          <p className='Allproduct-price'>₹{product.pricediscounted}</p>
        </div>
      </Link>

      {/* CSS for uniform image size, shadow, and hover effects */}
      <style jsx>{`
        .image-container {
          width: 250px;  
          height: 270px; 
          overflow: hidden; 
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px; /* Rounded corners */
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Subtle shadow */
          background: #fff; /* Background to ensure visibility */
          padding: 8px; /* Space between image and container */
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px; /* Ensure the image also has rounded corners */
        }

        .Allproduct-card {
          text-align: center;
          padding: 15px;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
        }

        .Allproduct-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
        }
      `}</style>
    </div>
  )
}

export default Allproducts;
