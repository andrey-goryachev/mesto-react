import React, {useContext} from 'react';
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({onEditProfile,
                onEditAvatar,
                onAddPlace,
                onCardClick,
                onCardLike,
                onCardDelete,
                cards}) {
  const currenUser = useContext(CurrentUserContext)

  const cardsElements = cards.map((card) => (
    <li
      className="elements__card"
      key={card._id}
    >
      <Card
        card={card}
        onCardClick={onCardClick}
        onCardLike={onCardLike}
        onCardDelete={onCardDelete}
      />
    </li>
  ))

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
          <img src={currenUser.avatar} alt="Фото профиля" className="profile__avatar"/>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper-title">
            <h1 className="profile__title">{currenUser.name}</h1>
            <button
              onClick={onEditProfile}
              className="
                profile__button
                profile__button_function_edit
                button
                button_opacity_medium"
              type="button"
              aria-label="Редактировать"></button>
          </div>
          <p className="profile__text">{currenUser.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="
            profile__button
            profile__button_function_add
            button
            button_opacity_medium"
          type="button"
          aria-label="Добавить место"></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cardsElements}
        </ul>
      </section>
    </main>
  );
}

export default Main;