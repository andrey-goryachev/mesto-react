import React, {useRef, useState} from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const inputAvatar = useRef()
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar(inputAvatar.current.value);
  };

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_content_avatar"
        ref={inputAvatar}
        id="profile-avatar"
        name="avatar"
        type="url"
        value={value}
        onChange={(e) => {setValue(e.target.value)}}
        // defaultValue=""
        placeholder="Ссылка на аватар"
        aria-label="Заполнить ссылку на аватар"
        required
      />
      <span className="popup__error profile-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;