import React from 'react';

const RefundPolicy = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px', textAlign: 'center' }}>

    
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px' }}>Refund Policy</h1>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '16px' }}>
        At DK Bookfold, we value our customers and strive to provide the best quality in our handcrafted book-folding artworks. 
        However, please be informed that we adhere to a <b>strict no-refund policy</b>.
      </p>


      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>🚫 No Refunds</h2>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '12px' }}>
        All purchases made on our website are <b>final and non-refundable</b>. We do not issue refunds for:
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '0', color: '#4B5563', fontSize: '1rem', lineHeight: '1.6' }}>
          <li>Last-minute purchases</li>
          <li>Changes of heart</li>
          <li>Dissatisfaction with the product or service</li>
          <li>Partial <b>Cash on Delivery (COD)</b> orders</li>
        </ul>
      </div>


      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>🛒 Order Verification</h2>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '12px' }}>
        We strongly encourage customers to <b>review their order carefully</b> before purchasing. 
        If you have any **questions or concerns**, please feel free to contact us before placing your order.
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>📞 Need Assistance?</h2>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6' }}>
        If you require further clarification about our refund policy, please reach out to us at <strong>8320863774</strong>.
      </p>

      <p style={{ fontSize: '1rem', color: '#4B5563', marginTop: '16px', lineHeight: '1.6' }}>
        We appreciate your support and understanding of our policies. Thank you for choosing DK Bookfold!
      </p>

    </div>
  );
};

export default RefundPolicy;
