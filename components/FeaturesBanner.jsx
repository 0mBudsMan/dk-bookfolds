import React from 'react'
import Image from 'next/image'
import img from '../src/assets/Home.jpg'
import Link from 'next/link'

const FeaturesBanner = () => {
  return (
    <section className='features-section'>
      <div className='title'>
        <h1 style={{"margin-right" : "150px"}}>Artful Creations from Every Fold</h1>
      </div>

      <div className='content'>
        {/* <div className='left'>
          <div className="feature-background">
            Different from others
          </div>
          <div>
            <h3>Using Good Quality Materials</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>100% Handmade Products</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>Modern Fashion Design</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>Discount for Bulk Orders</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>  */}
        <div className='left'>
          <div className="feature-background">
            Unique Creations, Tailored for You
          </div>
          <div>
            <h3>Crafted with Premium Paper</h3>
            <p>We use high-quality materials to ensure every fold is precise and every creation lasts a lifetime.</p>
          </div>
          <div>
            <h3>100% Handmade Masterpieces</h3>
            <p>Each piece is lovingly crafted by hand, ensuring a personal touch in every fold and detail.</p>
          </div>
          <div>
            <h3>Elegant and Intricate Designs</h3>
            <p>Our book art combines timeless elegance with intricate craftsmanship to create stunning visuals.</p>
          </div>
          <div>
            <h3>Special Discounts for Bulk Orders</h3>
            <p>Looking for unique gifts or event decor? Enjoy exclusive discounts when ordering in bulk.</p>
          </div>
        </div>
              

        <div className='right'>
        <Image src={img} width={750} height={400} style={{"borderRadius" : "5%"}} alt='Folded Book Art' />
        <div>
          <p>
            This piece is meticulously crafted where every fold is a labor of love. Using premium-quality, we ensure each creation is a timeless work of art, perfect for any space or occasion.
          </p>
          <Link href={'/products'}>
            <button className='btn' type='button'>Explore Our Collection</button>
          </Link>
        </div>
      </div>

      </div>
    </section>
  )
}

export default FeaturesBanner