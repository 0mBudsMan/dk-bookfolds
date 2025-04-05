import React from 'react'
import {client} from '../lib/client'
import { HeroBanner, EventsBanner, Newsletter, FeaturesBanner, Product } from '../components'
import { Navigation, A11y, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
  const products = [{
    "image": "/assets/homepage1.jpg",
    "name" : "Good Vibes Only",
    "slug" : {
      "_type": "slug",
      "current": "words"
    },
  },
  {
    "image": "/assets/homepage4.jpg",
    "name" : "Starbucks Bookfold (30CM)",
    "slug" : {
      "_type": "slug",
      "current": "logo"
    },
  },
  {
    "image": "/assets/homepage2.jpg",
    "name" : "Customized Portrait",
    "slug" : {
      "_type": "slug",
      "current": "words"
    },
  }]
  return (
    <>
      <HeroBanner />
      {/* <EventsBanner /> */}

      <div className='products-outer-container'>
        <div className='subtitle'>
          <span>PRODUCTS</span>
          <h2>Checkout Our Collection</h2>
        </div>
        <Swiper
          breakpoints={{
              // width >= 300
              300: {
                slidesPerView: 1,
                spaceBetween: 100
              },
              // width >= 1000
              1000: {
                slidesPerView: 2,
                spaceBetween: 0
              },
              // width >= 1260
              1260: {
                slidesPerView: 3,
                spaceBetween: 0
              }
          }}
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          navigation
        >
          <div className='products-container'>
          {products.map((product) => (
            <SwiperSlide key={product.name}>
              <Image src={product.image} alt="bookfolding" width={380} height={400} className='product-image'/>
              <p className='product-name'>{product.name}</p>
            </SwiperSlide>
          ))}

          </div>
        </Swiper>
      </div>

      <FeaturesBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  // const bannerQuery = '*[_type == "banner"]';
  // const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products }
  }
}

export default Home