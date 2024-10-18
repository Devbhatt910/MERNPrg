import React from 'react';
import '../css/cardsection.css';
import foodImg from '../images/images.png'
import dine from '../images/images2.jpg'

const CardSection = () => {
  const cards = [
    {
      title: 'Order Online',
      description: 'Stay home and order to your doorstep',
      imageUrl: foodImg
    },
    {
      title: 'Best Home Foods',
      description: "Enjoy Some of the BEst Home Made foods Directly on Your DoorStep",
      imageUrl: dine
    },
    
  ];

  return (
    <div className="card-section">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imageUrl} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
