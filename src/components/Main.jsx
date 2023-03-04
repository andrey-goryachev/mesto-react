import React, {useEffect, useState} from 'react';
import {api} from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState('Жак Ив Кусто')
  const [userDescription, setUserDescription] = useState('исследователь океана')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getProfile()
      .then(profile => {
        setUserName(profile.name)
        setUserDescription(profile.about)
        setUserAvatar(profile.avatar)
      })
      .catch(err => {console.log(err)})
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then(cards => {setCards(cards)})
      .catch(err => {console.log(err)})
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="Фото профиля" className="profile__avatar"/>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper-title">
            <h1 className="profile__title">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              className="
                profile__button
                profile__button_function_edit
                button
                button_opacity_medium"
              type="button"
              aria-label="Редактировать"></button>
          </div>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
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
          {
            cards.map((card) => (
              <Card key={card._id} card={card} onCardClick={props.onCardClick} />
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;