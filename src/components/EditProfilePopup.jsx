import React, {useContext, useEffect, useState} from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser])
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
    onClose()
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_content_name"
        onChange={handleName}
        id="profile-name"
        name="name"
        type="text"
        value={name}
        placeholder="Имя"
        aria-label="Заполнить имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__error profile-name-error"></span>
      <input
        className="popup__input popup__input_content_description"
        onChange={handleDescription}
        id="profile-description"
        name="about"
        type="text"
        value={description}
        placeholder="О себе"
        aria-label="Заполнить описание"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__error profile-description-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;