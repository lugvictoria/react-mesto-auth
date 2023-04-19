import React from "react";

import Card from "./Card.js";
import Header from "./Header";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header isWrappable={true}>
        <p className="header__menu-item">email@email.ru</p>
        <button href="#" className="header__menu-item">Выйти</button>
      </Header>
      <main>
        <section className="profile content__element">
          <div className="profile__table">
            <div className="profile__avatar-outside">
              <img
                className="profile__avatar-image"
                src={currentUser.avatar}
                alt="аватар"
              />
              <button
                className="profile__avatar-button"
                type="button"
                aria-label="Изменить аватар"
                onClick={onEditAvatar}
              >
              </button>
            </div>
            <div className="profile__info">
              <div className="profile__edit">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button
                  className="profile__button-edit"
                  type="button"
                  aria-label="Редактировать профиль"
                  onClick={onEditProfile}
                ></button>
              </div>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button
              className="profile__button-add"
              type="button"
              aria-label="Добавить"
              onClick={onAddPlace}
            ></button>
          </div>
        </section>

        <section className="cards content__element">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;