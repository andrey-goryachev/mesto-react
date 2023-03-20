import React from 'react';

function PopupWithForm({title, name, isOpen, onClose, buttonText, onSubmit, children}) {
  return (
    <div className={`popup popup_content_${name} ${isOpen ? ' popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__cross button button_opacity_medium"
          type="button" />
        <h2 className="popup__title">{title}</h2>
        <form onSubmit={onSubmit} className="popup__form" name={`edit-${name}`}>
          {children}
          <button
            className="popup__submit button button_opacity_light"
            type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;