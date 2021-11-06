// массив изначальных карточек
export const primordialCards = [
    {
        name: "Архыз",
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: "Архыз",
    },
    {
        name: "Челябинская область",
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: "Челябинская область",
    },
    {
        name: "Иваново",
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: "Иваново",
    },
    {
        name: "Камчатка",
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: "Камчатка",
    },
    {
        name: "Холмогорский район",
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: "Холмогорский район",
    },
    {
        name: "Байкал",
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: "Байкал",
    },
]
// поля форм попапов
export const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    buttonSelector: ".popup__button",
    inputErrorClass: "popup__form-error",
}
export const popup = document.querySelectorAll(".popup")
export const formNewMesto = document.forms.formNewMesto //форма "Новое место"
export const clickProfileEdit = document.querySelector(".profile__edit") //находим кнопку "редактировать профиль"
export const popupProfileEdit = document.querySelector(".popup-edit-profile") //находим попап "редактировать профиль"
export const clickProfileAdd = document.querySelector(".profile__add") //находим кнопку "добавить новое место"
export const newItemForm = document.querySelector(".new-item-form") //находим попап "добавить новое место"
export const profileName = document.querySelector(".profile__name") //находим имя h1
export const profileSubname = document.querySelector(".profile__subname") //находим профессию
//карточки
export const cardsList = document.querySelector(".elements-grid") //находим список карточек
export const cardTemplate = document.querySelector(".cards-temlate").content //находим шаблон карточки
// Получаем ссылки на элементы модалки для просмотра увеличенных изображений
export const imgBigPopap = document.querySelector(".img-card-big")
export const modalImageElement = imgBigPopap.querySelector(".popup__image")
export const captionTextImg = imgBigPopap.querySelector(".popup__caption")
export const nameInput = document.querySelector("[name=nameInput]")
export const jobInput = document.querySelector("[name=jobInput]")
export const mestoTitle = formNewMesto.querySelector("[name=mesto-title]");
export const mestoLink = formNewMesto.querySelector("[name=mesto-link]");
export const formProfileEdit = popupProfileEdit.querySelector(config.formSelector);
// выберем все кнопки лайка
export const cardLikes = cardsList.querySelectorAll(".card__like");
export const newItem = cardTemplate.querySelector(".card").cloneNode(true);
export const cardImage = newItem.querySelector(".card__image")