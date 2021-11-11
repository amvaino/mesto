//import { popupProfileEdit, newItemForm, imgBigPopap } from './constants.js';
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