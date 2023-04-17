function PopupWithForm({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  children,
  onSubmit,
}) {
  return (
    <div className={`popup popup_type_${name}` + (isOpen && " popup_opened")}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button className="popup__save-button" type="submit">
            {buttonText}
          </button>
        </form>
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;