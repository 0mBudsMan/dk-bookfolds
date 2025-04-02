
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { AllProducts } from "../components";
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
const OPTIONS = { loop: true, slidesToScroll: 1 }

const ClassyProductDetails = ({ product }) => {

  const { name, details, care, priceoriginal, pricediscounted, img, dimensions, category } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();

  const imagePaths = ["por1.jpg", "por2.jpg", "por3.jpg"]
  const imagePathsName = ["name/1.jpg", "name/2.jpg", "name/3.jpg", "name/4.jpg", "name/5.jpg", "name/6.jpg", "name/7.jpg"]
  const imagePathInitals = ["initials/1.jpg", "initials/2.jpg", "initials/3.jpg", "initials/4.jpg"]
  const whatsappNumber = '918320863774';
  const whatsappMessage = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in the product: ${encodeURIComponent(name)}. Link of the product is: https://dk-bookfolds.vercel.app/product/${name.toLowerCase().replace(/\s+/g, '-')}`;

  const emailAddress = 'dkbookfold@gmail.com';
  const emailSubject = encodeURIComponent(`Inquiry about ${name}`);
  const emailBody = encodeURIComponent(
    `Hi,\n\nI am interested in the product: ${name}.\nPlease provide more details.\n\nThank you.`
  );
  const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  const buttonStyle = {
    padding: '12px 24px',
    margin: '10px 5px',
    border: '1px solid #000',
    borderRadius: '0',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
    color: '#000',
  };

  const hoverButtonStyle = {
    ...buttonStyle,
    ':hover': {
      backgroundColor: '#000',
      color: '#fff',
    }
  };
  const [dimension, setDimension] = useState(23)
  return (
    <div style={{ 
    //   fontFamily: '"Playfair Display", serif',
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '40px 20px',
      color: '#000',
      backgroundColor: '#fff',
      
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' , gap: `20px`}}>
        {/* <div style={{ flex: '1 1 500px', marginRight: '40px' }}>
          <img src={imagePath} alt={name} style={{ 
            width: '100%', 
            height: 'auto', 
            border: '1px solid #000',
            padding: '10px',
          }} />
        </div> */}
        <EmblaCarousel 
  options={OPTIONS} 
  slides={category === "Portrait" ? imagePaths : category === "Name" ? imagePathsName : imagePathInitals} 
/>

        <div style={{ flex: '1 1 500px', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ 
            fontSize: '2.5em', 
            marginBottom: '20px',
            borderBottom: '2px solid #000',
            paddingBottom: '10px',
          }}>Customised {category}</h1>
          <div style={{ marginBottom: '30px', 
  border: '1px solid #000', 
  padding: '20px', 
  display: 'inline-block'
}}>
  <h3 style={{ 
    marginBottom: '15px', 
    fontSize: '1.2em', 
    borderBottom: '1px solid #000', 
    paddingBottom: '10px' 
  }}>
    Dimensions
  </h3>
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '70px',
  }}>
    <button
  style={{
    fontSize: "1.2em",
    backgroundColor: dimension === 23 ? "#000000" : "#F5F5F5", 
    color: dimension === 23 ? "#FFFFFF" : "#000000", 
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
  }}
  onClick={() => setDimension(23)}
>
  23 cm
</button>

<button
  style={{
    fontSize: "1.2em",
    backgroundColor: dimension === 30 ? "#000000" : "#F5F5F5",
    color: dimension === 30 ? "#FFFFFF" : "#000000",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
  }}
  onClick={() => setDimension(30)}
>
  30 cm
</button>

  </div>
  
</div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
            <h3 style={{ marginRight: '20px', fontSize: '1.2em' }}>Quantity: </h3>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #000' }}>
              <button onClick={decQty} style={{ ...buttonStyle, margin: '0' }}>
                <AiOutlineMinus />
              </button>
              <span style={{ margin: '0 20px', fontSize: '1.2em' }}>{qty}</span>
              <button onClick={incQty} style={{ ...buttonStyle, margin: '0' }}>
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div style={{ marginBottom: '30px' }}>
            <button 
              onClick={() => onAdd(product, qty)} 
              style={{ 
                ...hoverButtonStyle, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <CgShoppingCart size={20} /> Add to Cart
            </button>
            <div style={{ marginTop: '15px', textAlign: 'right' }}>
            <span style={{  marginRight: '15px' }}>{dimension} cm</span>
              <span style={{ textDecoration: 'line-through', marginRight: '15px' }}>₹{(dimension==23)?9999:13999}</span>
              <span style={{ fontSize: '1.4em', fontWeight: 'bold' }}>₹{(dimension==23)?7999:11999}</span>
            </div>
            
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button 
              onClick={() => window.open(whatsappMessage, '_blank')}
              style={{ ...hoverButtonStyle, flex: '1', marginRight: '10px' }}
            >
              <FaWhatsapp style={{ marginRight: '10px' }} /> Inquire via WhatsApp
            </button>
            <button 
              onClick={() => window.location.href = mailtoLink}
              style={{ ...hoverButtonStyle, flex: '1', marginLeft: '10px' }}
            >
              <FaEnvelope style={{ marginRight: '10px' }} /> Inquire via Email
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '60px' }}>
        <h2 style={{ 
          fontSize: '2em', 
          marginBottom: '30px', 
          textAlign: 'center',
          borderBottom: '2px solid #000',
          paddingBottom: '15px',
        }}>Product Information</h2>
        <div style={{ 
          padding: '30px', 
          border: '1px solid #000',
          marginBottom: '30px',
        }}>
          <h3 style={{ marginBottom: '15px', fontSize: '1.4em' }}>Product Details</h3>
          {details.map((desc, index) => (
            <p key={index} style={{ lineHeight: '1.8', fontSize: '1.1em', marginBottom: '10px' }}>{desc}</p>
          ))}
        </div>
        <div style={{ 
          padding: '30px', 
          border: '1px solid #000',
        }}>
          <h3 style={{ marginBottom: '15px', fontSize: '1.4em' }}>Product Care</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {care.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px', fontSize: '1.1em' }}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
const useStateContext = () => {
    const [qty, setQty] = useState(1);
    const decQty = () => setQty(prev => Math.max(prev - 1, 1));
    const incQty = () => setQty(prev => prev + 1);
    const onAdd = (product, quantity) => {
      console.log(`Added ${quantity} ${product.name}(s) to cart`);
    };
    return { decQty, incQty, qty, onAdd };
  };

const EmblaCarousel = (props) => {
  const { slides, options } = props
  console.log(slides)
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          
          {slides.map((slide, index) => (
        <div className="embla__slide" key={index} style={{
          width: "210px"
        }}>
          <div style={{ flex: '1 1 500px' }}>
          <img src={slide} alt={"cust_port"} style={{ 
            width: '100%', 
            height: 'auto', 
            border: '1px solid #000',
            padding: '10px',
          }} />
        </div>
        </div>
      ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClassyProductDetails
