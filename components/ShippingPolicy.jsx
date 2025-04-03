import React from 'react';

const ShippingPolicy = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px', textAlign: 'center' }}>
      

      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px' }}>Shipping Policy</h1>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '16px' }}>
        At DK Bookfold, we ensure secure and timely delivery of our handcrafted book-folding artworks. 
        Please review our shipping policies below to understand our delivery timelines and processes.
      </p>


      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>📦 Standard Shipping</h2>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '12px' }}>
        Orders are processed and shipped within <strong>10-15 working days</strong> after confirmation.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '0', color: '#4B5563', fontSize: '1rem', lineHeight: '1.6' }}>
          <li>Delivery is available from <strong>Monday to Friday</strong>, excluding public holidays.</li>
          <li>Tracking details will be provided once your order is dispatched.</li>
          <li>Delivery delays may occur due to unforeseen circumstances.</li>
        </ul>
      </div>


      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>⚡ Express Shipping</h2>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '12px' }}>
        Faster delivery option available, with orders arriving within <strong>7-10 working days</strong>.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '0', color: '#4B5563', fontSize: '1rem', lineHeight: '1.6' }}>
          <li>Orders placed before 12:00 PM are dispatched on the same day.</li>
          <li>Express shipping is available only on weekdays.</li>
          <li>Tracking information is sent upon dispatch.</li>
        </ul>
      </div>

 
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>📅 Specific Day Delivery</h2>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '12px' }}>
        Choose a delivery date at least <strong>10 days after order confirmation</strong>.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '0', color: '#4B5563', fontSize: '1rem', lineHeight: '1.6' }}>
          <li>We strive to deliver as close to your chosen date as possible.</li>
          <li>Delays due to weather, customs, or other issues may occur.</li>
          <li>Tracking details will be provided upon shipment.</li>
        </ul>
      </div>


      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>📞 Need Help?</h2>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6' }}>
        If you have any questions or concerns regarding your delivery, our customer service team is here to assist. 
        Please reach out to us at <strong>8320863774</strong>.
      </p>

    </div>
  );
};

export default ShippingPolicy;
