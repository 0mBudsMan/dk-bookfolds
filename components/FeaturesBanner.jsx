import React , {useState , useEffect} from 'react'
import Image from 'next/image'
import img from '../src/assets/Home.jpg'
import Link from 'next/link'

const FeaturesBanner = () => {
  const [marginRight, setMarginRight] = useState('100px');
  const [imageWidth, setImageWidth] = useState(300);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setMarginRight(window.innerWidth > 1024 ? '150px' : '100px');
        setImageWidth(window.innerWidth > 1024 ? 300 : 300);
      };

      window.addEventListener('resize', handleResize);
      handleResize(); 

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <section className='features-section'>
      <div className='title'>
        <h1 style={{marginRight}}>Artful Creations from Every Fold</h1>
      </div>

      <div className='content'>
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
              

        <div className='right' style={{"display" : "flex" , "flexDirection" : "column" }}>
        <Image src={img} width={imageWidth} height={350} style={{"borderRadius" : "5%"}} alt='Folded Book Art' />
        <div style={{"display" : "flex" , "flexDirection" : "column" , "alignItems" : "center" , "width" : "100%"}}>
          <p>
            This piece is meticulously crafted where every fold is a labor of love. Using premium-quality, we ensure each creation is a timeless work of art, perfect for any space or occasion.
          </p>
          <Link href={'/products/words'}>
            <button className='btn' type='button' style={{"width" : "100px"}}>Explore Our Collection</button>
          </Link>
        </div>
      </div>

      </div>
    </section>
  )
}

export default FeaturesBanner