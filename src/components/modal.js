import { config } from "./constants";

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