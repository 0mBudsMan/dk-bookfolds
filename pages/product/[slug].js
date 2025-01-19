import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import products from "../../data/dummy.json"


import { useRouter } from 'next/router';



const ProductPage = () => {
  const { query } = useRouter();
  const { slug } = query; // o the 'slug' from the URL

  // Find the product based on the slug
  const product = products.find(p => p.name.toLowerCase().replace(/\s+/g, '-').toLowerCase() === slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <ClassyProductDetails product={product} />
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

const ClassyProductDetails = ({ product }) => {
  const { name, details, care, priceoriginal, pricediscounted, img, dimensions } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();

  const imagePath = `/${img}`;
  const whatsappNumber = '918320863774';
  const whatsappMessage = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in the product: ${encodeURIComponent(name)}`;

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

  return (
    <div style={{ 
    //   fontFamily: '"Playfair Display", serif',
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '40px 20px',
      color: '#000',
      backgroundColor: '#fff',
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 1 500px', marginRight: '40px' }}>
          <img src={imagePath} alt={name} style={{ 
            width: '100%', 
            height: 'auto', 
            border: '1px solid #000',
            padding: '10px',
          }} />
        </div>
        <div style={{ flex: '1 1 500px' }}>
          <h1 style={{ 
            fontSize: '2.5em', 
            marginBottom: '20px',
            borderBottom: '2px solid #000',
            paddingBottom: '10px',
          }}>{name}</h1>
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
  <p style={{ 
    fontSize: '1.1em', 
    fontFamily: '"Courier New", monospace', 
    letterSpacing: '0.5px' 
  }}>
    {dimensions}
  </p>
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
              <span style={{ textDecoration: 'line-through', marginRight: '15px' }}>${priceoriginal}</span>
              <span style={{ fontSize: '1.4em', fontWeight: 'bold' }}>${pricediscounted}</span>
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

export default ProductPage;

