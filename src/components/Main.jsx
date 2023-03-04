import React from 'react';

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img src="src#" alt="Фото профиля" className="profile__avatar"/>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper-title">
            <h1 className="profile__title"></h1>
            <button className="
          profile__button
          profile__button_function_edit
          button
          button_opacity_medium" type="button" aria-label="Редактировать"></button>
          </div>
          <p className="profile__text"></p>
        </div>
        <button className="
        profile__button
        profile__button_function_add
        button
        button_opacity_medium" type="button" aria-label="Добавить место"></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;