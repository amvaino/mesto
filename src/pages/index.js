import './index.css';
import { createCard } from "../components/card.js";
import { enableValidation } from "../components/validate.js";
import { primordialCards, clickProfileEdit, popupProfileEdit, clickProfileAdd, newItemForm, cardsList,
      imgBigPopap, profileName, nameInput, jobInput, profileSubname, formProfileEdit, mestoTitle, mestoLink,
       submitBtnFormProfileEdit, submitBtnNewItemForm, formNewMesto } from '../components/constants.js';
import { openPopup, closePopup } from "../components/modal.js";
// вызваем функцию валидации input
enableValidation();

popupProfileEdit.addEventListener("submit",  handleProfileForm);
newItemForm.addEventListener("submit", handleMestoForm);

clickProfileEdit.addEventListener("click", () => {
    openPopup(popupProfileEdit);
    //отключаем кнопку перед открытием модального окна
    submitBtnFormProfileEdit.disabled = true;
});

clickProfileAdd.addEventListener("click", () => {
    openPopup(newItemForm);
    //отключаем кнопку перед открытием модального окна
    submitBtnNewItemForm.disabled = true;
});

popupProfileEdit.addEventListener('click', closePopupByClick);
newItemForm.addEventListener('click', closePopupByClick);
imgBigPopap.addEventListener('click', closePopupByClick);

function closePopupByClick(event) {
    if(event.target.classList.contains('popup__close') ||
       event.target.classList.contains('popup')
    ) {
      closePopup(event.target.closest('.popup'));
    }
}

//Выводим массив карточек
primordialCards.forEach(function newItem(point) {
    const newItem = createCard(point);
    cardsList.prepend(newItem);
});
//Выводим новую карточку
function renderCard(point) {
    const newItem = createCard(point);
    cardsList.prepend(newItem);
}
// Обработчик отправки формы "новое место"
function handleMestoForm(evt) {
    // Отменим стандартное поведение
    evt.preventDefault();
    //Получения введенных значений в поля
    const name = mestoTitle.value;
    const link = mestoLink.value;
    const point = {
        name,
        link,
        alt: name,
    };
    renderCard(point);
    closePopup(newItemForm);
    formNewMesto.reset(); //очистка всей формы "Новое место" после submit
}
// Обработчик отправки формы "редактировать профиль"
export function handleProfileForm(evt) {
    // Отменим стандартное поведение
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubname.textContent = jobInput.value;
    formProfileEdit.reset(); //очистка всей формы "Редактировать профиль" после submit
    closePopup(popupProfileEdit);
}