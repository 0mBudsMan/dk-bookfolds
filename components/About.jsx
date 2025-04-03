import React from 'react'
import Image from 'next/image'
import artistPhoto from "../src/assets/Avatar.jpg"
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const About = () => {
  const products = [
    { "image": "/assets/about1.jpg" },
    { "image": "/assets/about2.jpg" },
    { "image": "/assets/about3.jpg" },
    { "image": "/assets/about4.jpg" },
    { "image": "/assets/about5.jpg" },
    { "image": "/assets/about6.jpg" },
    { "image": "/assets/about7.jpg" }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px', textAlign: 'center' }}>
      {/* Artist Image */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <Image 
          src={artistPhoto} 
          width={200} 
          height={200} 
          alt="Dhruv Karena" 
          style={{ borderRadius: '50%', objectFit: 'cover' }} 
        />
      </div>

      {/* Products Section */}
     
      {/* About the Artist */}
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px' }}>About the Artist</h1>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6' }}>
        Born in a small town in Junagadh, Dhruv Karena is a passionate book folding artist based in Rajkot, Gujarat. 
        A creative and determined individual, Dhruv has been mastering this intricate art form for over five years. 
        His work spans a wide range of designs, from abstract art and meaningful slogans to sculptures and detailed portraits, 
        transforming books into mesmerizing pieces of art.
      </p>

      <div className='products-outer-container'> 
        <Swiper
          breakpoints={{
            300: { slidesPerView: 1 },
            768: { slidesPerView: 2  , spaceBetween : 10},
            1024: { slidesPerView: 2 , spaceBetween : 10},
          }}
          modules={[Navigation, A11y]}
          navigation
          style={{ paddingBottom: '20px' }} // Avoids cropping navigation
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <Image 
                src={product.image} 
                width={400} 
                height={400} 
                alt={`Product ${index + 1}`} 
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* About the Art */}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '24px', marginBottom: '16px' }}>About the Art</h2>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6' }}>
        Book folding is a unique and often overlooked art form that transforms the pages of a book into intricate, three-dimensional designs. 
        With just careful folds and precise cuts, an artist can bring words, slogans, portraits, and sculptures to life, all within the pages of a book.
      </p>
    </div>
  )
}

export default About;
