import React from 'react';

const Card = ({ title, image, price, description }) => {
  return (
    
    <div style={{ 
      border: '1px solid black', 
      padding: '10px', 
      margin: '10px', 
      width: '250px', 
      textAlign: 'center',
      borderRadius: '10px'
    }
    }
    >
      <img src={image} alt={title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
      <h2>{title}</h2>
      <h3>Price: ${price}</h3>
      <p style={{ fontSize: '14px', color: 'gray' }}>{description}</p>
    </div>
  );
}

export default Card;
