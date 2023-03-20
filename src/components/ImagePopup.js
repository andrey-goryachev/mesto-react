import React from 'react';

function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_content_photo ${card.link ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_content_photo">
        <button onClick={onClose} className="popup__cross button button_opacity_medium" type="button"></button>
        <img src={card.link} alt={card.name} className="popup__photo"/>
        <p className="popup__description">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;