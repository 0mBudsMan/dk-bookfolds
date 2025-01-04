import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {CgShoppingCart} from 'react-icons/cg'
import { useStateContext } from '../../context/StateContext';



const ProductDetails = ({ product }) => {
    const { name, details, care, priceoriginal, pricediscounted, img } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd } = useStateContext();

    // Path to the image
    const imagePath = `/assets/${img}`;

    return (
        <div className='products'>
            <div className='product-detail-container'>
                <div className='product-images'>
                    {/* Render the image */}
                    <div className='big-image-container'>
                        <img src={imagePath} alt={name} className='big-image' />
                    </div>
                </div>
                <div className='product-details'>
                    <div className='name-and-category'>
                        <h3>{name}</h3>
                    </div>
                    <div className='size'>
                        <p>SELECT SIZE</p>
                        <ul>
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    </div>
                    <div className='quantity-desc'>
                        <h4>Quantity: </h4>
                        <div>
                            <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
                            <span className='num'>{qty}</span>
                            <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
                        </div>
                    </div>
                    <div className='add-to-cart'>
                        <button className='btn' type='button' onClick={() => onAdd(product, qty)}>
                            <CgShoppingCart size={20} />Add to Cart
                        </button>
                        <strike>${priceoriginal}</strike> ${pricediscounted}
                    </div>
                </div>
            </div>

            <div className='product-desc-container'>
                <div className='desc-title'>
                    <div className="desc-background">
                        Overview
                    </div>
                    <h2>Product Information</h2>
                </div>
                <div className='desc-details'>
                    <h4>PRODUCT DETAILS</h4>
                    <p>{details}</p>
                </div>
                <div className='desc-c'>
                    <h4>PRODUCT CARE</h4>
                    <ul>
                        {care.map((list, index) => (
                            <li key={index}>{list}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;


import path from 'path';
import fs from 'fs/promises';

export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'public', 'data', 'dummy.json'); 
    const jsonData = await fs.readFile(filePath, 'utf-8'); 
    const data = JSON.parse(jsonData); 

    return {
        props: {
            product: data[0] 
        }
    };
};
// Generates `/product/1` and `/product/2`
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
      paths,
      fallback: 'blocking'
    }
}
