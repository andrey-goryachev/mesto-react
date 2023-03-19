import React, {
  useContext,
  // useEffect,
  // useState
} from 'react';
// import {api} from "../utils/Api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
  // const [userName, setUserName] = useState('Жак Ив Кусто')
  // const [userDescription, setUserDescription] = useState('исследователь океана')
  // const [userAvatar, setUserAvatar] = useState('')
  // const [cards, setCards] = useState([])
  const currenUser = useContext(CurrentUserContext)

  // useEffect(() => {
  //   api.getProfile()
  //     .then(profile => {
  //       setUserName(profile.name)
  //       setUserDescription(profile.about)
  //       setUserAvatar(profile.avatar)
  //     })
  //     .catch(err => {console.log(err)})
  // }, [])

  // useEffect(() => {
  //   api.getInitialCards()
  //     .then(cards => {props.setCards(cards)})
  //     .catch(err => {console.log(err)})
  // }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
          <img src={currenUser.avatar} alt="Фото профиля" className="profile__avatar"/>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper-title">
            <h1 className="profile__title">{currenUser.name}</h1>
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
          <p className="profile__text">{currenUser.about}</p>
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
            props.cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;