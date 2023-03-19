import logoPath from '../images/logo.svg'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {useEffect, useState} from "react";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }
  const handleCardClick = (card) => {
    setSelectedCard(card)
  }
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({})
  }

  useEffect(() => {
    api.getProfile()
      .then(profile => {
        setCurrentUser(profile)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header logoPath={logoPath}/>

        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer/>

        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            className="popup__input popup__input_content_name"
            id="profile-name"
            name="name"
            type="text"
            // value=""
            defaultValue=""
            placeholder="Имя"
            aria-label="Заполнить имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__error profile-name-error"></span>
          <input
            className="popup__input popup__input_content_description"
            id="profile-description"
            name="about"
            type="text"
            // value=""
            defaultValue=""
            placeholder="О себе"
            aria-label="Заполнить описание"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__error profile-description-error"></span>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
        >
          <input
            className="popup__input popup__input_content_place"
            id="card-place"
            name="place"
            type="text"
            // value=""
            defaultValue=""
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__error card-place-error"></span>
          <input
            className="popup__input popup__input_content_link"
            id="image"
            name="image"
            type="url"
            // value=""
            defaultValue=""
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error image-error"></span>
        </PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            className="popup__input popup__input_content_avatar"
            id="profile-avatar"
            name="avatar"
            type="url"
            // value=""
            defaultValue=""
            placeholder="Ссылка на аватар"
            aria-label="Заполнить ссылку на аватар"
            required
          />
          <span className="popup__error profile-avatar-error"></span>
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="delete-card" buttonText="Да"/>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
