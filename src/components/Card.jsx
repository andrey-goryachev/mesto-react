import React, {useContext} from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({card, onCardClick}) {
  const user = useContext(CurrentUserContext)
  const isOwner = user._id === card.owner._id
  const isLiked = card.likes.some(id => id === user._id)
  const cardLikeButtonClassName = `elements__like button button_opacity_high ${isLiked ? 'elements__like_active' : ''}`
  const handleClick = () => {
    onCardClick(card)
  }

  return (
    <li className="elements__card">
      <img onClick={handleClick} src={card.link} alt={card.name} className="elements__photo"/>
      <h3 className="elements__title">{card.name}</h3>
      <div className="elements__like-info">
        <button className={cardLikeButtonClassName} type="button"></button>
        <span className="elements__likes-counter">{card.likes.length}</span>
      </div>
      {isOwner && <button className="elements__bin elements__bin_active button button_opacity_high" type="button"></button>}
    </li>
  );
}

export default Card;