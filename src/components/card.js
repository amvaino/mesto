import { cardTemplate, cardLikes, modalImageElement, captionTextImg, imgBigPopap, cardsList } from './constants.js'
import { openPopup } from './modal.js';
//функция для инициализации карточки
export function createCard(point) {
    const newItem = cardTemplate.querySelector(".card").cloneNode(true);
    //обрабатываем лайк
    newItem
        .querySelector(".card__like")
        .addEventListener("click", function (evt) {
            evt.target.classList.toggle("card__like_active");
        });
    //удаляем карточку
    const deleteButton = newItem.querySelector(".card__delete-icon");
    deleteButton.addEventListener("click", function () {
        newItem.remove();
    });
    newItem.querySelector(".card__title").textContent = point.name;
    newItem.querySelector(".card__image").src = point.link;
    newItem.querySelector(".card__image").alt = point.name;
    //клик по картинке
    newItem
        .querySelector(".card__image")
        .addEventListener("click", function (evt) {
            modalImageElement.src = point.link;
            modalImageElement.alt = point.alt;
            captionTextImg.textContent = point.alt;
            openPopup(imgBigPopap);
        });
    return newItem;
}