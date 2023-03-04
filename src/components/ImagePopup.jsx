import React from 'react';

function ImagePopup(props) {
  return (
    <div className="popup popup_content_photo">
      <div className="popup__container popup__container_content_photo">
        <button className="popup__cross button button_opacity_medium" type="button"></button>
        <img src="src#" alt="" className="popup__photo"/>
        <p className="popup__description"></p>
      </div>
    </div>
  );
}

export default ImagePopup;