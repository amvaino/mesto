import { popupProfileEdit, newItemForm, imgBigPopap } from './constants.js';
//ПОПАПы открытие-закрытие
export function openPopup(popup) {
    popup.classList.add("popup_opened");
    //закрытие попапа по нажатию кнопки esc на клавиатуре
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closePopup(imgBigPopap);
            closePopup(newItemForm);
            closePopup(popupProfileEdit);
        }
    })
}

export function closePopup(popup) {
    popup.classList.remove("popup_opened");
    //закрытие попапа по нажатию кнопки esc на клавиатуре
    document.removeEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closePopup(imgBigPopap);
            closePopup(newItemForm);
            closePopup(popupProfileEdit);
        }
    })
}

