import './index.css';
import { createCard } from "../components/card.js";
import {handleMestoForm, handleProfileForm } from "../components/script.js"
import { enableValidation } from "../components/validate.js";
import { primordialCards, clickProfileEdit, popupProfileEdit, clickProfileAdd, newItemForm, cardsList,
      imgBigPopap, config } from '../components/constants.js';
import { openPopup, closePopup } from "../components/modal.js";
// вызваем функцию валидации input
enableValidation();

popupProfileEdit.addEventListener("submit",  handleProfileForm);
newItemForm.addEventListener("submit", handleMestoForm);

clickProfileEdit.addEventListener("click", () => {
    openPopup(popupProfileEdit);
    //отключаем кнопку перед открытием модального окна
    popupProfileEdit.querySelector(config.buttonSelector).disabled = true;
});

clickProfileAdd.addEventListener("click", () => {
    openPopup(newItemForm);
    //отключаем кнопку перед открытием модального окна
    newItemForm.querySelector(config.buttonSelector).disabled = true;
});

popupProfileEdit.addEventListener("click", (event) => {
    if (
        event.target.classList.contains("popup__close") ||
        event.target.classList.contains("popup")
    )
        closePopup(popupProfileEdit);
});

newItemForm.addEventListener("click", (event) => {
    if (
        event.target.classList.contains("popup__close") ||
        event.target.classList.contains("popup")
    )
        closePopup(newItemForm);
});

imgBigPopap.addEventListener("click", (event) => {
    if (
        event.target.classList.contains("popup__close") ||
        event.target.classList.contains("popup")
    )
        closePopup(imgBigPopap);
});

//Выводим массив карточек
primordialCards.forEach(function newItem(point) {
    const newItem = createCard(point);
    cardsList.prepend(newItem);
});
