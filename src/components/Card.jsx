import React from 'react';

function Card({card, onCardClick}) {

  const handleClick = () => {
    onCardClick(card)
  }

  return (
    <li className="elements__card">
      <img onClick={handleClick} src={card.link} alt={card.name} className="elements__photo"/>
      <h3 className="elements__title">{card.name}</h3>
      <div className="elements__like-info">
        <button className="elements__like button button_opacity_high" type="button"></button>
        <span className="elements__likes-counter">{card.likes.length}</span>
      </div>
      <button className="elements__bin button button_opacity_high" type="button"></button>
    </li>
  );
}

export default Card;