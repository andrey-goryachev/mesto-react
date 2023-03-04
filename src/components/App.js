import logoPath from '../images/logo.svg'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  return (
    <div className="page__container">
      <Header logoPath={logoPath}/>
      <Main />
      <Footer />
      <div className="popup popup_content_profile">
        <div className="popup__container">
          <button className="popup__cross button button_opacity_medium" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="edit-profile">
            <input
              className="popup__input popup__input_content_name"
              id="profile-name"
              name="name"
              type="text"
              value=""
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
              value=""
              placeholder="О себе"
              aria-label="Заполнить описание"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error profile-description-error"></span>
            <button className="popup__submit button button_opacity_light" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_content_card">
        <div className="popup__container">
          <button className="popup__cross button button_opacity_medium" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="edit-card">
            <input
              className="popup__input popup__input_content_place"
              id="card-place"
              name="place"
              type="text"
              value=""
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
              value=""
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error image-error"></span>
            <button className="popup__submit button button button_opacity_light" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_content_photo">
        <div className="popup__container popup__container_content_photo">
          <button className="popup__cross button button_opacity_medium" type="button"></button>
          <img src="src#" alt="" className="popup__photo"/>
          <p className="popup__description"></p>
        </div>
      </div>
      <div className="popup popup_content_delete-card">
        <div className="popup__container popup__container_content_delete-card">
          <button className="popup__cross button button_opacity_medium" type="button"></button>
          <h2 className="popup__title popup__title_content_delete-card">Вы уверены?</h2>
          <button className="popup__submit popup__submit_content_delete-card button button button_opacity_light"
                  type="button">Да
          </button>
        </div>
      </div>
      <div className="popup popup_content_avatar">
        <div className="popup__container popup__container_content_avatar">
          <button className="popup__cross button button_opacity_medium" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="profile-avatar">
            <input
              className="popup__input popup__input_content_avatar"
              id="profile-avatar"
              name="avatar"
              type="url"
              value=""
              placeholder="Ссылка на аватар"
              aria-label="Заполнить ссылку на аватар"
              required
            />
            <span className="popup__error profile-avatar-error"></span>
            <button className="popup__submit popup__submit_content_avatar button button_opacity_light"
                    type="submit">Сохранить
            </button>
          </form>
        </div>
      </div>
      <template id="elements__card">
        <li className="elements__card">
          <img src="src#" alt="" className="elements__photo"/>
          <h3 className="elements__title"></h3>
          <div className="elements__like-info">
            <button className="elements__like button button_opacity_high" type="button"></button>
            <span className="elements__likes-counter">1</span>
          </div>
          <button className="elements__bin button button_opacity_high" type="button"></button>
        </li>
      </template>
    </div>
  )
}

export default App;
