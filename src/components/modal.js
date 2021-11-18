
//ПОПАПы открытие-закрытие
export function openPopup(popup) {
    popup.classList.add("popup_opened");
    //добавить слушатель
    addListener();

}
export function closePopup(popup) {
    popup.classList.remove("popup_opened");
    //удалить слушатель
    removeListener();
}
export function closePopupByClick(event) {
    if(event.target.classList.contains('popup__close') ||
       event.target.classList.contains('popup')
    ) {
      closePopup(event.target.closest('.popup'));
    }
}
//функция на слушатель при открытии попапа
function addListener() {
    document.addEventListener('keydown', closePopupClickEsc);
}
//функция удаления слушателя  
function removeListener() {
    document.removeEventListener('keydown', closePopupClickEsc);
}
//функция закрытия попапа по нажатию esc  
function closePopupClickEsc(event) {
    if (event.code === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}
//функция меняет надпись на кнопке в момент загрузки
export function showingLoadingClosing(btn) {
    const formButton = btn;
    const text = formButton.textContent;
    return function (isLoading) {
      if (isLoading) {
        formButton.textContent = 'Сохранение...';
      } else {
        formButton.textContent = text;
      }
    };
  }
  export function handleAvatarForm(evt) {
    // Отменим стандартное поведение
    evt.preventDefault();
    const formButton = formNewAvatar.querySelector(config.buttonSelector);
    const showLoading = showingLoadingClosing(formButton);
    showLoading(true);
    profileAvatarImg.src = avatarLinkInput.value;
    dataAvatar({
        avatar: avatarLinkInput.value,
      }).then(() => {
        submitBtnNewAvatar.disabled = true;
        formNewAvatar.reset();
        closePopup(popupAvatar);
      })
      .catch(showErrorOutput)
      .finally(() => {
        showLoading(false);
      });
}