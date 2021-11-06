import { closePopup } from './modal.js';
import { renderCard } from './card.js';
import { formNewMesto, popupProfileEdit,
    newItemForm, profileName, profileSubname, mestoTitle, mestoLink, jobInput,
     nameInput, formProfileEdit } from './constants.js';
// Обработчик отправки формы "новое место"
export function handleMestoForm(evt) {
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