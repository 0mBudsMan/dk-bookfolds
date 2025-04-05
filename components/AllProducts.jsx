// // import React from 'react'
// // import Link from 'next/link'
// // import { urlFor } from '../lib/client'

// // const Allproducts = ({product}) => {  
// //   console.log(product)
// //   return (
// //         <div>
// //           <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-').toLowerCase()}`}>
// //             <div className='Allproduct-card'>
// //               <img src={product.img} width={250} height={270} />
// //               <p className='Allproduct-name'>{product.name}</p>
// //               {/* <p className='Allproduct-tags'>{product.}</p> */}
// //               <p className='Allproduct-price'>₹{product.pricediscounted}</p>
// //             </div>
// //           </Link>
// //         </div>
// //       )
// // }

// // export default Allproducts

// import React from 'react'
// import Link from 'next/link'

// const Allproducts = ({ product }) => {  
//   return (
//     <div>
//       <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-').toLowerCase()}`}>
//         <div className='Allproduct-card'>
//           {/* Image container for uniform sizing and shadow effect */}
//           <div className="image-container">
//             <img src={product.img} alt={product.name} className="product-image" />
//           </div>
          
//           <p className='Allproduct-name'>{product.name}</p>
//           <p className='Allproduct-price'>₹{product.pricediscounted}</p>
//         </div>
//       </Link>

//       {/* CSS for uniform image size, shadow, and hover effects */}
//       <style jsx>{`
//         .image-container {
//           width: 250px;  
//           height: 270px; 
//           overflow: hidden; 
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           border-radius: 12px; /* Rounded corners */
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Subtle shadow */
//           background: #fff; /* Background to ensure visibility */
//           padding: 8px; /* Space between image and container */
//         }

//         .product-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           border-radius: 8px; /* Ensure the image also has rounded corners */
//         }

//         .Allproduct-card {
//           text-align: center;
//           padding: 15px;
//           border-radius: 12px;
//           transition: transform 0.2s ease-in-out;
//         }

//         .Allproduct-card:hover {
//           transform: scale(1.05);
//           box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
//         }
//       `}</style>
//     </div>
//   )
// }

// export default Allproducts;


import React from 'react'
import Link from 'next/link'

const Allproducts = ({ product }) => {  
  return (
    <div className="Allproduct-wrapper">
      <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-').toLowerCase()}`}>
        <div className='Allproduct-card'>
          <div className="image-container">
            <img src={product.img} alt={product.name} className="product-image" />
          </div>

          <p className='Allproduct-name'>{product.name}</p>

          <div className="price-container">
            <span className="original-price">₹{product.priceoriginal}</span>
            <span className="discounted-price">₹{product.pricediscounted}</span>
          </div>
        </div>
      </Link>

      {/* CSS Styling */}
      <style jsx>{`
        .Allproduct-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 16px;
        }

        .Allproduct-card {
          width: 250px;
          padding: 16px;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
          text-align: center;
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          cursor: pointer;
        }

        .Allproduct-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
        }

        .image-container {
          width: 100%;
          height: 270px;
          overflow: hidden;
          border-radius: 12px;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        .Allproduct-name {
          font-size: 1.1rem;
          font-weight: 500;
          margin-top: 12px;
        }

        .price-container {
          margin-top: 6px;
        }

        .original-price {
          text-decoration: line-through;
          color: #888;
          margin-right: 8px;
        }

        .discounted-price {
          font-weight: bold;
          color: #000;
        }
      `}</style>
    </div>
  )
}

export default Allproducts
